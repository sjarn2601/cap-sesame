import { KIND_LABELS } from "@/server/progress";
import Link from "next/link";
import { getDb } from "@/db";
import { adminDashboard } from "@/server/editorialAdmin";
import { requireStaff } from "@/server/next";
import { STATUS_LABELS, type ContentStatus } from "@/lib/editorial";
import { frDateTime } from "@/components/labels";
import { aiConfig, usageSummary } from "@/server/assistant";
import { languageReadiness } from "@/server/languages";
import { AdminForm, AdminSubmit } from "@/components/AdminForm";
import { languageOpenAction } from "@/app/actions/admin";

export const metadata = { title: "Administration" };
export const dynamic = "force-dynamic";

export default async function Page() {
  const actor = await requireStaff();
  const d = await adminDashboard(getDb(), actor);
  const ai = await usageSummary(getDb(), 7);
  const langs = await languageReadiness(getDb(), actor);
  const aiCfg = aiConfig();
  const aiTotal = ai.reduce((t, r) => t + r.n, 0);
  const aiFallbacks = ai.filter((r) => r.outcome !== "ai").reduce((t, r) => t + r.n, 0);
  const aiCost = ai.reduce((t, r) => t + r.cost, 0) / 1_000_000;
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

      <section className="card flat stack">
        <h2>Langues</h2>
        <p className="small muted">Une langue s&apos;ouvre aux élèves seulement après un parcours de base complet (2 cours, 10 questions, une écoute et une lecture à voix haute publiées).</p>
        <div className="table-wrap">
          <table className="data">
            <thead><tr><th>Langue</th><th>Cours</th><th>Questions</th><th>Oral</th><th>État</th><th></th></tr></thead>
            <tbody>
              {langs.map((l) => (
                <tr key={l.code}>
                  <td>{l.name}{l.dir === "rtl" ? " (droite à gauche)" : ""}</td>
                  <td>{l.lessons}</td>
                  <td>{l.questions}</td>
                  <td>{l.listening} écoute(s), {l.readAloud} lecture(s)</td>
                  <td>{l.open ? <span className="badge ok">Ouverte</span> : l.ready ? <span className="badge">Prête</span> : <span className="badge warn">Manque : {l.missing.join(", ")}</span>}</td>
                  <td>
                    {actor.role === "admin" && (l.open || l.ready) && (
                      <AdminForm action={languageOpenAction}>
                        <input type="hidden" name="code" value={l.code} />
                        <input type="hidden" name="open" value={l.open ? "0" : "1"} />
                        <AdminSubmit className="btn small">{l.open ? "Fermer" : "Ouvrir"}</AdminSubmit>
                      </AdminForm>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="card flat">
        <h2>Assistant IA (7 derniers jours)</h2>
        <p>
          {process.env.ANTHROPIC_API_KEY ? "Activé" : "Non activé (aide éditoriale seulement)"} · {aiTotal} demande(s), dont {aiFallbacks} servie(s) par l&apos;aide éditoriale · coût {aiCost.toFixed(2)} $
        </p>
        <p className="small muted">Limites : {aiCfg.dailyRequests} demandes par élève et par jour, budget {aiCfg.dailyBudgetUsd} $ par jour, délai {aiCfg.timeoutMs / 1000} s. Le contenu des échanges n&apos;est pas conservé.</p>
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
