"use client";
// Affichage d'une question et de sa correction. Le sens ne repose jamais sur la seule couleur.
import Link from "next/link";

export type ViewOption = { id: string; text: string };
export type ViewCorrection = {
  status: string;
  points: number;
  maxPoints: number;
  explanation: string;
  rule: string;
  options: { id: string; correct: boolean; justification: string }[];
  numericAnswer: number | null;
  lessonAnchor: string | null;
  references: string[];
};

const KEYS = ["A", "B", "C", "D", "E", "F"];

export const STATUS_TEXT: Record<string, string> = {
  correct: "Bonne réponse",
  partial: "Réponse partielle",
  wrong: "Réponse incorrecte",
  unanswered: "Sans réponse",
  invalid: "Réponse invalide",
};

export function Stem({ text }: { text: string }) {
  const isCode = /\n {2,}|←/.test(text);
  return <p className={`question-stem${isCode ? " code" : ""}`}>{text}</p>;
}

export function OptionsList(props: {
  options: ViewOption[];
  format: "single" | "multiple" | "numeric";
  selected: string[];
  onToggle?: (id: string) => void;
  correction?: ViewCorrection | null;
  disabled?: boolean;
  dir?: "ltr" | "rtl";
}) {
  const { options, format, selected, onToggle, correction, disabled } = props;
  const role = format === "multiple" ? "group" : "radiogroup";
  return (
    <div role={role} aria-label={format === "multiple" ? "Options, plusieurs réponses possibles" : "Options, une seule réponse"} className="options" dir={props.dir}>
      {options.map((o, i) => {
        const c = correction?.options.find((x) => x.id === o.id);
        const isSel = selected.includes(o.id);
        let cls = "option";
        let verdict = "";
        if (correction && c) {
          if (c.correct) {
            cls += " correct";
            verdict = isSel ? "✓ Ta réponse, correcte" : "✓ Bonne réponse";
          } else if (isSel) {
            cls += " wrong";
            verdict = "✗ Ta réponse";
          }
        }
        return (
          <button
            key={o.id}
            type="button"
            className={cls}
            role={format === "multiple" ? "checkbox" : "radio"}
            aria-checked={isSel}
            disabled={disabled || !!correction}
            onClick={() => onToggle?.(o.id)}
          >
            <span className="key" aria-hidden="true">{KEYS[i]}</span>
            <span style={{ flex: 1 }}>
              {o.text}
              {correction && c && <span className="justif">{c.justification}</span>}
            </span>
            {verdict && <span className="verdict">{verdict}</span>}
          </button>
        );
      })}
    </div>
  );
}

export function CorrectionPanel({ correction, lessonHref, onReport }: { correction: ViewCorrection; lessonHref?: string | null; onReport?: () => void }) {
  const ok = correction.status === "correct";
  return (
    <section className={`correction ${ok ? "ok" : "ko"}`} aria-live="polite">
      <p>
        <strong>{STATUS_TEXT[correction.status] ?? correction.status}</strong>
        {correction.status === "partial" && ` (${correction.points} / ${correction.maxPoints} point)`}
      </p>
      {correction.numericAnswer !== null && <p>Réponse attendue : {correction.numericAnswer}</p>}
      <p>{correction.explanation}</p>
      <p className="rule">À retenir : {correction.rule}</p>
      <div className="row small">
        {lessonHref && <Link href={lessonHref}>Revoir le passage du cours</Link>}
        {correction.references.length > 0 && <span className="muted">Références : {correction.references.join(" ; ")}</span>}
        {onReport && (
          <button type="button" className="btn ghost small" onClick={onReport}>
            Signaler une ambiguïté
          </button>
        )}
      </div>
    </section>
  );
}
