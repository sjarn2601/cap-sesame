"use client";
// Simulation d'entretien : réponse écrite ou dictée, transcription modifiable, retour sur six critères.
// Le micro n'est activé qu'après accord explicite ; aucun audio n'est enregistré par l'application.
import { useEffect, useRef, useState } from "react";
import type { OralFeedback, OralTurn } from "@/db/schema";
import { DeleteSimulation } from "../../OralClient";

type Recognition = {
  lang: string;
  continuous: boolean;
  interimResults: boolean;
  start(): void;
  stop(): void;
  onresult: ((e: { resultIndex: number; results: ArrayLike<ArrayLike<{ transcript: string }> & { isFinal: boolean }> }) => void) | null;
  onend: (() => void) | null;
  onerror: ((e: { error: string }) => void) | null;
};

function getRecognition(): (new () => Recognition) | null {
  if (typeof window === "undefined") return null;
  const w = window as unknown as { SpeechRecognition?: new () => Recognition; webkitSpeechRecognition?: new () => Recognition };
  return w.SpeechRecognition ?? w.webkitSpeechRecognition ?? null;
}

const LEVELS = ["", "À travailler", "En progrès", "Solide"];

async function post(url: string, body: unknown) {
  const res = await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) });
  const data = await res.json().catch(() => ({}));
  return { ok: res.ok, data };
}

export function OralSimulation({ id, turns: initialTurns, feedback: initialFeedback }: { id: string; turns: OralTurn[]; feedback: OralFeedback | null }) {
  const [turns, setTurns] = useState(initialTurns);
  const [index, setIndex] = useState(() => Math.max(0, initialTurns.findIndex((t) => !t.answer.trim())));
  const [feedback, setFeedback] = useState(initialFeedback);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [saved, setSaved] = useState(false);
  const [voiceOk, setVoiceOk] = useState(false);
  const [consent, setConsent] = useState(false);
  const [listening, setListening] = useState(false);
  const rec = useRef<Recognition | null>(null);
  const t = turns[index];

  useEffect(() => setVoiceOk(!!getRecognition()), []);
  useEffect(() => () => rec.current?.stop(), []);

  const update = (patch: Partial<OralTurn>) => {
    setSaved(false);
    setTurns((xs) => xs.map((x, i) => (i === index ? { ...x, ...patch } : x)));
  };

  async function save(turn = t) {
    const r = await post(`/api/oral/simulations/${id}`, { action: "turn", turnId: turn.id, answer: turn.answer, inputMode: turn.inputMode, edited: turn.edited });
    if (!r.ok) { setError(r.data?.message ?? "Réponse non enregistrée."); return false; }
    setError(null);
    setSaved(true);
    setFeedback(null);
    return true;
  }

  function toggleMic() {
    if (listening) { rec.current?.stop(); return; }
    const R = getRecognition();
    if (!R || !consent) return;
    const r = new R();
    r.lang = "fr-FR";
    r.continuous = true;
    r.interimResults = false;
    const base = t.answer ? `${t.answer.trimEnd()} ` : "";
    let acc = "";
    r.onresult = (e) => {
      for (let i = e.resultIndex; i < e.results.length; i++) if (e.results[i].isFinal) acc += e.results[i][0].transcript + " ";
      update({ answer: (base + acc).trim(), inputMode: "voice", edited: false });
    };
    r.onend = () => setListening(false);
    r.onerror = (e) => { setListening(false); setError(e.error === "not-allowed" ? "Micro refusé : tu peux répondre par écrit." : "Dictée interrompue : tu peux continuer par écrit."); };
    rec.current = r;
    r.start();
    setListening(true);
  }

  async function next() {
    rec.current?.stop();
    if (!(await save())) return;
    if (index < turns.length - 1) setIndex(index + 1);
  }

  async function finish() {
    rec.current?.stop();
    setBusy(true);
    if (!(await save())) { setBusy(false); return; }
    const r = await post(`/api/oral/simulations/${id}`, { action: "finish" });
    setBusy(false);
    if (!r.ok) return setError(r.data?.message ?? "Retour indisponible.");
    setFeedback(r.data);
  }

  return (
    <div className="stack">
      <div className="card stack">
        <p className="small muted">Question {index + 1} sur {turns.length} · {t.kind === "motivation" ? "motivation" : t.kind === "programme" ? "programme" : "parcours"}</p>
        <h2 style={{ margin: 0 }}>{t.prompt}</h2>
        <div className="field">
          <label htmlFor="oral-answer">{t.inputMode === "voice" ? "Transcription (modifiable)" : "Ta réponse"}</label>
          <textarea
            id="oral-answer"
            rows={7}
            maxLength={4000}
            value={t.answer}
            onChange={(e) => update({ answer: e.target.value, edited: t.inputMode === "voice" ? true : t.edited })}
          />
        </div>
        {voiceOk ? (
          <div className="stack">
            {!consent ? (
              <label style={{ fontWeight: 400, display: "flex", gap: 8 }}>
                <input type="checkbox" checked={consent} onChange={(e) => setConsent(e.target.checked)} />
                <span className="small">J&apos;accepte d&apos;activer le micro pour dicter mes réponses. CAP SESAME ne conserve aucun audio ; selon le navigateur, la reconnaissance vocale peut passer par le service de son éditeur.</span>
              </label>
            ) : (
              <div className="row">
                <button className={`btn ${listening ? "danger" : ""}`} onClick={toggleMic} aria-pressed={listening}>{listening ? "Arrêter la dictée" : "Répondre à voix haute"}</button>
                {listening && <span className="small muted" role="status">Écoute en cours…</span>}
              </div>
            )}
          </div>
        ) : (
          <p className="small muted">La dictée n&apos;est pas disponible sur ce navigateur : réponds par écrit, en te chronométrant (2 minutes environ).</p>
        )}
        {error && <p className="notice warn" role="alert">{error}</p>}
        <div className="row">
          <button className="btn" onClick={() => { rec.current?.stop(); setIndex(Math.max(0, index - 1)); }} disabled={index === 0}>← Précédente</button>
          {index < turns.length - 1 ? (
            <button className="btn primary" onClick={next}>Question suivante</button>
          ) : (
            <button className="btn primary" onClick={finish} disabled={busy}>{busy ? "Analyse…" : "Terminer et voir le retour"}</button>
          )}
          {saved && <span className="small muted" role="status">✓ Enregistré</span>}
        </div>
      </div>

      {feedback && (
        <section className="card stack" aria-labelledby="fb-title">
          <h2 id="fb-title">Retour</h2>
          {feedback.notice && <p className="notice">{feedback.notice}</p>}
          <p>{feedback.summary}</p>
          <div className="table-wrap"><table className="data">
            <thead><tr><th>Critère</th><th>Niveau</th><th>Commentaire</th></tr></thead>
            <tbody>
              {feedback.criteria.map((c) => (
                <tr key={c.key}>
                  <td>{c.label}</td>
                  <td><span className={`badge ${c.level === 3 ? "ok" : c.level === 2 ? "warn" : "ko"}`}>{LEVELS[c.level]}</span></td>
                  <td>{c.comment}{c.quote && <><br /><span className="small muted">« {c.quote} »</span></>}</td>
                </tr>
              ))}
            </tbody>
          </table></div>
          {feedback.next.length > 0 && (<><h3>À faire ensuite</h3><ul>{feedback.next.map((n, i) => <li key={i}>{n}</li>)}</ul></>)}
          <p className="small muted">
            {feedback.source === "ai" ? "Retour de l'assistant." : "Analyse automatique simple (longueur des phrases, connecteurs, exemples, mots du programme)."} Ce retour est pédagogique : il ne prédit pas l&apos;avis d&apos;un jury.
            {feedback.sources.length ? ` Appuis : ${feedback.sources.map((s) => s.label).join(" ; ")}.` : ""}
          </p>
        </section>
      )}
      <div><DeleteSimulation id={id} redirectTo="/oraux" /></div>
    </div>
  );
}
