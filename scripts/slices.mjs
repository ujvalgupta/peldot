// Capture a page as fixed-height vertical slices for readable side-by-side diffing.
// Usage: node scripts/slices.mjs <url> <outdir> <prefix> [width] [sliceH]
import { chromium } from "playwright";
import { mkdirSync } from "fs";

const [, , url, outdir, prefix, widthArg = "1280", sliceArg = "1100"] = process.argv;
const width = parseInt(widthArg, 10) || 1280;
const sliceH = parseInt(sliceArg, 10) || 1100;
mkdirSync(outdir, { recursive: true });

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width, height: sliceH } });
await page.goto(url, { waitUntil: "domcontentloaded", timeout: 60000 }).catch(() => {});
await page.waitForTimeout(1500);

// Trigger every scroll-reveal: step smoothly through the whole page so each
// element passes through the viewport (whileInView, once) and stays revealed.
try {
  await page.evaluate(async () => {
    await new Promise((res) => {
      let y = 0;
      const step = () => {
        window.scrollTo(0, y); y += 300;
        if (y < document.body.scrollHeight) setTimeout(step, 60);
        else { window.scrollTo(0, document.body.scrollHeight); setTimeout(() => { window.scrollTo(0, 0); res(); }, 300); }
      };
      step();
    });
  });
} catch {}
// Let any in-flight entrance animations finish before capturing.
await page.waitForTimeout(1200);

const total = await page.evaluate(() => document.body.scrollHeight);
const n = Math.ceil(total / sliceH);
for (let i = 0; i < n; i++) {
  const y = i * sliceH;
  await page.evaluate((yy) => window.scrollTo(0, yy), y);
  await page.waitForTimeout(250);
  const num = String(i).padStart(2, "0");
  await page.screenshot({ path: `${outdir}/${prefix}-${num}.png` });
}
await browser.close();
console.log(`saved ${n} slices to ${outdir}/${prefix}-*.png (page height ${total}px)`);
