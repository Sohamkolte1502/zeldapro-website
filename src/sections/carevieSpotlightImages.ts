/** Homepage Carevie spotlight assets under `src/assets/carevie/`. */

const CAREVIE_ASSET_SLUGS = new Set([
  'overview',
  'medical-vault',
  'reminders',
  'care-circle',
])

const FORMAT_RANK: Record<string, number> = {
  jpg: 0,
  jpeg: 0,
  png: 1,
  webp: 2,
  avif: 3,
}

const carevieAssetModules = import.meta.glob<string>(
  [
    '../assets/carevie/*.jpg',
    '../assets/carevie/*.jpeg',
    '../assets/carevie/*.png',
    '../assets/carevie/*.webp',
    '../assets/carevie/*.avif',
  ],
  { eager: true, import: 'default', query: '?url' },
)

function normalizeFormat(ext: string): string {
  const lower = ext.toLowerCase()
  return lower === 'jpeg' ? 'jpg' : lower
}

function parseCarevieAssetFilename(
  file: string,
): { slug: string; format: string; exactSlugName: boolean } | null {
  const match = file.match(/^(.+)\.(jpe?g|png|webp|avif)$/i)
  if (!match) return null

  const stem = match[1]
  const format = normalizeFormat(match[2])

  if (CAREVIE_ASSET_SLUGS.has(stem)) {
    return { slug: stem, format, exactSlugName: true }
  }

  const misnamed = stem.match(/^(.+)\.jpe?g$/i)
  if (misnamed && CAREVIE_ASSET_SLUGS.has(misnamed[1])) {
    return { slug: misnamed[1], format, exactSlugName: false }
  }

  return null
}

function fileBasename(path: string): string {
  const normalized = path.replace(/\\/g, '/')
  return normalized.slice(normalized.lastIndexOf('/') + 1)
}

const carevieAssetBySlug = (() => {
  const best = new Map<
    string,
    { url: string; format: string; exactSlugName: boolean }
  >()

  for (const [path, url] of Object.entries(carevieAssetModules)) {
    const file = fileBasename(path)
    const parsed = parseCarevieAssetFilename(file)
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

    if (rank === prevRank && parsed.exactSlugName && !prev.exactSlugName) {
      best.set(parsed.slug, {
        url,
        format: parsed.format,
        exactSlugName: true,
      })
    }
  }

  return best
})()

export function getCarevieSpotlightImage(slug: string): string | null {
  return carevieAssetBySlug.get(slug)?.url ?? null
}

export const CAREVIE_SCREEN_TILES = [
  {
    slug: 'medical-vault',
    placeholderLabel: 'Medical vault screen',
    alt: 'Carevie Medical Vault screen',
  },
  {
    slug: 'reminders',
    placeholderLabel: 'Reminders screen',
    alt: 'Carevie Reminders screen',
  },
  {
    slug: 'care-circle',
    placeholderLabel: 'Care circle screen',
    alt: 'Carevie Care circle screen',
  },
] as const