"use client";
// Journal du jour (sujets de la semaine en cours) et réécoute des semaines précédentes.
// Calculé sur l'appareil (heure de Paris) : même journal en ligne et hors ligne.
import { useEffect, useState } from "react";
import { NEWS_WEEKS } from "@/content/bank/en/news-weeks";
import { buildProgramme, storyProgramme, type Programme } from "@/lib/programme";
import { NewsProgramme } from "./NewsProgramme";

/** Sujets du journal du jour : la semaine en cours, complétée par la précédente si elle en a moins de huit. */
function todayProgramme() {
  const [cur, prev] = NEWS_WEEKS;
  const reports = cur.reports.length >= 8 || !prev ? cur.reports : [...cur.reports, ...prev.reports];
  const flashes = cur.flashes.length >= 8 || !prev ? cur.flashes : [...cur.flashes, ...prev.flashes];
  return buildProgramme(reports, flashes);
}

export function DailyJournal({ archive = true }: { archive?: boolean }) {
  const [programme, setProgramme] = useState<Programme | null | undefined>(undefined);
  const [replay, setReplay] = useState<{ title: string; programme: Programme } | null>(null);
  useEffect(() => setProgramme(todayProgramme()), []);
  if (programme === undefined) return <p className="muted">Préparation du journal…</p>;

  const open = (title: string, p: Programme | null) => {
    if (!p) return;
    setReplay({ title, programme: p });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const weeks = NEWS_WEEKS;
  return (
    <div className="stack">
      {replay ? (
        <div className="stack">
          <div className="row between">
            <p className="eyebrow" style={{ margin: 0 }}>Réécoute · {replay.title}</p>
            <button className="btn ghost small" onClick={() => setReplay(null)}>← Journal du jour</button>
          </div>
          <NewsProgramme key={`${replay.title}-${replay.programme.date}`} programme={replay.programme} />
        </div>
      ) : programme ? (
        <NewsProgramme key={programme.date} programme={programme} />
      ) : (
        <p className="muted">Le journal n&apos;est pas encore disponible.</p>
      )}

      {archive && (
        <section className="stack" aria-labelledby="archives">
          <h2 id="archives" style={{ margin: 0 }}>Sujets de la semaine et semaines précédentes</h2>
          <p className="small muted" style={{ margin: 0 }}>De nouveaux sujets arrivent chaque lundi. Les anciens restent ici pour les réécouter plus tard, même hors ligne.</p>
          {weeks.map((w, wi) => (
            <details key={w.week} className="card" open={wi === 0}>
              <summary>
                <strong>{wi === 0 ? `Cette semaine · ${w.label}` : w.label}</strong> <span className="small muted">· {w.reports.length} sujets</span>
              </summary>
              <div className="stack" style={{ marginTop: 12 }}>
                {wi > 0 && (
                  <div>
                    <button className="btn small" onClick={() => open(`journal de la ${w.label.toLowerCase()}`, buildProgramme(w.reports, w.flashes))}>
                      Écouter un journal de cette semaine (15 min)
                    </button>
                  </div>
                )}
                <ul className="rows">
                  {w.reports.map((r) => (
                    <li key={r.exerciseId}>
                      <span className="grow">
                        <strong lang="en-GB">{r.headline}</strong>
                        <span className="small muted" style={{ display: "block" }}>{r.category}</span>
                      </span>
                      <button className="btn ghost small" onClick={() => open(r.headline, storyProgramme(r, w.label))}>Écouter</button>
                    </li>
                  ))}
                </ul>
              </div>
            </details>
          ))}
        </section>
      )}
    </div>
  );
}
