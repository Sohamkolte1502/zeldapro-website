# Zeldapro Website — Homepage, Navigation & Services UI Improvements

Act as a senior frontend architect and UI/UX engineer. Improve my existing Zeldapro website using the supplied screenshots as visual references.

**Project location:** `D:\zeldapro`

**Tech stack:** React, TypeScript, Vite, Tailwind CSS v4, React Router DOM, Framer Motion, Lucide React.

## IMPORTANT: READ BEFORE MODIFYING

First inspect the existing project, including:
- `docs/BRIEF.md`
- `docs/DESIGN_LOG.md`
- `.cursor/rules/zeldapro.mdc`
- Existing homepage components
- Navigation components
- Services, AI Solutions and Industries pages
- Existing routes and assets
- Current CSS and responsive styles

Understand the current architecture before changing anything.

Do not rebuild the application from scratch. Reuse existing components wherever possible.

Preserve all existing website wording and business content unless a specific visual change requires otherwise. Do not invent statistics, clients, testimonials or company achievements.

# PART 1 — HERO SECTION

Use the supplied Bondist screenshot as the primary reference for the hero layout.

### Background video

I want a large cinematic AI and technology video covering the entire hero section.

Requirements:
- Full-width video.
- Video must cover the complete hero area.
- No white gaps, empty background strips or uncovered edges.
- Use `object-fit: cover`.
- Correct positioning and cropping for desktop, tablet and mobile.
- Apply a suitable dark overlay for text readability.
- Smooth video playback and looping.
- Use an optimized poster image as a fallback.
- Respect reduced-motion preferences.

Do not use a small video container or decorative animation.

If a suitable video asset already exists, inspect and reuse it. If no video exists, create a clearly identified video asset placeholder and explain where I should place the final video. Do not substitute an unrelated stock image and pretend it is the final video.

### Hero content

Preserve the exact existing:
- AI-Powered Engineering badge.
- Main headline.
- Description.
- Primary CTA.
- Secondary CTA.

Do not rewrite the wording.

Position the content similarly to the Bondist reference:
- Small rounded badge above the headline.
- Large, prominent headline.
- Highlighted headline text retains its existing wording.
- Description below the headline.
- Two prominent CTA buttons next to each other.
- Proper spacing and alignment.

Keep all text as HTML elements, not embedded inside the video.

# PART 2 — NAVIGATION REDESIGN

Use the supplied Infosys navigation screenshots as the reference.

I want two navigation states.

### State A: At the top of the homepage

- Navigation positioned over the cinematic video.
- Transparent or subtle dark glass-style background.
- Zeldapro logo on the left.
- Navigation links in the middle.
- Contact Us CTA on the right.
- Correct spacing and alignment.
- Text and logo must contrast properly with the dark video.

### State B: After scrolling

The navigation must remain visible.

Transform it into a smaller floating navigation inspired by Infosys.

Requirements:
- Compact rounded pill-style container.
- Smaller height and reduced padding.
- Subtle translucent light background.
- Dark, readable navigation text.
- Properly sized logo.
- Rounded edges.
- Subtle shadow or backdrop blur.
- Smooth transition between both states.

The navigation should not remain at its original large size while scrolling.

Use Framer Motion or existing animation utilities where appropriate.

### Logo correction

The current Zeldapro logo has an unattractive white square background.

Inspect the existing logo assets.

I want:
- A transparent logo version suitable for the dark hero.
- A suitable logo presentation for the light floating navigation.
- No visible white rectangular box around the logo.
- Proper dimensions and aspect ratio.
- Consistent positioning in both navigation states.

Do not redesign or distort the Zeldapro brand mark.

If a transparent source logo does not exist, report that and identify the required asset rather than creating a fake logo.

# PART 3 — HOMEPAGE: THREE INTERACTIVE CATEGORY CARDS

Currently, Services, AI Solutions and Industries are displayed as separate sections with multiple cards.

I want a more premium presentation with THREE large interactive category cards.

The categories are:

1. Services
2. AI Solutions
3. Industries

### Visual interaction

Use the supplied Infosys screenshot as inspiration.

- Display all three cards together.
- When the user hovers over one card, it should expand or visually pop forward.
- The other two cards should recede slightly.
- Use smooth transitions.
- Avoid excessive scaling and distracting animations.
- Maintain a premium enterprise appearance.

### Click interaction: Overlay panel

When the user clicks a category card, open a large overlay panel over the existing homepage.

Use the TCS Services screenshot as the reference.

The overlay should:
- Cover a substantial portion of the viewport.
- Use a dark background matching Zeldapro's identity.
- Use ice-blue accents.
- Display the selected category heading.
- Display all available items in a clean multi-column layout.
- Include a clear close button.
- Support Escape key and appropriate keyboard interactions.
- Close when the close button is clicked.
- Prevent unwanted background interaction while open.

### Content

Use `docs/BRIEF.md` as the single source of truth.

**Services:** All nine existing services.

**AI Solutions:** All documented AI solutions.

**Industries:** All eight documented industries.

Do not rename, invent or omit any categories.

### Individual item interaction

When the user hovers over an item in the overlay:
- Show a small, attractive information popup or preview.
- Include the item's existing short description.
- Use a relevant icon or visual where appropriate.
- Use a subtle animation.
- Keep the popup readable and uncluttered.

When the user clicks an item, navigate to its respective detail page if that route already exists.

Do not invent detailed service pages or business content.

If a route is missing, identify it and report it instead of linking to an incorrect page.

# PART 4 — SERVICES PAGE REDESIGN

The current `/services` page looks too plain. It displays a heading, description and a simple vertical list of services with substantial unused space.

I want this page to feel like a premium enterprise technology services page.

### Background and layout

- Introduce an attractive AI/technology-inspired visual background.
- Maintain the dark and ice-blue Zeldapro theme.
- Use a balanced layout with proper spacing.
- Present the nine services in an attractive grid or editorial layout.
- Use meaningful icons or subtle visual elements.
- Avoid generic excessive cards.
- Make the page visually engaging without overcrowding it.

### Hover interaction

When the user moves the cursor over a service:
- Highlight the selected service.
- Display a compact information popup or preview.
- Show a short description explaining what that service covers.
- Optionally show a relevant visual or icon.
- Keep the interaction smooth and professional.

When clicked, the service should open its respective detail page.

Use the existing service content and routes wherever available.

Do not create fabricated service descriptions. Use the company brief and existing content.

The same visual interaction approach should be reusable for AI Solutions and Industries pages later.

# PART 5 — RESPONSIVENESS AND QUALITY

The entire implementation must work properly on:
- Desktop
- Laptop
- Tablet
- Mobile

Pay special attention to:
- Mobile navigation.
- Hero video cropping.
- Hero text sizing.
- CTA button stacking.
- Three category card layout.
- Overlay panel responsiveness.
- Hover alternatives for touchscreen devices.
- Popup positioning and overflow.
- Keyboard accessibility.
- Text contrast.

Use reusable, properly typed React components.

Avoid:
- Unnecessary dependencies.
- Excessive Framer Motion animations.
- Hardcoded duplicate content.
- Inline styling everywhere.
- Unrelated file modifications.
- Breaking existing routes.
- Replacing real content with placeholder text.

# PART 6 — IMPLEMENTATION PROCESS

Work in controlled stages.

**Stage 1: Inspection**
Inspect the existing architecture and report:
- Relevant components.
- Existing assets.
- Existing routes.
- Current implementation problems.
- Files that need modification.
- Any missing assets.

**Stage 2: Implementation**
After inspection, implement the requested changes using existing architecture wherever possible.

Do not modify unrelated sections.

**Stage 3: Verification**
Check:
- Hero video coverage.
- Logo presentation.
- Both navigation states.
- Scroll transition.
- Three interactive homepage cards.
- Overlay panel behavior.
- Hover previews.
- Service page layout.
- Existing navigation and routes.
- Desktop and mobile responsiveness.
- Browser console errors.

**Stage 4: Final report**

Tell me:
1. What files were modified.
2. What components were created.
3. What existing functionality was preserved.
4. What assets are still required.
5. What needs further attention.

Do not claim something works unless you have tested it.

## FINAL DESIGN OBJECTIVE

Zeldapro should look and feel like a credible enterprise AI and technology engineering company.

Use the supplied Bondist screenshot for hero composition, Infosys for navigation and interactive visual presentation, and TCS for the overlay panel interaction.

Take inspiration from their presentation quality, not their branding.

Maintain Zeldapro's own identity:
- Dark cinematic backgrounds.
- Ice-blue accents.
- Clean enterprise layouts.
- Professional typography.
- Purposeful animations.
- Strong visual hierarchy.

The result should feel premium, polished, responsive and production-oriented.