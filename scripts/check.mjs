import { chromium } from "playwright";
const b = await chromium.launch();
const p = await b.newPage({ viewport: { width: 1280, height: 900 } });
await p.emulateMedia({ reducedMotion: "reduce" });
await p.goto("http://localhost:3000", { waitUntil: "domcontentloaded" }).catch(()=>{});
await p.waitForTimeout(2500);
const r = await p.evaluate(() => {
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const all = [...document.querySelectorAll("*")];
  const conner = all.find(e => e.textContent?.includes("It's so easy to use") && e.children.length===0);
  const cta = all.find(e => e.textContent?.includes("Wait...you can track"));
  const info = (el) => el ? { op: getComputedStyle(el).opacity, vis: getComputedStyle(el).visibility, h: Math.round(el.getBoundingClientRect().height), top: Math.round(el.getBoundingClientRect().top) } : null;
  return { reduced, conner: info(conner), cta: info(cta) };
});
console.log(JSON.stringify(r, null, 2));
await b.close();
