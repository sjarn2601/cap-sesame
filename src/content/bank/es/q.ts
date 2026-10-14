// Outils propres à la banque d'espagnol (LV-ES) : fabrique de questions et liste des compétences.
import { forSubject, type BankQuestion, type Opt, type SkillDef } from "../helpers";

const base = forSubject("LV-ES");

type Anchor = "regle" | "formules" | "methode" | "exemple" | "erreur" | "approfondir";

/** Question QCU d'espagnol : trois indices gradués, 45 s par défaut. */
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
  const extra: Partial<BankQuestion> = {
    hints,
    timeSec: o.timeSec ?? 45,
    lessonAnchor: o.anchor ?? "regle",
    references: [`Cours CAP SESAME : ${skill}`],
  };
  if (o.reserved) extra.reserved = true;
  return base(id, skill, family, difficulty, stem, opts, explanation, rule, extra);
}

const S = (id: string, domain: string, name: string, synonyms: string[]): SkillDef => ({ id, subjectCode: "LV-ES", domain, name, synonyms });

// es.serestar et es.vocab existent déjà dans demo-catalog.ts : on ne les redéclare pas.
export const ES_SKILLS: SkillDef[] = [
  S("es.presente", "Conjugaison", "Présent, diphtongues et gérondif", ["present espagnol", "diphtongue", "gerondif", "estar gerundio", "verbes irreguliers"]),
  S("es.pasados", "Conjugaison", "Temps du passé", ["preterito indefinido", "imperfecto", "passe simple espagnol", "perfecto compuesto", "pluscuamperfecto", "participe irregulier"]),
  S("es.subj", "Conjugaison", "Subjonctif présent et imparfait", ["subjonctif espagnol", "subjuntivo", "cuando futur", "ojala", "para que", "concordance des temps", "si imparfait"]),
  S("es.imperatif", "Conjugaison", "Impératif et enclise", ["imperatif espagnol", "imperativo", "usted", "ustedes", "enclise", "defense"]),
  S("es.pronoms", "Grammaire", "Pronoms personnels compléments", ["pronoms espagnol", "cod coi", "se lo", "double pronom", "conmigo", "pronom apres preposition"]),
  S("es.gustar", "Grammaire", "Gustar et verbes de même construction", ["gustar", "encantar", "doler", "parecer", "me gusta"]),
  S("es.porpara", "Grammaire", "Por, para et prépositions", ["por para", "prepositions espagnol", "a personnel", "desde hace", "hace"]),
  S("es.tournures", "Grammaire", "Tournures verbales et obligation", ["periphrases verbales", "soler", "acabar de", "volver a", "seguir gerondif", "llevar", "hay que", "tener que"]),
  S("es.connecteurs", "Grammaire", "Connecteurs logiques", ["connecteurs espagnol", "aunque", "sin embargo", "sino", "pero", "por lo tanto", "a pesar de"]),
  S("es.ortho", "Orthographe", "Accentuation et apocope", ["accent ecrit", "tilde", "tilde diacritica", "apocope", "buen gran primer"]),
  S("es.lecture", "Compréhension", "Compréhension de textes", ["comprehension ecrite", "lecture espagnol", "texte court"]),
  S("es.culture", "Culture", "Civilisation hispanique", ["civilisation espagnole", "amerique latine", "capitales", "institutions espagnoles", "fetes"]),
];
