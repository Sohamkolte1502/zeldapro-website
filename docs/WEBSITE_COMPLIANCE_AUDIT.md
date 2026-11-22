# Zeldapro Website — Organizational Compliance & App Store Review Risk Audit

**Audit type:** Codebase-only diagnosis (no file modifications)  
**Repository:** `d:\zeldapro`  
**Stack:** Vite + React + TypeScript, Tailwind v4, `react-router-dom`, `react-helmet-async`  
**Primary domain (declared in data):** `https://www.zeldapro.com`  
**Audit date:** 22 November 2026  
**Build verification:** `npm run build` succeeded at audit time  
**Live production testing:** Not performed — HTTPS, DNS, deployed privacy URL parity, and form POST behavior require org/hosting confirmation

---

## 1. Executive Summary

This React corporate site has **strong marketing structure** (multi-page routing, services/solutions/industries catalog, accessible chrome, Carevie product narrative with explicit placeholder labeling in several places). From an **Apple App Review organizational-verification** and **legal transparency** perspective, however, the codebase is **not publication-ready**.

The site **publicly displays unresolved placeholder organizational data** (legal name, address, email, phone), **draft legal pages** that state they are not final, **non-functional contact channels** when `VITE_FORM_ENDPOINT` is unset, **placeholder social URLs**, and a **privacy notice that does not reflect form processing or product (Carevie) data practices**. The About/Home SEO layer uses an **empty mission string**, producing weak or empty meta descriptions.

**Final verdict:** **NOT READY** for external organizational verification or for use as the canonical support/privacy URL during iOS submission until **critical** items in the risk register are resolved with **organization-confirmed** facts and **legally reviewed** policies.

---

## 2. Overall Website Readiness Assessment

| Area | Status | Evidence |
|------|--------|----------|
| Route coverage & build | Good | 18+ marketing routes in `App.tsx`; production build passes |
| Organizational identity | **Fail** | Placeholders in `src/data/company.ts` rendered in footer, copyright, legal pages |
| Contact & support | **Fail** | No verified `mailto:`/`tel:`; form depends on env endpoint |
| Privacy / Terms | **Fail** | Explicit draft templates; incomplete vs actual site behavior |
| Product ↔ org linkage (Carevie) | **Partial** | `/carevie` exists; no App Store link; feature “Available” vs “concept” messaging conflict |
| Credibility / placeholder content | **Mixed** | Insights labeled draft (good); footer/legal placeholders (bad) |
| Technical SEO | **Weak** | Title-only Helmet; no OG/canonical/sitemap/robots in repo |
| Internal/dev exposure | **Risk** | Public `/design` styleguide route without main chrome |

---

## 3. Organizational Identity Audit

**Brand name used consistently:** “Zeldapro” appears in logo alt text, page titles (`Seo` suffix), and copy across data files. **No contradictions** found between “Zeldapro” and another trade name in code.

| # | Requirement | Codebase finding | Status |
|---|-------------|------------------|--------|
| 1 | Full legal organization name | `[Legal entity name — pending confirmation]` | **NEEDS ORGANIZATION CONFIRMATION** — shown in footer copyright |
| 2 | Registered business name (if different) | Not present | **NEEDS ORGANIZATION CONFIRMATION** |
| 3 | Company registration number | Not present | **NEEDS ORGANIZATION CONFIRMATION** |
| 4 | Registered office address | `[Registered address — pending confirmation]` in data only | **NEEDS ORGANIZATION CONFIRMATION** — **not displayed on any page** |
| 5 | Operating address | Not present | **NEEDS ORGANIZATION CONFIRMATION** |
| 6 | Official email | `[enquiries@zeldapro.com — pending confirmation]` in footer as plain text (not `mailto:`) | **NEEDS ORGANIZATION CONFIRMATION** |
| 7 | Telephone | `[Published phone — optional, pending confirmation]` in footer | **NEEDS ORGANIZATION CONFIRMATION** |
| 8 | Ownership / corporate identity | About page has vision/values only; no leadership, registration, or parent entity | **Incomplete** |
| 9 | What the organization does | Clear enterprise AI/consulting positioning via `BRIEF.md` and service/solution pages | **Adequate for marketing** |
| 10 | Name consistency | Consistent “Zeldapro” branding | **Pass** |
| 11 | Logo / metadata / legal consistency | Copyright uses placeholder legal name; privacy references placeholder email | **Fail** |

**Source of truth:** `src/data/company.ts` lines 93–101 (contact block). Type documents intent: “Replace before production” (lines 13–17).

**Mission statement:** `company.mission` is empty string (line 42–43), weakening About narrative and SEO descriptions.

---

## 4. Apple Review Risk Assessment

*Note: Apple does not publish a fixed checklist for “company website” content, but reviewers commonly use the **Support URL**, **Privacy Policy URL**, and **developer/account metadata** to assess legitimacy, reachability, and policy alignment. Findings below are **risk-based**, not asserted as formal Apple requirements.*

| Risk | Likelihood of scrutiny | Why |
|------|------------------------|-----|
| Cannot identify legal entity from site | **High** | Footer copyright and Terms IP section use placeholder legal name |
| Cannot contact organization | **High** | No working email link; phone placeholder; form fails without endpoint |
| Privacy URL in App Store Connect does not match substantive policy | **High** | Privacy page is labeled draft; gaps vs form and health-adjacent product |
| Website looks unfinished | **Medium–High** | Draft badges on Insights, “UI placeholder” on Carevie, `/design` page |
| Product claims vs app reality (Carevie / health) | **High** (if submitting Carevie or health app) | Features marked “Available”; summary calls product a “concept”; no store download link |
| Social proof links dead or fake | **Medium** | LinkedIn/X/YouTube `*-placeholder` URLs |

**Can a reviewer identify the organization immediately?** **Partially** — brand and business description yes; **legal entity and verifiable contact no.**

**Is the org–app relationship clear?** **Partial** — Carevie described as Zeldapro innovation (`carevie.ts`, `/carevie`), but no explicit “developed by [legal entity]” or store listing link.

**Public access / auth:** No gating in code; all marketing routes are public SPA routes (subject to hosting).

---

## 5. Privacy Policy Audit

**File:** `src/pages/PrivacyPage.tsx`

### What exists

- Draft disclaimer (hero + “Draft status” section)
- High-level bullets: contact form data, technical/browser info, communications
- Uses: enquiries, site operation, legal compliance
- Contact: points to `company.contact.email` (placeholder)

### Gaps vs typical App Review / GDPR-style expectations (and vs **actual site behavior**)

| Topic | Present? | Gap |
|-------|----------|-----|
| Data controller identity (legal name, address) | No | Placeholder entity not suitable for published policy |
| Types collected (detailed) | Partial | Form also collects company, phone, service, marketing opt-in, topic, `sourcePath` — not enumerated |
| Purpose / lawful basis | Minimal | No retention, marketing opt-in basis, or international transfer |
| Storage & processors | No | `VITE_FORM_ENDPOINT` backend not named |
| Third-party services | No | No analytics named (none in code, but should state if absent) |
| Retention & deletion | No | — |
| User rights & complaints | No | — |
| Security | No | — |
| Children’s privacy | No | Relevant if Carevie family/health audience |
| Cookies / tracking | No | No cookie banner; no policy section |
| Health / sensitive data | No | Carevie copy discusses health records; site policy silent |

**Contact form** (`src/components/contact/ContactForm.tsx`): requires Privacy Policy agreement (line 164–165); posts JSON to `VITE_FORM_ENDPOINT` (lines 181–217). Policy does not describe this processing pipeline.

**Severity:** **CRITICAL** for any app submission requiring a privacy policy URL; **CRITICAL** for health-adjacent apps.

---

## 6. Legal Documentation Audit

### Terms of use — `src/pages/TermsPage.tsx`

- Labeled **draft**; states legal counsel must approve
- Basic acceptable use and IP (references placeholder `legalName`)
- Governing law, liability limits, dispute resolution: **deferred to “final legal version”**

### Other legal pages

| Document | Route | Status |
|----------|-------|--------|
| Privacy | `/privacy` | Draft template |
| Terms | `/terms` | Draft template |
| Cookie policy | — | **Missing** |
| Refund / cancellation | — | Not applicable on marketing site unless e-commerce added |

**Cookie / consent:** No cookie banner or consent mechanism found in `src/`.

---

## 7. Website Functionality Audit

### Routing (`src/App.tsx`)

| Route | Page | Nav / footer | Notes |
|-------|------|--------------|-------|
| `/` | Home | Yes | — |
| `/about` | About | Yes | Empty mission in body |
| `/services`, `/services/:slug` | Services | Yes | 9 services |
| `/ai-solutions`, `/ai-solutions/:slug` | Solutions | Yes | Brief references `/solutions` — **URL mismatch** with brief only |
| `/industries`, `/industries/:slug` | Industries | Yes | — |
| `/software` | Software | Footer | — |
| `/innovation` | Innovation | Footer | — |
| `/insights`, `/insights/:slug` | Insights | Yes | All articles draft |
| `/carevie` | Carevie | From home | Product page |
| `/contact`, `/contact/:topic` | Contact | Yes | No direct email on hub |
| `/privacy`, `/terms` | Legal | Footer | Draft |
| `/design` | Design system | **No** | **Public**, outside `MainLayout` |
| `*` | 404 | — | OK |
| `/careers` | — | **Missing route** | Only `/contact/careers` topic |

### Contact form

- **Validation:** Present (name, company, email, service, message, privacy consent)
- **Honeypot:** Present
- **Submission:** Fails with user-visible error if `VITE_FORM_ENDPOINT` empty (`.env.example` line 1 is blank)
- **No fallback:** No `mailto:` alternative on contact pages

### External links

- Footer social: **placeholder hosts** (`Footer.tsx` lines 6–18) — likely 404 or wrong entity

### Assets

- Build bundles images/fonts; `public/videos/hero.mp4` referenced for contact hero
- Duplicate asset name: `src/assets/Headers/industries.webp.webp` (potential confusion; verify usage)

### Hosting (not in repo)

- `vite.config.ts` has **no** SPA fallback configuration — production host must rewrite all routes to `index.html` or deep links break (**requires live test**)
- No `robots.txt` / `sitemap.xml` in `public/`

### Accessibility (code review)

- `SkipToContent`, semantic landmarks, form labels: **positive**
- Privacy consent uses `role="switch"` button (`ContactForm.tsx`) — unconventional vs checkbox; low–medium a11y note

### Responsive / console

- Not run in browser in this audit — **requires live testing**

---

## 8. Content and Credibility Audit

### Verified / intentional honesty (positive)

- Insights index states sample content until editorial publish (`InsightsIndexPage.tsx` line 35–36)
- Insight articles carry `DRAFT` badges and detail page disclaimer (`InsightDetailPage.tsx` lines 30–36)
- Industry “example scenarios” labeled illustrative (`IndustryDetailTemplate.tsx`)
- Carevie disclaimers: placeholders, “Coming soon”, validate release notes (`CareviePage.tsx`, `carevie.ts` summary)
- `BRIEF.md` guardrails against fake clients/metrics

### Problems

| Issue | Location | Concern |
|-------|----------|---------|
| Placeholder legal/contact in production UI | Footer, Terms, Privacy | Looks non-genuine to reviewers |
| Empty mission | `company.ts`, `HomePage` / `AboutPage` SEO | Empty meta description on home |
| Carevie features `available` vs summary “product concept” | `carevie.ts` | Misleading if app features differ |
| No client logos/testimonials in grep | — | Good — no fake social proof found |
| Insights in main nav | Navbar | Draft content still prominently linked |

---

## 9. Technical and SEO Audit

| Item | Status | Location |
|------|--------|----------|
| Per-page `<title>` | Yes | `Seo.tsx` |
| Meta description | Optional prop; **empty on home** | `HomePage.tsx` uses `company.mission` |
| Open Graph / Twitter cards | **Not implemented** | `Seo.tsx` only title + description |
| Canonical URL | **Not implemented** | — |
| `lang="en"` | Yes | `index.html` |
| Favicon / apple-touch-icon | Yes | `index.html`, `public/favicon.png` |
| JSON-LD Organization schema | **Not implemented** | — |
| `robots.txt` | **Missing** from `public/` | — |
| `sitemap.xml` | **Missing** | — |
| Default HTML title | Generic “Zeldapro” | `index.html` |
| 404 | Client-side `NotFoundPage` | SEO: host should return 404 for unknown paths — **host-dependent** |

---

## 10. Missing Information Requiring Company Confirmation

1. Registered **legal entity name** (for footer, Terms, Privacy controller section)
2. **Registered** and/or **operating address** (visible on Contact and/or Privacy)
3. **Company registration identifier** (jurisdiction-specific)
4. **Verified** enquiry email and optional phone (`mailto:` / `tel:` links)
5. **Approved** LinkedIn, X, YouTube URLs (or remove links)
6. **Mission statement** and optional leadership / “about the company” facts
7. **Carevie** — actual shipped features vs marketing; App Store URL; clinical/regulatory positioning
8. **Form backend** — what system receives `VITE_FORM_ENDPOINT` (for privacy policy processors)
9. **Production hosting** — HTTPS, SPA redirects, live URL matches App Store Connect entries
10. **Jurisdiction** for Terms governing law
11. Whether **cookies/analytics** will be added at launch

---

## 11. Critical and High-Priority Issues (Summary)

**Critical**

- ORG-001: Placeholder legal name in public footer copyright
- ORG-002: Placeholder email/phone in footer — no working contact
- LEG-001: Privacy page is explicit draft, insufficient for App Store privacy URL
- LEG-002: Terms page is explicit draft
- OPS-001: Contact form non-functional without configured endpoint
- PRD-001: Carevie “Available” features vs “product concept” / health data not reflected in privacy policy
- SEO-001: Empty meta description on homepage (empty mission)

**High**

- ORG-003: Registered address never displayed
- ORG-004: Placeholder social URLs
- NAV-001: No dedicated `/careers` page (brief expectation)
- DEV-001: Public `/design` internal styleguide
- SEO-002: No robots/sitemap/OG/canonical
- HOST-001: No deployment/SPA fallback in repo — deep links unverified

---

## 12. Risk Register

| ID | Severity | Page/File | Exact Problem | Why It Matters | Recommended Fix |
|----|----------|-----------|---------------|----------------|-----------------|
| ORG-001 | CRITICAL | `src/data/company.ts` L94; `Footer.tsx` L165 | Copyright shows `[Legal entity name — pending confirmation]` | Reviewers cannot tie site to a legal entity | Replace with org-approved legal name; propagate to Privacy/Terms |
| ORG-002 | CRITICAL | `company.ts` L96–97; `Footer.tsx` L141–142 | Email/phone are bracketed placeholders, not links | No verifiable support channel | Publish verified `mailto:`/`tel:`; display on Contact hub |
| ORG-003 | HIGH | `company.ts` L95 | Registered address defined but **never rendered** | Apple/support verification often expects physical or registered contact | Add approved address to Contact footer and Privacy “controller” |
| ORG-004 | HIGH | `Footer.tsx` L8–17 | `zeldapro-placeholder` social URLs | Broken or misleading external presence | Use real profiles or remove until live |
| LEG-001 | CRITICAL | `PrivacyPage.tsx` L10–22 | Page self-identifies as draft template | App Store privacy URL must be complete and accurate | Legal/security review; remove draft banner; expand policy |
| LEG-002 | CRITICAL | `TermsPage.tsx` L10–22 | Draft terms, incomplete liability/law | Weak legal standing for published site | Counsel-approved terms |
| LEG-003 | HIGH | — | No cookie policy / notice | Required if tracking added; best practice for EU | Policy + consent if cookies used |
| OPS-001 | CRITICAL | `ContactForm.tsx` L181–186; `.env.example` | Empty `VITE_FORM_ENDPOINT` → submit error | Support URL fails functional contact test | Configure verified endpoint; test end-to-end |
| PRD-001 | CRITICAL | `carevie.ts` L16–17 vs L24–50 | Summary says “product concept”; features marked “Available” | Misalignment with actual app triggers rejection questions | Align copy with release; add store link if published |
| PRD-002 | HIGH | `CareviePage.tsx` L82–87 | UI placeholders on product page | Signals incomplete product story | Approved screenshots or remove section |
| PRD-003 | HIGH | `PrivacyPage.tsx` | No health/sensitive data disclosure | Carevie processes health-adjacent narratives | Privacy section for app + website processing |
| SEO-001 | CRITICAL | `company.ts` L42–43; `HomePage.tsx` L18–19 | `mission` empty → empty meta description | Poor discoverability; looks unfinished | Add approved mission/ description |
| SEO-002 | HIGH | `Seo.tsx`; `public/` | No OG, canonical, robots, sitemap | Reviewers and crawlers get minimal signals | Extend `Seo`; add `public/robots.txt` and sitemap |
| NAV-001 | HIGH | `App.tsx` | No `/careers` route | Brief promises careers page | Add page or remove brief expectation |
| DEV-001 | MEDIUM | `App.tsx` L27 | `/design` public without main layout | Exposes internal design system | Remove route in production builds or protect |
| CON-001 | MEDIUM | `InsightsIndexPage.tsx`; nav | Prominent draft insights | Undermines “operating business” signal | Hide until published or noindex |
| HOST-001 | HIGH | `vite.config.ts` | No hosting config in repo | `/privacy` etc. may 404 on refresh | Document/configure SPA fallback + HTTPS |
| A11Y-001 | LOW | `ContactForm.tsx` L419–437 | Privacy consent as switch not checkbox | Unusual pattern | Consider native checkbox |
| DATA-001 | LOW | `Footer.tsx` L165 | Hardcoded `DISPLAY_YEAR` 2026 | Minor inconsistency over time | Dynamic year or org-approved static |

---

## 13. Complete File-by-File Findings

### Configuration & entry

| File | Finding | Severity |
|------|---------|----------|
| `package.json` | Standard marketing deps; no analytics packages | — |
| `vite.config.ts` | Default Vite; no SSR/prerender | HOST-001 |
| `index.html` | Favicon OK; minimal meta | SEO-002 |
| `.env.example` | `VITE_FORM_ENDPOINT` empty | OPS-001 |
| `docs/BRIEF.md` | States confirm legal entity, privacy review before launch | Aligns with gaps found |

### Routing & layouts

| File | Finding | Severity |
|------|---------|----------|
| `src/App.tsx` | Full route map; `/design` outside layout; no `/careers` | DEV-001, NAV-001 |
| `src/layouts/MainLayout.tsx` | Header/footer on all main routes; a11y skip link | — |
| `src/main.tsx` | `HelmetProvider` wrapped | — |

### Data / identity

| File | Finding | Severity |
|------|---------|----------|
| `src/data/company.ts` | Placeholder contact; empty mission | ORG-001–003, SEO-001 |
| `src/data/contactTopics.ts` | Careers as contact topic only | NAV-001 |
| `src/data/carevie.ts` | Concept vs available feature labels | PRD-001 |
| `src/data/insights.ts` | All drafts, `publishedAt: null` | CON-001 |

### Layout components

| File | Finding | Severity |
|------|---------|----------|
| `src/components/layout/Footer.tsx` | Placeholders in copyright & contact; fake socials | ORG-001,002,004 |
| `src/components/layout/Navbar.tsx` | Complete nav; no Careers | — |
| `src/components/layout/Logo.tsx` | Wordmark JPG; alt “Zeldapro” | — |
| `src/components/layout/Seo.tsx` | Title + description only | SEO-002 |

### Legal pages

| File | Finding | Severity |
|------|---------|----------|
| `src/pages/PrivacyPage.tsx` | Draft template | LEG-001 |
| `src/pages/TermsPage.tsx` | Draft template | LEG-002 |

### Contact

| File | Finding | Severity |
|------|---------|----------|
| `src/components/contact/ContactForm.tsx` | Solid validation; env-dependent POST | OPS-001 |
| `src/pages/ContactPage.tsx` | Topic hub only; no direct contact details | ORG-002 |
| `src/pages/ContactTopicPage.tsx` | Form per topic | — |
| `src/components/contact/ContactBanner.tsx` | Visual banner only | — |

### Marketing pages

| File | Finding | Severity |
|------|---------|----------|
| `src/pages/HomePage.tsx` | Empty SEO description | SEO-001 |
| `src/pages/AboutPage.tsx` | Empty mission sections | SEO-001 |
| `src/pages/CareviePage.tsx` | Placeholder screens; disclaimers present | PRD-002 |
| `src/pages/InsightsIndexPage.tsx` | Sample content disclaimer | CON-001 |
| `src/pages/InsightDetailPage.tsx` | Draft banner | CON-001 |
| `src/pages/DesignPage.tsx` | Internal design showcase | DEV-001 |
| `src/pages/NotFoundPage.tsx` | Functional 404 | — |
| `src/pages/*DetailPage.tsx` | Catalog detail wrappers | — |
| Service/solution/industry templates | Illustrative scenarios labeled | — |

### Sections (homepage)

| File | Finding | Severity |
|------|---------|----------|
| `src/sections/CarevieSpotlight.tsx` | UI placeholders disclosed | PRD-002 |
| Other sections | Enterprise copy from data; no fake metrics found | — |

### Public assets

| File | Finding | Severity |
|------|---------|----------|
| `public/favicon.png`, `favicon.svg` | Present | — |
| `public/robots.txt` | **Absent** | SEO-002 |
| `public/sitemap.xml` | **Absent** | SEO-002 |

---

## 14. Recommended Remediation Plan

### Phase A — Blocking (before App Store / public launch)

1. **Organization data:** Confirm and enter legal name, addresses, email, phone in `company.ts` (or split public vs legal structs); render on Contact, Footer, Privacy.
2. **Legal:** Replace draft Privacy/Terms with counsel-approved text covering website form, hosting, retention, rights, processors, children if applicable, and **Carevie/app** processing if linked from same org.
3. **Contact ops:** Configure and test `VITE_FORM_ENDPOINT`; add visible `mailto:` fallback.
4. **Carevie alignment:** Reconcile feature availability with app build; add App Store link; add dedicated privacy/support URLs if different from corporate site.
5. **Remove or gate** `/design` in production.
6. **Fix** homepage/about meta descriptions (mission or positioning copy).

### Phase B — High priority (within 1–2 sprints)

1. Real social URLs or remove.
2. `robots.txt`, sitemap, OG tags, canonical URLs (production domain).
3. Display registered address; optional Organization schema JSON-LD.
4. Careers: dedicated page or intentional redirect from brief.
5. Hosting: SPA fallback, HTTPS, verify deep links to `/privacy` and `/contact`.

### Phase C — Credibility polish

1. Publish or de-emphasize Insights (noindex or remove nav until live).
2. Replace Carevie UI placeholders with approved assets.
3. Cookie policy if analytics added.

---

## 15. Final Pre-Publication Checklist

- [ ] Legal entity name on footer, Privacy, Terms, and Contact
- [ ] Physical/registered address visible
- [ ] Working email and optional phone
- [ ] Contact form tested against production endpoint
- [ ] Privacy policy complete, non-draft, matches data practices
- [ ] Terms complete, governing law defined
- [ ] Carevie (or app) claims match store build; store URL on site if live
- [ ] Privacy URL in App Store Connect matches live page byte-for-byte
- [ ] Support URL resolves and shows contact paths
- [ ] No placeholder social links
- [ ] `/design` removed or protected
- [ ] `robots.txt` / sitemap / OG meta on production
- [ ] SPA hosting verified for all routes
- [ ] HTTPS on `www.zeldapro.com` (live test)
- [ ] Mission and About content complete

---

## 16. Classification of Findings

### A. Actual defects found

- Placeholder strings rendered on public pages
- Empty `company.mission` breaking meta descriptions
- Contact form failure when env unset
- Draft legal pages unsuitable as published policies
- Placeholder social URLs
- Public `/design` route

### B. Missing organizational information

- Legal name, registration ID, addresses, verified email/phone (all **NEEDS ORGANIZATION CONFIRMATION**)

### C. Potential Apple review risks

- Unverifiable legal entity and contact
- Privacy/support URL content mismatch with app
- Carevie health positioning without health privacy disclosures
- “Unfinished” signals (draft legal, draft articles, UI placeholders)

### D. Recommended but not mandatory

- OG/schema/sitemap
- Cookie policy (if no tracking, state that explicitly in privacy)
- Dedicated careers page
- Checkbox vs switch for privacy consent

---

## 17. Final Verdict

### **NOT READY**

**Evidence:** Placeholder legal identity and contact information are shipped in the default data layer and rendered in the global footer; privacy and terms pages explicitly declare draft status; the contact channel depends on an unconfigured environment variable with no mailto fallback; homepage SEO description is empty; Carevie marketing asserts available features while also describing a concept product without a cohesive app privacy story. The codebase builds successfully and the information architecture is sound for a corporate site, but **organizational verification and App Store URL expectations are not met** until Phase A remediation is completed with organization and legal input.

**After critical fixes**, reassess as **READY AFTER CRITICAL FIXES** pending live URL testing and form submission proof.

---

*End of audit report. No source files were modified during this audit.*