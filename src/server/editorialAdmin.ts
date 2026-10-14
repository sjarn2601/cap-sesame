// Administration éditoriale : cycle de validation, import par lots, contestations et recalculs (BAN-01, ADM-01, R07).
import { randomUUID } from "node:crypto";
import { and, desc, eq, gte, inArray, lt, ne, sql } from "drizzle-orm";
import { z } from "zod";
import type { DB } from "@/db";
import {
  attempts,
  auditEvents,
  contentReports,
  documentSetVersions,
  editorialEvents,
  lessonVersions,
  newsItems,
  questionVersions,
  responses,
  scoreVersions,
  skills,
  subjects,
  users,
} from "@/db/schema";
import { checkTransition, qualityChecks, type ContentStatus, type Issue } from "@/lib/editorial";
import { scoreQuestion, type ScoringRule } from "@/lib/scoring";
import { assertRole, type Actor } from "./auth";
import { AppError, badRequest, notFound } from "./errors";
import { audit } from "./audit";
import { retireOtherNewsVersions } from "./news";
import { recomputeMastery } from "./learning";

const STAFF = ["author", "reviewer", "admin"] as const;
type ContentType = "question" | "lesson" | "news" | "document_set";
const TABLES = { question: questionVersions, lesson: lessonVersions, news: newsItems, document_set: documentSetVersions } as const;

// ---------- Questions ----------

export const questionInput = z.object({
  questionId: z.string().regex(/^[A-Z0-9-]{3,40}$/, "Identifiant : majuscules, chiffres et tirets"),
  subjectCode: z.string().min(2),
  skillIds: z.array(z.string()).min(1),
  familyId: z.string().min(2),
  difficulty: z.number().int().min(1).max(3),
  format: z.enum(["single", "multiple", "numeric"]),
  stem: z.string().min(5).max(4000),
  options: z.array(z.object({ id: z.string().min(1).max(4), text: z.string().min(1).max(1000), correct: z.boolean(), justification: z.string().max(2000) })).max(8),
  numericAnswer: z.number().nullable().optional(),
  numericTolerance: z.number().nullable().optional(),
  explanation: z.string().max(6000),
  rule: z.string().max(1000),
  hints: z.array(z.string().max(1000)).max(3).default([]),
  timeSec: z.number().int().min(10).max(1800),
  references: z.array(z.string().max(300)).max(10),
  lessonAnchor: z.string().max(120).nullable().optional(),
  origin: z.enum(["human", "ai", "official_authorized"]).default("human"),
  rightsCleared: z.boolean().default(false),
  reserved: z.boolean().default(false),
});
export type QuestionInput = z.infer<typeof questionInput>;

async function issuesFor(db: DB, q: QuestionInput | typeof questionVersions.$inferSelect): Promise<Issue[]> {
  const others = await db.select({ questionId: questionVersions.questionId, stem: questionVersions.stem }).from(questionVersions).where(and(eq(questionVersions.subjectCode, q.subjectCode), ne(questionVersions.status, "retired")));
  const issues = qualityChecks({ ...q, numericAnswer: q.numericAnswer ?? null }, others);
  const known = await db.select({ id: skills.id }).from(skills).where(inArray(skills.id, q.skillIds));
  if (known.length !== new Set(q.skillIds).size) issues.push({ code: "skill", message: "Compétence inconnue.", blocking: true });
  return issues;
}

export async function createQuestionDraft(db: DB, actorIn: Actor | null, raw: unknown, opts: { batchId?: string; isDemo?: boolean } = {}) {
  const actor = assertRole(actorIn, [...STAFF]);
  const parsed = questionInput.safeParse(raw);
  if (!parsed.success) throw badRequest(parsed.error.issues.map((i) => `${i.path.join(".")} : ${i.message}`).join(" ; "));
  const q = parsed.data;
  const last = await db.query.questionVersions.findFirst({ where: eq(questionVersions.questionId, q.questionId), orderBy: desc(questionVersions.version) });
  const [row] = await db
    .insert(questionVersions)
    .values({
      ...q,
      numericAnswer: q.numericAnswer ?? null,
      numericTolerance: q.numericTolerance ?? null,
      lessonAnchor: q.lessonAnchor ?? null,
      version: (last?.version ?? 0) + 1,
      // Une question générée automatiquement reste en brouillon jusqu'à validation humaine.
      status: "draft",
      authorId: actor.id,
      importBatchId: opts.batchId ?? null,
      isDemo: opts.isDemo ?? false,
    })
    .returning();
  return { row, issues: await issuesFor(db, q) };
}

export async function listContent(db: DB, actorIn: Actor | null, type: ContentType, status?: ContentStatus) {
  assertRole(actorIn, [...STAFF, "support"]);
  const t = TABLES[type];
  const rows = await db
    .select()
    .from(t)
    .where(status ? eq(t.status, status) : undefined)
    .orderBy(desc(t.createdAt))
    .limit(200);
  return rows;
}

export async function getQuestionForReview(db: DB, actorIn: Actor | null, id: string) {
  assertRole(actorIn, [...STAFF]);
  const q = await db.query.questionVersions.findFirst({ where: eq(questionVersions.id, id) });
  if (!q) throw notFound("Question");
  const history = await db.select().from(editorialEvents).where(eq(editorialEvents.contentVersionId, id)).orderBy(desc(editorialEvents.createdAt));
  const versions = await db.select({ id: questionVersions.id, version: questionVersions.version, status: questionVersions.status }).from(questionVersions).where(eq(questionVersions.questionId, q.questionId)).orderBy(desc(questionVersions.version));
  const usage = await db.select({ n: sql<number>`count(*)::int` }).from(responses).where(eq(responses.questionVersionId, id));
  return { q, issues: await issuesFor(db, q), history, versions, responsesCount: usage[0]?.n ?? 0 };
}

export async function transitionContent(db: DB, actorIn: Actor | null, type: ContentType, id: string, to: ContentStatus, reason?: string | null) {
  const actor = assertRole(actorIn, [...STAFF]);
  const t = TABLES[type];
  const [row] = await db.select().from(t).where(eq(t.id, id)).limit(1);
  if (!row) throw notFound("Contenu");
  let blocking = 0;
  if (type === "question") blocking = (await issuesFor(db, row as typeof questionVersions.$inferSelect)).filter((i) => i.blocking).length;
  if (type === "news") {
    const n = row as typeof newsItems.$inferSelect;
    if (n.sources.length === 0) blocking++;
  }
  const check = checkTransition({ from: row.status, to, actorRole: actor.role, actorId: actor.id, authorId: row.authorId, rightsCleared: row.rightsCleared, blockingIssues: blocking, reason });
  if (!check.ok) throw new AppError("transition_refused", 409, check.reason);
  const set: Record<string, unknown> = { status: to };
  if (to === "validated") set.reviewerId = actor.id;
  if (to === "published") set.publishedAt = new Date();
  await db.update(t).set(set).where(eq(t.id, id));
  await db.insert(editorialEvents).values({ contentType: type, contentVersionId: id, fromStatus: row.status, toStatus: to, actorId: actor.id, reason: reason ?? null });
  await audit(db, actor.id, `content.${to}`, { type, id }, { from: row.status, reason });
  if (type === "news" && to === "published") await retireOtherNewsVersions(db, actor.id, row as typeof newsItems.$inferSelect);
  return to;
}

// ---------- Contestation et recalcul (R07) ----------

/** Liste des tentatives concernées par une question, avant tout recalcul. */
export async function affectedAttempts(db: DB, actorIn: Actor | null, questionVersionId: string) {
  assertRole(actorIn, ["reviewer", "admin"]);
  const rows = await db
    .select({ attemptId: attempts.id, userId: attempts.userId, kind: attempts.kind, status: attempts.status })
    .from(attempts)
    .where(sql`${attempts.questionVersionIds} @> ${JSON.stringify([questionVersionId])}::jsonb`);
  return rows;
}

/**
 * Neutralise une question dans les tentatives terminées : une nouvelle version de score est ajoutée
 * (avant/après et motif), l'historique n'est jamais effacé.
 */
export async function neutralizeQuestion(db: DB, actorIn: Actor | null, questionVersionId: string, reason: string) {
  const actor = assertRole(actorIn, ["reviewer", "admin"]);
  if (!reason || reason.trim().length < 5) throw badRequest("Un motif est obligatoire.");
  const qv = await db.query.questionVersions.findFirst({ where: eq(questionVersions.id, questionVersionId) });
  if (!qv) throw notFound("Question");
  if (qv.status !== "suspended" && qv.status !== "retired") throw badRequest("Suspends ou retire la question avant de recalculer les scores.");
  const affected = await affectedAttempts(db, actor, questionVersionId);
  const changes: { attemptId: string; before: { points: number; maxPoints: number }; after: { points: number; maxPoints: number } }[] = [];
  const users = new Set<string>();
  for (const a of affected) {
    if (a.status !== "finalized" && a.status !== "expired") continue;
    const versions = await db.select().from(scoreVersions).where(eq(scoreVersions.attemptId, a.attemptId)).orderBy(desc(scoreVersions.version));
    const last = versions[0];
    if (!last) continue;
    const neutralized = ((last.details.neutralized as string[] | undefined) ?? []);
    if (neutralized.includes(questionVersionId)) continue;
    const full = await db.query.attempts.findFirst({ where: eq(attempts.id, a.attemptId) });
    const rule = (((full!.meta as { sections?: { questionVersionIds: string[]; rule: ScoringRule }[] }).sections ?? []).find((s) => s.questionVersionIds.includes(questionVersionId))?.rule ?? "standard") as ScoringRule;
    const r = await db.query.responses.findFirst({ where: and(eq(responses.attemptId, a.attemptId), eq(responses.questionVersionId, questionVersionId)) });
    const s = scoreQuestion(qv, r ? { selected: r.selected, numericValue: r.numericValue } : null, rule);
    const after = { points: last.points - s.points, maxPoints: last.maxPoints - s.maxPoints };
    await db.insert(scoreVersions).values({
      attemptId: a.attemptId,
      version: last.version + 1,
      points: after.points,
      maxPoints: after.maxPoints,
      answered: last.answered - (r ? 1 : 0),
      total: last.total - 1,
      details: { ...last.details, neutralized: [...neutralized, questionVersionId], before: { points: last.points, maxPoints: last.maxPoints } },
      reason: `Question ${qv.questionId} v${qv.version} neutralisée : ${reason.trim()}`,
    });
    changes.push({ attemptId: a.attemptId, before: { points: last.points, maxPoints: last.maxPoints }, after });
    users.add(a.userId);
  }
  for (const u of users) await recomputeMastery(db, u, qv.skillIds);
  await audit(db, actor.id, "score.recalculated", { type: "question", id: questionVersionId }, { reason, attempts: changes.length });
  return changes;
}

// ---------- Import par lots ----------

export type BatchReport = { index: number; questionId: string | null; errors: string[]; warnings: string[] }[];

/** Validation à blanc : rien n'est écrit. */
export async function dryRunBatch(db: DB, actorIn: Actor | null, items: unknown[]): Promise<BatchReport> {
  assertRole(actorIn, [...STAFF]);
  if (!Array.isArray(items) || items.length === 0 || items.length > 500) throw badRequest("Le lot doit contenir entre 1 et 500 questions.");
  const report: BatchReport = [];
  const seen = new Set<string>();
  for (const [index, raw] of items.entries()) {
    const parsed = questionInput.safeParse(raw);
    if (!parsed.success) {
      report.push({ index, questionId: (raw as { questionId?: string })?.questionId ?? null, errors: parsed.error.issues.map((i) => `${i.path.join(".")} : ${i.message}`), warnings: [] });
      continue;
    }
    const issues = await issuesFor(db, parsed.data);
    const errors = issues.filter((i) => i.blocking).map((i) => i.message);
    if (seen.has(parsed.data.questionId)) errors.push("Identifiant présent deux fois dans le lot.");
    seen.add(parsed.data.questionId);
    report.push({ index, questionId: parsed.data.questionId, errors, warnings: issues.filter((i) => !i.blocking).map((i) => i.message) });
  }
  return report;
}

export async function applyBatch(db: DB, actorIn: Actor | null, items: unknown[], opts: { allowPartial: boolean }) {
  const actor = assertRole(actorIn, [...STAFF]);
  const report = await dryRunBatch(db, actor, items);
  const invalid = report.filter((r) => r.errors.length > 0);
  if (invalid.length > 0 && !opts.allowPartial) {
    throw new AppError("batch_invalid", 422, `${invalid.length} question(s) invalide(s) : lot non appliqué. Corrige-les ou confirme un import partiel.`);
  }
  const batchId = `B-${new Date().toISOString().slice(0, 10)}-${randomUUID().slice(0, 8)}`;
  // Les questions valides entrent en brouillon : un lot ne touche jamais le catalogue public.
  await db.transaction(async (tx) => {
    for (const r of report) {
      if (r.errors.length) continue;
      await createQuestionDraft(tx as unknown as DB, actor, items[r.index], { batchId });
    }
  });
  await audit(db, actor.id, "batch.imported", { type: "batch", id: batchId }, { applied: report.length - invalid.length, rejected: invalid.length });
  return { batchId, applied: report.length - invalid.length, rejected: invalid.length, report };
}

/** Annule un lot s'il n'est référencé par aucun résultat, sinon le retire proprement. */
export async function cancelBatch(db: DB, actorIn: Actor | null, batchId: string) {
  const actor = assertRole(actorIn, ["reviewer", "admin"]);
  const rows = await db.select().from(questionVersions).where(eq(questionVersions.importBatchId, batchId));
  if (!rows.length) throw notFound("Lot");
  const ids = rows.map((r) => r.id);
  const used = await db.select({ n: sql<number>`count(*)::int` }).from(responses).where(inArray(responses.questionVersionId, ids));
  if ((used[0]?.n ?? 0) === 0) {
    await db.delete(editorialEvents).where(inArray(editorialEvents.contentVersionId, ids));
    await db.delete(questionVersions).where(eq(questionVersions.importBatchId, batchId));
    await audit(db, actor.id, "batch.cancelled", { type: "batch", id: batchId }, { removed: ids.length });
    return { mode: "deleted" as const, count: ids.length };
  }
  await db.update(questionVersions).set({ status: "retired" }).where(eq(questionVersions.importBatchId, batchId));
  await audit(db, actor.id, "batch.retired", { type: "batch", id: batchId }, { retired: ids.length });
  return { mode: "retired" as const, count: ids.length };
}

// ---------- Signalements ----------

export async function listReports(db: DB, actorIn: Actor | null) {
  assertRole(actorIn, ["reviewer", "admin"]);
  return db.select().from(contentReports).orderBy(desc(contentReports.createdAt)).limit(200);
}

export async function resolveReport(db: DB, actorIn: Actor | null, id: string, decision: "accepted" | "rejected", resolution: string) {
  const actor = assertRole(actorIn, ["reviewer", "admin"]);
  if (!resolution.trim()) throw badRequest("Indique la suite donnée.");
  await db.update(contentReports).set({ status: decision, resolution, handledBy: actor.id }).where(eq(contentReports.id, id));
  await audit(db, actor.id, `report.${decision}`, { type: "report", id }, { resolution });
}

// ---------- Tableau de bord (ADM-01, QUAL-01) ----------

export async function adminDashboard(db: DB, actorIn: Actor | null) {
  assertRole(actorIn, [...STAFF, "support"]);
  const statusCounts = await db.select({ status: questionVersions.status, n: sql<number>`count(*)::int` }).from(questionVersions).groupBy(questionVersions.status);
  const allSkills = await db.select().from(skills);
  const subs = await db.select().from(subjects).orderBy(subjects.position);
  const published = await db.select({ skillIds: questionVersions.skillIds, subjectCode: questionVersions.subjectCode }).from(questionVersions).where(eq(questionVersions.status, "published"));
  const lessons = await db.select({ skillId: lessonVersions.skillId }).from(lessonVersions).where(eq(lessonVersions.status, "published"));
  const lessonSkills = new Set(lessons.map((l) => l.skillId));
  const perSkill = new Map<string, number>();
  for (const q of published) for (const s of q.skillIds) perSkill.set(s, (perSkill.get(s) ?? 0) + 1);
  const coverage = subs.map((s) => {
    const ks = allSkills.filter((k) => k.subjectCode === s.code);
    const covered = ks.filter((k) => (perSkill.get(k.id) ?? 0) >= 3 && lessonSkills.has(k.id)).length;
    return { code: s.code, name: s.name, open: s.open, skills: ks.length, covered, questions: published.filter((q) => q.subjectCode === s.code).length };
  });
  const openReports = await db.select({ n: sql<number>`count(*)::int` }).from(contentReports).where(eq(contentReports.status, "open"));
  const staleNews = await db.select().from(newsItems).where(and(eq(newsItems.status, "published"), lt(newsItems.lastVerifiedAt, new Date(Date.now() - 30 * 86_400_000).toISOString().slice(0, 10))));
  const since = new Date(Date.now() - 7 * 86_400_000);
  const activeStudents = await db.select({ n: sql<number>`count(distinct ${attempts.userId})::int` }).from(attempts).where(gte(attempts.startedAt, since));
  const attempts7 = await db.select({ kind: attempts.kind, n: sql<number>`count(*)::int` }).from(attempts).where(gte(attempts.startedAt, since)).groupBy(attempts.kind);
  const students = await db.select({ n: sql<number>`count(*)::int` }).from(users).where(eq(users.role, "student"));
  const recentAudit = await db.select().from(auditEvents).orderBy(desc(auditEvents.createdAt)).limit(15);
  const reportsTotal = await db.select({ n: sql<number>`count(*)::int` }).from(contentReports);
  return {
    statusCounts: Object.fromEntries(statusCounts.map((s) => [s.status, s.n])),
    coverage,
    openReports: openReports[0]?.n ?? 0,
    reportRate: published.length ? (reportsTotal[0]?.n ?? 0) / published.length : 0,
    staleNews,
    activeStudents: activeStudents[0]?.n ?? 0,
    students: students[0]?.n ?? 0,
    attempts7: Object.fromEntries(attempts7.map((a) => [a.kind, a.n])),
    recentAudit,
  };
}

/** Vue support limitée : un identifiant de tentative, sans profil ni contenu personnel ; chaque accès est journalisé. */
export async function supportLookup(db: DB, actorIn: Actor | null, attemptId: string) {
  const actor = assertRole(actorIn, ["support", "admin"]);
  if (!/^[0-9a-f-]{36}$/i.test(attemptId)) throw badRequest("Identifiant de tentative invalide.");
  const a = await db.query.attempts.findFirst({ where: eq(attempts.id, attemptId) });
  if (!a) throw notFound("Tentative");
  const resp = await db.select({ receivedAt: responses.receivedAt, syncState: responses.syncState, clientSeq: responses.clientSeq }).from(responses).where(eq(responses.attemptId, attemptId));
  const scores = await db.select().from(scoreVersions).where(eq(scoreVersions.attemptId, attemptId)).orderBy(scoreVersions.version);
  await audit(db, actor.id, "support.attempt_lookup", { type: "attempt", id: attemptId });
  return {
    id: a.id,
    kind: a.kind,
    status: a.status,
    startedAt: a.startedAt,
    deadlineAt: a.deadlineAt,
    finalizedAt: a.finalizedAt,
    questionCount: a.questionVersionIds.length,
    responses: resp.length,
    lastResponseAt: resp.map((r) => r.receivedAt).sort((x, y) => y.getTime() - x.getTime())[0] ?? null,
    pendingSync: resp.filter((r) => r.syncState !== "confirmed").length,
    scores: scores.map((s) => ({ version: s.version, points: s.points, maxPoints: s.maxPoints, reason: s.reason, at: s.createdAt })),
  };
}
