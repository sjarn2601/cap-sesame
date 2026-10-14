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
  const shown = matiere ? catalog.filter((s) => s.code === matiere) : catalog;
  return (
    <div className="container stack">
      <div className="row between">
        <h1 style={{ margin: 0 }}>Apprendre</h1>
        <Link href="/apprendre/actualites" className="btn small">Veille d&apos;actualité</Link>
      </div>
      <form role="search" className="row" action="/apprendre">
        <label htmlFor="q" className="sr-only">Rechercher une notion</label>
        <input id="q" name="q" type="search" placeholder="Rechercher une notion : pourcentages, subjonctif, ser estar…" defaultValue={q} style={{ flex: 1, minWidth: 200 }} />
        <button className="btn primary">Rechercher</button>
      </form>
      {results && (
        <section className="card flat" aria-live="polite">
          <h2>{results.length} résultat(s) pour « {q} »</h2>
          {results.length ? (
            <ul className="list-plain">
              {results.map((r) => (
                <li key={r.skill.id}>
                  <Link href={`/apprendre/cours/${r.lesson!.lessonId}`}>{r.lesson!.title}</Link> <span className="muted small">· {r.skill.domain}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="muted">Aucune notion trouvée. Essaie un synonyme ou parcours les matières ci-dessous.</p>
          )}
        </section>
      )}
      <nav className="row" aria-label="Filtrer par matière">
        <Link href="/apprendre" className={`btn small ${!matiere ? "primary" : ""}`}>Toutes</Link>
        {catalog.map((s) => (
          <Link key={s.code} href={`/apprendre?matiere=${s.code}`} className={`btn small ${matiere === s.code ? "primary" : ""}`}>{s.name}</Link>
        ))}
      </nav>
      {shown.map((s) => (
        <section key={s.code} className="stack">
          <h2>{s.name}</h2>
          <div className="grid">
            {s.skills.map((k) => (
              <article key={k.id} className="card flat stack">
                <div>
                  <p className="eyebrow">{k.domain}</p>
                  <h3>{k.name}</h3>
                  <span className="badge">{k.mastery ? MASTERY_LABELS[k.mastery.status as MasteryStatus] : "Pas encore travaillé"}</span>
                </div>
                <div className="row">
                  {k.lesson && <Link className="btn small" href={`/apprendre/cours/${k.lesson.lessonId}`}>Cours et fiche</Link>}
                  {k.questionCount > 0 && <Link className="btn small ghost" href={`/entrainement?notion=${k.id}`}>S&apos;entraîner</Link>}
                </div>
              </article>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
