// Mode 100 % hors ligne : toute la bibliothèque (cours, cartes, questions d'entraînement, dossiers) est copiée
// sur l'appareil de l'élève connecté. Les réponses faites sans réseau sont renvoyées par lots, sans doublon.
import { createHash } from "node:crypto";
import { and, eq, inArray, sql } from "drizzle-orm";
import type { DB } from "@/db";
import { attempts, documentSetVersions, lessonVersions, subjects, type DocumentItem, type LessonSection } from "@/db/schema";
import { assertRole, type Actor } from "./auth";
import { badRequest } from "./errors";
import { openSubjectCodes, type AttemptMeta } from "./attempts";
import { getProfile } from "./profile";
import { getPublishedConfig } from "./sessionConfig";
import { syncOffline, type OfflineAnswer, type OfflineQuestion, type SyncReport } from "./offline";
import { questionVersions } from "@/db/schema";

export type LibraryQuestion = OfflineQuestion & { skillIds: string[]; hints: string[]; timeSec: number; difficulty: number; documentSetId: string | null };
export type LibraryLesson = {
  lessonId: string;
  skillId: string;
  subjectCode: string;
  domain: string;
  skillName: string;
  title: string;
  objectives: string[];
  sections: LessonSection[];
  flashcards: { front: string; back: string; reversible: boolean }[];
};
export type OfflineLibrary = {
  version: string;
  generatedAt: string;
  subjects: { code: string; name: string }[];
  lessons: LibraryLesson[];
  questions: LibraryQuestion[];
  documentSets: { id: string; title: string; documents: DocumentItem[] }[];
  papers: { subject: string; label: string; questionCount: number; minutes: number }[];
  examDate: string;
};

/** Garde la version publiée la plus récente de chaque contenu. */
function latest<T extends { version: number }>(rows: T[], key: (r: T) => string) {
  const m = new Map<string, T>();
  for (const r of rows) {
    const prev = m.get(key(r));
    if (!prev || prev.version < r.version) m.set(key(r), r);
  }
  return [...m.values()];
}

export async function buildOfflineLibrary(db: DB, actorIn: Actor | null): Promise<OfflineLibrary> {
  const actor = assertRole(actorIn, ["student"]);
  const profile = await getProfile(db, actor);
  const allowed = await openSubjectCodes(db, profile.secondLanguage);
  const subjectRows = (await db.select().from(subjects).where(inArray(subjects.code, allowed))).sort((a, b) => a.position - b.position);
  const skillRows = await db.query.skills.findMany();
  const skill = new Map(skillRows.map((k) => [k.id, k]));

  const lessons = latest(await db.select().from(lessonVersions).where(eq(lessonVersions.status, "published")), (l) => l.lessonId)
    .filter((l) => allowed.includes(skill.get(l.skillId)?.subjectCode ?? ""))
    .sort((a, b) => (skill.get(a.skillId)?.position ?? 0) - (skill.get(b.skillId)?.position ?? 0))
    .map((l) => {
      const k = skill.get(l.skillId)!;
      return { lessonId: l.lessonId, skillId: l.skillId, subjectCode: k.subjectCode, domain: k.domain, skillName: k.name, title: l.title, objectives: l.objectives, sections: l.sections, flashcards: l.flashcards };
    });

  // Les questions réservées (diagnostic, concours blancs en ligne) ne quittent jamais le serveur.
  const qRows = latest(
    await db.select().from(questionVersions).where(and(eq(questionVersions.status, "published"), eq(questionVersions.reserved, false), inArray(questionVersions.subjectCode, allowed))),
    (q) => q.questionId,
  );
  const docIds = [...new Set(qRows.map((q) => q.documentSetVersionId).filter((x): x is string => !!x))];
  const docs = docIds.length ? await db.select().from(documentSetVersions).where(inArray(documentSetVersions.id, docIds)) : [];
  const questions: LibraryQuestion[] = qRows.map((q) => ({
    id: q.id,
    questionId: q.questionId,
    subjectCode: q.subjectCode,
    format: q.format,
    stem: q.stem,
    options: q.options.map((o) => ({ id: o.id, text: o.text, correct: o.correct, justification: o.justification })),
    numericAnswer: q.numericAnswer,
    numericTolerance: q.numericTolerance,
    explanation: q.explanation,
    rule: q.rule,
    lessonId: `L-${q.skillIds[0]}`,
    lessonAnchor: q.lessonAnchor,
    skillIds: q.skillIds,
    hints: q.hints,
    timeSec: q.timeSec,
    difficulty: q.difficulty,
    documentSetId: q.documentSetVersionId,
  }));

  const config = await getPublishedConfig(db, profile.examSessionCode);
  const body = {
    subjects: subjectRows.map((s) => ({ code: s.code, name: s.name })),
    lessons,
    questions,
    documentSets: docs.map((d) => ({ id: d.id, title: d.title, documents: d.documents })),
    papers: config.body.papers.map((p) => ({ subject: p.subject === "LV" ? (allowed.find((c) => c.startsWith("LV-")) ?? "LV") : p.subject, label: p.label, questionCount: p.questionCount, minutes: p.minutes })),
    examDate: config.body.examDate,
  };
  const version = createHash("sha256").update(JSON.stringify(body)).digest("hex").slice(0, 16);
  return { version, generatedAt: new Date().toISOString(), ...body };
}

/**
 * Réponses données dans la bibliothèque hors ligne. Chaque lot porte un identifiant choisi sur l'appareil :
 * renvoyer le même lot (réseau coupé pendant l'envoi) retrouve la même série au lieu d'en créer une seconde.
 */
export async function syncLibraryAnswers(db: DB, actorIn: Actor | null, batchId: string, answers: OfflineAnswer[]): Promise<SyncReport> {
  const actor = assertRole(actorIn, ["student"]);
  if (answers.length === 0 || answers.length > 50) throw badRequest("Lot de réponses invalide.");
  let a = await db.query.attempts.findFirst({ where: and(eq(attempts.userId, actor.id), sql`${attempts.meta}->>'batchId' = ${batchId}`) });
  if (!a) {
    const ids = [...new Set(answers.map((x) => x.questionVersionId))];
    const known = await db.select({ id: questionVersions.id }).from(questionVersions).where(inArray(questionVersions.id, ids));
    if (known.length === 0) throw badRequest("Questions inconnues.");
    [a] = await db
      .insert(attempts)
      .values({
        userId: actor.id,
        kind: "practice",
        questionVersionIds: known.map((k) => k.id),
        meta: { title: "Entraînement hors ligne", offline: true, batchId } as AttemptMeta & { batchId: string },
      })
      .returning();
  }
  return syncOffline(db, actor, a.id, answers, {}, true);
}
