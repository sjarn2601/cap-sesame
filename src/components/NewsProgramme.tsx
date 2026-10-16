"use client";
// Lecteur du journal en anglais : écran façon journal télévisé (rubrique, titre, sous-titres, vocabulaire),
// voix de synthèse de l'appareil phrase par phrase, pause, sujet précédent ou suivant, vitesse, quiz final.
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { canSpeak } from "@/lib/speech";
import { sentences, words, WORDS_PER_MINUTE, type Programme } from "@/lib/programme";

const LANG = "en-GB";

function pickVoice() {
  const voices = window.speechSynthesis.getVoices();
  return voices.find((v) => v.lang === "en-GB") ?? voices.find((v) => v.lang.toLowerCase().startsWith("en")) ?? null;
}

export function NewsProgramme({ programme }: { programme: Programme }) {
  // Toutes les phrases du programme, avec leur segment : la lecture avance phrase par phrase.
  const lines = useMemo(() => programme.segments.flatMap((s, si) => sentences(s.text).map((t) => ({ si, t }))), [programme]);
  const [pos, setPos] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [rate, setRate] = useState(0.9);
  const [subtitles, setSubtitles] = useState(true);
  const [tts, setTts] = useState(true);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const playingRef = useRef(false);
  const posRef = useRef(0);

  useEffect(() => {
    setTts(canSpeak());
    return () => {
      playingRef.current = false;
      if (canSpeak()) window.speechSynthesis.cancel();
    };
  }, []);

  const speakFrom = useCallback(
    (i: number) => {
      if (!canSpeak()) return;
      window.speechSynthesis.cancel();
      if (i >= lines.length) {
        playingRef.current = false;
        setPlaying(false);
        return;
      }
      posRef.current = i;
      setPos(i);
      const u = new SpeechSynthesisUtterance(lines[i].t);
      u.lang = LANG;
      u.rate = rate;
      const v = pickVoice();
      if (v) u.voice = v;
      u.onend = () => {
        if (playingRef.current && posRef.current === i) setTimeout(() => playingRef.current && speakFrom(i + 1), lines[i + 1] && lines[i + 1].si !== lines[i].si ? 700 : 120);
      };
      window.speechSynthesis.speak(u);
    },
    [lines, rate],
  );

  const play = () => {
    playingRef.current = true;
    setPlaying(true);
    speakFrom(posRef.current >= lines.length ? 0 : posRef.current);
  };
  const pause = () => {
    playingRef.current = false;
    setPlaying(false);
    window.speechSynthesis.cancel();
  };
  const jumpSegment = (dir: 1 | -1) => {
    const cur = lines[posRef.current]?.si ?? 0;
    const target = Math.max(0, Math.min(programme.segments.length - 1, cur + dir));
    const i = lines.findIndex((l) => l.si === target);
    posRef.current = i;
    setPos(i);
    if (playingRef.current) speakFrom(i);
  };

  // Changer la vitesse en cours de lecture reprend la phrase courante à la nouvelle vitesse.
  useEffect(() => {
    if (playingRef.current) speakFrom(posRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rate]);

  const line = lines[pos] ?? lines[0];
  const seg = programme.segments[line.si];
  const totalMin = Math.round(programme.words / (WORDS_PER_MINUTE * rate));
  const doneWords = lines.slice(0, pos).reduce((a, l) => a + words(l.t), 0);
  const ended = pos >= lines.length - 1 && !playing && doneWords > 0;

  return (
    <div className="stack">
      <div className="news-screen" aria-live="off">
        <div className="news-top">
          <span className="news-live">{seg.label}</span>
          {seg.category && <span className="news-cat">{seg.category}</span>}
          <span className="news-time">{Math.round(doneWords / (WORDS_PER_MINUTE * rate))} / {totalMin} min</span>
        </div>
        <h2 className="news-title" lang={LANG}>{seg.title}</h2>
        {seg.vocabulary && seg.kind !== "intro" && (
          <ul className="news-vocab">
            {seg.vocabulary.map((v) => (
              <li key={v.term}><strong lang={LANG}>{v.term}</strong> · {v.fr}</li>
            ))}
          </ul>
        )}
        {subtitles && <p className="news-sub" lang={LANG}>{line.t}</p>}
        <div className="news-bar" aria-hidden="true"><span style={{ width: `${Math.round(((pos + (playing ? 0.5 : 0)) / lines.length) * 100)}%` }} /></div>
      </div>

      {tts ? (
        <div className="row">
          <button className="btn" onClick={() => jumpSegment(-1)} aria-label="Sujet précédent">⏮</button>
          {playing ? (
            <button className="btn primary" onClick={pause}>⏸ Pause</button>
          ) : (
            <button className="btn primary" onClick={play}>▶ {pos > 0 ? "Reprendre" : "Lancer le journal"}</button>
          )}
          <button className="btn" onClick={() => jumpSegment(1)} aria-label="Sujet suivant">⏭</button>
          <div className="segmented radio-row" role="radiogroup" aria-label="Vitesse">
            {[0.8, 0.9, 1].map((r) => (
              <label key={r} className="radio-pill">
                <input type="radio" name="rate" checked={rate === r} onChange={() => setRate(r)} />
                <span>{r === 1 ? "Normale" : r === 0.9 ? "×0,9" : "Lente"}</span>
              </label>
            ))}
          </div>
          <label style={{ fontWeight: 400, display: "flex", gap: 6, alignItems: "center" }}>
            <input type="checkbox" checked={subtitles} onChange={(e) => setSubtitles(e.target.checked)} /> <span className="small">Sous-titres</span>
          </label>
        </div>
      ) : (
        <p className="notice">La voix de synthèse n&apos;est pas disponible sur ce navigateur : lis la transcription ci-dessous.</p>
      )}

      {(ended || !tts) && programme.quiz.length > 0 && <QuizBlock quiz={programme.quiz} answers={answers} setAnswers={setAnswers} />}
      {!ended && tts && programme.quiz.length > 0 && (
        <details>
          <summary className="small">Quiz de fin de journal ({programme.quiz.length} questions)</summary>
          <QuizBlock quiz={programme.quiz} answers={answers} setAnswers={setAnswers} />
        </details>
      )}
      <details>
        <summary className="small">Transcription complète</summary>
        <div className="stack" style={{ marginTop: 12 }}>
          {programme.segments.map((s, i) => (
            <section key={i}>
              <p className="eyebrow" style={{ margin: 0 }}>{s.label}</p>
              <h3 lang={LANG} style={{ margin: "2px 0 6px" }}>{s.title}</h3>
              <p lang={LANG} className="lesson-body" style={{ margin: 0 }}>{s.text}</p>
            </section>
          ))}
        </div>
      </details>
    </div>
  );
}

function QuizBlock({ quiz, answers, setAnswers }: { quiz: Programme["quiz"]; answers: Record<number, string>; setAnswers: (a: Record<number, string>) => void }) {
  const done = Object.keys(answers).length;
  const ok = quiz.filter((q, i) => q.options.find((o) => o.id === answers[i])?.correct).length;
  return (
    <section className="card stack" aria-label="Quiz">
      <h2 style={{ margin: 0 }}>Quiz · in other news</h2>
      {quiz.map((q, i) => (
        <fieldset key={i} className="stack">
          <legend lang={LANG}><strong>{i + 1}. {q.question}</strong></legend>
          {q.options.map((o) => {
            const picked = answers[i] === o.id;
            return (
              <label key={o.id} className={`option ${answers[i] ? (o.correct ? "correct" : picked ? "wrong" : "") : ""}`} style={{ display: "flex", gap: 8, fontWeight: 400 }}>
                <input type="radio" name={`quiz-${i}`} disabled={!!answers[i]} checked={picked} onChange={() => setAnswers({ ...answers, [i]: o.id })} />
                <span lang={LANG}>{o.text}{answers[i] && <span className="justif">{o.justification}</span>}</span>
              </label>
            );
          })}
        </fieldset>
      ))}
      {done === quiz.length && <p className="notice ok" style={{ margin: 0 }}>{ok} / {quiz.length} bonnes réponses.</p>}
    </section>
  );
}
