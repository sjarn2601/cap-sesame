// Sélection adaptative explicable (ADA-01). Règles simples : compétence, historique, difficulté, fraîcheur.

export type Candidate = {
  id: string;
  questionId: string;
  familyId: string;
  skillIds: string[];
  difficulty: number;
};

export type SelectionContext = {
  // Questions (identifiant stable) déjà vues par l'élève, avec date de dernière vue.
  seenQuestions: Map<string, Date>;
  seenFamilies: Set<string>;
  // Score de maîtrise par compétence (null = inconnu).
  skillScore: Map<string, number | null>;
  targetSkill?: string | null;
  now: Date;
};

export type Selected = Candidate & { reason: string; novelty: "new" | "variant" | "seen" };

// Générateur pseudo-aléatoire déterministe pour des tirages reproductibles en test.
export function seeded(seed: number) {
  let s = seed >>> 0 || 1;
  return () => {
    s ^= s << 13;
    s ^= s >>> 17;
    s ^= s << 5;
    return ((s >>> 0) % 1_000_000) / 1_000_000;
  };
}

function targetDifficulty(score: number | null | undefined) {
  if (score === null || score === undefined) return 2;
  if (score < 0.5) return 1;
  if (score < 0.8) return 2;
  return 3;
}

export function selectQuestions(candidates: Candidate[], ctx: SelectionContext, count: number, rand = Math.random): Selected[] {
  const weakSkills = new Set([...ctx.skillScore.entries()].filter(([, s]) => s !== null && s < 0.6).map(([k]) => k));

  const scored = candidates.map((c) => {
    const lastSeen = ctx.seenQuestions.get(c.questionId);
    const novelty: Selected["novelty"] = lastSeen ? "seen" : ctx.seenFamilies.has(c.familyId) ? "variant" : "new";
    const skill = c.skillIds[0];
    const score = ctx.skillScore.get(skill);
    let w = 1;
    const reasons: string[] = [];
    if (ctx.targetSkill && c.skillIds.includes(ctx.targetSkill)) {
      w += 3;
      reasons.push("compétence du jour");
    }
    if (weakSkills.has(skill)) {
      w += 2;
      reasons.push("notion fragile");
    } else if (score === null || score === undefined) {
      w += 1;
      reasons.push("notion encore peu évaluée");
    }
    if (novelty === "new") w += 1.5;
    if (novelty === "seen") {
      const days = (ctx.now.getTime() - lastSeen!.getTime()) / 86_400_000;
      w *= days < 3 ? 0.05 : 0.4; // éviter la mémorisation des mêmes réponses
      reasons.push("déjà vue");
    }
    w *= c.difficulty === targetDifficulty(score) ? 1.5 : 1;
    return { c, w: w * (0.75 + rand() * 0.5), novelty, reasons };
  });

  scored.sort((a, b) => b.w - a.w);

  // Une série n'est pas composée uniquement de points faibles : on garde au moins un tiers de questions hors notions fragiles.
  const result: Selected[] = [];
  const usedFamilies = new Set<string>();
  const minOther = weakSkills.size > 0 ? Math.ceil(count / 3) : 0;
  const isWeak = (c: Candidate) => weakSkills.has(c.skillIds[0]);
  const take = (pred: (x: (typeof scored)[number]) => boolean, limit: number) => {
    for (const s of scored) {
      if (result.length >= count || limit <= 0) break;
      if (result.some((r) => r.id === s.c.id) || usedFamilies.has(s.c.familyId) || !pred(s)) continue;
      usedFamilies.add(s.c.familyId);
      result.push({ ...s.c, novelty: s.novelty, reason: s.reasons.join(", ") || "équilibre de la série" });
      limit--;
    }
  };
  take((s) => !isWeak(s.c), minOther);
  take(() => true, count);
  // S'il manque des familles distinctes, on complète avec des variantes.
  if (result.length < count) {
    usedFamilies.clear();
    take(() => true, count - result.length);
  }
  return result.slice(0, count);
}
