// Moteur de notation (EXA-01, R02). Fonctions pures, vérifiées par des exemples calculés à la main.
import type { QuestionOption } from "@/db/schema";

export type ScoringRule = "standard" | "doc_partial";

export type ScorableQuestion = {
  id: string;
  format: "single" | "multiple" | "numeric";
  options: Pick<QuestionOption, "id" | "correct">[];
  numericAnswer?: number | null;
  numericTolerance?: number | null;
};

export type ScorableResponse = {
  selected: string[];
  numericValue?: number | null;
} | null;

export type QuestionScore = {
  status: "correct" | "partial" | "wrong" | "unanswered" | "invalid";
  isCorrect: boolean;
  points: number;
  maxPoints: number;
};

const MAX_POINTS = 1;

export function scoreQuestion(q: ScorableQuestion, r: ScorableResponse, rule: ScoringRule = "standard"): QuestionScore {
  const empty = (status: QuestionScore["status"]): QuestionScore => ({ status, isCorrect: false, points: 0, maxPoints: MAX_POINTS });

  if (q.format === "numeric") {
    if (!r || r.numericValue === null || r.numericValue === undefined) return empty("unanswered");
    if (!Number.isFinite(r.numericValue) || q.numericAnswer === null || q.numericAnswer === undefined) return empty("invalid");
    const tol = q.numericTolerance ?? 0;
    const ok = Math.abs(r.numericValue - q.numericAnswer) <= tol + 1e-9;
    return ok ? { status: "correct", isCorrect: true, points: MAX_POINTS, maxPoints: MAX_POINTS } : empty("wrong");
  }

  const selected = r ? Array.from(new Set(r.selected)) : [];
  if (selected.length === 0) return empty("unanswered");

  const known = new Set(q.options.map((o) => o.id));
  // Une option inexistante rend la réponse invalide : elle ne rapporte rien et est signalée.
  if (selected.some((id) => !known.has(id))) return empty("invalid");

  const correctIds = new Set(q.options.filter((o) => o.correct).map((o) => o.id));
  const wrongSelected = selected.filter((id) => !correctIds.has(id)).length;
  const rightSelected = selected.filter((id) => correctIds.has(id)).length;

  if (q.format === "single") {
    if (selected.length > 1) return empty("invalid");
    return wrongSelected === 0 ? { status: "correct", isCorrect: true, points: MAX_POINTS, maxPoints: MAX_POINTS } : empty("wrong");
  }

  // Choix multiples.
  if (wrongSelected > 0) return empty("wrong");
  if (rightSelected === correctIds.size) {
    return { status: "correct", isCorrect: true, points: MAX_POINTS, maxPoints: MAX_POINTS };
  }
  if (rule === "doc_partial" && rightSelected * 2 >= correctIds.size) {
    // Barème affiché pour l'analyse documentaire [S1] : au moins la moitié des réponses attendues,
    // sans mauvaise réponse, donne la moitié des points.
    return { status: "partial", isCorrect: false, points: MAX_POINTS / 2, maxPoints: MAX_POINTS };
  }
  return empty("wrong");
}

export type AttemptScore = {
  points: number;
  maxPoints: number;
  answered: number;
  total: number;
  byQuestion: Record<string, QuestionScore>;
};

export function scoreAttempt(
  questions: ScorableQuestion[],
  responses: Map<string, ScorableResponse>,
  rule: ScoringRule,
): AttemptScore {
  const byQuestion: Record<string, QuestionScore> = {};
  let points = 0;
  let maxPoints = 0;
  let answered = 0;
  for (const q of questions) {
    const s = scoreQuestion(q, responses.get(q.id) ?? null, rule);
    byQuestion[q.id] = s;
    points += s.points;
    maxPoints += s.maxPoints;
    if (s.status !== "unanswered") answered++;
  }
  return { points, maxPoints, answered, total: questions.length, byQuestion };
}

export function toTwenty(points: number, maxPoints: number) {
  if (maxPoints === 0) return 0;
  return Math.round((points / maxPoints) * 200) / 10;
}
