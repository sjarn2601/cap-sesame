import { describe, it, expect } from "vitest";
import { betaCdf, difficultyFlag, estimateSkill } from "@/lib/estimation";

const ev = (correct: boolean, difficulty = 2, autonomous = true, i = 0) => ({ at: new Date(Date.UTC(2026, 9, 1 + i)), correct, autonomous, difficulty });

describe("ADA-02 : estimation probabiliste", () => {
  it("loi bêta : répartition cohérente", () => {
    expect(betaCdf(0.5, 1, 1)).toBeCloseTo(0.5, 2);
    expect(betaCdf(0.5, 10, 2)).toBeLessThan(0.05);
  });

  it("données insuffisantes : pas d'estimation", () => {
    expect(estimateSkill([ev(true), ev(true)]).status).toBe("insufficient");
  });

  it("les réponses aidées ne gonflent pas l'estimation", () => {
    const aided = Array.from({ length: 10 }, (_, i) => ev(true, 2, false, i));
    const own = [ev(false, 2, true, 11), ev(false, 2, true, 12), ev(true, 2, true, 13)];
    const e = estimateSkill([...aided, ...own]);
    expect(e.mean!).toBeLessThan(0.5);
  });

  it("une réussite difficile pèse plus qu'une réussite facile", () => {
    const hard = estimateSkill(Array.from({ length: 6 }, (_, i) => ev(i % 2 === 0, 3, true, i)));
    const easy = estimateSkill(Array.from({ length: 6 }, (_, i) => ev(i % 2 === 0, 1, true, i)));
    expect(hard.mean!).toBeGreaterThan(easy.mean!);
  });

  it("beaucoup de réussites : maîtrise probable avec intervalle resserré", () => {
    const e = estimateSkill(Array.from({ length: 20 }, (_, i) => ev(i !== 3, 2, true, i)));
    expect(e.status).toBe("probable");
    expect(e.low!).toBeLessThan(e.mean!);
    expect(e.high!).toBeGreaterThan(e.mean!);
    expect(e.explanation).toMatch(/8 chances sur 10/);
  });

  it("analyse de difficulté : seulement avec assez de réponses", () => {
    expect(difficultyFlag(1, 0.3, 5)).toBeNull();
    expect(difficultyFlag(1, 0.3, 40)).toBe("plus difficile que prévu");
    expect(difficultyFlag(3, 0.95, 40)).toBe("plus facile que prévu");
    expect(difficultyFlag(2, 0.6, 40)).toBeNull();
  });
});
