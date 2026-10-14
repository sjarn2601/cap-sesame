// Estimation probabiliste expérimentale (ADA-02), calculée à côté du système simple (ADA-01) pour comparaison.
// Modèle bêta-binomial : chaque réponse autonome récente compte selon sa difficulté.
// Une réussite sur une question difficile pèse plus ; un échec sur une question facile aussi.
import type { MasteryStatus } from "./mastery";

export const ESTIMATION = {
  version: "beta-v1-2026-10",
  window: 30,
  mastered: 0.75,
  fragile: 0.5,
  confidence: 0.8,
  minAttempts: 3,
} as const;

export type EstimationEvent = { at: Date; correct: boolean; autonomous: boolean; difficulty: number };

export type Estimate = {
  mean: number | null;
  low: number | null;
  high: number | null;
  pMastered: number | null;
  status: MasteryStatus;
  explanation: string;
};

const successWeight = (d: number) => 0.75 + 0.25 * Math.min(3, Math.max(1, d));
const failureWeight = (d: number) => 1.75 - 0.25 * Math.min(3, Math.max(1, d));

/** Fonction de répartition de la loi bêta par intégration numérique (précision suffisante pour l'affichage). */
export function betaCdf(x: number, a: number, b: number, steps = 400) {
  if (x <= 0) return 0;
  if (x >= 1) return 1;
  const pdf = (t: number) => Math.exp((a - 1) * Math.log(t) + (b - 1) * Math.log(1 - t));
  const h = 1 / steps;
  let total = 0;
  let below = 0;
  for (let i = 0; i < steps; i++) {
    const t = (i + 0.5) * h;
    const v = pdf(t) * h;
    total += v;
    if (t < x) below += v;
  }
  return below / total;
}

function betaQuantile(q: number, a: number, b: number) {
  let lo = 0;
  let hi = 1;
  for (let i = 0; i < 30; i++) {
    const mid = (lo + hi) / 2;
    if (betaCdf(mid, a, b) < q) lo = mid;
    else hi = mid;
  }
  return (lo + hi) / 2;
}

const pct = (x: number) => `${Math.round(x * 100)} %`;
const r2 = (x: number) => Math.round(x * 100) / 100;

export function estimateSkill(events: EstimationEvent[]): Estimate {
  const recent = events
    .filter((e) => e.autonomous)
    .sort((a, b) => a.at.getTime() - b.at.getTime())
    .slice(-ESTIMATION.window);
  if (recent.length < ESTIMATION.minAttempts) {
    return { mean: null, low: null, high: null, pMastered: null, status: "insufficient", explanation: `Pas assez de réponses autonomes (${recent.length} sur ${ESTIMATION.minAttempts}).` };
  }
  let a = 1;
  let b = 1;
  for (const e of recent) {
    if (e.correct) a += successWeight(e.difficulty);
    else b += failureWeight(e.difficulty);
  }
  const mean = a / (a + b);
  const low = betaQuantile(0.1, a, b);
  const high = betaQuantile(0.9, a, b);
  const pMastered = 1 - betaCdf(ESTIMATION.mastered, a, b);
  const pFragile = betaCdf(ESTIMATION.fragile, a, b);
  const status: MasteryStatus =
    pMastered >= ESTIMATION.confidence ? "probable" : pFragile >= ESTIMATION.confidence ? "fragile" : high - low > 0.35 ? "insufficient" : "in_progress";
  return {
    mean: r2(mean),
    low: r2(low),
    high: r2(high),
    pMastered: r2(pMastered),
    status,
    explanation: `Réussite estimée ${pct(mean)} (entre ${pct(low)} et ${pct(high)}, 8 chances sur 10), sur ${recent.length} réponses autonomes pondérées par la difficulté.`,
  };
}

/** Écart entre difficulté annoncée et réussite observée, pour la relecture éditoriale. */
export function difficultyFlag(declared: number, rate: number, n: number, minN = 20): string | null {
  if (n < minN) return null;
  if (declared === 1 && rate < 0.6) return "plus difficile que prévu";
  if (declared === 3 && rate > 0.85) return "plus facile que prévu";
  if (declared === 2 && rate < 0.3) return "plus difficile que prévu";
  if (declared === 2 && rate > 0.92) return "plus facile que prévu";
  return null;
}
