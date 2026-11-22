import clsx from 'clsx'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import {
  createElement,
  type KeyboardEvent as ReactKeyboardEvent,
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
} from 'react'
import { Link } from 'react-router-dom'
import { iconForIndustrySlug } from '../../catalog/catalogIcons'
import { Container } from '../../ui'
import { getIndustryHeroImage } from './industryHeroImages'
import type { RelatedCarouselItem } from './relatedCarouselTypes'

const GAP_PX = 24
const DRAG_THRESHOLD_PX = 60
const EASE = [0.22, 0.61, 0.36, 1] as const

type RelatedCarouselPeekProps = {
  heading: string
  items: RelatedCarouselItem[]
  sectionId?: string
}

function IndustrySlideMedia({ item }: { item: RelatedCarouselItem }) {
  const imageUrl = item.image ?? getIndustryHeroImage(item.slug)

  if (imageUrl) {
    return (
      <img
        src={imageUrl}
        alt={item.title}
        width={1600}
        height={1000}
        loading="lazy"
        decoding="async"
        className="h-full w-full object-cover"
      />
    )
  }

  return (
    <div className="relative flex h-full w-full items-center justify-center bg-brand-950">
      <svg
        className="absolute inset-0 h-full w-full opacity-30"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <defs>
          <pattern
            id={`peek-grid-${item.slug}`}
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
        <rect width="100%" height="100%" fill={`url(#peek-grid-${item.slug})`} />
      </svg>
      {createElement(iconForIndustrySlug(item.slug), {
        size: 40,
        className: 'relative z-10 text-electric-400',
        'aria-hidden': true,
      })}
    </div>
  )
}

function PeekSlideCard({
  item,
  index,
  total,
  active,
  linkLabel,
}: {
  item: RelatedCarouselItem
  index: number
  total: number
  active: boolean
  linkLabel: string
}) {
  const label = linkLabel || 'Explore'

  return (
    <article
      className={clsx(
        'flex h-full w-full min-h-[21rem] flex-col overflow-hidden rounded-[20px] border border-[#D4DDE8] bg-white lg:min-h-[17rem] lg:flex-row lg:items-stretch',
        !active && 'cursor-pointer',
      )}
      aria-label={`${item.title}. Slide ${index + 1} of ${total}.`}
    >
      <div className="aspect-[16/10] w-full overflow-hidden rounded-2xl p-2 sm:p-2.5 lg:aspect-auto lg:h-[15.5rem] lg:w-[40%] lg:shrink-0 lg:rounded-l-[16px] lg:p-3">
        <div className="h-full w-full overflow-hidden rounded-2xl lg:rounded-[16px]">
          <IndustrySlideMedia item={item} />
        </div>
      </div>
      <div className="flex flex-1 flex-col justify-center px-5 py-7 sm:px-6 sm:py-8 lg:px-7 lg:py-10">
        <h3 className="font-heading text-xl leading-tight text-brand-950 sm:text-2xl lg:text-[1.65rem]">
          {item.title}
        </h3>
        <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-ink-muted sm:text-base">
          {item.description}
        </p>
        <Link
          to={item.href}
          tabIndex={active ? 0 : -1}
          aria-hidden={!active}
          className={clsx(
            'mt-5 inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-brand-950 underline decoration-[#2878F0] underline-offset-4',
            active && 'hover:text-[#2878F0]',
            !active && 'pointer-events-none',
          )}
        >
          {label}
          <ArrowRight size={14} aria-hidden />
        </Link>
      </div>
    </article>
  )
}

export function RelatedCarouselPeek({
  heading,
  items,
  sectionId = 'related-carousel-peek',
}: RelatedCarouselPeekProps) {
  const reduceMotion = useReducedMotion()
  const regionId = useId()
  const viewportRef = useRef<HTMLDivElement>(null)
  const [viewportWidth, setViewportWidth] = useState(0)
  const [index, setIndex] = useState(0)
  const dragStartX = useRef<number | null>(null)
  const touchStartX = useRef<number | null>(null)
  const multiple = items.length > 1
  const atStart = index === 0
  const atEnd = index === items.length - 1

  useEffect(() => {
    const el = viewportRef.current
    if (!el) return
    const measure = () => setViewportWidth(el.clientWidth)
    measure()
    const ro = new ResizeObserver(measure)
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  const isLg = viewportWidth >= 1024
  const slideRatio =
    items.length === 1 ? 1 : isLg ? 0.66 : 0.86
  const slideWidth = viewportWidth > 0 ? viewportWidth * slideRatio : 0
  const leftPeek = index > 0 && slideWidth > 0 ? slideWidth * (isLg ? 0.12 : 0.06) : 0
  const trackX =
    slideWidth > 0 ? -index * (slideWidth + GAP_PX) + leftPeek : 0

  const goNext = useCallback(() => {
    setIndex((i) => Math.min(i + 1, items.length - 1))
  }, [items.length])

  const goPrev = useCallback(() => {
    setIndex((i) => Math.max(i - 1, 0))
  }, [])

  const onKeyDown = (event: ReactKeyboardEvent<HTMLDivElement>) => {
    if (!multiple) return
    if (event.key === 'ArrowRight' && !atEnd) {
      event.preventDefault()
      goNext()
    } else if (event.key === 'ArrowLeft' && !atStart) {
      event.preventDefault()
      goPrev()
    }
  }

  const onPointerDown = (clientX: number) => {
    dragStartX.current = clientX
    touchStartX.current = clientX
  }

  const onPointerUp = (clientX: number) => {
    const start = dragStartX.current ?? touchStartX.current
    if (start === null || !multiple) return
    const delta = clientX - start
    dragStartX.current = null
    touchStartX.current = null
    if (Math.abs(delta) < DRAG_THRESHOLD_PX) return
    if (delta < 0 && !atEnd) goNext()
    else if (delta > 0 && !atStart) goPrev()
  }

  const transition = reduceMotion
    ? { duration: 0 }
    : { duration: 0.5, ease: EASE }

  return (
    <section
      id={sectionId}
      className="scroll-mt-nav border-t border-[#E1E8F2] py-14 sm:py-16"
      style={{ backgroundColor: '#EAF0FA' }}
      aria-labelledby={`${regionId}-heading`}
    >
      <Container>
        <div
          role="region"
          aria-roledescription="carousel"
          aria-label={heading}
          tabIndex={0}
          onKeyDown={onKeyDown}
          className="outline-none focus-visible:rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2878F0]"
        >
          <div className="flex items-center justify-between gap-4">
            <h2
              id={`${regionId}-heading`}
              className="font-heading text-2xl text-brand-950 sm:text-3xl"
            >
              {heading}
            </h2>
            {multiple ? (
              <div className="flex shrink-0 items-center gap-2 sm:gap-3">
                <p
                  className="min-w-[3.25rem] text-sm font-medium tabular-nums text-brand-950"
                  aria-live="polite"
                >
                  {index + 1} / {items.length}
                </p>
                <button
                  type="button"
                  onClick={goPrev}
                  disabled={atStart}
                  aria-label="Previous slide"
                  className={clsx(
                    'inline-flex h-9 w-9 items-center justify-center rounded-md border-2 border-brand-950 bg-white text-brand-950 transition-opacity',
                    'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2878F0]',
                    atStart
                      ? 'cursor-not-allowed opacity-35'
                      : 'hover:bg-[#EEF3FC]',
                  )}
                >
                  <ChevronLeft size={18} aria-hidden />
                </button>
                <button
                  type="button"
                  onClick={goNext}
                  disabled={atEnd}
                  aria-label="Next slide"
                  className={clsx(
                    'inline-flex h-9 w-9 items-center justify-center rounded-md border-2 border-brand-950 bg-white text-brand-950 transition-opacity',
                    'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2878F0]',
                    atEnd
                      ? 'cursor-not-allowed opacity-35'
                      : 'hover:bg-[#EEF3FC]',
                  )}
                >
                  <ChevronRight size={18} aria-hidden />
                </button>
              </div>
            ) : null}
          </div>
        </div>
      </Container>

      <div
        className="mt-8 overflow-x-hidden sm:mt-10"
        onMouseDown={(e) => onPointerDown(e.clientX)}
        onMouseUp={(e) => onPointerUp(e.clientX)}
        onTouchStart={(e) => onPointerDown(e.touches[0]?.clientX ?? 0)}
        onTouchEnd={(e) =>
          onPointerUp(e.changedTouches[0]?.clientX ?? 0)
        }
      >
        <div ref={viewportRef} className="mx-auto w-full max-w-content px-5 sm:px-6 lg:px-8">
          <motion.div
            className="flex items-center"
            style={{ gap: GAP_PX }}
            animate={{ x: trackX }}
            transition={transition}
          >
            {items.map((item, i) => {
              const active = i === index
              const linkLabel = item.linkLabel ?? 'Explore'
              return (
                <motion.div
                  key={item.slug}
                  className="shrink-0"
                  style={{
                    width: slideWidth > 0 ? slideWidth : `${slideRatio * 100}%`,
                  }}
                  animate={
                    reduceMotion
                      ? { opacity: active ? 1 : 0.5, scale: 1, filter: 'none' }
                      : {
                          opacity: active ? 1 : 0.5,
                          scale: active ? 1 : 0.88,
                          filter: active ? 'blur(0px)' : 'blur(3px)',
                        }
                  }
                  transition={transition}
                  onClick={() => {
                    if (!active) setIndex(i)
                  }}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault()
                      if (!active) setIndex(i)
                    }
                  }}
                  role="group"
                  tabIndex={active ? 0 : -1}
                >
                  <PeekSlideCard
                    item={item}
                    index={i}
                    total={items.length}
                    active={active}
                    linkLabel={linkLabel}
                  />
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}