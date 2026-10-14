// Banque DIG (Compétences digitales) : un fichier par compétence dans ./dig/.
import type { SubjectBank } from "./helpers";
import { DIG_INFO } from "./dig/info";
import { DIG_SECU } from "./dig/secu";
import { DIG_RGPD } from "./dig/rgpd";
import { DIG_DROIT } from "./dig/droit";
import { DIG_DATA } from "./dig/data";
import { DIG_TEXTE } from "./dig/texte";
import { DIG_FORMATS } from "./dig/formats";
import { DIG_WEB } from "./dig/web";
import { DIG_MATERIEL } from "./dig/materiel";
import { DIG_COLLAB } from "./dig/collab";
import { DIG_ALGO } from "./dig/algo";
import { DIG_IA } from "./dig/ia";

const PARTS: SubjectBank[] = [DIG_INFO, DIG_SECU, DIG_RGPD, DIG_DROIT, DIG_DATA, DIG_TEXTE, DIG_FORMATS, DIG_WEB, DIG_MATERIEL, DIG_COLLAB, DIG_ALGO, DIG_IA];

export const BANK_DIG: SubjectBank = {
  skills: PARTS.flatMap((p) => p.skills),
  lessons: PARTS.flatMap((p) => p.lessons),
  questions: PARTS.flatMap((p) => p.questions),
};
