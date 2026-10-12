# Harambi Site — Locked Definition
**Status:** LOCKED  
**Date:** 2026-10-10  
**Purpose:** Authoritative pre-code specification for the public Harambi site (webuild.af / harambi-site)

---

## 1. Site Purpose

Introduce Harambi, make “crowd-building” clear in under 10 seconds, and invite people to enter the **Harambi Build channel** (waitlist / early participation).

This is the public face of an African enterprise-building operating system.  
It is **not** a crowdfunding website.

**Tone:** Serious, warm, institutional, confident. Ubuntu energy without soft marketing language. Clear > clever.

---

## 2. Color System

Built around **green · yellow · red · black** — institutional and grounded.

| Role | Color | Hex | Use |
|------|--------|-----|-----|
| Primary | Deep green | `#0B3D2E` | Headers, primary structure, key anchors |
| Primary soft | Living green | `#1F6B4A` | Hover, secondary emphasis |
| Accent | Warm yellow / gold | `#E8B84A` | Primary CTAs (Join the Build) |
| Secondary accent | Earth red | `#A63D2F` | Secondary actions, badges, emphasis |
| Deep black | Near-black | `#0D0D0D` | Strong text, dark surfaces |
| Soft black | Charcoal | `#1C1C1C` | Body text on light |
| Background | Warm off-white / sand | `#F5F1E8` | Page ground |
| Surface | Soft clay / cream | `#EBE4D6` | Cards, raised sections |
| Muted text | Warm gray | `#5A5348` | Supporting copy |
| Border | Soft stone | `#D6CFC0` | Lines, card edges |

**Rules**
- Green = structure and trust
- Yellow = main action only (Join)
- Red = sparingly for secondary emphasis
- Backgrounds stay warm and light (biophilic “natural light” quality)
- Avoid pure cold black blocks

---

## 3. Design Style

**Human-Centric + Biophilic + Contextual / Vernacular**

### Biophilic / Human-centric
- Open, breathable layouts — generous space that reads as natural light
- Soft, organic section transitions
- Flexible content blocks that adapt cleanly across devices
- Visual calm: limited noise, clear hierarchy, easy scanning

### Contextual / Vernacular
- Spirit of place: African, grounded, material, collective
- Visual language closer to brick, concrete, earth, timber, woven structure than glossy SaaS
- Honest geometry, strong horizontal bands, clear structural lines
- Imagery (when used): people collaborating / building / gathering in real light — no poverty tropes, no generic stock “tech Africa”

**Overall character:** Warm institutional. Capable. Human. Rooted.

---

## 4. Typography (locked)

| Role | Font | Notes |
|------|------|------|
| Display / Headings | **Geologica** | Weight 600–700; tight leading on large sizes |
| Body / UI | **Commissioner** | 16–18px base; weight 400 body, 500–600 UI |
| Labels | Commissioner | Uppercase sparingly for section labels only |

Import and CSS variables are defined in `Harambi_Website_Design_System_and_Anti_Slop_Spec.md`.  
Hierarchy: large H1 with tight leading → clear H2 section breaks → comfortable body (~60–70 characters line length).

---

## 5. Site Map

| Label | Route | Purpose |
|-------|--------|---------|
| Home | `/` | Hero + core proposition + two streams |
| What is Harambi | `/about` | Philosophy, mission, naming architecture |
| How it works | `/how-it-works` | Crowd-building explained |
| Kora | `/kora` | Commons operating system |
| Coforge | `/coforge` | Enterprise formation system |
| Join the Build | `/join` | Waitlist → Harambi Build channel |
| Covenant | `/covenant` | Public summary + downloadable (restricted) |

**Footer:** About · How it works · Kora · Coforge · Join the Build · Covenant · Contact

---

## 6. Page Content Outline

### Home `/`
- Hero
  - Headline: **Let’s Build Africa Together.**
  - Sub: Harambi is not crowdfunding. It is crowd-building — where the community becomes the project.
  - Primary CTA: **Join the Harambi Build**
  - Secondary CTA: **See how it works**
- Distinction block
  - Crowdfunding asks the crowd to fund a project.  
    Crowd-building asks the crowd to *become* the project.
- Two streams (cards)
  - **Kora** — Commons operating system. Collective capacity. The Accord.
  - **Coforge** — Enterprise formation. Institutional capacity. The Compact.
- What you can contribute (Capital · Capability · Labour · Knowledge · Network · Governance · Resources)
- North star: Building African capacity through African participation, so that what Africa builds, Africa owns.
- Final CTA strip → Join the Harambi Build

### About `/about`
- What Harambi is (movement + platform + institutional layer)
- Ubuntu foundation (structural, not poetic essay)
- Mission: African Sovereignty (capacity + ownership)
- Naming architecture table
- What Harambi is *not*

### How it works `/how-it-works`
- Crowd-building cycle
- Two pathways: General vs Directed contribution
- Contribution forms (money is one of many)
- High-level recognition (light)
- Trust spine mention (identity → permission → contribution → governance) without deep tech

### Kora `/kora`
- One-sentence definition
- Purpose: convert dispersed participation into structured, accountable capacity
- The Accord
- Who it’s for
- Relationship to Harambi and Coforge

### Coforge `/coforge`
- One-sentence definition
- Purpose: convene companies and institutions to co-create and hold opportunities from the start
- The Compact
- Who it’s for
- Clear distinction from Kora

### Join the Build `/join`
- Invitation: enter the Harambi Build channel (waitlist / early participation)
- Short explanation of Co-builder at this stage
- Form fields:
  - Full name
  - Email
  - Country / region
  - Contribution interest (Capital · Capability · Labour · Knowledge · Network · Governance · Other)
  - Optional note
- Primary button: **Join the Harambi Build**
- Confirmation: on waitlist / will be admitted to the channel when ready
- Light link to Covenant

### Covenant `/covenant`
- Public summary of core principles (plain language)
- Central proposition: *Harambi’s knowledge may travel freely; Harambi’s institutional trust must be earned and governed.*
- Key principles listed
- Downloadable public version (restricted / curated content)
- Note that full institutional draft access is managed under Harambi process

---

## 7. Layout & Responsive

- Mobile-first
- Breakpoints: <640 mobile · 640–1024 tablet · >1024 desktop
- Max content width ~1120–1200px, generous side padding
- Open vertical rhythm
- Sticky / simple top nav → hamburger on mobile
- Primary yellow CTA repeated at decision points
- Cards equal visual weight, warm surface color
- Footer stacked on mobile, structured on desktop

**Core components**
- Primary button (yellow)
- Secondary button (outline green or red accent)
- Section header pattern
- Feature card
- Principle / quote block
- Form fields
- Nav (desktop + mobile)
- Download affordance (Covenant)

---

## 8. Explicitly Out of Scope (this phase)

- Authenticated app / dashboard
- Live contribution or payment flows
- Full project discovery / builder tools
- Complex governance UI
- Dark mode
- Blog / long-form knowledge base

---

## 9. Locked Decisions

| Item | Decision |
|------|----------|
| Colors | Green, yellow, red, black (warm application) |
| Join | Waitlist → Harambi Build channel |
| Style | Human-centric / biophilic + contextual / vernacular |
| Covenant | Downloadable public version with restricted contents |
| Stack target | Align with existing Next.js + TypeScript project practices |

---

*This document is the single source of truth for the public site until revised.*
