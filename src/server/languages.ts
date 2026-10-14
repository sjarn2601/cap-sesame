// Langues (LAN-02) : exercices oraux, ouverture d'une langue seulement après un parcours de base complet.
import { and, eq, sql } from "drizzle-orm";
import type { DB } from "@/db";
import { languageExercises, lessonVersions, profiles, questionVersions, skills, subjects } from "@/db/schema";
import { assertRole, type Actor } from "./auth";
import { audit } from "./audit";
import { AppError, notFound } from "./errors";

export const BASE_PATH = { lessons: 2, questions: 10, listening: 1, readAloud: 1 } as const;

export async function listLanguageExercises(db: DB, actorIn: Actor | null) {
  const actor = assertRole(actorIn, ["student"]);
  const prof = await db.query.profiles.findFirst({ where: eq(profiles.userId, actor.id) });
  const codes = ["EN", `LV-${prof?.secondLanguage ?? ""}`];
  const subs = (await db.select().from(subjects)).filter((s) => codes.includes(s.code) && s.open);
  const rows = await db.select().from(languageExercises).where(eq(languageExercises.status, "published"));
  return subs.map((s) => ({ code: s.code, name: s.name, dir: s.textDirection, exercises: rows.filter((r) => r.subjectCode === s.code) }));
}

export async function languageReadiness(db: DB, actorIn: Actor | null) {
  assertRole(actorIn, ["admin", "reviewer", "author"]);
  const langs = (await db.select().from(subjects)).filter((s) => s.isLanguage);
  const out = [];
  for (const l of langs) {
    const [{ lessons }] = await db
      .select({ lessons: sql<number>`count(distinct ${lessonVersions.lessonId})::int` })
      .from(lessonVersions)
      .innerJoin(skills, eq(skills.id, lessonVersions.skillId))
      .where(and(eq(skills.subjectCode, l.code), eq(lessonVersions.status, "published")));
    const [{ questions }] = await db.select({ questions: sql<number>`count(*)::int` }).from(questionVersions).where(and(eq(questionVersions.subjectCode, l.code), eq(questionVersions.status, "published")));
    const ex = await db.select({ kind: languageExercises.kind }).from(languageExercises).where(and(eq(languageExercises.subjectCode, l.code), eq(languageExercises.status, "published")));
    const listening = ex.filter((e) => e.kind === "listening").length;
    const readAloud = ex.filter((e) => e.kind === "read_aloud").length;
    const missing = [
      lessons < BASE_PATH.lessons && `${BASE_PATH.lessons - lessons} cours`,
      questions < BASE_PATH.questions && `${BASE_PATH.questions - questions} questions`,
      listening < BASE_PATH.listening && "un exercice d'écoute",
      readAloud < BASE_PATH.readAloud && "un exercice de lecture à voix haute",
    ].filter(Boolean) as string[];
    out.push({ code: l.code, name: l.name, open: l.open, dir: l.textDirection, lessons, questions, listening, readAloud, ready: missing.length === 0, missing });
  }
  return out;
}

export async function setLanguageOpen(db: DB, actorIn: Actor | null, code: string, open: boolean) {
  const actor = assertRole(actorIn, ["admin"]);
  const r = (await languageReadiness(db, actor)).find((l) => l.code === code);
  if (!r) throw notFound("Langue");
  if (open && !r.ready) throw new AppError("language_not_ready", 409, `Parcours de base incomplet pour ${r.name} : il manque ${r.missing.join(", ")}.`);
  await db.update(subjects).set({ open }).where(eq(subjects.code, code));
  await audit(db, actor.id, open ? "language.opened" : "language.closed", { type: "subject", id: code });
  return r;
}
