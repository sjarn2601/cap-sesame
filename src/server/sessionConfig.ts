// Configuration versionnée par session (REG-01) : double validation, journal des différences.
import { and, desc, eq } from "drizzle-orm";
import type { DB } from "@/db";
import { examSessionConfigs, type SessionConfigBody } from "@/db/schema";
import { assertRole, type Actor } from "./auth";
import { AppError, badRequest, notFound } from "./errors";
import { audit } from "./audit";

export async function getPublishedConfig(db: DB, code: string) {
  const c = await db.query.examSessionConfigs.findFirst({
    where: and(eq(examSessionConfigs.code, code), eq(examSessionConfigs.status, "published")),
    orderBy: desc(examSessionConfigs.version),
  });
  if (!c) throw notFound("Configuration de session");
  return c;
}

export async function listPublishedSessions(db: DB) {
  const rows = await db.query.examSessionConfigs.findMany({ where: eq(examSessionConfigs.status, "published") });
  return rows;
}

export function diffBodies(before: unknown, after: unknown, path = ""): { path: string; before: unknown; after: unknown }[] {
  if (JSON.stringify(before) === JSON.stringify(after)) return [];
  const isObj = (v: unknown): v is Record<string, unknown> => typeof v === "object" && v !== null;
  if (isObj(before) && isObj(after)) {
    const keys = new Set([...Object.keys(before), ...Object.keys(after)]);
    return [...keys].flatMap((k) => diffBodies(before[k], after[k], path ? `${path}.${k}` : k));
  }
  return [{ path: path || "(racine)", before, after }];
}

export async function createDraft(db: DB, actor: Actor | null, code: string, body: SessionConfigBody, verifiedAt: string) {
  const a = assertRole(actor, ["admin", "reviewer"]);
  if (!body.examDate || body.papers.length === 0) throw badRequest("Date et épreuves obligatoires.");
  const previous = await db.query.examSessionConfigs.findFirst({ where: eq(examSessionConfigs.code, code), orderBy: desc(examSessionConfigs.version) });
  const [row] = await db
    .insert(examSessionConfigs)
    .values({
      code,
      version: (previous?.version ?? 0) + 1,
      status: "draft",
      body,
      verifiedAt,
      diffFromPrevious: previous ? diffBodies(previous.body, body) : [],
      createdBy: a.id,
    })
    .returning();
  await audit(db, a.id, "session_config.draft", { type: "exam_session_config", id: row.id }, { code, version: row.version });
  return row;
}

/** Deux validations par deux personnes distinctes, différentes de l'auteur du brouillon. */
export async function approveConfig(db: DB, actor: Actor | null, id: string) {
  const a = assertRole(actor, ["admin", "reviewer"]);
  const c = await db.query.examSessionConfigs.findFirst({ where: eq(examSessionConfigs.id, id) });
  if (!c) throw notFound("Configuration");
  if (c.createdBy === a.id) throw new AppError("self_approval", 403, "L'auteur du brouillon ne peut pas le valider.");
  if (c.status === "draft") {
    await db.update(examSessionConfigs).set({ status: "pending_second_approval", firstApprovedBy: a.id }).where(eq(examSessionConfigs.id, id));
    await audit(db, a.id, "session_config.first_approval", { type: "exam_session_config", id });
    return "pending_second_approval" as const;
  }
  if (c.status === "pending_second_approval") {
    if (c.firstApprovedBy === a.id) throw new AppError("same_approver", 403, "La seconde validation doit venir d'une autre personne.");
    await db.transaction(async (tx) => {
      await tx.update(examSessionConfigs).set({ status: "archived" }).where(and(eq(examSessionConfigs.code, c.code), eq(examSessionConfigs.status, "published")));
      await tx.update(examSessionConfigs).set({ status: "published", secondApprovedBy: a.id, publishedAt: new Date() }).where(eq(examSessionConfigs.id, id));
    });
    await audit(db, a.id, "session_config.published", { type: "exam_session_config", id }, { code: c.code, version: c.version });
    return "published" as const;
  }
  throw badRequest("Cette configuration n'attend pas de validation.");
}
