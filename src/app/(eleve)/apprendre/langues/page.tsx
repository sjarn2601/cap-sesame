import Link from "next/link";
import { getDb } from "@/db";
import { listLanguageExercises } from "@/server/languages";
import { requireStudent } from "@/server/next";
import { LanguageExercises } from "./LanguageExercises";

export const metadata = { title: "Langues à l'oral" };
export const dynamic = "force-dynamic";

export default async function Page({ searchParams }: { searchParams: Promise<{ langue?: string }> }) {
  const { langue } = await searchParams;
  const actor = await requireStudent();
  const langs = await listLanguageExercises(getDb(), actor);
  const current = langs.find((l) => l.code === langue) ?? langs[0];
  return (
    <div className="container stack">
      <nav className="small"><Link href="/apprendre">Apprendre</Link> › Langues à l&apos;oral</nav>
      <h1>Langues à l&apos;oral</h1>
      <p className="notice">Format oral, distinct des épreuves écrites du concours (questionnaires à choix multiples). Il prépare la compréhension et l&apos;expression utiles aux entretiens.</p>
      <nav className="row" aria-label="Langue">
        {langs.map((l) => <Link key={l.code} className={`btn small ${l.code === current?.code ? "primary" : ""}`} href={`/apprendre/langues?langue=${l.code}`}>{l.name}</Link>)}
      </nav>
      {current ? (
        <LanguageExercises
          key={current.code}
          dir={current.dir}
          exercises={current.exercises.map((x) => ({ id: x.id, exerciseId: x.exerciseId, subjectCode: x.subjectCode, kind: x.kind, title: x.title, level: x.level, text: x.text, transcriptByDefault: x.transcriptByDefault, question: x.question, options: x.options, prompts: x.prompts, modelAnswer: x.modelAnswer }))}
        />
      ) : (
        <p className="muted">Aucune langue ouverte pour ton profil.</p>
      )}
    </div>
  );
}
