import { notFound, redirect } from "next/navigation";
import { getDb } from "@/db";
import { getAttemptView } from "@/server/attempts";
import { requireStudent } from "@/server/next";
import { AppError } from "@/server/errors";
import { Player } from "@/components/Player";

export const metadata = { title: "Séance" };
export const dynamic = "force-dynamic";

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const actor = await requireStudent();
  const view = await getAttemptView(getDb(), actor, id).catch((e) => {
    if (e instanceof AppError && e.status === 404) notFound();
    throw e;
  });
  if (view.status !== "in_progress") redirect(view.kind === "diagnostic" && view.title.startsWith("Diagnostic d'orientation") ? `/diagnostic/${id}/bilan` : `/seance/${id}/resultat`);
  return (
    <div className="container wide player-page">
      <Player initial={view} />
    </div>
  );
}
