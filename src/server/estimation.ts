// Comparaison des deux systèmes d'estimation (ADA-02) et choix de celui qui pilote la sélection, réversible.
import { eq, sql } from "drizzle-orm";
import type { DB } from "@/db";
import { appSettings, masterySnapshots, questionVersions, responses } from "@/db/schema";
import { difficultyFlag, ESTIMATION } from "@/lib/estimation";
import { MASTERY_WEIGHTS } from "@/lib/mastery";
import { assertRole, type Actor } from "./auth";
import { audit } from "./audit";
import { badRequest } from "./errors";

export type EstimationMode = "simple" | "probabilistic";

export async function getEstimationMode(db: DB): Promise<EstimationMode> {
  const row = await db.query.appSettings.findFirst({ where: eq(appSettings.key, "estimation_mode") });
  return row?.value === "probabilistic" ? "probabilistic" : "simple";
}

export async function setEstimationMode(db: DB, actorIn: Actor | null, mode: EstimationMode) {
  const actor = assertRole(actorIn, ["admin"]);
  if (mode !== "simple" && mode !== "probabilistic") throw badRequest("Mode inconnu.");
  const before = await getEstimationMode(db);
  await db
    .insert(appSettings)
    .values({ key: "estimation_mode", value: mode, updatedBy: actor.id, updatedAt: new Date() })
    .onConflictDoUpdate({ target: appSettings.key, set: { value: mode, updatedBy: actor.id, updatedAt: new Date() } });
  await audit(db, actor.id, "settings.estimation_mode", { type: "app_setting", id: "estimation_mode" }, { before, after: mode });
  return mode;
}

/** Score utilisé par la sélection adaptative selon le système actif. Inconnu = null. */
export function selectionScore(mode: EstimationMode, s: typeof masterySnapshots.$inferSelect): number | null {
  if (mode === "probabilistic") return s.probMean ?? null;
  return s.status === "insufficient" && s.autonomousAttempts < 3 ? null : s.score;
}

export async function estimationReport(db: DB, actorIn: Actor | null) {
  assertRole(actorIn, ["admin", "reviewer", "author"]);
  const snaps = await db.select().from(masterySnapshots);
  const both = snaps.filter((s) => s.probStatus && s.status !== "insufficient" && s.probStatus !== "insufficient");
  const agree = both.filter((s) => s.status === s.probStatus).length;
  const matrix: Record<string, Record<string, number>> = {};
  for (const s of snaps) {
    const p = s.probStatus ?? "absent";
    matrix[s.status] ??= {};
    matrix[s.status][p] = (matrix[s.status][p] ?? 0) + 1;
  }
  const stats = await db
    .select({
      id: questionVersions.id,
      questionId: questionVersions.questionId,
      version: questionVersions.version,
      difficulty: questionVersions.difficulty,
      n: sql<number>`count(${responses.id})::int`,
      ok: sql<number>`count(*) filter (where ${responses.isCorrect} and ${responses.hintsUsed} = 0)::int`,
      autonomous: sql<number>`count(*) filter (where ${responses.hintsUsed} = 0 and ${responses.isCorrect} is not null)::int`,
    })
    .from(questionVersions)
    .innerJoin(responses, eq(responses.questionVersionId, questionVersions.id))
    .where(eq(questionVersions.status, "published"))
    .groupBy(questionVersions.id);
  const flags = stats
    .map((q) => ({ ...q, rate: q.autonomous ? q.ok / q.autonomous : 0, flag: difficultyFlag(q.difficulty, q.autonomous ? q.ok / q.autonomous : 0, q.autonomous) }))
    .filter((q) => q.flag);
  return {
    mode: await getEstimationMode(db),
    versions: { simple: MASTERY_WEIGHTS.version, probabilistic: ESTIMATION.version },
    snapshots: snaps.length,
    comparable: both.length,
    agreement: both.length ? agree / both.length : null,
    matrix,
    questionsWithData: stats.filter((q) => q.autonomous >= 20).length,
    flags,
  };
}
