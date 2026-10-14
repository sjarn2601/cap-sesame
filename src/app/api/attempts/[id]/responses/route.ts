// Sauvegarde de réponse avec clé d'idempotence : répéter la requête ne double rien.
import { z } from "zod";
import { getDb } from "@/db";
import { api } from "@/server/next";
import { saveResponse } from "@/server/attempts";
import { badRequest } from "@/server/errors";

const body = z.object({
  questionVersionId: z.string().uuid(),
  idempotencyKey: z.string().min(8).max(100),
  selected: z.array(z.string().max(4)).max(20),
  numericValue: z.number().nullable().optional(),
  durationMs: z.number().int().min(0).max(14_400_000).optional(),
  confidence: z.number().int().min(1).max(3).nullable().optional(),
  clientSeq: z.number().int().min(0).optional(),
});

export async function POST(req: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return api(async (actor) => {
    const parsed = body.safeParse(await req.json().catch(() => null));
    if (!parsed.success) throw badRequest("Réponse invalide.");
    return saveResponse(getDb(), actor, id, parsed.data);
  });
}
