// Downloads all WhiteWhale assets to public/. Run: node scripts/download-assets.mjs
import { mkdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";

const FRC = "https://framerusercontent.com/images/";
const ROOT = new URL("../public/", import.meta.url).pathname;

const assets = [
  // Customer logos (left → right), greyscale wordmarks
  [FRC + "Kxubc72DbiZvscdLFTzwGprtToU.png", "images/logos/haven.png"],
  [FRC + "OYieYeQSVcbx3jxGEBc6I2F1Zbk.png", "images/logos/demanddrive.png"],
  [FRC + "l8aXlESwX0hp7sUBEw9J4lhuk.png", "images/logos/parcellogix.png"],
  [FRC + "QsejZHvcemaeThYDuyZ0FEglNQ.png", "images/logos/meridian.png"],
  [FRC + "0qEBY7v078ejaeOM9MkAMaAIvfo.png", "images/logos/ellingson.png"],
  [FRC + "yEzSYyDUoLMYxqF76hFUdyxQ.png", "images/logos/swyft.png"],
  [FRC + "k1yrY4Jfih6jrIzvNCV9ecK2NU.png", "images/logos/doss.png"],
  [FRC + "qpDhoBvKsdGoU5ersMqMwpNZhw.svg", "images/logos/kaleris.svg"],
  // Brand wordmarks
  [FRC + "0DzjX04nmv41zcHF7143XXojNlM.png", "images/wordmark-nav.png"],
  [FRC + "cwaX299VRwP4GpV1rb91dA0Ubk.png", "images/wordmark-footer.png"],
  // Demo dashboard screenshot
  [FRC + "gpftrjTRzbG0Ef00EP7t3eV1g.png", "images/platform-home.png"],
  // Inline testimonial video posters (Justin Ager / Beau Blanchard)
  [FRC + "i2UewG8RXu1E7JFh2aK3NuIupE.png", "images/testimonial-justin.png"],
  [FRC + "yayIPESiTsP6nigSbJRP2ySfZ8.png", "images/testimonial-beau.png"],
  // Testimonials section video thumbnails (YouTube)
  ["https://i.ytimg.com/vi_webp/lH67dvM1DM0/maxresdefault.webp", "images/testimonial-conner.webp"],
  ["https://i.ytimg.com/vi_webp/GUVilejp7aU/maxresdefault.webp", "images/testimonial-nicholas.webp"],
  // Favicons / icons (whale mark)
  [FRC + "P5tn6wodBNAAiyE60RhG5epbibA.png", "seo/favicon.png"],
  [FRC + "9wdvbXRKGQUCHdPJWqsYUojgE.png", "seo/apple-touch-icon.png"],
];

async function fetchOne([url, rel]) {
  try {
    const res = await fetch(url, { headers: { "User-Agent": "Mozilla/5.0" } });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const buf = Buffer.from(await res.arrayBuffer());
    const out = join(ROOT, rel);
    await mkdir(dirname(out), { recursive: true });
    await writeFile(out, buf);
    console.log(`✓ ${rel} (${(buf.length / 1024).toFixed(1)} KB)`);
  } catch (e) {
    console.error(`✗ ${rel}: ${e.message}`);
  }
}

async function main() {
  for (let i = 0; i < assets.length; i += 4) {
    await Promise.all(assets.slice(i, i + 4).map(fetchOne));
  }
  console.log("Done.");
}
main();
