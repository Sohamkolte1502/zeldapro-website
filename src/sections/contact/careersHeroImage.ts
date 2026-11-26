const careersHeroGlob = {
  ...import.meta.glob('../../assets/careers-hero.{jpg,jpeg,png,webp,avif}', {
    eager: true,
    import: 'default',
  }),
  ...import.meta.glob('../../assets/images/careers-hero.{jpg,jpeg,png,webp,avif}', {
    eager: true,
    import: 'default',
  }),
} as Record<string, string>

const FORMAT_RANK: Record<string, number> = {
  avif: 0,
  webp: 1,
  png: 2,
  jpg: 3,
  jpeg: 3,
}

function bestCareersHeroSrc(): string | null {
  const entries = Object.entries(careersHeroGlob)
  if (entries.length === 0) return null

  const ranked = entries
    .map(([path, src]) => {
      const ext = path.split('.').pop()?.toLowerCase() ?? ''
      return { src, rank: FORMAT_RANK[ext] ?? 99 }
    })
    .sort((a, b) => a.rank - b.rank)

  return ranked[0]?.src ?? null
}

export const careersHeroImageSrc = bestCareersHeroSrc()