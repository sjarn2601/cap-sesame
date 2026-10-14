import { chromium } from "@playwright/test";
import { execSync, spawn } from "node:child_process";
const stopServer = () => { try { execSync('pkill -f "[n]ext-server"'); } catch {} };
const startServer = async () => { spawn("npx", ["next", "start", "-p", "3100"], { cwd: "/home/claude/sesame", detached: true, stdio: "ignore" }).unref(); for (let i = 0; i < 40; i++) { try { const r = await fetch("http://localhost:3100/api/health"); if (r.ok) return; } catch {} await new Promise((r) => setTimeout(r, 500)); } };
const S = "/tmp/claude-0/-home-claude/da2c50ed-b5ef-5c2e-b8cf-3644250cd58c/scratchpad/shots/";
const B = "http://localhost:3100";
const browser = await chromium.launch({ executablePath: "/opt/pw-browsers/chromium" });
const ctx = await browser.newContext({ viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true });
const page = await ctx.newPage();
const errors = [];
page.on("pageerror", (e) => errors.push(e.message));
page.on("console", (m) => m.type() === "error" && errors.push(m.text()));
const step = async (n, f) => { try { await f(); await page.screenshot({ path: S + n + ".png", fullPage: false }); console.log("OK", n, page.url()); } catch (e) { console.log("FAIL", n, page.url(), e.message.split("\n")[0]); await page.screenshot({ path: S + n + "-fail.png" }).catch(() => {}); } };
await step("o1-register", async () => {
  await page.goto(B + "/inscription");
  await page.fill("#email", `off${Date.now()}@test.fr`);
  await page.fill("#password", "motdepasse-long-1"); await page.fill("#password2", "motdepasse-long-1");
  await page.selectOption("#secondLanguage", { index: 1 }); await page.check('input[value="15_plus"]'); await page.check('input[name="terms"]');
  await page.click("button.btn.primary"); await page.waitForURL(/bienvenue|aujourdhui/);
  await page.goto(B + "/aujourdhui");
  await page.evaluate(() => navigator.serviceWorker.ready);
  await page.waitForTimeout(1500);
});
await step("o2-download-series", async () => {
  await page.goto(B + "/entrainement");
  await page.getByRole("button", { name: "Télécharger une série" }).click();
  await page.getByText("questions téléchargées").waitFor();
});
await step("o3-download-lesson", async () => {
  await page.goto(B + "/apprendre/cours/L-math.pct");
  await page.getByRole("button", { name: "Disponible hors connexion" }).click();
  await page.getByText("✓ Disponible hors connexion").waitFor();
});
stopServer(); await new Promise((r) => setTimeout(r, 1000));
await ctx.setOffline(true);
await step("o4-offline-lesson", async () => { await page.goto(B + "/apprendre/cours/L-math.pct"); await page.getByRole("heading", { level: 1 }).waitFor(); });
await step("o5-offline-unknown-page", async () => { await page.goto(B + "/progres"); await page.getByRole("heading", { name: "Mes contenus téléchargés" }).waitFor(); });
await step("o6-offline-series", async () => {
  await page.goto(B + "/hors-ligne");
  await page.getByRole("button", { name: "Commencer" }).click();
  for (let i = 0; i < 12; i++) {
    const num = page.locator("input[inputmode=decimal]:not([disabled])");
    if (await num.count()) await num.fill("10"); else await page.locator(".options button:not([disabled])").first().click();
    await page.getByRole("button", { name: "Valider" }).click();
    const fin = page.getByRole("button", { name: "Terminer la série" });
    if (await fin.isVisible()) { await fin.click(); break; }
    await page.getByRole("button", { name: "Question suivante" }).click();
  }
  await page.getByText("le résultat sera calculé au retour du réseau").waitFor();
});
await startServer();
await ctx.setOffline(false);
await step("o7-sync", async () => { await page.evaluate(() => window.dispatchEvent(new Event("online"))); await page.getByRole("link", { name: "Voir le résultat" }).waitFor({ timeout: 15000 }); });
await step("o8-result", async () => { await page.getByRole("link", { name: "Voir le résultat" }).click(); await page.waitForURL(/resultat/); });
await step("o9-resync-dup", async () => {
  const r = await page.evaluate(async () => { const p = Object.values(JSON.parse(localStorage.getItem("sesame.offline.packs")))[0]; const res = await fetch("/api/offline/sync", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ attemptId: p.pack.attemptId, answers: p.answers, localScores: {}, finish: true }) }); return res.json(); });
  console.log("  replay:", JSON.stringify(r));
});
await step("o10-logout-clears", async () => {
  await page.goto(B + "/aujourdhui");
  await page.getByRole("button", { name: "Déconnexion" }).click();
  await page.waitForURL(B + "/");
  const left = await page.evaluate(async () => ({ ls: localStorage.getItem("sesame.offline.packs"), cache: await caches.has("sesame-offline") }));
  console.log("  after logout:", JSON.stringify(left));
});
console.log("ERRORS", [...new Set(errors)].slice(0, 10));
await browser.close();
