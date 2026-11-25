import clsx from 'clsx'
import { ArrowRight } from 'lucide-react'
import { motion, type MotionValue } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Container } from '../../ui'
import { getIndustryHeroImage } from './industryHeroImages'

export type ResolveHeroImage = (slug: string) => string | null

export type DetailHeroBreadcrumb = {
  parentLabel: string
  currentLabel: string
}

export type DetailCurtainMotion = {
  y: MotionValue<number>
  opacity: MotionValue<number>
  scale: MotionValue<number>
}

export type DetailHeroProps = {
  slug: string
  headline: string
  description: string
  breadcrumb: DetailHeroBreadcrumb
  contactHref?: string
  resolveHeroImage?: ResolveHeroImage
  curtainMotion?: DetailCurtainMotion
  fillSticky?: boolean
}

function HeroMedia({
  slug,
  resolveHeroImage,
}: {
  slug: string
  resolveHeroImage: ResolveHeroImage
}) {
  const src = resolveHeroImage(slug)
  const dev = import.meta.env.DEV

  if (src) {
    return (
      <img
        src={src}
        alt=""
        width={2400}
        height={1100}
        className="absolute inset-0 h-full w-full object-cover"
        decoding="async"
      />
    )
  }

  return (
    <div className="absolute inset-0 bg-[#0B1424]">
      <svg
        className="absolute inset-0 h-full w-full opacity-30"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <defs>
          <pattern
            id={`detail-placeholder-grid-${slug}`}
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
        <rect
          width="100%"
          height="100%"
          fill={`url(#detail-placeholder-grid-${slug})`}
        />
      </svg>
      {dev ? (
        <p className="absolute inset-0 flex items-center justify-center text-sm text-on-dark-muted/40">
          Image coming soon
        </p>
      ) : null}
    </div>
  )
}

function HeroContent({
  headline,
  description,
  breadcrumb,
  contactHref = '/contact',
  curtainMotion,
}: {
  headline: string
  description: string
  breadcrumb: DetailHeroBreadcrumb
  contactHref?: string
  curtainMotion?: DetailCurtainMotion
}) {
  const categoryLabel = breadcrumb.parentLabel.toUpperCase()
  const nameLabel = breadcrumb.currentLabel.toUpperCase()

  const inner = (
    <div className="detail-hero-copy w-full max-w-[min(100%,36rem)] text-left sm:max-w-xl lg:max-w-2xl xl:max-w-[44rem]">
      <nav aria-label="Breadcrumb">
        <p className="text-[0.6875rem] font-normal tracking-[0.26em] text-white/95 sm:text-xs">
          {categoryLabel} / {nameLabel}
        </p>
      </nav>
      <div
        className="detail-hero-divider mt-3 sm:mt-3.5"
        aria-hidden
      />
      <h1 className="detail-hero-headline hero-primary-text mt-9 sm:mt-10 lg:mt-12">
        {headline}
      </h1>
      <p className="detail-hero-description mt-6 max-w-[60ch] sm:mt-7 lg:mt-8">
        {description}
      </p>
      <Link
        to={contactHref}
        className="group mt-10 inline-flex items-center gap-4 text-white transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-electric-400 sm:mt-12 lg:mt-14"
      >
        <span className="font-heading text-xl font-medium tracking-tight sm:text-2xl">
          Let&apos;s talk
        </span>
        <span
          className="inline-flex h-[3.25rem] w-[3.25rem] shrink-0 items-center justify-center rounded-full bg-white text-brand-950 shadow-lg shadow-black/30 transition-opacity group-hover:opacity-90 sm:h-14 sm:w-14"
          aria-hidden
        >
          <ArrowRight size={23} strokeWidth={2.25} />
        </span>
      </Link>
    </div>
  )

  if (curtainMotion) {
    return (
      <motion.div
        style={{
          y: curtainMotion.y,
          opacity: curtainMotion.opacity,
          scale: curtainMotion.scale,
        }}
      >
        {inner}
      </motion.div>
    )
  }

  return inner
}

export function DetailHero({
  slug,
  headline,
  description,
  breadcrumb,
  contactHref = '/contact',
  resolveHeroImage = getIndustryHeroImage,
  curtainMotion,
  fillSticky = false,
}: DetailHeroProps) {
  const heightClass = fillSticky
    ? 'h-full min-h-[calc(100svh-var(--nav-h))]'
    : 'min-h-[calc(100svh-var(--nav-h))]'

  return (
    <header
      className={clsx(
        'dark-surface relative flex flex-col overflow-hidden bg-[#0B1424] text-on-dark',
        heightClass,
      )}
    >
      <div className="detail-hero-overlay hero-section-overlay relative flex min-h-0 flex-1 flex-col">
        <HeroMedia slug={slug} resolveHeroImage={resolveHeroImage} />

        <div className="absolute inset-0 z-10 flex items-center">
          <Container className="w-full py-10 sm:py-12 lg:py-14">
            <HeroContent
              headline={headline}
              description={description}
              breadcrumb={breadcrumb}
              contactHref={contactHref}
              curtainMotion={curtainMotion}
            />
          </Container>
        </div>
      </div>
    </header>
  )
}