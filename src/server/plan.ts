// Plan d'étude et écran Aujourd'hui (PLA-01, UX-01).
import { and, desc, eq } from "drizzle-orm";
import type { DB } from "@/db";
import { lessonViews, profiles, reviewItems, skills, studyPlans, subjects, type PlanTask } from "@/db/schema";
import { buildPlan, type PlannerResult } from "@/lib/planner";
import type { Mastery } from "@/lib/mastery";
import { pickDueReviews } from "@/lib/spaced";
import { assertRole, type Actor } from "./auth";
import { notFound } from "./errors";
import { masteryMap } from "./learning";
import { getPublishedConfig } from "./sessionConfig";

const todayIso = (d = new Date()) => d.toISOString().slice(0, 10);

async function plannerInputs(db: DB, userId: string, now: Date) {
  const profile = await db.query.profiles.findFirst({ where: eq(profiles.userId, userId) });
  if (!profile) throw notFound("Profil");
  const config = await getPublishedConfig(db, profile.examSessionCode);
  const openSubjects = (await db.select().from(subjects).where(eq(subjects.open, true))).filter(
    (s) => !s.isLanguage || s.code === "EN" || s.code === `LV-${profile.secondLanguage}`,
  );
  const codes = new Set(openSubjects.map((s) => s.code));
  const allSkills = (await db.select().from(skills)).filter((s) => codes.has(s.subjectCode));
  const snaps = await masteryMap(db, userId);
  const mastery = new Map<string, Mastery>();
  for (const [k, v] of snaps) {
    mastery.set(k, { score: v.autonomousAttempts < 3 ? null : v.score, provisional: v.status === "insufficient", status: v.status as Mastery["status"], autonomousAttempts: v.autonomousAttempts, families: v.families, distinctDays: v.distinctDays, explanation: "", observedRate: v.autonomousAttempts > 0 && v.autonomousAttempts < 3 ? v.score : null });
  }
  const views = await db.select().from(lessonViews).where(eq(lessonViews.userId, userId));
  const viewedLessons = new Set(views.map((v) => v.lessonId));
  const lessonsSeen = new Set(allSkills.filter((s) => viewedLessons.has(`L-${s.id}`)).map((s) => s.id));
  const open = await db.select().from(reviewItems).where(and(eq(reviewItems.userId, userId), eq(reviewItems.status, "open")));
  const due = pickDueReviews(open, now, profile.dailyReviewCap);
  const program = profile.targetPrograms[0];
  const coefficients = program ? (config.body.coefficients[program] ?? null) : null;
  const papers = config.body.papers.map((p) => ({ subject: p.subject === "LV" ? `LV-${profile.secondLanguage}` : p.subject, label: p.label, minutes: p.minutes }));
  return { profile, config, allSkills, mastery, lessonsSeen, due, coefficients, papers };
}

export async function computePlan(db: DB, userId: string, now = new Date()): Promise<PlannerResult & { previous: typeof studyPlans.$inferSelect | null }> {
  const i = await plannerInputs(db, userId, now);
  const previous = (await db.query.studyPlans.findFirst({ where: and(eq(studyPlans.userId, userId), eq(studyPlans.active, true)) })) ?? null;
  const result = buildPlan({
    today: now,
    examDate: i.config.body.examDate,
    availability: i.profile.availability,
    rhythm: i.profile.rhythm === "intensive" ? "intensive" : "regular",
    blockedPeriods: i.profile.blockedPeriods,
    skills: i.allSkills.map((s) => ({ id: s.id, subjectCode: s.subjectCode, name: s.name })),
    mastery: i.mastery,
    lessonsSeen: i.lessonsSeen,
    dueReviews: i.due.today.length,
    dailyReviewCap: i.profile.dailyReviewCap,
    papers: i.papers,
    coefficients: i.coefficients,
    keptTasks: previous?.tasks,
    timeExtensionFactor: i.profile.timeExtensionFactor,
  });
  if (i.due.backlog > 0) result.rationale.push(`${i.due.backlog} révision(s) en retard sont étalées sur les prochains jours pour respecter ton budget quotidien.`);
  return { ...result, previous };
}

export async function savePlan(db: DB, userId: string, tasks: PlanTask[], rationale: string[]) {
  return db.transaction(async (tx) => {
    const last = await tx.query.studyPlans.findFirst({ where: eq(studyPlans.userId, userId), orderBy: desc(studyPlans.version) });
    await tx.update(studyPlans).set({ active: false }).where(eq(studyPlans.userId, userId));
    const [row] = await tx.insert(studyPlans).values({ userId, version: (last?.version ?? 0) + 1, tasks, rationale, active: true }).returning();
    return row;
  });
}

export async function applyNewPlan(db: DB, actorIn: Actor | null) {
  const actor = assertRole(actorIn, ["student"]);
  const r = await computePlan(db, actor.id);
  if (r.status !== "ok") return r;
  await savePlan(db, actor.id, r.tasks, r.rationale);
  return r;
}

/** Retour à la version précédente du plan (les changements restent réversibles). */
export async function revertPlan(db: DB, actorIn: Actor | null) {
  const actor = assertRole(actorIn, ["student"]);
  const plans = await db.select().from(studyPlans).where(eq(studyPlans.userId, actor.id)).orderBy(desc(studyPlans.version)).limit(2);
  if (plans.length < 2) return false;
  await db.transaction(async (tx) => {
    await tx.update(studyPlans).set({ active: false }).where(eq(studyPlans.userId, actor.id));
    await tx.update(studyPlans).set({ active: true }).where(eq(studyPlans.id, plans[1].id));
    await tx.delete(studyPlans).where(eq(studyPlans.id, plans[0].id));
  });
  return true;
}

export async function markPlanTaskDone(db: DB, userId: string, taskId: string) {
  const plan = await db.query.studyPlans.findFirst({ where: and(eq(studyPlans.userId, userId), eq(studyPlans.active, true)) });
  if (!plan) return;
  const tasks = plan.tasks.map((t) => (t.id === taskId ? { ...t, done: true } : t));
  await db.update(studyPlans).set({ tasks }).where(eq(studyPlans.id, plan.id));
}

export async function getActivePlan(db: DB, userId: string) {
  return (await db.query.studyPlans.findFirst({ where: and(eq(studyPlans.userId, userId), eq(studyPlans.active, true)) })) ?? null;
}

/** Plan actif, régénéré automatiquement s'il est absent ou périmé (retour après absence). */
export async function ensurePlan(db: DB, userId: string) {
  let plan = await getActivePlan(db, userId);
  let note: string | null = null;
  const today = todayIso();
  if (!plan || !plan.tasks.some((t) => t.date >= today)) {
    const r = await computePlan(db, userId);
    if (r.status === "session_passed") return { plan: null, note: r.rationale[0], sessionPassed: true };
    if (plan) note = "Bon retour ! Le plan a été recalculé à partir d'aujourd'hui, sans rattraper toutes les activités manquées.";
    plan = await savePlan(db, userId, r.tasks, r.rationale);
  }
  return { plan, note, sessionPassed: false };
}

export async function getToday(db: DB, actorIn: Actor | null) {
  const actor = assertRole(actorIn, ["student"]);
  const profile = await db.query.profiles.findFirst({ where: eq(profiles.userId, actor.id) });
  if (!profile) throw notFound("Profil");
  const { plan, note, sessionPassed } = await ensurePlan(db, actor.id);
  const today = todayIso();
  const todays = plan?.tasks.filter((t) => t.date === today) ?? [];
  const pending = todays.filter((t) => !t.done);
  const diagnosticPending = !profile.diagnosticState.completedAt && !profile.diagnosticState.deferred;
  const skillRows = await db.select().from(skills);
  const skillName = new Map(skillRows.map((s) => [s.id, s.name]));
  const next = plan?.tasks.find((t) => t.date > today && !t.done) ?? null;
  return {
    profile,
    sessionPassed,
    note,
    diagnosticPending,
    diagnosticInProgress: !!profile.diagnosticState.attemptId && !profile.diagnosticState.completedAt,
    main: pending[0] ?? null,
    others: pending.slice(1, 3),
    doneToday: todays.filter((t) => t.done).length,
    totalToday: todays.length,
    minutesToday: todays.reduce((a, t) => a + t.minutes, 0),
    next,
    skillName: Object.fromEntries(skillName),
  };
}
