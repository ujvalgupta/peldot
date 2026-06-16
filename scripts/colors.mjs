// Extract exact background colors of feature-card containers on the real site.
// Walks up from known text anchors to find the colored panel + measures it.
import { chromium } from "playwright";

const url = process.argv[2] || "https://getwhitewhale.com";
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
await page.goto(url, { waitUntil: "domcontentloaded", timeout: 60000 }).catch(() => {});
await page.waitForTimeout(2500);
// scroll to load feature section
await page.evaluate(async () => {
  for (let y = 0; y < document.body.scrollHeight; y += 700) { window.scrollTo(0, y); await new Promise(r => setTimeout(r, 80)); }
  window.scrollTo(0, 0);
});
await page.waitForTimeout(800);

const data = await page.evaluate(() => {
  const nonWhite = (c) => c && c !== "rgba(0, 0, 0, 0)" && c !== "rgb(255, 255, 255)";

  // collect all colored backgrounds with a blue-ish or tinted hue
  const all = [];
  for (const el of document.querySelectorAll("*")) {
    const cs = getComputedStyle(el);
    const bg = cs.backgroundColor;
    if (!nonWhite(bg)) continue;
    const m = bg.match(/\d+/g);
    if (!m) continue;
    const [r, g, b] = m.map(Number);
    // tinted (not pure grey/white/black)
    const r2 = el.getBoundingClientRect();
    if (r2.width < 120 || r2.height < 60) continue;
    all.push({ bg, r, g, b, w: Math.round(r2.width), h: Math.round(r2.height), radius: cs.borderRadius, text: (el.innerText || "").slice(0, 30).replace(/\n/g, " ") });
  }
  // Filter to blue-ish panels (b notably > r) OR distinct tints
  const blues = all.filter((x) => x.b > x.r + 20 && x.b > 120);
  return { blues: blues.slice(0, 25) };
});
console.log(JSON.stringify(data, null, 2));
await browser.close();
