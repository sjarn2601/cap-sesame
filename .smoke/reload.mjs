import { chromium } from "@playwright/test";
const b = await chromium.launch({ executablePath: "/opt/pw-browsers/chromium" });
const p = await b.newPage();
let n = 0; p.on("framenavigated", (f) => { if (f === p.mainFrame()) n++; });
p.on("console", (m) => console.log("console:", m.type(), m.text().slice(0, 200)));
await p.goto("http://localhost:3000/inscription");
await p.waitForTimeout(6000);
console.log("navigations", n);
await b.close();
