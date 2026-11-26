/**
 * Category index hero bands — add files under `src/assets/headers/`:
 * - `industries.{webp,jpg,png,avif}`
 * - `ai-solutions.{webp,avif,jpg,png}`
 * Build succeeds without them (gradient-only band).
 */

const industriesGlob = import.meta.glob(
  '../assets/headers/industries.{avif,webp,jpg,jpeg,png}',
  { eager: true, import: 'default' },
) as Record<string, string>

const aiSolutionsGlob = import.meta.glob(
  '../assets/headers/ai-solutions.{avif,webp,jpg,jpeg,png}',
  { eager: true, import: 'default' },
) as Record<string, string>

function firstAsset(glob: Record<string, string>): string | undefined {
  const entries = Object.values(glob)
  return entries[0]
}

export const industriesHeaderImage = firstAsset(industriesGlob)
export const aiSolutionsHeaderImage = firstAsset(aiSolutionsGlob)