# Harambi Website — Static HTML

Plain HTML + CSS conversion of the locked Harambi public site.

**Purpose:** Edit in VS Code, preview locally, and import into Figma via HTML-to-design plugins.

**Source of truth for design:**  
`../Harambi_Site_Definition_Locked.md`  
`../Harambi_Website_Design_System_and_Anti_Slop_Spec.md`  
`../Harambi_Website_Copy_v1.md`

---

## Structure

```
harambi-html/
├── index.html          # Home
├── about.html          # What is Harambi
├── how-it-works.html
├── kora.html
├── coforge.html
├── join.html           # Build channel waitlist
├── covenant.html
├── contact.html        # Contact (addition outside locked 7-route map — see Assumptions)
├── favicon.svg         # Minimal deep-green / gold / sand mark (self-hosted, no requests)
├── css/
│   └── styles.css      # Design tokens + components (no Tailwind build)
├── js/
│   └── main.js         # Mobile nav only
└── README.md
```

## Design system (locked)

| Token | Value |
|-------|-------|
| Primary | `#0B3D2E` |
| Primary soft | `#1F6B4A` |
| Accent (CTA only) | `#E8B84A` |
| Secondary | `#A63D2F` |
| Ground | `#F5F1E8` |
| Surface | `#EBE4D6` |
| Border | `#D6CFC0` |
| Ink | `#0D0D0D` / `#1C1C1C` / `#5A5348` |
| Display font | **Geologica** |
| Body font | **Commissioner** |

All tokens live in `:root` inside `css/styles.css`.

## Edit in VS Code

1. Open the `harambi-html` folder.
2. Install **Live Preview** (or any static server).
3. Open `index.html` → Live Preview.
4. Edit HTML structure or `css/styles.css` — changes are immediate.

No Node, no Tailwind build, no npm required.

## Import into Figma

Recommended workflow:

1. Serve the folder locally (Live Preview, `npx serve`, or open files directly).
2. Use an HTML-to-Figma plugin such as:
   - **html.to.design**
   - **Anima**
   - **Locofy** (or similar)
3. Import page-by-page (or full site URL if hosted).
4. Clean up: convert repeated elements into Figma components, apply auto-layout, map colors to Figma variables using the token table above.

**Why this HTML is better for import than the Next.js app:**
- No React / hydration markup
- Semantic sections and clear class names (`.card`, `.btn-primary`, `.section-label`)
- CSS variables and named components instead of pure Tailwind utility soup
- Stable layout structure that plugins parse more reliably

## Pages ↔ routes

| File | Original route |
|------|----------------|
| `index.html` | `/` |
| `about.html` | `/about` |
| `how-it-works.html` | `/how-it-works` |
| `kora.html` | `/kora` |
| `coforge.html` | `/coforge` |
| `join.html` | `/join` |
| `covenant.html` | `/covenant` |
| `contact.html` | *(none — footer Contact link addition)* |

## Assumptions (outside the three locked docs)

1. **Contact page** — the locked footer spec lists Contact but defines no route or address. `contact.html` was added (small, same chrome, same components) with a placeholder email `hello@webuild.af`. Update the address when the real one exists.
2. **Covenant PDF** — the download control points at `#` until the curated public PDF is supplied; swap the `href` when the file is ready.
3. **Join form** — client-side success state only (no backend in this phase). Wire the form `action` to your waitlist endpoint when ready.
4. **Apostrophes** — typographic (’) used to match `Harambi_Website_Copy_v1.md` exactly.

## Copy compliance

All page body copy follows `Harambi_Website_Copy_v1.md` verbatim (hero, distinction, two systems, contribution, About sections, How-it-works sections, Kora/Coforge sections, Join form framing + success state, Covenant principles). CTA hierarchy: **yellow `.btn-primary` is used only for "Join the Harambi Build"**; the Covenant download uses the green outline `.btn-secondary`.

## P0 a11y / correctness notes

- Header uses the solid `--color-ground` token (no blur / glass effects).
- Decorative yellow uses removed everywhere except the Join CTA and the functional `:focus-visible` outline: section labels on green bands, the quote rule, and footer hover/active states now use ground/white tints, primary green, and underline. (The focus-visible outline remains yellow — see Unresolved below.)
- `prefers-reduced-motion` disables smooth scrolling for reduced-motion users.
- Every page has a skip-to-content link targeting `#main` and a self-hosted `favicon.svg` (deep-green square, gold band, sand rule — identity-consistent, no external requests).
- Mobile menu: `aria-controls` wired to `#mobile-nav`, Escape closes the menu and returns focus to the toggle, `aria-expanded` stays accurate; `aria-current="page"` marks the active link in desktop, mobile, and footer nav.
- Join success: `role="status"` announcement + focus moves to the success heading. Form remains a prototype placeholder with no backend.

## Unresolved issues

- **`:focus-visible` outline is still yellow** (`styles.css`): the exception was intentional — high-visibility focus indication is an accessibility requirement ("existing functional focus-indicator requirements"), and yellow on deep green meets contrast needs. ❗**Open for your review:** if you read the "yellow = Join only" rule as absolute, this should change to a different indicator (e.g. green outline, doubled/thicker). No change made.
- **Browser testing not possible from here:** I verified every change by reading the files and grepping the markup (skip links, `id="main"`, aria wiring, favicon refs present on all 8 pages; blur and stray yellow gone). The items below need **manual browser verification**: skip-link visibility/focus behavior on keyboard Tab, Escape-close with focus return on a real mobile-width menu, Join form submit → success announcement via a screen reader, favicon rendering in tabs, and keyboard traversal of all 8 pages.

## Notes

- Join form is client-side placeholder (shows success state on submit). Wire to your waitlist backend when ready.
- Covenant download link is a placeholder (`href="#"`). Point it at the public PDF when available.
- Header and footer are duplicated per page for maximum Figma/plugin friendliness (no includes required).
- Original Next.js source remains in `../harambi-site/` if you need the production stack later.
