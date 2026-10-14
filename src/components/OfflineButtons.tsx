"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { getLessons, MAX_OFFLINE_LESSONS, savePack, setLessons, swCommand } from "@/lib/offlineStore";
import type { OfflinePack } from "@/server/offline";

function useWorker() {
  const [state, setState] = useState<"checking" | "ready" | "unsupported">("checking");
  useEffect(() => {
    if (!("serviceWorker" in navigator)) return setState("unsupported");
    navigator.serviceWorker.getRegistration().then((r) => setState(r ? "ready" : "unsupported"));
  }, []);
  return state;
}

/** Télécharger un cours pour le lire sans réseau (choix explicite de l'élève). */
export function DownloadLesson({ url, title }: { url: string; title: string }) {
  const worker = useWorker();
  const [saved, setSaved] = useState(false);
  const [msg, setMsg] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  useEffect(() => setSaved(getLessons().some((l) => l.url === url)), [url]);
  if (worker !== "ready") return null;
  if (saved) return <p className="small muted" style={{ margin: 0 }}>✓ Disponible hors connexion · <Link href="/hors-ligne">Mes contenus</Link></p>;
  return (
    <div className="row" style={{ gap: 8 }}>
      <button
        className="btn small"
        disabled={busy}
        onClick={async () => {
          const list = getLessons();
          if (list.length >= MAX_OFFLINE_LESSONS) return setMsg(`Limite de ${MAX_OFFLINE_LESSONS} cours atteinte : retires-en un dans « Mes contenus ».`);
          setBusy(true);
          const r = await swCommand({ type: "download", urls: [url] });
          setBusy(false);
          if (!r.ok) return setMsg("Téléchargement impossible pour l'instant.");
          setLessons([...list, { url, title, savedAt: new Date().toISOString() }]);
          setSaved(true);
        }}
      >
        {busy ? "Téléchargement…" : "Disponible hors connexion"}
      </button>
      {msg && <span className="small" role="status">{msg}</span>}
    </div>
  );
}

/** Télécharger une série libre : questions et corrigés sont gardés sur l'appareil. */
export function DownloadSeries({ subjects }: { subjects: { code: string; name: string }[] }) {
  const worker = useWorker();
  const [msg, setMsg] = useState<{ ok: boolean; text: string } | null>(null);
  const [busy, setBusy] = useState(false);
  if (worker === "checking") return null;
  return (
    <form
      className="card flat stack"
      onSubmit={async (e) => {
        e.preventDefault();
        const f = new FormData(e.currentTarget);
        setBusy(true);
        setMsg(null);
        const res = await fetch("/api/offline/pack", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ subjectCode: f.get("subject") || undefined, size: f.get("size") || "normal" }),
        }).catch(() => null);
        setBusy(false);
        if (!res) return setMsg({ ok: false, text: "Pas de réseau : le téléchargement demande une connexion." });
        const data = await res.json();
        if (!res.ok) return setMsg({ ok: false, text: data.message });
        const pack = data as OfflinePack;
        savePack({ pack, answers: [], localScores: {}, syncedIds: [] });
        setMsg({ ok: true, text: `${pack.questions.length} questions téléchargées.` });
      }}
    >
      <h2 style={{ margin: 0 }}>Série hors connexion</h2>
      <p className="small muted" style={{ margin: 0 }}>
        Télécharge une série pour la faire dans le train ou sans réseau. Tes réponses seront envoyées au retour de la connexion, une seule fois.
        {worker === "unsupported" && " Pour l'ouvrir sans réseau, installe l'appli ou garde cet onglet ouvert."}
      </p>
      <div className="row">
        <select name="subject" aria-label="Matière" defaultValue="">
          <option value="">Toutes matières</option>
          {subjects.map((s) => <option key={s.code} value={s.code}>{s.name}</option>)}
        </select>
        <select name="size" aria-label="Taille" defaultValue="normal">
          <option value="short">5 questions</option>
          <option value="normal">10 questions</option>
          <option value="long">15 questions</option>
        </select>
        <button className="btn" disabled={busy}>{busy ? "Téléchargement…" : "Télécharger une série"}</button>
      </div>
      {msg && (
        <p className={`notice ${msg.ok ? "ok" : "ko"} small`} role="status" style={{ margin: 0 }}>
          {msg.text} {msg.ok && <Link href="/hors-ligne">Ouvrir mes contenus hors connexion</Link>}
        </p>
      )}
    </form>
  );
}
