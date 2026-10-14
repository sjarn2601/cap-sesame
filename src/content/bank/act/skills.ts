// Compétences de la matière Enjeux contemporains (act.inst, act.eco et act.env existent déjà dans le catalogue).
import type { SkillDef } from "../helpers";

const s = (id: string, domain: string, name: string, synonyms: string[]): SkillDef => ({ id, subjectCode: "ACT", domain, name, synonyms });

export const ACT_SKILLS: SkillDef[] = [
  s("act.ue", "Union européenne", "Union européenne : institutions, euro, politiques", ["union europeenne", "commission", "conseil europeen", "zone euro", "elargissement", "bce", "parlement europeen"]),
  s("act.geo", "Relations internationales", "Relations internationales et conflits", ["onu", "otan", "g7", "g20", "brics", "omc", "guerre", "geopolitique", "diplomatie"]),
  s("act.entreprise", "Économie", "Entreprises, marchés et travail", ["bourse", "cac 40", "entreprise", "introduction en bourse", "smic", "emploi", "acquisition"]),
  s("act.societe", "Société", "Société : démographie, éducation, droit", ["demographie", "natalite", "fecondite", "inegalites", "loi", "fin de vie", "education"]),
  s("act.sante", "Sciences et santé", "Sciences, santé et espace", ["sante", "oms", "epidemie", "nobel", "espace", "recherche", "medecine"]),
  s("act.tech", "Technologie", "Technologie, numérique et régulation", ["intelligence artificielle", "ai act", "dsa", "dma", "reseaux sociaux", "numerique", "plateformes"]),
  s("act.culture", "Arts et médias", "Arts, médias, littérature et cinéma", ["cinema", "cannes", "cesar", "goncourt", "nobel de litterature", "medias", "prix litteraire"]),
  s("act.sport", "Sport", "Sport et grandes compétitions", ["football", "coupe du monde", "tour de france", "jeux olympiques", "tennis", "rugby"]),
  s("act.methode", "Méthode", "Méthode de l'épreuve d'enjeux contemporains", ["methode", "gestion du temps", "fiches", "revision", "fait opinion", "45 secondes"]),
];
