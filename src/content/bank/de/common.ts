// Outils partagés de la banque d'allemand (LV-DE).
import { forSubject, type BankQuestion, type LessonDef, type Opt } from "../helpers";

const base = forSubject("LV-DE");

type Anchor = "regle" | "formules" | "methode" | "exemple" | "erreur" | "approfondir";

/** Question d'allemand : temps visé 45 s, trois indices gradués, ancre de cours et statut réservé. */
export function Q(
  id: string,
  skill: string,
  family: string,
  difficulty: 1 | 2 | 3,
  stem: string,
  opts: Opt[],
  explanation: string,
  rule: string,
  hints: [string, string, string],
  o: { anchor?: Anchor; reserved?: boolean; timeSec?: number } = {},
): BankQuestion {
  return base(id, skill, family, difficulty, stem, opts, explanation, rule, {
    hints,
    timeSec: o.timeSec ?? 45,
    lessonAnchor: o.anchor ?? "regle",
    ...(o.reserved ? { reserved: true } : {}),
  });
}

export const L = (d: LessonDef) => d;
