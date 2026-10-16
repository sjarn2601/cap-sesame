/** Choisit l'élément du jour : le même toute la journée (heure de Paris), un nouveau chaque jour. */
export function pickOfTheDay<T>(items: T[], now = new Date()): T | null {
  if (items.length === 0) return null;
  const day = now.toLocaleDateString("fr-CA", { timeZone: "Europe/Paris" });
  const n = Math.floor(Date.parse(`${day}T00:00:00Z`) / 86_400_000);
  return items[((n % items.length) + items.length) % items.length];
}

export const BBC_LINKS = [
  { label: "BBC Learning English", detail: "épisodes courts pour apprendre avec l'actualité (rubriques « News Review » et « 6 Minute English »)", url: "https://www.bbc.co.uk/learningenglish/" },
  { label: "BBC News · World", detail: "l'actualité internationale en anglais, textes et vidéos", url: "https://www.bbc.com/news/world" },
] as const;
