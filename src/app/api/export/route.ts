// Export des données personnelles (JSON complet ou CSV des résultats).
import { NextResponse } from "next/server";
import { getDb } from "@/db";
import { errorResponse, getActor } from "@/server/next";
import { exportData, resultsCsv } from "@/server/privacy";

export async function GET(req: Request) {
  try {
    const data = await exportData(getDb(), await getActor());
    const format = new URL(req.url).searchParams.get("format");
    const stamp = new Date().toISOString().slice(0, 10);
    if (format === "csv") {
      return new NextResponse("﻿" + resultsCsv(data), { headers: { "Content-Type": "text/csv; charset=utf-8", "Content-Disposition": `attachment; filename="cap-sesame-resultats-${stamp}.csv"` } });
    }
    return new NextResponse(JSON.stringify(data, null, 2), { headers: { "Content-Type": "application/json; charset=utf-8", "Content-Disposition": `attachment; filename="cap-sesame-export-${stamp}.json"` } });
  } catch (e) {
    return errorResponse(e);
  }
}
