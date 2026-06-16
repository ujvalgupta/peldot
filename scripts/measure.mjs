// Measure exact computed styles + geometry of key elements for precise diffing.
// Usage: node scripts/measure.mjs <url>
import { chromium } from "playwright";

const url = process.argv[2];
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1280, height: 900 }, deviceScaleFactor: 1 });
await page.goto(url, { waitUntil: "domcontentloaded", timeout: 60000 }).catch(() => {});
await page.waitForTimeout(2000);

const m = await page.evaluate(() => {
  const pick = (el) => {
    if (!el) return null;
    const cs = getComputedStyle(el);
    const r = el.getBoundingClientRect();
    return {
      text: (el.innerText || "").slice(0, 50).replace(/\n/g, " "),
      fontSize: cs.fontSize, fontWeight: cs.fontWeight, lineHeight: cs.lineHeight,
      letterSpacing: cs.letterSpacing, fontFamily: cs.fontFamily.split(",")[0],
      color: cs.color,
      w: Math.round(r.width), h: Math.round(r.height), top: Math.round(r.top),
    };
  };
  const h2s = Array.from(document.querySelectorAll("h2")).slice(0, 6).map(pick);
  const nav = document.querySelector("nav,header,[class*=nav]");
  return {
    devicePixelRatio: window.devicePixelRatio,
    innerWidth: window.innerWidth,
    h1: pick(document.querySelector("h1")),
    h2s,
    navHeight: nav ? Math.round(nav.getBoundingClientRect().height) : null,
    firstButton: pick(document.querySelector("a[class*=button],button,a")),
  };
});
console.log(JSON.stringify(m, null, 2));
await browser.close();
