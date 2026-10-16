// Journal en anglais : un lot de sujets par semaine, du plus récent au plus ancien.
// Chaque lundi, la tâche planifiée ajoute un fichier news-AAAA-Www.ts et l'inscrit EN TÊTE de NEWS_WEEKS.
// Les semaines passées restent disponibles dans la rubrique « Semaines précédentes ».
import type { LanguageExerciseDef } from "../helpers";
import { EN_NEWS_LISTENING, EN_NEWS_REPORTS, type NewsReport } from "./news-listening";

export type NewsWeek = {
  /** Semaine ISO, par exemple « 2026-W42 ». */
  week: string;
  /** Libellé affiché, par exemple « Semaine du 12 octobre 2026 ». */
  label: string;
  reports: NewsReport[];
  flashes: LanguageExerciseDef[];
};

export const NEWS_WEEKS: NewsWeek[] = [
  { week: "2026-W42", label: "Semaine du 12 octobre 2026", reports: EN_NEWS_REPORTS, flashes: EN_NEWS_LISTENING },
];

export const ALL_EN_NEWS_FLASHES = NEWS_WEEKS.flatMap((w) => w.flashes);
