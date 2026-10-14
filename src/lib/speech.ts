// Synthèse et reconnaissance vocales du navigateur (REV-02, LAN-02). Aucun audio n'est envoyé à CAP SESAME.

export const SPEECH_LANG: Record<string, string> = {
  EN: "en-GB",
  "LV-ES": "es-ES",
  "LV-DE": "de-DE",
  "LV-AR": "ar-SA",
  "LV-ZH": "zh-CN",
  "LV-HE": "he-IL",
  "LV-IT": "it-IT",
  "LV-JA": "ja-JP",
  FR: "fr-FR",
};

export const speechLang = (subjectCode: string | null | undefined) => (subjectCode ? SPEECH_LANG[subjectCode] ?? null : null);

export function canSpeak() {
  return typeof window !== "undefined" && "speechSynthesis" in window;
}

export function speak(text: string, lang: string, rate = 1) {
  if (!canSpeak()) return false;
  window.speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = lang;
  u.rate = rate;
  const voice = window.speechSynthesis.getVoices().find((v) => v.lang.toLowerCase().startsWith(lang.slice(0, 2).toLowerCase()));
  if (voice) u.voice = voice;
  window.speechSynthesis.speak(u);
  return true;
}

/** Compare une lecture transcrite au texte attendu, mot à mot, sans tenir compte des accents ni de la ponctuation. */
export function compareReading(expected: string, heard: string) {
  const norm = (t: string) =>
    t
      .toLowerCase()
      .normalize("NFD")
      .replace(/\p{M}/gu, "")
      .replace(/[^\p{L}\p{N}\s']/gu, " ")
      .split(/\s+/)
      .filter(Boolean);
  const exp = norm(expected);
  const got = new Set(norm(heard));
  const missed = exp.filter((w) => !got.has(w));
  return { total: exp.length, matched: exp.length - missed.length, missed: [...new Set(missed)], ratio: exp.length ? (exp.length - missed.length) / exp.length : 0 };
}
