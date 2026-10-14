// Projection pondérée par programme (RES-02). Ni note officielle ni probabilité d'admission :
// seulement si des coefficients vérifiés sont publiés, avec les composantes disponibles et manquantes.
import { and, desc, eq, gte, inArray } from "drizzle-orm";
import type { DB } from "@/db";
import { attempts, profiles, scoreVersions } from "@/db/schema";
import { assertRole, type Actor } from "./auth";
import { getPublishedConfig } from "./sessionConfig";
import { toTwenty } from "@/lib/scoring";

export const EXTRA_COMPONENTS: Record<string, string> = { DOSSIER: "Dossier", ORAL: "Oral" };
export const MIN_COHORT = 30;

type SectionScore = { subject: string; points: number; maxPoints: number; label?: string };
const paperKey = (subject: string) => (subject.startsWith("LV-") ? "LV" : subject);

/** Dernier score de concours blanc strict par épreuve (sur 20), toutes simulations confondues. */
async function latestStrictScores(db: DB, userId: string) {
  const rows = await db
    .select({ a: attempts, s: scoreVersions })
    .from(attempts)
    .innerJoin(scoreVersions, eq(scoreVersions.attemptId, attempts.id))
    .where(and(eq(attempts.userId, userId), eq(attempts.kind, "exam_strict"), inArray(attempts.status, ["finalized", "expired"])))
    .orderBy(desc(attempts.startedAt), desc(scoreVersions.version));
  const seenAttempt = new Set<string>();
  const out = new Map<string, { score20: number; date: string }>();
  for (const { a, s } of rows) {
    if (seenAttempt.has(a.id)) continue; // dernière version de score seulement
    seenAttempt.add(a.id);
    for (const sec of ((s.details as { bySection?: SectionScore[] }).bySection ?? [])) {
      const k = paperKey(sec.subject);
      if (!out.has(k) && sec.maxPoints > 0) out.set(k, { score20: toTwenty(sec.points, sec.maxPoints), date: a.startedAt.toISOString().slice(0, 10) });
    }
  }
  return out;
}

export async function getProjection(db: DB, actorIn: Actor | null, program?: string | null) {
  const actor = assertRole(actorIn, ["student"]);
  const prof = await db.query.profiles.findFirst({ where: eq(profiles.userId, actor.id) });
  const config = await getPublishedConfig(db, prof!.examSessionCode);
  const programs = Object.entries(config.body.coefficients ?? {})
    .filter(([, v]) => v && Object.keys(v).length > 0)
    .map(([k]) => k);
  const scores = await latestStrictScores(db, actor.id);
  const papers = config.body.papers.map((p) => ({ key: p.subject, label: p.label }));
  const base = { programs, verifiedAt: config.verifiedAt, sessionCode: config.code, configVersion: config.version };
  const chosen = program && programs.includes(program) ? program : programs[0] ?? null;
  if (!chosen) {
    return {
      ...base,
      program: null,
      available: false as const,
      reason: "Les coefficients par programme ne sont pas publiés ou pas encore vérifiés pour cette session : aucune projection n'est calculée.",
      components: [...papers.map((p) => ({ key: p.key, label: p.label, score20: scores.get(p.key)?.score20 ?? null, date: scores.get(p.key)?.date ?? null, weight: null })), ...Object.entries(EXTRA_COMPONENTS).map(([key, label]) => ({ key, label, score20: null, date: null, weight: null }))],
    };
  }
  const coefs = config.body.coefficients[chosen]!;
  const components = Object.entries(coefs).map(([key, weight]) => {
    const label = papers.find((p) => p.key === key)?.label ?? EXTRA_COMPONENTS[key] ?? key;
    const s = scores.get(key);
    return { key, label, weight, score20: s?.score20 ?? null, date: s?.date ?? null };
  });
  const totalWeight = components.reduce((t, c) => t + c.weight, 0);
  const have = components.filter((c) => c.score20 !== null);
  const haveWeight = have.reduce((t, c) => t + c.weight, 0);
  const partial = haveWeight ? Math.round((have.reduce((t, c) => t + c.score20! * c.weight, 0) / haveWeight) * 10) / 10 : null;
  return {
    ...base,
    program: chosen,
    available: true as const,
    reason: null,
    components,
    coverage: totalWeight ? haveWeight / totalWeight : 0,
    partial,
    missing: components.filter((c) => c.score20 === null).map((c) => c.label),
  };
}

/** Rang relatif sur le dernier concours blanc complet : seulement pour un groupe défini, assez large et comparable. */
export async function cohortPercentile(db: DB, actorIn: Actor | null, days = 60) {
  const actor = assertRole(actorIn, ["student"]);
  const prof = await db.query.profiles.findFirst({ where: eq(profiles.userId, actor.id) });
  const since = new Date(Date.now() - days * 86_400_000);
  const rows = await db
    .select({ a: attempts, s: scoreVersions, session: profiles.examSessionCode })
    .from(attempts)
    .innerJoin(scoreVersions, eq(scoreVersions.attemptId, attempts.id))
    .innerJoin(profiles, eq(profiles.userId, attempts.userId))
    .where(and(eq(attempts.kind, "exam_strict"), inArray(attempts.status, ["finalized", "expired"]), gte(attempts.startedAt, since)))
    .orderBy(desc(attempts.startedAt), desc(scoreVersions.version));
  // Groupe comparable : même session, concours blanc complet, même version de configuration, sans aménagement simulé.
  const mine = rows.find((r) => r.a.userId === actor.id && r.a.subjectCode === null);
  if (!mine) return { shown: false as const, reason: "Fais un concours blanc complet en mode strict pour te situer.", n: 0 };
  const best = new Map<string, number>();
  const seen = new Set<string>();
  for (const r of rows) {
    if (seen.has(r.a.id)) continue;
    seen.add(r.a.id);
    const m = r.a.meta as { extensionFactor?: number };
    if (r.a.subjectCode !== null || r.session !== prof!.examSessionCode || r.a.sessionConfigId !== mine.a.sessionConfigId || (m.extensionFactor ?? 1) !== 1) continue;
    if (!best.has(r.a.userId) && r.s.maxPoints > 0) best.set(r.a.userId, r.s.points / r.s.maxPoints);
  }
  const n = best.size;
  const period = `${since.toISOString().slice(0, 10)} → ${new Date().toISOString().slice(0, 10)}`;
  if (n < MIN_COHORT) return { shown: false as const, reason: `Groupe trop petit pour un rang fiable (${n} élève(s), il en faut au moins ${MIN_COHORT}).`, n, period };
  const me = best.get(actor.id) ?? 0;
  const below = [...best.values()].filter((v) => v < me).length;
  return {
    shown: true as const,
    percentile: Math.round((below / n) * 100),
    n,
    period,
    bias: "Groupe limité aux utilisateurs de CAP SESAME ayant fait un concours blanc complet strict : ils ne représentent pas l'ensemble des candidats.",
  };
}

/** Bilan hebdomadaire au format texte, à partager volontairement. */
export function weeklyText(w: { progressing: string[]; blocking: string[]; next: string[]; answeredThisWeek: number }) {
  const list = (xs: string[], empty: string) => (xs.length ? xs.map((x) => `- ${x}`).join("\n") : `- ${empty}`);
  return [
    `# Mon bilan de la semaine (CAP SESAME, ${new Date().toLocaleDateString("fr-FR")})`,
    "",
    `${w.answeredThisWeek} réponse(s) cette semaine.`,
    "",
    "## Ce qui progresse",
    list(w.progressing, "Pas encore assez de données pour comparer deux semaines."),
    "",
    "## Ce qui bloque",
    list(w.blocking, "Rien de bloquant repéré."),
    "",
    "## Ce qu'il faut faire ensuite",
    list(w.next, "Le plan est à jour."),
    "",
  ].join("\n");
}
