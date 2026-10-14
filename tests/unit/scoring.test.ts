// R02 : chaque combinaison de sélection est notée correctement, y compris absence et réponse invalide.
// Les valeurs attendues sont calculées à la main, indépendamment du moteur.
import { describe, it, expect } from "vitest";
import { scoreQuestion, scoreAttempt, toTwenty, type ScorableQuestion } from "@/lib/scoring";

const qcu: ScorableQuestion = { id: "u", format: "single", options: [{ id: "a", correct: true }, { id: "b", correct: false }, { id: "c", correct: false }] };
const qcm: ScorableQuestion = {
  id: "m",
  format: "multiple",
  options: [{ id: "a", correct: true }, { id: "b", correct: true }, { id: "c", correct: true }, { id: "d", correct: true }, { id: "e", correct: false }],
};
const num: ScorableQuestion = { id: "n", format: "numeric", options: [], numericAnswer: 12.5, numericTolerance: 0.1 };

describe("QCU", () => {
  it.each([
    [["a"], "correct", 1],
    [["b"], "wrong", 0],
    [[], "unanswered", 0],
    [["a", "b"], "invalid", 0],
    [["z"], "invalid", 0],
    [["a", "a"], "correct", 1],
  ])("%j -> %s", (sel, status, pts) => {
    const s = scoreQuestion(qcu, { selected: sel as string[] });
    expect(s.status).toBe(status);
    expect(s.points).toBe(pts);
  });
  it("absence de réponse", () => expect(scoreQuestion(qcu, null).status).toBe("unanswered"));
});

describe("Choix multiples, barème analyse documentaire [S1]", () => {
  // 4 réponses attendues : toutes = 1 ; >= 2 sans erreur = 0,5 ; 1 = 0 ; une mauvaise = 0 ; absence = 0.
  it.each([
    [["a", "b", "c", "d"], 1, "correct"],
    [["a", "b", "c"], 0.5, "partial"],
    [["a", "b"], 0.5, "partial"],
    [["a"], 0, "wrong"],
    [["a", "b", "c", "d", "e"], 0, "wrong"],
    [["a", "e"], 0, "wrong"],
    [["e"], 0, "wrong"],
    [[], 0, "unanswered"],
    [["x"], 0, "invalid"],
  ])("%j -> %d", (sel, pts, status) => {
    const s = scoreQuestion(qcm, { selected: sel as string[] }, "doc_partial");
    expect(s.points).toBe(pts);
    expect(s.status).toBe(status);
  });

  it("barème standard : pas de demi-point", () => {
    expect(scoreQuestion(qcm, { selected: ["a", "b", "c"] }, "standard").points).toBe(0);
  });

  it("nombre impair de réponses attendues : la moitié s'arrondit vers le haut", () => {
    const q3: ScorableQuestion = { id: "t", format: "multiple", options: [{ id: "a", correct: true }, { id: "b", correct: true }, { id: "c", correct: true }, { id: "d", correct: false }] };
    expect(scoreQuestion(q3, { selected: ["a"] }, "doc_partial").points).toBe(0); // 1/3 < moitié
    expect(scoreQuestion(q3, { selected: ["a", "b"] }, "doc_partial").points).toBe(0.5); // 2/3 >= moitié
  });
});

describe("Numérique", () => {
  it.each([
    [12.5, "correct"],
    [12.58, "correct"],
    [12.7, "wrong"],
    [null, "unanswered"],
    [Number.NaN, "invalid"],
  ])("%s -> %s", (v, status) => {
    expect(scoreQuestion(num, { selected: [], numericValue: v as number | null }).status).toBe(status);
  });
});

describe("Tentative", () => {
  it("additionne et compte les non-traitées", () => {
    const r = scoreAttempt([qcu, qcm, num], new Map([["u", { selected: ["a"] }], ["m", { selected: ["a", "b"] }]]), "doc_partial");
    expect(r.points).toBe(1.5);
    expect(r.maxPoints).toBe(3);
    expect(r.answered).toBe(2);
    expect(toTwenty(r.points, r.maxPoints)).toBe(10);
  });
});
