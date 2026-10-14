"use client";
import { useCallback, useEffect, useState } from "react";
import { scoreQuestion } from "@/lib/scoring";
import { getLessons, getPacks, newClientId, removePack, savePack, setLessons, swCommand, type StoredLesson, type StoredPack } from "@/lib/offlineStore";
import type { OfflineQuestion, SyncReport } from "@/server/offline";

const KEYS = ["A", "B", "C", "D", "E", "F", "G", "H"];

async function syncPack(p: StoredPack, finish: boolean): Promise<StoredPack> {
  const pending = p.answers.filter((a) => !p.syncedIds.includes(a.clientId));
  const res = await fetch("/api/offline/sync", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ attemptId: p.pack.attemptId, answers: pending, localScores: p.localScores, finish }),
  });
  if (!res.ok) throw new Error((await res.json().catch(() => null))?.message ?? "Synchronisation impossible.");
  const report = (await res.json()) as SyncReport;
  const next = { ...p, syncedIds: [...p.syncedIds, ...pending.map((a) => a.clientId)], sync: { ...report, at: new Date().toISOString() } };
  savePack(next);
  return next;
}

function Series({ stored, onChange, online }: { stored: StoredPack; onChange: (p: StoredPack) => void; online: boolean }) {
  const qs = stored.pack.questions;
  const answeredIds = new Set(stored.answers.map((a) => a.questionVersionId));
  const firstOpen = qs.findIndex((q) => !answeredIds.has(q.id));
  const [index, setIndex] = useState(firstOpen === -1 ? qs.length - 1 : firstOpen);
  const [selected, setSelected] = useState<string[]>([]);
  const [numeric, setNumeric] = useState("");
  const [startedAt, setStartedAt] = useState(() => Date.now());
  const q: OfflineQuestion = qs[index];
  const answer = stored.answers.find((a) => a.questionVersionId === q.id);

  const validate = () => {
    const numericValue = q.format === "numeric" ? Number(numeric.replace(",", ".")) : null;
    const s = scoreQuestion(q, { selected, numericValue });
    const next: StoredPack = {
      ...stored,
      answers: [...stored.answers, { questionVersionId: q.id, clientId: newClientId(), selected, numericValue, durationMs: Date.now() - startedAt, answeredAt: new Date().toISOString() }],
      localScores: { ...stored.localScores, [q.id]: s.isCorrect },
    };
    savePack(next);
    onChange(next);
  };
  const goNext = () => {
    setIndex(index + 1);
    setSelected([]);
    setNumeric("");
    setStartedAt(Date.now());
  };
  const finish = () => {
    const next = { ...stored, finished: true };
    savePack(next);
    onChange(next);
  };

  const status = answer ? (stored.localScores[q.id] ? "correct" : "wrong") : null;
  return (
    <div className="stack">
      <p className="small muted" style={{ margin: 0 }}>Question {index + 1} sur {qs.length} · {stored.answers.length} réponse(s) enregistrée(s) sur l&apos;appareil</p>
      <p style={{ whiteSpace: "pre-line", margin: 0 }}>{q.stem}</p>
      {q.format === "numeric" ? (
        <div>
          <label htmlFor={`n-${q.id}`}>Ta réponse</label>
          <input id={`n-${q.id}`} inputMode="decimal" value={answer ? String(answer.numericValue ?? "") : numeric} disabled={!!answer} onChange={(e) => setNumeric(e.target.value)} />
        </div>
      ) : (
        <div role={q.format === "multiple" ? "group" : "radiogroup"} className="options" aria-label={q.format === "multiple" ? "Options, plusieurs réponses possibles" : "Options, une seule réponse"}>
          {q.options.map((o, i) => {
            const sel = (answer?.selected ?? selected).includes(o.id);
            const cls = `option ${sel ? "selected" : ""} ${answer ? (o.correct ? "correct" : sel ? "wrong" : "") : ""}`;
            return (
              <button
                key={o.id}
                type="button"
                className={cls}
                role={q.format === "multiple" ? "checkbox" : "radio"}
                aria-checked={sel}
                disabled={!!answer}
                onClick={() => setSelected(q.format === "multiple" ? (selected.includes(o.id) ? selected.filter((x) => x !== o.id) : [...selected, o.id]) : [o.id])}
              >
                <span className="key" aria-hidden="true">{KEYS[i]}</span>
                <span style={{ flex: 1 }}>
                  {o.text}
                  {answer && <span className="justif">{o.justification}</span>}
                </span>
              </button>
            );
          })}
        </div>
      )}
      {answer && (
        <section className={`correction ${status === "correct" ? "ok" : "ko"}`} aria-live="polite">
          <p><strong>{status === "correct" ? "Bonne réponse" : "Réponse incorrecte"}</strong>{q.format === "numeric" && q.numericAnswer !== null ? ` · attendu : ${q.numericAnswer}` : ""}</p>
          <p>{q.explanation}</p>
          <p className="rule">À retenir : {q.rule}</p>
          <p className="small muted" style={{ margin: 0 }}>Note provisoire calculée sur l&apos;appareil : le serveur la confirme à la synchronisation.</p>
        </section>
      )}
      <div className="row">
        {!answer && (
          <button className="btn primary" disabled={q.format === "numeric" ? numeric.trim() === "" : selected.length === 0} onClick={validate}>Valider</button>
        )}
        {answer && index < qs.length - 1 && <button className="btn primary" onClick={goNext} autoFocus>Question suivante</button>}
        {answer && index === qs.length - 1 && !stored.finished && <button className="btn primary" onClick={finish} autoFocus>Terminer la série</button>}
        {!online && <span className="small muted">Synchronisation au retour du réseau.</span>}
      </div>
    </div>
  );
}

export function OfflineApp() {
  const [packs, setPacks] = useState<Record<string, StoredPack>>({});
  const [lessons, setLessonsState] = useState<StoredLesson[]>([]);
  const [online, setOnline] = useState(true);
  const [open, setOpen] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [ready, setReady] = useState(false);

  const refresh = () => {
    setPacks(getPacks());
    setLessonsState(getLessons());
  };

  const syncAll = useCallback(async () => {
    if (!navigator.onLine) return;
    const all = getPacks();
    for (const p of Object.values(all)) {
      const pending = p.answers.some((a) => !p.syncedIds.includes(a.clientId));
      if (!pending && !(p.finished && !p.sync?.finalized)) continue;
      try {
        await syncPack(p, !!p.finished);
      } catch (e) {
        setMessage(e instanceof Error ? e.message : "Synchronisation impossible.");
      }
    }
    refresh();
  }, []);

  useEffect(() => {
    refresh();
    setReady(true);
    const up = () => {
      setOnline(navigator.onLine);
      if (navigator.onLine) syncAll();
    };
    up();
    window.addEventListener("online", up);
    window.addEventListener("offline", up);
    return () => {
      window.removeEventListener("online", up);
      window.removeEventListener("offline", up);
    };
  }, [syncAll]);

  const removeLesson = async (url: string) => {
    await swCommand({ type: "remove", url });
    const next = getLessons().filter((l) => l.url !== url);
    setLessons(next);
    setLessonsState(next);
  };

  if (!ready) return <p className="muted">Chargement de tes contenus…</p>;
  const list = Object.values(packs).sort((a, b) => b.pack.downloadedAt.localeCompare(a.pack.downloadedAt));
  const update = (p: StoredPack) => {
    setPacks((all) => ({ ...all, [p.pack.attemptId]: p }));
    if (p.finished && navigator.onLine) syncAll();
  };

  return (
    <>
      {message && <p className="notice ko" role="alert">{message}</p>}
      <section className="stack" aria-labelledby="series">
        <h2 id="series" style={{ margin: 0 }}>Séries téléchargées</h2>
        {list.length === 0 && <p className="muted">Aucune série. Avec le réseau, va dans « S&apos;entraîner » et touche « Télécharger une série ».</p>}
        {list.map((p) => {
          const done = p.answers.length;
          const pending = p.answers.filter((a) => !p.syncedIds.includes(a.clientId)).length;
          return (
            <article key={p.pack.attemptId} className="card stack">
              <div className="row between">
                <div>
                  <h3 style={{ margin: 0 }}>{p.pack.title}</h3>
                  <p className="small muted" style={{ margin: 0 }}>
                    {done} / {p.pack.questions.length} répondue(s)
                    {pending > 0 ? ` · ${pending} à synchroniser` : p.sync ? " · synchronisée" : ""}
                  </p>
                </div>
                {!p.finished && (
                  <button className="btn" onClick={() => setOpen(open === p.pack.attemptId ? null : p.pack.attemptId)} aria-expanded={open === p.pack.attemptId}>
                    {open === p.pack.attemptId ? "Fermer" : done ? "Continuer" : "Commencer"}
                  </button>
                )}
              </div>
              {p.sync && p.sync.withdrawn.length > 0 && (
                <p className="notice warn small">Question(s) retirée(s) depuis le téléchargement : {p.sync.withdrawn.join(", ")}. Le résultat reste visible mais ne compte pas dans ta maîtrise.</p>
              )}
              {p.sync && p.sync.rescored.length > 0 && <p className="notice small">Le corrigé de {p.sync.rescored.join(", ")} a changé : la note du serveur fait foi.</p>}
              {open === p.pack.attemptId && !p.finished && <Series stored={p} onChange={update} online={online} />}
              {p.finished && (
                <div className="row">
                  {p.sync?.finalized ? (
                    <>
                      <a className="btn primary" href={`/seance/${p.pack.attemptId}/resultat`}>Voir le résultat</a>
                      <button className="btn ghost" onClick={() => { removePack(p.pack.attemptId); refresh(); }}>Retirer de l&apos;appareil</button>
                    </>
                  ) : (
                    <span className="small muted">Série terminée : le résultat sera calculé au retour du réseau.</span>
                  )}
                </div>
              )}
            </article>
          );
        })}
        {online && list.some((p) => p.answers.some((a) => !p.syncedIds.includes(a.clientId))) && (
          <button className="btn" onClick={syncAll}>Synchroniser maintenant</button>
        )}
      </section>

      <section className="stack" aria-labelledby="cours">
        <h2 id="cours" style={{ margin: 0 }}>Cours téléchargés</h2>
        {lessons.length === 0 && <p className="muted">Aucun cours. Sur la page d&apos;un cours, touche « Disponible hors connexion ».</p>}
        <ul className="list-plain">
          {lessons.map((l) => (
            <li key={l.url} className="task">
              <a href={l.url}><strong>{l.title}</strong></a>
              <button className="btn ghost small" onClick={() => removeLesson(l.url)} aria-label={`Retirer ${l.title} de l'appareil`}>Retirer</button>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
