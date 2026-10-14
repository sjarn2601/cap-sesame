// Cours, fiches, recherche et signalements (COU-01).
import { and, desc, eq, inArray } from "drizzle-orm";
import type { DB } from "@/db";
import { contentReports, lessonVersions, lessonViews, newsItems, personalNotes, questionVersions, skills, subjects, profiles } from "@/db/schema";
import { normalize } from "@/lib/editorial";
import { assertRole, type Actor } from "./auth";
import { badRequest, notFound } from "./errors";
import { masteryMap } from "./learning";

type Lesson = typeof lessonVersions.$inferSelect;

async function latestPublishedLessons(db: DB) {
  const rows = await db.select().from(lessonVersions).where(eq(lessonVersions.status, "published"));
  const latest = new Map<string, Lesson>();
  for (const r of rows) if (!latest.has(r.lessonId) || latest.get(r.lessonId)!.version < r.version) latest.set(r.lessonId, r);
  return [...latest.values()];
}

export async function visibleSubjects(db: DB, secondLanguage: string | null) {
  const rows = await db.select().from(subjects).orderBy(subjects.position);
  return rows.filter((s) => !s.isLanguage || s.code === "EN" || !secondLanguage || s.code === `LV-${secondLanguage}`);
}

/** Catalogue : les filtres ne renvoient jamais une matière annoncée mais vide. */
export async function getCatalog(db: DB, actorIn: Actor | null) {
  const actor = assertRole(actorIn, ["student"]);
  const profile = await db.query.profiles.findFirst({ where: eq(profiles.userId, actor.id) });
  const subs = await visibleSubjects(db, profile?.secondLanguage ?? null);
  const allSkills = await db.select().from(skills).orderBy(skills.position);
  const lessons = await latestPublishedLessons(db);
  const lessonBySkill = new Map(lessons.map((l) => [l.skillId, l]));
  const qs = await db.select({ skillIds: questionVersions.skillIds }).from(questionVersions).where(eq(questionVersions.status, "published"));
  const qCount = new Map<string, number>();
  for (const q of qs) for (const s of q.skillIds) qCount.set(s, (qCount.get(s) ?? 0) + 1);
  const mastery = await masteryMap(db, actor.id);
  return subs
    .map((s) => ({
      ...s,
      skills: allSkills
        .filter((k) => k.subjectCode === s.code)
        .map((k) => ({ ...k, lesson: lessonBySkill.get(k.id) ? { lessonId: lessonBySkill.get(k.id)!.lessonId, title: lessonBySkill.get(k.id)!.title } : null, questionCount: qCount.get(k.id) ?? 0, mastery: mastery.get(k.id) ?? null }))
        .filter((k) => k.lesson || k.questionCount > 0),
    }))
    .filter((s) => s.open && s.skills.length > 0);
}

export async function searchCatalog(db: DB, query: string) {
  const q = normalize(query);
  if (q.length < 2) return [];
  const allSkills = await db.select().from(skills);
  const lessons = await latestPublishedLessons(db);
  const bySkill = new Map(lessons.map((l) => [l.skillId, l]));
  const terms = q.split(" ");
  return allSkills
    .map((s) => {
      const hay = normalize([s.name, s.domain, ...s.synonyms, bySkill.get(s.id)?.title ?? ""].join(" "));
      const hits = terms.filter((t) => hay.includes(t)).length;
      return { skill: s, lesson: bySkill.get(s.id) ?? null, hits };
    })
    .filter((r) => r.hits === terms.length && r.lesson)
    .slice(0, 20);
}

export async function getLesson(db: DB, actorIn: Actor | null, lessonId: string) {
  const actor = assertRole(actorIn, ["student"]);
  const versions = await db.select().from(lessonVersions).where(and(eq(lessonVersions.lessonId, lessonId), eq(lessonVersions.status, "published"))).orderBy(desc(lessonVersions.version));
  const lesson = versions[0];
  if (!lesson) throw notFound("Cours");
  const skill = await db.query.skills.findFirst({ where: eq(skills.id, lesson.skillId) });
  const view = await db.query.lessonViews.findFirst({ where: and(eq(lessonViews.userId, actor.id), eq(lessonViews.lessonId, lessonId)) });
  // Une nouvelle version ne remplace pas silencieusement ce que l'élève a déjà consulté.
  const updatedSinceView = view && view.version < lesson.version ? view.version : null;
  await db
    .insert(lessonViews)
    .values({ userId: actor.id, lessonId, lessonVersionId: lesson.id, version: lesson.version })
    .onConflictDoUpdate({ target: [lessonViews.userId, lessonViews.lessonId], set: { lessonVersionId: lesson.id, version: lesson.version, viewedAt: new Date() } });
  const notes = await db.select().from(personalNotes).where(and(eq(personalNotes.userId, actor.id), eq(personalNotes.lessonId, lessonId))).orderBy(desc(personalNotes.createdAt));
  const reviewers = lesson.reviewerId ? await db.query.users.findFirst({ where: (u, { eq }) => eq(u.id, lesson.reviewerId!) }) : null;
  const author = lesson.authorId ? await db.query.users.findFirst({ where: (u, { eq }) => eq(u.id, lesson.authorId!) }) : null;
  return { lesson, skill, notes, updatedSinceView, authorName: author?.displayName ?? "Équipe pédagogique", reviewerName: reviewers?.displayName ?? null };
}

export async function addNote(db: DB, actorIn: Actor | null, lessonId: string, body: string) {
  const actor = assertRole(actorIn, ["student"]);
  const text = body.trim();
  if (!text || text.length > 2000) throw badRequest("Note vide ou trop longue (2 000 caractères maximum).");
  await db.insert(personalNotes).values({ userId: actor.id, lessonId, body: text });
}

export async function deleteNote(db: DB, actorIn: Actor | null, noteId: string) {
  const actor = assertRole(actorIn, ["student"]);
  await db.delete(personalNotes).where(and(eq(personalNotes.id, noteId), eq(personalNotes.userId, actor.id)));
}

export async function reportContent(db: DB, actorIn: Actor | null, contentType: "question" | "lesson", contentVersionId: string, message: string) {
  const actor = assertRole(actorIn, ["student"]);
  const text = message.trim();
  if (text.length < 5 || text.length > 2000) throw badRequest("Décris le problème en quelques mots (5 à 2 000 caractères).");
  const table = contentType === "question" ? questionVersions : lessonVersions;
  const exists = await db.select({ id: table.id }).from(table).where(eq(table.id, contentVersionId)).limit(1);
  if (!exists.length) throw notFound("Contenu");
  await db.insert(contentReports).values({ userId: actor.id, contentType, contentVersionId, message: text });
}

export async function lessonsForSkills(db: DB, skillIds: string[]) {
  if (!skillIds.length) return new Map<string, Lesson>();
  const rows = (await latestPublishedLessons(db)).filter((l) => skillIds.includes(l.skillId));
  return new Map(rows.map((l) => [l.skillId, l]));
}

export async function skillsByIds(db: DB, ids: string[]) {
  if (!ids.length) return new Map<string, typeof skills.$inferSelect>();
  const rows = await db.select().from(skills).where(inArray(skills.id, ids));
  return new Map(rows.map((r) => [r.id, r]));
}

/** Veille datée (ACT-01) : la fenêtre est calculée depuis la date du concours de la session. */
export async function listNews(db: DB, actorIn: Actor | null) {
  const actor = assertRole(actorIn, ["student"]);
  const profile = await db.query.profiles.findFirst({ where: eq(profiles.userId, actor.id) });
  const { getPublishedConfig } = await import("./sessionConfig");
  const config = await getPublishedConfig(db, profile!.examSessionCode);
  const exam = new Date(`${config.body.examDate}T00:00:00Z`);
  const windowStart = new Date(exam);
  windowStart.setUTCMonth(windowStart.getUTCMonth() - config.body.newsWindowMonths);
  const rows = await db.select().from(newsItems).where(eq(newsItems.status, "published")).orderBy(desc(newsItems.eventDate));
  return {
    windowStart: windowStart.toISOString().slice(0, 10),
    examDate: config.body.examDate,
    items: rows.map((n) => ({ ...n, inWindow: n.eventDate >= windowStart.toISOString().slice(0, 10) })),
  };
}
