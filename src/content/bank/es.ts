// Banque d'espagnol (LV-ES, épreuve « Autre langue étrangère ») : cours, questions et exercices oraux.
// Les contenus sont répartis dans src/content/bank/es/.
import type { SubjectBank } from "./helpers";
import { ES_SKILLS } from "./es/q";
import { LESSONS_VERBES1, QUESTIONS_VERBES1 } from "./es/verbes1";
import { LESSONS_VERBES2, QUESTIONS_VERBES2 } from "./es/verbes2";
import { LESSONS_GRAMMAIRE, QUESTIONS_GRAMMAIRE } from "./es/grammaire";
import { LESSONS_LEXIQUE, QUESTIONS_LEXIQUE } from "./es/lexique";
import { LESSONS_LECTURE, QUESTIONS_LECTURE, ES_LANGUAGE_EXERCISES } from "./es/lecture";

export const BANK_ES: SubjectBank = {
  skills: ES_SKILLS,
  lessons: [...LESSONS_VERBES1, ...LESSONS_VERBES2, ...LESSONS_GRAMMAIRE, ...LESSONS_LEXIQUE, ...LESSONS_LECTURE],
  questions: [...QUESTIONS_VERBES1, ...QUESTIONS_VERBES2, ...QUESTIONS_GRAMMAIRE, ...QUESTIONS_LEXIQUE, ...QUESTIONS_LECTURE],
  languageExercises: ES_LANGUAGE_EXERCISES,
};
