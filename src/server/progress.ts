// Résultats et progrès (RES-01) : séries de même nature, jamais une moyenne opaque.
import { and, desc, eq, gte, inArray, sql } from "drizzle-orm";
import type { DB } from "@/db";
import { attempts, masterySnapshots, questionVersions, responses, reviewItems, scoreVersions, skills, subjects } from "@/db/schema";
import { estimateSkill } from "@/lib/estimation";
import { computeMastery, MASTERY_LABELS, type MasteryStatus } from "@/lib/mastery";
import { assertRole, type Actor } from "./auth";
import { notFound } from "./errors";
import { getActivePlan } from "./plan";

export const KIND_LABELS: Record<string, string> = {
  practice: "Entraînement libre",
  review: "Révision",
  diagnostic: "Diagnostic",
  exam_strict: "Concours blanc strict",
  exam_pedagogic: "Simulation pédagogique",
};

export async function getProgress(db: DB, actorIn: Actor | null) {
  const actor = assertRole(actorIn, ["student"]);
  const rows = await db
    .select({ a: attempts, s: scoreVersions })
    .from(attempts)
    .leftJoin(scoreVersions, eq(scoreVersions.attemptId, attempts.id))
    .where(and(eq(attempts.userId, actor.id), inArray(attempts.status, ["finalized", "expired"])))
    .orderBy(attempts.startedAt);
  // Dernière version de score par tentative.
  const latest = new Map<string, (typeof rows)[number]>();
  for (const r of rows) if (!latest.has(r.a.id) || (r.s && (latest.get(r.a.id)!.s?.version ?? 0) < r.s.version)) latest.set(r.a.id, r);

  const series: Record<string, { attemptId: string; date: string; title: string; subject: string | null; pct: number; answered: number; total: number }[]> = {};
  for (const { a, s } of latest.values()) {
    if (!s) continue;
    (series[a.kind] ??= []).push({
      attemptId: a.id,
      date: a.startedAt.toISOString(),
      title: ((a.meta as { title?: string }).title ?? KIND_LABELS[a.kind]) as string,
      subject: a.subjectCode,
      pct: s.maxPoints ? Math.round((s.points / s.maxPoints) * 100) : 0,
      answered: s.answered,
      total: s.total,
    });
  }

  const subs = await db.select().from(subjects).orderBy(subjects.position);
  const allSkills = await db.select().from(skills).orderBy(skills.position);
  const snaps = await db.select().from(masterySnapshots).where(eq(masterySnapshots.userId, actor.id));
  const snapBy = new Map(snaps.map((s) => [s.skillId, s]));
  const bySubject = subs
    .map((sub) => ({
      code: sub.code,
      name: sub.name,
      skills: allSkills
        .filter((k) => k.subjectCode === sub.code && snapBy.has(k.id))
        .map((k) => {
          const m = snapBy.get(k.id)!;
          return { id: k.id, name: k.name, status: m.status as MasteryStatus, label: MASTERY_LABELS[m.status as MasteryStatus], score: m.autonomousAttempts >= 3 ? m.score : null, autonomousAttempts: m.autonomousAttempts, families: m.families, distinctDays: m.distinctDays };
        }),
    }))
    .filter((s) => s.skills.length > 0);

  return { series, bySubject, weekly: await weeklyReport(db, actor.id) };
}

/** Bilan hebdomadaire : ce qui progresse, ce qui bloque, ce qu'il faut faire ensuite. */
export async function weeklyReport(db: DB, userId: string) {
  const since = new Date(Date.now() - 14 * 86_400_000);
  const rows = await db
    .select({ at: responses.receivedAt, ok: responses.isCorrect, hints: responses.hintsUsed, skillIds: questionVersions.skillIds, kind: attempts.kind })
    .from(responses)
    .innerJoin(attempts, eq(attempts.id, responses.attemptId))
    .innerJoin(questionVersions, eq(questionVersions.id, responses.questionVersionId))
    .where(and(eq(attempts.userId, userId), gte(responses.receivedAt, since), sql`${responses.isCorrect} is not null`));
  const cut = Date.now() - 7 * 86_400_000;
  const stats = new Map<string, { prev: [number, number]; cur: [number, number] }>();
  for (const r of rows) {
    if (r.hints > 0 || r.kind === "exam_pedagogic") continue;
    for (const s of r.skillIds) {
      const e = stats.get(s) ?? { prev: [0, 0], cur: [0, 0] };
      const bucket = r.at.getTime() >= cut ? e.cur : e.prev;
      bucket[0] += r.ok ? 1 : 0;
      bucket[1] += 1;
      stats.set(s, e);
    }
  }
  const allSkills = new Map((await db.select().from(skills)).map((s) => [s.id, s.name]));
  const progressing: string[] = [];
  for (const [id, e] of stats) {
    if (e.cur[1] >= 3 && e.prev[1] >= 3 && e.cur[0] / e.cur[1] - e.prev[0] / e.prev[1] >= 0.15) {
      progressing.push(`${allSkills.get(id)} : ${Math.round((e.prev[0] / e.prev[1]) * 100)} % → ${Math.round((e.cur[0] / e.cur[1]) * 100)} %`);
    } else if (e.cur[1] >= 3 && e.prev[1] === 0 && e.cur[0] / e.cur[1] >= 0.75) {
      progressing.push(`${allSkills.get(id)} : ${e.cur[0]}/${e.cur[1]} réussies cette semaine`);
    }
  }
  const stuck = await db.select().from(reviewItems).where(and(eq(reviewItems.userId, userId), eq(reviewItems.status, "open"), gte(reviewItems.consecutiveFailures, 2)));
  const fragile = await db.select().from(masterySnapshots).where(and(eq(masterySnapshots.userId, userId), eq(masterySnapshots.status, "fragile")));
  const blocking = [
    ...fragile.map((f) => `${allSkills.get(f.skillId)} : notion fragile`),
    ...stuck.map((s) => `${allSkills.get(s.skillId)} : ${s.consecutiveFailures} erreurs de suite, revoir le cours`),
  ];
  const plan = await getActivePlan(db, userId);
  const today = new Date().toISOString().slice(0, 10);
  const next = (plan?.tasks ?? []).filter((t) => !t.done && t.date >= today).slice(0, 3).map((t) => t.reason);
  return { progressing: [...new Set(progressing)], blocking: [...new Set(blocking)], next, answeredThisWeek: rows.filter((r) => r.at.getTime() >= cut).length };
}

/** Remonter d'un indicateur aux tentatives qui l'expliquent. */
export async function skillDrilldown(db: DB, actorIn: Actor | null, skillId: string) {
  const actor = assertRole(actorIn, ["student"]);
  const skill = await db.query.skills.findFirst({ where: eq(skills.id, skillId) });
  if (!skill) throw notFound("Compétence");
  const rows = await db
    .select({ r: responses, a: attempts, q: questionVersions })
    .from(responses)
    .innerJoin(attempts, eq(attempts.id, responses.attemptId))
    .innerJoin(questionVersions, eq(questionVersions.id, responses.questionVersionId))
    .where(and(eq(attempts.userId, actor.id), sql`${questionVersions.skillIds} @> ${JSON.stringify([skillId])}::jsonb`))
    .orderBy(desc(responses.receivedAt));
  const counted = rows.filter((x) => x.r.isCorrect !== null && x.a.status !== "invalidated" && x.q.status !== "suspended" && x.q.status !== "retired");
  const events = counted.map((x) => ({ at: x.r.receivedAt, correct: !!x.r.isCorrect, autonomous: x.r.hintsUsed === 0 && x.a.kind !== "exam_pedagogic", familyId: x.q.familyId, difficulty: x.q.difficulty }));
  const m = computeMastery(events);
  return {
    skill,
    mastery: m,
    estimate: estimateSkill(events),
    responses: rows.map((x) => ({
      attemptId: x.a.id,
      kind: x.a.kind,
      kindLabel: KIND_LABELS[x.a.kind],
      at: x.r.receivedAt.toISOString(),
      correct: x.r.isCorrect,
      aided: x.r.hintsUsed > 0 || x.a.kind === "exam_pedagogic",
      withdrawn: x.q.status === "suspended" || x.q.status === "retired",
      stem: x.q.stem,
      inProgress: x.a.status === "in_progress",
    })),
  };
}

/** Bilan du diagnostic : forces, lacunes probables, incertitude et trois premières actions. */
export async function diagnosticReport(db: DB, actorIn: Actor | null, attemptId: string) {
  const actor = assertRole(actorIn, ["student"]);
  const a = await db.query.attempts.findFirst({ where: eq(attempts.id, attemptId) });
  if (!a || a.userId !== actor.id || a.kind !== "diagnostic") throw notFound("Diagnostic");
  const rows = await db
    .select({ r: responses, q: questionVersions })
    .from(responses)
    .innerJoin(questionVersions, eq(questionVersions.id, responses.questionVersionId))
    .where(eq(responses.attemptId, a.id));
  const subs = new Map((await db.select().from(subjects)).map((s) => [s.code, s.name]));
  const qvs = await db.select().from(questionVersions).where(inArray(questionVersions.id, a.questionVersionIds));
  const planned = new Map<string, number>();
  for (const q of qvs) planned.set(q.subjectCode, (planned.get(q.subjectCode) ?? 0) + 1);
  const per = new Map<string, { ok: number; total: number; aided: number; lowConfidence: number }>();
  for (const { r, q } of rows) {
    const e = per.get(q.subjectCode) ?? { ok: 0, total: 0, aided: 0, lowConfidence: 0 };
    e.total++;
    if (r.isCorrect) e.ok++;
    if (r.hintsUsed > 0) e.aided++;
    if (r.confidence === 1 && r.isCorrect) e.lowConfidence++;
    per.set(q.subjectCode, e);
  }
  const subjectsReport = [...planned.entries()].map(([code, n]) => {
    const e = per.get(code) ?? { ok: 0, total: 0, aided: 0, lowConfidence: 0 };
    const rate = e.total ? e.ok / e.total : null;
    return {
      code,
      name: subs.get(code) ?? code,
      ok: e.ok,
      total: e.total,
      planned: n,
      aided: e.aided,
      lowConfidence: e.lowConfidence,
      rate,
      // Avec si peu de questions, l'estimation reste provisoire.
      uncertainty: e.total < 4 ? "élevée" : e.total < 8 ? "moyenne" : "faible",
      needsMore: e.total < n,
    };
  });
  const strengths = subjectsReport.filter((s) => s.rate !== null && s.rate >= 0.99 && s.aided === 0 && s.lowConfidence === 0).map((s) => s.name);
  const gaps = subjectsReport.filter((s) => s.rate !== null && s.rate < 0.5).map((s) => s.name);
  const plan = await getActivePlan(db, actor.id);
  const today = new Date().toISOString().slice(0, 10);
  const actions = (plan?.tasks ?? []).filter((t) => !t.done && t.date >= today).slice(0, 3);
  return { attempt: a, subjectsReport, strengths, gaps, actions, complete: a.status !== "in_progress" };
}
