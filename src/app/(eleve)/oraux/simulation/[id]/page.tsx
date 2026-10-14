import Link from "next/link";
import { notFound } from "next/navigation";
import { getDb } from "@/db";
import { getSimulation } from "@/server/oral";
import { requireStudent } from "@/server/next";
import { AppError } from "@/server/errors";
import { OralSimulation } from "./OralSimulation";

export const metadata = { title: "Simulation d'entretien" };
export const dynamic = "force-dynamic";

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const actor = await requireStudent();
  const sim = await getSimulation(getDb(), actor, id).catch((e) => {
    if (e instanceof AppError && e.status === 404) notFound();
    throw e;
  });
  return (
    <div className="container stack player-page" style={{ maxWidth: 820 }}>
      <nav className="small"><Link href="/oraux">Oraux</Link> › Simulation</nav>
      <h1>Simulation d&apos;entretien</h1>
      <p className="small muted">{sim.sheet ? `${sim.sheet.school} · ${sim.sheet.program} · ${sim.sheet.campus}` : "Questions générales"}</p>
      <OralSimulation id={sim.id} turns={sim.turns} feedback={sim.feedback ?? null} />
    </div>
  );
}
