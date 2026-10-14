// Banque d'allemand, seconde langue (LV-DE) : compétences, cours, questions et exercices oraux.
import type { SubjectBank } from "./helpers";
import { SKILLS_DE } from "./de/skills";
import { lessonCas, questionsCas } from "./de/cas";
import { lessonPrep, questionsPrep } from "./de/prep";
import { lessonOrdre, questionsOrdre } from "./de/ordre";
import { lessonConj, questionsConj } from "./de/conj";
import { lessonModaux, questionsModaux } from "./de/modaux";
import { lessonTrennbar, questionsTrennbar } from "./de/trennbar";
import { lessonAdj, questionsAdj } from "./de/adj";
import { lessonK2, questionsK2 } from "./de/k2";
import { lessonPassiv, questionsPassiv } from "./de/passiv";
import { lessonRelativ, questionsRelativ } from "./de/relativ";
import { lessonConnecteurs, questionsConnecteurs } from "./de/connecteurs";
import { lessonVocab, questionsVocab } from "./de/vocab";
import { lessonLecture, questionsLecture } from "./de/lecture";
import { LANGUAGE_EXERCISES_DE } from "./de/oral";

export const BANK_DE: SubjectBank = {
  skills: SKILLS_DE,
  lessons: [lessonCas, lessonPrep, lessonOrdre, lessonConj, lessonModaux, lessonTrennbar, lessonAdj, lessonK2, lessonPassiv, lessonRelativ, lessonConnecteurs, lessonVocab, lessonLecture],
  questions: [
    ...questionsCas, ...questionsPrep, ...questionsOrdre, ...questionsConj, ...questionsModaux, ...questionsTrennbar, ...questionsAdj,
    ...questionsK2, ...questionsPassiv, ...questionsRelativ, ...questionsConnecteurs, ...questionsVocab, ...questionsLecture,
  ],
  languageExercises: LANGUAGE_EXERCISES_DE,
};
