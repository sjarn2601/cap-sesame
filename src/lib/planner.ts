// Planification personnalisée (PLA-01). La somme des tâches d'une journée ne dépasse jamais le temps saisi.
import type { Availability, PlanTask } from "@/db/schema";
import type { Mastery } from "./mastery";
import { addDays, startOfDay } from "./spaced";

export const ALLOCATION = { priority: 0.5, consolidation: 0.3, simulation: 0.2 } as const;
const WEEKDAYS: (keyof Availability)[] = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
const REVIEW_MINUTES_EACH = 2;
const SLOT = 15;
const MIN_SLOT = 10;

export type PlannerSkill = { id: string; subjectCode: string; name: string };
export type PlannerPaper = { subject: string; label: string; minutes: number };

export type PlannerInput = {
  today: Date;
  examDate: string;
  availability: Availability;
  rhythm: "regular" | "intensive";
  blockedPeriods: { from: string; to: string; label: string }[];
  skills: PlannerSkill[];
  mastery: Map<string, Mastery>;
  lessonsSeen: Set<string>;
  dueReviews: number;
  dailyReviewCap: number;
  papers: PlannerPaper[];
  // Coefficients sourcés par matière pour le programme visé ; null = non publiés.
  coefficients: Record<string, number> | null;
  keptTasks?: PlanTask[];
  horizonDays?: number;
  timeExtensionFactor?: number;
};

export type PlannerResult =
  | { status: "ok"; tasks: PlanTask[]; rationale: string[] }
  | { status: "session_passed"; tasks: []; rationale: string[] };

export function dayMinutes(input: Pick<PlannerInput, "availability" | "rhythm" | "blockedPeriods">, d: Date) {
  const iso = d.toISOString().slice(0, 10);
  if (input.blockedPeriods.some((p) => iso >= p.from && iso <= p.to)) return 0;
  const raw = input.availability[WEEKDAYS[d.getUTCDay()]] ?? 0;
  // Le rythme régulier garde une marge de 10 % ; l'intensif utilise tout le temps saisi.
  return Math.floor(input.rhythm === "intensive" ? raw : raw * 0.9);
}

function priorityRank(m: Mastery | undefined) {
  if (!m || m.score === null) {
    // Inconnu : à évaluer, priorité moyenne-haute. Les premières réponses (diagnostic) déplacent un peu ce rang.
    const n = m?.autonomousAttempts ?? 0;
    if (m?.observedRate == null || n === 0) return 0.45;
    return (0.45 * 2 + m.observedRate * n) / (2 + n);
  }
  return m.score;
}

export function buildPlan(input: PlannerInput): PlannerResult {
  const today = startOfDay(input.today);
  const examDay = new Date(`${input.examDate}T00:00:00Z`);
  if (examDay.getTime() < today.getTime()) {
    return { status: "session_passed", tasks: [], rationale: ["La date du concours est passée : choisis une nouvelle session pour recalculer le plan."] };
  }

  const horizon = Math.max(1, Math.min(input.horizonDays ?? 7, Math.round((examDay.getTime() - today.getTime()) / 86_400_000) + 1));
  const rationale: string[] = [
    `Répartition visée : ${ALLOCATION.priority * 100} % compétences prioritaires, ${ALLOCATION.consolidation * 100} % consolidation, ${ALLOCATION.simulation * 100} % simulations et méthode.`,
  ];

  const weight = (subject: string) => {
    if (!input.coefficients) return 1;
    return input.coefficients[subject] ?? 1;
  };
  if (!input.coefficients) {
    rationale.push("Coefficients non publiés pour ce programme : répartition neutre entre matières, sans calcul pondéré.");
  } else {
    rationale.push("Priorités pondérées par les coefficients sourcés du programme visé.");
  }

  // File prioritaire : notions les plus faibles (ou inconnues), pondérées par coefficient.
  const priority = [...input.skills].sort((a, b) => priorityRank(input.mastery.get(a.id)) / weight(a.subjectCode) - priorityRank(input.mastery.get(b.id)) / weight(b.subjectCode));
  const consolidation = input.skills.filter((s) => {
    const st = input.mastery.get(s.id)?.status;
    return st === "in_progress" || st === "probable";
  });

  const kept = (input.keptTasks ?? []).filter((t) => t.done && t.date >= today.toISOString().slice(0, 10));
  const tasks: PlanTask[] = [...kept];
  let pIdx = 0;
  let cIdx = 0;
  let counter = 0;

  // Budget hebdomadaire de simulation, placé sur les jours assez longs.
  const days = Array.from({ length: horizon }, (_, i) => addDays(today, i));
  const caps = new Map(days.map((d) => [d.toISOString().slice(0, 10), dayMinutes(input, d)]));
  for (const t of kept) caps.set(t.date, Math.max(0, (caps.get(t.date) ?? 0) - t.minutes));

  const total = [...caps.values()].reduce((a, b) => a + b, 0);
  let simBudget = Math.floor(total * ALLOCATION.simulation);
  const factor = input.timeExtensionFactor ?? 1;
  const papers = [...input.papers].map((p) => ({ ...p, minutes: Math.ceil(p.minutes * factor) })).sort((a, b) => b.minutes - a.minutes);
  const simDays = new Map<string, PlannerPaper>();
  const byCap = [...caps.entries()].filter(([d]) => d !== today.toISOString().slice(0, 10) || horizon === 1).sort((a, b) => b[1] - a[1]);
  let paperCursor = 0;
  for (const [d, cap] of byCap) {
    if (simBudget < 20) break;
    const fit = papers.slice(paperCursor).concat(papers.slice(0, paperCursor)).find((p) => p.minutes <= cap && p.minutes <= simBudget);
    if (!fit) continue;
    simDays.set(d, fit);
    simBudget -= fit.minutes;
    paperCursor = (papers.indexOf(fit) + 1) % papers.length;
  }
  if (simDays.size === 0 && papers.length) {
    rationale.push("Aucun créneau assez long pour une épreuve complète cette semaine : les simulations sont remplacées par des séries chronométrées courtes.");
  }

  for (const d of days) {
    const iso = d.toISOString().slice(0, 10);
    let rest = caps.get(iso) ?? 0;
    const push = (t: Omit<PlanTask, "id" | "date" | "done">) => {
      tasks.push({ ...t, id: `${iso}-${tasks.length}`, date: iso, done: false });
      rest -= t.minutes;
    };

    if (iso === today.toISOString().slice(0, 10) && input.dueReviews > 0) {
      const n = Math.min(input.dueReviews, input.dailyReviewCap);
      const minutes = Math.min(n * REVIEW_MINUTES_EACH, Math.floor(rest * 0.3));
      if (minutes >= 5) {
        push({ kind: "review", subjectCode: null, skillId: null, minutes, minMinutes: 5, bucket: "consolidation", reason: `${n} révision(s) d'erreurs arrivées à échéance.` });
      }
    }

    const sim = simDays.get(iso);
    if (sim && sim.minutes <= rest) {
      push({ kind: "exam", subjectCode: sim.subject, skillId: null, minutes: sim.minutes, minMinutes: sim.minutes, bucket: "simulation", reason: `Simulation chronométrée : ${sim.label} (${sim.minutes} min).` });
    }

    while (rest >= MIN_SLOT && input.skills.length > 0) {
      const minutes = Math.min(SLOT, rest);
      // 5 créneaux prioritaires pour 3 de consolidation (50/30).
      const usePriority = consolidation.length === 0 || counter % 8 < 5;
      counter++;
      if (usePriority) {
        const s = priority[pIdx++ % priority.length];
        const m = input.mastery.get(s.id);
        const lesson = !input.lessonsSeen.has(s.id) && (!m || m.status === "insufficient" || m.status === "fragile");
        push({
          kind: lesson ? "lesson" : "practice",
          subjectCode: s.subjectCode,
          skillId: s.id,
          minutes,
          minMinutes: MIN_SLOT,
          bucket: "priority",
          reason: m?.status === "fragile" ? `${s.name} : notion fragile (${Math.round((m.score ?? 0) * 100)} %).` : m?.score == null && m?.observedRate != null && m.observedRate < 0.5 ? `${s.name} : premières réponses à revoir (${Math.round(m.observedRate * m.autonomousAttempts)}/${m.autonomousAttempts}).` : m?.score == null ? `${s.name} : encore peu de données, à évaluer.` : `${s.name} : à renforcer.`,
        });
      } else {
        const s = consolidation[cIdx++ % consolidation.length];
        push({ kind: "practice", subjectCode: s.subjectCode, skillId: s.id, minutes, minMinutes: MIN_SLOT, bucket: "consolidation", reason: `${s.name} : consolider avec des variantes nouvelles.` });
      }
    }
  }

  return { status: "ok", tasks, rationale };
}

export function sumMinutesByDate(tasks: PlanTask[]) {
  const m = new Map<string, number>();
  for (const t of tasks) m.set(t.date, (m.get(t.date) ?? 0) + t.minutes);
  return m;
}
