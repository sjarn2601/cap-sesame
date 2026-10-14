import type { ContentStatus } from "@/lib/editorial";

/** Actions proposées à chaque statut du cycle éditorial (les contrôles réels sont côté serveur). */
export const NEXT: Record<ContentStatus, { to: ContentStatus; label: string; needsReason?: boolean; danger?: boolean }[]> = {
  draft: [{ to: "in_review", label: "Envoyer en relecture" }],
  in_review: [{ to: "format_check", label: "Relecture disciplinaire OK" }, { to: "draft", label: "Refuser (motif obligatoire)", needsReason: true, danger: true }],
  format_check: [{ to: "validated", label: "Format OK : valider" }, { to: "draft", label: "Renvoyer en brouillon", needsReason: true, danger: true }],
  validated: [{ to: "published", label: "Publier" }, { to: "draft", label: "Renvoyer en brouillon", needsReason: true }],
  published: [{ to: "suspended", label: "Suspendre (contestation)", needsReason: true, danger: true }, { to: "retired", label: "Retirer", needsReason: true, danger: true }],
  suspended: [{ to: "published", label: "Republier" }, { to: "retired", label: "Retirer", needsReason: true, danger: true }],
  retired: [],
};
