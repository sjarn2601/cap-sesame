// Bilan hebdomadaire exportable (RES-02), à partager volontairement.
import { getDb } from "@/db";
import { errorResponse, getActor } from "@/server/next";
import { weeklyReport } from "@/server/progress";
import { weeklyText } from "@/server/projection";
import { assertRole } from "@/server/auth";

export async function GET() {
  try {
    const actor = assertRole(await getActor(), ["student"]);
    const text = weeklyText(await weeklyReport(getDb(), actor.id));
    return new Response(text, { headers: { "Content-Type": "text/markdown; charset=utf-8", "Content-Disposition": `attachment; filename="bilan-cap-sesame-${new Date().toISOString().slice(0, 10)}.md"`, "Cache-Control": "no-store" } });
  } catch (e) {
    return errorResponse(e);
  }
}
