// Outils communs à la banque de français : fabrique de questions (45 s, trois indices).
import { forSubject, type BankQuestion, type LessonDef, type Opt, type SkillDef } from "../helpers";

const base = forSubject("FR");

type Anchor = "regle" | "formules" | "methode" | "exemple" | "erreur" | "approfondir";
type More = { a?: Anchor; r?: boolean };

export type FrPart = { skill: SkillDef; lesson: LessonDef; questions: BankQuestion[] };

/** Fabrique de questions pour une compétence donnée. */
export function maker(skill: string) {
  return (
    id: string,
    family: string,
    difficulty: 1 | 2 | 3,
    stem: string,
    opts: Opt[],
    explanation: string,
    rule: string,
    hints: [string, string, string],
    more: More = {},
  ): BankQuestion =>
    base(id, skill, family, difficulty, stem, opts, explanation, rule, {
      hints,
      timeSec: 45,
      lessonAnchor: more.a ?? "regle",
      ...(more.r ? { reserved: true } : {}),
    });
}
