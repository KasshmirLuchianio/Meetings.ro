# plan.md — Meetings.ro Landing Page (Delta PRD: Stores + Rebrand + Verticals + New Pricing)

## 1. Objectives
- Maintain the existing **React** landing app and **SEO-first bilingual routing**: **`/ro`** and **`/en`** (unchanged).
- Keep the landing **static-only** (no auth/backend work; no app hosting changes inside this repo).
- Apply **only the explicitly requested deltas** (3 epics). Anything not listed is out of scope.
- Update conversion flow: replace all “open app / start free” CTAs with **official App Store + Google Play badges**.
- Complete **rebranding from GAL → Meetings.ro** (strings + meta + assets) while preserving **GAL** only as a legitimate vertical use-case in the dedicated “Verticale” section.
- Add a new “Verticals/Industry” section to expand beyond public administration.
- Replace pricing fully with the new EUR tiers + billing toggle, update pricing-related FAQ only.
- Ensure regression safety: sections explicitly marked “unchanged” remain visually and structurally consistent.

## 2. Implementation Steps

### Phase 1: Core UX/SEO POC (Isolation) — complete
Goal: verify `/ro` and `/en` routing, language persistence, accessible toggle, and per-route SEO/meta.

User stories:
1. As a visitor, I can switch instantly between RO and EN.
2. As a visitor, my language preference persists on refresh.
3. As a crawler, each route has correct title/description/OG/canonical/hreflang.

Status:
- ✅ Implemented `/ro` and `/en` routes.
- ✅ Implemented language persistence.
- ✅ Implemented per-route metadata (Helmet).

---

### Phase 2: V1 Landing Page Development (Full build) — complete (baseline)
Goal: deliver a complete bilingual commercial landing page with the initially agreed sections.

Status:
- ✅ Implemented hero, offline upload story, 9 fields, smart features, security/trust, pricing, FAQ, final CTA, footer.
- ✅ E2E frontend test pass recorded.

Note:
- This phase is now the baseline that will be modified **only** by the delta PRD epics below.

---

### Phase 3: Delta PRD Implementation — STRICT SCOPE (EP-01..EP-03)
Goal: apply only the requested deltas while ensuring unchanged sections remain stable.

#### EP-01 (P0 Blocker) — Rebranding + Store CTAs + New Tokens

**EP-01 · ST-001 (P0) — Systematic string replacement + SEO/meta + Meetings.ro assets**
User stories:
- As a visitor, I see consistent Meetings.ro branding and no “GAL Meetings” product naming.
- As a crawler, I see updated RO/EN titles/descriptions/OG tags and canonical URLs for meetings.ro.

Steps:
1. **String audit + replacements (script + manual review):**
   - Replace:
     - “GAL Meetings” → “Meetings.ro”
     - “Aplicația GAL” → “Aplicația Meetings.ro”
     - “Raport GAL structurat” → “Raport structurat automat”
     - “echipele GAL” → “echipele tale” / “organizația ta”
     - “Grupuri de Acțiune Locală” → remove or keep only as an example vertical (see exception)
   - **Do not do blind find/replace** where context requires rewriting.
2. **Allowed exception:**
   - “GAL” may remain only inside the “Verticale / Industry” section as a use case (not branding).
3. **Meta updates per route (must):**
   - Meta title target (RO): `Meetings.ro — Înregistrare și Transcriere AI`
   - Update `og:title`, `og:description` per `/ro` and `/en`.
   - Canonical URLs:
     - `https://meetings.ro/ro`
     - `https://meetings.ro/en`
4. **Assets:**
   - Create minimalist **Meetings.ro** logo SVG (navy + ivory).
   - Add favicon set (SVG/PNG/ICO as needed by CRA).
   - Create/update **og:image** 1200×630 using the Meetings.ro logo.
5. **Verification script:**
   - Run `grep -rn "GAL" src/` and ensure **0 results in UI copy**, except the Verticale section.

Acceptance criteria:
- No “GAL Meetings” / “Aplicația GAL” etc remain.
- `grep -rn "GAL" src/` returns 0 except Verticale section.
- Canonical points to `https://meetings.ro/{lang}`.
- `og:image` is the new Meetings.ro asset.

**EP-01 · ST-002 (P0) — Replace all CTAs with App Store + Google Play badges**
User stories:
- As a visitor, I can see and click official store badges (no custom redesign).
- As an SEO crawler, store badge links are not broken.

Steps:
1. Replace all CTAs that link to the previous web-app URL with **two official badges**:
   - App Store badge (official SVG)
   - Google Play badge (official SVG)
2. Localization:
   - `/ro`: official RO badges
   - `/en`: official EN badges
3. Placeholder href (until stores are live):
   - `#coming-soon` with tooltip:
     - RO: “Disponibil în curând”
     - EN: “Coming soon”
   - Cursor: `not-allowed` and prevent accidental navigation if needed (but keep href non-empty).
4. Placement (must):
   - **Hero (primary)**
   - **Navbar**: small “Descarcă” button area (replaced with badge(s) or a small entry that reveals badges)
   - **Final CTA section**
5. Layout:
   - `display:flex; gap:12px; flex-wrap:wrap;` stack on mobile.
   - On mobile: show relevant platform first (iOS-first on Safari, Android-first on Chrome Android).
6. Accessibility:
   - Alt text:
     - RO: “Descarcă Meetings.ro din App Store” / “Descarcă Meetings.ro din Google Play”
     - EN equivalents.

Acceptance criteria:
- No CTA links to `gal-transcribe.preview...` remain.
- Only official badge SVG assets are used (no recolor/rescale beyond guideline constraints).
- Tooltip + #coming-soon present.

**EP-01 · ST-003 (P1) — Replace design tokens with Meetings.ro palette**
User stories:
- As a visitor, the brand feels premium (ivory + navy + gold) with good readability.

Steps:
1. Update CSS variables (in `index.css` or central token file):
   - Background: `#FAF8F3` (ivory)
   - Primary: `#1B2A4A` (navy)
   - Accent: `#B8962E` (gold)
2. Replace previous blue/turquoise tokens.
3. Ensure **WCAG AA** contrast for body text and buttons.
4. Dark mode:
   - Keep functional if already present, but **do not add a new dark mode toggle** (per clarification).

Acceptance criteria:
- New palette visible across key surfaces, headings, featured states.
- No regressions in readability.

---

#### EP-02 (P1) — New verticals + updated hero headline

**EP-02 · ST-004 (P0 in EP-02) — New section: “Adaptat pentru domeniul tău / Built for your industry”**
User stories:
- As a visitor, I understand Meetings.ro works beyond public administration.

Steps:
1. Insert new section **between “9 fields structured” and “Smart features”**.
2. Grid layout:
   - `repeat(auto-fit, minmax(200px, 1fr))`
   - 4 cards desktop, 2 tablet, 1 mobile.
3. 4 vertical cards (bilingual):
   - GAL / Administrativ (no “Nou” badge)
     - extracts: 9 official fields, locality, attendees
     - use case: “Rapoarte LEADER generate automat”
   - Banking & Financiar (badge “Nou” in gold)
     - extracts: compliance points, action items, risk flags, final decision
     - use case: “Minute de ședință conforme BNR”
   - Legal & Juridic (badge “Nou”)
     - extracts: clauses discussed, deadlines, obligations, parties
     - use case: “Documente negociere structurate instant”
   - Jurnalism & Media (badge “Nou”)
     - extracts: key quotes, quoted people, editorial angle
     - use case: “Interviuri transcrise și indexate”
4. Each card:
   - 24px monochrome navy SVG icon
   - title
   - list of 3 extracted items
   - italic one-sentence use case
5. Do not mention Healthcare/Startup.
6. No pricing per vertical here.

Acceptance criteria:
- Section exists in both languages.
- “GAL / Administrativ” card retains GAL mention only as a vertical use-case.
- Layout validated at 320px (iPhone SE).

**EP-02 · ST-005 (P1) — Update hero headline for broader audience**
Steps:
- Replace hero headline:
  - RO: “Orice ședință. Raport în minute.”
  - EN: “Any meeting. Report in minutes.”
- Subheadline includes explicit verticals: Banking, Legal, Journalism, and public administration (include GAL/admin).
- Keep hero visual mock unchanged unless it explicitly contains GAL branding.

Acceptance criteria:
- Headline max ~6 words; subheadline lists verticals.

---

#### EP-03 (P0) — Pricing replacement + pricing-related FAQ update

**EP-03 · ST-006 (P0) — Replace pricing section with new EUR tiers + annual/monthly toggle**
User stories:
- As a buyer, I can compare plans in EUR with clear included hours and benefits.

Steps:
1. Remove old Free/Basic/Full and all `$` references.
2. New pricing grid:
   - 4 tiers horizontal on desktop, stack on mobile.
   - Featured: **Business** (accent border).
   - Business has a “Popular” badge with:
     - bg `#E6F1FB`, text `#0C447C` (not gold).
3. Plans (content):
   - Free: `0€ /lună`, `10h înregistrare/lună`, Model AI: Nano, 1 vertical, Export PDF basic, 1GB.
   - Pro: `20€ /lună`, `30h/lună`, Model AI: Mini, 1 vertical, Export PDF+DOCX, 10GB.
   - Business (Popular): `60€ /lună`, `60h/lună`, Model AI: Pro, 3 verticale, Export PDF+DOCX branded, 50GB, Semantic search.
   - Enterprise: `900€ /an`, unlimited hours, Model AI Pro, unlimited verticals, SLA 99.9%, onboarding, invoice.
4. Billing toggle:
   - Monthly/Annual switch with savings label:
     - RO: “Economisești 2 luni cu plata anuală”
     - EN equivalent.
5. Currency:
   - EUR only.
6. CTAs:
   - Business CTA uses store badges (same flow as hero).
   - Enterprise CTA: “Contactează-ne” → `mailto:hello@meetings.ro`.
7. Add-on card below grid:
   - “Vertical dedicat” — `90€/lună` — Banking, Healthcare, Legal, Journalism — available from Pro.
8. Footnote:
   - “Prețuri fără TVA”
9. Add schema.org Offer markup for pricing (risk R-004):
   - `priceCurrency: "EUR"`.

Acceptance criteria:
- No `$` remains in repo (`grep -rn "\$" src/` returns 0).
- Pricing section matches spec and is bilingual.
- Business is featured and uses store badges.
- Enterprise mailto link works.

**EP-03 · ST-007 (P1) — Update only pricing-related FAQ items + add one new question**
Steps:
1. Identify FAQ entries that mention old tiers or USD values:
   - “Basic”, “Full”, “$175”, “$250”, “15 înregistrări”, “unlimited”.
2. Update answers to Free/Pro/Business/Enterprise and **hours** (not recordings).
3. Add exactly 1 new question:
   - RO: “Funcționează pentru domenii în afara administrației publice?”
   - EN equivalent.
   - Answer: yes, verticals available.
4. Do not add more than 2 new questions total.

Acceptance criteria:
- Only pricing-related FAQ content changed; others unchanged.

---

### Phase 4: QA, Regression Safety, and Performance (Delta-focused)
Goal: ensure the delta changes meet PRD and unchanged sections remain stable.

User stories:
1. As a visitor, I see correct store CTAs without broken links.
2. As a visitor, pricing is consistent in EUR and matches toggle behavior.
3. As a crawler, canonical/og/meta are correct for `meetings.ro/{lang}`.
4. As a mobile user (320px), verticals grid wraps and text doesn’t clip.

Test checklist:
- Route behavior:
  - `/` redirects to preferred language.
  - `/ro` and `/en` render correctly.
- Language switching:
  - Toggle works and persists.
- EP-01 verification:
  - `grep -rn "GAL" src/` → only Verticale section allowed.
  - `grep -rn "\$" src/` → 0.
  - Meta titles/descriptions updated; `og:image` updated.
  - Canonicals point to `https://meetings.ro/ro` and `/en`.
- Store badges:
  - Official SVG assets, localized.
  - `#coming-soon` + tooltip present.
  - Mobile ordering per platform.
- Pricing:
  - 4 cards + add-on card + VAT note.
  - Annual/monthly toggle + savings label.
  - Enterprise mailto.
  - schema.org Offer uses EUR.
- Visual regression:
  - Offline upload story, 9 fields section, trust/security, footer structure remain consistent except allowed changes.

## 3. Phase Status & Next Actions
- ✅ Phase 1 complete: bilingual routing + per-route SEO/meta validated.
- ✅ Phase 2 complete: baseline landing page implemented and tested.
- 🔜 Phase 3 next: implement strict delta PRD epics EP-01..EP-03 only.
- 🔜 Phase 4 next: delta-focused QA + regression verification.

## 4. Success Criteria
- **Scope discipline:** only EP-01..EP-03 changes are applied; unchanged sections remain stable.
- **Rebrand:** Meetings.ro naming everywhere; no stray “GAL Meetings” strings; meta updated per route.
- **CTAs:** all CTAs replaced by official store badges (localized), linking to `#coming-soon` with tooltip.
- **Tokens:** ivory background + navy primary + gold accent applied consistently; AA contrast maintained.
- **Verticals:** new industry section inserted after 9 fields; works at 320px.
- **Pricing:** replaced fully with EUR plans + toggle + add-on; no `$` anywhere; schema uses EUR.
- **FAQ:** only pricing-related Q/A updated + one new industry question.
- **Testing:** end-to-end checks pass on desktop/tablet/mobile; no broken anchors, badges, or metadata.
