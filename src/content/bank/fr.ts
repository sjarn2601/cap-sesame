// Banque FR : français (40 QCU en 30 minutes). Une partie par compétence dans ./fr/.
import type { SubjectBank } from "./helpers";
import type { FrPart } from "./fr/_util";
import { ACCORD } from "./fr/accord";
import { ACCORDSPE } from "./fr/accordspe";
import { PLURIEL } from "./fr/pluriel";
import { CONJ } from "./fr/conj";
import { MODES } from "./fr/modes";
import { ORTHO } from "./fr/ortho";
import { LEXIQUE } from "./fr/lexique";
import { VOCAB } from "./fr/vocab";
import { SENS } from "./fr/sens";
import { SYNTAXE } from "./fr/syntaxe";
import { EXPRESSIONS } from "./fr/expressions";
import { CONNECTEURS } from "./fr/connecteurs";
import { STYLE } from "./fr/style";
import { CULTURE } from "./fr/culture";

const PARTS: FrPart[] = [ACCORD, ACCORDSPE, PLURIEL, CONJ, MODES, ORTHO, LEXIQUE, VOCAB, SENS, SYNTAXE, EXPRESSIONS, CONNECTEURS, STYLE, CULTURE];

export const BANK_FR: SubjectBank = {
  skills: PARTS.map((p) => p.skill),
  lessons: PARTS.map((p) => p.lesson),
  questions: PARTS.flatMap((p) => p.questions),
};
