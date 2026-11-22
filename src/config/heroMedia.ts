/** Public-folder hero assets; optional `VITE_HERO_VIDEO_VERSION` busts browser cache after swaps. */
const cacheKey = import.meta.env.VITE_HERO_VIDEO_VERSION?.trim()
const qs = cacheKey ? `?v=${encodeURIComponent(cacheKey)}` : ''

export const HERO_VIDEO_SRC = `/videos/hero.mp4${qs}`
export const HERO_POSTER_SRC = `/videos/hero-poster.jpg${qs}`