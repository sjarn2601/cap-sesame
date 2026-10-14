"use client";
// Écoute d'un texte par la synthèse vocale du navigateur (révision audio des langues).
import { useEffect, useState } from "react";
import { canSpeak, speak } from "@/lib/speech";

export function SpeakButton({ text, lang, label = "Écouter", slow = false }: { text: string; lang: string; label?: string; slow?: boolean }) {
  const [ok, setOk] = useState(false);
  useEffect(() => setOk(canSpeak()), []);
  if (!ok) return null;
  return (
    <button type="button" className="btn ghost small" onClick={(e) => { e.stopPropagation(); speak(text, lang, slow ? 0.75 : 1); }} aria-label={`${label} : ${text}`}>
      🔊 {label}
    </button>
  );
}
