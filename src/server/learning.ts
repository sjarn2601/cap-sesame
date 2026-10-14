// Effets pédagogiques d'une réponse : carnet d'erreurs (REV-01) et maîtrise (ADA-01).
import { and, eq, inArray, notInArray, sql } from "drizzle-orm";
import type { DB } from "@/db";
import { attempts, masterySnapshots, questionVersions, responses, reviewItems } from "@/db/schema";
import { computeMastery, MASTERY_WEIGHTS } from "@/lib/mastery";
import { inferCause, onError, onSuccess, type ErrorCause } from "@/lib/spaced";
import type { QuestionScore } from "@/lib/scoring";

type Qv = typeof questionVersions.$inferSelect;

const AIDED_KINDS = new Set(["exam_pedagogic"]);

export async function recomputeMastery(db: DB, userId: string, skillIds: string[]) {
  for (const skillId of new Set(skillIds)) {
    const rows = await db
      .select({
        at: responses.receivedAt,
        isCorrect: responses.isCorrect,
        hintsUsed: responses.hintsUsed,
        familyId: questionVersions.familyId,
        kind: attempts.kind,
      })
      .from(responses)
      .innerJoin(attempts, eq(attempts.id, responses.attemptId))
      .innerJoin(questionVersions, eq(questionVersions.id, responses.questionVersionId))
      .where(
        and(
          eq(attempts.userId, userId),
          notInArray(attempts.status, ["invalidated"]),
          // Une question retirée ou suspendue ne nourrit plus l'estimation de maîtrise.
          notInArray(questionVersions.status, ["suspended", "retired"]),
          sql`${questionVersions.skillIds} @> ${JSON.stringify([skillId])}::jsonb`,
          sql`${responses.isCorrect} is not null`,
        ),
      );
    const m = computeMastery(
      rows.map((r) => ({ at: r.at, correct: !!r.isCorrect, autonomous: r.hintsUsed === 0 && !AIDED_KINDS.has(r.kind), familyId: r.familyId })),
    );
    const values = {
      userId,
      skillId,
      // Données insuffisantes : on garde le taux observé, jamais présenté comme un score.
      score: m.score ?? m.observedRate ?? 0,
      status: m.status,
      autonomousAttempts: m.autonomousAttempts,
      families: m.families,
      distinctDays: m.distinctDays,
      weightsVersion: MASTERY_WEIGHTS.version,
      computedAt: new Date(),
    };
    await db.insert(masterySnapshots).values(values).onConflictDoUpdate({ target: [masterySnapshots.userId, masterySnapshots.skillId], set: values });
  }
}

/** Met à jour le carnet d'erreurs après une réponse notée. */
export async function applyToReviewLog(
  db: DB,
  args: { userId: string; attemptId: string; qv: Qv; score: QuestionScore; durationMs: number; confidence: number | null; now: Date },
) {
  const { userId, qv, score, now } = args;
  const existing = await db.query.reviewItems.findFirst({ where: and(eq(reviewItems.userId, userId), eq(reviewItems.familyId, qv.familyId)) });
  const example = { questionVersionId: qv.id, questionId: qv.questionId, attemptId: args.attemptId, at: now.toISOString() };

  if (score.status === "correct") {
    if (!existing || existing.status === "closed") return;
    const newContext = !existing.examples.some((e) => e.questionId === qv.questionId);
    const next = onSuccess(existing, now, { newContext, confidence: args.confidence });
    await db.update(reviewItems).set({ ...next, lastReviewedAt: now }).where(eq(reviewItems.id, existing.id));
    return;
  }

  const cause: ErrorCause = score.status === "unanswered" ? "time" : inferCause(args.durationMs, qv.timeSec);
  if (!existing) {
    const s = onError(null, now);
    await db
      .insert(reviewItems)
      .values({ userId, skillId: qv.skillIds[0], familyId: qv.familyId, cause, rule: qv.rule, examples: [example], ...s })
      .onConflictDoNothing();
    return;
  }
  const s = onError(existing.status === "closed" ? { ...existing, consecutiveFailures: 0 } : existing, now);
  const examples = existing.examples.some((e) => e.questionVersionId === qv.id && e.attemptId === args.attemptId) ? existing.examples : [...existing.examples, example].slice(-10);
  await db
    .update(reviewItems)
    .set({ ...s, examples, rule: qv.rule, cause: existing.causeEditedByUser ? existing.cause : cause, lastReviewedAt: now })
    .where(eq(reviewItems.id, existing.id));
}

export async function seenQuestionIds(db: DB, userId: string) {
  const rows = await db
    .select({ questionId: questionVersions.questionId, familyId: questionVersions.familyId, at: responses.receivedAt })
    .from(responses)
    .innerJoin(attempts, eq(attempts.id, responses.attemptId))
    .innerJoin(questionVersions, eq(questionVersions.id, responses.questionVersionId))
    .where(eq(attempts.userId, userId));
  const seen = new Map<string, Date>();
  const families = new Set<string>();
  for (const r of rows) {
    const prev = seen.get(r.questionId);
    if (!prev || prev < r.at) seen.set(r.questionId, r.at);
    families.add(r.familyId);
  }
  return { seen, families };
}

export async function masteryMap(db: DB, userId: string) {
  const rows = await db.select().from(masterySnapshots).where(eq(masterySnapshots.userId, userId));
  return new Map(rows.map((r) => [r.skillId, r]));
}

export async function questionsByIds(db: DB, ids: string[]) {
  if (ids.length === 0) return new Map<string, Qv>();
  const rows = await db.select().from(questionVersions).where(inArray(questionVersions.id, ids));
  return new Map(rows.map((r) => [r.id, r]));
}
