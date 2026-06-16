import { chromium } from "playwright";
const url = process.argv[2] || "http://localhost:3000";
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
const errors = [];
page.on("console", (m) => { if (m.type() === "error") errors.push("CONSOLE: " + m.text()); });
page.on("pageerror", (e) => errors.push("PAGEERROR: " + e.message));
page.on("requestfailed", (r) => errors.push("REQFAIL: " + r.url() + " " + (r.failure()?.errorText || "")));
const resp = await page.goto(url, { waitUntil: "domcontentloaded", timeout: 60000 }).catch((e) => ({ err: e.message }));
await page.waitForTimeout(2000);
const info = await page.evaluate(() => ({
  htmlClass: document.documentElement.className,
  bodyHeight: document.body.scrollHeight,
  bodyTextLen: (document.body.innerText || "").length,
  textSample: (document.body.innerText || "").slice(0, 300),
  revealCount: document.querySelectorAll(".reveal").length,
  revealVisible: document.querySelectorAll(".reveal.is-visible").length,
  h1: document.querySelector("h1")?.innerText || null,
}));
console.log("HTTP status:", resp?.status?.() ?? resp?.err ?? "n/a");
console.log(JSON.stringify(info, null, 2));
console.log("errors:", errors.slice(0, 12));
await browser.close();
