import Link from "next/link";
import { requireStudent } from "@/server/next";
import { DailyJournal } from "@/components/DailyJournal";
import { BBC_LINKS } from "@/lib/daily";

export const metadata = { title: "Journal en anglais" };
export const dynamic = "force-dynamic";

export default async function Page() {
  await requireStudent();
  return (
    <div className="container stack">
      <nav className="small"><Link href="/apprendre">Apprendre</Link> › Journal en anglais</nav>
      <div>
        <p className="eyebrow" style={{ margin: 0 }}>Écoute quotidienne · environ 15 minutes</p>
        <h1>Journal en anglais du jour</h1>
        <p className="muted" style={{ margin: 0 }}>Un nouveau journal chaque jour : quatre reportages, des brèves, le vocabulaire et un quiz. Textes rédigés pour CAP SESAME à partir de nos fiches d&apos;actualité vérifiées, sur un ton neutre. Disponible aussi hors ligne.</p>
      </div>
      <DailyJournal />
      <section className="card stack">
        <h2 style={{ margin: 0 }}>Aller plus loin, en ligne</h2>
        <ul className="rows">
          {BBC_LINKS.map((l) => (
            <li key={l.url}>
              <span className="grow">
                <a className="title" href={l.url} target="_blank" rel="noopener noreferrer">{l.label}</a>
                <span className="small muted">{l.detail}</span>
              </span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
