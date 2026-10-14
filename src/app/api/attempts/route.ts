// Création de tentative (TEC-01).
import { z } from "zod";
import { getDb } from "@/db";
import { api } from "@/server/next";
import { createDiagnostic, createExam, createPractice, createReview } from "@/server/attempts";
import { badRequest } from "@/server/errors";

const body = z.discriminatedUnion("kind", [
  z.object({ kind: z.literal("practice"), subjectCode: z.string().optional(), skillId: z.string().optional(), size: z.enum(["short", "normal", "long"]).optional() }),
  z.object({ kind: z.literal("review") }),
  z.object({ kind: z.literal("diagnostic"), subjectCode: z.string().optional(), advanced: z.boolean().optional() }),
  z.object({ kind: z.literal("exam"), subject: z.string(), mode: z.enum(["strict", "pedagogic"]) }),
]);

export async function POST(req: Request) {
  return api(async (actor) => {
    const parsed = body.safeParse(await req.json().catch(() => null));
    if (!parsed.success) throw badRequest("Requête invalide.");
    const b = parsed.data;
    const db = getDb();
    const a =
      b.kind === "practice" ? await createPractice(db, actor, b) : b.kind === "review" ? await createReview(db, actor) : b.kind === "diagnostic" ? await createDiagnostic(db, actor, b) : await createExam(db, actor, b);
    return { id: a.id };
  });
}
