// Catalogue complet livré avec l'application.
import { assemble } from "./assemble";
import type { SubjectBank } from "./helpers";
import { BANK_MATH } from "./math";
import { BANK_DIG } from "./dig";
import { BANK_ACT } from "./act";
import { BANK_FR } from "./fr";
import { BANK_EN } from "./en";
import { BANK_DE } from "./de";
import { BANK_ES } from "./es";
import { BANK_DOC } from "./doc";

export const BANKS: Record<string, SubjectBank> = { MATH: BANK_MATH, DIG: BANK_DIG, ACT: BANK_ACT, FR: BANK_FR, EN: BANK_EN, DE: BANK_DE, ES: BANK_ES, DOC: BANK_DOC };

const all = assemble(BANKS);
export const ALL_SKILLS = all.skills;
export const ALL_LESSONS = all.lessons;
export const ALL_QUESTIONS = all.questions;
export const ALL_DOCUMENT_SETS = all.documentSets;
export const ALL_NEWS = all.news;
export const ALL_LANGUAGE_EXERCISES = all.languageExercises;
