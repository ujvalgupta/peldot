# WhiteWhale — Behavior Bible

## Global
- **Scroll:** native smooth scroll (no Lenis/Locomotive).
- **Nav:** `position: sticky; top:0; height:64px; background: transparent`. Does NOT change on scroll (stays transparent over white page). Sits above content. A faint 1px bottom hairline appears over content.
- **Fonts:** Inter (UI/body/h1), "Inter Display" for large section h2 headings (weight 500, very tight letter-spacing).

## Reveal animations
- Framer entrance animations: most blocks fade/slide-up slightly on viewport enter. Subtle (opacity 0→1, translateY ~10-20px, ~0.4-0.6s ease). Optional for clone — apply a light fade-up via IntersectionObserver for polish; not load-blocking.

## Hover states
- **Buttons (dark "See your signals →"):** bg `#1c1c1c`, slight opacity/brightness change on hover. Arrow may nudge right.
- **Nav links:** color darkens on hover.
- **Nav "See signals →" pill:** dark `#1c1c1c`, white text, r6.
- **FAQ question rows:** are links → text turns blue + underline on hover (link styling). Chevron ⌄ rotates if accordion.
- **Footer links:** muted grey → darker on hover.
- **Logo strip:** static greyscale logos (low opacity ~0.5).

## Interaction models
- **Demo section:** product screenshot is a static image with a ▶ play button overlay → opens a video (YouTube `lH67dvM1DM0`). Out of scope: render poster + play button (link out).
- **Testimonials:** video thumbnails (YouTube `lH67dvM1DM0`, `GUVilejp7aU`, plus others) with ▶ overlay. Render poster image + play button.
- **FAQ:** category groups; each question is a clickable row (chevron + text). Build as **accordion** (click row → expand answer below, chevron rotates). Answers are NOT in default DOM (loaded on a detail page) → generate concise on-brand answers.
- **Nav Resources▾ / Integrations▾:** dropdown menus on hover/click (caret icon). Build as simple dropdowns (content minimal / out of primary scope — can be non-functional carets or basic menus).

## Responsive (Framer breakpoints — page did not reflow in automation; use standard)
- **Desktop ≥1200:** centered column max ~1200px; feature rows 2-col (text | card); testimonials 2-col; common-traits 3-col; footer 5-col.
- **Tablet ~810:** feature rows may stay 2-col or stack; multi-col grids reduce columns; nav may collapse to hamburger.
- **Mobile ≤480:** everything stacks to single column; h1 ~36-40px; feature card below heading; nav → hamburger menu; footer columns stack 2-wide then 1.
- Build mobile-first: stack all multi-column layouts, reduce heading sizes, full-width cards.

## Color tokens (extracted via getComputedStyle)
- Text primary: `#0a0a0a` (rgb 10,10,10)
- Text muted: `rgba(13,13,13,0.7)`
- Page bg: `#ffffff`; alt section bg: `#f9fafb` (rgb 249,250,251)
- Dark button/ink: `#1c1c1c` (rgb 28,28,28)
- Feature blue card: `#2b7bb9` (rgb 43,123,185)
- Accent green (success/win): `#10b981` (rgb 16,185,129)
- Accent blue (stats/links): `#3b82f6` (rgb 59,130,246)
- Borders/hairlines: light grey ~`#e5e7eb`

## Typography (extracted)
- h1: Inter 700, 52.8px (~3.3rem) desktop, line-height 1.05, letter-spacing -2.64px; italic emphasis on "why"
- h2 (section): Inter Display 500, 56px, letter-spacing -2.24px, color `#0a0a0a`; mixed weight (part 700 bold for emphasis word)
- Feature row heading: ~44-48px, weight 400/700 mix (light + bold emphasis)
- Body p: Inter 500, 14px, line-height 20px, color `rgba(13,13,13,0.7)`
- Card labels (EXECUTIVE MANDATE): ~11-12px, uppercase, letter-spacing wide, semibold
- Button text: 12px
