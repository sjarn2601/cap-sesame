import { describe, it, expect } from "vitest";
import { checkTransition, qualityChecks, type QuestionDraft } from "@/lib/editorial";
import { selectQuestions, seeded, type Candidate } from "@/lib/adaptive";

const t = (over: Partial<Parameters<typeof checkTransition>[0]>) =>
  checkTransition({ from: "format_check", to: "validated", actorRole: "reviewer", actorId: "r1", authorId: "a1", rightsCleared: true, blockingIssues: 0, ...over });

describe("cycle éditorial", () => {
  it("un auteur ne valide pas sa propre production", () => {
    expect(t({ actorId: "a1", authorId: "a1" }).ok).toBe(false);
  });
  it("un relecteur valide", () => expect(t({}).ok).toBe(true));
  it("pas de publication sans droits", () => expect(t({ from: "validated", to: "published", rightsCleared: false }).ok).toBe(false));
  it("pas de saut d'étape", () => expect(t({ from: "draft", to: "published" }).ok).toBe(false));
  it("un refus exige un motif", () => {
    expect(t({ from: "in_review", to: "draft" }).ok).toBe(false);
    expect(t({ from: "in_review", to: "draft", reason: "Option B ambiguë" }).ok).toBe(true);
  });
  it("un élève ne fait rien", () => expect(t({ actorRole: "student" }).ok).toBe(false));
  it("problème bloquant", () => expect(t({ blockingIssues: 1 }).ok).toBe(false));
});

const draft: QuestionDraft = {
  questionId: "Q1",
  format: "single",
  stem: "Un prix passe de 50 € à 60 €. Quelle est la hausse en pourcentage ?",
  options: [
    { id: "a", text: "20 %", correct: true, justification: "(60-50)/50" },
    { id: "b", text: "10 %", correct: true, justification: "écart absolu" },
  ],
  references: ["Cours pourcentages"],
  explanation: "x",
  rule: "y",
};

describe("contrôles qualité", () => {
  it("détecte un QCU à deux bonnes réponses", () => {
    expect(qualityChecks(draft, []).some((i) => i.code === "single_correct")).toBe(true);
  });
  it("détecte doublons exacts et proches", () => {
    const issues = qualityChecks(draft, [
      { questionId: "Q2", stem: "Un prix passe de 50 € à 60 €. Quelle est la hausse en pourcentage ?" },
      { questionId: "Q3", stem: "Un prix passe de 50 € à 60 €. Quelle est la hausse en pourcentage ?!" },
    ]);
    expect(issues.map((i) => i.code)).toContain("duplicate_exact");
  });
  it("références manquantes", () => {
    expect(qualityChecks({ ...draft, references: [] }, []).some((i) => i.code === "references")).toBe(true);
  });
});

describe("sélection adaptative", () => {
  const cands: Candidate[] = Array.from({ length: 30 }, (_, i) => ({ id: `v${i}`, questionId: `q${i}`, familyId: `f${i % 15}`, skillIds: [i < 15 ? "weak" : "ok"], difficulty: 1 + (i % 3) }));
  it("une série n'est pas composée uniquement de points faibles", () => {
    const sel = selectQuestions(cands, { seenQuestions: new Map(), seenFamilies: new Set(), skillScore: new Map([["weak", 0.2], ["ok", 0.9]]), now: new Date() }, 9, seeded(42));
    expect(sel).toHaveLength(9);
    expect(sel.filter((s) => s.skillIds[0] === "ok").length).toBeGreaterThanOrEqual(3);
    expect(sel.filter((s) => s.skillIds[0] === "weak").length).toBeGreaterThanOrEqual(3);
    expect(sel.every((s) => s.reason.length > 0)).toBe(true);
  });
  it("évite les questions vues récemment", () => {
    const seen = new Map(cands.slice(0, 20).map((c) => [c.questionId, new Date()]));
    const sel = selectQuestions(cands, { seenQuestions: seen, seenFamilies: new Set(), skillScore: new Map(), now: new Date() }, 5, seeded(1));
    expect(sel.every((s) => s.novelty !== "seen")).toBe(true);
  });
});
