// Outils communs aux banques de contenus : format des questions, des cours et des dossiers.
import type { DocumentItem } from "@/db/schema";

export type BankQuestion = {
  questionId: string;
  subjectCode: string;
  skillIds: string[];
  familyId: string;
  difficulty: number;
  format: "single" | "multiple" | "numeric";
  stem: string;
  options: { id: string; text: string; correct: boolean; justification: string }[];
  numericAnswer?: number | null;
  numericTolerance?: number | null;
  explanation: string;
  rule: string;
  hints: string[];
  timeSec: number;
  references: string[];
  lessonAnchor: string | null;
  reserved?: boolean;
  documentSet?: string;
};

export type Opt = [text: string, correct: boolean, justification: string];

export type LessonDef = {
  skillId: string;
  title: string;
  objectives: string[];
  prerequisites?: string[];
  regle: string;
  exemple: string;
  erreur: string;
  approfondir: string;
  /** Formules ou règles à connaître par cœur, une par ligne (facultatif). */
  formules?: string;
  /** Méthode pas à pas, une étape par ligne (facultatif). */
  methode?: string;
  cards: [front: string, back: string, reversible: boolean][];
};

export type SkillDef = { id: string; subjectCode: string; domain: string; name: string; synonyms: string[] };

export type DocumentSetDef = { id: string; title: string; documents: DocumentItem[] };

export type NewsDef = {
  slug: string;
  title: string;
  category: string;
  zone: string;
  eventDate: string;
  summary: string;
  actors: string[];
  context: string;
  stakes: string;
  whyItMatters: string;
  vocabulary: { term: string; definition: string }[];
  claims: { kind: "fact" | "statement" | "interpretation" | "uncertain"; text: string }[];
  sources: { label: string; url: string }[];
  viewpoints?: { actor: string; position: string; source: { label: string; url: string } }[];
};

export type LanguageExerciseDef = {
  exerciseId: string;
  subjectCode: string;
  kind: "listening" | "read_aloud" | "conversation";
  title: string;
  level: string;
  text: string;
  transcriptByDefault?: boolean;
  question?: string;
  options?: { id: string; text: string; correct: boolean; justification: string }[];
  prompts?: string[];
  modelAnswer?: string;
};

export type SubjectBank = {
  skills: SkillDef[];
  lessons: LessonDef[];
  questions: BankQuestion[];
  documentSets?: DocumentSetDef[];
  news?: NewsDef[];
  languageExercises?: LanguageExerciseDef[];
};

// Ordre des options stable mais propre à chaque question : la bonne réponse n'est pas toujours en tête.
function hash(s: string) {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) h = Math.imul(h ^ s.charCodeAt(i), 16777619);
  return h >>> 0;
}

export function mixOptions<T>(key: string, opts: T[]): T[] {
  const a = [...opts];
  let h = hash(key);
  for (let i = a.length - 1; i > 0; i--) {
    h = Math.imul(h ^ (h >>> 15), 2246822519) >>> 0;
    const j = h % (i + 1);
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const IDS = ["a", "b", "c", "d", "e", "f"];

/** Question à choix : une seule bonne option (QCU) ou plusieurs (QCM), détecté automatiquement. */
export function q(
  questionId: string,
  subjectCode: string,
  skill: string,
  familyId: string,
  difficulty: number,
  stem: string,
  opts: Opt[],
  explanation: string,
  rule: string,
  extra: Partial<BankQuestion> = {},
): BankQuestion {
  const correct = opts.filter((o) => o[1]).length;
  return {
    questionId,
    subjectCode,
    skillIds: [skill],
    familyId,
    difficulty,
    format: correct > 1 ? "multiple" : "single",
    stem,
    options: mixOptions(questionId, opts).map(([text, c, justification], i) => ({ id: IDS[i], text, correct: c, justification })),
    explanation,
    rule,
    hints: [],
    timeSec: 60,
    references: [`Cours CAP SESAME : ${skill}`],
    lessonAnchor: "regle",
    ...extra,
  };
}

/** Raccourci : fabrique q() pour une matière donnée. */
export const forSubject =
  (subjectCode: string) =>
  (questionId: string, skill: string, familyId: string, difficulty: number, stem: string, opts: Opt[], explanation: string, rule: string, extra: Partial<BankQuestion> = {}) =>
    q(questionId, subjectCode, skill, familyId, difficulty, stem, opts, explanation, rule, extra);
