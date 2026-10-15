import { inArray } from "drizzle-orm";
import { getDb } from "@/db";
import { questionVersions } from "@/db/schema";
import { DemoPlayer } from "./DemoPlayer";

export const metadata = { title: "Démonstration sans compte" };
export const dynamic = "force-dynamic";

const DEMO_IDS = ["MATH-PCT-006", "FR-CONJ-002", "DIG-SECU-001", "EN-VOC-001"];

export default async function Page() {
  const rows = await getDb().select().from(questionVersions).where(inArray(questionVersions.questionId, DEMO_IDS));
  const qs = DEMO_IDS.map((id) => rows.filter((r) => r.questionId === id && r.status === "published").sort((a, b) => b.version - a.version)[0]).filter(Boolean);
  return (
    <div className="container">
      <h1>Essayer sans compte</h1>
      <p className="muted">Quatre questions pour voir comment fonctionnent les corrections. Rien n&apos;est enregistré.</p>
      <DemoPlayer
        questions={qs.map((q) => ({
          id: q.id,
          stem: q.stem,
          format: q.format,
          options: q.options.map((o) => ({ id: o.id, text: o.text })),
          correction: { status: "", points: 0, maxPoints: 1, explanation: q.explanation, rule: q.rule, options: q.options.map((o) => ({ id: o.id, correct: o.correct, justification: o.justification })), numericAnswer: q.numericAnswer, lessonAnchor: null, references: q.references },
        }))}
      />
    </div>
  );
}
