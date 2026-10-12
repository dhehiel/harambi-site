# Harambi Website — Design System & Anti-Slop Specification

**Status:** Governing document  
**Date:** 2026-10-10  
**Governs:** Human development and any AI-generated code for the public Harambi site  
**Companion:** `Harambi_Site_Definition_Locked.md` (page map, content, locked colors)

---

## 1. Purpose of this document

Tools improve consistency and catch defects. They do **not** create an original design.

This specification exists so that:

- The visual language stays coherent across every page and section
- Copy stays specific to Harambi (crowd-building, Kora, Coforge, Build channel)
- Interactions remain meaningful
- AI prompts are constrained by real rules instead of generic “make a nice website” instructions

---

## 2. Approved toolkit (minimal)

Install or use only these. Do not add more until a specific problem requires it.

| Tool | Role | How to use |
|------|------|------------|
| **Prettier** | Formatter | VS Code extension + project config. Format on save. |
| **Lucide** | Icons | Selected SVG icons only. No full icon framework / npm package required for static pages. |
| **Open Props** | Token reference | Study spacing, radii, shadows. Implement as **your own CSS variables** — do not depend on the Open Props package. |
| **Google Fonts** | Type | **Locked pair:** Geologica (display) + Commissioner (body). Link or self-host. |
| **Live Preview** | Local preview | Install only if `npm run dev` or your current preview is inconvenient. |
| **Lighthouse** | Pre-launch audit | Chrome DevTools → Lighthouse. Fix real defects; do not chase a perfect score. |

**Deferred (use only when needed)**
- axe-core — focused accessibility pass later
- HyperUI — reference only, never a generator
- Full Tailwind / large CSS frameworks — not required for this phase if building plain HTML/CSS

---

## 3. Visual identity (locked)

### Colors (CSS variables — implement exactly)

```css
:root {
  --color-primary:       #0B3D2E; /* deep green — structure */
  --color-primary-soft:  #1F6B4A; /* living green — hover */
  --color-accent:        #E8B84A; /* yellow/gold — primary CTA only */
  --color-accent-hover:  #D4A63A;
  --color-secondary:     #A63D2F; /* earth red — secondary emphasis */
  --color-ink:           #0D0D0D;
  --color-ink-soft:      #1C1C1C;
  --color-ink-muted:     #5A5348;
  --color-ground:        #F5F1E8; /* warm sand background */
  --color-surface:       #EBE4D6; /* clay cards */
  --color-border:        #D6CFC0;
}
```

**Rules**
- Green = structure and trust  
- Yellow = **only** the main action (Join the Harambi Build)  
- Red = sparingly  
- Backgrounds stay warm and light (biophilic “natural light”)  
- Never switch palette mid-page or invent new brand colors without updating this document  

### Typography (locked)

**Official pair**

| Role | Font | Notes |
|------|------|------|
| Display / Headings | **Geologica** | Strong, structural. Weight 600–700 for H1–H2 |
| Body / UI | **Commissioner** | Readable variable font. Weight 400 body, 500–600 labels/nav/buttons |
| Labels | Commissioner | Smaller size; uppercase sparingly for section labels only |

**Google Fonts import**

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=Commissioner:wght@100..900&family=Geologica:wght@100..900&display=swap"
  rel="stylesheet"
/>
```

**CSS variables**

```css
:root {
  --font-display: "Geologica", system-ui, sans-serif;
  --font-body: "Commissioner", system-ui, sans-serif;
}

html {
  font-family: var(--font-body);
  font-optical-sizing: auto;
  font-size: 16px; /* base; scale up to 18px on large screens if desired */
}

h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-display);
  font-optical-sizing: auto;
  font-weight: 600;
  letter-spacing: -0.02em;
}

.font-display { font-family: var(--font-display); }
.font-body    { font-family: var(--font-body); }
```

**Weight guidance**

| Element | Font | Weight |
|---------|------|--------|
| H1 hero | Geologica | 700 |
| H2 section | Geologica | 600 |
| Body | Commissioner | 400 |
| Nav / labels | Commissioner | 500–600 |
| Buttons | Commissioner | 600 |

Do not add a third typeface. Do not use decorative display fonts for body copy. Line length ≈ 60–70 characters.

### Spacing & structure

- Mobile-first  
- Max content width ≈ 1120–1200px  
- Generous vertical rhythm (sections breathe)  
- Consistent horizontal padding (16–24px mobile, 32–48px desktop)  
- Cards and sections use the same border radius and border treatment throughout  

### Style character

**Human-centric + biophilic + vernacular**

- Open, calm layouts  
- Honest geometry; material, grounded feel (brick / concrete / earth / timber language, not glassmorphism)  
- No neon glow, no random floating particles, no decorative cursor effects  
- Animations only when they explain hierarchy or state  

---

## 4. Anti-slop rules (mandatory)

### A. One coherent visual identity
Do not change colors, type scale, border style, or icon weight from section to section. One system for the whole site.

### B. Show real product thinking
Harambi is crowd-building + coordinated capacity (Kora / Coforge), not generic “AI platform.”  
If showing architecture or workflow, make it specific (e.g. contribution → verification → allocation / formation → accountability). Label conceptual illustrations clearly if not yet operational.

### C. Write specific copy
Forbidden: “revolutionizing the future,” “empowering communities with cutting-edge solutions,” empty superlatives.  
Required: state what Harambi coordinates, how contribution and responsibility work, and what problem the structure addresses.

### D. Fewer, stronger sections
Homepage purpose:
1. Clear hero  
2. Distinction (crowdfunding vs crowd-building)  
3. Two systems (Kora + Coforge)  
4. Contribution forms  
5. North-star statement  
6. One strong CTA into the Build channel  

Do not fill space with identical decorative cards.

### E. Meaningful interaction only
- Navigation works  
- Buttons lead somewhere useful  
- Forms have clear success/error states  
- No animation that slows the page without adding information  

---

## 5. Page hierarchy (locked)

| Route | Purpose |
|-------|---------|
| `/` | Hero, distinction, two systems, contribute types, CTA |
| `/about` | What Harambi is, Ubuntu, mission, naming, what it is not |
| `/how-it-works` | Cycle, pathways, contribution breadth, trust spine |
| `/kora` | Commons OS |
| `/coforge` | Enterprise formation |
| `/join` | Waitlist → Harambi Build channel |
| `/covenant` | Public summary + downloadable restricted public version |

---

## 6. Implementation order

1. **Design specification** — this document + locked definition (done).  
2. **Build** — plain HTML/CSS/JS *or* the existing Next.js scaffold, but apply these tokens and rules strictly. Prefer a small set of original components over a large framework.  
3. **Visual review** — spacing, alignment, mobile, contrast, specificity of each section.  
4. **Audit** — Lighthouse + keyboard pass; axe-core later if needed. Fix real defects.  
5. **Commit** — keep the public showcase site separate from the Harambi platform repository if that remains the plan.

---

## 7. VS Code setup for the approved toolkit

### Prettier
1. Extensions → search **Prettier - Code formatter** → Install.  
2. Settings (JSON) recommended:

```json
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "editor.formatOnPaste": false
}
```

3. Optional project file `.prettierrc`:

```json
{
  "semi": true,
  "singleQuote": false,
  "trailingComma": "es5",
  "printWidth": 100,
  "tabWidth": 2
}
```

### Lucide
- Browse [lucide.dev](https://lucide.dev) → copy individual SVG markup into your components/icons.  
- Do not install a full icon runtime unless the app architecture requires it.

### Open Props
- Reference only: [open-props.style](https://open-props.style)  
- Copy spacing / radius ideas into your own `:root` variables. Do not add the package as a hard dependency for the public site unless justified.

### Google Fonts
1. Choose **one** primary family that fits warm institutional (avoid trendy display fonts).  
2. Either link via Google Fonts or download and self-host under `/fonts`.  
3. Declare in CSS with sensible `font-display: swap`.

### Live Preview
1. Extensions → **Live Preview** (Microsoft) → Install **only if** you need in-editor preview and your current workflow is inconvenient.  
2. Right-click HTML → “Show Preview” or use the Live Preview panel.

### Lighthouse
1. Open the site in Chrome.  
2. DevTools → Lighthouse → analyze.  
3. Fix accessibility, performance, and best-practice issues that affect real users. Ignore vanity score-chasing.

---

## 8. Rules for AI prompts (when you start prompting builds)

Every prompt that generates UI must include or reference:

- This Design System & Anti-Slop Spec  
- The locked color variables  
- The exact page purpose from the site map  
- “No generic marketing language. No decorative animations. No extra sections.”  

Reject output that:
- Introduces new brand colors  
- Uses filler cards or vague slogans  
- Adds frameworks or libraries not on the approved toolkit  
- Breaks the Join CTA hierarchy (yellow = primary action only)

---

## 9. Stack note

A Next.js + Tailwind scaffold already exists under `artifacts/harambi-site`.  

This specification does **not** require Tailwind. You may:

- Continue with that scaffold **if** all tokens and anti-slop rules are applied strictly, or  
- Rebuild as plain HTML/CSS/JS for maximum lightness and control.

Choose deliberately before the next AI coding session. Document the choice in the repo README.

---

*This document is the visual and quality contract for the Harambi public website until revised.*
