// Répétition espacée et carnet d'erreurs (REV-01). Politique initiale ajustable, pas une vérité universelle.

export const REVIEW_INTERVALS_DAYS = [1, 3, 7, 21] as const;
export const REDIRECT_AFTER_FAILURES = 3;

const DAY = 86_400_000;

export type ErrorCause = "knowledge" | "reading" | "time" | "unknown";

// Cause probable proposée, que l'élève peut corriger.
export function inferCause(durationMs: number, expectedSec: number): ErrorCause {
  if (durationMs <= 0) return "unknown";
  const ratio = durationMs / (expectedSec * 1000);
  if (ratio < 0.25) return "reading";
  if (ratio > 1.5) return "time";
  return "knowledge";
}

export const CAUSE_LABELS: Record<ErrorCause, string> = {
  knowledge: "Connaissance : la règle n'était pas acquise",
  reading: "Lecture : réponse trop rapide, énoncé mal lu",
  time: "Gestion du temps : réponse beaucoup plus lente que prévu",
  unknown: "Cause à préciser",
};

export type ReviewState = {
  stage: number;
  consecutiveFailures: number;
  dueAt: Date;
  status: "open" | "closed";
};

export function startOfDay(d: Date) {
  const x = new Date(d);
  x.setUTCHours(0, 0, 0, 0);
  return x;
}

export function addDays(d: Date, n: number) {
  return new Date(startOfDay(d).getTime() + n * DAY);
}

export function onError(prev: ReviewState | null, now: Date): ReviewState {
  return {
    stage: 0,
    consecutiveFailures: (prev?.consecutiveFailures ?? 0) + 1,
    dueAt: addDays(now, REVIEW_INTERVALS_DAYS[0]),
    status: "open",
  };
}

/**
 * Révision réussie. `newContext` indique une variante jamais vue pour cette entrée :
 * réussir la question originale reprogramme sans fermer la lacune.
 * Une confiance faible (1 sur 3) avance d'un cran de moins.
 */
export function onSuccess(prev: ReviewState, now: Date, opts: { newContext: boolean; confidence?: number | null }): ReviewState {
  const last = REVIEW_INTERVALS_DAYS.length - 1;
  const nextStage = prev.stage + (opts.confidence === 1 ? 0 : 1);
  if (nextStage > last) {
    if (opts.newContext) return { stage: nextStage, consecutiveFailures: 0, dueAt: prev.dueAt, status: "closed" };
    return { stage: last, consecutiveFailures: 0, dueAt: addDays(now, REVIEW_INTERVALS_DAYS[last]), status: "open" };
  }
  return { stage: nextStage, consecutiveFailures: 0, dueAt: addDays(now, REVIEW_INTERVALS_DAYS[nextStage]), status: "open" };
}

export function needsLessonRedirect(s: Pick<ReviewState, "consecutiveFailures">) {
  return s.consecutiveFailures >= REDIRECT_AFTER_FAILURES;
}

/**
 * Plafonne la dette quotidienne : on sert au plus `cap` éléments, les plus en retard d'abord.
 * Après une longue absence, le reste n'est pas empilé sur la journée.
 */
export function pickDueReviews<T extends { dueAt: Date; status: "open" | "closed" }>(items: T[], now: Date, cap: number): { today: T[]; backlog: number } {
  const due = items.filter((i) => i.status === "open" && i.dueAt.getTime() <= now.getTime()).sort((a, b) => a.dueAt.getTime() - b.dueAt.getTime());
  return { today: due.slice(0, Math.max(0, cap)), backlog: Math.max(0, due.length - cap) };
}
