import { z } from "zod";
import { getDb } from "@/db";
import { api } from "@/server/next";
import { deleteDossierEntry, saveDossierEntry, structureDossier } from "@/server/oral";
import { badRequest } from "@/server/errors";

const body = z.discriminatedUnion("action", [
  z.object({ action: z.literal("save"), id: z.string().max(40).optional(), category: z.enum(["experience", "engagement", "reussite", "difficulte", "interet", "projet"]), title: z.string().max(120), details: z.string().max(1500) }),
  z.object({ action: z.literal("delete"), id: z.string().max(40) }),
  z.object({ action: z.literal("structure") }),
]);

export async function POST(req: Request) {
  return api(async (actor) => {
    const parsed = body.safeParse(await req.json().catch(() => null));
    if (!parsed.success) throw badRequest("Élément invalide (titre 120 caractères, détails 1 500 au plus).");
    const d = parsed.data;
    const db = getDb();
    if (d.action === "delete") return deleteDossierEntry(db, actor, d.id).then(() => ({ deleted: true }));
    if (d.action === "structure") return structureDossier(db, actor);
    return saveDossierEntry(db, actor, d);
  });
}
