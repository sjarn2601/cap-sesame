import { z } from "zod";
import { getDb } from "@/db";
import { api } from "@/server/next";
import { startSimulation } from "@/server/oral";
import { badRequest } from "@/server/errors";

export async function POST(req: Request) {
  return api(async (actor) => {
    const parsed = z.object({ sheetId: z.string().uuid().nullable().optional() }).safeParse(await req.json().catch(() => null));
    if (!parsed.success) throw badRequest("Requête invalide.");
    const s = await startSimulation(getDb(), actor, parsed.data);
    return { id: s.id };
  });
}
