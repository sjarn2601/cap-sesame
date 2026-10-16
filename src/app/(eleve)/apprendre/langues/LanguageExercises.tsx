"use client";
// Exercices oraux de langue (LAN-02) : écoute avec transcription selon l'objectif, lecture à voix haute, conversation.
// Synthèse et reconnaissance vocales du navigateur ; aucun audio n'est conservé par CAP SESAME.
import { useEffect, useRef, useState } from "react";
import { canSpeak, compareReading, speak, SPEECH_LANG } from "@/lib/speech";

export type Exercise = {
  id: string;
  exerciseId: string;
  subjectCode: string;
  kind: "listening" | "read_aloud" | "conversation";
  title: string;
  level: string;
  text: string;
  transcriptByDefault: boolean;
  question: string | null;
  options: { id: string; text: string; correct: boolean; justification: string }[];
  prompts: string[];
  modelAnswer: string | null;
};

type Recognition = { lang: string; interimResults: boolean; continuous: boolean; start(): void; stop(): void; onresult: ((e: { results: ArrayLike<ArrayLike<{ transcript: string }>> }) => void) | null; onend: (() => void) | null; onerror: ((e: { error: string }) => void) | null };
const getRecognition = () => {
  const w = window as unknown as { SpeechRecognition?: new () => Recognition; webkitSpeechRecognition?: new () => Recognition };
  return w.SpeechRecognition ?? w.webkitSpeechRecognition ?? null;
};

function useDictation(lang: string) {
  const [supported, setSupported] = useState(false);
  const [listening, setListening] = useState(false);
  const [heard, setHeard] = useState("");
  const [error, setError] = useState<string | null>(null);
  const rec = useRef<Recognition | null>(null);
  useEffect(() => setSupported(!!getRecognition()), []);
  useEffect(() => () => rec.current?.stop(), []);
  const start = () => {
    const R = getRecognition();
    if (!R) return;
    const r = new R();
    r.lang = lang;
    r.interimResults = false;
    r.continuous = false;
    r.onresult = (e) => setHeard(Array.from(e.results).map((x) => x[0].transcript).join(" "));
    r.onend = () => setListening(false);
    r.onerror = (e) => { setListening(false); setError(e.error === "not-allowed" ? "Micro refusé." : "Dictée interrompue."); };
    rec.current = r;
    setError(null);
    r.start();
    setListening(true);
  };
  return { supported, listening, heard, setHeard, error, start, stop: () => rec.current?.stop() };
}

function useTts() {
  const [tts, setTts] = useState(false);
  useEffect(() => setTts(canSpeak()), []);
  return tts;
}

export function Listening({ x, lang, dir }: { x: Exercise; lang: string; dir: string }) {
  const [showText, setShowText] = useState(x.transcriptByDefault);
  const [answer, setAnswer] = useState<string | null>(null);
  const tts = useTts();
  return (
    <div className="stack">
      {tts ? (
        <div className="row">
          <button className="btn" onClick={() => speak(x.text, lang)}>🔊 Écouter</button>
          <button className="btn ghost" onClick={() => speak(x.text, lang, 0.75)}>Plus lentement</button>
        </div>
      ) : (
        <p className="notice">La synthèse vocale n&apos;est pas disponible sur ce navigateur : la transcription est affichée.</p>
      )}
      <label style={{ fontWeight: 400, display: "flex", gap: 8 }}>
        <input type="checkbox" checked={showText || !tts} disabled={!tts} onChange={(e) => setShowText(e.target.checked)} />
        <span className="small">Afficher la transcription (mode accessibilité{x.transcriptByDefault ? "" : " : l'exercice évalue alors la lecture plutôt que l'écoute"})</span>
      </label>
      {(showText || !tts) && <p lang={lang} dir={dir} className="lesson-body">{x.text}</p>}
      {x.question && (
        <fieldset className="stack" style={{ border: "none", padding: 0 }}>
          <legend lang={lang} dir={dir}><strong>{x.question}</strong></legend>
          {x.options.map((o) => {
            const picked = answer === o.id;
            return (
              <label key={o.id} className={`option ${answer ? (o.correct ? "correct" : picked ? "wrong" : "") : ""}`} style={{ display: "flex", gap: 8, fontWeight: 400 }}>
                <input type="radio" name={x.id} disabled={!!answer} checked={picked} onChange={() => setAnswer(o.id)} />
                <span lang={lang} dir={dir}>{o.text}{answer && <span className="justif">{o.justification}</span>}</span>
              </label>
            );
          })}
        </fieldset>
      )}
    </div>
  );
}

function ReadAloud({ x, lang, dir }: { x: Exercise; lang: string; dir: string }) {
  const d = useDictation(lang);
  const [consent, setConsent] = useState(false);
  const tts = useTts();
  const result = d.heard ? compareReading(x.text, d.heard) : null;
  return (
    <div className="stack">
      <p lang={lang} dir={dir} style={{ fontSize: "1.15rem" }}>{x.text}</p>
      {tts && <div><button className="btn ghost small" onClick={() => speak(x.text, lang, 0.85)}>🔊 Modèle</button></div>}
      {!d.supported ? (
        <p className="small muted">La reconnaissance vocale n&apos;est pas disponible sur ce navigateur : écoute le modèle et lis à voix haute en t&apos;enregistrant avec ton téléphone si tu le souhaites.</p>
      ) : !consent ? (
        <label style={{ fontWeight: 400, display: "flex", gap: 8 }}>
          <input type="checkbox" onChange={(e) => setConsent(e.target.checked)} />
          <span className="small">J&apos;accepte d&apos;activer le micro. Aucun audio n&apos;est conservé par CAP SESAME ; selon le navigateur, la reconnaissance peut passer par le service de son éditeur.</span>
        </label>
      ) : (
        <div className="row">
          <button className={`btn ${d.listening ? "danger" : "primary"}`} onClick={d.listening ? d.stop : d.start}>{d.listening ? "Arrêter" : "Lire à voix haute"}</button>
          {d.listening && <span className="small muted" role="status">Écoute en cours…</span>}
        </div>
      )}
      {d.error && <p className="notice warn" role="alert">{d.error}</p>}
      {result && (
        <div className="stack" role="status">
          <div className="field">
            <label htmlFor={`heard-${x.id}`}>Ce qui a été compris (modifiable)</label>
            <textarea id={`heard-${x.id}`} lang={lang} dir={dir} value={d.heard} onChange={(e) => d.setHeard(e.target.value)} rows={2} />
          </div>
          <p>{result.matched} mot(s) reconnu(s) sur {result.total}.{result.missed.length ? ` À retravailler : ${result.missed.join(", ")}.` : " Lecture complète."}</p>
          <p className="small muted">Indicateur de reconnaissance automatique, pas une note de prononciation : un accent n&apos;est pas une faute.</p>
        </div>
      )}
    </div>
  );
}

function Conversation({ x, lang, dir }: { x: Exercise; lang: string; dir: string }) {
  const [i, setI] = useState(0);
  const [showModel, setShowModel] = useState(false);
  const d = useDictation(lang);
  const tts = useTts();
  return (
    <div className="stack">
      <p className="small muted" lang={lang} dir={dir}>{x.text}</p>
      <p lang={lang} dir={dir}><strong>{i + 1}/{x.prompts.length}. {x.prompts[i]}</strong></p>
      {tts && <div><button className="btn ghost small" onClick={() => speak(x.prompts[i], lang)}>🔊 Écouter la question</button></div>}
      {d.supported && <div><button className={`btn ${d.listening ? "danger" : ""}`} onClick={d.listening ? d.stop : d.start}>{d.listening ? "Arrêter" : "Répondre à voix haute"}</button></div>}
      <div className="field">
        <label htmlFor={`conv-${x.id}`}>Ta réponse (transcription modifiable)</label>
        <textarea id={`conv-${x.id}`} lang={lang} dir={dir} rows={3} value={d.heard} onChange={(e) => d.setHeard(e.target.value)} />
      </div>
      <div className="row">
        <button className="btn" disabled={i >= x.prompts.length - 1} onClick={() => { setI(i + 1); d.setHeard(""); }}>Question suivante</button>
        {x.modelAnswer && <button className="btn ghost" onClick={() => setShowModel(!showModel)}>{showModel ? "Masquer l'exemple" : "Voir un exemple de réponse"}</button>}
      </div>
      {showModel && x.modelAnswer && <p className="notice" lang={lang} dir={dir}>{x.modelAnswer}</p>}
    </div>
  );
}

const KIND_LABELS = { listening: "Écoute", read_aloud: "Lecture à voix haute", conversation: "Conversation" } as const;

export function LanguageExercises({ exercises, dir }: { exercises: Exercise[]; dir: string }) {
  const [kind, setKind] = useState<Exercise["kind"]>("listening");
  const shown = exercises.filter((e) => e.kind === kind);
  return (
    <div className="stack">
      <div className="tabs" role="tablist" aria-label="Type d'exercice">
        {(Object.keys(KIND_LABELS) as Exercise["kind"][]).map((k) => (
          <button key={k} role="tab" aria-selected={kind === k} className={`btn small ${kind === k ? "primary" : ""}`} onClick={() => setKind(k)}>{KIND_LABELS[k]}</button>
        ))}
      </div>
      {shown.length === 0 && <p className="muted">Pas encore d&apos;exercice de ce type pour cette langue.</p>}
      {shown.map((x) => {
        const lang = SPEECH_LANG[x.subjectCode] ?? "en-GB";
        return (
          <article key={x.id} className="card stack">
            <div className="row between"><h3 style={{ margin: 0 }} lang={lang} dir={dir}>{x.title}</h3><span className="badge">{x.level}</span></div>
            {x.kind === "listening" ? <Listening x={x} lang={lang} dir={dir} /> : x.kind === "read_aloud" ? <ReadAloud x={x} lang={lang} dir={dir} /> : <Conversation x={x} lang={lang} dir={dir} />}
          </article>
        );
      })}
    </div>
  );
}
