import Link from "next/link";
import { notFound } from "next/navigation";
import { getDb } from "@/db";
import { skillDrilldown } from "@/server/progress";
import { requireStudent } from "@/server/next";
import { AppError } from "@/server/errors";
import { MASTERY_LABELS } from "@/lib/mastery";
import { frDateTime } from "@/components/labels";

export const dynamic = "force-dynamic";

export default async function Page({ params }: { params: Promise<{ skillId: string }> }) {
  const { skillId } = await params;
  const actor = await requireStudent();
  const d = await skillDrilldown(getDb(), actor, skillId).catch((e) => {
    if (e instanceof AppError && e.status === 404) notFound();
    throw e;
  });
  return (
    <div className="container stack" style={{ maxWidth: 860 }}>
      <nav className="small"><Link href="/progres">Progrès</Link> › {d.skill.name}</nav>
      <h1>{d.skill.name}</h1>
      <section className="card">
        <p><span className="badge accent">{MASTERY_LABELS[d.mastery.status]}</span></p>
        <p>{d.mastery.explanation}</p>
        <div className="row">
          <Link className="btn small" href={`/entrainement?notion=${d.skill.id}`}>S&apos;entraîner sur cette notion</Link>
          <Link className="btn small ghost" href={`/apprendre/cours/L-${d.skill.id}`}>Revoir le cours</Link>
        </div>
      </section>
      <section className="card flat">
        <h2>Les réponses qui expliquent cet indicateur</h2>
        <div className="table-wrap">
          <table className="data">
            <thead><tr><th>Date</th><th>Séance</th><th>Résultat</th><th>Question</th></tr></thead>
            <tbody>
              {d.responses.map((r, i) => (
                <tr key={i}>
                  <td>{frDateTime(r.at)}</td>
                  <td>{r.inProgress ? r.kindLabel : <Link href={`/seance/${r.attemptId}/resultat`}>{r.kindLabel}</Link>}</td>
                  <td>
                    {r.correct === null ? "—" : r.correct ? "✓ Juste" : "✗ Fausse"}
                    {r.aided ? " · aidée (non comptée)" : ""}
                    {r.withdrawn ? " · question retirée (non comptée)" : ""}
                  </td>
                  <td className="small">{r.stem.slice(0, 90)}{r.stem.length > 90 ? "…" : ""}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
