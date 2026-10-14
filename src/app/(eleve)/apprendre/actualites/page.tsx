import Link from "next/link";
import { getDb } from "@/db";
import { listNews } from "@/server/catalog";
import { requireStudent } from "@/server/next";
import { frDate } from "@/components/labels";

export const metadata = { title: "Veille d'actualité" };
export const dynamic = "force-dynamic";

const CLAIM_LABELS = { fact: "Fait établi", statement: "Déclaration", interpretation: "Interprétation", uncertain: "Élément incertain" } as const;

export default async function Page() {
  const actor = await requireStudent();
  const { windowStart, examDate, items } = await listNews(getDb(), actor);
  const inWindow = items.filter((i) => i.inWindow);
  const context = items.filter((i) => !i.inWindow);
  return (
    <div className="container stack" style={{ maxWidth: 860 }}>
      <nav className="small"><Link href="/apprendre">Apprendre</Link> › Actualité</nav>
      <h1>Veille d&apos;actualité</h1>
      <p className="muted">
        Fenêtre couverte pour ta session : du {frDate(windowStart, { day: "numeric", month: "long", year: "numeric" })} au {frDate(examDate, { day: "numeric", month: "long", year: "numeric" })} (dix mois avant le concours). Les catégories équilibrent les contenus ; elles ne prédisent pas les sujets.
      </p>
      {inWindow.length === 0 && (
        <p className="notice warn">
          <strong>Aucune fiche publiée dans la fenêtre pour l&apos;instant.</strong>
          Les fiches de la période sont rédigées et vérifiées par l&apos;équipe éditoriale au fil des mois. En attendant, les fiches ci-dessous servent de contexte.
        </p>
      )}
      {[...inWindow, ...context].map((n) => (
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
            <dl>{n.vocabulary.map((v) => <div key={v.term}><dt><strong>{v.term}</strong></dt><dd>{v.definition}</dd></div>)}</dl>
          </details>
          <p className="small">Sources : {n.sources.map((s) => <a key={s.url} href={s.url} rel="noopener noreferrer" target="_blank">{s.label}</a>)}</p>
        </article>
      ))}
    </div>
  );
}
