// Outils communs à la banque d'anglais : une partie par compétence.
import { forSubject, type BankQuestion, type LessonDef, type Opt, type SkillDef } from "../helpers";

export type EnPart = { skill?: SkillDef; lesson: LessonDef; questions: BankQuestion[] };

const q = forSubject("EN");

type Anchor = "regle" | "formules" | "methode" | "exemple" | "erreur" | "approfondir";

/** Question d'anglais : 45 s, trois indices gradués, ancre de cours et réserve facultatives. */
export function E(
  id: string,
  skill: string,
  family: string,
  difficulty: number,
  stem: string,
  opts: Opt[],
  explanation: string,
  rule: string,
  hints: [string, string, string],
  o: { a?: Anchor; r?: boolean; t?: number } = {},
): BankQuestion {
  return q(id, skill, family, difficulty, stem, opts, explanation, rule, {
    hints,
    timeSec: o.t ?? 45,
    lessonAnchor: o.a ?? "regle",
    ...(o.r ? { reserved: true } : {}),
  });
}

export function skill(id: string, domain: string, name: string, synonyms: string[]): SkillDef {
  return { id, subjectCode: "EN", domain, name, synonyms };
}
