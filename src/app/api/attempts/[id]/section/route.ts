import { z } from "zod";
import { getDb } from "@/db";
import { api } from "@/server/next";
import { startNextSection, submitSection } from "@/server/attempts";
import { badRequest } from "@/server/errors";

export async function POST(req: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return api(async (actor) => {
    const parsed = z.object({ action: z.enum(["start", "submit"]), index: z.number().int().min(0) }).safeParse(await req.json().catch(() => null));
    if (!parsed.success) throw badRequest("Requête invalide.");
    const a = parsed.data.action === "start" ? await startNextSection(getDb(), actor, id, parsed.data.index) : await submitSection(getDb(), actor, id, parsed.data.index);
    return { status: a.status };
  });
}
