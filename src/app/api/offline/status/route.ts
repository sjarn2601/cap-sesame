import { getDb } from "@/db";
import { api } from "@/server/next";
import { packStatus } from "@/server/offline";
import { badRequest } from "@/server/errors";

export async function GET(req: Request) {
  const id = new URL(req.url).searchParams.get("attempt") ?? "";
  return api(async (actor) => {
    if (!/^[0-9a-f-]{36}$/i.test(id)) throw badRequest("Identifiant invalide.");
    return packStatus(getDb(), actor, id);
  });
}
