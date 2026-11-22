export const insightsPageMeta = {
  eyebrow: 'Insights',
  title: 'Perspectives on enterprise AI, data, and engineering',
  subtitle:
    'Practical thinking for technology leaders—governance, integration, industrial systems, and the path from pilot to production.',
  seoDescription:
    'Thought leadership and draft perspectives from Zeldapro on responsible AI, engineering, and digital transformation.',
}

export const insightsMetaFields = [
  { label: 'Focus', value: 'Enterprise AI & engineering' },
  { label: 'Audience', value: 'CIO, CTO, product & transformation leads' },
  { label: 'Formats', value: 'Articles · playbooks · field notes' },
  { label: 'Status', value: 'Editorial previews (draft)' },
] as const

export const insightsTopicHighlights = [
  {
    title: 'Responsible AI',
    body: 'Access control, logging, human review, and policy alignment before scale.',
  },
  {
    title: 'Production engineering',
    body: 'Integration, observability, and ownership patterns that survive past POC.',
  },
  {
    title: 'Industrial & OT',
    body: 'Telemetry, segmentation, and incremental modernisation in regulated plants.',
  },
  {
    title: 'Programme measurement',
    body: 'Indicators tied to workflow quality and risk—not vanity adoption metrics alone.',
  },
] as const

/**
 * Hero image: save as src/assets/images/insights-hero.jpg
 * Recommended size: 1920×720 (8:3) or 1920×800 — match Privacy/About heroes.
 */
export const insightsHeroImagePrompt = `Wide cinematic hero banner for an enterprise technology "Insights & Research" page (thought leadership, not a product demo). Visual theme: editorial intelligence — layered translucent article pages or document planes fanning in perspective, thin luminous connection lines between nodes, subtle bar-chart and signal-wave geometry, soft depth-of-field particles. Mood: analytical, calm, credible McKinsey-style tech editorial — not cyberpunk, not a literal office.

Color palette (must match Zeldapro site): deep navy background #081d29, electric cyan accents #38bdf8 and #0ea5e9, restrained teal #3a8581. Left 45% of frame darker and simpler for white headline text overlay; richer abstract detail concentrated on the right third.

Lighting: soft rim light on floating shapes, gentle vignette, minimal grain. Premium 3D/CGI or high-end digital illustration.

Composition: horizontal ultra-wide banner, empty calm negative space upper-left for typography.

Strict exclusions: no people, no faces, no readable text, no logos, no watermarks, no shields, no globes, no medical icons (distinct from Privacy hero), no glowing product cubes (distinct from About hero).

Technical: 1920 pixels wide × 720 pixels tall, aspect ratio 8:3, high resolution.`

export const insightsHeroImagePromptShort = `Enterprise insights hero, navy #081d29, cyan #0ea5e9, abstract floating document layers + data node graph, editorial research mood, dark left for text, detail right, no people text logos shield globe cube, 1920x720 8:3 CGI`

export const insightsHeroNegativePrompt = `text, watermark, logo, shield, padlock, globe, earth, product cube, hospital, faces, people, stock photo, neon purple, orange sunset, cluttered UI, readable words, low resolution`