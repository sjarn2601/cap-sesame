// Tentatives : création, sauvegarde idempotente, chronométrage serveur, finalisation unique (EXA-01, TEC-01, R03-R05).
import { and, desc, eq, inArray, sql } from "drizzle-orm";
import type { DB } from "@/db";
import { attempts, profiles, questionVersions, responses, reviewItems, scoreVersions, subjects, documentSetVersions } from "@/db/schema";
import { scoreAttempt, scoreQuestion, type ScoringRule } from "@/lib/scoring";
import { selectQuestions, type Candidate } from "@/lib/adaptive";
import { pickDueReviews } from "@/lib/spaced";
import { assertRole, type Actor } from "./auth";
import { AppError, badRequest, conflict, notFound } from "./errors";
import { applyToReviewLog, masteryMap, questionsByIds, recomputeMastery, seenQuestionIds } from "./learning";
import { getPublishedConfig } from "./sessionConfig";
import { markPlanTaskDone } from "./plan";

type Attempt = typeof attempts.$inferSelect;
type Qv = typeof questionVersions.$inferSelect;
export type AttemptKind = Attempt["kind"];

export type Section = { subject: string; label: string; questionVersionIds: string[]; minutes: number; rule: ScoringRule; reducedFrom?: number };
export type AttemptMeta = {
  sections?: Section[];
  current?: number;
  sectionStartedAt?: string | null;
  sectionDeadline?: string | null;
  pauseUntil?: string | null;
  extensionFactor?: number;
  planTaskId?: string;
  hints?: Record<string, number>;
  reasons?: Record<string, string>;
  reviewItemIds?: Record<string, string>;
  skippedSections?: string[];
  title?: string;
  advanced?: boolean;
  /** Série téléchargée pour être faite hors connexion (OFF-01). */
  offline?: boolean;
};

const LEARNING_KINDS: AttemptKind[] = ["practice", "review", "diagnostic"];
const EXAM_KINDS: AttemptKind[] = ["exam_strict", "exam_pedagogic"];
export const SIZES = { short: 5, normal: 10, long: 15 } as const;
export type SessionSize = keyof typeof SIZES;

const meta = (a: Attempt) => a.meta as AttemptMeta;
const student = (actor: Actor | null) => assertRole(actor, ["student"]);

async function loadOwned(db: DB, actor: Actor, id: string) {
  if (!/^[0-9a-f-]{36}$/i.test(id)) throw notFound("Tentative");
  const a = await db.query.attempts.findFirst({ where: eq(attempts.id, id) });
  // Un identifiant trouvé dans une URL ne donne aucun droit : même réponse que si la tentative n'existait pas.
  if (!a || a.userId !== actor.id) throw notFound("Tentative");
  return a;
}

async function getProfile(db: DB, userId: string) {
  const p = await db.query.profiles.findFirst({ where: eq(profiles.userId, userId) });
  if (!p) throw notFound("Profil");
  return p;
}

export function languageSubject(code: string) {
  return `LV-${code}`;
}

async function publishedCandidates(db: DB, filter: { subjectCode?: string; skillId?: string; includeReserved?: boolean; onlyReserved?: boolean }) {
  const conds = [eq(questionVersions.status, "published")];
  if (filter.subjectCode) conds.push(eq(questionVersions.subjectCode, filter.subjectCode));
  if (filter.skillId) conds.push(sql`${questionVersions.skillIds} @> ${JSON.stringify([filter.skillId])}::jsonb`);
  if (filter.onlyReserved) conds.push(eq(questionVersions.reserved, true));
  else if (!filter.includeReserved) conds.push(eq(questionVersions.reserved, false));
  const rows = await db.select().from(questionVersions).where(and(...conds));
  // Ne garder que la version publiée la plus récente de chaque question.
  const latest = new Map<string, Qv>();
  for (const r of rows) {
    const prev = latest.get(r.questionId);
    if (!prev || prev.version < r.version) latest.set(r.questionId, r);
  }
  return [...latest.values()];
}

const toCandidate = (q: Qv): Candidate => ({ id: q.id, questionId: q.questionId, familyId: q.familyId, skillIds: q.skillIds, difficulty: q.difficulty });

async function openSubjectCodes(db: DB, secondLanguage: string) {
  const rows = await db.select().from(subjects).where(eq(subjects.open, true));
  return rows.filter((s) => !s.isLanguage || s.code === "EN" || s.code === languageSubject(secondLanguage)).map((s) => s.code);
}

// ---------- Création ----------

export async function createPractice(db: DB, actorIn: Actor | null, opts: { subjectCode?: string; skillId?: string; size?: SessionSize; planTaskId?: string; offline?: boolean }) {
  const actor = student(actorIn);
  const profile = await getProfile(db, actor.id);
  const allowed = await openSubjectCodes(db, profile.secondLanguage);
  if (opts.subjectCode && !allowed.includes(opts.subjectCode)) throw badRequest("Matière non disponible pour ton profil.");
  let pool = await publishedCandidates(db, { subjectCode: opts.subjectCode, skillId: opts.skillId });
  pool = pool.filter((q) => allowed.includes(q.subjectCode) && !q.documentSetVersionId);
  if (pool.length === 0) throw new AppError("no_content", 404, "Aucune question publiée pour cette sélection pour l'instant. Choisis une autre notion ou une autre matière.");
  const { seen, families } = await seenQuestionIds(db, actor.id);
  const mastery = await masteryMap(db, actor.id);
  const skillScore = new Map<string, number | null>([...mastery.entries()].map(([k, v]) => [k, v.status === "insufficient" && v.autonomousAttempts < 3 ? null : v.score]));
  const selected = selectQuestions(pool.map(toCandidate), { seenQuestions: seen, seenFamilies: families, skillScore, targetSkill: opts.skillId, now: new Date() }, SIZES[opts.size ?? "normal"]);
  const reasons = Object.fromEntries(selected.map((s) => [s.id, s.reason]));
  const [a] = await db
    .insert(attempts)
    .values({
      userId: actor.id,
      kind: "practice",
      subjectCode: opts.subjectCode ?? null,
      questionVersionIds: selected.map((s) => s.id),
      meta: { reasons, planTaskId: opts.planTaskId, title: opts.offline ? "Série hors connexion" : "Série d'entraînement", offline: opts.offline || undefined } satisfies AttemptMeta,
    })
    .returning();
  return a;
}

export async function createReview(db: DB, actorIn: Actor | null, opts: { planTaskId?: string } = {}) {
  const actor = student(actorIn);
  const profile = await getProfile(db, actor.id);
  const items = await db.select().from(reviewItems).where(and(eq(reviewItems.userId, actor.id), eq(reviewItems.status, "open")));
  const { today } = pickDueReviews(items, new Date(), profile.dailyReviewCap);
  if (today.length === 0) throw new AppError("no_content", 404, "Aucune révision n'est due aujourd'hui. Tu peux lancer une série libre.");
  const chosen: string[] = [];
  const reviewItemIds: Record<string, string> = {};
  for (const item of today) {
    const seenIds = new Set(item.examples.map((e) => e.questionId));
    // Une erreur ancienne est testée dans un contexte nouveau : variante de la même famille, puis même compétence.
    const family = (await publishedCandidates(db, { skillId: item.skillId })).filter((q) => !chosen.includes(q.id) && !q.documentSetVersionId);
    const pick =
      family.find((q) => q.familyId === item.familyId && !seenIds.has(q.questionId)) ??
      family.find((q) => !seenIds.has(q.questionId)) ??
      family.find((q) => q.familyId === item.familyId);
    if (pick) {
      chosen.push(pick.id);
      reviewItemIds[pick.id] = item.id;
    }
  }
  if (chosen.length === 0) throw new AppError("no_content", 404, "Les questions liées à tes révisions ont été retirées. Elles seront remplacées après relecture.");
  const [a] = await db
    .insert(attempts)
    .values({ userId: actor.id, kind: "review", questionVersionIds: chosen, meta: { reviewItemIds, planTaskId: opts.planTaskId, title: "Révision du carnet d'erreurs" } satisfies AttemptMeta })
    .returning();
  return a;
}

export async function createDiagnostic(db: DB, actorIn: Actor | null, opts: { subjectCode?: string; advanced?: boolean } = {}) {
  const actor = student(actorIn);
  const profile = await getProfile(db, actor.id);
  // Reprise au dernier état confirmé.
  if (!opts.subjectCode && profile.diagnosticState.attemptId) {
    const prev = await db.query.attempts.findFirst({ where: eq(attempts.id, profile.diagnosticState.attemptId) });
    if (prev && prev.status === "in_progress") return prev;
  }
  const allowed = await openSubjectCodes(db, profile.secondLanguage);
  const codes = opts.subjectCode ? [opts.subjectCode] : allowed;
  const perSubject = opts.subjectCode ? 6 : 2;
  const chosen: string[] = [];
  for (const code of codes) {
    const pool = (await publishedCandidates(db, { subjectCode: code, includeReserved: true })).filter((q) => !q.documentSetVersionId || code === "DOC");
    const docSet = pool.find((q) => q.documentSetVersionId)?.documentSetVersionId;
    const usable = pool
      .filter((q) => !docSet || q.documentSetVersionId === docSet || !q.documentSetVersionId)
      .sort((a, b) => Number(b.reserved) - Number(a.reserved) || (opts.advanced ? b.difficulty - a.difficulty : a.difficulty - b.difficulty));
    const families = new Set<string>();
    for (const q of usable) {
      if (families.has(q.familyId)) continue;
      families.add(q.familyId);
      chosen.push(q.id);
      if (families.size >= perSubject) break;
    }
  }
  if (chosen.length === 0) throw new AppError("no_content", 404, "Le diagnostic n'est pas encore disponible. Commence directement par un cours.");
  const [a] = await db
    .insert(attempts)
    .values({
      userId: actor.id,
      kind: "diagnostic",
      subjectCode: opts.subjectCode ?? null,
      questionVersionIds: chosen,
      meta: { title: opts.subjectCode ? "Diagnostic complémentaire" : "Diagnostic d'orientation", advanced: !!opts.advanced } satisfies AttemptMeta,
    })
    .returning();
  if (!opts.subjectCode) {
    await db.update(profiles).set({ diagnosticState: { attemptId: a.id } }).where(eq(profiles.userId, actor.id));
  }
  return a;
}

export async function createExam(db: DB, actorIn: Actor | null, opts: { subject: string | "FULL"; mode: "strict" | "pedagogic"; planTaskId?: string }) {
  const actor = student(actorIn);
  const profile = await getProfile(db, actor.id);
  const config = await getPublishedConfig(db, profile.examSessionCode);
  const papers = config.body.papers.filter((p) => opts.subject === "FULL" || p.subject === opts.subject);
  if (papers.length === 0) throw badRequest("Épreuve inconnue pour cette session.");
  const factor = profile.timeExtensionFactor;
  const { seen } = await seenQuestionIds(db, actor.id);

  const sections: Section[] = [];
  const skipped: string[] = [];
  for (const p of papers) {
    const subjectCode = p.subject === "LV" ? languageSubject(profile.secondLanguage) : p.subject;
    let pool = await publishedCandidates(db, { subjectCode, includeReserved: true });
    if (subjectCode === "DOC") {
      const sets = [...new Set(pool.map((q) => q.documentSetVersionId).filter(Boolean))] as string[];
      const set = sets.sort((a, b) => pool.filter((q) => q.documentSetVersionId === b && !seen.has(q.questionId)).length - pool.filter((q) => q.documentSetVersionId === a && !seen.has(q.questionId)).length)[0];
      pool = pool.filter((q) => q.documentSetVersionId === set);
    } else {
      pool = pool.filter((q) => !q.documentSetVersionId);
    }
    // Concours blancs : sujets réservés puis peu exposés d'abord.
    pool.sort((a, b) => Number(b.reserved) - Number(a.reserved) || Number(seen.has(a.questionId)) - Number(seen.has(b.questionId)));
    const chosen = pool.slice(0, p.questionCount);
    if (chosen.length === 0) {
      skipped.push(p.label);
      continue;
    }
    const reduced = chosen.length < p.questionCount;
    const baseMinutes = reduced ? Math.max(5, Math.ceil((p.minutes * chosen.length) / p.questionCount)) : p.minutes;
    sections.push({
      subject: subjectCode,
      label: p.label,
      questionVersionIds: chosen.map((q) => q.id),
      minutes: Math.ceil(baseMinutes * factor),
      rule: p.scoring,
      reducedFrom: reduced ? p.questionCount : undefined,
    });
  }
  if (sections.length === 0) throw new AppError("no_content", 404, "Aucun sujet disponible pour cette épreuve dans la banque actuelle.");

  const now = new Date();
  const deadline = new Date(now.getTime() + sections[0].minutes * 60_000);
  const [a] = await db
    .insert(attempts)
    .values({
      userId: actor.id,
      kind: opts.mode === "strict" ? "exam_strict" : "exam_pedagogic",
      subjectCode: opts.subject === "FULL" ? null : sections[0].subject,
      sessionConfigId: config.id,
      questionVersionIds: sections.flatMap((s) => s.questionVersionIds),
      scoringRule: sections.length === 1 ? sections[0].rule : "mixed",
      startedAt: now,
      deadlineAt: deadline,
      meta: {
        sections,
        current: 0,
        sectionStartedAt: now.toISOString(),
        sectionDeadline: deadline.toISOString(),
        pauseUntil: null,
        extensionFactor: factor,
        planTaskId: opts.planTaskId,
        skippedSections: skipped,
        title: opts.subject === "FULL" ? "Concours blanc complet" : `Simulation : ${sections[0].label}`,
      } satisfies AttemptMeta,
    })
    .returning();
  return a;
}

// ---------- Chronométrage serveur ----------

function sectionOf(a: Attempt, qvId: string) {
  const m = meta(a);
  return m.sections?.findIndex((s) => s.questionVersionIds.includes(qvId)) ?? -1;
}

/** Applique les échéances côté serveur. Retourne la tentative à jour. */
export async function enforceTime(db: DB, a: Attempt, now = new Date()): Promise<Attempt> {
  if (a.status !== "in_progress" || a.kind !== "exam_strict") return a;
  const m = meta(a);
  // Fin de pause encadrée : la section suivante démarre automatiquement à l'heure prévue.
  if (m.pauseUntil && !m.sectionStartedAt && now.getTime() >= new Date(m.pauseUntil).getTime()) {
    const started = await startSectionAt(db, a, new Date(m.pauseUntil));
    return enforceTime(db, started, now);
  }
  if (m.sectionDeadline && now.getTime() > new Date(m.sectionDeadline).getTime()) {
    const isLast = (m.current ?? 0) >= (m.sections?.length ?? 1) - 1;
    if (isLast) {
      await finalizeInternal(db, a.id, "expired");
    } else {
      await advanceSection(db, a, new Date(m.sectionDeadline));
    }
    const fresh = (await db.query.attempts.findFirst({ where: eq(attempts.id, a.id) }))!;
    return enforceTime(db, fresh, now);
  }
  return a;
}

async function advanceSection(db: DB, a: Attempt, at: Date) {
  const m = meta(a);
  const config = a.sessionConfigId ? await db.query.examSessionConfigs.findFirst({ where: (t, { eq }) => eq(t.id, a.sessionConfigId!) }) : null;
  const pause = config?.body.pauseMaxMinutes ?? 10;
  const next: AttemptMeta = { ...m, current: (m.current ?? 0) + 1, sectionStartedAt: null, sectionDeadline: null, pauseUntil: new Date(at.getTime() + pause * 60_000).toISOString() };
  await db.update(attempts).set({ meta: next, deadlineAt: null }).where(and(eq(attempts.id, a.id), sql`(${attempts.meta}->>'current')::int = ${m.current ?? 0}`));
}

async function startSectionAt(db: DB, a: Attempt, at: Date) {
  const m = meta(a);
  const s = m.sections![m.current!];
  const deadline = new Date(at.getTime() + s.minutes * 60_000);
  const next: AttemptMeta = { ...m, sectionStartedAt: at.toISOString(), sectionDeadline: deadline.toISOString(), pauseUntil: null };
  const [row] = await db.update(attempts).set({ meta: next, deadlineAt: deadline }).where(eq(attempts.id, a.id)).returning();
  return row;
}

export async function startNextSection(db: DB, actorIn: Actor | null, id: string, sectionIndex: number) {
  const actor = student(actorIn);
  let a = await enforceTime(db, await loadOwned(db, actor, id));
  const m = meta(a);
  if (a.status !== "in_progress" || m.current !== sectionIndex || m.sectionStartedAt) return a; // requête répétée : sans effet
  a = await startSectionAt(db, a, new Date());
  return a;
}

/** Soumission d'une section (idempotente grâce à l'index de section envoyé par le client). */
export async function submitSection(db: DB, actorIn: Actor | null, id: string, sectionIndex: number) {
  const actor = student(actorIn);
  const a = await enforceTime(db, await loadOwned(db, actor, id));
  const m = meta(a);
  if (a.status !== "in_progress" || m.current !== sectionIndex || !m.sectionStartedAt) return a;
  const isLast = sectionIndex >= (m.sections?.length ?? 1) - 1;
  if (isLast) {
    await finalizeInternal(db, a.id, "finalized");
  } else {
    await advanceSection(db, a, new Date());
  }
  return (await db.query.attempts.findFirst({ where: eq(attempts.id, a.id) }))!;
}

// ---------- Réponses ----------

export type SaveInput = {
  questionVersionId: string;
  idempotencyKey: string;
  selected: string[];
  numericValue?: number | null;
  durationMs?: number;
  confidence?: number | null;
  clientSeq?: number;
};

export type Correction = {
  status: string;
  points: number;
  maxPoints: number;
  explanation: string;
  rule: string;
  options: { id: string; correct: boolean; justification: string }[];
  numericAnswer: number | null;
  lessonAnchor: string | null;
  references: string[];
  reviewRedirect?: boolean;
};

export function correctionOf(q: Qv, s: { status: string; points: number; maxPoints: number }): Correction {
  return {
    status: s.status,
    points: s.points,
    maxPoints: s.maxPoints,
    explanation: q.explanation,
    rule: q.rule,
    options: q.options.map((o) => ({ id: o.id, correct: o.correct, justification: o.justification })),
    numericAnswer: q.numericAnswer,
    lessonAnchor: q.lessonAnchor,
    references: q.references,
  };
}

export async function saveResponse(db: DB, actorIn: Actor | null, id: string, input: SaveInput) {
  const actor = student(actorIn);
  if (!input.idempotencyKey || input.idempotencyKey.length > 100) throw badRequest("Clé d'idempotence manquante.");
  if (!Array.isArray(input.selected) || input.selected.length > 20) throw badRequest("Sélection invalide.");
  const now = new Date();
  let a = await loadOwned(db, actor, id);
  a = await enforceTime(db, a, now);
  if (a.status !== "in_progress") throw conflict("attempt_closed", a.status === "expired" ? "Temps écoulé : la réponse n'a pas été enregistrée." : "Cette séance est terminée.");
  if (!a.questionVersionIds.includes(input.questionVersionId)) throw badRequest("Question absente de cette séance.");

  const isExam = EXAM_KINDS.includes(a.kind);
  const m = meta(a);
  if (isExam) {
    if (sectionOf(a, input.questionVersionId) !== m.current) throw conflict("wrong_section", "Cette question appartient à une autre partie de l'épreuve.");
    if (a.kind === "exam_strict") {
      if (!m.sectionStartedAt) throw conflict("paused", "La partie suivante n'a pas commencé.");
      // Une réponse tardive est refusée, quelle que soit l'horloge de l'appareil.
      if (m.sectionDeadline && now.getTime() > new Date(m.sectionDeadline).getTime()) throw conflict("late", "Temps écoulé : la réponse n'a pas été enregistrée.");
    }
  }

  // Requête rejouée : on renvoie l'état enregistré sans rien modifier.
  const replay = await db.query.responses.findFirst({ where: and(eq(responses.attemptId, a.id), eq(responses.idempotencyKey, input.idempotencyKey)) });
  const qv = (await questionsByIds(db, [input.questionVersionId])).get(input.questionVersionId)!;
  const rule: ScoringRule = isExam ? (m.sections?.[m.current ?? 0]?.rule ?? "standard") : "standard";
  if (replay) return responsePayload(a, qv, replay, rule);

  const existing = await db.query.responses.findFirst({ where: and(eq(responses.attemptId, a.id), eq(responses.questionVersionId, qv.id)) });
  if (existing && !isExam) {
    // En entraînement, la réponse est définitive une fois la correction affichée.
    return responsePayload(a, qv, existing, rule);
  }

  const score = scoreQuestion(qv, { selected: input.selected, numericValue: input.numericValue ?? null }, rule);
  const values = {
    attemptId: a.id,
    questionVersionId: qv.id,
    idempotencyKey: input.idempotencyKey,
    selected: input.selected,
    numericValue: input.numericValue ?? null,
    receivedAt: now,
    durationMs: Math.max(0, Math.min(input.durationMs ?? 0, 4 * 3_600_000)),
    confidence: input.confidence ?? null,
    hintsUsed: m.hints?.[qv.id] ?? 0,
    isCorrect: score.isCorrect,
    points: score.points,
    maxPoints: score.maxPoints,
    clientSeq: input.clientSeq ?? 0,
  };

  let row;
  if (isExam) {
    [row] = await db
      .insert(responses)
      .values(values)
      .onConflictDoUpdate({
        target: [responses.attemptId, responses.questionVersionId],
        set: { ...values, durationMs: sql`${responses.durationMs} + ${values.durationMs}` },
        setWhere: sql`${responses.clientSeq} <= ${values.clientSeq}`,
      })
      .returning();
    row ??= await db.query.responses.findFirst({ where: and(eq(responses.attemptId, a.id), eq(responses.questionVersionId, qv.id)) });
  } else {
    [row] = await db.insert(responses).values(values).onConflictDoNothing().returning();
    if (!row) {
      row = await db.query.responses.findFirst({ where: and(eq(responses.attemptId, a.id), eq(responses.questionVersionId, qv.id)) });
      return responsePayload(a, qv, row!, rule);
    }
    await applyToReviewLog(db, { userId: actor.id, attemptId: a.id, qv, score, durationMs: values.durationMs, confidence: values.confidence, now });
    await recomputeMastery(db, actor.id, qv.skillIds);
  }
  return responsePayload(a, qv, row!, rule);
}

async function responsePayload(a: Attempt, qv: Qv, r: typeof responses.$inferSelect, rule: ScoringRule) {
  const base = { saved: true, receivedAt: r.receivedAt.toISOString(), questionVersionId: qv.id, selected: r.selected, numericValue: r.numericValue };
  // Mode strict : aucune correction envoyée au navigateur avant la clôture.
  if (a.kind === "exam_strict") return { ...base, correction: null };
  const s = scoreQuestion(qv, { selected: r.selected, numericValue: r.numericValue }, rule);
  return { ...base, correction: correctionOf(qv, s) };
}

export async function getHint(db: DB, actorIn: Actor | null, id: string, qvId: string) {
  const actor = student(actorIn);
  const a = await loadOwned(db, actor, id);
  if (a.kind === "exam_strict") throw new AppError("no_help", 403, "Aucune aide en concours blanc strict.");
  if (a.status !== "in_progress" || !a.questionVersionIds.includes(qvId)) throw badRequest("Indice indisponible.");
  const qv = (await questionsByIds(db, [qvId])).get(qvId)!;
  const m = meta(a);
  const used = Math.min((m.hints?.[qvId] ?? 0) + 1, qv.hints.length);
  if (qv.hints.length === 0) return { hints: [], level: 0, max: 0 };
  await db
    .update(attempts)
    .set({ meta: sql`jsonb_set(${attempts.meta}, '{hints}', coalesce(${attempts.meta}->'hints', '{}'::jsonb) || ${JSON.stringify({ [qvId]: used })}::jsonb)` })
    .where(eq(attempts.id, a.id));
  return { hints: qv.hints.slice(0, used), level: used, max: qv.hints.length };
}

// ---------- Finalisation ----------

async function finalizeInternal(db: DB, id: string, finalStatus: "finalized" | "expired") {
  const processed = await db.transaction(async (tx) => {
    // Verrou de ligne : une double soumission concurrente ne crée qu'un résultat.
    const [a] = await tx.select().from(attempts).where(eq(attempts.id, id)).for("update");
    if (!a || a.status !== "in_progress") return null;
    const qvs = await questionsByIds(tx as unknown as DB, a.questionVersionIds);
    const resp = await tx.select().from(responses).where(eq(responses.attemptId, id));
    const byQv = new Map(resp.map((r) => [r.questionVersionId, { selected: r.selected, numericValue: r.numericValue }]));
    const m = meta(a);
    const sections = m.sections ?? [{ subject: a.subjectCode ?? "", label: "", questionVersionIds: a.questionVersionIds, minutes: 0, rule: "standard" as ScoringRule }];
    let points = 0;
    let maxPoints = 0;
    let answered = 0;
    const bySection: Record<string, unknown>[] = [];
    for (const s of sections) {
      const qs = s.questionVersionIds.map((q) => qvs.get(q)!).filter(Boolean);
      const r = scoreAttempt(qs, byQv, s.rule);
      points += r.points;
      maxPoints += r.maxPoints;
      answered += r.answered;
      bySection.push({ subject: s.subject, label: s.label, points: r.points, maxPoints: r.maxPoints, answered: r.answered, total: r.total, rule: s.rule });
    }
    await tx.insert(scoreVersions).values({
      attemptId: id,
      version: 1,
      points,
      maxPoints,
      answered,
      total: a.questionVersionIds.length,
      details: { bySection },
      reason: finalStatus === "expired" ? "Correction initiale (temps écoulé)" : "Correction initiale",
    });
    await tx.update(attempts).set({ status: finalStatus, finalizedAt: new Date() }).where(eq(attempts.id, id));
    return { a, qvs, resp };
  });
  if (!processed) return;
  const { a, qvs, resp } = processed;
  const now = new Date();
  if (EXAM_KINDS.includes(a.kind)) {
    const m = meta(a);
    const byQv = new Map(resp.map((r) => [r.questionVersionId, r]));
    for (const qvId of a.questionVersionIds) {
      const qv = qvs.get(qvId)!;
      const r = byQv.get(qvId);
      const rule = m.sections?.find((s) => s.questionVersionIds.includes(qvId))?.rule ?? "standard";
      const score = scoreQuestion(qv, r ? { selected: r.selected, numericValue: r.numericValue } : null, rule);
      await applyToReviewLog(db, { userId: a.userId, attemptId: a.id, qv, score, durationMs: r?.durationMs ?? 0, confidence: r?.confidence ?? null, now });
    }
    await recomputeMastery(db, a.userId, [...qvs.values()].flatMap((q) => q.skillIds));
  }
  if (a.kind === "diagnostic" && !a.subjectCode) {
    await db.update(profiles).set({ diagnosticState: { attemptId: a.id, completedAt: now.toISOString() } }).where(eq(profiles.userId, a.userId));
  }
  const planTaskId = meta(a).planTaskId;
  if (planTaskId) await markPlanTaskDone(db, a.userId, planTaskId);
}

export async function finalizeAttempt(db: DB, actorIn: Actor | null, id: string) {
  const actor = student(actorIn);
  let a = await enforceTime(db, await loadOwned(db, actor, id));
  if (a.status === "in_progress") {
    if (a.kind === "exam_strict" || a.kind === "exam_pedagogic") {
      // Terminer l'épreuve : toutes les parties restantes sont soumises en l'état.
      await finalizeInternal(db, a.id, "finalized");
    } else {
      await finalizeInternal(db, a.id, "finalized");
    }
    a = (await db.query.attempts.findFirst({ where: eq(attempts.id, id) }))!;
  }
  return a;
}

// ---------- Lecture ----------

export async function getAttemptView(db: DB, actorIn: Actor | null, id: string) {
  const actor = student(actorIn);
  const a = await enforceTime(db, await loadOwned(db, actor, id));
  const qvs = await questionsByIds(db, a.questionVersionIds);
  const resp = await db.select().from(responses).where(eq(responses.attemptId, a.id));
  const byQv = new Map(resp.map((r) => [r.questionVersionId, r]));
  const m = meta(a);
  const docIds = [...new Set([...qvs.values()].map((q) => q.documentSetVersionId).filter(Boolean))] as string[];
  const docs = docIds.length ? await db.select().from(documentSetVersions).where(inArray(documentSetVersions.id, docIds)) : [];
  const showCorrections = a.kind !== "exam_strict";

  const questions = a.questionVersionIds.map((qid, index) => {
    const q = qvs.get(qid)!;
    const r = byQv.get(qid);
    const rule = m.sections?.find((s) => s.questionVersionIds.includes(qid))?.rule ?? "standard";
    const answeredLearning = !!r && !EXAM_KINDS.includes(a.kind);
    return {
      index,
      id: q.id,
      questionId: q.questionId,
      subjectCode: q.subjectCode,
      format: q.format,
      stem: q.stem,
      // Les drapeaux de bonne réponse et justifications ne quittent jamais le serveur avant correction.
      options: q.options.map((o) => ({ id: o.id, text: o.text })),
      timeSec: q.timeSec,
      hintCount: q.hints.length,
      hintsUsed: m.hints?.[q.id] ?? 0,
      hints: a.kind === "exam_strict" ? [] : q.hints.slice(0, m.hints?.[q.id] ?? 0),
      documentSetVersionId: q.documentSetVersionId,
      reason: m.reasons?.[q.id] ?? null,
      lessonId: `L-${q.skillIds[0]}`,
      section: m.sections?.findIndex((s) => s.questionVersionIds.includes(qid)) ?? 0,
      response: r ? { selected: r.selected, numericValue: r.numericValue, confidence: r.confidence } : null,
      correction: (answeredLearning || (a.kind === "exam_pedagogic" && !!r)) && showCorrections ? correctionOf(q, scoreQuestion(q, { selected: r!.selected, numericValue: r!.numericValue }, rule)) : null,
      status: q.status,
    };
  });

  return {
    id: a.id,
    kind: a.kind,
    status: a.status,
    title: m.title ?? "Séance",
    serverNow: new Date().toISOString(),
    startedAt: a.startedAt.toISOString(),
    sections: m.sections?.map((s) => ({ label: s.label, subject: s.subject, minutes: s.minutes, count: s.questionVersionIds.length, reducedFrom: s.reducedFrom ?? null, rule: s.rule })) ?? null,
    current: m.current ?? 0,
    sectionStartedAt: m.sectionStartedAt ?? null,
    sectionDeadline: m.sectionDeadline ?? null,
    pauseUntil: m.pauseUntil ?? null,
    extensionFactor: m.extensionFactor ?? 1,
    skippedSections: m.skippedSections ?? [],
    documents: docs.map((d) => ({ id: d.id, title: d.title, documents: d.documents })),
    questions,
  };
}

export type AttemptView = Awaited<ReturnType<typeof getAttemptView>>;

export async function getResult(db: DB, actorIn: Actor | null, id: string) {
  const actor = student(actorIn);
  const a = await enforceTime(db, await loadOwned(db, actor, id));
  if (a.status === "in_progress") throw conflict("not_finished", "Le résultat sera disponible à la fin de la séance.");
  const versions = await db.select().from(scoreVersions).where(eq(scoreVersions.attemptId, a.id)).orderBy(desc(scoreVersions.version));
  const qvs = await questionsByIds(db, a.questionVersionIds);
  const resp = await db.select().from(responses).where(eq(responses.attemptId, a.id));
  const byQv = new Map(resp.map((r) => [r.questionVersionId, r]));
  const m = meta(a);

  // Familiarité : questions déjà rencontrées dans une tentative antérieure.
  const earlier = await db
    .select({ questionId: questionVersions.questionId })
    .from(responses)
    .innerJoin(attempts, eq(attempts.id, responses.attemptId))
    .innerJoin(questionVersions, eq(questionVersions.id, responses.questionVersionId))
    .where(and(eq(attempts.userId, actor.id), sql`${attempts.startedAt} < ${a.startedAt}`));
  const familiar = new Set(earlier.map((e) => e.questionId));

  const config = a.sessionConfigId ? await db.query.examSessionConfigs.findFirst({ where: (t, { eq }) => eq(t.id, a.sessionConfigId!) }) : null;
  const docIds = [...new Set([...qvs.values()].map((q) => q.documentSetVersionId).filter(Boolean))] as string[];
  const docs = docIds.length ? await db.select().from(documentSetVersions).where(inArray(documentSetVersions.id, docIds)) : [];

  const items = a.questionVersionIds.map((qid, index) => {
    const q = qvs.get(qid)!;
    const r = byQv.get(qid);
    const rule = m.sections?.find((s) => s.questionVersionIds.includes(qid))?.rule ?? "standard";
    const s = scoreQuestion(q, r ? { selected: r.selected, numericValue: r.numericValue } : null, rule);
    return {
      index,
      id: q.id,
      questionId: q.questionId,
      version: q.version,
      subjectCode: q.subjectCode,
      skillIds: q.skillIds,
      stem: q.stem,
      format: q.format,
      selected: r?.selected ?? [],
      numericValue: r?.numericValue ?? null,
      durationMs: r?.durationMs ?? 0,
      hintsUsed: r?.hintsUsed ?? 0,
      // Réponse anormalement rapide : signalée comme peu représentative, sans accusation.
      fast: !!r && r.durationMs > 0 && r.durationMs < Math.min(3000, q.timeSec * 100),
      familiar: familiar.has(q.questionId),
      withdrawn: q.status === "suspended" || q.status === "retired",
      documentSetVersionId: q.documentSetVersionId,
      ...correctionOf(q, s),
      options: q.options,
    };
  });

  return {
    id: a.id,
    kind: a.kind,
    status: a.status,
    title: m.title ?? "Séance",
    startedAt: a.startedAt.toISOString(),
    finalizedAt: a.finalizedAt?.toISOString() ?? null,
    configVersion: config ? `${config.code} v${config.version}` : null,
    extensionFactor: m.extensionFactor ?? 1,
    sections: m.sections?.map((s) => ({ label: s.label, subject: s.subject, minutes: s.minutes, reducedFrom: s.reducedFrom ?? null, rule: s.rule })) ?? null,
    score: versions[0] ?? null,
    scoreHistory: versions,
    documents: docs.map((d) => ({ id: d.id, title: d.title, documents: d.documents })),
    items,
  };
}

export type AttemptResult = Awaited<ReturnType<typeof getResult>>;

export async function listAttempts(db: DB, actorIn: Actor | null, limit = 50) {
  const actor = student(actorIn);
  const rows = await db.select().from(attempts).where(eq(attempts.userId, actor.id)).orderBy(desc(attempts.startedAt)).limit(limit);
  const ids = rows.map((r) => r.id);
  const scores = ids.length ? await db.select().from(scoreVersions).where(inArray(scoreVersions.attemptId, ids)) : [];
  const latest = new Map<string, (typeof scores)[number]>();
  for (const s of scores) if (!latest.has(s.attemptId) || latest.get(s.attemptId)!.version < s.version) latest.set(s.attemptId, s);
  return rows.map((r) => ({ ...r, title: meta(r).title ?? "Séance", score: latest.get(r.id) ?? null }));
}

export async function inProgressAttempts(db: DB, actorIn: Actor | null) {
  const actor = student(actorIn);
  const rows = await db.select().from(attempts).where(and(eq(attempts.userId, actor.id), eq(attempts.status, "in_progress"))).orderBy(desc(attempts.startedAt)).limit(5);
  const fresh: Attempt[] = [];
  for (const r of rows) {
    const a = await enforceTime(db, r);
    if (a.status === "in_progress") fresh.push(a);
  }
  const counts = fresh.length ? await db.select({ attemptId: responses.attemptId, n: sql<number>`count(*)::int` }).from(responses).where(inArray(responses.attemptId, fresh.map((a) => a.id))).groupBy(responses.attemptId) : [];
  const byId = new Map(counts.map((c) => [c.attemptId, c.n]));
  return fresh.map((a) => ({ id: a.id, kind: a.kind, title: meta(a).title ?? "Séance", answered: byId.get(a.id) ?? 0, total: a.questionVersionIds.length, startedAt: a.startedAt }));
}
