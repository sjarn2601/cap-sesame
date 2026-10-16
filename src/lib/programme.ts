// Journal en anglais du jour (environ 15 minutes) : assemblé à partir des reportages et flashs originaux de la banque,
// un programme différent chaque jour. Lu par la synthèse vocale de l'appareil : il marche aussi hors ligne.
import type { LanguageExerciseDef } from "@/content/bank/helpers";
import type { NewsReport } from "@/content/bank/en/news-listening";

export type Segment = {
  kind: "intro" | "report" | "flash" | "vocab" | "quiz" | "outro";
  label: string;
  title: string;
  category?: string;
  text: string;
  vocabulary?: { term: string; fr: string }[];
};
export type Quiz = { question: string; options: { id: string; text: string; correct: boolean; justification: string }[] };
export type Programme = { date: string; dateLabel: string; segments: Segment[]; quiz: Quiz[]; words: number };

export const WORDS_PER_MINUTE = 150;
export const words = (t: string) => t.split(/\s+/).filter(Boolean).length;

/** Jour de Paris au format AAAA-MM-JJ et numéro de jour depuis 1970. */
export function parisDay(now = new Date()) {
  const date = now.toLocaleDateString("fr-CA", { timeZone: "Europe/Paris" });
  return { date, n: Math.floor(Date.parse(`${date}T00:00:00Z`) / 86_400_000) };
}

export function buildProgramme(reports: NewsReport[], flashes: LanguageExerciseDef[], now = new Date()): Programme | null {
  if (reports.length < 4) return null;
  const { date, n } = parisDay(now);
  const N = reports.length;
  // Pas de 4 : chaque reportage revient environ tous les N/4 jours, jamais deux jours de suite.
  const main = [0, 1, 2, 3].map((k) => reports[(n * 4 + k) % N]);
  const usedSlugs = new Set(main.map((r) => r.exerciseId));
  const flashPool = flashes.filter((f) => !usedSlugs.has(f.exerciseId));
  const others = [0, 1, 2, 3].map((k) => flashPool[(n * 4 + k + 2) % Math.max(1, flashPool.length)]).filter(Boolean);
  const dateLabelEn = new Date(`${date}T12:00:00Z`).toLocaleDateString("en-GB", { weekday: "long", day: "numeric", month: "long", timeZone: "UTC" });
  const dateLabel = new Date(`${date}T12:00:00Z`).toLocaleDateString("fr-FR", { weekday: "long", day: "numeric", month: "long", timeZone: "UTC" });

  const segments: Segment[] = [
    {
      kind: "intro",
      label: "Headlines",
      title: "CAP SESAME World News",
      text: `Hello, and welcome to CAP SESAME World News for ${dateLabelEn}. This is your English news programme for today. Here are the headlines. ${main.map((r) => r.headline).join(" ")} Also in this programme: ${others.map((o) => o.title).join(", ")}. And at the end, the words of the day and a short quiz.`,
    },
    ...main.flatMap((r, i): Segment[] => [
      { kind: "report", label: `Report ${i + 1} of 4`, title: r.headline, category: r.category, text: r.report, vocabulary: r.vocabulary },
    ]),
    {
      kind: "flash",
      label: "In other news",
      title: "In other news",
      text: "Now, in other news.",
    },
    ...others.map((o): Segment => ({ kind: "flash", label: "In other news", title: o.title, text: o.text })),
    {
      kind: "vocab",
      label: "Words of the day",
      title: "Words of the day",
      text: `Time for the words of the day. Listen and repeat. ${main
        .flatMap((r) => r.vocabulary)
        .map((v) => `${v.term}.`)
        .join(" ")}`,
      vocabulary: main.flatMap((r) => r.vocabulary),
    },
    {
      kind: "outro",
      label: "Quiz",
      title: "Your turn",
      text: "That's the end of today's programme. Now it's your turn: answer the four questions on screen about the stories you heard in other news. Thank you for listening, and see you tomorrow.",
    },
  ];
  const quiz: Quiz[] = others.filter((o) => o.question && o.options?.length).map((o) => ({ question: o.question!, options: o.options! }));
  return { date, dateLabel, segments, quiz, words: segments.reduce((a, s) => a + words(s.text), 0) };
}

/** Découpe un texte en phrases pour la synthèse vocale (les navigateurs coupent les énoncés trop longs). */
export function sentences(text: string) {
  return text.match(/[^.!?]+[.!?]+["»”’]?|[^.!?]+$/g)?.map((s) => s.trim()).filter(Boolean) ?? [text];
}
