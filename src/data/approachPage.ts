/**
 * Homepage “How we work” — right column beside the step list (50% of ~72rem container ≈ 560px CSS width).
 * Target file: `src/assets/images/how-we-work.png` (transparent) or `.webp` / `.jpg`.
 */
export const howWeWorkImageSpec = {
  width: 1200,
  height: 1500,
  aspectRatio: '4:5',
  displayMaxCssPx: 560,
} as const

export const howWeWorkImagePrompt = `Create ONE vertical illustration for a B2B tech website right column.

OUTPUT (strict): PNG, exact ${howWeWorkImageSpec.width}×${howWeWorkImageSpec.height} pixels, 4:5 portrait. Transparent background OR seamless flat #f6f8f9 only—no gradient vignette, no grey card, no rounded rectangle frame, no drop shadow baked into the file, no wide empty letterbox bars left/right. Artwork should occupy ~88–94% of canvas height; keep ~6% max quiet margin at edges.

SUBJECT: Single winding luminous cyan path bottom-left → top-right with five isometric glass milestones (Discover: magnifying glass on nodes; Design: stacked blueprint layers; Engineer: modules with angle brackets; Integrate: hub-and-spoke network; Evolve: bar chart in circular arrows). Match existing Zeldapro lifecycle style: electric cyan #0ea5e9 / #38bdf8, teal accents, soft glass, subtle grid—not dark navy fill.

DO NOT: people, logos, readable text, watermarks, UI mockup, browser frame, extra padding margin, second background layer.

Deliver as clean hero asset ready to drop on #f6f8f9 page with no CSS frame.`

export const howWeWorkImagePromptShort = `${howWeWorkImageSpec.width}x${howWeWorkImageSpec.height}px PNG 4:5 transparent or #f6f8f9, lifecycle path 5 glass milestones cyan/teal, full-height art no letterbox no card frame no shadow, Zeldapro how-we-work sidebar`

export const howWeWorkImageNegativePrompt = `rounded frame, drop shadow, wide side margins, letterboxing, dark background, mockup, text, logo, people, watermark, jpeg artefacts`