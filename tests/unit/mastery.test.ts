import { describe, it, expect } from "vitest";
import { computeMastery, type MasteryEvent } from "@/lib/mastery";

const ev = (day: number, correct: boolean, family: string, autonomous = true): MasteryEvent => ({ at: new Date(Date.UTC(2026, 9, day, 10)), correct, autonomous, familyId: family });

describe("maîtrise", () => {
  it("cinq questions ne donnent jamais une maîtrise certaine", () => {
    const m = computeMastery([1, 2, 3, 4, 5].map((d) => ev(d, true, `f${d}`)));
    expect(m.status).toBe("insufficient");
    expect(m.provisional).toBe(true);
  });

  it("maîtrise probable : 8 tentatives autonomes, 3 familles, 2 jours", () => {
    const events = Array.from({ length: 8 }, (_, i) => ev(1 + (i % 2), true, `f${i % 3}`));
    const m = computeMastery(events);
    expect(m.status).toBe("probable");
  });

  it("les réponses aidées ne gonflent pas la maîtrise autonome", () => {
    const aided = Array.from({ length: 20 }, (_, i) => ev(1 + (i % 4), true, `f${i % 5}`, false));
    const m = computeMastery([...aided, ev(5, false, "f1"), ev(5, false, "f2"), ev(5, false, "f3")]);
    expect(m.autonomousAttempts).toBe(3);
    expect(m.status).toBe("insufficient");
  });

  it("un seul jour de pratique ne suffit pas", () => {
    const m = computeMastery(Array.from({ length: 10 }, (_, i) => ev(1, true, `f${i % 3}`)));
    expect(m.status).toBe("insufficient");
    expect(m.explanation).toContain("jour");
  });

  it("notion fragile", () => {
    const events = Array.from({ length: 10 }, (_, i) => ev(1 + (i % 3), i < 2, `f${i % 4}`));
    expect(computeMastery([...events, ev(4, true, "f9")]).status).toBe("fragile");
  });
});
