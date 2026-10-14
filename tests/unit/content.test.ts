import { describe, expect, it } from "vitest";
import { ALL_LESSONS, ALL_QUESTIONS, ALL_SKILLS, ALL_DOCUMENT_SETS, ALL_NEWS } from "@/content/bank";
import { normalize, qualityChecks } from "@/lib/editorial";

describe("Banque de préparation livrée", () => {
  it("aucune question ne présente de problème bloquant", () => {
    const blocking: string[] = [];
    const seen = new Map<string, string>();
    for (const q of ALL_QUESTIONS) {
      for (const i of qualityChecks({ ...q, numericAnswer: q.numericAnswer ?? null }, [])) if (i.blocking) blocking.push(`${q.questionId} : ${i.message}`);
      const key = normalize(q.stem);
      if (seen.has(key)) blocking.push(`${q.questionId} : doublon exact de ${seen.get(key)}`);
      seen.set(key, q.questionId);
    }
    expect(blocking).toEqual([]);
  });

  it("identifiants uniques, références résolues, un cours par compétence", () => {
    const ids = ALL_QUESTIONS.map((q) => q.questionId);
    expect(new Set(ids).size).toBe(ids.length);
    const skills = new Set(ALL_SKILLS.map((s) => s.id));
    expect(ALL_QUESTIONS.flatMap((q) => q.skillIds).filter((s) => !skills.has(s))).toEqual([]);
    expect(ALL_SKILLS.filter((s) => !ALL_LESSONS.some((l) => l.skillId === s.id)).map((s) => s.id)).toEqual([]);
    const sets = new Set(ALL_DOCUMENT_SETS.map((d) => d.id));
    expect(ALL_QUESTIONS.filter((q) => q.documentSet && !sets.has(q.documentSet)).map((q) => q.questionId)).toEqual([]);
    const slugs = new Set(ALL_NEWS.map((n) => n.slug));
    expect(ALL_QUESTIONS.flatMap((q) => q.references.filter((r) => r.startsWith("news:") && !slugs.has(r.slice(5))))).toEqual([]);
  });

  it("la bonne réponse n'est pas toujours à la même place", () => {
    const single = ALL_QUESTIONS.filter((q) => q.format === "single" && q.questionId.startsWith("B-"));
    const first = single.filter((q) => q.options[0].correct).length;
    expect(first / single.length).toBeLessThan(0.4);
  });
});
