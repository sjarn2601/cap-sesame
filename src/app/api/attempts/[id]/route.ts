import { getDb } from "@/db";
import { api } from "@/server/next";
import { getAttemptView } from "@/server/attempts";

export async function GET(_: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return api((actor) => getAttemptView(getDb(), actor, id));
}
