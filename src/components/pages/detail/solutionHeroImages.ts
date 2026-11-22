const solutionHeroModules = import.meta.glob<string>(
  '../../../assets/ai-solutions/*.webp',
  { eager: true, import: 'default', query: '?url' },
)

const solutionHeroByFile = Object.fromEntries(
  Object.entries(solutionHeroModules).map(([path, url]) => {
    const normalized = path.replace(/\\/g, '/')
    const file = normalized.slice(normalized.lastIndexOf('/') + 1)
    return [file, url] as const
  }),
)

export const EXPECTED_SOLUTION_HERO_FILES = [
  'enterprise-generative-ai.webp',
  'agentic-workflow-systems.webp',
  'predictive-decision-intelligence.webp',
  'computer-vision.webp',
  'industrial-iot-intelligence.webp',
  'ai-enabled-digital-products.webp',
] as const

export function getSolutionHeroImage(slug: string): string | null {
  return solutionHeroByFile[`${slug}.webp`] ?? null
}