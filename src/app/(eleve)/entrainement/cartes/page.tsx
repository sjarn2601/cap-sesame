import Link from "next/link";
import { asc } from "drizzle-orm";
import { getDb } from "@/db";
import { subjects } from "@/db/schema";
import { listCards } from "@/server/cards";
import { requireStudent } from "@/server/next";
import { CardsClient } from "./CardsClient";

export const metadata = { title: "Mes cartes" };
export const dynamic = "force-dynamic";

export default async function Page({ searchParams }: { searchParams: Promise<{ recto?: string; verso?: string; matiere?: string }> }) {
  const actor = await requireStudent();
  const sp = await searchParams;
  const db = getDb();
  const { cards } = await listCards(db, actor);
  const subs = (await db.select().from(subjects).orderBy(asc(subjects.position))).filter((s) => s.open);
  return (
    <div className="container stack">
      <nav className="small"><Link href="/entrainement">S&apos;entraîner</Link> › Mes cartes</nav>
      <h1>Mes cartes</h1>
      <p className="muted">Tes propres cartes mémoire, revues à J+1, 3, 7 puis 21. En langue, chaque carte peut être écoutée.</p>
      <CardsClient
        initial={cards.map((c) => ({ id: c.id, front: c.front, back: c.back, subjectCode: c.subjectCode, stage: c.stage, dueAt: c.dueAt.toISOString() }))}
        subjects={subs.map((s) => ({ code: s.code, name: s.name }))}
        prefill={sp.recto ? { front: sp.recto.slice(0, 300), back: (sp.verso ?? "").slice(0, 1000), subjectCode: sp.matiere ?? null } : undefined}
      />
    </div>
  );
}
