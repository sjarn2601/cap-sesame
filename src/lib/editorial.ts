// Chaîne éditoriale (BAN-01) : brouillon > relecture > contrôle du format > validation > publication > retrait.

export type ContentStatus = "draft" | "in_review" | "format_check" | "validated" | "published" | "suspended" | "retired";
export type Role = "student" | "author" | "reviewer" | "admin" | "support";

const TRANSITIONS: Record<ContentStatus, ContentStatus[]> = {
  draft: ["in_review"],
  in_review: ["format_check", "draft"],
  format_check: ["validated", "draft"],
  validated: ["published", "draft"],
  published: ["suspended", "retired"],
  suspended: ["published", "retired", "draft"],
  retired: [],
};

const ROLE_FOR_TARGET: Record<ContentStatus, Role[]> = {
  draft: ["author", "reviewer", "admin"],
  in_review: ["author", "admin"],
  format_check: ["reviewer", "admin"],
  validated: ["reviewer", "admin"],
  published: ["reviewer", "admin"],
  suspended: ["reviewer", "admin"],
  retired: ["reviewer", "admin"],
};

export const STATUS_LABELS: Record<ContentStatus, string> = {
  draft: "Brouillon",
  in_review: "En relecture",
  format_check: "Contrôle du format",
  validated: "Validé",
  published: "Publié",
  suspended: "Suspendu",
  retired: "Retiré",
};

export type TransitionCheck = { ok: true } | { ok: false; reason: string };

export function checkTransition(args: {
  from: ContentStatus;
  to: ContentStatus;
  actorRole: Role;
  actorId: string;
  authorId: string | null;
  rightsCleared: boolean;
  blockingIssues: number;
  reason?: string | null;
}): TransitionCheck {
  const { from, to } = args;
  if (!TRANSITIONS[from].includes(to)) return { ok: false, reason: `Passage ${STATUS_LABELS[from]} → ${STATUS_LABELS[to]} non prévu par le cycle.` };
  if (!ROLE_FOR_TARGET[to].includes(args.actorRole)) return { ok: false, reason: "Rôle insuffisant pour cette étape." };
  // Un auteur ne valide pas seul sa propre production.
  if ((to === "format_check" || to === "validated" || to === "published") && args.authorId === args.actorId) {
    return { ok: false, reason: "Un auteur ne peut pas valider sa propre production." };
  }
  if ((to === "validated" || to === "published") && args.blockingIssues > 0) {
    return { ok: false, reason: `${args.blockingIssues} problème(s) bloquant(s) à corriger avant validation.` };
  }
  if (to === "published" && !args.rightsCleared) return { ok: false, reason: "Droit d'utilisation non établi : publication impossible." };
  if (from === "in_review" && to === "draft" && !args.reason) return { ok: false, reason: "Un refus doit comporter un motif." };
  if ((to === "suspended" || to === "retired") && !args.reason) return { ok: false, reason: "Une suspension ou un retrait doit comporter un motif." };
  return { ok: true };
}

export type QuestionDraft = {
  questionId: string;
  format: "single" | "multiple" | "numeric";
  stem: string;
  options: { id: string; text: string; correct: boolean; justification: string }[];
  numericAnswer?: number | null;
  references: string[];
  explanation: string;
  rule: string;
};

export type Issue = { code: string; message: string; blocking: boolean };

export function normalize(s: string) {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9 ]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function trigrams(s: string) {
  const n = normalize(s);
  const set = new Set<string>();
  for (let i = 0; i < n.length - 2; i++) set.add(n.slice(i, i + 3));
  return set;
}

export function similarity(a: string, b: string) {
  const ta = trigrams(a);
  const tb = trigrams(b);
  if (ta.size === 0 || tb.size === 0) return 0;
  let inter = 0;
  for (const t of ta) if (tb.has(t)) inter++;
  return inter / (ta.size + tb.size - inter);
}

export function qualityChecks(q: QuestionDraft, others: { questionId: string; stem: string }[]): Issue[] {
  const issues: Issue[] = [];
  const correct = q.options.filter((o) => o.correct).length;
  if (q.format === "single" && correct !== 1) issues.push({ code: "single_correct", message: `QCU avec ${correct} bonne(s) réponse(s) au lieu d'une.`, blocking: true });
  if (q.format === "multiple" && correct < 1) issues.push({ code: "no_correct", message: "Aucune bonne réponse définie.", blocking: true });
  if (q.format === "numeric" && (q.numericAnswer === null || q.numericAnswer === undefined)) issues.push({ code: "numeric_answer", message: "Réponse numérique attendue absente.", blocking: true });
  if (q.format !== "numeric" && q.options.length < 2) issues.push({ code: "options", message: "Moins de deux options.", blocking: true });
  const texts = q.options.map((o) => o.text.trim().toLowerCase().replace(/\s+/g, " "));
  if (new Set(texts).size !== texts.length) issues.push({ code: "duplicate_option", message: "Deux options identiques (options contradictoires ou doublon).", blocking: true });
  if (q.options.some((o) => !o.justification.trim())) issues.push({ code: "justification", message: "Chaque option doit avoir une justification.", blocking: true });
  if (q.references.length === 0) issues.push({ code: "references", message: "Références manquantes.", blocking: true });
  if (!q.explanation.trim() || !q.rule.trim()) issues.push({ code: "correction", message: "Corrigé ou règle à retenir manquant.", blocking: true });
  if (/!\[[^\]]*\]\(\s*\)/.test(q.stem)) issues.push({ code: "image", message: "Image référencée mais absente.", blocking: true });
  for (const o of others) {
    if (o.questionId === q.questionId) continue;
    if (normalize(o.stem) === normalize(q.stem)) {
      issues.push({ code: "duplicate_exact", message: `Doublon exact de ${o.questionId}.`, blocking: true });
    } else if (similarity(o.stem, q.stem) > 0.8) {
      issues.push({ code: "duplicate_near", message: `Très proche de ${o.questionId} : utiliser la même famille ou reformuler.`, blocking: false });
    }
  }
  return issues;
}
