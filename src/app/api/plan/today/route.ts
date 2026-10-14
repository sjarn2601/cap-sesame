import { getDb } from "@/db";
import { api } from "@/server/next";
import { getToday } from "@/server/plan";

export async function GET() {
  return api(async (actor) => {
    const t = await getToday(getDb(), actor);
    return { main: t.main, others: t.others, diagnosticPending: t.diagnosticPending, doneToday: t.doneToday, totalToday: t.totalToday, note: t.note };
  });
}
