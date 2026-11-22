import clsx from 'clsx'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import {
  createElement,
  type KeyboardEvent as ReactKeyboardEvent,
  useCallback,
  useId,
  useRef,
  useState,
} from 'react'
import { Link } from 'react-router-dom'
import { iconForSolutionSlug } from '../../catalog/catalogIcons'
import { Container } from '../../ui'
import { getSolutionHeroImage } from './solutionHeroImages'
import type { RelatedCarouselDefaultProps, RelatedCarouselItem } from './relatedCarouselTypes'

const SWIPE_THRESHOLD_PX = 48

function CarouselMedia({
  slug,
  title,
  imageUrl,
  className,
}: {
  slug: string
  title: string
  imageUrl: string | null
  className?: string
}) {
  const mediaClass = clsx(
    'relative h-full w-full overflow-hidden bg-brand-950',
    className,
  )

  if (imageUrl) {
    return (
      <div className={mediaClass}>
        <img
          src={imageUrl}
          alt={title}
          width={2400}
          height={1100}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>
    )
  }

  return (
    <div className={clsx(mediaClass, 'flex items-center justify-center')}>
      <svg
        className="absolute inset-0 h-full w-full opacity-30"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <defs>
          <pattern
            id={`carousel-grid-${slug}`}
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke="#38bdf8"
              strokeOpacity="0.2"
              strokeWidth="0.75"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#carousel-grid-${slug})`} />
      </svg>
      {createElement(iconForSolutionSlug(slug), {
        size: 36,
        className: 'relative z-10 text-electric-400',
        'aria-hidden': true,
      })}
    </div>
  )
}

function CarouselCard({
  item,
  index,
  total,
}: {
  item: RelatedCarouselItem
  index: number
  total: number
}) {
  const imageUrl = item.image ?? getSolutionHeroImage(item.slug)

  return (
    <Link
      to={item.href}
      aria-label={`${item.title}. Slide ${index + 1} of ${total}.`}
      className={clsx(
        'group relative flex flex-col overflow-hidden rounded-[20px] bg-white',
        'shadow-[0_16px_48px_-8px_rgb(8_29_41/0.16),0_4px_16px_rgb(8_29_41/0.06)]',
        'transition-shadow hover:shadow-[0_22px_56px_-10px_rgb(8_29_41/0.2)]',
        'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2878F0]',
        'lg:flex-row lg:items-stretch',
      )}
    >
      <div className="h-52 w-full shrink-0 sm:h-56 lg:h-auto lg:min-h-[17.5rem] lg:w-[55%] lg:rounded-l-[20px]">
        <CarouselMedia
          slug={item.slug}
          title={item.title}
          imageUrl={imageUrl}
          className="lg:rounded-l-[20px]"
        />
      </div>
      <div className="flex min-w-0 flex-1 flex-col justify-center bg-white px-6 py-6 sm:px-8 sm:py-8 lg:py-10">
        {item.badge ? (
          <span className="inline-flex w-fit rounded-full bg-brand-950 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-on-dark">
            {item.badge}
          </span>
        ) : null}
        <h3 className="mt-4 font-heading text-2xl leading-tight text-brand-950 sm:text-[1.65rem]">
          {item.title}
        </h3>
        <p className="mt-3 line-clamp-4 text-sm leading-relaxed text-ink-muted sm:text-base">
          {item.description}
        </p>
        <span
          className={clsx(
            'mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-brand-950 px-4 py-2.5 text-sm font-semibold text-on-dark',
            'transition-colors group-hover:bg-brand-900',
          )}
        >
          Explore solution
          <ArrowRight
            size={16}
            aria-hidden
            className="transition-transform group-hover:translate-x-0.5"
          />
        </span>
      </div>
    </Link>
  )
}

export function RelatedCarouselDefault({
  heading,
  description,
  viewAllHref,
  viewAllLabel,
  items,
  sectionId = 'related-carousel',
}: RelatedCarouselDefaultProps) {
  const reduceMotion = useReducedMotion()
  const regionId = useId()
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const touchStartX = useRef<number | null>(null)
  const multiple = items.length > 1
  const current = items[index]

  const goNext = useCallback(() => {
    setDirection(1)
    setIndex((i) => (i + 1) % items.length)
  }, [items.length])

  const goPrev = useCallback(() => {
    setDirection(-1)
    setIndex((i) => (i - 1 + items.length) % items.length)
  }, [items.length])

  const onKeyDown = (event: ReactKeyboardEvent<HTMLDivElement>) => {
    if (!multiple) return
    if (event.key === 'ArrowRight') {
      event.preventDefault()
      goNext()
    } else if (event.key === 'ArrowLeft') {
      event.preventDefault()
      goPrev()
    }
  }

  const onTouchStart = (event: React.TouchEvent) => {
    touchStartX.current = event.touches[0]?.clientX ?? null
  }

  const onTouchEnd = (event: React.TouchEvent) => {
    if (touchStartX.current === null || !multiple) return
    const endX = event.changedTouches[0]?.clientX
    if (endX === undefined) return
    const delta = endX - touchStartX.current
    touchStartX.current = null
    if (Math.abs(delta) < SWIPE_THRESHOLD_PX) return
    if (delta < 0) goNext()
    else goPrev()
  }

  if (!current) return null

  const slideVariants = {
    enter: (dir: number) => ({
      opacity: 0,
      x: dir >= 0 ? 32 : -32,
    }),
    center: { opacity: 1, x: 0 },
    exit: (dir: number) => ({
      opacity: 0,
      x: dir >= 0 ? -32 : 32,
    }),
  }

  return (
    <section
      id={sectionId}
      className="scroll-mt-32 border-t border-[#E1E8F2] bg-white py-14 sm:py-16 lg:scroll-mt-36"
      aria-labelledby={`${regionId}-heading`}
    >
      <Container className="overflow-x-hidden">
        <div
          className="rounded-3xl bg-[#E4EAF2] px-5 py-8 sm:px-7 sm:py-10 lg:px-10 lg:py-12"
          style={{ backgroundColor: '#E4EAF2' }}
        >
          <div
            role="region"
            aria-roledescription="carousel"
            aria-label={heading}
            tabIndex={0}
            onKeyDown={onKeyDown}
            className="outline-none focus-visible:rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2878F0]"
          >
            <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between lg:gap-8">
              <div className="max-w-2xl">
                <h2
                  id={`${regionId}-heading`}
                  className="font-heading text-2xl text-brand-950 sm:text-3xl"
                >
                  {heading}
                </h2>
                <p className="mt-3 text-sm text-ink-muted sm:text-base">
                  {description}
                </p>
                <Link
                  to={viewAllHref}
                  className="mt-3 inline-block whitespace-nowrap text-sm font-medium text-brand-950 underline decoration-[#2878F0]/60 underline-offset-4 hover:decoration-[#2878F0]"
                >
                  {viewAllLabel}
                </Link>
              </div>

              {multiple ? (
                <div className="flex items-center gap-3">
                  <p
                    className="min-w-[3.5rem] text-sm font-medium tabular-nums text-brand-950"
                    aria-live="polite"
                  >
                    {index + 1} / {items.length}
                  </p>
                  <button
                    type="button"
                    onClick={goPrev}
                    aria-label="Previous slide"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-950 text-on-dark transition-colors hover:bg-brand-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2878F0]"
                  >
                    <ChevronLeft size={20} aria-hidden />
                  </button>
                  <button
                    type="button"
                    onClick={goNext}
                    aria-label="Next slide"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-950 text-on-dark transition-colors hover:bg-brand-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2878F0]"
                  >
                    <ChevronRight size={20} aria-hidden />
                  </button>
                </div>
              ) : null}
            </div>

            <div
              className="relative mt-8 lg:mt-10"
              onTouchStart={onTouchStart}
              onTouchEnd={onTouchEnd}
            >
              <div className="relative z-10">
                {reduceMotion ? (
                  <CarouselCard
                    item={current}
                    index={index}
                    total={items.length}
                  />
                ) : (
                  <AnimatePresence mode="wait" custom={direction}>
                    <motion.div
                      key={current.slug}
                      custom={direction}
                      variants={slideVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{
                        duration: 0.35,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    >
                      <CarouselCard
                        item={current}
                        index={index}
                        total={items.length}
                      />
                    </motion.div>
                  </AnimatePresence>
                )}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}