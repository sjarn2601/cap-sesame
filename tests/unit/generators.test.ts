// MAT-01 : les générateurs ne produisent ni division impossible, ni ambiguïté, ni réponse absente des choix.
import { describe, it, expect } from "vitest";
import { GENERATORS } from "@/lib/generators";

describe.each(Object.entries(GENERATORS))("%s", (_, gen) => {
  it("200 graines : une seule bonne réponse, options distinctes, valeurs finies", () => {
    for (let seed = 1; seed <= 200; seed++) {
      const q = gen(seed);
      expect(q.options).toHaveLength(4);
      expect(q.options.filter((o) => o.correct)).toHaveLength(1);
      expect(new Set(q.options.map((o) => o.text)).size).toBe(4);
      const all = [q.stem, q.explanation, ...q.options.map((o) => o.text)].join(" ");
      expect(all).not.toMatch(/NaN|Infinity|undefined/);
      expect(q.options.every((o) => o.justification.length > 10)).toBe(true);
      expect(q.hints).toHaveLength(3);
    }
  });
  it("déterministe pour une graine donnée", () => {
    expect(gen(7)).toEqual(gen(7));
  });
});

describe("pourcentage : vérification du calcul", () => {
  it("la bonne option correspond au calcul (final - initial) / initial", () => {
    for (let seed = 1; seed <= 100; seed++) {
      const q = GENERATORS.percentChange(seed);
      const [, a, b] = q.stem.match(/de ([\d,]+) € à ([\d,]+) €/)!;
      const start = Number(a.replace(",", "."));
      const end = Number(b.replace(",", "."));
      const expected = Math.round(((end - start) / start) * 1000) / 10;
      const correct = q.options.find((o) => o.correct)!.text;
      expect(Number(correct.replace(/[+ %]/g, "").replace(",", "."))).toBeCloseTo(expected, 5);
    }
  });
});
