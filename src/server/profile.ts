// Profil, disponibilités et préférences (section 04, 14, 19).
import { eq } from "drizzle-orm";
import { z } from "zod";
import type { DB } from "@/db";
import { profiles, subjects } from "@/db/schema";
import { assertRole, type Actor } from "./auth";
import { badRequest, notFound } from "./errors";
import { listPublishedSessions } from "./sessionConfig";

const minutes = z.coerce.number().int().min(0).max(600);
export const profileSchema = z.object({
  schoolYear: z.string().max(40).optional().nullable(),
  availability: z.object({ mon: minutes, tue: minutes, wed: minutes, thu: minutes, fri: minutes, sat: minutes, sun: minutes }),
  rhythm: z.enum(["regular", "intensive"]),
  dailyReviewCap: z.coerce.number().int().min(0).max(50),
  difficulties: z.string().max(1000).optional().nullable(),
  targetPrograms: z.array(z.string().max(80)).max(10),
  timeExtensionFactor: z.coerce.number().min(1).max(2),
  notificationsEnabled: z.boolean(),
  quietHoursStart: z.coerce.number().int().min(0).max(23),
  quietHoursEnd: z.coerce.number().int().min(0).max(23),
  blockedPeriods: z.array(z.object({ from: z.string().regex(/^\d{4}-\d{2}-\d{2}$/), to: z.string().regex(/^\d{4}-\d{2}-\d{2}$/), label: z.string().max(80) })).max(20),
});

export async function getProfile(db: DB, actorIn: Actor | null) {
  const actor = assertRole(actorIn, ["student"]);
  const p = await db.query.profiles.findFirst({ where: eq(profiles.userId, actor.id) });
  if (!p) throw notFound("Profil");
  return p;
}

export async function updateProfile(db: DB, actorIn: Actor | null, input: unknown) {
  const actor = assertRole(actorIn, ["student"]);
  const parsed = profileSchema.safeParse(input);
  if (!parsed.success) throw badRequest("Certains champs sont invalides : " + parsed.error.issues.map((i) => i.path.join(".")).join(", "));
  for (const p of parsed.data.blockedPeriods) if (p.from > p.to) throw badRequest("Une période bloquée finit avant de commencer.");
  await db.update(profiles).set({ ...parsed.data, updatedAt: new Date() }).where(eq(profiles.userId, actor.id));
}

/** Changement de session ou de seconde langue : les anciens résultats sont conservés, sans mélange des mesures. */
export async function changeTarget(db: DB, actorIn: Actor | null, input: { examSessionCode?: string; secondLanguage?: string }) {
  const actor = assertRole(actorIn, ["student"]);
  const set: Partial<typeof profiles.$inferInsert> = { updatedAt: new Date() };
  if (input.examSessionCode) {
    const sessions = await listPublishedSessions(db);
    if (!sessions.some((s) => s.code === input.examSessionCode)) throw badRequest("Session inconnue.");
    set.examSessionCode = input.examSessionCode;
  }
  if (input.secondLanguage) {
    const subj = await db.query.subjects.findFirst({ where: eq(subjects.code, `LV-${input.secondLanguage}`) });
    if (!subj || !subj.open) throw badRequest("Cette langue n'est pas encore ouverte.");
    set.secondLanguage = input.secondLanguage;
  }
  await db.update(profiles).set(set).where(eq(profiles.userId, actor.id));
}

export async function deferDiagnostic(db: DB, actorIn: Actor | null) {
  const actor = assertRole(actorIn, ["student"]);
  const p = await getProfile(db, actor);
  await db.update(profiles).set({ diagnosticState: { ...p.diagnosticState, deferred: true } }).where(eq(profiles.userId, actor.id));
}
