// Outil commun aux fichiers de la banque ACT : fabrique de questions à 45 s.
import { forSubject, type BankQuestion, type Opt } from "../helpers";

const base = forSubject("ACT");

/** a : ancre du cours ; n : fiches d'actualité liées (slugs) ; r : question réservée. */
export type QX = { a?: string; n?: string[]; r?: boolean };

export function maker(skill: string) {
  return (
    id: string,
    family: string,
    difficulty: number,
    stem: string,
    opts: Opt[],
    explanation: string,
    rule: string,
    hints: [string, string, string],
    x: QX = {},
  ): BankQuestion =>
    base(id, skill, `${skill}.${family}`, difficulty, stem, opts, explanation, rule, {
      hints,
      timeSec: 45,
      lessonAnchor: x.a ?? "regle",
      references: [`Cours CAP SESAME : ${skill}`, ...(x.n ?? []).map((s) => `news:${s}`)],
      ...(x.r ? { reserved: true } : {}),
    });
}
