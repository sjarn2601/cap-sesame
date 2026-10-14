// Assemble le catalogue complet à partir des contenus de démonstration et des banques de matières.
// Un cours de la banque remplace le cours de démonstration de la même compétence.
import { SKILLS, LESSONS as DEMO_LESSONS, DOCUMENT_SET, NEWS, NEWS_EXTRA, LANGUAGE_EXERCISES } from "../demo-catalog";
import { DEMO_QUESTIONS } from "../demo-questions";
import type { BankQuestion, DocumentSetDef, LanguageExerciseDef, LessonDef, NewsDef, SkillDef, SubjectBank } from "./helpers";

export type Flagged<T> = T & { isDemo: boolean };

export function assemble(banksIn: Record<string, SubjectBank>) {
  const banks = Object.values(banksIn);
  // Une compétence redéfinie par une banque (nom, synonymes) remplace celle de démonstration.
  const bankSkills = banks.flatMap((b) => b.skills);
  const skills: SkillDef[] = [...SKILLS.map((d) => bankSkills.find((s) => s.id === d.id) ?? d), ...bankSkills.filter((s) => !SKILLS.some((d) => d.id === s.id))];
  const bankLessons = banks.flatMap((b) => b.lessons);
  const lessons: Flagged<LessonDef>[] = [
    ...DEMO_LESSONS.filter((l) => !bankLessons.some((b) => b.skillId === l.skillId)).map((l) => ({ ...l, isDemo: true })),
    ...bankLessons.map((l) => ({ ...l, isDemo: false })),
  ];
  const questions: Flagged<BankQuestion>[] = [...DEMO_QUESTIONS.map((q) => ({ ...q, isDemo: false })), ...banks.flatMap((b) => b.questions.map((q) => ({ ...q, isDemo: false })))];
  const documentSets: Flagged<DocumentSetDef>[] = [{ ...DOCUMENT_SET, isDemo: true }, ...banks.flatMap((b) => (b.documentSets ?? []).map((d) => ({ ...d, isDemo: false })))];
  const news: Flagged<NewsDef>[] = [...NEWS.map((n) => ({ ...n, ...NEWS_EXTRA[n.title], isDemo: false })), ...banks.flatMap((b) => (b.news ?? []).map((n) => ({ ...n, isDemo: false })))];
  const languageExercises: Flagged<LanguageExerciseDef>[] = [...LANGUAGE_EXERCISES.map((x) => ({ ...x, isDemo: false })), ...banks.flatMap((b) => (b.languageExercises ?? []).map((x) => ({ ...x, isDemo: false })))];
  return { skills, lessons, questions, documentSets, news, languageExercises };
}
