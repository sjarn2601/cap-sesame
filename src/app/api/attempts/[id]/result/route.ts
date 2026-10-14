import { getDb } from "@/db";
import { api } from "@/server/next";
import { getResult } from "@/server/attempts";

export async function GET(_: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return api((actor) => getResult(getDb(), actor, id));
}
