import { z } from "zod";
import { getDb } from "@/db";
import { api } from "@/server/next";
import { getHint } from "@/server/attempts";
import { badRequest } from "@/server/errors";

export async function POST(req: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return api(async (actor) => {
    const parsed = z.object({ questionVersionId: z.string().uuid() }).safeParse(await req.json().catch(() => null));
    if (!parsed.success) throw badRequest("Requête invalide.");
    return getHint(getDb(), actor, id, parsed.data.questionVersionId);
  });
}
