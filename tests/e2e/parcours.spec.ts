// Parcours de bout en bout sur la base de démonstration (npm run db:reset avant la première exécution).
import { test, expect, type Locator, type Page } from "@playwright/test";
import { totp } from "../../src/lib/totp";

const DEMO_TOTP = "JBSWY3DPEHPK3PXPJBSWY3DPEHPK3PXP";

// Les confirmations de fin de partie sont acceptées.
test.beforeEach(({ page }) => page.on("dialog", (d) => d.accept()));

async function register(page: Page) {
  await page.goto("/inscription");
  await page.fill("#email", `e2e-${Date.now()}-${Math.random().toString(36).slice(2, 6)}@test.fr`);
  await page.fill("#password", "motdepasse-long-1");
  await page.fill("#password2", "motdepasse-long-1");
  await page.selectOption("#secondLanguage", { index: 1 });
  await page.check('input[value="15_plus"]');
  await page.check('input[name="terms"]');
  await page.click("button.btn.primary");
  await page.waitForURL(/bienvenue|aujourdhui/);
}

/** Visible et cliquable, sans attendre qu'il apparaisse (isEnabled seul attend l'élément). */
const ready = async (l: Locator) => (await l.isVisible().catch(() => false)) && (await l.isEnabled().catch(() => false));

/** Clic qui tolère la disparition du bouton (la page change pendant le clic). */
const tap = (l: Locator) => l.click({ timeout: 3000 }).catch(() => {});

/** Répond à chaque question : clic sur la première option (ou 10 pour une réponse numérique). */
async function answerAll(page: Page, exam = false) {
  for (let i = 0; i < 80 && !/bilan|resultat/.test(page.url()); i++) {
    await page.waitForTimeout(200);
    const see = page.getByRole("button", { name: "Voir le résultat" });
    if (await see.isVisible().catch(() => false)) { await tap(see); continue; }
    const num = page.locator("input[inputmode=decimal]").first();
    const opt = page.locator(".options button:not([disabled])").first();
    if (await num.isVisible().catch(() => false)) await num.fill("10");
    else if (await opt.isVisible().catch(() => false)) await tap(opt);
    if (exam) {
      const next = page.getByRole("button", { name: "Suivante →" });
      if (await ready(next)) { await tap(next); continue; }
      const end = page.locator("button.btn.primary", { hasText: /Terminer l.épreuve|Terminer cette partie/ }).first();
      if (await end.isVisible().catch(() => false)) { await tap(end); await page.waitForTimeout(600); }
      const start = page.getByRole("button", { name: "Commencer maintenant" });
      if (await start.isVisible().catch(() => false)) await tap(start);
      continue;
    }
    const validate = page.getByRole("button", { name: "Valider", exact: true });
    if (await ready(validate)) { await tap(validate); await page.waitForTimeout(250); }
    const nextQ = page.getByRole("button", { name: "Question suivante" });
    const finish = page.getByRole("button", { name: "Terminer la séance" });
    if (await ready(nextQ)) await tap(nextQ);
    else if (await ready(finish)) await tap(finish);
  }
  // Navigation côté client : on attend l'URL sans exiger un nouvel événement « load ».
  await expect(page).toHaveURL(/bilan|resultat/, { timeout: 20_000 });
}

async function launchExam(page: Page, label: string, mode: "strict" | "pedagogic") {
  await page.goto("/concours");
  const card = page.locator("article", { has: page.getByRole("heading", { name: label }) });
  await card.locator(`input[value="${mode}"]`).check();
  await card.getByRole("button", { name: "Lancer" }).click();
  await page.waitForURL(/seance\//);
}

test("inscription, diagnostic, bilan puis série d'entraînement", async ({ page }) => {
  await register(page);
  await page.goto("/diagnostic");
  await page.getByRole("button", { name: "Commencer" }).first().click();
  await page.waitForURL(/seance\//);
  await answerAll(page);
  await expect(page.getByRole("heading", { name: "Bilan du diagnostic" })).toBeVisible();

  await page.goto("/aujourdhui");
  await expect(page.getByRole("heading", { name: /Cours|Série|Révision|Simulation/ }).first()).toBeVisible();

  await page.goto("/entrainement");
  await page.locator("form button.btn.primary").first().click();
  await page.waitForURL(/seance\//);
  await answerAll(page);
  await expect(page.getByText(/Identifiant à communiquer au support/)).toBeVisible();
});

test("concours blanc strict : aucun corrigé envoyé avant la fin", async ({ page }) => {
  await register(page);
  await launchExam(page, "Mathématiques", "strict");
  await expect(page.getByRole("timer")).toBeVisible();
  const id = page.url().split("/seance/")[1];
  const body = await page.evaluate(async (a) => (await fetch(`/api/attempts/${a}`)).text(), id);
  expect(body).not.toMatch(/justification|"explanation"|"correct":true/);
  await answerAll(page, true);
  await expect(page).toHaveURL(/resultat/);
});

test("analyse documentaire : documents et questions côte à côte @mobile", async ({ page }) => {
  await register(page);
  await launchExam(page, "Analyse documentaire", "pedagogic");
  const narrow = (page.viewportSize()?.width ?? 1280) < 760;
  if (narrow) {
    await page.getByRole("tab", { name: "Documents" }).click();
    await expect(page.getByText("Document 1")).toBeVisible();
    await page.getByRole("tab", { name: "Question" }).click();
  } else {
    await expect(page.getByText("Document 1")).toBeVisible();
    await expect(page.locator(".options")).toBeVisible();
  }
  const width = await page.evaluate(() => document.documentElement.scrollWidth);
  expect(width).toBeLessThanOrEqual((page.viewportSize()?.width ?? 1280) + 2);
});

test("administration : connexion avec code à usage unique et écrans principaux", async ({ page }) => {
  await page.goto("/connexion");
  await page.fill("#email", "admin@demo.cap-sesame.fr");
  await page.fill("#password", "demo-sesame-2027");
  await page.click("button.btn.primary");
  await page.waitForURL(/verification/);
  await page.fill("#code", totp(DEMO_TOTP));
  await page.click("button.btn.primary");
  await page.waitForURL(/\/admin/);
  for (const [path, heading] of [
    ["/admin", "Tableau de bord"],
    ["/admin/questions", "Questions"],
    ["/admin/contenus", "Cours et actualités"],
    ["/admin/import", "Import par lots"],
    ["/admin/signalements", "Signalements"],
    ["/admin/sessions", "Configuration des sessions"],
    ["/admin/support", "Support"],
  ]) {
    await page.goto(path);
    await expect(page.getByRole("heading", { level: 1, name: heading })).toBeVisible();
  }
  await page.goto("/admin/import");
  await page.locator("textarea").fill('[{"questionId":"X"}]');
  await page.getByRole("button", { name: "Validation à blanc" }).click();
  await expect(page.getByText("Rien n'a été écrit")).toBeVisible();
  await expect(page.locator("textarea")).toHaveValue('[{"questionId":"X"}]');
});
