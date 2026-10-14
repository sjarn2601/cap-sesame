// Assistant encadré : une seule route, trois modes. Sans clé d'API ou en cas de panne, la réponse est éditoriale.
import { z } from "zod";
import { getDb } from "@/db";
import { api } from "@/server/next";
import { askAboutLesson, askAboutQuestion, MAX_QUESTION_CHARS } from "@/server/assistant";
import { badRequest } from "@/server/errors";

const question = z.string().max(MAX_QUESTION_CHARS).nullable().optional();
const body = z.discriminatedUnion("mode", [
  z.object({ mode: z.literal("explain"), attemptId: z.string().uuid(), questionVersionId: z.string().uuid(), question }),
  z.object({ mode: z.literal("hint"), attemptId: z.string().uuid(), questionVersionId: z.string().uuid(), level: z.union([z.literal(1), z.literal(2), z.literal(3)]), question }),
  z.object({ mode: z.literal("lesson"), lessonId: z.string().min(1).max(100), anchor: z.string().max(100).nullable().optional(), question }),
]);

export async function POST(req: Request) {
  return api(async (actor) => {
    const parsed = body.safeParse(await req.json().catch(() => null));
    if (!parsed.success) throw badRequest(`Demande invalide (question limitée à ${MAX_QUESTION_CHARS} caractères).`);
    const d = parsed.data;
    const db = getDb();
    if (d.mode === "lesson") return askAboutLesson(db, actor, d);
    return askAboutQuestion(db, actor, d);
  });
}
