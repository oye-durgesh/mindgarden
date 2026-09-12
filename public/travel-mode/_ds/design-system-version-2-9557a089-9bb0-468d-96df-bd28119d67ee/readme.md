# BackWithBrain — Design System

> Mind fitness for working professionals — a daily habit you keep, built on science, practised together. With deeper support when you need it.

BackWithBrain (BWB) is a **mind-fitness** product, not a therapy clinic. The brand frames mental wellbeing the way fitness frames the body: preventive, daily, for everyone, done alongside colleagues. This design system encodes the calm-premium, "Sarvam-AI-inspired" visual language that carries that strategy into product, marketing, and the brand book.

---

## Sources

This system was built from two briefs supplied by the user (stored in `uploads/`):

- `uploads/BWB_Brand_Strategy.md` — positioning, promise, personality, story (the content layer).
- `uploads/BWB_BrandBook_Design_Prompt (2).md` — the full visual spec: color ramps, glass recipes, button states, type scale, and a 28-slide brand-book outline.

No codebase, Figma file, font binaries, or image assets were attached. Everything visual here is built to the written spec. **Fonts (Fraunces + Plus Jakarta Sans) load from Google Fonts** as a substitution for licensed binaries — see Caveats.

---

## The strategy in one screen

| Layer | The line |
|-------|----------|
| **Positioning** | Mind fitness for working professionals — a daily habit, built on science, practised together. |
| **Promise** | "Give us a few minutes a day, and we'll help you meet a calmer, clearer version of yourself — and you won't do it alone." |
| **Personality** | A calm, smart friend who understands the mind — not a guru, not a doctor, not a hype-man. |
| **Story** | "We don't have a mental health problem. We have a mental *fitness* problem." |

**Three pillars:** Fitness not therapy · Why before how · Practised together.
**Spectrum of care:** Level 1 Daily fitness (hero) → Level 2 Guided support → Level 3 Therapy (opt-in, future). One brand, three depths of the same pool.

### How strategy maps to design

| Strategy | Shows up as |
|----------|-------------|
| Personality: warm | Warm-dark backgrounds (jamun dusk), never cold black |
| Personality: quietly confident | Restraint — few colors, lots of breathing room |
| Personality: clear | Clean Fraunces + Jakarta, sentence case, no bold |
| Pillar: why before how | Science cards, observation tasks, logic-led copy |
| Pillar: practised together | Buddy / poke / team-streak surfaces |
| Story: fitness not health | Stigma-free, prideful, everyone participates |

---

## CONTENT FUNDAMENTALS

How BWB writes. Voice is **a calm, smart friend** — warm, clear, grounded in science, encouraging but never pushy, quietly confident.

- **Person:** Speaks to "you", refers to itself as "we". Collaborative, never clinical or instructional-from-above.
- **Casing:** **Sentence case everywhere** — headings, buttons, labels. Never Title Case, never ALL CAPS (a tiny tracking bump on labels is the only exception).
- **Weight:** Type never goes bold/700. Emphasis comes from size, color, and space — not weight. Italic Fraunces is used to stress a single word (e.g. *fitness*).
- **Tone rules by moment:**
  - *On a miss (no guilt):* "Your mind's still here whenever you are. 🌱"
  - *On completion (no hype):* "That's 12 days of showing up for yourself."
  - *Loading (not mystical):* "Take a breath. We'll be ready in a second."
- **Logic-led:** Lead with the *why* (the science), then the *how*. No fluff, no "just breathe," no "trust the universe."
- **Emoji:** Used **sparingly and only warm/natural ones** — 🌱 (growth/streak), ✦ (reward/sparkle). Never decorative emoji spam, never face emoji. Treat them as quiet punctuation, not loud signalling.
- **Word bank — yes:** mind fitness, daily, practice, showing up, calmer, clearer, together, whenever you're ready, the science, a few minutes.
- **Word bank — no:** therapy (for the hero flows), fix, broken, cure, hustle, crush it, guru, journey (overused), unlock your potential, mindfulness-cliché phrasing.
- **Vibe:** Reassuring restraint. The product never shouts, never guilt-trips, never gamifies aggressively. It is the friend who notices you came back, and just says so.

---

## VISUAL FOUNDATIONS

Calm, premium, never loud. The whole language is built on **warmth + restraint**: a small palette, generous space, soft serifs, and the occasional glass moment for celebration.

- **Color vibe:** Warm Indian-jewel tones — jamun (purple), haldi (turmeric gold), terracotta, tulsi sage, twilight blue. Backgrounds are warm cream (light) or warm jamun-dusk (dark), **never cold black or cold white**. Every color ships as a 5–6 step ramp; the darkest step is used for text-on-color (never pure black).
- **Type:** Fraunces (soft serif) for headings at 400–500; Plus Jakarta Sans for body/UI at 400–500. Sentence case, breathing leading (~1.5 body). No bold.
- **Backgrounds:** Soft **mesh gradients** are the default surface — warm cream mesh in light, jamun-dusk mesh in dark, plus an "aurora" purple-gold mesh for player/celebration moments. A faint lotus / temple-arch motif sits at low opacity, and a **3–4% grain overlay** sits on all gradients to kill banding and add premium texture. Time-of-day shifts the gradient (morning cream → night jamun).
- **Glassmorphism:** Reserved for **feature moments** (player, celebration, primary CTAs in dark theme), never the whole UI. Five recipes — neutral, purple, gold, blue, frosted-white — each a specific `rgba` bg + border + blur (16px) + colored glow + inner top highlight. Glass always sits on a colorful gradient so it has something to refract.
- **Corner radii:** Pills (999px) for buttons and section tabs; 14px for swatches/chips; 16px for cards and square buttons; 24px for large feature cards.
- **Cards:** Soft white surface (light) / `#211E2C` (dark), 16–24px radius, a **gentle warm shadow** (`0 4px 16px rgba(36,26,62,0.08)`), thin warm border (`#E0D6C8`) on light. No harsh borders, no colored left-accent bars.
- **Shadows:** Warm, low-opacity, purple-tinted (`rgba(36,26,62,…)`) — three steps (card / raise / float). Buttons add an inset top highlight for a "lit pill" feel. Glass uses colored glows instead of grey shadows.
- **Buttons:** One primary per screen, colored to the active section. Pill (999px) or 16px, height 52px mobile / 48px web, Jakarta 500. Light-theme primary = dark gradient pill; dark-theme primary = section-tinted glass. Every button defines 3+ states.
- **Motion & feel:** Calm and soft — fades and gentle slide-ins (`cubic-bezier(0.22,0.61,0.36,1)`, 160–420ms). **Press = scale 0.96** plus a slight color deepen. Hover (web) = glow intensifies / button lifts. Reward moments add a **gold glow pulse** + haptic + soft chime. Theme transitions cross-fade. No bounces, no aggressive spring, no infinite decorative loops on content.
- **Hover states:** glow intensifies or surface lifts (never a hard color invert). **Press states:** shrink to 0.96 + deepen the fill.
- **Transparency & blur:** used intentionally for glass feature surfaces and frosted pills only — not as a default card style.
- **Layout:** 80px outer padding on slides, 12-column grid, 24px gutter. Fixed repeating elements: dark section tab top-left (`#241A3E` pill), page number bottom-right (`#9A95A0`).

---

## ICONOGRAPHY

No icon assets were supplied in the brief. The spec calls for **thin, Sarvam-style line icons** in four treatments — line · soft-filled · duotone · glass — on a 24px grid.

- **Recommended set:** [**Phosphor Icons**](https://phosphoricons.com/) at **Thin / Light** weight — it matches the specified hairline stroke and offers regular/duotone/fill variants that map onto the four treatments. Phosphor is used throughout the UI kit and slides **via its CDN web-font** (`@phosphor-icons/web`), so no binaries are vendored here. **SUBSTITUTION FLAG:** this is the closest CDN match to the written "thin Sarvam stroke" spec — confirm or replace with the brand's real icon set when available.
- **Usage:** 24px default grid, hairline stroke, single-color from the active section ramp (mid step for fills, 600/800 for on-light). Duotone uses a section tint behind a section-mid line. Glass icons sit inside a glass chip for feature moments.
- **Emoji as icons:** only 🌱 and ✦, used as warm punctuation in copy and the streak/reward system — never as a UI icon grid.
- **Logo:** the brand mark is a **lotus + spine/brain motif**; an app-icon variant uses a 3-dot spine on a rounded jamun tile. No logo file was provided — the UI kit and slides use a typographic + simple lotus placeholder. **Provide the real logo files to replace these.**

---

## INDEX — what's in this system

**Foundations (root):**
- `styles.css` — global entry (import this).
- `tokens/` — `colors.css`, `typography.css`, `spacing.css`, `effects.css`, `gradients.css`, `fonts.css`.
- `guidelines/` — foundation specimen cards (colors, type, glass, spacing) shown in the Design System tab.

**Components (`components/`):** reusable React primitives.
- `core/` — `Button`, `Card`, `Badge`, `TraitChip`, `SectionTab`, `Swatch`.

**UI kit (`ui_kits/bwb-app/`):** high-fidelity recreation of the BWB mobile app — Home/Today, Player, and Celebration screens, interactive.

**Slides (`slides/`):** brand-book sample slides (cover, divider, color ramp, buttons, big quote) at 1920×1080.

**Other:**
- `readme.md` — this file.
- `SKILL.md` — Agent-Skill manifest for downloadable use.

---

## Quick reference

| Token | Hex |
|-------|-----|
| Jamun purple (base) | `#8439C9` |
| Haldi gold | `#E8A04C` |
| Deep gold | `#C49A4C` |
| Twilight blue | `#5B7FB8` |
| Tulsi sage | `#9DB890` |
| Terracotta | `#E0856B` |
| Light bg | `#FAF6EE → #F4E4CC` |
| Dark bg | `#1A1726 → #2E2440` |
| Primary btn (light) | `#3A2D5C → #241A3E` |
| Glass (purple) | `rgba(168,143,208,0.18)` |
| Glass (gold) | `rgba(240,200,104,0.16)` |

---

## Caveats

- **Fonts are Google Fonts substitutes.** Fraunces and Plus Jakarta Sans both exist on Google Fonts and match the spec, but if BWB has licensed/self-hosted binaries (esp. for Devanagari), swap `tokens/fonts.css` to local `@font-face`.
- **Icons are Phosphor (Thin/Light) via CDN** as the closest match to the "thin Sarvam stroke" brief — confirm or replace.
- **No logo / illustration assets** were provided; placeholders are used. Real lotus-mark and app-icon files should replace them.
