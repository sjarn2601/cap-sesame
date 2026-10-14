// Téléchargement explicite d'une série libre pour la faire hors connexion.
import { z } from "zod";
import { getDb } from "@/db";
import { api } from "@/server/next";
import { createOfflinePack } from "@/server/offline";
import { badRequest } from "@/server/errors";

const body = z.object({ subjectCode: z.string().max(10).optional(), size: z.enum(["short", "normal", "long"]).optional() });

export async function POST(req: Request) {
  return api(async (actor) => {
    const parsed = body.safeParse(await req.json().catch(() => ({})));
    if (!parsed.success) throw badRequest("Demande invalide.");
    return createOfflinePack(getDb(), actor, parsed.data);
  });
}
