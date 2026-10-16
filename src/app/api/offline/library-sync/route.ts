// Réponses données dans la bibliothèque hors ligne, envoyées par lots identifiés sur l'appareil.
import { z } from "zod";
import { getDb } from "@/db";
import { api } from "@/server/next";
import { syncLibraryAnswers } from "@/server/offlineLibrary";
import { badRequest } from "@/server/errors";

const body = z.object({
  batchId: z.string().min(8).max(100),
  answers: z
    .array(
      z.object({
        questionVersionId: z.string().uuid(),
        clientId: z.string().min(8).max(100),
        selected: z.array(z.string().max(4)).max(20),
        numericValue: z.number().nullable().optional(),
        durationMs: z.number().int().min(0).max(14_400_000).optional(),
        answeredAt: z.string().max(40),
      }),
    )
    .min(1)
    .max(50),
});

export async function POST(req: Request) {
  return api(async (actor) => {
    const parsed = body.safeParse(await req.json().catch(() => null));
    if (!parsed.success) throw badRequest("Synchronisation invalide.");
    return syncLibraryAnswers(getDb(), actor, parsed.data.batchId, parsed.data.answers);
  });
}
