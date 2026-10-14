// Export des fiches de révision (REV-02) : Markdown imprimable ou CSV.
import { getDb } from "@/db";
import { getActor, errorResponse } from "@/server/next";
import { exportSheets } from "@/server/cards";

export async function GET(req: Request) {
  try {
    const format = new URL(req.url).searchParams.get("format") === "csv" ? "csv" : "md";
    const raw = await exportSheets(getDb(), await getActor(), format);
    const body = format === "csv" ? "\uFEFF" + raw : raw;
    return new Response(body, {
      headers: {
        "Content-Type": format === "csv" ? "text/csv; charset=utf-8" : "text/markdown; charset=utf-8",
        "Content-Disposition": `attachment; filename="fiches-cap-sesame.${format}"`,
        "Cache-Control": "no-store",
      },
    });
  } catch (e) {
    return errorResponse(e);
  }
}
