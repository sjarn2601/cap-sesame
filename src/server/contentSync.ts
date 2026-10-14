// Synchronisation du catalogue livré avec le code : à chaque déploiement, les cours, dossiers,
// fiches et questions nouveaux ou modifiés sont publiés comme nouvelle version ; l'ancienne
// version publiée est retirée. Les contenus créés depuis l'espace d'administration ne sont pas touchés.
import { and, desc, eq } from "drizzle-orm";
import type { DB } from "@/db";
import * as s from "@/db/schema";
import { qualityChecks } from "@/lib/editorial";
import { SUBJECTS, lessonSections } from "@/content/demo-catalog";
import { ALL_DOCUMENT_SETS, ALL_LANGUAGE_EXERCISES, ALL_LESSONS, ALL_NEWS, ALL_QUESTIONS, ALL_SKILLS } from "@/content/bank";

export type SyncReport = { lessons: number; questions: number; documentSets: number; news: number; exercises: number; retired: number };

type Editors = { authorId: string; reviewerId: string };

// Comparaison insensible à l'ordre des clés (jsonb le réordonne) et à la précision des réels stockés.
function canon(v: unknown): unknown {
  if (Array.isArray(v)) return v.map(canon);
  if (typeof v === "number") return Number(v.toPrecision(6));
  if (v && typeof v === "object") return Object.fromEntries(Object.keys(v).sort().map((k) => [k, canon((v as Record<string, unknown>)[k])]));
  return v ?? null;
}
const same = (a: unknown, b: unknown) => JSON.stringify(canon(a)) === JSON.stringify(canon(b));

function pick<T extends Record<string, unknown>>(row: T, keys: string[]) {
  return Object.fromEntries(keys.map((k) => [k, row[k] ?? null]));
}

export async function syncContent(db: DB, editors: Editors): Promise<SyncReport> {
  const report: SyncReport = { lessons: 0, questions: 0, documentSets: 0, news: 0, exercises: 0, retired: 0 };
  const now = new Date();
  const published = (isDemo: boolean) => ({ status: "published" as const, authorId: editors.authorId, reviewerId: editors.reviewerId, rightsCleared: true, isDemo, origin: "human" as const, publishedAt: now });

  async function retire(contentType: string, table: typeof s.lessonVersions | typeof s.questionVersions | typeof s.documentSetVersions | typeof s.newsItems | typeof s.languageExercises, id: string) {
    await db.update(table).set({ status: "retired" }).where(eq(table.id, id));
    await db.insert(s.editorialEvents).values({ contentType, contentVersionId: id, fromStatus: "published", toStatus: "retired", actorId: editors.reviewerId, reason: "Remplacé par une nouvelle version du catalogue." });
    report.retired++;
  }

  // Matières et compétences : simples référentiels, mis à jour sur place.
  const subjects = await db.select().from(s.subjects);
  for (const x of SUBJECTS) {
    if (!subjects.some((r) => r.code === x.code)) await db.insert(s.subjects).values({ ...x, textDirection: (x as { textDirection?: string }).textDirection ?? "ltr" });
  }
  // Une langue que le catalogue ouvre (désormais pourvue d'un parcours complet) est ouverte une fois ;
  // l'audit garde la trace, et l'administration peut la refermer ensuite.
  for (const x of SUBJECTS.filter((x) => x.isLanguage && x.open)) {
    const cur = subjects.find((r) => r.code === x.code);
    if (!cur || cur.open) continue;
    const opened = await db.select().from(s.auditEvents).where(and(eq(s.auditEvents.action, "catalog.language_opened"), eq(s.auditEvents.targetId, x.code))).limit(1);
    if (opened.length) continue;
    await db.update(s.subjects).set({ open: true }).where(eq(s.subjects.code, x.code));
    await db.insert(s.auditEvents).values({ actorId: editors.reviewerId, action: "catalog.language_opened", targetType: "subject", targetId: x.code });
  }
  const skills = await db.select().from(s.skills);
  for (const [i, k] of ALL_SKILLS.entries()) {
    const row = { subjectCode: k.subjectCode, domain: k.domain, name: k.name, synonyms: k.synonyms, position: i };
    const cur = skills.find((r) => r.id === k.id);
    if (!cur) await db.insert(s.skills).values({ id: k.id, ...row });
    else if (!same(pick(cur, Object.keys(row)), row)) await db.update(s.skills).set(row).where(eq(s.skills.id, k.id));
  }

  // Cours.
  for (const l of ALL_LESSONS) {
    const lessonId = `L-${l.skillId}`;
    const body = { skillId: l.skillId, title: l.title, objectives: l.objectives, prerequisites: l.prerequisites ?? [], sections: lessonSections(l), flashcards: l.cards.map(([front, back, reversible]) => ({ front, back, reversible })) };
    const [last] = await db.select().from(s.lessonVersions).where(eq(s.lessonVersions.lessonId, lessonId)).orderBy(desc(s.lessonVersions.version)).limit(1);
    if (last && same(pick(last, Object.keys(body)), body) && last.isDemo === l.isDemo) continue;
    const [row] = await db.insert(s.lessonVersions).values({ lessonId, ...body, version: (last?.version ?? 0) + 1, ...published(l.isDemo) }).returning();
    for (const old of await db.select().from(s.lessonVersions).where(and(eq(s.lessonVersions.lessonId, lessonId), eq(s.lessonVersions.status, "published")))) {
      if (old.id !== row.id) await retire("lesson", s.lessonVersions, old.id);
    }
    report.lessons++;
  }

  // Dossiers documentaires.
  const docVersion = new Map<string, string>();
  for (const d of ALL_DOCUMENT_SETS) {
    const [last] = await db.select().from(s.documentSetVersions).where(eq(s.documentSetVersions.documentSetId, d.id)).orderBy(desc(s.documentSetVersions.version)).limit(1);
    if (last && last.status === "published" && last.title === d.title && same(last.documents, d.documents)) {
      docVersion.set(d.id, last.id);
      continue;
    }
    const [row] = await db.insert(s.documentSetVersions).values({ documentSetId: d.id, title: d.title, documents: d.documents, version: (last?.version ?? 0) + 1, ...published(d.isDemo) }).returning();
    for (const old of await db.select().from(s.documentSetVersions).where(and(eq(s.documentSetVersions.documentSetId, d.id), eq(s.documentSetVersions.status, "published")))) {
      if (old.id !== row.id) await retire("document_set", s.documentSetVersions, old.id);
    }
    docVersion.set(d.id, row.id);
    report.documentSets++;
  }

  // Fiches d'actualité, identifiées par leur slug.
  for (const n of ALL_NEWS) {
    const { isDemo, viewpoints, ...rest } = n;
    const body = { ...rest, viewpoints: viewpoints ?? [] };
    const [last] = await db.select().from(s.newsItems).where(eq(s.newsItems.slug, n.slug)).orderBy(desc(s.newsItems.version)).limit(1);
    // Une fiche corrigée depuis l'administration n'est pas écrasée par le catalogue.
    if (last && (last.version > 1 && last.authorId !== editors.authorId)) continue;
    if (last && same(pick(last, Object.keys(body)), body)) continue;
    const [row] = await db.insert(s.newsItems).values({ ...body, lastVerifiedAt: now.toISOString().slice(0, 10), version: (last?.version ?? 0) + 1, ...published(isDemo) }).returning();
    for (const old of await db.select().from(s.newsItems).where(and(eq(s.newsItems.slug, n.slug), eq(s.newsItems.status, "published")))) {
      if (old.id !== row.id) await retire("news", s.newsItems, old.id);
    }
    report.news++;
  }

  // Exercices oraux de langue.
  for (const x of ALL_LANGUAGE_EXERCISES) {
    const { isDemo, ...rest } = x;
    const body = { ...rest, level: x.level, transcriptByDefault: x.transcriptByDefault ?? false, question: x.question ?? null, options: x.options ?? [], prompts: x.prompts ?? [], modelAnswer: x.modelAnswer ?? null };
    const [last] = await db.select().from(s.languageExercises).where(eq(s.languageExercises.exerciseId, x.exerciseId)).orderBy(desc(s.languageExercises.version)).limit(1);
    if (last && (last.status !== "published" || same(pick(last, Object.keys(body)), body))) continue;
    const [row] = await db.insert(s.languageExercises).values({ ...body, version: (last?.version ?? 0) + 1, ...published(isDemo) }).returning();
    if (last) await retire("language_exercise", s.languageExercises, last.id);
    void row;
    report.exercises++;
  }

  // Questions.
  const stems: { questionId: string; stem: string }[] = [];
  const KEYS = ["subjectCode", "skillIds", "familyId", "difficulty", "format", "stem", "options", "numericAnswer", "numericTolerance", "explanation", "rule", "hints", "timeSec", "references", "lessonAnchor", "reserved", "documentSetVersionId"];
  for (const q of ALL_QUESTIONS) {
    const { documentSet, isDemo, ...rest } = q;
    const issues = qualityChecks({ ...rest, numericAnswer: q.numericAnswer ?? null }, stems).filter((i) => i.blocking);
    if (issues.length) throw new Error(`${q.questionId} : ${issues.map((i) => i.message).join(", ")}`);
    stems.push({ questionId: q.questionId, stem: q.stem });
    const body = { ...rest, numericAnswer: q.numericAnswer ?? null, numericTolerance: q.numericTolerance ?? null, reserved: q.reserved ?? false, documentSetVersionId: documentSet ? docVersion.get(documentSet)! : null };
    const [last] = await db.select().from(s.questionVersions).where(eq(s.questionVersions.questionId, q.questionId)).orderBy(desc(s.questionVersions.version)).limit(1);
    // Une question suspendue ou retirée depuis l'administration n'est pas republiée d'office.
    if (last && last.status !== "published") continue;
    if (last && same(pick(last, KEYS), pick(body, KEYS))) continue;
    const [row] = await db.insert(s.questionVersions).values({ ...body, version: (last?.version ?? 0) + 1, ...published(isDemo) }).returning();
    if (last) await retire("question", s.questionVersions, last.id);
    await db.insert(s.editorialEvents).values([
      { contentType: "question", contentVersionId: row.id, fromStatus: "draft", toStatus: "in_review", actorId: editors.authorId },
      { contentType: "question", contentVersionId: row.id, fromStatus: "in_review", toStatus: "format_check", actorId: editors.reviewerId },
      { contentType: "question", contentVersionId: row.id, fromStatus: "format_check", toStatus: "validated", actorId: editors.reviewerId },
      { contentType: "question", contentVersionId: row.id, fromStatus: "validated", toStatus: "published", actorId: editors.reviewerId },
    ]);
    report.questions++;
  }
  return report;
}
