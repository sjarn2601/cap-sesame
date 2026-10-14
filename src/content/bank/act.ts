// Banque ACT (Enjeux contemporains) : un fichier par compétence dans ./act/.
import type { SubjectBank } from "./helpers";
import { ACT_SKILLS } from "./act/skills";
import { ACT_NEWS } from "./act/news";
import { ACT_INST } from "./act/inst";
import { ACT_UE } from "./act/ue";
import { ACT_GEO } from "./act/geo";
import { ACT_ECO } from "./act/eco";
import { ACT_ENTREPRISE } from "./act/entreprise";
import { ACT_ENV } from "./act/env";
import { ACT_SOCIETE } from "./act/societe";
import { ACT_SANTE } from "./act/sante";
import { ACT_TECH } from "./act/tech";
import { ACT_CULTURE } from "./act/culture";
import { ACT_SPORT } from "./act/sport";
import { ACT_METHODE } from "./act/methode";

const PARTS: SubjectBank[] = [
  ACT_INST, ACT_UE, ACT_GEO, ACT_ECO, ACT_ENTREPRISE, ACT_ENV,
  ACT_SOCIETE, ACT_SANTE, ACT_TECH, ACT_CULTURE, ACT_SPORT, ACT_METHODE,
];

export const BANK_ACT: SubjectBank = {
  skills: ACT_SKILLS,
  lessons: PARTS.flatMap((p) => p.lessons),
  questions: PARTS.flatMap((p) => p.questions),
  news: ACT_NEWS,
};
