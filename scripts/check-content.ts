// Contrôle de la banque de contenus avant publication : npx tsx scripts/check-content.ts [MATH|DIG|...]
// Sort en erreur si un problème bloquant est trouvé.
import { SUBJECTS } from "@/content/demo-catalog";
import { assemble } from "@/content/bank/assemble";
import type { SubjectBank } from "@/content/bank/helpers";
import { qualityChecks } from "@/lib/editorial";

// Avec une matière en argument, seul son fichier est chargé : un autre fichier en cours d'écriture ne gêne pas.
const only = process.argv[2]?.toUpperCase();
const FILES: Record<string, string> = {
  MATH: "math",
  DIG: "dig",
  ACT: "act",
  FR: "fr",
  EN: "en",
  DE: "de",
  ES: "es",
  DOC: "doc",
};
async function main() {
  const BANKS: Record<string, SubjectBank> = {};
  for (const [code, file] of Object.entries(FILES)) {
    if (only && only !== code) continue;
    const mod = await import(`../src/content/bank/${file}`);
    BANKS[code] = mod[`BANK_${code}`];
  }
  const {
    skills: ALL_SKILLS,
    lessons: ALL_LESSONS,
    questions: ALL_QUESTIONS,
    documentSets: ALL_DOCUMENT_SETS,
    news: ALL_NEWS,
    languageExercises: ALL_LANGUAGE_EXERCISES,
  } = assemble(BANKS);
  const errors: string[] = [];
  const warnings: string[] = [];
  const err = (m: string) => errors.push(m);
  const warn = (m: string) => warnings.push(m);

  const subjectCodes = new Set(SUBJECTS.map((s) => s.code));
  const skillIds = new Set<string>();
  for (const s of ALL_SKILLS) {
    if (skillIds.has(s.id)) err(`Compétence en double : ${s.id}`);
    skillIds.add(s.id);
    if (!subjectCodes.has(s.subjectCode))
      err(`Compétence ${s.id} : matière inconnue ${s.subjectCode}`);
  }

  const ANCHORS = new Set([
    "regle",
    "formules",
    "methode",
    "exemple",
    "erreur",
    "approfondir",
    null,
  ]);
  const lessonSkills = new Set<string>();
  for (const l of ALL_LESSONS) {
    if (!skillIds.has(l.skillId))
      err(`Cours « ${l.title} » : compétence inconnue ${l.skillId}`);
    if (lessonSkills.has(l.skillId))
      err(`Deux cours pour la compétence ${l.skillId}`);
    lessonSkills.add(l.skillId);
    for (const k of ["regle", "exemple", "erreur", "approfondir"] as const)
      if (!l[k]?.trim()) err(`Cours ${l.skillId} : section ${k} vide`);
    if (!l.objectives.length) err(`Cours ${l.skillId} : objectifs manquants`);
    for (const p of l.prerequisites ?? [])
      if (!skillIds.has(p)) err(`Cours ${l.skillId} : prérequis inconnu ${p}`);
    if (l.cards.length < 2 && !l.isDemo)
      warn(`Cours ${l.skillId} : moins de deux cartes`);
  }
  for (const s of ALL_SKILLS)
    if (!lessonSkills.has(s.id)) err(`Compétence ${s.id} sans cours`);

  const exIds = new Set<string>();
  for (const x of ALL_LANGUAGE_EXERCISES) {
    if (exIds.has(x.exerciseId))
      err(`Exercice de langue en double : ${x.exerciseId}`);
    exIds.add(x.exerciseId);
    if (!subjectCodes.has(x.subjectCode))
      err(`Exercice ${x.exerciseId} : matière inconnue`);
    if (
      x.kind === "listening" &&
      (!x.question || (x.options ?? []).filter((o) => o.correct).length !== 1)
    )
      err(
        `Exercice ${x.exerciseId} : écoute sans question ou sans bonne réponse unique`,
      );
    if (x.kind === "conversation" && !(x.prompts ?? []).length)
      err(`Exercice ${x.exerciseId} : conversation sans relances`);
  }

  const docIds = new Set<string>();
  for (const d of ALL_DOCUMENT_SETS) {
    if (docIds.has(d.id)) err(`Dossier en double : ${d.id}`);
    docIds.add(d.id);
    d.documents.forEach((doc, i) => {
      if (doc.num !== i + 1)
        err(`Dossier ${d.id} : numérotation des documents`);
      if (doc.kind === "text" && !doc.paragraphs?.length)
        err(`Dossier ${d.id} doc ${doc.num} : texte vide`);
      if (doc.kind === "table" && !doc.table?.rows.length)
        err(`Dossier ${d.id} doc ${doc.num} : tableau vide`);
      if (doc.kind === "chart" && !doc.chart?.points.length)
        err(`Dossier ${d.id} doc ${doc.num} : graphique vide`);
    });
  }

  const slugs = new Set<string>();
  for (const n of ALL_NEWS) {
    if (!n.slug) err(`Fiche « ${n.title} » sans slug`);
    else if (slugs.has(n.slug)) err(`Slug d'actualité en double : ${n.slug}`);
    slugs.add(n.slug);
    if (!n.sources.length || n.sources.some((s) => !/^https:\/\//.test(s.url)))
      err(`Fiche ${n.slug} : source manquante ou non https`);
    if (!/^\d{4}-\d{2}-\d{2}$/.test(n.eventDate))
      err(`Fiche ${n.slug} : date ${n.eventDate}`);
  }

  const ids = new Set<string>();
  const stems: { questionId: string; stem: string }[] = [];
  for (const q of ALL_QUESTIONS) {
    const where = q.questionId;
    if (ids.has(q.questionId)) err(`Identifiant en double : ${where}`);
    ids.add(q.questionId);
    if (!subjectCodes.has(q.subjectCode))
      err(`${where} : matière inconnue ${q.subjectCode}`);
    for (const s of q.skillIds) {
      if (!skillIds.has(s)) err(`${where} : compétence inconnue ${s}`);
      else if (
        ALL_SKILLS.find((k) => k.id === s)!.subjectCode !== q.subjectCode
      )
        err(`${where} : compétence ${s} d'une autre matière`);
    }
    if (!ANCHORS.has(q.lessonAnchor)) err(`${where} : ancre ${q.lessonAnchor}`);
    if (q.documentSet && !docIds.has(q.documentSet))
      err(`${where} : dossier inconnu ${q.documentSet}`);
    if (q.subjectCode === "DOC" && !q.documentSet)
      warn(`${where} : question d'analyse documentaire sans dossier`);
    if (q.difficulty < 1 || q.difficulty > 3)
      err(`${where} : difficulté ${q.difficulty} hors 1-3`);
    if (
      q.format !== "numeric" &&
      (q.options.length < 3 || q.options.length > 6)
    )
      err(`${where} : ${q.options.length} options`);
    for (const r of q.references)
      if (r.startsWith("news:") && !slugs.has(r.slice(5)))
        err(`${where} : fiche d'actualité inconnue ${r}`);
    if (q.questionId.startsWith("B-") && q.hints.length !== 3)
      err(`${where} : trois indices gradués attendus (${q.hints.length})`);
    for (const i of qualityChecks(
      { ...q, numericAnswer: q.numericAnswer ?? null },
      stems,
    ))
      (i.blocking ? err : warn)(`${where} : ${i.message}`);
    stems.push({ questionId: q.questionId, stem: q.stem });
  }

  // Bilan par matière.
  const rows: string[] = [];
  for (const [code, bank] of Object.entries(BANKS)) {
    if (only && only !== code) continue;
    const subj = code === "ES" ? "LV-ES" : code === "DE" ? "LV-DE" : code;
    const qs = ALL_QUESTIONS.filter((q) => q.subjectCode === subj);
    const skills = ALL_SKILLS.filter((s) => s.subjectCode === subj);
    const bySkill = skills.map(
      (s) =>
        [s.id, qs.filter((q) => q.skillIds.includes(s.id)).length] as const,
    );
    const thin = bySkill
      .filter(([, n]) => n < 6)
      .map(([id, n]) => `${id}:${n}`);
    if (thin.length)
      warn(
        `${code} : compétences avec moins de 6 questions → ${thin.join(", ")}`,
      );
    const correctPos = qs
      .filter((q) => q.format === "single")
      .map((q) => q.options.findIndex((o) => o.correct));
    const pos = [0, 1, 2, 3].map(
      (i) => correctPos.filter((p) => p === i).length,
    );
    rows.push(
      `${code.padEnd(5)} compétences ${String(skills.length).padStart(3)} · cours ${String(ALL_LESSONS.filter((l) => skills.some((s) => s.id === l.skillId)).length).padStart(3)} · questions ${String(qs.length).padStart(4)} (banque ${bank.questions.length}, réservées ${qs.filter((q) => q.reserved).length}, QCM ${qs.filter((q) => q.format === "multiple").length}) · position bonne réponse ${pos.join("/")}`,
    );
  }

  const filt = (xs: string[]) => {
    if (!only) return xs;
    const subj = only === "ES" ? "LV-ES" : only === "DE" ? "LV-DE" : only;
    const prefixes = ALL_SKILLS.filter((k) => k.subjectCode === subj).map(
      (k) => k.id,
    );
    const qids = new Set(
      ALL_QUESTIONS.filter((q) => q.subjectCode === subj).map(
        (q) => q.questionId,
      ),
    );
    return xs.filter(
      (m) =>
        m.startsWith(`${only} `) ||
        qids.has(m.split(" ")[0]) ||
        prefixes.some((p) => m.includes(p)) ||
        (subj === "DOC" && m.includes("Dossier")) ||
        (subj === "ACT" && m.includes("Fiche")),
    );
  };
  console.log(rows.join("\n"));
  const w = filt(warnings);
  const e = filt(errors);
  if (w.length)
    console.log(
      `\n${w.length} avertissement(s) :\n- ${w.slice(0, 80).join("\n- ")}`,
    );
  if (e.length) {
    console.log(
      `\n${e.length} erreur(s) bloquante(s) :\n- ${e.slice(0, 120).join("\n- ")}`,
    );
    process.exit(1);
  }
  console.log("\nAucune erreur bloquante.");
}

main();
