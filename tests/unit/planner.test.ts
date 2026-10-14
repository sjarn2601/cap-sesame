import { describe, it, expect } from "vitest";
import { buildPlan, sumMinutesByDate, dayMinutes, type PlannerInput } from "@/lib/planner";
import type { Mastery } from "@/lib/mastery";

const papers = [
  { subject: "DIG", label: "Compétences digitales", minutes: 20 },
  { subject: "FR", label: "Français", minutes: 30 },
  { subject: "MATH", label: "Mathématiques", minutes: 40 },
  { subject: "DOC", label: "Analyse documentaire", minutes: 120 },
];
const skills = [
  { id: "math.pct", subjectCode: "MATH", name: "Pourcentages" },
  { id: "fr.acc", subjectCode: "FR", name: "Accords" },
  { id: "en.tenses", subjectCode: "EN", name: "Temps" },
];

const base = (over: Partial<PlannerInput> = {}): PlannerInput => ({
  today: new Date("2026-10-14T08:00:00Z"),
  examDate: "2027-04-07",
  availability: { mon: 30, tue: 0, wed: 60, thu: 0, fri: 30, sat: 60, sun: 0 },
  rhythm: "intensive",
  blockedPeriods: [],
  skills,
  mastery: new Map<string, Mastery>(),
  lessonsSeen: new Set(),
  dueReviews: 0,
  dailyReviewCap: 10,
  papers,
  coefficients: null,
  ...over,
});

describe("planification", () => {
  it("trois heures par semaine : le plan ne demande jamais plus", () => {
    const input = base();
    const r = buildPlan(input);
    expect(r.status).toBe("ok");
    const total = r.tasks.reduce((a, t) => a + t.minutes, 0);
    expect(total).toBeLessThanOrEqual(180);
    for (const [date, minutes] of sumMinutesByDate(r.tasks)) {
      expect(minutes).toBeLessThanOrEqual(dayMinutes(input, new Date(`${date}T00:00:00Z`)));
    }
  });

  it("le rythme régulier garde une marge", () => {
    const r = buildPlan(base({ rhythm: "regular" }));
    expect(r.tasks.reduce((a, t) => a + t.minutes, 0)).toBeLessThanOrEqual(162);
  });

  it("une date passée déclenche le choix d'une nouvelle session", () => {
    expect(buildPlan(base({ examDate: "2026-04-07" })).status).toBe("session_passed");
  });

  it("coefficients absents : répartition neutre affichée", () => {
    const r = buildPlan(base());
    expect(r.rationale.join(" ")).toContain("neutre");
  });

  it("une simulation longue n'est placée que sur un créneau compatible", () => {
    const r = buildPlan(base());
    for (const t of r.tasks.filter((x) => x.kind === "exam")) {
      expect(t.minutes).toBeLessThanOrEqual(60);
      expect(t.subjectCode).not.toBe("DOC");
    }
  });

  it("les périodes bloquées (examens scolaires) restent vides", () => {
    const r = buildPlan(base({ blockedPeriods: [{ from: "2026-10-14", to: "2026-10-20", label: "Bac blanc" }] }));
    expect(r.tasks).toHaveLength(0);
  });

  it("les tâches accomplies sont conservées au recalcul", () => {
    const kept = [{ id: "x", date: "2026-10-14", kind: "practice" as const, subjectCode: "MATH", skillId: "math.pct", minutes: 30, minMinutes: 10, reason: "", bucket: "priority" as const, done: true }];
    const r = buildPlan(base({ keptTasks: kept }));
    expect(r.tasks.find((t) => t.id === "x")).toBeTruthy();
    expect(sumMinutesByDate(r.tasks).get("2026-10-14")).toBeLessThanOrEqual(60);
  });

  it("les révisions dues arrivent en premier, plafonnées", () => {
    const r = buildPlan(base({ dueReviews: 50 }));
    const today = r.tasks.filter((t) => t.date === "2026-10-14");
    expect(today[0].kind).toBe("review");
    expect(today[0].minutes).toBeLessThanOrEqual(18);
  });
  it("après le diagnostic, une notion ratée passe avant une notion jamais vue", () => {
    const failed: Mastery = { score: null, provisional: true, status: "insufficient", autonomousAttempts: 2, families: 0, distinctDays: 1, explanation: "", observedRate: 0 };
    const r = buildPlan(base({ mastery: new Map([["en.tenses", failed]]) }));
    const first = r.tasks.find((t) => t.bucket === "priority");
    expect(first?.skillId).toBe("en.tenses");
    expect(first?.reason).toContain("premières réponses à revoir");
  });
});
