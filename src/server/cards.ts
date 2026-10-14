// Cartes personnelles et export de fiches (REV-02).
import { and, asc, eq, lte } from "drizzle-orm";
import type { DB } from "@/db";
import { personalCards, reviewItems, skills, subjects } from "@/db/schema";
import { addDays, CAUSE_LABELS, REVIEW_INTERVALS_DAYS, type ErrorCause } from "@/lib/spaced";
import { assertRole, type Actor } from "./auth";
import { AppError, badRequest, notFound } from "./errors";

export const MAX_CARDS = 500;
const student = (a: Actor | null) => assertRole(a, ["student"]);

export async function listCards(db: DB, actorIn: Actor | null) {
  const actor = student(actorIn);
  const cards = await db.select().from(personalCards).where(eq(personalCards.userId, actor.id)).orderBy(asc(personalCards.dueAt));
  const now = new Date();
  return { cards, due: cards.filter((c) => c.dueAt <= now) };
}

export async function createCard(db: DB, actorIn: Actor | null, input: { front: string; back: string; subjectCode?: string | null }) {
  const actor = student(actorIn);
  const front = input.front.trim().slice(0, 300);
  const back = input.back.trim().slice(0, 1000);
  if (!front || !back) throw badRequest("Recto et verso sont nécessaires.");
  if (input.subjectCode && !(await db.query.subjects.findFirst({ where: eq(subjects.code, input.subjectCode) }))) throw badRequest("Matière inconnue.");
  const existing = await db.select({ id: personalCards.id }).from(personalCards).where(eq(personalCards.userId, actor.id));
  if (existing.length >= MAX_CARDS) throw new AppError("cards_full", 409, `Tu as déjà ${MAX_CARDS} cartes.`);
  const [row] = await db.insert(personalCards).values({ userId: actor.id, front, back, subjectCode: input.subjectCode || null, dueAt: new Date() }).returning();
  return row;
}

export async function deleteCard(db: DB, actorIn: Actor | null, id: string) {
  const actor = student(actorIn);
  const r = await db.delete(personalCards).where(and(eq(personalCards.id, id), eq(personalCards.userId, actor.id))).returning({ id: personalCards.id });
  if (!r.length) throw notFound("Carte");
}

/** Je savais : étape suivante (J+1, 3, 7, 21 puis 21). À revoir : retour au lendemain. */
export async function reviewCard(db: DB, actorIn: Actor | null, id: string, knew: boolean, now = new Date()) {
  const actor = student(actorIn);
  const c = await db.query.personalCards.findFirst({ where: and(eq(personalCards.id, id), eq(personalCards.userId, actor.id)) });
  if (!c) throw notFound("Carte");
  const days = knew ? REVIEW_INTERVALS_DAYS[Math.min(c.stage, REVIEW_INTERVALS_DAYS.length - 1)] : 1;
  const stage = knew ? c.stage + 1 : 0;
  const dueAt = addDays(now, days);
  await db.update(personalCards).set({ stage, dueAt, lastReviewedAt: now }).where(eq(personalCards.id, c.id));
  return { stage, dueAt };
}

export async function dueCardCount(db: DB, userId: string, now = new Date()) {
  const rows = await db.select({ id: personalCards.id }).from(personalCards).where(and(eq(personalCards.userId, userId), lte(personalCards.dueAt, now)));
  return rows.length;
}

/** Fiches de révision exportables : règles du carnet regroupées par type d'erreur, puis cartes personnelles. */
export async function exportSheets(db: DB, actorIn: Actor | null, format: "md" | "csv") {
  const actor = student(actorIn);
  const items = await db.select().from(reviewItems).where(eq(reviewItems.userId, actor.id)).orderBy(asc(reviewItems.dueAt));
  const skillNames = new Map((await db.select().from(skills)).map((s) => [s.id, s.name]));
  const cards = await db.select().from(personalCards).where(eq(personalCards.userId, actor.id)).orderBy(asc(personalCards.createdAt));
  if (format === "csv") {
    const q = (s: string) => `"${s.replace(/"/g, '""')}"`;
    const lines = [
      "type;groupe;notion;recto_ou_regle;verso;statut",
      ...items.map((i) => ["carnet", CAUSE_LABELS[i.cause as ErrorCause], skillNames.get(i.skillId) ?? i.skillId, i.rule, "", i.status].map((x) => q(String(x))).join(";")),
      ...cards.map((c) => ["carte", c.subjectCode ?? "", "", c.front, c.back, ""].map((x) => q(String(x))).join(";")),
    ];
    return lines.join("\n");
  }
  const out = ["# Mes fiches de révision CAP SESAME", "", `Exportées le ${new Date().toLocaleDateString("fr-FR")}.`, ""];
  for (const cause of Object.keys(CAUSE_LABELS) as ErrorCause[]) {
    const group = items.filter((i) => i.cause === cause && i.status === "open");
    if (!group.length) continue;
    out.push(`## ${CAUSE_LABELS[cause]}`, "");
    for (const i of group) out.push(`- **${skillNames.get(i.skillId) ?? i.skillId}** : ${i.rule}${i.personalNote ? `  \n  Ma note : ${i.personalNote}` : ""}`);
    out.push("");
  }
  if (cards.length) {
    out.push("## Mes cartes", "");
    for (const c of cards) out.push(`- **${c.front}** : ${c.back}`);
    out.push("");
  }
  return out.join("\n");
}
