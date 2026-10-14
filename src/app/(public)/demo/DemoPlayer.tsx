"use client";
import { useState } from "react";
import Link from "next/link";
import { CorrectionPanel, OptionsList, Stem, type ViewCorrection, type ViewOption } from "@/components/QuestionView";

type Q = { id: string; stem: string; format: "single" | "multiple" | "numeric"; options: ViewOption[]; correction: ViewCorrection };

export function DemoPlayer({ questions }: { questions: Q[] }) {
  const [i, setI] = useState(0);
  const [selected, setSelected] = useState<string[]>([]);
  const [shown, setShown] = useState(false);
  const [score, setScore] = useState(0);
  if (i >= questions.length) {
    return (
      <div className="card stack">
        <h2>Démonstration terminée : {score} / {questions.length}</h2>
        <p>Avec un compte, tes erreurs rejoignent ton carnet et reviennent au bon moment, et ton plan s&apos;adapte à tes disponibilités.</p>
        <div className="row">
          <Link className="btn primary" href="/inscription">Créer un compte</Link>
          <Link className="btn" href="/">Retour à l&apos;accueil</Link>
        </div>
      </div>
    );
  }
  const q = questions[i];
  const right = q.correction.options.filter((o) => o.correct).map((o) => o.id).sort().join();
  const isRight = selected.slice().sort().join() === right;
  return (
    <div className="card stack">
      <p className="eyebrow">Question {i + 1} sur {questions.length}</p>
      <Stem text={q.stem} />
      <OptionsList options={q.options} format={q.format} selected={selected} correction={shown ? q.correction : null} onToggle={(id) => setSelected(q.format === "multiple" ? (selected.includes(id) ? selected.filter((x) => x !== id) : [...selected, id]) : [id])} />
      {shown && <CorrectionPanel correction={{ ...q.correction, status: isRight ? "correct" : "wrong" }} />}
      <div className="row">
        {!shown ? (
          <button className="btn primary" disabled={!selected.length} onClick={() => { setShown(true); if (isRight) setScore(score + 1); }}>
            Valider
          </button>
        ) : (
          <button className="btn primary" onClick={() => { setI(i + 1); setSelected([]); setShown(false); }}>
            Question suivante
          </button>
        )}
      </div>
    </div>
  );
}
