// Compétences d'allemand (seconde langue, épreuve « Autre langue étrangère »).
import type { SkillDef } from "../helpers";

const S = (id: string, domain: string, name: string, synonyms: string[]): SkillDef => ({ id, subjectCode: "LV-DE", domain, name, synonyms });

export const SKILLS_DE: SkillDef[] = [
  S("de.cas", "Grammaire", "Les quatre cas et la déclinaison", ["cas", "declinaison", "nominatif", "accusatif", "datif", "genitif", "article", "kein", "pronom personnel", "possessif"]),
  S("de.prep", "Grammaire", "Prépositions et cas", ["preposition", "wechselprapositionen", "wo wohin", "mit", "fur", "wegen", "trotz", "wahrend", "datif", "accusatif"]),
  S("de.ordre", "Syntaxe", "Place du verbe", ["ordre des mots", "place du verbe", "v2", "subordonnee", "inversion", "verbe en fin", "um zu", "infinitive"]),
  S("de.conj", "Verbes", "Conjugaison : présent, prétérit, parfait, futur", ["conjugaison", "verbes forts", "preterit", "parfait", "participe passe", "haben sein", "futur", "werden"]),
  S("de.modaux", "Verbes", "Verbes de modalité", ["modaux", "konnen", "durfen", "mussen", "sollen", "wollen", "mogen", "mochten", "nicht mussen"]),
  S("de.trennbar", "Verbes", "Verbes à particule et verbes à préposition", ["particule separable", "inseparable", "trennbar", "warten auf", "sich freuen", "denken an", "daran", "wofur"]),
  S("de.adj", "Grammaire", "Déclinaison de l'adjectif, comparatif et superlatif", ["adjectif", "declinaison faible", "forte", "mixte", "comparatif", "superlatif", "als", "am besten"]),
  S("de.k2", "Verbes", "Konjunktiv II et Konjunktiv I", ["subjonctif", "konjunktiv", "wurde", "ware", "hatte", "konnte", "hypothese", "irreel", "politesse", "discours indirect"]),
  S("de.passiv", "Verbes", "Le passif", ["passif", "passiv", "werden", "worden", "von", "passif modal"]),
  S("de.relativ", "Grammaire", "Pronoms relatifs", ["relatif", "relativsatz", "der die das", "dessen", "deren", "denen", "was", "wo"]),
  S("de.connecteurs", "Syntaxe", "Connecteurs et conjonctions", ["connecteur", "conjonction", "denn", "weil", "deshalb", "trotzdem", "obwohl", "damit", "als wenn wann", "ob", "sondern"]),
  S("de.vocab", "Vocabulaire", "Faux-amis et vocabulaire utile", ["faux amis", "bekommen", "gymnasium", "eventuell", "also", "vocabulaire", "economie", "etudes"]),
  S("de.lecture", "Compréhension", "Compréhension de textes courts", ["comprehension", "lecture", "texte", "leseverstehen"]),
];
