// Banque d'anglais : une partie par compétence dans le dossier en/.
import type { SubjectBank } from "./helpers";
import type { EnPart } from "./en/common";
import { TENSES } from "./en/tenses";
import { COND } from "./en/cond";
import { MODALS } from "./en/modals";
import { PASSIVE } from "./en/passive";
import { GERUND } from "./en/gerund";
import { REPORTED } from "./en/reported";
import { RELATIVES } from "./en/relatives";
import { DETERMINERS } from "./en/determiners";
import { COMPAR } from "./en/compar";
import { PREP } from "./en/prep";
import { PHRASAL } from "./en/phrasal";
import { VOCAB } from "./en/vocab";
import { BUSINESS } from "./en/business";
import { NUMBERS } from "./en/numbers";
import { SYNTAX } from "./en/syntax";
import { READING } from "./en/reading";
import { ALL_EN_NEWS_FLASHES } from "./en/news-weeks";

const PARTS: EnPart[] = [TENSES, COND, MODALS, PASSIVE, GERUND, REPORTED, RELATIVES, DETERMINERS, COMPAR, PREP, PHRASAL, VOCAB, BUSINESS, NUMBERS, SYNTAX, READING];

export const BANK_EN: SubjectBank = {
  skills: PARTS.flatMap((p) => (p.skill ? [p.skill] : [])),
  lessons: PARTS.map((p) => p.lesson),
  questions: PARTS.flatMap((p) => p.questions),
  languageExercises: ALL_EN_NEWS_FLASHES,
};
