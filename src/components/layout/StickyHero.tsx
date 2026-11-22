import clsx from 'clsx'
import { useReducedMotion } from 'framer-motion'
import { forwardRef, type ReactNode } from 'react'

type StickyHeroProps = {
  children: ReactNode
  className?: string
  /** Parent handles breakpoints; when false, renders a plain wrapper. */
  enabled?: boolean
}

export const StickyHero = forwardRef<HTMLDivElement, StickyHeroProps>(
  function StickyHero({ children, className, enabled = true }, ref) {
    const reduceMotion = useReducedMotion()
    const sticky = enabled && !reduceMotion

    if (!sticky) {
      return (
        <div ref={ref} className={clsx('relative w-full', className)}>
          {children}
        </div>
      )
    }

    return (
      <div
        ref={ref}
        className={clsx(
          'sticky top-0 z-0 h-[calc(100svh-var(--nav-h))] w-full',
          className,
        )}
      >
        <div className="h-full w-full overflow-hidden">{children}</div>
      </div>
    )
  },
)