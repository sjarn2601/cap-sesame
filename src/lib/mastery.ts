// Estimation de maîtrise explicable (ADA-01). Règles documentées et versionnées ;
// pas de modèle statistique tant que les données sont insuffisantes.

export const MASTERY_WEIGHTS = {
  version: "v1-2026-10",
  recentSuccess: 0.6,
  regularity: 0.2,
  diversity: 0.2,
  recentWindow: 20,
  thresholds: { minAutonomous: 8, minFamilies: 3, minDays: 2, probable: 0.75, fragile: 0.5 },
} as const;

export type MasteryEvent = {
  at: Date;
  correct: boolean;
  // Une réponse donnée après un indice ou en mode pédagogique n'est pas autonome (MAT-01).
  autonomous: boolean;
  familyId: string;
};

export type MasteryStatus = "insufficient" | "fragile" | "in_progress" | "probable";

export type Mastery = {
  score: number | null;
  provisional: boolean;
  status: MasteryStatus;
  autonomousAttempts: number;
  families: number;
  distinctDays: number;
  explanation: string;
  /** Taux de réussite observé quand les données sont encore insuffisantes (sert seulement à ordonner les priorités). */
  observedRate?: number | null;
};

const dayKey = (d: Date) => d.toISOString().slice(0, 10);

export function computeMastery(events: MasteryEvent[]): Mastery {
  const w = MASTERY_WEIGHTS;
  const autonomous = events.filter((e) => e.autonomous).sort((a, b) => a.at.getTime() - b.at.getTime());
  const recent = autonomous.slice(-w.recentWindow);
  const successFamilies = new Set(autonomous.filter((e) => e.correct).map((e) => e.familyId));
  const days = new Set(autonomous.map((e) => dayKey(e.at)));

  const base = {
    autonomousAttempts: autonomous.length,
    families: successFamilies.size,
    distinctDays: days.size,
  };

  if (autonomous.length < 3) {
    return {
      ...base,
      score: null,
      provisional: true,
      status: "insufficient",
      observedRate: autonomous.length ? autonomous.filter((e) => e.correct).length / autonomous.length : null,
      explanation: `Données insuffisantes : ${autonomous.length} réponse(s) autonome(s) sur ${w.thresholds.minAutonomous} nécessaires.`,
    };
  }

  const successRate = recent.filter((e) => e.correct).length / recent.length;
  const regularity = Math.min(1, days.size / 4);
  const diversity = Math.min(1, successFamilies.size / w.thresholds.minFamilies);
  const score = Math.round((w.recentSuccess * successRate + w.regularity * regularity + w.diversity * diversity) * 100) / 100;

  const t = w.thresholds;
  const enough = autonomous.length >= t.minAutonomous && successFamilies.size >= t.minFamilies && days.size >= t.minDays;

  if (!enough) {
    const missing: string[] = [];
    if (autonomous.length < t.minAutonomous) missing.push(`${t.minAutonomous - autonomous.length} réponse(s) autonome(s)`);
    if (successFamilies.size < t.minFamilies) missing.push(`${t.minFamilies - successFamilies.size} famille(s) réussie(s)`);
    if (days.size < t.minDays) missing.push(`${t.minDays - days.size} jour(s) de pratique`);
    return {
      ...base,
      score,
      provisional: true,
      status: "insufficient",
      explanation: `Estimation provisoire. Il manque ${missing.join(", ")} pour conclure.`,
    };
  }

  // La régularité et la diversité ne compensent jamais un faible taux de réussite.
  const status: MasteryStatus =
    successRate < t.fragile || score < t.fragile ? "fragile" : score >= t.probable && successRate >= t.probable ? "probable" : "in_progress";
  const label = { probable: "Maîtrise probable", fragile: "Notion fragile", in_progress: "En progression", insufficient: "" }[status];
  return {
    ...base,
    score,
    provisional: false,
    status,
    explanation: `${label} : ${Math.round(successRate * 100)} % de réussite autonome récente sur ${recent.length} réponses, ${successFamilies.size} familles, ${days.size} jours.`,
  };
}

export const MASTERY_LABELS: Record<MasteryStatus, string> = {
  insufficient: "Données insuffisantes",
  fragile: "Fragile",
  in_progress: "En progression",
  probable: "Maîtrise probable",
};
