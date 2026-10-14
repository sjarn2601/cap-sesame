"use client";
import { useState } from "react";
import { reportAction } from "@/app/actions/student";

export function ReportButton({ contentType, contentVersionId }: { contentType: "question" | "lesson"; contentVersionId: string }) {
  const [open, setOpen] = useState(false);
  const [msg, setMsg] = useState<string | null>(null);
  const [text, setText] = useState("");
  if (msg) return <p className="notice ok" role="status">{msg}</p>;
  if (!open) return <button className="btn ghost small" onClick={() => setOpen(true)}>Signaler une ambiguïté ou une erreur</button>;
  return (
    <div className="stack">
      <label htmlFor={`rep-${contentVersionId}`}>Qu&apos;as-tu repéré ?</label>
      <textarea id={`rep-${contentVersionId}`} value={text} onChange={(e) => setText(e.target.value)} maxLength={2000} />
      <div className="row">
        <button className="btn" onClick={async () => { const r = await reportAction(contentType, contentVersionId, text); setMsg(r?.message ?? null); }}>Envoyer</button>
        <button className="btn ghost" onClick={() => setOpen(false)}>Annuler</button>
      </div>
    </div>
  );
}
