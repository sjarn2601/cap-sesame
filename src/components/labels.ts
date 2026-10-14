export const TASK_LABELS: Record<string, string> = {
  lesson: "Cours",
  practice: "Série d'exercices",
  review: "Révisions du carnet",
  exam: "Simulation chronométrée",
  diagnostic: "Diagnostic",
};

export const DAY_LABELS: Record<string, string> = { mon: "Lundi", tue: "Mardi", wed: "Mercredi", thu: "Jeudi", fri: "Vendredi", sat: "Samedi", sun: "Dimanche" };

export function frDate(iso: string | Date, opts: Intl.DateTimeFormatOptions = { weekday: "long", day: "numeric", month: "long" }) {
  const d = typeof iso === "string" ? new Date(iso.length === 10 ? `${iso}T12:00:00Z` : iso) : iso;
  return new Intl.DateTimeFormat("fr-FR", { timeZone: "Europe/Paris", ...opts }).format(d);
}

export function frDateTime(iso: string | Date) {
  return frDate(iso, { day: "numeric", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit" });
}
