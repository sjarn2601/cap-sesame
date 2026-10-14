import { getDb } from "@/db";
import { api } from "@/server/next";
import { finalizeAttempt } from "@/server/attempts";

export async function POST(_: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return api(async (actor) => {
    const a = await finalizeAttempt(getDb(), actor, id);
    return { id: a.id, status: a.status };
  });
}
