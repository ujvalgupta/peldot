// Capture interaction states: nav dropdown (hover) + FAQ accordion (click).
import { chromium } from "playwright";

const base = process.argv[2] || "http://localhost:3000";
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
await page.goto(base, { waitUntil: "domcontentloaded", timeout: 60000 }).catch(() => {});
await page.waitForTimeout(1500);

// Nav dropdown — hover "Resources"
try {
  await page.getByRole("link", { name: "Resources" }).first().hover();
  await page.waitForTimeout(500);
  await page.screenshot({ path: "shots/clone/nav-dropdown.png", clip: { x: 0, y: 0, width: 1280, height: 320 } });
} catch (e) { console.log("dropdown err", e.message); }

// FAQ accordion — find a question button, click, capture
try {
  const q = page.getByRole("button", { name: /Why are the results so good/i });
  await q.scrollIntoViewIfNeeded();
  await page.waitForTimeout(300);
  await q.click();
  await page.waitForTimeout(600);
  const box = await q.boundingBox();
  await page.screenshot({ path: "shots/clone/faq-open.png", clip: { x: 0, y: Math.max(0, box.y - 40), width: 1280, height: 320 } });
} catch (e) { console.log("faq err", e.message); }

await browser.close();
console.log("saved nav-dropdown.png + faq-open.png");
