import clsx from 'clsx'
import {
  BreadcrumbBar,
  type BreadcrumbDropdownItem,
} from './BreadcrumbBar'
import { getIndustryHeroImage } from './industryHeroImages'

export type ResolveHeroImage = (slug: string) => string | null

type DetailHeroProps = {
  slug: string
  eyebrow: string
  title: string
  description: string
  breadcrumb: {
    parentLabel: string
    parentHref: string
    parentDropdown: BreadcrumbDropdownItem[]
    currentLabel: string
  }
  contactHref: string
  resolveHeroImage?: ResolveHeroImage
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
            id={`industry-placeholder-grid-${slug}`}
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
          fill={`url(#industry-placeholder-grid-${slug})`}
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

export function DetailHero({
  slug,
  eyebrow,
  title,
  description,
  breadcrumb,
  contactHref,
  resolveHeroImage = getIndustryHeroImage,
}: DetailHeroProps) {
  return (
    <header className="dark-surface relative overflow-hidden bg-brand-950 text-on-dark">
      {/* Full-bleed media from top of main (under fixed navbar) */}
      <div className="relative min-h-[22rem] sm:min-h-[22.5rem] lg:min-h-[30rem]">
        <HeroMedia slug={slug} resolveHeroImage={resolveHeroImage} />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-brand-950/75 via-brand-950/45 to-brand-950/65"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-brand-950/95 via-brand-950/70 to-transparent sm:h-40"
          aria-hidden
        />

        {/* Breadcrumb row sits just below navbar (Capgemini-style) */}
        <div className="absolute inset-x-0 top-[5.25rem] z-20 sm:top-[6rem]">
          <BreadcrumbBar
            parentLabel={breadcrumb.parentLabel}
            parentHref={breadcrumb.parentHref}
            parentDropdown={breadcrumb.parentDropdown}
            currentLabel={breadcrumb.currentLabel}
            contactHref={contactHref}
          />
        </div>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-content px-5 pb-0 sm:px-6 lg:px-8">
        <div
          className={clsx(
            'rounded-2xl px-6 py-8 text-on-dark sm:px-8 sm:py-10',
            'lg:relative lg:-mt-24 lg:mb-20 lg:w-[55%] lg:max-w-2xl',
            '-mt-6 lg:shadow-lg',
          )}
          style={{
            background:
              'linear-gradient(135deg, #081d29 0%, #0a3d6e 55%, #2878F0 100%)',
          }}
        >
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-electric-400">
            {eyebrow}
          </p>
          <h1 className="mt-2 font-heading text-3xl leading-tight sm:text-4xl lg:text-[2.5rem]">
            {title}
          </h1>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-on-dark-muted sm:text-base">
            {description}
          </p>
        </div>
      </div>
      <div className="hidden h-20 lg:block" aria-hidden />
    </header>
  )
}