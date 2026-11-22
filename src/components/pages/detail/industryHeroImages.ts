const industryHeroModules = import.meta.glob<string>(
  '../../../assets/industries/*.webp',
  { eager: true, import: 'default', query: '?url' },
)

/** Resolved URLs keyed by filename (e.g. `healthcare-life-sciences.webp`). */
const industryHeroByFile = Object.fromEntries(
  Object.entries(industryHeroModules).map(([path, url]) => {
    const normalized = path.replace(/\\/g, '/')
    const file = normalized.slice(normalized.lastIndexOf('/') + 1)
    return [file, url] as const
  }),
)

export const EXPECTED_INDUSTRY_HERO_FILES = [
  'healthcare-life-sciences.webp',
  'banking-financial-services.webp',
  'manufacturing-industrial.webp',
  'logistics-supply-chain.webp',
  'retail-consumer.webp',
  'energy-utilities.webp',
  'technology-telecom.webp',
  'public-sector-education.webp',
] as const

export function getIndustryHeroImage(slug: string): string | null {
  return industryHeroByFile[`${slug}.webp`] ?? null
}