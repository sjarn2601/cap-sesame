"use client";
// Partage volontaire d'un texte : feuille de partage du téléphone si disponible, sinon copie.
import { useState } from "react";

export function ShareText({ text, title, label = "Partager" }: { text: string; title: string; label?: string }) {
  const [done, setDone] = useState<string | null>(null);
  return (
    <span className="row">
      <button
        type="button"
        className="btn small ghost"
        onClick={async () => {
          try {
            if (navigator.share) { await navigator.share({ title, text }); setDone("Partagé."); return; }
            await navigator.clipboard.writeText(text);
            setDone("Copié : colle-le où tu veux.");
          } catch {
            setDone(null);
          }
        }}
      >
        {label}
      </button>
      {done && <span className="small muted" role="status">{done}</span>}
    </span>
  );
}
