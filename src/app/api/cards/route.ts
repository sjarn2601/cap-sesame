import { z } from "zod";
import { getDb } from "@/db";
import { api } from "@/server/next";
import { createCard, deleteCard, reviewCard } from "@/server/cards";
import { badRequest } from "@/server/errors";

const body = z.discriminatedUnion("action", [
  z.object({ action: z.literal("create"), front: z.string().max(300), back: z.string().max(1000), subjectCode: z.string().max(10).nullable().optional() }),
  z.object({ action: z.literal("review"), id: z.string().uuid(), knew: z.boolean() }),
  z.object({ action: z.literal("delete"), id: z.string().uuid() }),
]);

export async function POST(req: Request) {
  return api(async (actor) => {
    const parsed = body.safeParse(await req.json().catch(() => null));
    if (!parsed.success) throw badRequest("Carte invalide (recto 300 caractères, verso 1 000 au plus).");
    const d = parsed.data;
    const db = getDb();
    if (d.action === "create") return createCard(db, actor, d);
    if (d.action === "review") return reviewCard(db, actor, d.id, d.knew);
    await deleteCard(db, actor, d.id);
    return { deleted: true };
  });
}
