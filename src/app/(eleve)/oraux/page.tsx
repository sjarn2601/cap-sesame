import Link from "next/link";
import { getDb } from "@/db";
import { getProfile } from "@/server/profile";
import { getPublishedConfig } from "@/server/sessionConfig";
import { getDossier, listSheets, listSimulations } from "@/server/oral";
import { requireStudent } from "@/server/next";
import { frDate, frDateTime } from "@/components/labels";
import { DeleteSimulation, DossierEditor, StartSimulation } from "./OralClient";

export const metadata = { title: "Oraux" };
export const dynamic = "force-dynamic";

export default async function Page() {
  const actor = await requireStudent();
  const db = getDb();
  const config = await getPublishedConfig(db, (await getProfile(db, actor)).examSessionCode);
  const [sheets, dossier, sims] = await Promise.all([listSheets(db, actor), getDossier(db, actor), listSimulations(db, actor)]);
  const s2 = config.body.sources.find((s) => s.id === "S2");
  const fmt = { day: "numeric", month: "long", year: "numeric" } as const;
  return (
    <div className="container stack" style={{ maxWidth: 820 }}>
      <h1>Oraux</h1>
      <section className="card stack">
        <p>
          Les oraux sont propres à chaque école. Période annoncée pour {config.code} : du {frDate(config.body.oralPeriod.from, fmt)} au {frDate(config.body.oralPeriod.to, fmt)}. La note de dossier participe à l&apos;admissibilité.
        </p>
        {s2 && <p><a href={s2.url} target="_blank" rel="noopener noreferrer">Consulter la page officielle des épreuves orales</a></p>}
      </section>

      <section className="stack">
        <h2>Fiches de programme</h2>
        <p className="small muted">Chaque fiche vaut pour une école, un programme, un campus et une session. Les modalités d&apos;une école ne s&apos;appliquent pas aux autres.</p>
        {sheets.length === 0 && <p className="muted">Aucune fiche publiée pour ta session.</p>}
        {sheets.map((s) => (
          <details key={s.id} className="card flat">
            <summary><strong>{s.school}</strong> · {s.program}</summary>
            <div className="stack" style={{ marginTop: 8 }}>
              <p className="small muted">{s.campus} · session {s.sessionCode} · vérifiée le {frDate(s.lastVerifiedAt)}{s.isDemo ? " · fiche de démonstration (école fictive)" : ""}</p>
              <p>{s.oralFormat}</p>
              <p><strong>Ce qui est attendu :</strong></p>
              <ul>{s.expectations.map((e) => <li key={e}>{e}</li>)}</ul>
              <p className="small">Sources : {s.sources.map((x, i) => <a key={i} href={x.url} target="_blank" rel="noopener noreferrer">{x.label}</a>)}</p>
            </div>
          </details>
        ))}
      </section>

      <section className="card stack">
        <h2>Mon dossier</h2>
        <p className="small muted">Tes faits, tes mots. L&apos;assistant aide à les organiser sans rien inventer.</p>
        <DossierEditor initial={dossier} />
      </section>

      <section className="card stack">
        <h2>Simulation d&apos;entretien</h2>
        <p>Cinq questions : motivation, programme et parcours. Réponds par écrit ou à voix haute (le micro n&apos;est activé qu&apos;avec ton accord, sans caméra). Tu reçois un retour sur six critères.</p>
        <StartSimulation sheets={sheets.map((s) => ({ id: s.id, label: `${s.school} · ${s.program}` }))} />
      </section>

      {sims.length > 0 && (
        <section className="card flat stack">
          <h2>Mes simulations</h2>
          <ul className="list-plain stack">
            {sims.map((s) => (
              <li key={s.id} className="row between">
                <Link href={`/oraux/simulation/${s.id}`}>
                  {frDateTime(s.createdAt)} · {s.turns.filter((t) => t.answer.trim()).length}/{s.turns.length} réponses{s.feedback ? " · retour disponible" : ""}
                </Link>
                <DeleteSimulation id={s.id} />
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}
