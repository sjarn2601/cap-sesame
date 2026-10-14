"use client";
// Lecteur de séance : entraînement, révision, diagnostic et concours blancs.
// Les réponses partent avec une clé d'idempotence ; en cas de coupure, elles attendent dans une file locale.
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import type { AttemptView } from "@/server/attempts";
import { CorrectionPanel, OptionsList, Stem, type ViewCorrection } from "./QuestionView";
import { DocumentPane } from "./DocumentPane";
import { AssistantPanel } from "./AssistantPanel";

type Q = AttemptView["questions"][number];
type SaveState = "saving" | "saved" | "pending" | "error";
type Pending = { qvId: string; body: Record<string, unknown> };

const KEYMAP: Record<string, number> = { "1": 0, "2": 1, "3": 2, "4": 3, "5": 4, a: 0, b: 1, c: 2, d: 3, e: 4 };

function fmt(ms: number) {
  const s = Math.max(0, Math.ceil(ms / 1000));
  const h = Math.floor(s / 3600);
  const m = Math.floor((s % 3600) / 60);
  const sec = s % 60;
  return `${h ? `${h}:` : ""}${String(m).padStart(h ? 2 : 1, "0")}:${String(sec).padStart(2, "0")}`;
}

async function post(url: string, body: unknown) {
  const res = await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) });
  const data = await res.json().catch(() => ({}));
  return { ok: res.ok, status: res.status, data };
}

export function Player({ initial }: { initial: AttemptView }) {
  const router = useRouter();
  const [view, setView] = useState(initial);
  const isExam = view.kind === "exam_strict" || view.kind === "exam_pedagogic";
  const strict = view.kind === "exam_strict";
  const showCorrections = view.kind === "practice" || view.kind === "review" || view.kind === "exam_pedagogic";
  const pendingKey = `sesame-pending-${view.id}`;

  const sectionQuestions = useMemo(() => (isExam ? view.questions.filter((q) => q.section === view.current) : view.questions), [view, isExam]);
  const firstUnanswered = sectionQuestions.findIndex((q) => !q.response);
  const [index, setIndex] = useState(Math.max(0, firstUnanswered));
  const [selections, setSelections] = useState<Record<string, string[]>>(() => Object.fromEntries(view.questions.filter((q) => q.response).map((q) => [q.id, q.response!.selected])));
  const [corrections, setCorrections] = useState<Record<string, ViewCorrection>>(() => Object.fromEntries(view.questions.filter((q) => q.correction).map((q) => [q.id, q.correction as ViewCorrection])));
  const [saveState, setSaveState] = useState<Record<string, SaveState>>(() => Object.fromEntries(view.questions.filter((q) => q.response).map((q) => [q.id, "saved" as SaveState])));
  const [confidence, setConfidence] = useState<Record<string, number>>({});
  const [hints, setHints] = useState<Record<string, string[]>>(() => Object.fromEntries(view.questions.map((q) => [q.id, q.hints])));
  const [offline, setOffline] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const [mobileTab, setMobileTab] = useState<"docs" | "questions">("questions");
  const [highlights, setHighlights] = useState<Set<string>>(new Set());
  const [split, setSplit] = useState(55);
  const [now, setNow] = useState(() => Date.now());
  const [announce, setAnnounce] = useState("");
  const offset = useRef(new Date(initial.serverNow).getTime() - Date.now());
  const seq = useRef(Date.now());
  const shownAt = useRef<number>(Date.now());

  const q: Q | undefined = sectionQuestions[index];
  const selected = q ? (selections[q.id] ?? []) : [];
  const correction = q ? corrections[q.id] : undefined;

  useEffect(() => {
    shownAt.current = Date.now();
  }, [q?.id]);

  // ---------- File d'attente hors connexion ----------
  const readQueue = useCallback((): Pending[] => {
    try {
      return JSON.parse(localStorage.getItem(pendingKey) ?? "[]");
    } catch {
      return [];
    }
  }, [pendingKey]);
  const writeQueue = useCallback(
    (items: Pending[]) => {
      try {
        localStorage.setItem(pendingKey, JSON.stringify(items));
      } catch {
        /* stockage indisponible : la file reste en mémoire pour cet onglet */
      }
    },
    [pendingKey],
  );

  const reload = useCallback(async () => {
    const res = await fetch(`/api/attempts/${view.id}`, { cache: "no-store" });
    if (!res.ok) return null;
    const v = (await res.json()) as AttemptView;
    offset.current = new Date(v.serverNow).getTime() - Date.now();
    setView(v);
    return v;
  }, [view.id]);

  const goToResult = useCallback(() => {
    router.push(view.kind === "diagnostic" && view.title.startsWith("Diagnostic d'orientation") ? `/diagnostic/${view.id}/bilan` : `/seance/${view.id}/resultat`);
    router.refresh();
  }, [router, view]);

  const handleClosed = useCallback(
    async (msg: string) => {
      setMessage(msg);
      const v = await reload();
      if (v && v.status !== "in_progress") goToResult();
    },
    [reload, goToResult],
  );

  const send = useCallback(
    async (qvId: string, body: Record<string, unknown>) => {
      setSaveState((s) => ({ ...s, [qvId]: "saving" }));
      try {
        const r = await post(`/api/attempts/${view.id}/responses`, body);
        if (r.ok) {
          setOffline(false);
          setSaveState((s) => ({ ...s, [qvId]: "saved" }));
          if (r.data.correction && showCorrections) setCorrections((c) => ({ ...c, [qvId]: r.data.correction }));
          return true;
        }
        if (r.status === 409) {
          setSaveState((s) => ({ ...s, [qvId]: "error" }));
          if (r.data.error === "attempt_closed" || r.data.error === "late") await handleClosed(r.data.message);
          else setMessage(r.data.message);
          return true; // erreur définitive : ne pas réessayer
        }
        setSaveState((s) => ({ ...s, [qvId]: "error" }));
        setMessage(r.data.message ?? "La réponse n'a pas pu être enregistrée.");
        return r.status < 500;
      } catch {
        setOffline(true);
        setSaveState((s) => ({ ...s, [qvId]: "pending" }));
        return false;
      }
    },
    [view.id, showCorrections, handleClosed],
  );

  const flush = useCallback(async () => {
    const queue = readQueue();
    if (!queue.length) return;
    const rest: Pending[] = [];
    for (const item of queue) {
      const done = await send(item.qvId, item.body);
      if (!done) rest.push(item);
    }
    writeQueue(rest);
  }, [readQueue, writeQueue, send]);

  useEffect(() => {
    flush();
    const onOnline = () => flush();
    window.addEventListener("online", onOnline);
    const t = setInterval(flush, 5000);
    return () => {
      window.removeEventListener("online", onOnline);
      clearInterval(t);
    };
  }, [flush]);

  const submitAnswer = useCallback(
    async (qv: Q, sel: string[]) => {
      const body = {
        questionVersionId: qv.id,
        idempotencyKey: crypto.randomUUID(),
        selected: sel,
        durationMs: Date.now() - shownAt.current,
        confidence: confidence[qv.id] ?? null,
        clientSeq: ++seq.current,
      };
      const ok = await send(qv.id, body);
      if (!ok) writeQueue([...readQueue().filter((p) => !(isExam && p.qvId === qv.id)), { qvId: qv.id, body }]);
    },
    [confidence, send, writeQueue, readQueue, isExam],
  );

  // ---------- Chronomètre (temps serveur) ----------
  useEffect(() => {
    if (!isExam) return;
    const t = setInterval(() => setNow(Date.now()), 500);
    return () => clearInterval(t);
  }, [isExam]);
  const serverNow = now + offset.current;
  const deadline = view.sectionDeadline ? new Date(view.sectionDeadline).getTime() : null;
  const remaining = deadline ? deadline - serverNow : null;
  const pauseRemaining = view.pauseUntil && !view.sectionStartedAt ? new Date(view.pauseUntil).getTime() - serverNow : null;

  useEffect(() => {
    if (!strict || remaining === null) return;
    if (remaining <= 60_000 && remaining > 59_000) setAnnounce("Attention : plus qu'une minute.");
    if (remaining <= 0) {
      // Échéance atteinte : le serveur clôt la partie ; on recharge son état.
      reload().then((v) => {
        if (v && v.status !== "in_progress") goToResult();
        else setIndex(0);
      });
    }
  }, [strict, remaining, reload, goToResult]);
  useEffect(() => {
    if (pauseRemaining !== null && pauseRemaining <= 0) reload();
  }, [pauseRemaining, reload]);

  // ---------- Actions ----------
  const toggle = useCallback(
    (id: string) => {
      if (!q || (correction && !isExam)) return;
      const cur = selections[q.id] ?? [];
      const next = q.format === "multiple" ? (cur.includes(id) ? cur.filter((x) => x !== id) : [...cur, id]) : [id];
      setSelections((s) => ({ ...s, [q.id]: next }));
      if (isExam) {
        // Enregistrement au fil de l'eau en concours blanc.
        if (view.kind === "exam_pedagogic") setCorrections((c) => { const n = { ...c }; delete n[q.id]; return n; });
        submitAnswer(q, next);
      }
    },
    [q, correction, isExam, selections, submitAnswer, view.kind],
  );

  const validate = useCallback(async () => {
    if (!q || !selected.length || busy) return;
    setBusy(true);
    await submitAnswer(q, selected);
    setBusy(false);
  }, [q, selected, busy, submitAnswer]);

  const finish = useCallback(async () => {
    setBusy(true);
    await flush();
    if (readQueue().length) {
      setMessage("Des réponses attendent encore le retour de la connexion. Réessaie dans un instant.");
      setBusy(false);
      return;
    }
    const r = await post(`/api/attempts/${view.id}/finalize`, {});
    setBusy(false);
    if (r.ok || r.status === 409) goToResult();
    else setMessage(r.data.message ?? "La séance n'a pas pu être terminée. Tes réponses sont enregistrées.");
  }, [flush, readQueue, view.id, goToResult]);

  const submitSection = useCallback(async () => {
    const unanswered = sectionQuestions.filter((x) => !(selections[x.id]?.length)).length;
    const last = !view.sections || view.current >= view.sections.length - 1;
    const msg = `${unanswered ? `${unanswered} question(s) sans réponse. ` : ""}${last ? "Terminer l'épreuve ?" : "Terminer cette partie et passer à la pause ?"}`;
    if (!window.confirm(msg)) return;
    setBusy(true);
    await flush();
    const r = await post(`/api/attempts/${view.id}/section`, { action: "submit", index: view.current });
    setBusy(false);
    if (r.ok && r.data.status !== "in_progress") return goToResult();
    await reload();
    setIndex(0);
  }, [sectionQuestions, selections, view, flush, reload, goToResult]);

  const startSection = useCallback(async () => {
    setBusy(true);
    await post(`/api/attempts/${view.id}/section`, { action: "start", index: view.current });
    await reload();
    setIndex(0);
    setBusy(false);
  }, [view.id, view.current, reload]);

  const askHint = useCallback(async () => {
    if (!q || strict || correction) return;
    const r = await post(`/api/attempts/${view.id}/hint`, { questionVersionId: q.id });
    if (r.ok) setHints((h) => ({ ...h, [q.id]: r.data.hints }));
  }, [q, strict, correction, view.id]);

  const report = useCallback(async () => {
    if (!q) return;
    const text = window.prompt("Décris l'ambiguïté ou l'erreur repérée :");
    if (!text) return;
    const r = await post("/api/reports", { contentType: "question", contentVersionId: q.id, message: text });
    setMessage(r.ok ? "Merci : ton signalement a été transmis à un responsable pédagogique." : r.data.message);
  }, [q]);

  const next = useCallback(() => {
    if (index < sectionQuestions.length - 1) setIndex(index + 1);
  }, [index, sectionQuestions.length]);

  // ---------- Clavier ----------
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const t = e.target as HTMLElement;
      if (t.closest("input, textarea, select") || e.metaKey || e.ctrlKey || e.altKey) return;
      const k = e.key.toLowerCase();
      if (k in KEYMAP && q && q.options[KEYMAP[k]]) {
        e.preventDefault();
        toggle(q.options[KEYMAP[k]].id);
      } else if (k === "enter" && !t.closest("button, a")) {
        e.preventDefault();
        if (isExam) next();
        else if (correction || (view.kind === "diagnostic" && saveState[q?.id ?? ""] === "saved")) {
          if (index < sectionQuestions.length - 1) next();
          else finish();
        } else validate();
      } else if (k === "i") askHint();
      else if (isExam && k === "arrowright") next();
      else if (isExam && k === "arrowleft" && index > 0) setIndex(index - 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [q, toggle, isExam, next, correction, validate, finish, askHint, index, sectionQuestions.length, view.kind, saveState]);

  // ---------- Rendu ----------
  if (view.status !== "in_progress") {
    return (
      <div className="card stack">
        <h2>Séance terminée</h2>
        <p>{message ?? "Cette séance est close."}</p>
        <button className="btn primary" onClick={goToResult}>Voir le résultat</button>
      </div>
    );
  }

  const section = view.sections?.[view.current];
  const doc = q?.documentSetVersionId ? view.documents.find((d) => d.id === q.documentSetVersionId) : null;
  const answeredCount = sectionQuestions.filter((x) => saveState[x.id] === "saved" || (selections[x.id]?.length ?? 0) > 0).length;

  // Pause encadrée entre deux parties.
  if (isExam && pauseRemaining !== null) {
    return (
      <div className="card stack" style={{ maxWidth: 640, margin: "0 auto" }}>
        <p className="eyebrow">Pause</p>
        <h2>Prochaine partie : {section?.label}</h2>
        <p>
          {section?.count} questions, {section?.minutes} minutes. La partie démarre automatiquement dans <strong>{fmt(pauseRemaining)}</strong>.
        </p>
        <button className="btn primary" onClick={startSection} disabled={busy}>Commencer maintenant</button>
      </div>
    );
  }

  const header = (
    <div className="card row between" style={{ padding: 12, position: "sticky", top: 64, zIndex: 10 }}>
      <div>
        <p className="eyebrow" style={{ margin: 0 }}>
          {view.title}
          {section && view.sections!.length > 1 ? ` · partie ${view.current + 1}/${view.sections!.length} : ${section.label}` : ""}
        </p>
        <span className="small muted">
          Question {index + 1} sur {sectionQuestions.length} · {answeredCount} répondue(s)
        </span>
      </div>
      {isExam && remaining !== null && (
        <div className={`timer ${remaining < 60_000 ? "low" : ""}`} role="timer" aria-label={`Temps restant ${fmt(remaining)}`}>
          {strict ? fmt(remaining) : `Temps indicatif ${fmt(remaining)}`}
        </div>
      )}
      <span className="sr-only" aria-live="assertive">{announce}</span>
    </div>
  );

  const questionPane = q && (
    <div className="stack">
      {q.status === "suspended" || q.status === "retired" ? <p className="notice warn">Cette question a été retirée depuis le début de la séance : elle ne comptera pas dans ta maîtrise.</p> : null}
      {q.reason && view.kind === "practice" && <p className="small muted">Choisie pour toi : {q.reason}.</p>}
      <Stem text={q.stem} />
      <OptionsList options={q.options} format={q.format} selected={selected} onToggle={toggle} correction={correction ?? null} />
      {q.format === "multiple" && !correction && <p className="small muted">Plusieurs réponses possibles.</p>}
      {(hints[q.id]?.length ?? 0) > 0 && (
        <div className="notice">
          <strong>Indices utilisés ({hints[q.id].length}/{q.hintCount}) : cette réponse comptera comme aidée.</strong>
          <ol style={{ margin: "6px 0 0" }}>{hints[q.id].map((h, i) => <li key={i}>{h}</li>)}</ol>
        </div>
      )}
      {!isExam && !correction && saveState[q.id] !== "saved" && view.kind !== "review" && (
        <fieldset style={{ border: "none", padding: 0 }}>
          <legend className="small muted" style={{ padding: 0 }}>Ta confiance (facultatif)</legend>
          <div className="radio-row">
            {[[3, "Sûr"], [2, "Hésitant"], [1, "Au hasard"]].map(([v, l]) => (
              <label className="radio-pill" key={v}>
                <input type="radio" name={`conf-${q.id}`} checked={confidence[q.id] === v} onChange={() => setConfidence((c) => ({ ...c, [q.id]: v as number }))} />
                <span>{l}</span>
              </label>
            ))}
          </div>
        </fieldset>
      )}
      {correction && showCorrections && <CorrectionPanel correction={correction} lessonHref={correction.lessonAnchor ? `/apprendre/cours/${q.lessonId}#${correction.lessonAnchor}` : `/apprendre/cours/${q.lessonId}`} onReport={report} />}
      {(view.kind === "practice" || view.kind === "review") && saveState[q.id] !== "pending" && (
        <AssistantPanel key={`${q.id}-${correction ? "x" : "h"}`} kind="question" attemptId={view.id} questionVersionId={q.id} phase={correction ? "explain" : "hint"} />
      )}
      {view.kind === "diagnostic" && saveState[q.id] === "saved" && <p className="notice ok" role="status">Réponse enregistrée. Les corrections seront dans ton bilan.</p>}

      <div className="row">
        {isExam ? (
          <>
            <button className="btn" onClick={() => setIndex(Math.max(0, index - 1))} disabled={index === 0}>← Précédente</button>
            <button className="btn" onClick={next} disabled={index >= sectionQuestions.length - 1}>Suivante →</button>
            <span className="small muted" aria-live="polite">
              {saveState[q.id] === "saving" ? "Enregistrement…" : saveState[q.id] === "saved" ? "✓ Réponse enregistrée" : saveState[q.id] === "pending" ? "En attente de connexion" : saveState[q.id] === "error" ? "Non enregistrée" : ""}
            </span>
          </>
        ) : correction || (view.kind === "diagnostic" && saveState[q.id] === "saved") ? (
          index < sectionQuestions.length - 1 ? (
            <button className="btn primary" onClick={next} autoFocus>Question suivante</button>
          ) : (
            <button className="btn primary" onClick={finish} disabled={busy} autoFocus>Terminer la séance</button>
          )
        ) : (
          <>
            <button className="btn primary" onClick={validate} disabled={!selected.length || busy || saveState[q.id] === "saving"}>
              {saveState[q.id] === "pending" ? "En attente de connexion…" : "Valider"}
            </button>
            {!strict && q.hintCount > (hints[q.id]?.length ?? 0) && (
              <button className="btn ghost" onClick={askHint}>Indice ({(hints[q.id]?.length ?? 0) + 1}/{q.hintCount})</button>
            )}
          </>
        )}
      </div>

      {isExam && (
        <div className="stack">
          <nav className="qnav" aria-label="Questions de cette partie">
            {sectionQuestions.map((x, i) => (
              <button key={x.id} aria-current={i === index} data-answered={(selections[x.id]?.length ?? 0) > 0} onClick={() => setIndex(i)} aria-label={`Question ${i + 1}${(selections[x.id]?.length ?? 0) > 0 ? ", répondue" : ", sans réponse"}`}>
                {i + 1}
              </button>
            ))}
          </nav>
          <div className="row">
            <button className="btn primary" onClick={submitSection} disabled={busy}>
              {!view.sections || view.current >= view.sections.length - 1 ? "Terminer l'épreuve" : "Terminer cette partie"}
            </button>
          </div>
        </div>
      )}
      {!isExam && (
        <p className="small muted">
          Raccourcis : <span className="kbd">1</span>–<span className="kbd">4</span> choisir, <span className="kbd">Entrée</span> valider, <span className="kbd">I</span> indice.{" "}
          <button className="btn ghost small" onClick={finish} disabled={busy}>Arrêter et voir le bilan</button>
        </p>
      )}
    </div>
  );

  return (
    <div className="stack">
      {offline && <div className="offline-banner" role="status">Connexion perdue : tes réponses sont gardées sur cet appareil et seront envoyées au retour du réseau.</div>}
      {message && <p className="notice warn" role="alert">{message}</p>}
      {view.skippedSections.length > 0 && view.current === 0 && index === 0 && (
        <p className="notice warn">Épreuves non disponibles dans la banque actuelle, ignorées : {view.skippedSections.join(", ")}.</p>
      )}
      {section?.reducedFrom && index === 0 && (
        <p className="notice">Simulation réduite : {section.count} questions au lieu de {section.reducedFrom} (banque de démonstration), durée ajustée à {section.minutes} min.</p>
      )}
      {view.extensionFactor > 1 && index === 0 && <p className="notice">Aménagement de durée simulé (×{view.extensionFactor}) : ce résultat n&apos;est pas comparable à une épreuve sans aménagement.</p>}
      {header}
      {doc ? (
        <>
          <div className="tabs" role="tablist" aria-label="Affichage">
            <button role="tab" aria-selected={mobileTab === "docs"} className={`btn small ${mobileTab === "docs" ? "primary" : ""}`} onClick={() => setMobileTab("docs")}>Documents</button>
            <button role="tab" aria-selected={mobileTab === "questions"} className={`btn small ${mobileTab === "questions" ? "primary" : ""}`} onClick={() => setMobileTab("questions")}>Question</button>
          </div>
          <div className="split" style={{ "--left": `${split}%` } as React.CSSProperties}>
            <div className="pane" hidden-mobile={mobileTab !== "docs" ? "true" : "false"}>
              <DocumentPane
                title={doc.title}
                documents={doc.documents}
                highlights={highlights}
                onToggleHighlight={strict ? undefined : (k) => setHighlights((h) => { const n = new Set(h); if (n.has(k)) n.delete(k); else n.add(k); return n; })}
              />
            </div>
            <button
              className="gutter"
              aria-label="Redimensionner les panneaux (flèches gauche et droite)"
              onKeyDown={(e) => {
                if (e.key === "ArrowLeft") setSplit((v) => Math.max(25, v - 5));
                if (e.key === "ArrowRight") setSplit((v) => Math.min(75, v + 5));
              }}
              onPointerDown={(e) => {
                const parent = (e.currentTarget.parentElement as HTMLElement).getBoundingClientRect();
                const move = (ev: PointerEvent) => setSplit(Math.min(75, Math.max(25, ((ev.clientX - parent.left) / parent.width) * 100)));
                const up = () => { window.removeEventListener("pointermove", move); window.removeEventListener("pointerup", up); };
                window.addEventListener("pointermove", move);
                window.addEventListener("pointerup", up);
              }}
            />
            <div className="pane" hidden-mobile={mobileTab !== "questions" ? "true" : "false"}>{questionPane}</div>
          </div>
        </>
      ) : (
        <div className="card" style={{ maxWidth: 820 }}>{questionPane}</div>
      )}
    </div>
  );
}
