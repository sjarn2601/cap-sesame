import { KIND_LABELS } from "@/server/progress";
import Link from "next/link";
import { getDb } from "@/db";
import { adminDashboard } from "@/server/editorialAdmin";
import { requireStaff } from "@/server/next";
import { STATUS_LABELS, type ContentStatus } from "@/lib/editorial";
import { frDateTime } from "@/components/labels";

export const metadata = { title: "Administration" };
export const dynamic = "force-dynamic";

export default async function Page() {
  const actor = await requireStaff();
  const d = await adminDashboard(getDb(), actor);
  const pending = (d.statusCounts.draft ?? 0) + (d.statusCounts.in_review ?? 0) + (d.statusCounts.format_check ?? 0) + (d.statusCounts.validated ?? 0);
  return (
    <div className="stack">
      <h1>Tableau de bord</h1>
      <div className="stat-grid">
        <div className="stat"><div className="label">Contenus en attente</div><div className="value">{pending}</div><Link className="small" href="/admin/questions?statut=in_review">Relire</Link></div>
        <div className="stat"><div className="label">Signalements ouverts</div><div className="value">{d.openReports}</div><Link className="small" href="/admin/signalements">Traiter</Link></div>
        <div className="stat"><div className="label">Élèves inscrits</div><div className="value">{d.students}</div></div>
        <div className="stat"><div className="label">Actifs sur 7 jours</div><div className="value">{d.activeStudents}</div></div>
        <div className="stat"><div className="label">Taux de signalement</div><div className="value">{(d.reportRate * 100).toFixed(1)} %</div><div className="small muted">par question publiée</div></div>
        <div className="stat"><div className="label">Actualités à revérifier</div><div className="value">{d.staleNews.length}</div><div className="small muted">vérifiées il y a plus de 30 jours</div></div>
      </div>

      <section className="card flat">
        <h2>Questions par statut</h2>
        <div className="row">
          {(Object.keys(STATUS_LABELS) as ContentStatus[]).map((s) => (
            <Link key={s} className="badge" href={`/admin/questions?statut=${s}`}>{STATUS_LABELS[s]} : {d.statusCounts[s] ?? 0}</Link>
          ))}
        </div>
      </section>

      <section className="card flat">
        <h2>Couverture par matière</h2>
        <p className="small muted">Compétence couverte = cours publié et au moins 3 questions publiées. Le taux de réussite d&apos;une question ne suffit pas à juger sa qualité.</p>
        <div className="table-wrap">
          <table className="data">
            <thead><tr><th>Matière</th><th>Ouverte</th><th>Compétences couvertes</th><th>Questions publiées</th></tr></thead>
            <tbody>
              {d.coverage.map((c) => (
                <tr key={c.code}>
                  <td>{c.name}</td>
                  <td>{c.open ? "Oui" : "Non"}</td>
                  <td>{c.skills ? `${c.covered} / ${c.skills}` : "Aucune compétence"}{c.open && c.covered < c.skills ? " ⚠" : ""}</td>
                  <td>{c.questions}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="card flat">
        <h2>Séances des 7 derniers jours</h2>
        <p>{Object.entries(d.attempts7).map(([k, n]) => `${KIND_LABELS[k] ?? k} : ${n}`).join(" · ") || "Aucune."}</p>
      </section>

      <section className="card flat">
        <h2>Journal des actions sensibles</h2>
        <ul className="list-plain small">
          {d.recentAudit.map((a) => (
            <li key={a.id}>{frDateTime(a.createdAt)} · <code>{a.action}</code> {a.targetType ? `· ${a.targetType}` : ""}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}
