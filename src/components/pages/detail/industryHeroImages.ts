import { industries } from '../../../data/industries'

const INDUSTRY_SLUGS = new Set(industries.map((i) => i.slug))

/** Lower rank = preferred when multiple formats exist for one slug. */
const FORMAT_RANK: Record<string, number> = {
  jpg: 0,
  jpeg: 0,
  png: 1,
  webp: 2,
  avif: 3,
}

const industryHeroModules = import.meta.glob<string>(
  [
    '../../../assets/industries/*.jpg',
    '../../../assets/industries/*.jpeg',
    '../../../assets/industries/*.png',
    '../../../assets/industries/*.webp',
    '../../../assets/industries/*.avif',
  ],
  { eager: true, import: 'default', query: '?url' },
)

function normalizeFormat(ext: string): string {
  const lower = ext.toLowerCase()
  return lower === 'jpeg' ? 'jpg' : lower
}

/**
 * Parses `slug.ext` or common misnamed `slug.jpg.ext` (e.g. `healthcare-life-sciences.jpg.png`).
 */
function parseIndustryAssetFilename(
  file: string,
): { slug: string; format: string; exactSlugName: boolean } | null {
  const match = file.match(/^(.+)\.(jpe?g|png|webp|avif)$/i)
  if (!match) return null

  const stem = match[1]
  const format = normalizeFormat(match[2])

  if (INDUSTRY_SLUGS.has(stem)) {
    return { slug: stem, format, exactSlugName: true }
  }

  const misnamed = stem.match(/^(.+)\.jpe?g$/i)
  if (misnamed && INDUSTRY_SLUGS.has(misnamed[1])) {
    return { slug: misnamed[1], format, exactSlugName: false }
  }

  return null
}

function fileBasename(path: string): string {
  const normalized = path.replace(/\\/g, '/')
  return normalized.slice(normalized.lastIndexOf('/') + 1)
}

const industryHeroBySlug = (() => {
  const best = new Map<
    string,
    { url: string; format: string; exactSlugName: boolean }
  >()

  for (const [path, url] of Object.entries(industryHeroModules)) {
    const file = fileBasename(path)
    const parsed = parseIndustryAssetFilename(file)
    if (!parsed) continue

    const rank = FORMAT_RANK[parsed.format] ?? 99
    const prev = best.get(parsed.slug)

    if (!prev) {
      best.set(parsed.slug, {
        url,
        format: parsed.format,
        exactSlugName: parsed.exactSlugName,
      })
      continue
    }

    const prevRank = FORMAT_RANK[prev.format] ?? 99
    if (rank < prevRank) {
      best.set(parsed.slug, {
        url,
        format: parsed.format,
        exactSlugName: parsed.exactSlugName,
      })
      continue
    }

    if (rank === prevRank) {
      if (parsed.exactSlugName && !prev.exactSlugName) {
        best.set(parsed.slug, {
          url,
          format: parsed.format,
          exactSlugName: true,
        })
      }
    }
  }

  return new Map(
    [...best.entries()].map(([slug, entry]) => [slug, entry.url] as const),
  )
})()

export const EXPECTED_INDUSTRY_HERO_SLUGS = industries.map((i) => i.slug)

/** @deprecated Use `EXPECTED_INDUSTRY_HERO_SLUGS`; files may be any supported extension. */
export const EXPECTED_INDUSTRY_HERO_FILES = EXPECTED_INDUSTRY_HERO_SLUGS.map(
  (slug) => `${slug}.webp`,
)

export function getIndustryHeroImage(slug: string): string | null {
  return industryHeroBySlug.get(slug) ?? null
}