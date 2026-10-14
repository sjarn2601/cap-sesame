"use client";
// Dossier personnel, lancement de simulation et suppression des transcriptions (ORA-01).
import { useState } from "react";
import { useRouter } from "next/navigation";
import type { DossierCategory, DossierEntry } from "@/db/schema";

const CATS: Record<DossierCategory, string> = {
  experience: "Expérience",
  engagement: "Engagement",
  reussite: "Réussite",
  difficulte: "Difficulté surmontée",
  interet: "Centre d'intérêt",
  projet: "Projet",
};

async function post(url: string, body: unknown) {
  const res = await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) });
  const data = await res.json().catch(() => ({}));
  return { ok: res.ok, data };
}

export function DossierEditor({ initial }: { initial: DossierEntry[] }) {
  const [entries, setEntries] = useState(initial);
  const [editing, setEditing] = useState<Partial<DossierEntry> | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [plan, setPlan] = useState<{ text: string; source: string; notice: string | null } | null>(null);
  const [busy, setBusy] = useState(false);

  async function save() {
    if (!editing) return;
    setBusy(true);
    const r = await post("/api/oral/dossier", { action: "save", id: editing.id, category: editing.category ?? "experience", title: editing.title ?? "", details: editing.details ?? "" });
    setBusy(false);
    if (!r.ok) return setError(r.data?.message ?? "Enregistrement impossible.");
    setError(null);
    setEntries((xs) => (xs.some((x) => x.id === r.data.id) ? xs.map((x) => (x.id === r.data.id ? r.data : x)) : [...xs, r.data]));
    setEditing(null);
  }

  async function remove(id: string) {
    if (!window.confirm("Supprimer cet élément de ton dossier ?")) return;
    const r = await post("/api/oral/dossier", { action: "delete", id });
    if (r.ok) setEntries((xs) => xs.filter((x) => x.id !== id));
  }

  async function structure() {
    setBusy(true);
    const r = await post("/api/oral/dossier", { action: "structure" });
    setBusy(false);
    if (!r.ok) return setError(r.data?.message ?? "Aide indisponible.");
    setPlan(r.data);
  }

  return (
    <div className="stack">
      {entries.length === 0 && <p className="muted">Ton dossier est vide. Note tes expériences, engagements, réussites, difficultés surmontées et centres d&apos;intérêt : ils nourriront tes réponses.</p>}
      <ul className="list-plain stack">
        {entries.map((e) => (
          <li key={e.id} className="card flat">
            <div className="row between">
              <span><span className="badge">{CATS[e.category]}</span> <strong>{e.title}</strong></span>
              <span className="row">
                <button className="btn ghost small" onClick={() => setEditing(e)}>Modifier</button>
                <button className="btn ghost small" onClick={() => remove(e.id)} aria-label={`Supprimer ${e.title}`}>Supprimer</button>
              </span>
            </div>
            {e.details && <p className="small" style={{ whiteSpace: "pre-wrap", margin: "6px 0 0" }}>{e.details}</p>}
          </li>
        ))}
      </ul>
      {editing ? (
        <div className="card stack">
          <div className="field">
            <label htmlFor="d-cat">Type</label>
            <select id="d-cat" value={editing.category ?? "experience"} onChange={(e) => setEditing({ ...editing, category: e.target.value as DossierCategory })}>
              {Object.entries(CATS).map(([k, v]) => <option key={k} value={k}>{v}</option>)}
            </select>
          </div>
          <div className="field">
            <label htmlFor="d-title">Titre</label>
            <input id="d-title" value={editing.title ?? ""} maxLength={120} onChange={(e) => setEditing({ ...editing, title: e.target.value })} placeholder="Trésorier du club de basket" />
          </div>
          <div className="field">
            <label htmlFor="d-details">Ce que tu as fait, appris, obtenu</label>
            <textarea id="d-details" value={editing.details ?? ""} maxLength={1500} rows={4} onChange={(e) => setEditing({ ...editing, details: e.target.value })} />
            <p className="hint">Situation, action, résultat. Pas besoin de nom ni d&apos;adresse.</p>
          </div>
          {error && <p className="notice warn" role="alert">{error}</p>}
          <div className="row">
            <button className="btn primary" onClick={save} disabled={busy}>Enregistrer</button>
            <button className="btn ghost" onClick={() => { setEditing(null); setError(null); }}>Annuler</button>
          </div>
        </div>
      ) : (
        <div className="row">
          <button className="btn" onClick={() => setEditing({ category: "experience" })}>Ajouter un élément</button>
          {entries.length > 0 && <button className="btn ghost" onClick={structure} disabled={busy}>{busy ? "Préparation…" : "Construire ma présentation"}</button>}
        </div>
      )}
      {!editing && error && <p className="notice warn" role="alert">{error}</p>}
      {plan && (
        <div className="stack" role="status">
          {plan.notice && <p className="notice">{plan.notice}</p>}
          <div className="assistant-answer">
            <p className="small muted" style={{ margin: 0 }}>{plan.source === "ai" ? "Proposition de l'assistant, à partir de ton dossier uniquement" : "Plan type construit à partir de ton dossier"}</p>
            <p style={{ whiteSpace: "pre-wrap", margin: "6px 0 0" }}>{plan.text}</p>
          </div>
          <p className="small muted">C&apos;est une trame : garde tes mots et tes faits.</p>
        </div>
      )}
    </div>
  );
}

export function StartSimulation({ sheets }: { sheets: { id: string; label: string }[] }) {
  const router = useRouter();
  const [sheet, setSheet] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  return (
    <div className="stack">
      <div className="field">
        <label htmlFor="sim-sheet">Programme visé</label>
        <select id="sim-sheet" value={sheet} onChange={(e) => setSheet(e.target.value)}>
          <option value="">Sans programme précis (questions générales)</option>
          {sheets.map((s) => <option key={s.id} value={s.id}>{s.label}</option>)}
        </select>
      </div>
      {error && <p className="notice warn" role="alert">{error}</p>}
      <div>
        <button
          className="btn primary"
          disabled={busy}
          onClick={async () => {
            setBusy(true);
            const r = await post("/api/oral/simulations", { sheetId: sheet || null });
            if (r.ok) router.push(`/oraux/simulation/${r.data.id}`);
            else { setError(r.data?.message ?? "Impossible de lancer la simulation."); setBusy(false); }
          }}
        >
          {busy ? "Préparation…" : "Lancer une simulation"}
        </button>
      </div>
    </div>
  );
}

export function DeleteSimulation({ id, redirectTo }: { id: string; redirectTo?: string }) {
  const router = useRouter();
  return (
    <button
      className="btn ghost small"
      onClick={async () => {
        if (!window.confirm("Supprimer définitivement cette simulation et sa transcription ?")) return;
        const r = await post(`/api/oral/simulations/${id}`, { action: "delete" });
        if (r.ok) { if (redirectTo) router.push(redirectTo); router.refresh(); }
      }}
    >
      Supprimer la transcription
    </button>
  );
}
