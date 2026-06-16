# WhiteWhale (getwhitewhale.com) — Page Topology

Framer-built marketing site. Single long scroll page, ~11405px tall at desktop (1440px).
All content lives in one Framer container; `display:contents` wrappers mean DOM nesting is deep.

## Tech
- **Builder:** Framer
- **Fonts:** Inter (body/h1), Inter Display (large section headings h2)
- **Page bg:** white `#ffffff`; alternating light sections `#f9fafb`
- **Smooth scroll:** native (no Lenis detected)

## Sections (top → bottom)

| # | Name | Top(px) | Height | Interaction | Notes |
|---|------|---------|--------|-------------|-------|
| 0 | **Nav** | 0 | 64 | sticky, static | Transparent sticky bar. Logo left; links Pricing/API/Partners/Resources▾/Integrations▾; right Login + "See signals →" dark pill button |
| 1 | **Hero** | 64 | 511 | static | Pill "New · BirdDog is now WhiteWhale"; h1 "Know what accounts to target and *why* with custom buying signals."; subtext; two buttons "See your signals →" (dark) + "Book Demo" (outline); "See what signals WhiteWhale can find for free". Subtle dotted/cross bg pattern |
| 2 | **Logos strip** | 575 | 102 | static | Greyscale customer logos: haven, demandDrive, parcellogix, meridian, ELLINGSON, swyft, DOSS, Kaleris |
| 3 | **Demo** | 677 | 665 | static (video modal) | "See WhiteWhale in action — 5 Min Demo" label + large product dashboard screenshot (Accounts table) with circular ▶ play overlay |
| 4 | **Problem** | 1342 | 1266 | static | h2 "Every sales team wants to know who to sell to **right now.**" + subtext; 2-column comparison card ("WHAT YOU'RE GETTING NOW" muted/struck list vs "WHAT WHITEWHALE GIVES YOU" dark list); inline video testimonial (Justin Ager, Kaleris) |
| 5 | **Features** | 2609 | 4103 | static (scroll reveal) | Header "WhiteWhale is different... **truly custom signals**". 6 alternating rows (heading+desc LEFT, blue card RIGHT) + 1 inline testimonial. See FEATURES below |
| 6 | **Testimonials** | 6712 | 1002 | static | h2 "Don't take it from us. Take it from the **700+ sellers** that trust us." 2 video cards (Conner Slater / Nicholas de la Guardia) each with quote + 2 stat blocks; closing line |
| 7 | **Common traits** | 7714 | 638 | static | h2 "Here's what all our best customers **had in common**"; 3 text columns; "If that's you, what are you waiting for?" + dark button. Light bg `#f9fafb` |
| 8 | **FAQ** | 8352 | 2283 | links/accordion | 5 category groups, each a big heading + list of question rows (chevron ⌄ + question, hairline divider). Questions are links; build as expandable accordion |
| 9 | **CTA** | 10635 | 404 | static | h2 "Almost everyone says **\"Wait...you can track THAT?\"**" + "See your signals for free. No credit card required." + dark button |
| 10 | **Footer** | 11039 | 366 | static | Logo + tagline "We use AI to amplify human potential, not replace it." + 4 link columns: Product / Company / Integrations / Resources |

## FEATURES section composition (top→bottom)
Each row: left = big heading (Inter Display, mixed weight) + grey desc; right = rounded blue card `#2b7bb9` r14 containing white sub-cards.
1. **You write the signals in plain English** — blue card: 3 signal questions (EXECUTIVE MANDATE · 89 accounts found; COMPLIANCE TRIGGER · 214 accounts found; GRANULAR RESPONSIBILITY) — left color accent bars (green/blue/purple)
2. **Tested against deals you've already won** — blue card: "SIGNAL PERFORMANCE — LAST 90 DAYS" win-rate table (Executive Mandate 1.4x, Hiring Surge + Budget Signal 2.1x, Compliance Trigger 1.1x, Leadership Hire (Generic) 0.9x — flagged) + green footnote row
3. **We rank your list and find new accounts.** — blue card: 4 white account cards (Citigroup 3 ACTIVE; Moderna 4 ACTIVE; Caterpillar 2 ACTIVE; ThoughtSpot NEW DISCOVERY, blue tint)
4. **Connecting the dots to see the story.** — blue card: 2 event cards (Satellogic · 4 days ago; Citigroup · just now) with bullet timelines
5. **All of this, without another login.** — blue card: Slack message mock (#whitewhale-alerts, 🐋 WhiteWhale APP 4:13 AM, "Signal Found: Wex, Inc.", "Signal: PLG transition | 1.4x higher win rate", body text)
   - inline video testimonial: **Beau Blanchard**, Gravitate
6. **Integrated in 15 minutes, not 6 months** — blue card: 3-step timeline cards (SIGN UP / 15 MINUTES / HOUR 1)

(Justin Ager testimonial sits at the END of the Problem section, before Features header.)

## Layout
- Centered content column, max ~1200px; section headings centered, feature rows are 2-col.
- z-index: nav sticky on top (z high). No modals except video play (out of scope → link/poster only).
