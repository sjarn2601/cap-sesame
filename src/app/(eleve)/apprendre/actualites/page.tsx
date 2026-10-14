import Link from "next/link";
import { getDb } from "@/db";
import { listNews } from "@/server/catalog";
import { requireStudent } from "@/server/next";
import { frDate } from "@/components/labels";
import { ActionForm, Submit } from "@/components/ActionForm";
import { startNewsQuizAction } from "@/app/actions/student";

export const metadata = { title: "Veille d'actualité" };
export const dynamic = "force-dynamic";

const CLAIM_LABELS = { fact: "Fait établi", statement: "Déclaration", interpretation: "Interprétation", uncertain: "Élément incertain" } as const;

export default async function Page({ searchParams }: { searchParams: Promise<{ vue?: string }> }) {
  const { vue } = await searchParams;
  const actor = await requireStudent();
  const { windowStart, examDate, items } = await listNews(getDb(), actor);
  const inWindow = items.filter((i) => i.inWindow);
  const context = items.filter((i) => !i.inWindow);
  const view = vue === "frise" || vue === "zones" ? vue : "fiches";
  const timeline = [...items].sort((a, b) => a.eventDate.localeCompare(b.eventDate));
  const zones = [...new Set(items.map((i) => i.zone))].sort();
  const long = { day: "numeric", month: "long", year: "numeric" } as const;
  return (
    <div className="container stack" style={{ maxWidth: 860 }}>
      <nav className="small"><Link href="/apprendre">Apprendre</Link> › Actualité</nav>
      <h1>Veille d&apos;actualité</h1>
      <p className="muted">
        Fenêtre couverte pour ta session : du {frDate(windowStart, { day: "numeric", month: "long", year: "numeric" })} au {frDate(examDate, { day: "numeric", month: "long", year: "numeric" })} (dix mois avant le concours). Les catégories équilibrent les contenus ; elles ne prédisent pas les sujets.
      </p>
      <div className="row">
        <nav className="row" aria-label="Affichage">
          {[["fiches", "Fiches"], ["frise", "Frise chronologique"], ["zones", "Par zone"]].map(([k, l]) => (
            <Link key={k} className={`btn small ${view === k ? "primary" : ""}`} href={k === "fiches" ? "/apprendre/actualites" : `/apprendre/actualites?vue=${k}`} aria-current={view === k ? "page" : undefined}>{l}</Link>
          ))}
        </nav>
        <ActionForm action={startNewsQuizAction}><Submit className="btn small" pendingText="Préparation…">Quiz de la semaine</Submit></ActionForm>
      </div>
      {view === "frise" && (
        <ol className="timeline" aria-label="Frise chronologique">
          {timeline.map((n) => (
            <li key={n.id}>
              <span className="timeline-date">{frDate(n.eventDate, long)}</span>
              <strong>{n.title}</strong>
              <span className="small muted"> · {n.zone} · {n.category}{n.inWindow ? "" : " · contexte"}</span>
              <p className="small" style={{ margin: "4px 0 0" }}>{n.whyItMatters}</p>
            </li>
          ))}
        </ol>
      )}
      {view === "zones" && (
        <div className="grid zones">
          {zones.map((z) => (
            <section key={z} className="card flat stack">
              <h2 style={{ margin: 0, fontSize: "1.1rem" }}>{z}</h2>
              <ul className="list-plain stack">
                {items.filter((i) => i.zone === z).map((n) => <li key={n.id}><strong>{n.title}</strong><br /><span className="small muted">{frDate(n.eventDate, long)} · {n.category}</span></li>)}
              </ul>
            </section>
          ))}
        </div>
      )}
      {view === "fiches" && inWindow.length === 0 && (
        <p className="notice warn">
          <strong>Aucune fiche publiée dans la fenêtre pour l&apos;instant.</strong>
          Les fiches de la période sont rédigées et vérifiées par l&apos;équipe éditoriale au fil des mois. En attendant, les fiches ci-dessous servent de contexte.
        </p>
      )}
      {view === "fiches" && [...inWindow, ...context].map((n) => (
        <article key={n.id} className="card stack">
          <div className="row">
            <span className="badge accent">{n.category}</span>
            {!n.inWindow && <span className="badge warn">Contexte : hors de la fenêtre de la session</span>}
            {n.isDemo && <span className="badge">Fiche de démonstration</span>}
          </div>
          <h2 style={{ margin: 0 }}>{n.title}</h2>
          <p className="small muted">Événement : {frDate(n.eventDate, { day: "numeric", month: "long", year: "numeric" })} · publiée le {frDate(n.publishedAt ?? n.createdAt, { day: "numeric", month: "long", year: "numeric" })} · dernière vérification : {frDate(n.lastVerifiedAt, { day: "numeric", month: "long", year: "numeric" })}</p>
          <p>{n.summary}</p>
          <p><strong>Pourquoi le retenir : </strong>{n.whyItMatters}</p>
          <details>
            <summary>Contexte, enjeux et vocabulaire</summary>
            <p><strong>Acteurs : </strong>{n.actors.join(", ")}</p>
            <p><strong>Contexte : </strong>{n.context}</p>
            <p><strong>Enjeux : </strong>{n.stakes}</p>
            <ul>{n.claims.map((c, i) => <li key={i}><span className="badge">{CLAIM_LABELS[c.kind]}</span> {c.text}</li>)}</ul>
            {n.viewpoints.length > 0 && (
              <>
                <p><strong>Points de vue :</strong></p>
                <ul>{n.viewpoints.map((v, i) => <li key={i}><strong>{v.actor}</strong> : {v.position} <a className="small" href={v.source.url} target="_blank" rel="noopener noreferrer">({v.source.label})</a></li>)}</ul>
              </>
            )}
            <dl>{n.vocabulary.map((v) => <div key={v.term}><dt><strong>{v.term}</strong></dt><dd>{v.definition}</dd></div>)}</dl>
          </details>
          <p className="small">Sources : {n.sources.map((s) => <a key={s.url} href={s.url} rel="noopener noreferrer" target="_blank">{s.label}</a>)}</p>
        </article>
      ))}
    </div>
  );
}
