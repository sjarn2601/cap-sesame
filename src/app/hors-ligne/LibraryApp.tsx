"use client";
// Mode 100 % hors ligne : cours, séries corrigées, concours blancs chronométrés, cartes mémoire et progrès,
// à partir de la bibliothèque copiée sur l'appareil. Les réponses partent au serveur dès que le réseau revient.
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { scoreQuestion } from "@/lib/scoring";
import { addAnswers, addExam, getAnswers, getExams, getLibrary, refreshLibrary, syncAnswers, type ExamResult, type LocalAnswer } from "@/lib/offlineLibraryStore";
import { swCommand } from "@/lib/offlineStore";
import { DocumentPane } from "@/components/DocumentPane";
import { Flashcards } from "@/app/(eleve)/apprendre/cours/[lessonId]/Flashcards";
import type { LibraryLesson, LibraryQuestion, OfflineLibrary } from "@/server/offlineLibrary";

const KEYS = ["A", "B", "C", "D", "E", "F", "G", "H"];
const newId = () => (crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}-${Math.random().toString(36).slice(2)}`);
const shuffle = <T,>(a: T[]) => {
  const b = [...a];
  for (let i = b.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [b[i], b[j]] = [b[j], b[i]];
  }
  return b;
};
const frDateTime = (iso: string) => new Date(iso).toLocaleString("fr-FR", { day: "numeric", month: "long", hour: "2-digit", minute: "2-digit" });
const ruleFor = (q: LibraryQuestion) => (q.subjectCode === "DOC" ? "doc_partial" : "standard");

/** Navigation par l'ancre de l'adresse : le bouton retour du téléphone fonctionne. */
function useRoute(): [string, (r: string) => void] {
  const [route, setRoute] = useState("");
  useEffect(() => {
    const read = () => setRoute(decodeURIComponent(location.hash.slice(1)));
    read();
    window.addEventListener("hashchange", read);
    return () => window.removeEventListener("hashchange", read);
  }, []);
  const go = useCallback((r: string) => {
    location.hash = r ? encodeURIComponent(r) : "";
    if (!r) history.replaceState(null, "", location.pathname);
    setRoute(r);
    window.scrollTo(0, 0);
  }, []);
  return [route, go];
}

type Stats = Map<string, { n: number; ok: number; last: boolean }>;
function questionStats(answers: LocalAnswer[]): Stats {
  const m: Stats = new Map();
  for (const a of answers) {
    const s = m.get(a.questionId) ?? { n: 0, ok: 0, last: false };
    s.n++;
    if (a.correct) s.ok++;
    s.last = a.correct;
    m.set(a.questionId, s);
  }
  return m;
}

/** Jamais vues d'abord, puis ratées la dernière fois, puis le reste. */
function pickQuestions(pool: LibraryQuestion[], stats: Stats, n: number) {
  const unseen = shuffle(pool.filter((q) => !stats.has(q.questionId)));
  const missed = shuffle(pool.filter((q) => stats.has(q.questionId) && !stats.get(q.questionId)!.last));
  const rest = shuffle(pool.filter((q) => stats.get(q.questionId)?.last));
  return [...unseen, ...missed, ...rest].slice(0, n);
}

/** Pour l'analyse documentaire : un dossier entier, avec ses questions. */
function pickDossier(lib: OfflineLibrary, stats: Stats) {
  const sets = lib.documentSets.map((d) => ({ d, qs: lib.questions.filter((q) => q.documentSetId === d.id) })).filter((x) => x.qs.length);
  if (!sets.length) return null;
  sets.sort((a, b) => a.qs.filter((q) => stats.has(q.questionId)).length / a.qs.length - b.qs.filter((q) => stats.has(q.questionId)).length / b.qs.length);
  return sets[0];
}

// ---------------------------------------------------------------- Question

type Given = { selected: string[]; numericValue: number | null };

function QuestionBlock({ q, given, onChange, corrected, index, total, noHints }: { q: LibraryQuestion; given: Given; onChange?: (g: Given) => void; corrected: boolean; index: number; total: number; noHints?: boolean }) {
  const [hints, setHints] = useState(0);
  useEffect(() => setHints(0), [q.id]);
  const score = corrected ? scoreQuestion(q, given, ruleFor(q)) : null;
  return (
    <div className="stack">
      <p className="small muted" style={{ margin: 0 }}>Question {index + 1} sur {total}</p>
      <p className={`question-stem${/\n {2,}|←/.test(q.stem) ? " code" : ""}`} style={{ whiteSpace: /\n {2,}|←/.test(q.stem) ? "pre-wrap" : "pre-line" }}>{q.stem}</p>
      {q.format === "numeric" ? (
        <div className="field">
          <label htmlFor={`n-${q.id}`}>Ta réponse</label>
          <input
            id={`n-${q.id}`}
            inputMode="decimal"
            disabled={corrected || !onChange}
            value={given.numericValue === null || Number.isNaN(given.numericValue) ? "" : String(given.numericValue)}
            onChange={(e) => {
              const v = e.target.value.replace(",", ".").trim();
              onChange?.({ selected: [], numericValue: v === "" ? null : Number(v) });
            }}
          />
        </div>
      ) : (
        <div role={q.format === "multiple" ? "group" : "radiogroup"} className="options" aria-label={q.format === "multiple" ? "Plusieurs réponses possibles" : "Une seule réponse"}>
          {q.format === "multiple" && <p className="small muted" style={{ margin: 0 }}>Plusieurs réponses possibles.</p>}
          {q.options.map((o, i) => {
            const sel = given.selected.includes(o.id);
            const cls = `option ${sel ? "selected" : ""} ${corrected ? (o.correct ? "correct" : sel ? "wrong" : "") : ""}`;
            return (
              <button
                key={o.id}
                type="button"
                className={cls}
                role={q.format === "multiple" ? "checkbox" : "radio"}
                aria-checked={sel}
                disabled={corrected || !onChange}
                onClick={() =>
                  onChange?.({ numericValue: null, selected: q.format === "multiple" ? (sel ? given.selected.filter((x) => x !== o.id) : [...given.selected, o.id]) : [o.id] })
                }
              >
                <span className="key" aria-hidden="true">{KEYS[i]}</span>
                <span style={{ flex: 1 }}>
                  {o.text}
                  {corrected && <span className="justif">{o.correct ? "✓ " : sel ? "✗ " : ""}{o.justification}</span>}
                </span>
              </button>
            );
          })}
        </div>
      )}
      {!corrected && onChange && !noHints && q.hints.length > 0 && (
        <div className="stack">
          {q.hints.slice(0, hints).map((h, i) => (
            <p key={i} className="notice small" style={{ margin: 0 }}>Indice {i + 1} : {h}</p>
          ))}
          {hints < q.hints.length && (
            <button type="button" className="btn ghost small" style={{ alignSelf: "flex-start" }} onClick={() => setHints(hints + 1)}>
              Indice ({hints + 1}/{q.hints.length})
            </button>
          )}
        </div>
      )}
      {score && (
        <section className={`correction ${score.isCorrect ? "ok" : "ko"}`} aria-live="polite">
          <p><strong>{score.isCorrect ? "Bonne réponse" : score.points > 0 ? "Réponse partielle" : score.status === "unanswered" ? "Sans réponse" : "Réponse incorrecte"}</strong>{q.format === "numeric" && q.numericAnswer !== null ? ` · attendu : ${String(q.numericAnswer).replace(".", ",")}` : ""}</p>
          <p style={{ whiteSpace: "pre-line" }}>{q.explanation}</p>
          <p className="rule">À retenir : {q.rule}</p>
        </section>
      )}
    </div>
  );
}

const isAnswered = (q: LibraryQuestion, g: Given | undefined) => !!g && (q.format === "numeric" ? g.numericValue !== null && !Number.isNaN(g.numericValue) : g.selected.length > 0);

// ---------------------------------------------------------------- Série d'entraînement corrigée

function Practice({ lib, questions, title, onDone, onAnswer }: { lib: OfflineLibrary; questions: LibraryQuestion[]; title: string; onDone: () => void; onAnswer: (a: LocalAnswer) => void }) {
  const [i, setI] = useState(0);
  const [given, setGiven] = useState<Given>({ selected: [], numericValue: null });
  const [corrected, setCorrected] = useState(false);
  const [results, setResults] = useState<boolean[]>([]);
  const started = useRef(Date.now());
  const q = questions[i];
  const doc = q?.documentSetId ? lib.documentSets.find((d) => d.id === q.documentSetId) : null;

  if (!q) {
    const ok = results.filter(Boolean).length;
    return (
      <div className="card stack">
        <p className="eyebrow">Série terminée</p>
        <h2>{ok} / {results.length} bonnes réponses</h2>
        <p className="muted">Tes réponses sont gardées sur l&apos;appareil et partiront vers ton compte au retour du réseau.</p>
        <div className="row"><button className="btn primary" onClick={onDone}>Retour</button></div>
      </div>
    );
  }
  const validate = () => {
    const s = scoreQuestion(q, given, ruleFor(q));
    setCorrected(true);
    setResults([...results, s.isCorrect]);
    onAnswer({ clientId: newId(), questionVersionId: q.id, questionId: q.questionId, subjectCode: q.subjectCode, skillIds: q.skillIds, correct: s.isCorrect, selected: given.selected, numericValue: given.numericValue, durationMs: Date.now() - started.current, answeredAt: new Date().toISOString() });
  };
  const next = () => {
    setI(i + 1);
    setGiven({ selected: [], numericValue: null });
    setCorrected(false);
    started.current = Date.now();
  };
  return (
    <div className="stack">
      <div className="row between">
        <h2 style={{ margin: 0 }}>{title}</h2>
        <button className="btn ghost small" onClick={onDone}>Quitter</button>
      </div>
      {doc && (
        <details className="card" open>
          <summary><strong>Dossier : {doc.title}</strong></summary>
          <DocumentPane title={doc.title} documents={doc.documents} />
        </details>
      )}
      <article className="card">
        <QuestionBlock q={q} given={given} onChange={setGiven} corrected={corrected} index={i} total={questions.length} />
        <div className="row" style={{ marginTop: 16 }}>
          {!corrected ? (
            <button className="btn primary" disabled={!isAnswered(q, given)} onClick={validate}>Valider</button>
          ) : (
            <button className="btn primary" onClick={next} autoFocus>{i + 1 < questions.length ? "Question suivante" : "Voir le bilan"}</button>
          )}
        </div>
      </article>
    </div>
  );
}

// ---------------------------------------------------------------- Concours blanc chronométré

function Exam({ lib, paper, questions, minutes, onDone, onFinish }: { lib: OfflineLibrary; paper: { subject: string; label: string }; questions: LibraryQuestion[]; minutes: number; onDone: () => void; onFinish: (answers: LocalAnswer[], r: ExamResult) => void }) {
  const [i, setI] = useState(0);
  const [given, setGiven] = useState<Record<string, Given>>({});
  const [finished, setFinished] = useState(false);
  const [deadline] = useState(() => Date.now() + minutes * 60_000);
  const [now, setNow] = useState(() => Date.now());
  const startedAt = useRef(new Date().toISOString());
  const doc = questions[0]?.documentSetId ? lib.documentSets.find((d) => d.id === questions[0].documentSetId) : null;

  const finish = useCallback(() => {
    if (finished) return;
    setFinished(true);
    const scores = questions.map((q) => scoreQuestion(q, given[q.id] ?? { selected: [], numericValue: null }, ruleFor(q)));
    const points = scores.reduce((a, s) => a + s.points, 0);
    const max = scores.reduce((a, s) => a + s.maxPoints, 0) || 1;
    const per = Math.round((Date.now() - new Date(startedAt.current).getTime()) / Math.max(1, questions.length));
    const answers: LocalAnswer[] = questions
      .filter((q) => isAnswered(q, given[q.id]))
      .map((q, k) => ({ clientId: newId(), questionVersionId: q.id, questionId: q.questionId, subjectCode: q.subjectCode, skillIds: q.skillIds, correct: scores[questions.indexOf(q)].isCorrect, selected: given[q.id].selected, numericValue: given[q.id].numericValue, durationMs: per, answeredAt: new Date(Date.now() + k).toISOString() }));
    onFinish(answers, { id: newId(), subject: paper.subject, label: paper.label, at: new Date().toISOString(), score20: Math.round((points / max) * 200) / 10, correct: scores.filter((s) => s.isCorrect).length, total: questions.length, minutes });
  }, [finished, questions, given, onFinish, paper, minutes]);

  useEffect(() => {
    if (finished) return;
    const t = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(t);
  }, [finished]);
  useEffect(() => {
    if (!finished && now >= deadline) finish();
  }, [now, deadline, finished, finish]);

  if (finished) {
    const scores = questions.map((q) => scoreQuestion(q, given[q.id] ?? { selected: [], numericValue: null }, ruleFor(q)));
    const points = scores.reduce((a, s) => a + s.points, 0);
    const max = scores.reduce((a, s) => a + s.maxPoints, 0) || 1;
    return (
      <div className="stack">
        <div className="card accent stack">
          <p className="eyebrow">Concours blanc hors ligne · {paper.label}</p>
          <p className="big-number" style={{ margin: 0 }}>{(Math.round((points / max) * 200) / 10).toString().replace(".", ",")} / 20</p>
          <p style={{ margin: 0 }}>{scores.filter((s) => s.isCorrect).length} bonnes réponses sur {questions.length}. Corrigé détaillé ci-dessous.</p>
          <div className="row"><button className="btn primary" onClick={onDone}>Retour</button></div>
        </div>
        {questions.map((q, k) => (
          <article key={q.id} className="card">
            <QuestionBlock q={q} given={given[q.id] ?? { selected: [], numericValue: null }} corrected index={k} total={questions.length} />
          </article>
        ))}
      </div>
    );
  }

  const left = Math.max(0, deadline - now);
  const q = questions[i];
  const answered = questions.filter((x) => isAnswered(x, given[x.id])).length;
  return (
    <div className="stack player-page">
      <div className="row between">
        <div>
          <p className="eyebrow" style={{ margin: 0 }}>Concours blanc hors ligne</p>
          <h2 style={{ margin: 0 }}>{paper.label}</h2>
        </div>
        <p className="big-number" style={{ margin: 0 }} aria-live="off" aria-label={`Temps restant ${Math.ceil(left / 60000)} minutes`}>
          {String(Math.floor(left / 60000)).padStart(2, "0")}:{String(Math.floor((left % 60000) / 1000)).padStart(2, "0")}
        </p>
      </div>
      <nav className="chips" aria-label="Questions">
        {questions.map((x, k) => (
          <button key={x.id} type="button" className={`btn small${k === i ? " primary" : ""}`} aria-current={k === i ? "true" : undefined} onClick={() => setI(k)}>
            {k + 1}{isAnswered(x, given[x.id]) ? " ✓" : ""}
          </button>
        ))}
      </nav>
      {doc && (
        <details className="card" open>
          <summary><strong>Dossier : {doc.title}</strong></summary>
          <DocumentPane title={doc.title} documents={doc.documents} />
        </details>
      )}
      <article className="card">
        <QuestionBlock q={q} given={given[q.id] ?? { selected: [], numericValue: null }} onChange={(g) => setGiven({ ...given, [q.id]: g })} corrected={false} index={i} total={questions.length} noHints />
        <div className="row between" style={{ marginTop: 16 }}>
          <div className="row">
            <button className="btn" disabled={i === 0} onClick={() => setI(i - 1)}>Précédente</button>
            <button className="btn" disabled={i + 1 >= questions.length} onClick={() => setI(i + 1)}>Suivante</button>
          </div>
          <button className="btn primary" onClick={() => (answered === questions.length || confirm(`${questions.length - answered} question(s) sans réponse. Terminer quand même ?`)) && finish()}>
            Terminer ({answered}/{questions.length})
          </button>
        </div>
      </article>
    </div>
  );
}

// ---------------------------------------------------------------- Application

export function LibraryApp() {
  const [lib, setLib] = useState<OfflineLibrary | null | undefined>(undefined);
  const [answers, setAnswers] = useState<LocalAnswer[]>([]);
  const [exams, setExams] = useState<ExamResult[]>([]);
  const [online, setOnline] = useState(true);
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState<{ ok: boolean; text: string } | null>(null);
  const [route, go] = useRoute();
  const [session, setSession] = useState<{ title: string; questions: LibraryQuestion[]; exam?: { subject: string; label: string; minutes: number } } | null>(null);

  const reload = useCallback(async () => {
    setLib((await getLibrary()) ?? null);
    setAnswers(await getAnswers());
    setExams(await getExams());
  }, []);

  const sync = useCallback(async () => {
    if (!navigator.onLine) return;
    const r = await syncAnswers().catch(() => ({ sent: 0, error: "network" }));
    if (r.sent) setAnswers(await getAnswers());
  }, []);

  useEffect(() => {
    reload().then(sync);
    const up = () => {
      setOnline(navigator.onLine);
      if (navigator.onLine) sync();
    };
    up();
    window.addEventListener("online", up);
    window.addEventListener("offline", up);
    return () => {
      window.removeEventListener("online", up);
      window.removeEventListener("offline", up);
    };
  }, [reload, sync]);

  const stats = useMemo(() => questionStats(answers), [answers]);
  const record = useCallback(
    async (list: LocalAnswer[]) => {
      if (!list.length) return;
      await addAnswers(list);
      setAnswers(await getAnswers());
      sync();
    },
    [sync],
  );

  const download = async () => {
    setBusy(true);
    setMsg(null);
    const r = await refreshLibrary(true);
    setBusy(false);
    if (!r.ok) {
      setMsg({ ok: false, text: r.error === "HTTP 401" ? "Connecte-toi d'abord (avec le réseau) pour copier ta bibliothèque sur l'appareil." : "Téléchargement impossible : vérifie ta connexion." });
      return;
    }
    swCommand({ type: "refresh-shell" }, 60_000).catch(() => {});
    await reload();
    setMsg({ ok: true, text: r.updated ? "Bibliothèque mise à jour." : "Ta bibliothèque est déjà à jour." });
  };

  if (lib === undefined) return <p className="muted">Chargement de ta bibliothèque…</p>;
  if (lib === null) {
    return (
      <section className="card accent stack">
        <p className="eyebrow">Bibliothèque hors ligne</p>
        <h2>Pas encore copiée sur cet appareil</h2>
        <p>Ouvre l&apos;appli une fois avec le réseau, connecté à ton compte : tous les cours et toutes les questions se copient automatiquement. Ensuite, tout marche sans réseau.</p>
        {msg && <p role="status" style={{ margin: 0 }}>{msg.text}</p>}
        <div className="row">
          {online ? (
            <button className="btn primary" disabled={busy} onClick={download}>{busy ? "Copie en cours…" : "Copier maintenant"}</button>
          ) : (
            <span>Pas de réseau pour l&apos;instant.</span>
          )}
          <a className="btn" href="/connexion">Se connecter</a>
        </div>
      </section>
    );
  }

  const pending = answers.filter((a) => !a.synced).length;
  const subjectName = (code: string) => lib.subjects.find((s) => s.code === code)?.name ?? code;
  const startPractice = (title: string, pool: LibraryQuestion[], n = 10) => {
    const qs = pickQuestions(pool, stats, n);
    if (!qs.length) return setMsg({ ok: false, text: "Aucune question disponible pour ce choix." });
    setSession({ title, questions: qs });
    go("serie");
  };
  const startDoc = () => {
    const d = pickDossier(lib, stats);
    if (!d) return setMsg({ ok: false, text: "Aucun dossier disponible." });
    setSession({ title: `Analyse documentaire : ${d.d.title}`, questions: d.qs });
    go("serie");
  };
  const startExam = (p: OfflineLibrary["papers"][number]) => {
    let qs: LibraryQuestion[];
    let minutes = p.minutes;
    if (p.subject === "DOC") {
      const d = pickDossier(lib, stats);
      if (!d) return;
      qs = d.qs;
      minutes = Math.max(10, Math.round((p.minutes * qs.length) / p.questionCount));
    } else {
      const pool = lib.questions.filter((q) => q.subjectCode === p.subject && !q.documentSetId);
      qs = shuffle(pool).slice(0, p.questionCount);
      if (qs.length < p.questionCount) minutes = Math.max(5, Math.round((p.minutes * qs.length) / p.questionCount));
    }
    if (!qs.length) return setMsg({ ok: false, text: "Pas assez de questions pour cette épreuve." });
    setSession({ title: p.label, questions: qs, exam: { subject: p.subject, label: p.label, minutes } });
    go("concours-en-cours");
  };

  const header = (
    <>
      {msg && <p className={`notice ${msg.ok ? "ok" : "ko"}`} role="status">{msg.text}</p>}
    </>
  );

  // Séances en cours.
  if ((route === "serie" || route === "concours-en-cours") && session) {
    return route === "serie" ? (
      <Practice lib={lib} questions={session.questions} title={session.title} onDone={() => { setSession(null); history.back(); }} onAnswer={(a) => record([a])} />
    ) : (
      <Exam
        lib={lib}
        paper={session.exam!}
        questions={session.questions}
        minutes={session.exam!.minutes}
        onDone={() => { setSession(null); go("concours"); }}
        onFinish={async (list, r) => {
          await addExam(r);
          setExams(await getExams());
          await record(list);
        }}
      />
    );
  }

  const [kind, arg] = route.split(":");
  const back = (to = "") => <button className="btn ghost small" style={{ paddingLeft: 0 }} onClick={() => go(to)}>← {to ? "Retour" : "Accueil hors ligne"}</button>;

  if (kind === "cours") {
    const l = lib.lessons.find((x) => x.lessonId === arg);
    if (!l) return <>{back()}<p>Cours introuvable.</p></>;
    const pool = lib.questions.filter((q) => q.skillIds.includes(l.skillId) && !q.documentSetId);
    return (
      <article className="stack">
        {back(`matiere:${l.subjectCode}`)}
        <div>
          <p className="eyebrow" style={{ margin: 0 }}>{subjectName(l.subjectCode)} · {l.domain}</p>
          <h1>{l.title}</h1>
        </div>
        <section className="card">
          <h2>Objectifs</h2>
          <ul>{l.objectives.map((o) => <li key={o}>{o}</li>)}</ul>
        </section>
        {l.sections.map((s) => (
          <section key={s.anchor} className="card" id={s.anchor}>
            <h2>{s.title}</h2>
            <div className="lesson-body">{s.body}</div>
          </section>
        ))}
        {l.flashcards.length > 0 && (
          <section className="card">
            <h2>Cartes mémoire</h2>
            <Flashcards cards={l.flashcards} />
          </section>
        )}
        {pool.length > 0 && (
          <div className="row">
            <button className="btn primary" onClick={() => startPractice(`S'entraîner : ${l.skillName}`, pool)}>S&apos;entraîner sur cette notion ({pool.length} questions)</button>
          </div>
        )}
      </article>
    );
  }

  if (kind === "matiere") {
    const lessons = lib.lessons.filter((l) => l.subjectCode === arg);
    const pool = lib.questions.filter((q) => q.subjectCode === arg && !q.documentSetId);
    const skillDone = (l: LibraryLesson) => {
      const qs = lib.questions.filter((q) => q.skillIds.includes(l.skillId));
      const seen = qs.filter((q) => stats.has(q.questionId));
      const ok = seen.filter((q) => stats.get(q.questionId)!.last).length;
      return { seen: seen.length, ok };
    };
    return (
      <div className="stack">
        {back()}
        <h1>{subjectName(arg)}</h1>
        <div className="row">
          {arg === "DOC" ? (
            <button className="btn primary" onClick={startDoc}>Faire un dossier guidé</button>
          ) : (
            pool.length > 0 && <button className="btn primary" onClick={() => startPractice(`Série : ${subjectName(arg)}`, pool)}>Série de 10 questions</button>
          )}
          {lessons.some((l) => l.flashcards.length) && <button className="btn" onClick={() => go(`cartes:${arg}`)}>Cartes mémoire</button>}
        </div>
        <ul className="rows">
          {lessons.map((l) => {
            const d = skillDone(l);
            return (
              <li key={l.lessonId}>
                <span className={`dot ${d.seen === 0 ? "" : d.ok / d.seen >= 0.7 ? "ok" : d.ok / d.seen >= 0.4 ? "warn" : "ko"}`} aria-hidden="true" />
                <span className="grow">
                  <a className="title" href={`#${encodeURIComponent(`cours:${l.lessonId}`)}`}>{l.title}</a>
                  <span className="small muted">{l.domain}{d.seen ? ` · ${d.ok}/${d.seen} réussies` : ""}</span>
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }

  if (kind === "cartes") {
    const cards = lib.lessons.filter((l) => l.subjectCode === arg).flatMap((l) => l.flashcards);
    return (
      <div className="stack">
        {back(`matiere:${arg}`)}
        <h1>Cartes mémoire · {subjectName(arg)}</h1>
        <Flashcards cards={shuffle(cards)} />
      </div>
    );
  }

  if (kind === "concours") {
    return (
      <div className="stack">
        {back()}
        <h1>Concours blancs hors ligne</h1>
        <p className="muted">Chronométrés sur l&apos;appareil, corrigés à la fin. Ils utilisent les questions d&apos;entraînement : les concours blancs en ligne gardent des questions inédites.</p>
        {header}
        <div className="tiles">
          {lib.papers.map((p) => (
            <button key={p.subject} type="button" className="tile" data-tone={p.subject} style={{ textAlign: "left", cursor: "pointer" }} onClick={() => startExam(p)}>
              <strong>{p.label}</strong>
              <span className="muted small" style={{ display: "block" }}>{p.subject === "DOC" ? "un dossier complet" : `${p.questionCount} questions · ${p.minutes} min`}</span>
            </button>
          ))}
        </div>
        {exams.length > 0 && (
          <section className="stack">
            <h2>Mes concours blancs hors ligne</h2>
            <ul className="rows">
              {exams.map((e) => (
                <li key={e.id}>
                  <span className="grow"><strong>{e.label}</strong><span className="small muted">{frDateTime(e.at)} · {e.correct}/{e.total}</span></span>
                  <strong>{String(e.score20).replace(".", ",")} / 20</strong>
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>
    );
  }

  if (kind === "progres") {
    return (
      <div className="stack">
        {back()}
        <h1>Mes progrès hors ligne</h1>
        <p className="muted">Calculés sur l&apos;appareil. Une fois synchronisées, ces réponses comptent aussi dans tes progrès en ligne.</p>
        <ul className="rows">
          {lib.subjects.map((s) => {
            const mine = answers.filter((a) => a.subjectCode === s.code);
            const ok = mine.filter((a) => a.correct).length;
            return (
              <li key={s.code}>
                <span className="grow"><strong>{s.name}</strong><span className="small muted">{mine.length} réponse(s)</span></span>
                <strong>{mine.length ? `${Math.round((ok / mine.length) * 100)} %` : "–"}</strong>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }

  // Accueil.
  return (
    <div className="stack">
      <section className="card accent stack">
        <p className="eyebrow">Mode hors ligne</p>
        <h2 style={{ margin: 0 }}>Tout ton programme, sans réseau</h2>
        <p style={{ margin: 0 }}>
          {lib.lessons.length} cours et {lib.questions.length} questions corrigées sur cet appareil · mis à jour le {frDateTime(lib.generatedAt)}.
        </p>
        <p className="small" style={{ margin: 0 }}>
          {online ? (pending ? `${pending} réponse(s) en cours d'envoi vers ton compte.` : "Connecté · tes réponses sont à jour sur ton compte.") : pending ? `Sans réseau · ${pending} réponse(s) gardée(s) sur l'appareil, envoyées au retour du réseau.` : "Sans réseau · tout reste disponible."}
        </p>
        <div className="row">
          <button className="btn primary" onClick={() => startPractice("Série mélangée", lib.questions.filter((q) => !q.documentSetId))}>Série mélangée de 10 questions</button>
          <button className="btn" onClick={() => go("concours")}>Concours blancs</button>
          <button className="btn" onClick={() => go("progres")}>Mes progrès</button>
          {online && <button className="btn" disabled={busy} onClick={download}>{busy ? "Mise à jour…" : "Mettre à jour"}</button>}
        </div>
      </section>
      {header}
      <h2>Choisir une matière</h2>
      <nav className="tiles" aria-label="Matières">
        {lib.subjects.map((s, i) => {
          const n = lib.lessons.filter((l) => l.subjectCode === s.code).length;
          const qs = lib.questions.filter((q) => q.subjectCode === s.code);
          const seen = qs.filter((q) => stats.has(q.questionId)).length;
          return (
            <a key={s.code} href={`#${encodeURIComponent(`matiere:${s.code}`)}`} className="tile" data-tone={s.code}>
              <span className="tile-top" aria-hidden="true">
                <span className="tile-num">{String(i + 1).padStart(2, "0")}</span>
                <span className="monogram">{s.code.replace("LV-", "").slice(0, 3)}</span>
              </span>
              <strong>{s.name}</strong>
              <span className="muted small">{n} cours · {qs.length} questions</span>
              <div className="meter" aria-hidden="true"><span style={{ width: `${qs.length ? Math.round((seen / qs.length) * 100) : 0}%` }} /></div>
            </a>
          );
        })}
      </nav>
    </div>
  );
}
