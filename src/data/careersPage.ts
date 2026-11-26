/**
 * Hero background — `src/assets/careers-hero.webp` or `src/assets/images/careers-hero.*`
 */
export const careersHeroImageSpec = {
  width: 1920,
  height: 720,
  aspectRatio: '8:3',
  recommendedFormats: ['webp', 'jpg', 'png'] as const,
  assetBasename: 'careers-hero',
} as const

/**
 * Apply section image (left column, below “What’s your story”).
 * Drop your file at `src/assets/images/careers-apply.jpg` (or .png / .webp).
 */
export const careersApplyImageSpec = {
  width: 960,
  height: 720,
  aspectRatio: '4:3',
  /** ~lg left column width inside 12-col grid */
  displayMaxCssPx: 480,
  recommendedFormats: ['jpg', 'webp', 'png'] as const,
  assetBasename: 'careers-apply',
} as const

/** Careers landing copy — see BRIEF (roles/culture placeholder). */
export const careersPageCopy = {
  eyebrow: 'Careers at Zeldapro',
  headline: "Build what matters. Shape what's next.",
  subhead:
    'Join a team exploring the possibilities of AI, software and connected technology—and turning them into useful outcomes.',
  applyAnchorId: 'careers-apply',
} as const

export const careersBuildWithUs = {
  heading: 'Curious minds. Thoughtful builders. Shared ambition.',
  lead:
    'We want to connect with people who enjoy solving meaningful problems and learning across AI, software, data and connected technology.',
  focusAreas: [
    'AI / ML engineering and applied research',
    'Full-stack and mobile software development',
    'Data engineering and cloud platforms',
    'Product, design and technology consulting',
    'Business development and customer success',
  ],
  cardEyebrow: 'Build with us',
  cardTitle: 'Bring your perspective. Grow your craft. Create impact.',
  cardBody:
    'We welcome conversations with experienced professionals, emerging talent and collaborators.',
  ctaLabel: 'Get in touch',
} as const