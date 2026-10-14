// Actualité enrichie (ACT-02) : frise, zones, points de vue sourcés, quiz hebdomadaire,
// et invalidation automatique des questions liées quand un fait est corrigé.
import { and, eq, inArray, ne, sql } from "drizzle-orm";
import type { DB } from "@/db";
import { attempts, editorialEvents, newsItems, questionVersions } from "@/db/schema";
import { assertRole, type Actor } from "./auth";
import { audit } from "./audit";
import { AppError, badRequest, notFound } from "./errors";
import type { AttemptMeta } from "./attempts";

const STAFF = ["author", "reviewer", "admin"] as const;
export const newsRef = (slug: string) => `news:${slug}`;

export type NewsCorrection = { summary?: string; eventDate?: string; whyItMatters?: string; claims?: (typeof newsItems.$inferSelect)["claims"] };

/** Questions publiées qui citent la fiche ; elles sont suspendues dès qu'un fait est corrigé. */
async function linkedQuestions(db: DB, slug: string, statuses: string[] = ["published"]) {
  return db
    .select()
    .from(questionVersions)
    .where(and(sql`${questionVersions.references} @> ${JSON.stringify([newsRef(slug)])}::jsonb`, inArray(questionVersions.status, statuses as ("published")[])));
}

export async function correctNewsFact(db: DB, actorIn: Actor | null, newsId: string, patch: NewsCorrection, reason: string) {
  const actor = assertRole(actorIn, [...STAFF]);
  if (!reason?.trim()) throw badRequest("Indique ce qui a changé et la source qui le confirme.");
  const n = await db.query.newsItems.findFirst({ where: eq(newsItems.id, newsId) });
  if (!n) throw notFound("Fiche d'actualité");
  if (n.status !== "published") throw new AppError("not_published", 409, "Seule une fiche publiée peut être corrigée ainsi ; modifie directement le brouillon.");
  if (patch.eventDate && !/^\d{4}-\d{2}-\d{2}$/.test(patch.eventDate)) throw badRequest("Date invalide.");
  return db.transaction(async (tx) => {
    const { id: _id, createdAt: _c, publishedAt: _p, reviewerId: _r, ...rest } = n;
    const [draft] = await tx
      .insert(newsItems)
      .values({ ...rest, ...Object.fromEntries(Object.entries(patch).filter(([, v]) => v !== undefined)), version: n.version + 1, status: "draft", authorId: actor.id, reviewerId: null, publishedAt: null })
      .returning();
    // L'information corrigée n'est plus servie pendant la relecture.
    await tx.update(newsItems).set({ status: "suspended" }).where(eq(newsItems.id, n.id));
    await tx.insert(editorialEvents).values({ contentType: "news", contentVersionId: n.id, fromStatus: "published", toStatus: "suspended", actorId: actor.id, reason: `Correction factuelle : ${reason}` });
    const linked = n.slug ? await linkedQuestions(tx as unknown as DB, n.slug) : [];
    for (const q of linked) {
      await tx.update(questionVersions).set({ status: "suspended" }).where(eq(questionVersions.id, q.id));
      await tx.insert(editorialEvents).values({ contentType: "question", contentVersionId: q.id, fromStatus: "published", toStatus: "suspended", actorId: actor.id, reason: `Fiche d'actualité « ${n.title} » corrigée : relecture nécessaire` });
    }
    await audit(tx as unknown as DB, actor.id, "news.fact_corrected", { type: "news", id: n.id }, { draftId: draft.id, suspendedQuestions: linked.map((q) => q.questionId), reason });
    return { draft, suspendedQuestions: linked.map((q) => ({ id: q.id, questionId: q.questionId })) };
  });
}

/** À la publication d'une nouvelle version, les versions précédentes de la même fiche sont retirées. */
export async function retireOtherNewsVersions(db: DB, actorId: string, published: typeof newsItems.$inferSelect) {
  if (!published.slug) return;
  const others = await db
    .select()
    .from(newsItems)
    .where(and(eq(newsItems.slug, published.slug), ne(newsItems.id, published.id), inArray(newsItems.status, ["published", "suspended"])));
  for (const o of others) {
    await db.update(newsItems).set({ status: "retired" }).where(eq(newsItems.id, o.id));
    await db.insert(editorialEvents).values({ contentType: "news", contentVersionId: o.id, fromStatus: o.status, toStatus: "retired", actorId, reason: `Remplacée par la version ${published.version}` });
  }
}

/** Quiz d'actualité : d'abord les questions liées aux fiches publiées, puis d'autres questions d'enjeux contemporains. */
export async function createWeeklyQuiz(db: DB, actorIn: Actor | null, size = 5) {
  const actor = assertRole(actorIn, ["student"]);
  const published = await db.select({ slug: newsItems.slug, title: newsItems.title }).from(newsItems).where(eq(newsItems.status, "published"));
  const refs = published.filter((p) => p.slug).map((p) => newsRef(p.slug!));
  const pool = await db
    .select()
    .from(questionVersions)
    .where(and(eq(questionVersions.subjectCode, "ACT"), eq(questionVersions.status, "published"), eq(questionVersions.reserved, false)));
  const linked = pool.filter((q) => q.references.some((r) => refs.includes(r)));
  const others = pool.filter((q) => !linked.includes(q)).sort(() => Math.random() - 0.5);
  const chosen = [...linked, ...others].slice(0, size);
  if (chosen.length === 0) throw new AppError("no_content", 404, "Pas encore de question d'actualité publiée.");
  const titleBySlug = new Map(published.map((p) => [newsRef(p.slug ?? ""), p.title]));
  const reasons = Object.fromEntries(
    chosen.map((q) => {
      const ref = q.references.find((r) => titleBySlug.has(r));
      return [q.id, ref ? `liée à la fiche « ${titleBySlug.get(ref)} »` : "enjeux contemporains"];
    }),
  );
  const [a] = await db
    .insert(attempts)
    .values({ userId: actor.id, kind: "practice", subjectCode: "ACT", questionVersionIds: chosen.map((q) => q.id), meta: { reasons, title: "Quiz d'actualité de la semaine" } satisfies AttemptMeta })
    .returning();
  return a;
}
