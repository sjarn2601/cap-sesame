"use client";
// Programme du jour calculé sur l'appareil (heure de Paris) : même journal en ligne et hors ligne.
import { useEffect, useState } from "react";
import { EN_NEWS_LISTENING, EN_NEWS_REPORTS } from "@/content/bank/en/news-listening";
import { buildProgramme, type Programme } from "@/lib/programme";
import { NewsProgramme } from "./NewsProgramme";

export function DailyJournal() {
  const [programme, setProgramme] = useState<Programme | null | undefined>(undefined);
  useEffect(() => setProgramme(buildProgramme(EN_NEWS_REPORTS, EN_NEWS_LISTENING)), []);
  if (programme === undefined) return <p className="muted">Préparation du journal…</p>;
  if (!programme) return <p className="muted">Le journal n&apos;est pas encore disponible.</p>;
  return <NewsProgramme key={programme.date} programme={programme} />;
}
