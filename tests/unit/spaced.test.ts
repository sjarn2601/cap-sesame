import { describe, it, expect } from "vitest";
import { onError, onSuccess, pickDueReviews, inferCause, needsLessonRedirect, addDays } from "@/lib/spaced";

const now = new Date("2026-10-14T09:00:00Z");

describe("révisions espacées", () => {
  it("une réponse fausse génère une révision datée au lendemain", () => {
    const s = onError(null, now);
    expect(s.dueAt.toISOString()).toBe("2026-10-15T00:00:00.000Z");
    expect(s.status).toBe("open");
  });

  it("intervalles 1, 3, 7, 21 jours puis fermeture sur une variante nouvelle", () => {
    let s = onError(null, now);
    s = onSuccess(s, now, { newContext: true });
    expect(s.dueAt).toEqual(addDays(now, 3));
    s = onSuccess(s, now, { newContext: true });
    expect(s.dueAt).toEqual(addDays(now, 7));
    s = onSuccess(s, now, { newContext: true });
    expect(s.dueAt).toEqual(addDays(now, 21));
    s = onSuccess(s, now, { newContext: true });
    expect(s.status).toBe("closed");
  });

  it("réussir la question originale ne ferme pas la lacune", () => {
    let s = { stage: 3, consecutiveFailures: 0, dueAt: now, status: "open" as const };
    s = onSuccess(s, now, { newContext: false }) as typeof s;
    expect(s.status).toBe("open");
  });

  it("confiance faible : pas d'avancée", () => {
    const s = onSuccess({ stage: 1, consecutiveFailures: 0, dueAt: now, status: "open" }, now, { newContext: true, confidence: 1 });
    expect(s.stage).toBe(1);
  });

  it("échecs répétés : orientation vers le cours", () => {
    let s = onError(null, now);
    s = onError(s, now);
    s = onError(s, now);
    expect(needsLessonRedirect(s)).toBe(true);
  });

  it("retour après deux semaines : la journée reste dans le budget", () => {
    const items = Array.from({ length: 40 }, (_, i) => ({ dueAt: new Date(now.getTime() - (i + 1) * 3_600_000 * 8), status: "open" as const }));
    const { today, backlog } = pickDueReviews(items, now, 10);
    expect(today).toHaveLength(10);
    expect(backlog).toBe(30);
    expect(today[0].dueAt.getTime()).toBeLessThan(today[9].dueAt.getTime());
  });

  it("cause probable", () => {
    expect(inferCause(3000, 60)).toBe("reading");
    expect(inferCause(30000, 60)).toBe("knowledge");
    expect(inferCause(120000, 60)).toBe("time");
  });
});
