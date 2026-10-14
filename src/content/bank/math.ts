// Banque MATH : une partie par compétence dans le dossier math/.
import type { SubjectBank } from "./helpers";
import type { PartieMath } from "./math/outils";
import { CALC } from "./math/calc";
import { PROP } from "./math/prop";
import { UNITS } from "./math/units";
import { PCT } from "./math/pct";
import { STATS } from "./math/stats";
import { EQ } from "./math/eq";
import { SYS } from "./math/sys";
import { SECOND } from "./math/second";
import { FONCTIONS } from "./math/fonctions";
import { SUITES } from "./math/suites";
import { PROBA } from "./math/proba";
import { PROBACOND } from "./math/probacond";
import { DENOMBREMENT } from "./math/denombrement";
import { LOGIQUE } from "./math/logique";
import { ECO } from "./math/eco";
import { GEO } from "./math/geo";

const PARTIES: PartieMath[] = [CALC, PROP, UNITS, PCT, STATS, EQ, SYS, SECOND, FONCTIONS, SUITES, PROBA, PROBACOND, DENOMBREMENT, LOGIQUE, ECO, GEO];

export const BANK_MATH: SubjectBank = {
  skills: PARTIES.map((p) => p.skill),
  lessons: PARTIES.map((p) => p.lesson),
  questions: PARTIES.flatMap((p) => p.questions),
};
