// Outils propres à la banque de mathématiques : chaque fichier de compétence fabrique ses questions avec maker().
import { forSubject, type BankQuestion, type LessonDef, type Opt, type SkillDef } from "../helpers";

const Q = forSubject("MATH");

export type Ancre = "regle" | "formules" | "methode" | "exemple" | "erreur" | "approfondir";

export type PartieMath = { skill: SkillDef; lesson: LessonDef; questions: BankQuestion[] };

/** Fabrique de questions pour une compétence : identifiant, sous-famille, difficulté, énoncé, options, corrigé, règle, indices, ancre, réservée. */
export function maker(skill: string) {
  return (
    id: string,
    famille: string,
    difficulte: 1 | 2 | 3,
    enonce: string,
    options: Opt[],
    corrige: string,
    regle: string,
    indices: [string, string, string],
    ancre: Ancre = "regle",
    reservee = false,
  ): BankQuestion =>
    Q(id, skill, `${skill}.${famille}`, difficulte, enonce, options, corrige, regle, {
      hints: indices,
      timeSec: 120,
      lessonAnchor: ancre,
      references: [`Cours CAP SESAME : ${skill}`],
      ...(reservee ? { reserved: true } : {}),
    });
}

export function competence(id: string, domain: string, name: string, synonyms: string[]): SkillDef {
  return { id, subjectCode: "MATH", domain, name, synonyms };
}
