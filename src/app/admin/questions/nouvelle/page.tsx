import { requireStaff } from "@/server/next";
import { AdminForm, AdminSubmit } from "@/components/AdminForm";
import { createQuestionAction } from "@/app/actions/admin";

export const metadata = { title: "Nouvelle question" };

const TEMPLATE = {
  questionId: "MATH-PCT-100",
  subjectCode: "MATH",
  skillIds: ["math.pct"],
  familyId: "math.pct.var",
  difficulty: 2,
  format: "single",
  stem: "Énoncé…",
  options: [
    { id: "a", text: "Bonne réponse", correct: true, justification: "Pourquoi c'est juste." },
    { id: "b", text: "Distracteur", correct: false, justification: "Erreur plausible documentée." },
  ],
  explanation: "Démarche complète, unités, contrôle de cohérence.",
  rule: "Règle à retenir.",
  hints: ["Rappel de notion", "Début de méthode", "Explication"],
  timeSec: 60,
  references: ["Cours CAP SESAME : math.pct"],
  lessonAnchor: "regle",
  origin: "human",
  rightsCleared: true,
  reserved: false,
};

export default async function Page() {
  await requireStaff();
  return (
    <div className="stack" style={{ maxWidth: 900 }}>
      <h1>Nouvelle question</h1>
      <p className="muted">La question est créée en brouillon. Pour une nouvelle version d&apos;une question existante, réutilisez son identifiant : l&apos;ancienne version reste attachée aux tentatives passées.</p>
      <AdminForm action={createQuestionAction} className="card stack">
        <label htmlFor="json">Question (JSON, schéma documenté dans docs/import.md)</label>
        <textarea id="json" name="json" rows={28} defaultValue={JSON.stringify(TEMPLATE, null, 2)} style={{ fontFamily: "var(--mono)", fontSize: "0.85rem" }} />
        <div><AdminSubmit>Créer le brouillon</AdminSubmit></div>
      </AdminForm>
    </div>
  );
}
