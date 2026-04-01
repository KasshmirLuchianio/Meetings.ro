# plan.md — Meetings.ro Bilingual Commercial Landing Page

## 1. Objectives
- Deliver a polished, minimalist, Shadcn/UI-inspired commercial landing page for **Meetings.ro** (not docs).
- Support **bilingual UI toggle (EN|RO)** with **language-specific SEO/meta** (titles, descriptions, OG, canonical/hreflang if applicable).
- Drive conversion with primary CTA linking to the **existing app** (start free trial / 3 reports included).
- Communicate value to Romanian public officials/GAL teams (45–50+), emphasizing relief, clarity, compliance.
- Include **real monthly pricing**, GDPR/confidentiality, Romanian support, and public-institution positioning.
- Ensure excellent **mobile responsiveness** and compatibility on older office browsers.

## 2. Implementation Steps

### Phase 1: Core UX/SEO POC (Isolation) — lightweight (no external APIs)
Goal: prove the hard parts for a marketing site: bilingual routing/state + correct meta + accessible toggle.

User stories:
1. As a visitor, I can switch instantly between RO and EN with clear EN|RO buttons.
2. As a visitor, the page preserves my chosen language while I navigate/refresh.
3. As Google/social crawlers, I receive correct language-specific title/description/OG tags.
4. As a visitor on mobile, the hero + CTA remains readable without horizontal scrolling.
5. As an accessibility user, the language toggle and CTA are keyboard navigable and screen-reader friendly.

Steps:
- Inspect existing React frontend structure (router, layout, head management, styling, build tooling).
- Decide bilingual strategy:
  - Preferred: **/ro** and **/en** routes (best for SEO) OR fallback to in-page toggle + query param if routing is constrained.
- Implement minimal page skeleton with language toggle and a few strings.
- Implement metadata handling per language (React Helmet or framework-native head solution).
- Validate:
  - Toggle works, persists (localStorage + URL), no flicker.
  - Meta changes reflect the language (view-source / prerender constraints considered).
- Fix until stable before building full page.

### Phase 2: V1 Landing Page Development (Full build)
Goal: build complete landing page with commercial copy, pricing, and trust sections.

User stories:
1. As a city hall staff member, I immediately understand the benefit (40% time reduction) and what to do next.
2. As a GAL team member, I understand offline recording/upload fits field realities.
3. As a secretary/clerk, I can see the structured “9 fields” output and trust it’s audit-ready.
4. As a decision maker, I can compare pricing plans with clear monthly costs and what’s included.
5. As a cautious institution, I can confirm GDPR/confidentiality, Romanian support, and public sector fit.

Steps:
- Create the page layout (single landing route with sections) using Tailwind + Shadcn-inspired components.
- Typography: Space Grotesk (headings) + Inter (body) loaded efficiently (subset, display swap).
- Color system: #115E87 primary, pale turquoise accents, success green; ensure AA contrast.
- Sections to implement (both languages):
  - Hero: title/subtitle, primary CTA linking to existing app, secondary CTA (scroll to pricing).
  - Problem/Solution: offline upload narrative (“internet not always on your side”).
  - “What Meetings does” 9 fields: grid/cards + “not transcription; audit-ready structure”.
  - Smart features: locality folders, instant export PDF/DOCX, quick search.
  - Security & trust: GDPR/confidentiality, dedicated processing, Romanian support, public institution focus.
  - Pricing: real monthly prices, plan comparison table/cards, “request custom offer” secondary path.
  - FAQ: reduce objections (no tech skill; “if you can use WhatsApp…”; data handling; how it fits workflows).
  - Footer: legal links placeholders, contact, language switch, copyright.
- Generic device framing/mockup:
  - Build a simple “phone frame” component with representative UI screenshot placeholders (text-based) to avoid needing assets.
- Add conversion polish:
  - Sticky header with CTA.
  - Social proof placeholders (optional) without fake logos; keep honest.
  - Clear “Start free (3 reports included)” messaging.
- Implement SEO:
  - RO meta: keywords around “procese-verbale”, “rapoarte GAL”, “primării”, “automatizare”, etc.
  - EN meta: “minutes automation”, “public administration Romania”, etc.
  - OG/Twitter cards (generic).
  - If routing supports: hreflang for /ro and /en.

Checkpoint: Run one end-to-end pass (desktop + mobile) for RO and EN.

### Phase 3: QA, Hardening, and Performance
Goal: make it production-ready, fast, and robust.

User stories:
1. As a mobile user on slow internet, the page loads quickly and remains usable.
2. As a user on older institutional PCs, layout doesn’t break and text remains readable.
3. As an accessibility user, headings/landmarks are correct and focus states visible.
4. As a visitor, all CTAs always take me to the correct app URL.
5. As a marketer, I can verify SEO tags and share previews per language.

Steps:
- Add comprehensive responsive testing (320px → large screens) and fix layout shifts.
- Lighthouse pass: address performance (font loading, image placeholders, unused CSS), accessibility.
- Ensure all links are correct; app CTA uses configurable env var.
- Add analytics hooks placeholders (no vendor lock-in): data attributes for CTAs.
- Add basic unit/regression checks where applicable (language strings map completeness).
- Final cross-language review: ensure tone matches public sector audience; avoid overusing “AI” (use “Digital Secretary”).

## 3. Phase Status & Next Actions
- **Phase 1 complete:** bilingual routing POC for `/ro` and `/en` is working.
- **Phase 2 complete:** full bilingual commercial landing page implemented with hero, offline-upload problem/solution, 9-field structure, smart features, security/trust, pricing, FAQ, final CTA, and footer.
- **Phase 3 complete:** end-to-end frontend testing passed with 100% success. Report: `/app/test_reports/iteration_1.json`.
- Verified outcomes:
  - Route-based EN/RO switching with persistence and language-specific metadata.
  - CTA links point to `https://gal-transcribe.preview.emergentagent.com/`.
  - Pricing matches confirmed plans: Free $0, Basic $175, Full $250.
  - Responsive desktop, tablet, and mobile layout validated.
- Next actions:
  - If requested later, add institution-specific contact flows, analytics, or legal pages.
  - Current landing page is ready for review on the preview URL.

## 4. Success Criteria
- Bilingual toggle works instantly, persists, and is accessible.
- Correct language-specific SEO/meta is present (title, description, OG/Twitter; hreflang if routed).
- Landing page looks like a commercial SaaS (minimalist, airy, Shadcn-inspired), not documentation.
- Primary CTA reliably links to existing app; secondary CTA scrolls to pricing.
- Pricing section displays real monthly prices clearly with plan differences.
- Trust section clearly communicates GDPR/confidentiality, Romanian support, public-institution fit.
- Passes end-to-end QA on mobile + desktop; no broken sections; good Lighthouse baseline (perf/accessibility).