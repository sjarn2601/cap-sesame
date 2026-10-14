"use client";
// Assistant encadré (IA-01) : indices gradués, explication de correction, reformulation de cours.
// Chaque réponse affiche ses appuis ; une réponse éditoriale le dit clairement.
import { useState } from "react";
import { ReportButton } from "./ReportButton";

type Answer = {
  text: string;
  source: "ai" | "editorial";
  sources: { label: string; ref: string }[];
  notice: string | null;
  uncertain: boolean;
  level?: 1 | 2 | 3;
  remaining: number | null;
};

const LEVELS = ["Indice", "Démarche", "Solution expliquée"];

type Props =
  | { kind: "question"; attemptId: string; questionVersionId: string; phase: "hint" | "explain"; onAided?: () => void }
  | { kind: "lesson"; lessonId: string; sections: { anchor: string; title: string }[] };

export function AssistantPanel(props: Props) {
  const [answer, setAnswer] = useState<Answer | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const [question, setQuestion] = useState("");
  const [anchor, setAnchor] = useState("");
  const [open, setOpen] = useState(false);
  const nextLevel = Math.min(3, (answer?.level ?? 0) + 1) as 1 | 2 | 3;

  async function ask(body: Record<string, unknown>) {
    setBusy(true);
    setError(null);
    try {
      const res = await fetch("/api/assistant", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...body, question: question.trim() || null }) });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) setError(data?.message ?? "Aide indisponible pour le moment.");
      else {
        setAnswer(data);
        if (body.mode === "hint" && props.kind === "question") props.onAided?.();
      }
    } catch {
      setError("Pas de connexion : l'assistant n'est pas disponible hors ligne.");
    } finally {
      setBusy(false);
    }
  }

  const label =
    props.kind === "lesson"
      ? "Demander à l'assistant"
      : props.phase === "explain"
        ? "Expliquer avec l'assistant"
        : answer?.level === 3
          ? null
          : `Assistant : ${LEVELS[nextLevel - 1].toLowerCase()}`;

  const submit = () => {
    if (props.kind === "lesson") ask({ mode: "lesson", lessonId: props.lessonId, anchor: anchor || null });
    else if (props.phase === "explain") ask({ mode: "explain", attemptId: props.attemptId, questionVersionId: props.questionVersionId });
    else ask({ mode: "hint", attemptId: props.attemptId, questionVersionId: props.questionVersionId, level: nextLevel });
  };

  return (
    <div className="assistant stack" data-testid="assistant">
      {!open ? (
        <div>
          <button className="btn ghost small" onClick={() => setOpen(true)}>
            {props.kind === "lesson" ? "Reformuler avec l'assistant" : props.phase === "explain" ? "Expliquer avec l'assistant" : "Aide de l'assistant"}
          </button>
        </div>
      ) : (
        <div className="card flat stack">
          {props.kind === "question" && props.phase === "hint" && !answer && (
            <p className="small muted">Trois niveaux : indice, démarche, puis solution expliquée. Toute aide demandée fait compter la réponse comme aidée.</p>
          )}
          {props.kind === "lesson" && (
            <div className="field">
              <label htmlFor={`as-sec-${props.lessonId}`}>Partie à reformuler</label>
              <select id={`as-sec-${props.lessonId}`} value={anchor} onChange={(e) => setAnchor(e.target.value)}>
                <option value="">Tout le cours (l&apos;essentiel)</option>
                {props.sections.map((s) => <option key={s.anchor} value={s.anchor}>{s.title}</option>)}
              </select>
            </div>
          )}
          <div className="field">
            <label htmlFor="as-q">Ta question (facultatif)</label>
            <textarea id="as-q" value={question} onChange={(e) => setQuestion(e.target.value.slice(0, 300))} maxLength={300} rows={2} placeholder="Ex. : pourquoi pas la réponse B ?" />
            <p className="hint">300 caractères au plus. N&apos;écris pas d&apos;informations personnelles.</p>
          </div>
          {label && (
            <div>
              <button className="btn" onClick={submit} disabled={busy}>{busy ? "Réflexion…" : label}</button>
            </div>
          )}
          {error && <p className="notice warn" role="alert">{error}</p>}
          {answer && (
            <div className="stack" role="status" aria-live="polite">
              {answer.notice && <p className={`notice ${answer.uncertain ? "warn" : ""}`}>{answer.notice}</p>}
              <div className="assistant-answer">
                <p className="small muted" style={{ margin: 0 }}>
                  {answer.source === "ai" ? "Réponse de l'assistant" : "Aide rédigée par l'équipe"}
                  {answer.level ? ` · ${LEVELS[answer.level - 1]}` : ""}
                </p>
                <p style={{ whiteSpace: "pre-wrap", margin: "6px 0 0" }}>{answer.text}</p>
              </div>
              <p className="small muted" style={{ margin: 0 }}>Appuis : {answer.sources.map((s) => s.label).join(" ; ")}.</p>
              {answer.source === "ai" && <p className="small muted" style={{ margin: 0 }}>L&apos;assistant peut se tromper : le corrigé validé fait foi.{answer.remaining !== null ? ` Demandes restantes aujourd'hui : ${answer.remaining}.` : ""}</p>}
              {answer.uncertain && props.kind === "question" && <ReportButton contentType="question" contentVersionId={props.questionVersionId} />}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
