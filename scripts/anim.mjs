// Introspect a page's animation/transition specs — the ground truth for matching motion.
// Usage: node scripts/anim.mjs <url>
import { chromium } from "playwright";

const url = process.argv[2] || "https://getwhitewhale.com";
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
await page.goto(url, { waitUntil: "domcontentloaded", timeout: 60000 }).catch(() => {});
await page.waitForTimeout(2500);

const data = await page.evaluate(() => {
  const out = { transitions: {}, animations: [], framerHints: {}, fonts: new Set() };

  // Sample transition/transform specs on common interactive/animated elements.
  const sel = ["button", "a", "[class*=framer]", "h1", "h2", "section", "[data-framer-name]"];
  const seen = new Set();
  for (const s of sel) {
    for (const el of Array.from(document.querySelectorAll(s)).slice(0, 40)) {
      const cs = getComputedStyle(el);
      const key = `${cs.transitionDuration}|${cs.transitionTimingFunction}|${cs.transitionProperty}`;
      if (cs.transitionDuration !== "0s" && !seen.has(key)) {
        seen.add(key);
        out.transitions[key] = {
          duration: cs.transitionDuration,
          easing: cs.transitionTimingFunction,
          property: cs.transitionProperty,
          delay: cs.transitionDelay,
          sampleTag: el.tagName.toLowerCase(),
          sampleName: el.getAttribute("data-framer-name") || null,
        };
      }
      if (cs.fontFamily) out.fonts.add(cs.fontFamily);
    }
  }

  // Web Animations API — live animations with keyframes/timing.
  try {
    for (const a of document.getAnimations().slice(0, 40)) {
      const t = a.effect?.getTiming?.() || {};
      const kf = a.effect?.getKeyframes?.() || [];
      out.animations.push({
        duration: t.duration, easing: t.easing, delay: t.delay,
        iterations: t.iterations, fill: t.fill,
        target: a.effect?.target?.getAttribute?.("data-framer-name") || a.effect?.target?.tagName,
        keyframes: kf.map((k) => ({ opacity: k.opacity, transform: k.transform, offset: k.offset })),
      });
    }
  } catch (e) { out.animErr = String(e); }

  out.fonts = Array.from(out.fonts).slice(0, 12);
  out.hasFramerMotion = !!document.querySelector("[data-framer-appear-id],[data-framer-name]");
  return out;
});

console.log(JSON.stringify(data, null, 2));
await browser.close();
