import { careersApplyImageSpec } from '../../data/careersPage'

const careersApplyGlob = import.meta.glob(
  '../../assets/images/careers-apply.{jpg,jpeg,png,webp,avif}',
  { eager: true, import: 'default' },
) as Record<string, string>

const FORMAT_RANK: Record<string, number> = {
  avif: 0,
  webp: 1,
  png: 2,
  jpg: 3,
  jpeg: 3,
}

function bestCareersApplySrc(): string | null {
  const entries = Object.entries(careersApplyGlob)
  if (entries.length === 0) return null

  const ranked = entries
    .map(([path, src]) => {
      const ext = path.split('.').pop()?.toLowerCase() ?? ''
      return { src, rank: FORMAT_RANK[ext] ?? 99 }
    })
    .sort((a, b) => a.rank - b.rank)

  return ranked[0]?.src ?? null
}

export const careersApplyImageSrc = bestCareersApplySrc()

export function careersApplyImageAlt(): string {
  return 'Zeldapro team and workplace—careers at Zeldapro'
}

export { careersApplyImageSpec }