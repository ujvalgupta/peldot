// Headless screenshot tool for visual diffing.
// Usage: node scripts/shoot.mjs <url> <outfile> [width] [--full|--fold]
import { chromium } from "playwright";

const [, , url, out, widthArg = "1280", fullArg = "--full"] = process.argv;
const width = parseInt(widthArg, 10) || 1280;
const fullPage = fullArg !== "--fold";

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width, height: 900 } });

// domcontentloaded + settle: networkidle never fires under Next HMR.
await page.goto(url, { waitUntil: "domcontentloaded", timeout: 60000 }).catch(() => {});
await page.waitForTimeout(1500);

// Scroll through to trigger lazy/scroll-reveal content. Tolerate nav races.
try {
  await page.evaluate(async () => {
    await new Promise((res) => {
      let y = 0;
      const step = () => {
        window.scrollBy(0, Math.round(window.innerHeight * 0.8));
        y += window.innerHeight * 0.8;
        if (y < document.body.scrollHeight + window.innerHeight) setTimeout(step, 150);
        else { window.scrollTo(0, 0); setTimeout(res, 500); }
      };
      step();
    });
  });
} catch {
  // ignore: context may be destroyed by an in-page navigation; screenshot anyway
}
await page.waitForTimeout(700);
await page.screenshot({ path: out, fullPage });
await browser.close();
console.log("saved", out);
