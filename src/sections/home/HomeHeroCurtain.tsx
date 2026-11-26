import type { ReactNode } from 'react'
import { LightCinematicHero } from './LightCinematicHero'

/** Light enterprise hero + page content (no dark fiber curtain on redesign branch). */
export function HomeHeroCurtain({ children }: { children: ReactNode }) {
  return (
    <>
      <LightCinematicHero />
      <div className="relative z-10 w-full overflow-x-hidden bg-surface-50">
        {children}
      </div>
    </>
  )
}