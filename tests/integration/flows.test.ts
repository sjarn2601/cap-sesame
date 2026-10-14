// Scénarios P0 bloquants (section 26) exécutés contre une vraie base PostgreSQL.
import { describe, it, expect, beforeAll, afterAll } from "vitest";
import { and, eq, sql } from "drizzle-orm";
import { prepareTestDb } from "./setup";
import type { DB } from "@/db";
import * as s from "@/db/schema";
import { register, login, actorFromToken, verifyMfa, assertRole, type Actor } from "@/server/auth";
import { createDiagnostic, createPractice, createExam, saveResponse, finalizeAttempt, getAttemptView, getResult, submitSection } from "@/server/attempts";
import { ensurePlan, getToday } from "@/server/plan";
import { createDraft, approveConfig } from "@/server/sessionConfig";
import { transitionContent, neutralizeQuestion, dryRunBatch, applyBatch, createQuestionDraft } from "@/server/editorialAdmin";
import { exportData, deleteAccount } from "@/server/privacy";
import { getReviewLog } from "@/server/reviewLog";
import { totp } from "@/lib/totp";
import { sumMinutesByDate, dayMinutes } from "@/lib/planner";
import { SESSION_2027 } from "@/content/demo-catalog";

let db: DB;
const PW = "motdepasse-solide-1";
const SECRET = "JBSWY3DPEHPK3PXPJBSWY3DPEHPK3PXP";

async function newStudent(email: string): Promise<Actor> {
  await register(db, { email, password: PW, examSessionCode: "2027", secondLanguage: "ES", consentAge: "15_plus" });
  const { token } = await login(db, email, PW);
  return (await actorFromToken(db, token))!;
}

async function staff(email: string): Promise<Actor> {
  const { token } = await login(db, email, "demo-sesame-2027");
  await verifyMfa(db, token, totp(SECRET));
  return (await actorFromToken(db, token))!;
}

async function answerAll(actor: Actor, attemptId: string, correctly: boolean) {
  const view = await getAttemptView(db, actor, attemptId);
  for (const q of view.questions) {
    const full = await db.query.questionVersions.findFirst({ where: eq(s.questionVersions.id, q.id) });
    const right = full!.options.filter((o) => o.correct).map((o) => o.id);
    const wrong = full!.options.filter((o) => !o.correct).map((o) => o.id).slice(0, 1);
    await saveResponse(db, actor, attemptId, { questionVersionId: q.id, idempotencyKey: `k-${q.id}`, selected: correctly ? right : wrong, durationMs: 20000 });
  }
}

beforeAll(async () => {
  db = await prepareTestDb();
}, 120000);

afterAll(async () => {
  const { closeDb } = await import("@/db");
  await closeDb();
});

describe("R01 : compte, diagnostic et premier plan sans écran vide", () => {
  it("parcours complet", async () => {
    const a = await newStudent("r01@test.fr");
    const before = await getToday(db, a);
    expect(before.diagnosticPending).toBe(true);
    expect(before.main).not.toBeNull();
    const diag = await createDiagnostic(db, a);
    expect(diag.questionVersionIds.length).toBeGreaterThanOrEqual(10);
    // Interruption puis reprise au dernier état confirmé.
    const view = await getAttemptView(db, a, diag.id);
    await saveResponse(db, a, diag.id, { questionVersionId: view.questions[0].id, idempotencyKey: "first", selected: [view.questions[0].options[0].id], durationMs: 15000, confidence: 2 });
    const resumed = await createDiagnostic(db, a);
    expect(resumed.id).toBe(diag.id);
    await answerAll(a, diag.id, true);
    await finalizeAttempt(db, a, diag.id);
    const { plan } = await ensurePlan(db, a.id);
    expect(plan!.tasks.length).toBeGreaterThan(0);
    const profile = await db.query.profiles.findFirst({ where: eq(s.profiles.userId, a.id) });
    for (const [date, minutes] of sumMinutesByDate(plan!.tasks)) {
      expect(minutes).toBeLessThanOrEqual(dayMinutes({ availability: profile!.availability, rhythm: "regular", blockedPeriods: [] }, new Date(`${date}T00:00:00Z`)));
    }
    const today = await getToday(db, a);
    expect(today.diagnosticPending).toBe(false);
  });
});

describe("R03 : fermeture et reprise d'une séance libre", () => {
  it("aucune réponse confirmée perdue, aucune réponse doublée", async () => {
    const a = await newStudent("r03@test.fr");
    const p = await createPractice(db, a, { subjectCode: "MATH", size: "short" });
    const view = await getAttemptView(db, a, p.id);
    const q0 = view.questions[0];
    const first = await saveResponse(db, a, p.id, { questionVersionId: q0.id, idempotencyKey: "abc", selected: [q0.options[0].id], durationMs: 12000 });
    const replay = await saveResponse(db, a, p.id, { questionVersionId: q0.id, idempotencyKey: "abc", selected: [q0.options[0].id], durationMs: 12000 });
    expect(replay.receivedAt).toBe(first.receivedAt);
    expect(first.correction).not.toBeNull();
    const rows = await db.select().from(s.responses).where(eq(s.responses.attemptId, p.id));
    expect(rows).toHaveLength(1);
    // « Fermeture » : on relit la séance depuis zéro.
    const again = await getAttemptView(db, a, p.id);
    expect(again.questions[0].response?.selected).toEqual([q0.options[0].id]);
    expect(again.questions[0].correction).not.toBeNull();
    expect(again.questions[1].response).toBeNull();
  });

  it("une erreur crée une révision datée dans le carnet", async () => {
    const a = await newStudent("rev@test.fr");
    const p = await createPractice(db, a, { subjectCode: "FR", size: "short" });
    await answerAll(a, p.id, false);
    const log = await getReviewLog(db, a);
    expect(log.items.length).toBeGreaterThan(0);
    const tomorrow = new Date();
    tomorrow.setUTCHours(0, 0, 0, 0);
    tomorrow.setUTCDate(tomorrow.getUTCDate() + 1);
    expect(log.items[0].dueAt.toISOString()).toBe(tomorrow.toISOString());
  });
});

describe("R04 / R05 : concours blanc strict", () => {
  it("aucune correction anticipée, réponse tardive refusée, double soumission sans double résultat", async () => {
    const a = await newStudent("r04@test.fr");
    const exam = await createExam(db, a, { subject: "MATH", mode: "strict" });
    const view = await getAttemptView(db, a, exam.id);
    const json = JSON.stringify(view);
    expect(json).not.toContain('"correct"');
    expect(json).not.toContain("justification");
    expect(json).not.toContain("explanation");
    const q = view.questions[0];
    const saved = await saveResponse(db, a, exam.id, { questionVersionId: q.id, idempotencyKey: "s1", selected: [q.options[0].id], clientSeq: 1 });
    expect(saved.correction).toBeNull();
    // Changement de réponse autorisé avant l'échéance ; une requête plus ancienne rejouée ne l'écrase pas.
    await saveResponse(db, a, exam.id, { questionVersionId: q.id, idempotencyKey: "s2", selected: [q.options[1].id], clientSeq: 2 });
    await saveResponse(db, a, exam.id, { questionVersionId: q.id, idempotencyKey: "s1-retry", selected: [q.options[0].id], clientSeq: 1 });
    const r = await db.query.responses.findFirst({ where: and(eq(s.responses.attemptId, exam.id), eq(s.responses.questionVersionId, q.id)) });
    expect(r!.selected).toEqual([q.options[1].id]);
    expect(await getResult(db, a, exam.id).catch((e) => e.code)).toBe("not_finished");

    // L'échéance serveur est dépassée (l'horloge de l'appareil n'intervient pas).
    const meta = { ...(exam.meta as object), sectionDeadline: new Date(Date.now() - 1000).toISOString() };
    await db.update(s.attempts).set({ meta }).where(eq(s.attempts.id, exam.id));
    const late = await saveResponse(db, a, exam.id, { questionVersionId: view.questions[1].id, idempotencyKey: "late", selected: [view.questions[1].options[0].id] }).catch((e) => e.code);
    expect(late).toBe("attempt_closed");
    const att = await db.query.attempts.findFirst({ where: eq(s.attempts.id, exam.id) });
    expect(att!.status).toBe("expired");

    await Promise.all([finalizeAttempt(db, a, exam.id), finalizeAttempt(db, a, exam.id), finalizeAttempt(db, a, exam.id)]);
    const scores = await db.select().from(s.scoreVersions).where(eq(s.scoreVersions.attemptId, exam.id));
    expect(scores).toHaveLength(1);
    const result = await getResult(db, a, exam.id);
    expect(result.items[0].options.some((o) => o.correct)).toBe(true);
  });

  it("soumissions concurrentes d'une tentative en cours : un seul résultat", async () => {
    const a = await newStudent("r04b@test.fr");
    const exam = await createExam(db, a, { subject: "FR", mode: "strict" });
    await Promise.all(Array.from({ length: 5 }, () => submitSection(db, a, exam.id, 0)));
    const scores = await db.select().from(s.scoreVersions).where(eq(s.scoreVersions.attemptId, exam.id));
    expect(scores).toHaveLength(1);
  });

  it("concours complet : sections successives, pause encadrée", async () => {
    const a = await newStudent("full@test.fr");
    const exam = await createExam(db, a, { subject: "FULL", mode: "strict" });
    const view = await getAttemptView(db, a, exam.id);
    expect(view.sections!.length).toBe(7);
    expect(view.sections!.find((x) => x.subject === "DOC")!.rule).toBe("doc_partial");
    const after = await submitSection(db, a, exam.id, 0);
    const m = after.meta as { current: number; pauseUntil: string | null; sectionStartedAt: string | null };
    expect(m.current).toBe(1);
    expect(m.pauseUntil).not.toBeNull();
    expect(m.sectionStartedAt).toBeNull();
    // Une question de la section 0 ne peut plus être modifiée.
    const err = await saveResponse(db, a, exam.id, { questionVersionId: view.questions[0].id, idempotencyKey: "x", selected: ["a"] }).catch((e) => e.code);
    expect(err).toBe("wrong_section");
  });

  it("un élève ne lit ni ne modifie la tentative d'un autre", async () => {
    const a = await newStudent("a@test.fr");
    const b = await newStudent("b@test.fr");
    const p = await createPractice(db, a, { subjectCode: "EN", size: "short" });
    await expect(getAttemptView(db, b, p.id)).rejects.toMatchObject({ code: "not_found" });
    await expect(getResult(db, b, p.id)).rejects.toMatchObject({ code: "not_found" });
    await expect(saveResponse(db, b, p.id, { questionVersionId: p.questionVersionIds[0], idempotencyKey: "z", selected: ["a"] })).rejects.toMatchObject({ code: "not_found" });
    await expect(finalizeAttempt(db, b, p.id)).rejects.toMatchObject({ code: "not_found" });
  });
});

describe("R06 : changement de session sans modifier une ancienne tentative", () => {
  it("la tentative garde sa version de configuration", async () => {
    const a = await newStudent("r06@test.fr");
    const exam = await createExam(db, a, { subject: "DIG", mode: "pedagogic" });
    await finalizeAttempt(db, a, exam.id);
    const admin = await staff("admin@demo.cap-sesame.fr");
    const r1 = await staff("relecteur@demo.cap-sesame.fr");
    const r2 = await staff("relecteur2@demo.cap-sesame.fr");
    const body = { ...SESSION_2027, papers: SESSION_2027.papers.map((p) => (p.subject === "DIG" ? { ...p, minutes: 25 } : p)) };
    const draft = await createDraft(db, admin, "2027", body, "2026-11-01");
    expect(draft.diffFromPrevious.length).toBeGreaterThan(0);
    await expect(approveConfig(db, admin, draft.id)).rejects.toMatchObject({ code: "self_approval" });
    await approveConfig(db, r1, draft.id);
    await expect(approveConfig(db, r1, draft.id)).rejects.toMatchObject({ code: "same_approver" });
    expect(await approveConfig(db, r2, draft.id)).toBe("published");
    const result = await getResult(db, a, exam.id);
    expect(result.configVersion).toBe("2027 v1");
  });
});

describe("R07 : retrait d'une question erronée et recalcul traçable", () => {
  it("nouvelle version de score avec avant/après, historique conservé", async () => {
    const a = await newStudent("r07@test.fr");
    const exam = await createExam(db, a, { subject: "ACT", mode: "strict" });
    await answerAll(a, exam.id, true);
    await finalizeAttempt(db, a, exam.id);
    const before = await getResult(db, a, exam.id);
    const reviewer = await staff("relecteur@demo.cap-sesame.fr");
    const target = exam.questionVersionIds[0];
    await expect(neutralizeQuestion(db, reviewer, target, "Option ambiguë")).rejects.toMatchObject({ code: "bad_request" });
    await transitionContent(db, reviewer, "question", target, "suspended", "Contestation : option B ambiguë");
    const changes = await neutralizeQuestion(db, reviewer, target, "Option B ambiguë, question neutralisée");
    expect(changes.find((c) => c.attemptId === exam.id)).toBeTruthy();
    const after = await getResult(db, a, exam.id);
    expect(after.scoreHistory).toHaveLength(2);
    expect(after.score!.maxPoints).toBe(before.score!.maxPoints - 1);
    expect(after.score!.reason).toContain("neutralisée");
    expect(after.items.find((i) => i.id === target)!.withdrawn).toBe(true);
    // Répéter le recalcul ne crée pas de nouvelle version.
    await neutralizeQuestion(db, reviewer, target, "Option B ambiguë, question neutralisée");
    expect((await getResult(db, a, exam.id)).scoreHistory).toHaveLength(2);
  });
});

describe("Chaîne éditoriale et droits", () => {
  it("l'équipe doit valider le second facteur", async () => {
    const { token } = await login(db, "auteur@demo.cap-sesame.fr", "demo-sesame-2027");
    const actor = await actorFromToken(db, token);
    expect(() => assertRole(actor, ["author"])).toThrow(/renforcée/);
  });

  it("un auteur ne valide pas sa propre question ; une proposition IA reste en brouillon", async () => {
    const author = await staff("auteur@demo.cap-sesame.fr");
    const reviewer = await staff("relecteur@demo.cap-sesame.fr");
    const { row, issues } = await createQuestionDraft(db, author, {
      questionId: "TEST-Q-001", subjectCode: "MATH", skillIds: ["math.calc"], familyId: "math.calc.test", difficulty: 1, format: "single",
      stem: "Combien font 7 × 8 ?", options: [{ id: "a", text: "56", correct: true, justification: "Table de 7." }, { id: "b", text: "54", correct: false, justification: "Erreur de table." }],
      explanation: "7 × 8 = 56.", rule: "Tables de multiplication.", hints: [], timeSec: 20, references: ["Cours"], origin: "ai", rightsCleared: true, reserved: false,
    });
    expect(row.status).toBe("draft");
    expect(issues.filter((i) => i.blocking)).toHaveLength(0);
    await transitionContent(db, author, "question", row.id, "in_review");
    await expect(transitionContent(db, author, "question", row.id, "format_check")).rejects.toMatchObject({ code: "transition_refused" });
    await transitionContent(db, reviewer, "question", row.id, "format_check");
    await transitionContent(db, reviewer, "question", row.id, "validated");
    await transitionContent(db, reviewer, "question", row.id, "published");
  });

  it("un lot invalide n'est pas appliqué partiellement sans accord", async () => {
    const author = await staff("auteur@demo.cap-sesame.fr");
    const good = { questionId: "BATCH-001", subjectCode: "FR", skillIds: ["fr.vocab"], familyId: "fr.voc.batch", difficulty: 1, format: "single", stem: "Que signifie « laconique » ?", options: [{ id: "a", text: "Bref", correct: true, justification: "Qui s'exprime en peu de mots." }, { id: "b", text: "Bavard", correct: false, justification: "Antonyme." }], explanation: "Laconique : concis.", rule: "Laconique = bref.", hints: [], timeSec: 30, references: ["Dictionnaire"] };
    const bad = { ...good, questionId: "BATCH-002", stem: "Question sans bonne réponse", options: [{ id: "a", text: "x", correct: false, justification: "-" }, { id: "b", text: "y", correct: false, justification: "-" }] };
    const report = await dryRunBatch(db, author, [good, bad]);
    expect(report[1].errors.length).toBeGreaterThan(0);
    await expect(applyBatch(db, author, [good, bad], { allowPartial: false })).rejects.toMatchObject({ code: "batch_invalid" });
    expect(await db.query.questionVersions.findFirst({ where: eq(s.questionVersions.questionId, "BATCH-001") })).toBeUndefined();
    const ok = await applyBatch(db, author, [good, bad], { allowPartial: true });
    expect(ok.applied).toBe(1);
    const imported = await db.query.questionVersions.findFirst({ where: eq(s.questionVersions.questionId, "BATCH-001") });
    expect(imported!.status).toBe("draft");
  });
});

describe("R08 : export et suppression", () => {
  it("export exploitable puis suppression suivie jusqu'à clôture", async () => {
    const a = await newStudent("r08@test.fr");
    const p = await createPractice(db, a, { subjectCode: "DIG", size: "short" });
    await answerAll(a, p.id, true);
    await finalizeAttempt(db, a, p.id);
    const data = await exportData(db, a);
    expect(data.attempts).toHaveLength(1);
    expect(data.responses.length).toBeGreaterThan(0);
    await expect(deleteAccount(db, a, "mauvais")).rejects.toMatchObject({ code: "bad_credentials" });
    const reqId = await deleteAccount(db, a, PW);
    expect(await db.query.users.findFirst({ where: eq(s.users.id, a.id) })).toBeUndefined();
    expect((await db.select({ n: sql<number>`count(*)::int` }).from(s.attempts).where(eq(s.attempts.userId, a.id)))[0].n).toBe(0);
    const req = await db.query.deletionRequests.findFirst({ where: eq(s.deletionRequests.id, reqId) });
    expect(req!.status).toBe("closed");
  });

  it("limitation des tentatives de connexion", async () => {
    await newStudent("throttle@test.fr");
    for (let i = 0; i < 5; i++) await login(db, "throttle@test.fr", "faux", "1.2.3.4").catch(() => null);
    await expect(login(db, "throttle@test.fr", PW, "1.2.3.4")).rejects.toMatchObject({ code: "throttled" });
  });
});

describe("OFF-01 : séries hors connexion", () => {
  it("synchronisation sans doublon, question retirée signalée, limite de séries", async () => {
    const { createOfflinePack, syncOffline, MAX_OFFLINE_PACKS } = await import("@/server/offline");
    const a = await newStudent("off01@test.fr");
    const pack = await createOfflinePack(db, a, { subjectCode: "MATH", size: "short" });
    expect(pack.questions.length).toBe(5);
    expect(pack.questions[0].options.some((o) => o.correct) || pack.questions[0].numericAnswer !== null).toBe(true);

    // Une question est retirée pendant que l'élève est hors connexion.
    const retired = pack.questions[0];
    await db.update(s.questionVersions).set({ status: "retired" }).where(eq(s.questionVersions.id, retired.id));

    const answers = pack.questions.slice(0, 3).map((q, i) => ({
      questionVersionId: q.id,
      clientId: `local-${i}-${q.id}`,
      selected: q.format === "numeric" ? [] : [q.options[0].id],
      numericValue: q.format === "numeric" ? 1 : null,
      durationMs: 15000,
      answeredAt: new Date(Date.now() + i * 1000).toISOString(),
    }));
    const first = await syncOffline(db, a, pack.attemptId, answers, {}, false);
    expect(first.accepted).toBe(3);
    expect(first.withdrawn).toContain(retired.questionId);
    // Le réseau coupe pendant l'envoi : l'appareil renvoie les mêmes réponses.
    const replay = await syncOffline(db, a, pack.attemptId, answers, {}, false);
    expect(replay.accepted).toBe(0);
    expect(replay.duplicates).toBe(3);
    const rows = await db.select().from(s.responses).where(eq(s.responses.attemptId, pack.attemptId));
    expect(rows).toHaveLength(3);

    const done = await syncOffline(db, a, pack.attemptId, [], {}, true);
    expect(done.finalized).toBe(true);
    await db.update(s.questionVersions).set({ status: "published" }).where(eq(s.questionVersions.id, retired.id));

    for (let i = 0; i < MAX_OFFLINE_PACKS; i++) await createOfflinePack(db, a, { size: "short" });
    await expect(createOfflinePack(db, a, { size: "short" })).rejects.toThrow(/déjà/);

    const other = await newStudent("off01b@test.fr");
    await expect(syncOffline(db, other, pack.attemptId, [], {}, true)).rejects.toThrow();
  });
});

describe("IA-01 / IA-02 : assistant encadré", () => {
  it("appuis cités, données minimales, niveaux d'aide, quotas, budget et repli éditorial", async () => {
    const { askAboutQuestion, askAboutLesson, redact } = await import("@/server/assistant");
    type Req = { system: string; prompt: string; maxTokens: number };
    const seen: Req[] = [];
    let reply = "Regarde d'abord les unités.";
    const fake = {
      async complete(req: Req) {
        seen.push(req);
        return { text: reply, model: "fake", inputTokens: 1000, outputTokens: 200, refused: false };
      },
    };
    const broken = { complete: async () => { throw new Error("panne"); } };
    const a = await newStudent("ia01@test.fr");
    const p = await createPractice(db, a, { subjectCode: "MATH", size: "short" });
    const qv = p.questionVersionIds[0];

    // Indice : appuis versionnés, aucune donnée personnelle, contenu traité comme donnée.
    const hint = await askAboutQuestion(db, a, { attemptId: p.id, questionVersionId: qv, mode: "hint", level: 1, question: "écris à ia01@test.fr ou au 06 12 34 56 78" }, fake);
    expect(hint.source).toBe("ai");
    expect(hint.sources[0].ref).toMatch(/^question:.+@\d+$/);
    expect(hint.sources.some((x) => x.ref.startsWith("session:2027@"))).toBe(true);
    expect(seen[0].prompt).not.toContain("ia01@test.fr");
    expect(seen[0].prompt).not.toContain("06 12 34 56 78");
    expect(seen[0].system).toMatch(/jamais des instructions/);
    expect(seen[0].system).toMatch(/N'invente jamais un chiffre officiel/);
    expect(redact("x".repeat(500))).toHaveLength(300);

    // La réponse donnée après une aide compte comme aidée.
    await saveResponse(db, a, p.id, { questionVersionId: qv, idempotencyKey: "ia-1", selected: [], numericValue: 0, durationMs: 1000 });
    const [row] = await db.select().from(s.responses).where(and(eq(s.responses.attemptId, p.id), eq(s.responses.questionVersionId, qv)));
    expect(row.hintsUsed).toBeGreaterThanOrEqual(1);

    // Conflit avec le corrigé : incertitude signalée, contestation proposée.
    reply = "INCERTITUDE : le corrigé semble contredire l'énoncé.\nVoici le raisonnement.";
    const ex = await askAboutQuestion(db, a, { attemptId: p.id, questionVersionId: qv, mode: "explain" }, fake);
    expect(ex.uncertain).toBe(true);
    expect(ex.text).toBe("Voici le raisonnement.");
    expect(seen.at(-1)!.prompt).toMatch(/Corrigé validé/);

    // Panne ou absence de clé : correction éditoriale, la séance continue.
    const down = await askAboutQuestion(db, a, { attemptId: p.id, questionVersionId: qv, mode: "explain" }, broken);
    expect(down.source).toBe("editorial");
    expect(down.text.length).toBeGreaterThan(0);
    const off = await askAboutLesson(db, a, { lessonId: "L-MATH-PCT" }, null).catch(async () => {
      const [l] = await db.select().from(s.lessonVersions).where(eq(s.lessonVersions.status, "published")).limit(1);
      return askAboutLesson(db, a, { lessonId: l.lessonId }, null);
    });
    expect(off.source).toBe("editorial");
    expect(off.notice).toMatch(/pas activé/);

    // Quota quotidien par élève.
    process.env.SESAME_AI_DAILY_REQUESTS = "4";
    const q4 = await askAboutQuestion(db, a, { attemptId: p.id, questionVersionId: qv, mode: "explain" }, fake);
    expect(q4.source).toBe("ai");
    expect(q4.remaining).toBe(0);
    const q5 = await askAboutQuestion(db, a, { attemptId: p.id, questionVersionId: qv, mode: "explain" }, fake);
    expect(q5.source).toBe("editorial");
    expect(q5.notice).toMatch(/toutes tes demandes/);
    delete process.env.SESAME_AI_DAILY_REQUESTS;

    // Budget global : au-delà, plus aucun appel au fournisseur.
    process.env.SESAME_AI_DAILY_BUDGET_USD = "0.001";
    const b = await newStudent("ia01b@test.fr");
    const pb = await createPractice(db, b, { subjectCode: "MATH", size: "short" });
    const calls = seen.length;
    const over = await askAboutQuestion(db, b, { attemptId: pb.id, questionVersionId: pb.questionVersionIds[0], mode: "hint", level: 1 }, fake);
    expect(over.source).toBe("editorial");
    expect(seen.length).toBe(calls);
    delete process.env.SESAME_AI_DAILY_BUDGET_USD;

    // Journal : coût enregistré, sans contenu des échanges.
    const usage = await db.select().from(s.aiUsage).where(eq(s.aiUsage.userId, a.id));
    expect(usage.find((u) => u.outcome === "ai")!.costMicroUsd).toBe(1000 * 4 + 200 * 20);
    expect(usage.map((u) => u.outcome)).toEqual(expect.arrayContaining(["ai", "fallback_error", "fallback_disabled", "fallback_quota"]));

    // Concours blanc strict : aucune aide tant que l'épreuve dure ; ressource d'un autre élève introuvable.
    const exam = await createExam(db, a, { subject: "MATH", mode: "strict" });
    await expect(askAboutQuestion(db, a, { attemptId: exam.id, questionVersionId: exam.questionVersionIds[0], mode: "hint", level: 1 }, fake)).rejects.toThrow(/strict/);
    await expect(askAboutQuestion(db, a, { attemptId: exam.id, questionVersionId: exam.questionVersionIds[0], mode: "explain" }, fake)).rejects.toThrow(/strict/);
    await expect(askAboutQuestion(db, b, { attemptId: p.id, questionVersionId: qv, mode: "explain" }, fake)).rejects.toThrow(/introuvable/);
  });
});

describe("ORA-01 : oraux", () => {
  it("fiches par école, dossier sans invention, simulation, retour cité, suppression", async () => {
    const oral = await import("@/server/oral");
    const a = await newStudent("ora01@test.fr");
    const sheets = await oral.listSheets(db, a);
    expect(sheets.length).toBeGreaterThanOrEqual(2);
    for (const sh of sheets) {
      expect(sh.school && sh.program && sh.campus && sh.sessionCode && sh.lastVerifiedAt).toBeTruthy();
      expect(sh.sources.length).toBeGreaterThan(0);
    }

    // Dossier : seuls les faits saisis, transmis sans e-mail.
    await oral.saveDossierEntry(db, a, { category: "engagement", title: "Trésorier du club de basket", details: "Budget de 3 000 euros, contact ora01@test.fr" });
    await oral.saveDossierEntry(db, a, { category: "difficulte", title: "Remontée en mathématiques", details: "De 8 à 14 en un trimestre." });
    const seen: string[] = [];
    const fake = (text: string) => ({ async complete(req: { prompt: string }) { seen.push(req.prompt); return { text, model: "fake", inputTokens: 500, outputTokens: 100, refused: false }; } });
    const plan = await oral.structureDossier(db, a, fake("1. Accroche : le basket."));
    expect(plan.source).toBe("ai");
    expect(seen[0]).toContain("Trésorier du club de basket");
    expect(seen[0]).not.toContain("ora01@test.fr");
    const planOff = await oral.structureDossier(db, a, null);
    expect(planOff.source).toBe("editorial");
    expect(planOff.text).toContain("Trésorier du club de basket");

    // Simulation sur une fiche : questions propres au programme.
    const sim = await oral.startSimulation(db, a, { sheetId: sheets[0].id });
    expect(sim.turns).toHaveLength(5);
    expect(sim.turns.filter((t) => t.kind === "programme").map((t) => t.prompt)).toEqual(sheets[0].questions.slice(0, 2));
    const answer = "D'abord, je suis trésorier du club de basket depuis 2 ans, parce que j'aime gérer un projet. Ensuite, l'international m'attire. Du coup j'ai choisi ce programme.";
    await oral.saveTurn(db, a, sim.id, { turnId: sim.turns[0].id, answer, inputMode: "voice", edited: true });
    await expect(oral.saveTurn(db, a, sim.id, { turnId: "00000000-0000-0000-0000-000000000000", answer: "x", inputMode: "text", edited: false })).rejects.toThrow();

    // Retour sans assistant : six critères, citations tirées des réponses.
    const fb = await oral.finishSimulation(db, a, sim.id, null);
    expect(fb.source).toBe("editorial");
    expect(fb.criteria.map((c) => c.key)).toEqual(["clarte", "structure", "exemples", "programme", "argumentation", "langue"]);
    for (const c of fb.criteria) if (c.quote) expect(answer).toContain(c.quote);
    expect(fb.criteria.find((c) => c.key === "langue")!.comment).toMatch(/du coup/);
    expect(fb.criteria.find((c) => c.key === "programme")!.comment).toMatch(/international/);

    // Retour de l'assistant : une citation inventée est écartée.
    const aiJson = JSON.stringify({
      criteria: ["clarte", "structure", "exemples", "programme", "argumentation", "langue"].map((key, i) => ({ key, level: 2, comment: `ok ${key}`, quote: i === 0 ? "phrase jamais dite" : i === 1 ? "je suis trésorier du club de basket" : null })),
      summary: "Bonne base.",
      next: ["Préparer un deuxième exemple."],
    });
    const fbAi = await oral.finishSimulation(db, a, sim.id, fake(aiJson));
    expect(fbAi.source).toBe("ai");
    expect(fbAi.criteria[0].quote).toBeNull();
    expect(fbAi.criteria[1].quote).toBe("je suis trésorier du club de basket");
    const broken = await oral.finishSimulation(db, a, sim.id, fake("pas du json"));
    expect(broken.source).toBe("editorial");

    // Export, isolement entre élèves, suppression.
    const exp = await exportData(db, a);
    expect(exp.oralDossier).toHaveLength(2);
    expect(exp.oralSimulations).toHaveLength(1);
    const b = await newStudent("ora01b@test.fr");
    await expect(oral.getSimulation(db, b, sim.id)).rejects.toThrow(/introuvable/);
    await expect(oral.deleteSimulation(db, b, sim.id)).rejects.toThrow(/introuvable/);
    await oral.deleteSimulation(db, a, sim.id);
    expect(await oral.listSimulations(db, a)).toHaveLength(0);
    const entries = await oral.getDossier(db, a);
    await oral.deleteDossierEntry(db, a, entries[0].id);
    expect(await oral.getDossier(db, a)).toHaveLength(1);
  });
});

describe("ADA-02 : comparaison et retour arrière", () => {
  it("les deux estimations sont stockées ; seul un administrateur change le système, de façon journalisée", async () => {
    const { estimationReport, setEstimationMode, getEstimationMode } = await import("@/server/estimation");
    const a = await newStudent("ada02@test.fr");
    const p = await createPractice(db, a, { subjectCode: "MATH", size: "short" });
    await answerAll(a, p.id, true);
    await finalizeAttempt(db, a, p.id);
    const snaps = await db.select().from(s.masterySnapshots).where(eq(s.masterySnapshots.userId, a.id));
    expect(snaps.length).toBeGreaterThan(0);
    expect(snaps.every((x) => x.probStatus !== null)).toBe(true);

    const admin = await staff("admin@demo.cap-sesame.fr");
    const author = await staff("auteur@demo.cap-sesame.fr");
    expect(await getEstimationMode(db)).toBe("simple");
    await expect(setEstimationMode(db, author, "probabilistic")).rejects.toThrow();
    await setEstimationMode(db, admin, "probabilistic");
    expect(await getEstimationMode(db)).toBe("probabilistic");
    const next = await createPractice(db, a, { subjectCode: "MATH", size: "short" });
    expect(next.questionVersionIds.length).toBe(5);
    await setEstimationMode(db, admin, "simple");
    const report = await estimationReport(db, admin);
    expect(report.mode).toBe("simple");
    expect(report.snapshots).toBeGreaterThan(0);
    const logs = await db.select().from(s.auditEvents).where(eq(s.auditEvents.action, "settings.estimation_mode"));
    expect(logs).toHaveLength(2);
  });
});

describe("REV-02 : cartes personnelles et fiches", () => {
  it("révision espacée des cartes, export regroupé par type d'erreur, isolement", async () => {
    const cards = await import("@/server/cards");
    const a = await newStudent("rev02@test.fr");
    const c = await cards.createCard(db, a, { front: "to rely on", back: "compter sur", subjectCode: "EN" });
    await expect(cards.createCard(db, a, { front: " ", back: "x" })).rejects.toThrow();
    expect((await cards.listCards(db, a)).due).toHaveLength(1);
    const now = new Date("2026-10-14T08:00:00Z");
    const r1 = await cards.reviewCard(db, a, c.id, true, now);
    expect(r1.dueAt.toISOString().slice(0, 10)).toBe("2026-10-15");
    const r2 = await cards.reviewCard(db, a, c.id, true, now);
    expect(r2.dueAt.toISOString().slice(0, 10)).toBe("2026-10-17");
    const r3 = await cards.reviewCard(db, a, c.id, false, now);
    expect(r3.stage).toBe(0);

    const p = await createPractice(db, a, { subjectCode: "MATH", size: "short" });
    await answerAll(a, p.id, false);
    await finalizeAttempt(db, a, p.id);
    const md = await cards.exportSheets(db, a, "md");
    expect(md).toMatch(/^# Mes fiches de révision/);
    expect(md).toMatch(/## (Connaissance|Lecture|Gestion du temps|Cause à préciser)/);
    expect(md).toContain("**to rely on** : compter sur");
    const csv = await cards.exportSheets(db, a, "csv");
    expect(csv.split("\n")[0]).toBe("type;groupe;notion;recto_ou_regle;verso;statut");

    const b = await newStudent("rev02b@test.fr");
    await expect(cards.reviewCard(db, b, c.id, true)).rejects.toThrow(/introuvable/);
    await expect(cards.deleteCard(db, b, c.id)).rejects.toThrow(/introuvable/);
    expect((await exportData(db, a)).personalCards).toHaveLength(1);
  });
});
