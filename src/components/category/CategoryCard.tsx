import clsx from 'clsx'
import { ArrowUpRight } from 'lucide-react'
import { useState } from 'react'
import servicesImage from '../../assets/home/services.avif'
import solutionsImage from '../../assets/home/solutions.webp'
import industriesImage from '../../assets/home/industries.webp'
import type { CategoryDefinition, CategoryKey } from './types'

const categoryMedia: Record<
  CategoryKey,
  { src: string; width: number; height: number; label: string }
> = {
  services: {
    src: servicesImage,
    width: 800,
    height: 500,
    label: 'Services',
  },
  solutions: {
    src: solutionsImage,
    width: 800,
    height: 500,
    label: 'AI Solutions',
  },
  industries: {
    src: industriesImage,
    width: 800,
    height: 500,
    label: 'Industries',
  },
}

/** Uniform image frame for all three homepage category cards (5:4). */
const IMAGE_FRAME = 'aspect-[5/4] w-full'

function ImageFallback() {
  return (
    <div
      className="absolute inset-0 bg-gradient-to-br from-brand-950 via-brand-900 to-brand-800"
      aria-hidden
    />
  )
}

type CategoryCardProps = {
  category: CategoryDefinition
  dimmed: boolean
  elevated: boolean
  onOpen: () => void
  setTriggerRef: (el: HTMLButtonElement | null) => void
}

export function CategoryCard({
  category,
  dimmed,
  elevated,
  onOpen,
  setTriggerRef,
}: CategoryCardProps) {
  const media = categoryMedia[category.key]
  const [loadFailed, setLoadFailed] = useState(false)

  return (
    <article
      className={clsx(
        'min-w-0 transition-all duration-300 ease-out motion-reduce:transition-none',
        elevated && 'z-10 -translate-y-1 scale-[1.04]',
        dimmed && 'scale-[0.98] opacity-55',
      )}
    >
      <button
        ref={setTriggerRef}
        type="button"
        onClick={onOpen}
        className="group flex w-full flex-col text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-electric-600"
      >
        <div
          className={clsx(
            'relative overflow-hidden rounded-2xl',
            IMAGE_FRAME,
          )}
        >
          {loadFailed ? (
            <ImageFallback />
          ) : (
            <img
              src={media.src}
              alt={`${media.label} — visual`}
              width={media.width}
              height={media.height}
              loading="lazy"
              decoding="async"
              onError={() => setLoadFailed(true)}
              className={clsx(
                'absolute inset-0 h-full w-full object-cover object-center',
                'transition-transform duration-500 ease-out',
                'group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100',
              )}
            />
          )}
        </div>
        <div className="relative z-10 -mt-10 mx-3 mb-2 rounded-xl border border-line/80 bg-surface-0 p-5 shadow-lg sm:mx-4 sm:p-6">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <h3 className="text-xl text-brand-950 sm:text-2xl">
                {category.title}
              </h3>
              <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-ink-muted">
                {category.description}
              </p>
            </div>
            <span
              className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-line bg-surface-50 text-brand-950 transition-colors group-hover:border-electric-600 group-hover:bg-electric-600 group-hover:text-white"
              aria-hidden
            >
              <ArrowUpRight size={20} />
            </span>
          </div>
        </div>
      </button>
    </article>
  )
}