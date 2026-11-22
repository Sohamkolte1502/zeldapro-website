const serviceHeroModules = import.meta.glob<string>(
  '../../../assets/services/*.webp',
  { eager: true, import: 'default', query: '?url' },
)

const serviceHeroByFile = Object.fromEntries(
  Object.entries(serviceHeroModules).map(([path, url]) => {
    const normalized = path.replace(/\\/g, '/')
    const file = normalized.slice(normalized.lastIndexOf('/') + 1)
    return [file, url] as const
  }),
)

export const EXPECTED_SERVICE_HERO_FILES = [
  'ai-strategy-consulting.webp',
  'generative-agentic-ai-engineering.webp',
  'data-engineering-analytics.webp',
  'application-platform-development.webp',
  'cloud-devops-platform-engineering.webp',
  'iot-iiot-digital-systems.webp',
  'cybersecurity-trust-engineering.webp',
  'digital-transformation.webp',
  'managed-technology-support.webp',
] as const

export function getServiceHeroImage(slug: string): string | null {
  return serviceHeroByFile[`${slug}.webp`] ?? null
}