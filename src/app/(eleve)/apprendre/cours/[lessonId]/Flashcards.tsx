"use client";
import { useState } from "react";
import { SpeakButton } from "@/components/SpeakButton";

export function Flashcards({ cards, lang }: { cards: { front: string; back: string; reversible: boolean }[]; lang?: string | null }) {
  const [flipped, setFlipped] = useState<Record<number, boolean>>({});
  const [reverse, setReverse] = useState(false);
  return (
    <div className="stack">
      {cards.some((c) => c.reversible) && (
        <label style={{ fontWeight: 400, display: "flex", gap: 8 }}>
          <input type="checkbox" checked={reverse} onChange={(e) => setReverse(e.target.checked)} /> Sens inverse (pour les cartes qui s&apos;y prêtent)
        </label>
      )}
      <div className="grid">
        {cards.map((c, i) => {
          const inv = reverse && c.reversible;
          const front = inv ? c.back : c.front;
          const back = inv ? c.front : c.back;
          return (
            <div className="flashcard" key={i}>
              <button onClick={() => setFlipped((f) => ({ ...f, [i]: !f[i] }))} aria-pressed={!!flipped[i]}>
                {flipped[i] ? <strong>{back}</strong> : front}
                <span className="justif">{flipped[i] ? "Cliquer pour revenir" : "Cliquer pour voir la réponse"}</span>
              </button>
              {lang && <SpeakButton text={c.front} lang={lang} />}
            </div>
          );
        })}
      </div>
    </div>
  );
}
