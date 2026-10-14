// Générateurs de variantes mathématiques (MAT-01) : paramètres contraints, solveur déterministe,
// distracteurs issus d'erreurs plausibles documentées.
import { seeded } from "./adaptive";

export type GeneratedQuestion = {
  stem: string;
  options: { id: string; text: string; correct: boolean; justification: string }[];
  explanation: string;
  rule: string;
  hints: string[];
};

const fmt = (n: number) => (Number.isInteger(n) ? String(n) : n.toFixed(2).replace(/0+$/, "").replace(/\.$/, "")).replace(".", ",");
const ids = ["a", "b", "c", "d"];

function shuffle<T>(arr: T[], rand: () => number) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function assemble(correct: { text: string; justification: string }, distractors: { text: string; justification: string }[], rand: () => number) {
  const all = [{ ...correct, correct: true }, ...distractors.map((d) => ({ ...d, correct: false }))];
  // Aucune ambiguïté : les textes des options doivent être distincts.
  const unique = all.filter((o, i) => all.findIndex((x) => x.text === o.text) === i);
  if (unique.length !== all.length) throw new Error("Options en double : paramètres rejetés");
  return shuffle(all, rand).map((o, i) => ({ id: ids[i], ...o }));
}

/** Variation relative entre deux valeurs : distracteurs = écart absolu, division par la valeur finale, inversion. */
export function percentChange(seed: number): GeneratedQuestion {
  const rand = seeded(seed);
  for (let tries = 0; tries < 50; tries++) {
    const start = [20, 25, 40, 50, 80, 120, 150, 200, 250, 400][Math.floor(rand() * 10)];
    const pct = [5, 10, 15, 20, 25, 30, 40, 50, 60, 75][Math.floor(rand() * 10)] * (rand() < 0.3 ? -1 : 1);
    const end = (start * (100 + pct)) / 100;
    if (!Number.isInteger(end) || end <= 0) continue;
    const diff = end - start;
    const wrongFinal = Math.round((diff / end) * 1000) / 10;
    const distractors = [
      { text: `${diff > 0 ? "+" : ""}${fmt(diff)} %`, justification: `Confusion entre écart absolu (${fmt(diff)} €) et variation en pourcentage.` },
      { text: `${wrongFinal > 0 ? "+" : ""}${fmt(wrongFinal)} %`, justification: "Division par la valeur finale au lieu de la valeur de départ." },
      { text: `${-pct > 0 ? "+" : ""}${fmt(-pct)} %`, justification: "Sens de la variation inversé." },
    ].filter((d) => d.text !== `${pct > 0 ? "+" : ""}${fmt(pct)} %`);
    if (distractors.length < 3) continue;
    try {
      return {
        stem: `Le prix d'un article passe de ${fmt(start)} € à ${fmt(end)} €. Quelle est sa variation en pourcentage ?`,
        options: assemble({ text: `${pct > 0 ? "+" : ""}${fmt(pct)} %`, justification: `(${fmt(end)} − ${fmt(start)}) / ${fmt(start)} = ${fmt(pct / 100)}, soit ${fmt(pct)} %.` }, distractors, rand),
        explanation: `Variation relative = (valeur finale − valeur initiale) / valeur initiale = (${fmt(end)} − ${fmt(start)}) / ${fmt(start)} = ${fmt(pct / 100)}. Contrôle : ${fmt(start)} × ${fmt(1 + pct / 100)} = ${fmt(end)}.`,
        rule: "Une variation en pourcentage se calcule toujours par rapport à la valeur de départ.",
        hints: ["Rappel : la variation relative compare l'écart à la valeur de départ.", `Commence par calculer l'écart : ${fmt(end)} − ${fmt(start)}.`, `Divise cet écart par ${fmt(start)} puis multiplie par 100.`],
      };
    } catch {
      continue;
    }
  }
  throw new Error("Aucun paramètre valide trouvé");
}

/** Points de pourcentage vs pourcentage : un taux passe de a % à b %. */
export function percentagePoints(seed: number): GeneratedQuestion {
  const rand = seeded(seed);
  for (let tries = 0; tries < 50; tries++) {
    const a = [10, 20, 25, 40, 50][Math.floor(rand() * 5)];
    const delta = [2, 5, 10][Math.floor(rand() * 3)];
    const b = a + delta;
    const rel = (delta / a) * 100;
    if (!Number.isInteger(rel * 10)) continue;
    try {
      return {
        stem: `Le taux de participation à une élection passe de ${a} % à ${b} %. Quelle affirmation est exacte ?`,
        options: assemble(
          { text: `Le taux a augmenté de ${delta} points de pourcentage, soit une hausse relative de ${fmt(rel)} %.`, justification: `Écart : ${b} − ${a} = ${delta} points ; hausse relative : ${delta} / ${a} = ${fmt(rel)} %.` },
          [
            { text: `Le taux a augmenté de ${delta} %.`, justification: "Confond points de pourcentage et pourcentage : la hausse relative n'est pas égale à l'écart." },
            { text: `Le taux a augmenté de ${fmt(rel)} points de pourcentage.`, justification: "Inverse les deux notions : l'écart en points est la différence simple." },
            { text: `Le taux a été multiplié par ${fmt(b / a)} et a donc doublé.`, justification: `Un coefficient multiplicateur de ${fmt(b / a)} n'est pas un doublement.` },
          ],
          rand,
        ),
        explanation: `Entre deux taux, la différence s'exprime en points de pourcentage (${b} − ${a} = ${delta} points). La variation relative compare cette différence au taux initial : ${delta} / ${a} = ${fmt(rel)} %.`,
        rule: "Différence entre deux pourcentages = points de pourcentage ; variation relative = écart / valeur initiale.",
        hints: ["Deux notions coexistent : écart en points et variation relative.", `Calcule d'abord ${b} − ${a}.`, `Divise ensuite cet écart par ${a}.`],
      };
    } catch {
      continue;
    }
  }
  throw new Error("Aucun paramètre valide trouvé");
}

/** Proportionnalité (règle de trois). */
export function proportion(seed: number): GeneratedQuestion {
  const rand = seeded(seed);
  for (let tries = 0; tries < 50; tries++) {
    const qty = [2, 3, 4, 5, 6, 8][Math.floor(rand() * 6)];
    const unit = [1.5, 2, 2.5, 3, 4, 12][Math.floor(rand() * 6)];
    const target = [5, 7, 9, 10, 12, 15][Math.floor(rand() * 6)];
    if (target === qty) continue;
    const price = qty * unit;
    const answer = target * unit;
    const additive = price + (target - qty);
    try {
      return {
        stem: `${qty} cahiers coûtent ${fmt(price)} €. Combien coûtent ${target} cahiers au même prix unitaire ?`,
        options: assemble(
          { text: `${fmt(answer)} €`, justification: `Prix unitaire ${fmt(price)} / ${qty} = ${fmt(unit)} € ; ${target} × ${fmt(unit)} = ${fmt(answer)} €.` },
          [
            { text: `${fmt(additive)} €`, justification: "Raisonnement additif : on a ajouté la différence de quantité au prix au lieu de multiplier." },
            { text: `${fmt(Math.round(((price * qty) / target) * 100) / 100)} €`, justification: "Rapport inversé : la quantité et le prix varient dans le même sens." },
            { text: `${fmt(price * target)} €`, justification: "Le prix total a été multiplié par la quantité, au lieu du prix unitaire." },
          ],
          rand,
        ),
        explanation: `Situation de proportionnalité : on calcule le prix unitaire (${fmt(price)} / ${qty} = ${fmt(unit)} €), puis ${target} × ${fmt(unit)} = ${fmt(answer)} €. Contrôle : plus de cahiers, prix plus élevé.`,
        rule: "En situation de proportionnalité, on passe par l'unité ou par le coefficient de proportionnalité.",
        hints: ["Le prix est-il proportionnel au nombre de cahiers ?", "Calcule le prix d'un seul cahier.", `Multiplie ce prix unitaire par ${target}.`],
      };
    } catch {
      continue;
    }
  }
  throw new Error("Aucun paramètre valide trouvé");
}

export const GENERATORS = { percentChange, percentagePoints, proportion };
