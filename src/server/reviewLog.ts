// Carnet d'erreurs consultable et corrigeable par l'élève (REV-01).
import { and, asc, eq } from "drizzle-orm";
import type { DB } from "@/db";
import { profiles, reviewItems, skills } from "@/db/schema";
import { needsLessonRedirect, pickDueReviews, type ErrorCause } from "@/lib/spaced";
import { assertRole, type Actor } from "./auth";
import { badRequest, notFound } from "./errors";
import { lessonsForSkills } from "./catalog";

export async function getReviewLog(db: DB, actorIn: Actor | null) {
  const actor = assertRole(actorIn, ["student"]);
  const items = await db.select().from(reviewItems).where(eq(reviewItems.userId, actor.id)).orderBy(asc(reviewItems.dueAt));
  const profile = await db.query.profiles.findFirst({ where: eq(profiles.userId, actor.id) });
  const allSkills = new Map((await db.select().from(skills)).map((s) => [s.id, s]));
  const lessons = await lessonsForSkills(db, [...new Set(items.map((i) => i.skillId))]);
  const due = pickDueReviews(items, new Date(), profile?.dailyReviewCap ?? 10);
  return {
    dueToday: due.today.length,
    backlog: due.backlog,
    items: items.map((i) => ({
      ...i,
      skillName: allSkills.get(i.skillId)?.name ?? i.skillId,
      subjectCode: allSkills.get(i.skillId)?.subjectCode ?? "",
      lessonId: lessons.get(i.skillId)?.lessonId ?? null,
      redirect: needsLessonRedirect(i),
    })),
  };
}

export async function updateReviewItem(db: DB, actorIn: Actor | null, id: string, patch: { cause?: ErrorCause; personalNote?: string }) {
  const actor = assertRole(actorIn, ["student"]);
  const item = await db.query.reviewItems.findFirst({ where: and(eq(reviewItems.id, id), eq(reviewItems.userId, actor.id)) });
  if (!item) throw notFound("Entrée du carnet");
  const set: Partial<typeof reviewItems.$inferInsert> = {};
  if (patch.cause) {
    if (!["knowledge", "reading", "time", "unknown"].includes(patch.cause)) throw badRequest("Cause inconnue.");
    set.cause = patch.cause;
    set.causeEditedByUser = true;
  }
  if (patch.personalNote !== undefined) set.personalNote = patch.personalNote.slice(0, 1000);
  await db.update(reviewItems).set(set).where(eq(reviewItems.id, id));
}
