import { z } from "zod";
import { getDb } from "@/db";
import { api } from "@/server/next";
import { deleteSimulation, finishSimulation, saveTurn, MAX_ANSWER_CHARS } from "@/server/oral";
import { badRequest } from "@/server/errors";

const body = z.discriminatedUnion("action", [
  z.object({ action: z.literal("turn"), turnId: z.string().uuid(), answer: z.string().max(MAX_ANSWER_CHARS), inputMode: z.enum(["text", "voice"]), edited: z.boolean() }),
  z.object({ action: z.literal("finish") }),
  z.object({ action: z.literal("delete") }),
]);

export async function POST(req: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return api(async (actor) => {
    const parsed = body.safeParse(await req.json().catch(() => null));
    if (!parsed.success) throw badRequest(`Réponse invalide (${MAX_ANSWER_CHARS} caractères au plus).`);
    const d = parsed.data;
    const db = getDb();
    if (d.action === "turn") return saveTurn(db, actor, id, d);
    if (d.action === "finish") return finishSimulation(db, actor, id);
    await deleteSimulation(db, actor, id);
    return { deleted: true };
  });
}
