// Données de démonstration : comptes fictifs, session 2027, catalogue et banque originale.
import "./env";
import { randomBytes } from "node:crypto";
import { eq } from "drizzle-orm";
import { getDb, closeDb } from "@/db";
import * as s from "@/db/schema";
import { hashPassword } from "@/lib/password";
import { qualityChecks } from "@/lib/editorial";
import { DEMO_QUESTIONS } from "@/content/demo-questions";
import { SUBJECTS, SKILLS, LESSONS, lessonSections, DOCUMENT_SET, NEWS, SESSION_2027, PROGRAM_SHEETS, NEWS_EXTRA, LANGUAGE_EXERCISES } from "@/content/demo-catalog";

const LOCAL_TOTP_SECRET = "JBSWY3DPEHPK3PXPJBSWY3DPEHPK3PXP";
const LOCAL_PASSWORD = "demo-sesame-2027";
const isProd = process.env.NODE_ENV === "production";

/** Secret TOTP aléatoire en base 32 (20 octets), pour qu'aucun code du personnel ne soit public en ligne. */
function randomBase32() {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567";
  const bytes = randomBytes(20);
  let bits = 0;
  let value = 0;
  let out = "";
  for (const b of bytes) {
    value = (value << 8) | b;
    bits += 8;
    while (bits >= 5) {
      out += alphabet[(value >>> (bits - 5)) & 31];
      bits -= 5;
    }
  }
  return out;
}

/** En ligne, le mot de passe et le secret TOTP des comptes de démonstration ne sont jamais ceux du dépôt. */
function demoSecrets() {
  const password = process.env.DEMO_PASSWORD || (isProd ? null : LOCAL_PASSWORD);
  if (!password || password.length < 12) throw new Error("DEMO_PASSWORD (12 caractères au moins) est obligatoire en production.");
  const totpSecret = process.env.DEMO_TOTP_SECRET || (isProd ? randomBase32() : LOCAL_TOTP_SECRET);
  return { password, totpSecret, generatedTotp: !process.env.DEMO_TOTP_SECRET && isProd };
}

export async function seed(db = getDb()) {
  const existing = await db.query.users.findFirst({ where: eq(s.users.email, "admin@demo.cap-sesame.fr") });
  if (existing) {
    console.log("Base déjà initialisée : seed ignoré.");
    return;
  }
  const secrets = demoSecrets();
  const pw = await hashPassword(secrets.password);
  const mk = (email: string, role: (typeof s.roleEnum.enumValues)[number], displayName: string) => ({ email, passwordHash: pw, role, displayName, totpSecret: role === "student" ? null : secrets.totpSecret });
  const [admin, author, reviewer, reviewer2] = await db
    .insert(s.users)
    .values([
      mk("admin@demo.cap-sesame.fr", "admin", "Admin démo"),
      mk("auteur@demo.cap-sesame.fr", "author", "Auteur démo"),
      mk("relecteur@demo.cap-sesame.fr", "reviewer", "Relectrice démo"),
      mk("relecteur2@demo.cap-sesame.fr", "reviewer", "Relecteur démo"),
      mk("support@demo.cap-sesame.fr", "support", "Support démo"),
    ])
    .returning();

  await db.insert(s.examSessionConfigs).values({
    code: "2027",
    version: 1,
    status: "published",
    body: SESSION_2027,
    verifiedAt: "2026-10-14",
    createdBy: admin.id,
    firstApprovedBy: reviewer.id,
    secondApprovedBy: reviewer2.id,
    publishedAt: new Date(),
  });

  await db.insert(s.subjects).values(SUBJECTS.map((x) => ({ ...x, textDirection: (x as { textDirection?: string }).textDirection ?? "ltr" })));
  await db.insert(s.skills).values(SKILLS.map((k, i) => ({ ...k, position: i })));

  const published = { status: "published" as const, authorId: author.id, reviewerId: reviewer.id, rightsCleared: true, isDemo: true, origin: "human" as const, publishedAt: new Date(), version: 1 };

  for (const l of LESSONS) {
    await db.insert(s.lessonVersions).values({
      lessonId: `L-${l.skillId}`,
      skillId: l.skillId,
      title: l.title,
      objectives: l.objectives,
      prerequisites: l.prerequisites ?? [],
      sections: lessonSections(l),
      flashcards: l.cards.map(([front, back, reversible]) => ({ front, back, reversible })),
      ...published,
    });
  }

  const [docSet] = await db.insert(s.documentSetVersions).values({ documentSetId: DOCUMENT_SET.id, title: DOCUMENT_SET.title, documents: DOCUMENT_SET.documents, ...published }).returning();

  const stems: { questionId: string; stem: string }[] = [];
  for (const q of DEMO_QUESTIONS) {
    const issues = qualityChecks({ ...q, numericAnswer: q.numericAnswer ?? null }, stems).filter((i) => i.blocking);
    if (issues.length) throw new Error(`${q.questionId} : ${issues.map((i) => i.message).join(", ")}`);
    stems.push({ questionId: q.questionId, stem: q.stem });
    const { documentSet, ...rest } = q;
    const [row] = await db
      .insert(s.questionVersions)
      .values({ ...rest, numericAnswer: q.numericAnswer ?? null, numericTolerance: q.numericTolerance ?? null, reserved: q.reserved ?? false, documentSetVersionId: documentSet ? docSet.id : null, ...published })
      .returning();
    await db.insert(s.editorialEvents).values([
      { contentType: "question", contentVersionId: row.id, fromStatus: "draft", toStatus: "in_review", actorId: author.id },
      { contentType: "question", contentVersionId: row.id, fromStatus: "in_review", toStatus: "format_check", actorId: reviewer.id },
      { contentType: "question", contentVersionId: row.id, fromStatus: "format_check", toStatus: "validated", actorId: reviewer.id },
      { contentType: "question", contentVersionId: row.id, fromStatus: "validated", toStatus: "published", actorId: reviewer.id },
    ]);
  }

  // Deux brouillons pour illustrer la chaîne éditoriale, dont une proposition d'IA à relire.
  await db.insert(s.questionVersions).values([
    {
      questionId: "MATH-PCT-DRAFT-01",
      subjectCode: "MATH",
      skillIds: ["math.pct"],
      familyId: "math.pct.reverse",
      difficulty: 3,
      format: "single",
      stem: "Après une hausse de 25 %, un article coûte 50 €. Quel était son prix initial ?",
      options: [
        { id: "a", text: "40 €", correct: true, justification: "50 ÷ 1,25 = 40." },
        { id: "b", text: "37,50 €", correct: false, justification: "On a retiré 25 % de 50 € au lieu de diviser par 1,25." },
        { id: "c", text: "62,50 €", correct: false, justification: "Hausse appliquée une seconde fois." },
        { id: "d", text: "25 €", correct: false, justification: "Confusion entre taux et montant." },
      ],
      explanation: "Prix initial × 1,25 = 50, donc prix initial = 50 ÷ 1,25 = 40 €.",
      rule: "Pour annuler une hausse de t %, on divise par (1 + t/100).",
      hints: [],
      timeSec: 90,
      references: ["Cours CAP SESAME : math.pct"],
      lessonAnchor: "approfondir",
      version: 1,
      status: "in_review",
      origin: "human",
      authorId: author.id,
      rightsCleared: true,
      isDemo: true,
    },
    {
      questionId: "FR-IA-DRAFT-01",
      subjectCode: "FR",
      skillIds: ["fr.conj"],
      familyId: "fr.conj.subj",
      difficulty: 2,
      format: "single",
      stem: "Complétez : « Je doute qu'il ___ raison. »",
      options: [
        { id: "a", text: "ait", correct: true, justification: "Douter que + subjonctif." },
        { id: "b", text: "a", correct: true, justification: "" },
        { id: "c", text: "aura", correct: false, justification: "Futur : incorrect." },
      ],
      explanation: "Proposition générée automatiquement, à relire.",
      rule: "Douter que + subjonctif.",
      hints: [],
      timeSec: 60,
      references: [],
      lessonAnchor: null,
      version: 1,
      status: "draft",
      origin: "ai",
      authorId: author.id,
      rightsCleared: false,
      isDemo: true,
    },
  ]);

  for (const n of NEWS) {
    await db.insert(s.newsItems).values({ ...n, ...NEWS_EXTRA[n.title], lastVerifiedAt: "2026-10-14", ...published });
  }

  for (const sh of PROGRAM_SHEETS) await db.insert(s.programSheets).values({ ...sh, lastVerifiedAt: "2026-10-14", ...published });
  for (const x of LANGUAGE_EXERCISES) await db.insert(s.languageExercises).values({ ...x, ...published });
  await db.insert(s.rightsRegistry).values([
    { contentType: "question", contentRef: "Banque de démonstration (toutes les questions)", holder: "CAP SESAME", licence: "Création originale", evidence: "Rédigé pour le projet, aucune reprise de contenu tiers." },
    { contentType: "document_set", contentRef: DOCUMENT_SET.id, holder: "CAP SESAME", licence: "Création originale, données fictives", evidence: "Texte, tableau et graphique créés pour la démonstration." },
    { contentType: "lesson", contentRef: "Cours de démonstration", holder: "CAP SESAME", licence: "Création originale", evidence: null },
  ]);

  // Élève de démonstration avec un profil complet.
  const [student] = await db.insert(s.users).values({ email: "eleve@demo.cap-sesame.fr", passwordHash: pw, role: "student", displayName: "Élève démo" }).returning();
  await db.insert(s.profiles).values({
    userId: student.id,
    examSessionCode: "2027",
    secondLanguage: "ES",
    schoolYear: "Terminale",
    availability: { mon: 30, tue: 20, wed: 60, thu: 20, fri: 30, sat: 90, sun: 0 },
    targetPrograms: [],
  });
  await db.insert(s.consentRecords).values({ userId: student.id, purpose: "service_account_15_plus", granted: true, textVersion: "cgu-2026-10" });

  if (secrets.generatedTotp) {
    console.log(`Secret du second facteur des comptes du personnel (à ajouter dans une application d'authentification, une seule fois) : ${secrets.totpSecret}`);
  }
  console.log(`Seed terminé : ${DEMO_QUESTIONS.length} questions publiées, ${LESSONS.length} cours, ${NEWS.length} fiches d'actualité.`);
}

if (process.argv[1]?.endsWith("seed.ts")) {
  seed()
    .then(() => closeDb())
    .catch(async (e) => {
      console.error(e);
      await closeDb();
      process.exit(1);
    });
}
