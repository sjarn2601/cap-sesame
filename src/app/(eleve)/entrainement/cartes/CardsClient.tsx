"use client";
// Cartes personnelles : création, révision espacée, écoute pour les langues (REV-02).
import { useState } from "react";
import { speechLang } from "@/lib/speech";
import { SpeakButton } from "@/components/SpeakButton";

type Card = { id: string; front: string; back: string; subjectCode: string | null; dueAt: string; stage: number };

async function post(body: unknown) {
  const res = await fetch("/api/cards", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) });
  return { ok: res.ok, data: await res.json().catch(() => ({})) };
}

export function CardsClient({ initial, subjects, prefill }: { initial: Card[]; subjects: { code: string; name: string }[]; prefill?: { front: string; back: string; subjectCode: string | null } }) {
  const [cards, setCards] = useState(initial);
  const [front, setFront] = useState(prefill?.front ?? "");
  const [back, setBack] = useState(prefill?.back ?? "");
  const [subject, setSubject] = useState(prefill?.subjectCode ?? "");
  const [error, setError] = useState<string | null>(null);
  const [queue, setQueue] = useState<Card[] | null>(null);
  const [shown, setShown] = useState(false);
  const now = Date.now();
  const due = cards.filter((c) => new Date(c.dueAt).getTime() <= now);

  async function create() {
    const r = await post({ action: "create", front, back, subjectCode: subject || null });
    if (!r.ok) return setError(r.data?.message ?? "Carte non créée.");
    setError(null);
    setCards((xs) => [...xs, { ...r.data, dueAt: r.data.dueAt }]);
    setFront("");
    setBack("");
  }

  async function answer(knew: boolean) {
    if (!queue?.length) return;
    const c = queue[0];
    const r = await post({ action: "review", id: c.id, knew });
    if (r.ok) setCards((xs) => xs.map((x) => (x.id === c.id ? { ...x, stage: r.data.stage, dueAt: r.data.dueAt } : x)));
    setQueue(queue.slice(1));
    setShown(false);
  }

  async function remove(id: string) {
    if (!window.confirm("Supprimer cette carte ?")) return;
    const r = await post({ action: "delete", id });
    if (r.ok) setCards((xs) => xs.filter((x) => x.id !== id));
  }

  const current = queue?.[0];
  const lang = current ? speechLang(current.subjectCode) : null;

  return (
    <div className="stack">
      <section className="card stack">
        <h2>Réviser</h2>
        {queue === null ? (
          due.length ? <div><button className="btn primary" onClick={() => setQueue(due)}>Réviser mes cartes ({due.length})</button></div> : <p className="muted">Aucune carte à revoir aujourd&apos;hui.</p>
        ) : current ? (
          <div className="stack">
            <p className="small muted">{queue.length} carte(s) restante(s)</p>
            <div className="flashcard"><div style={{ padding: 16 }}>
              <p style={{ fontSize: "1.15rem", margin: 0 }} lang={lang ?? undefined}>{current.front}</p>
              {lang && <SpeakButton text={current.front} lang={lang} />}
              {shown && <p style={{ marginTop: 12 }}><strong>{current.back}</strong></p>}
            </div></div>
            {!shown ? (
              <div><button className="btn" onClick={() => setShown(true)}>Voir la réponse</button></div>
            ) : (
              <div className="row">
                <button className="btn primary" onClick={() => answer(true)}>Je savais</button>
                <button className="btn" onClick={() => answer(false)}>À revoir</button>
              </div>
            )}
          </div>
        ) : (
          <p className="notice ok" role="status">Révision terminée.</p>
        )}
      </section>

      <section className="card stack">
        <h2>Nouvelle carte</h2>
        <div className="field"><label htmlFor="c-front">Recto (question, mot, formule)</label><input id="c-front" value={front} maxLength={300} onChange={(e) => setFront(e.target.value)} /></div>
        <div className="field"><label htmlFor="c-back">Verso (réponse)</label><textarea id="c-back" value={back} maxLength={1000} rows={2} onChange={(e) => setBack(e.target.value)} /></div>
        <div className="field">
          <label htmlFor="c-subject">Matière (une langue active l&apos;écoute)</label>
          <select id="c-subject" value={subject} onChange={(e) => setSubject(e.target.value)}>
            <option value="">Aucune</option>
            {subjects.map((s) => <option key={s.code} value={s.code}>{s.name}</option>)}
          </select>
        </div>
        {error && <p className="notice warn" role="alert">{error}</p>}
        <div><button className="btn" onClick={create} disabled={!front.trim() || !back.trim()}>Créer la carte</button></div>
      </section>

      {cards.length > 0 && (
        <section className="card flat stack">
          <h2>Mes cartes ({cards.length})</h2>
          <ul className="list-plain stack">
            {cards.map((c) => (
              <li key={c.id} className="row between">
                <span><strong>{c.front}</strong> : {c.back} <span className="small muted">· revue le {new Date(c.dueAt).toLocaleDateString("fr-FR")}</span></span>
                <button className="btn ghost small" onClick={() => remove(c.id)} aria-label={`Supprimer la carte ${c.front}`}>Supprimer</button>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}
