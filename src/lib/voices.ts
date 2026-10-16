// Choix des voix du journal : les voix anglaises les plus naturelles de l'appareil, une présentatrice et un présentateur.
// Aucune voix de personne réelle n'est imitée : ce sont les voix de synthèse installées sur l'appareil.

const FEMALE = /female|woman|sonia|libby|maisie|hazel|susan|kate|serena|martha|stephanie|samantha|karen|moira|tessa|fiona|jenny|aria|emma|ava|allison|zira|catherine|amy|olivia|natasha|clara|joanna|kendra|salli|ivy|ruth|nicky|zoe|siri female|voice 2/i;
const MALE = /\bmale\b|\bman\b|ryan|thomas|george|daniel|arthur|oliver|alex\b|fred|guy|davis|christopher|eric|rishi|gordon|aaron|\btom\b|brian|david|mark|james|william|liam|matthew|joey|justin|russell|siri male|voice 1/i;

export type Gender = "f" | "m" | "?";
export const genderOf = (v: SpeechSynthesisVoice): Gender => (FEMALE.test(v.name) ? "f" : MALE.test(v.name) ? "m" : "?");

/** Plus la note est haute, plus la voix est naturelle (voix neuronales, améliorées, Google, Siri). */
export function quality(v: SpeechSynthesisVoice) {
  let s = 0;
  if (/natural|neural|online/i.test(v.name)) s += 50;
  if (/premium|enhanced|améliorée|siri/i.test(v.name)) s += 40;
  if (/google/i.test(v.name)) s += 30;
  if (/en[-_]GB/i.test(v.lang)) s += 10;
  if (/compact|espeak|novelty|whisper|bad news|bells|zarvox|trinoids|albert|jester|organ|cellos|bubbles|boing/i.test(v.name)) s -= 100;
  return s;
}

export function englishVoices() {
  if (typeof window === "undefined" || !("speechSynthesis" in window)) return [];
  return window.speechSynthesis
    .getVoices()
    .filter((v) => v.lang.toLowerCase().startsWith("en"))
    .sort((a, b) => quality(b) - quality(a));
}

/** Meilleure présentatrice et meilleur présentateur ; une seule voix disponible : la même, avec un timbre légèrement différent. */
export function pickAnchors(voices: SpeechSynthesisVoice[]) {
  const f = voices.find((v) => genderOf(v) === "f");
  const m = voices.find((v) => genderOf(v) === "m");
  const first = voices[0];
  const anchorA = f ?? first ?? null;
  const anchorB = m ?? voices.find((v) => v !== anchorA) ?? anchorA;
  return { a: anchorA, b: anchorB, sameVoice: !!anchorA && anchorA === anchorB };
}
