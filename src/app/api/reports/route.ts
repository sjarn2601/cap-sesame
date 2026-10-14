import { z } from "zod";
import { getDb } from "@/db";
import { api } from "@/server/next";
import { reportContent } from "@/server/catalog";
import { badRequest } from "@/server/errors";

export async function POST(req: Request) {
  return api(async (actor) => {
    const parsed = z.object({ contentType: z.enum(["question", "lesson"]), contentVersionId: z.string().uuid(), message: z.string() }).safeParse(await req.json().catch(() => null));
    if (!parsed.success) throw badRequest("Requête invalide.");
    await reportContent(getDb(), actor, parsed.data.contentType, parsed.data.contentVersionId, parsed.data.message);
    return { ok: true };
  });
}
