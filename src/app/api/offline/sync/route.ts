// Synchronisation des réponses faites hors connexion : dédupliquées par identifiant local.
import { z } from "zod";
import { getDb } from "@/db";
import { api } from "@/server/next";
import { syncOffline } from "@/server/offline";
import { badRequest } from "@/server/errors";

const body = z.object({
  attemptId: z.string().uuid(),
  finish: z.boolean().default(false),
  answers: z
    .array(
      z.object({
        questionVersionId: z.string().uuid(),
        clientId: z.string().min(8).max(100),
        selected: z.array(z.string().max(4)).max(20),
        numericValue: z.number().nullable().optional(),
        durationMs: z.number().int().min(0).max(14_400_000).optional(),
        confidence: z.number().int().min(1).max(3).nullable().optional(),
        answeredAt: z.string().max(40),
      }),
    )
    .max(50),
  localScores: z.record(z.string(), z.boolean()).default({}),
});

export async function POST(req: Request) {
  return api(async (actor) => {
    const parsed = body.safeParse(await req.json().catch(() => null));
    if (!parsed.success) throw badRequest("Synchronisation invalide.");
    const { attemptId, answers, localScores, finish } = parsed.data;
    return syncOffline(getDb(), actor, attemptId, answers, localScores, finish);
  });
}
