// Hors connexion (OFF-01) : séries libres téléchargées explicitement, réponses locales synchronisées sans doublon.
import { and, eq, inArray, sql } from "drizzle-orm";
import type { DB } from "@/db";
import { attempts, questionVersions } from "@/db/schema";
import { assertRole, type Actor } from "./auth";
import { AppError, badRequest, notFound } from "./errors";
import { createPractice, finalizeAttempt, saveResponse, type AttemptMeta, type SessionSize } from "./attempts";
import { questionsByIds } from "./learning";

/** Au plus trois séries téléchargées et non synchronisées : les données locales restent limitées. */
export const MAX_OFFLINE_PACKS = 3;

export type OfflineQuestion = {
  id: string;
  questionId: string;
  subjectCode: string;
  format: "single" | "multiple" | "numeric";
  stem: string;
  options: { id: string; text: string; correct: boolean; justification: string }[];
  numericAnswer: number | null;
  numericTolerance: number | null;
  explanation: string;
  rule: string;
  lessonId: string;
  lessonAnchor: string | null;
};

export type OfflinePack = { attemptId: string; title: string; downloadedAt: string; questions: OfflineQuestion[] };

export type OfflineAnswer = {
  questionVersionId: string;
  /** Identifiant unique généré sur l'appareil : rejouer la synchronisation ne crée pas de doublon. */
  clientId: string;
  selected: string[];
  numericValue?: number | null;
  durationMs?: number;
  confidence?: number | null;
  answeredAt: string;
};

const student = (actor: Actor | null) => assertRole(actor, ["student"]);

export async function createOfflinePack(db: DB, actorIn: Actor | null, opts: { subjectCode?: string; size?: SessionSize }): Promise<OfflinePack> {
  const actor = student(actorIn);
  const [{ n }] = await db
    .select({ n: sql<number>`count(*)::int` })
    .from(attempts)
    .where(and(eq(attempts.userId, actor.id), eq(attempts.status, "in_progress"), sql`(${attempts.meta}->>'offline')::boolean is true`));
  if (n >= MAX_OFFLINE_PACKS) throw new AppError("offline_limit", 409, `Tu as déjà ${MAX_OFFLINE_PACKS} séries téléchargées : synchronise ou termine-en une avant d'en télécharger une autre.`);
  const a = await createPractice(db, actor, { subjectCode: opts.subjectCode, size: opts.size, offline: true });
  const qs = await questionsByIds(db, a.questionVersionIds);
  return {
    attemptId: a.id,
    title: (a.meta as AttemptMeta).title ?? "Série hors connexion",
    downloadedAt: a.startedAt.toISOString(),
    questions: a.questionVersionIds.map((id) => {
      const q = qs.get(id)!;
      return {
        id: q.id,
        questionId: q.questionId,
        subjectCode: q.subjectCode,
        format: q.format,
        stem: q.stem,
        options: q.options.map((o) => ({ id: o.id, text: o.text, correct: o.correct, justification: o.justification })),
        numericAnswer: q.numericAnswer,
        numericTolerance: q.numericTolerance,
        explanation: q.explanation,
        rule: q.rule,
        lessonId: `L-${q.skillIds[0]}`,
        lessonAnchor: q.lessonAnchor,
      };
    }),
  };
}

export type SyncReport = {
  accepted: number;
  duplicates: number;
  /** Questions retirées ou suspendues depuis le téléchargement : résultat gardé avec avertissement, sans effet sur la maîtrise. */
  withdrawn: string[];
  /** Réponses dont la note serveur diffère de la note locale (corrigé modifié entre-temps). */
  rescored: string[];
  finalized: boolean;
};

/**
 * Règle de conflit documentée : en série libre, la première réponse reçue pour une question fait foi
 * (comme en ligne, la correction a déjà été vue). Une réponse rejouée avec le même identifiant est ignorée.
 */
export async function syncOffline(db: DB, actorIn: Actor | null, attemptId: string, answers: OfflineAnswer[], localScores: Record<string, boolean>, finish: boolean): Promise<SyncReport> {
  const actor = student(actorIn);
  if (answers.length > 50) throw badRequest("Trop de réponses dans un seul envoi.");
  const a = await db.query.attempts.findFirst({ where: and(eq(attempts.id, attemptId), eq(attempts.userId, actor.id)) });
  if (!a || !(a.meta as AttemptMeta).offline) throw notFound("Série hors connexion");
  const qs = await questionsByIds(db, a.questionVersionIds);
  const report: SyncReport = { accepted: 0, duplicates: 0, withdrawn: [], rescored: [], finalized: a.status !== "in_progress" };
  if (a.status !== "in_progress") return report;

  const answered = new Set((await db.query.responses.findMany({ where: (r, { eq: e }) => e(r.attemptId, a.id) })).map((r) => r.questionVersionId));
  const ordered = [...answers].sort((x, y) => x.answeredAt.localeCompare(y.answeredAt));
  for (const [i, ans] of ordered.entries()) {
    const q = qs.get(ans.questionVersionId);
    if (!q) continue;
    if (q.status === "retired" || q.status === "suspended") report.withdrawn.push(q.questionId);
    if (answered.has(q.id)) {
      report.duplicates++;
      continue;
    }
    const r = await saveResponse(db, actor, a.id, {
      questionVersionId: q.id,
      idempotencyKey: ans.clientId,
      selected: ans.selected,
      numericValue: ans.numericValue ?? null,
      durationMs: ans.durationMs,
      confidence: ans.confidence ?? null,
      clientSeq: i + 1,
    });
    answered.add(q.id);
    report.accepted++;
    const serverCorrect = (r as { correction?: { status: string } }).correction?.status === "correct";
    if (q.id in localScores && localScores[q.id] !== serverCorrect) report.rescored.push(q.questionId);
  }
  if (finish || answered.size >= a.questionVersionIds.length) {
    await finalizeAttempt(db, actor, a.id);
    report.finalized = true;
  }
  return report;
}

/** Statut actuel des questions d'une série téléchargée (signale une question retirée avant même de répondre). */
export async function packStatus(db: DB, actorIn: Actor | null, attemptId: string) {
  const actor = student(actorIn);
  const a = await db.query.attempts.findFirst({ where: and(eq(attempts.id, attemptId), eq(attempts.userId, actor.id)) });
  if (!a) throw notFound("Série hors connexion");
  const rows = await db.select({ id: questionVersions.id, status: questionVersions.status }).from(questionVersions).where(inArray(questionVersions.id, a.questionVersionIds));
  return { status: a.status, withdrawn: rows.filter((r) => r.status === "retired" || r.status === "suspended").map((r) => r.id) };
}
