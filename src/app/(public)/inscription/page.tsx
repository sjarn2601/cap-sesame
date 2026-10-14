import { asc } from "drizzle-orm";
import { getDb } from "@/db";
import { subjects } from "@/db/schema";
import { RegisterForm } from "./RegisterForm";

export const metadata = { title: "Créer un compte" };
export const dynamic = "force-dynamic";

export default async function Page() {
  const langs = (await getDb().select().from(subjects).orderBy(asc(subjects.position))).filter((s) => s.code.startsWith("LV-"));
  return (
    <div className="container" style={{ maxWidth: 560 }}>
      <div className="card stack">
        <h1>Créer un compte</h1>
        <p className="muted">Quatre informations suffisent. Tu compléteras ton profil ensuite, si tu le souhaites.</p>
        <RegisterForm languages={langs.map((l) => ({ code: l.code.slice(3), name: l.name, open: l.open }))} />
      </div>
    </div>
  );
}
