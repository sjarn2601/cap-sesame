// Export et suppression des données (PRI-01, R08).
import { createHash } from "node:crypto";
import { eq, inArray } from "drizzle-orm";
import type { DB } from "@/db";
import { attempts, consentRecords, contentReports, deletionRequests, masterySnapshots, personalNotes, profiles, responses, reviewItems, scoreVersions, studyPlans, users, lessonViews, oralDossiers, oralSessions, aiUsage } from "@/db/schema";
import { verifyPassword } from "@/lib/password";
import { assertRole, type Actor } from "./auth";
import { AppError } from "./errors";
import { audit } from "./audit";

export async function exportData(db: DB, actorIn: Actor | null) {
  const actor = assertRole(actorIn, ["student"]);
  const u = await db.query.users.findFirst({ where: eq(users.id, actor.id) });
  const atts = await db.select().from(attempts).where(eq(attempts.userId, actor.id));
  const ids = atts.map((a) => a.id);
  return {
    format: "cap-sesame-export/1",
    exportedAt: new Date().toISOString(),
    account: { email: u!.email, createdAt: u!.createdAt, role: u!.role },
    profile: await db.query.profiles.findFirst({ where: eq(profiles.userId, actor.id) }),
    consents: await db.select().from(consentRecords).where(eq(consentRecords.userId, actor.id)),
    attempts: atts,
    responses: ids.length ? await db.select().from(responses).where(inArray(responses.attemptId, ids)) : [],
    scores: ids.length ? await db.select().from(scoreVersions).where(inArray(scoreVersions.attemptId, ids)) : [],
    mastery: await db.select().from(masterySnapshots).where(eq(masterySnapshots.userId, actor.id)),
    reviewLog: await db.select().from(reviewItems).where(eq(reviewItems.userId, actor.id)),
    plans: await db.select().from(studyPlans).where(eq(studyPlans.userId, actor.id)),
    notes: await db.select().from(personalNotes).where(eq(personalNotes.userId, actor.id)),
    lessonViews: await db.select().from(lessonViews).where(eq(lessonViews.userId, actor.id)),
    reports: await db.select().from(contentReports).where(eq(contentReports.userId, actor.id)),
    oralDossier: (await db.query.oralDossiers.findFirst({ where: eq(oralDossiers.userId, actor.id) }))?.entries ?? [],
    oralSimulations: await db.select().from(oralSessions).where(eq(oralSessions.userId, actor.id)),
    assistantUsage: await db.select({ day: aiUsage.day, mode: aiUsage.mode, outcome: aiUsage.outcome }).from(aiUsage).where(eq(aiUsage.userId, actor.id)),
  };
}

export function resultsCsv(data: Awaited<ReturnType<typeof exportData>>) {
  const header = "date;type;titre;points;max;repondues;total;version_score";
  const byAttempt = new Map(data.attempts.map((a) => [a.id, a]));
  const lines = data.scores.map((s) => {
    const a = byAttempt.get(s.attemptId)!;
    const title = String((a.meta as { title?: string }).title ?? a.kind).replace(/;/g, ",");
    return [a.startedAt.toISOString(), a.kind, title, s.points, s.maxPoints, s.answered, s.total, s.version].join(";");
  });
  return [header, ...lines].join("\n");
}

/** Suppression suivie jusqu'à clôture ; la trace de la demande survit sans donnée personnelle. */
export async function deleteAccount(db: DB, actorIn: Actor | null, password: string) {
  const actor = assertRole(actorIn, ["student"]);
  const u = await db.query.users.findFirst({ where: eq(users.id, actor.id) });
  if (!u || !(await verifyPassword(password, u.passwordHash))) throw new AppError("bad_credentials", 401, "Mot de passe incorrect.");
  const emailHash = createHash("sha256").update(u.email).digest("hex");
  const [req] = await db.insert(deletionRequests).values({ userId: u.id, emailHash, status: "received", steps: [{ step: "Demande reçue", at: new Date().toISOString() }] }).returning();
  await db.delete(users).where(eq(users.id, u.id)); // cascade : profil, tentatives, réponses, carnet, plans, notes
  const steps = [
    ...req.steps,
    { step: "Données applicatives supprimées", at: new Date().toISOString() },
    { step: "Sous-traitants : l'assistant IA ne reçoit ni nom ni e-mail et l'application ne conserve pas les échanges", at: new Date().toISOString() },
    { step: "Sauvegardes : expiration selon la durée documentée", at: new Date().toISOString() },
  ];
  await db.update(deletionRequests).set({ status: "closed", steps, closedAt: new Date() }).where(eq(deletionRequests.id, req.id));
  await audit(db, null, "account.deleted", { type: "deletion_request", id: req.id });
  return req.id;
}
