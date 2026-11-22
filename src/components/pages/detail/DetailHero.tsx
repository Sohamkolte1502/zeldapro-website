import clsx from 'clsx'
import { ArrowRight } from 'lucide-react'
import { motion, type MotionValue } from 'framer-motion'
import { Link } from 'react-router-dom'
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
  eyebrow: string
  title: string
  description: string
  breadcrumb: DetailHeroBreadcrumb
  contactHref: string
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
    <div className="absolute inset-0 bg-brand-950">
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
  eyebrow,
  title,
  description,
  breadcrumb,
  contactHref,
  curtainMotion,
}: {
  eyebrow: string
  title: string
  description: string
  breadcrumb: DetailHeroBreadcrumb
  contactHref: string
  curtainMotion?: DetailCurtainMotion
}) {
  const trail = `${breadcrumb.parentLabel.toUpperCase()} / ${breadcrumb.currentLabel.toUpperCase()}`

  const inner = (
    <>
      <p className="text-xs font-medium tracking-[0.22em] text-on-dark/85">
        {trail}
      </p>
      <p className="mt-3 text-xs font-medium uppercase tracking-[0.18em] text-electric-400">
        {eyebrow}
      </p>
      <h1 className="mt-4 max-w-3xl font-heading text-3xl leading-[1.1] text-on-dark sm:text-4xl lg:text-5xl">
        {title}
      </h1>
      <p className="mt-5 max-w-2xl text-base leading-relaxed text-on-dark-muted sm:text-lg">
        {description}
      </p>
      <Link
        to={contactHref}
        className="group mt-10 inline-flex items-center gap-4 text-on-dark transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-electric-400"
      >
        <span className="font-heading text-xl font-medium sm:text-2xl">
          Let&apos;s talk
        </span>
        <span
          className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/35 bg-white/5 transition-colors group-hover:border-white/55 group-hover:bg-white/10"
          aria-hidden
        >
          <ArrowRight size={22} />
        </span>
      </Link>
    </>
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

  return <div>{inner}</div>
}

export function DetailHero({
  slug,
  eyebrow,
  title,
  description,
  breadcrumb,
  contactHref,
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
        'dark-surface relative flex flex-col overflow-hidden bg-brand-950 text-on-dark',
        heightClass,
      )}
    >
      <div className="relative min-h-0 flex-1">
        <HeroMedia slug={slug} resolveHeroImage={resolveHeroImage} />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-r from-brand-950/90 via-brand-950/55 to-brand-950/35"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-950/70 via-transparent to-brand-950/25"
          aria-hidden
        />

        <div className="absolute inset-x-0 bottom-0 z-10 mx-auto w-full max-w-content px-5 pb-10 sm:px-6 sm:pb-12 lg:px-8 lg:pb-16">
          <HeroContent
            eyebrow={eyebrow}
            title={title}
            description={description}
            breadcrumb={breadcrumb}
            contactHref={contactHref}
            curtainMotion={curtainMotion}
          />
        </div>
      </div>
    </header>
  )
}