import clsx from 'clsx'
import type { ReactNode } from 'react'

type HomeHorizontalScrollProps = {
  children: ReactNode
  /** Fade mask matches section background */
  edgeTone?: 'white' | 'muted'
  className?: string
  'aria-label'?: string
}

export function HomeHorizontalScroll({
  children,
  edgeTone = 'white',
  className,
  'aria-label': ariaLabel,
}: HomeHorizontalScrollProps) {
  const fade =
    edgeTone === 'muted'
      ? 'from-[#f6f8f9] via-[#f6f8f9]/80'
      : 'from-white via-white/85'

  return (
    <div className={clsx('relative', className)}>
      <div
        className={clsx(
          'pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-gradient-to-r sm:w-12',
          fade,
          'to-transparent',
        )}
        aria-hidden
      />
      <div
        className={clsx(
          'pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-gradient-to-l sm:w-12',
          fade,
          'to-transparent',
        )}
        aria-hidden
      />
      <ul
        aria-label={ariaLabel}
        className={clsx(
          'home-snap-scroll flex gap-4 overflow-x-auto pb-3 pt-1',
          '-mx-[max(1rem,env(safe-area-inset-left))] px-[max(1rem,env(safe-area-inset-left))]',
          'sm:-mx-0 sm:px-0',
        )}
      >
        {children}
      </ul>
      <p className="mt-2 text-center text-xs text-ink-subtle sm:hidden">
        Swipe to explore
      </p>
    </div>
  )
}