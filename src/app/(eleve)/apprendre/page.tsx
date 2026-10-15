import Link from "next/link";
import { getDb } from "@/db";
import { getCatalog, searchCatalog } from "@/server/catalog";
import { requireStudent } from "@/server/next";
import { MASTERY_LABELS, type MasteryStatus } from "@/lib/mastery";

export const metadata = { title: "Apprendre" };
export const dynamic = "force-dynamic";

export default async function Page({ searchParams }: { searchParams: Promise<{ q?: string; matiere?: string }> }) {
  const { q, matiere } = await searchParams;
  const actor = await requireStudent();
  const db = getDb();
  const catalog = await getCatalog(db, actor);
  const results = q ? await searchCatalog(db, q) : null;
  const current = matiere ? catalog.find((s) => s.code === matiere) : null;
  const dot = (status?: string) => (status === "probable" ? "ok" : status === "in_progress" ? "warn" : status === "fragile" ? "ko" : "");
  return (
    <div className="container stack">
      <h1 style={{ margin: 0 }}>Apprendre</h1>
      <form role="search" className="row" action="/apprendre" style={{ flexWrap: "nowrap" }}>
        <label htmlFor="q" className="sr-only">Rechercher une notion</label>
        <input id="q" name="q" type="search" placeholder="Rechercher une notion…" defaultValue={q} style={{ flex: 1, minWidth: 0 }} />
        <button className="btn">Rechercher</button>
      </form>
      {results && (
        <section className="stack" aria-live="polite">
          <h2>{results.length} résultat(s) pour « {q} »</h2>
          {results.length ? (
            <ul className="rows">
              {results.map((r) => (
                <li key={r.skill.id}>
                  <span className="grow">
                    <Link className="title" href={`/apprendre/cours/${r.lesson!.lessonId}`}>{r.lesson!.title}</Link>
                    <span className="muted small"> · {r.skill.domain}</span>
                  </span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="muted">Aucune notion trouvée. Essaie un synonyme ou parcours les matières.</p>
          )}
        </section>
      )}
      {!current ? (
        <>
          <nav className="tiles" aria-label="Matières">
            {catalog.map((s, i) => {
              const worked = s.skills.filter((k) => k.mastery).length;
              return (
                <Link key={s.code} href={`/apprendre?matiere=${s.code}`} className="tile" data-tone={s.code}>
                  <span className="tile-top" aria-hidden="true">
                    <span className="tile-num">{String(i + 1).padStart(2, "0")}</span>
                    <span className="monogram">{s.code.replace("LV-", "").slice(0, 3)}</span>
                  </span>
                  <strong>{s.name}</strong>
                  <span className="muted small">{s.skills.filter((k) => k.lesson).length} cours{worked ? ` · ${worked} travaillé(s)` : ""}</span>
                  <div className="meter" aria-hidden="true"><span style={{ width: `${s.skills.length ? Math.round((worked / s.skills.length) * 100) : 0}%` }} /></div>
                </Link>
              );
            })}
          </nav>
          <p className="small muted">
            Aussi : <Link href="/apprendre/langues">langues à l&apos;oral</Link> · <Link href="/apprendre/actualites">veille d&apos;actualité</Link>
          </p>
        </>
      ) : (
        <section className="stack">
          <nav className="chips" aria-label="Filtrer par matière">
            <Link href="/apprendre" className="btn small">Toutes</Link>
            {catalog.map((s) => (
              <Link key={s.code} href={`/apprendre?matiere=${s.code}`} className={`btn small ${matiere === s.code ? "primary" : ""}`} aria-current={matiere === s.code ? "page" : undefined}>{s.name}</Link>
            ))}
          </nav>
          <h2 style={{ margin: 0 }}>{current.name}</h2>
          <ul className="rows">
            {current.skills.map((k) => (
              <li key={k.id}>
                <span className={`dot ${dot(k.mastery?.status)}`} title={k.mastery ? MASTERY_LABELS[k.mastery.status as MasteryStatus] : "Pas encore travaillé"} />
                <span className="grow">
                  {k.lesson ? <Link className="title" href={`/apprendre/cours/${k.lesson.lessonId}`}>{k.name}</Link> : <strong>{k.name}</strong>}
                  <span className="muted small" style={{ display: "block" }}>{k.domain} · {k.mastery ? MASTERY_LABELS[k.mastery.status as MasteryStatus] : "pas encore travaillé"}</span>
                </span>
                {k.questionCount > 0 && <Link className="btn small ghost" href={`/entrainement?notion=${k.id}`} aria-label={`S'entraîner : ${k.name}`}>S&apos;entraîner</Link>}
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}
