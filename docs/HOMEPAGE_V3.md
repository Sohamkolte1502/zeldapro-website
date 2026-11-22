I want to make two major design improvements to the existing Zeldapro website.

Before making any changes, inspect the existing React project, homepage components, styling, content and project documentation. Understand the current implementation first.

## 1. Hero Section

Use the attached Bondist website screenshot as the visual reference.

I want:
- A large, full-width cinematic AI background video.
- Navigation positioned over the video at the top.
- Navigation must NOT be sticky or fixed. It should scroll away naturally when the user scrolls down.
- Preserve my existing Zeldapro headline, description and wording exactly. Do not rewrite the content.
- Preserve the existing AI-Powered Engineering badge and present it as a small rounded pill above the headline.
- Keep the existing Get Started and Book a Demo buttons.
- Position the headline, description and buttons similarly to the reference screenshot.
- Use a professional dark overlay for text readability.
- The video must occupy a substantial portion of the screen and look cinematic, not like a small decorative animation.

Do not embed text or logos inside the video itself. All text and buttons must remain HTML elements.

## 2. Replace Existing Services, AI Solutions and Industries Card Sections

Currently, the homepage has separate sections containing multiple cards for:
- Services
- AI Solutions
- Industries

I want to replace this presentation with THREE large, premium interactive cards.

The three cards should represent:

1. Services
2. AI Solutions
3. Industries

### Hover Interaction

Use the Infosys screenshot as inspiration for the visual presentation.

- All three cards should appear together.
- When the user hovers over one card, it should expand or pop forward.
- The other two cards should visually recede.
- Use smooth, professional animations.
- Avoid excessive scaling or distracting effects.

### Click Interaction — Important

When a user clicks one of the three cards, open a large OVERLAY PANEL over the existing homepage.

Use the TCS Services menu screenshot as the primary reference for this interaction.

The overlay should:
- Display over the existing page without navigating away.
- Have a clear close button.
- Use a premium dark background with Zeldapro's ice-blue accent.
- Display the category heading prominently.
- Arrange the available items in a clean multi-column layout.
- Show names clearly with sufficient spacing.
- Have subtle hover interactions on individual items.

The content must be:

**Services:** All nine services documented in `docs/BRIEF.md`.

**AI Solutions:** All AI solutions documented in `docs/BRIEF.md`.

**Industries:** All eight industries documented in `docs/BRIEF.md`.

Use the existing documentation as the source of truth. Do not invent or rename categories.

### Individual Item Interaction

When a user clicks an individual service, AI solution or industry, it should be possible to navigate to its respective detail page later.

For this phase, do not invent or build those detailed pages. Focus on the three cards and their overlay panels.

## 3. Important Design Requirements

- Maintain Zeldapro's existing brand identity.
- Use the dark cinematic and light enterprise hybrid design.
- Use ice blue as the accent color.
- Maintain professional typography and consistent spacing.
- Fully responsive on desktop, tablet and mobile.
- Add accessible keyboard interactions and close behavior to overlay panels.
- Avoid unnecessary dependencies.
- Keep components reusable and TypeScript properly typed.
- Do not modify unrelated project files.

## 4. Important Development Instruction

Do not immediately rewrite the homepage.

First inspect the current implementation and identify:
1. Which existing components need modification.
2. Which components can be reused.
3. Which new components are required.
4. Which existing content and assets must be preserved.

Then provide a short implementation plan.

Do not change existing wording, remove content, invent statistics or redesign unrelated sections without my approval.

The objective is to make the existing Zeldapro website look like a professional enterprise AI company, using the supplied Bondist, Infosys and TCS screenshots as design references without copying their branding.