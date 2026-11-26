import clsx from 'clsx'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight, ExternalLink } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CAREVIE_URL, carevie, type CarevieFeature } from '../../data/carevie'
import { HomeSectionShell } from '../../components/home/HomeSectionShell'
import { Reveal } from '../../components/ui'
import { getCarevieSpotlightImage } from '../carevieSpotlightImages'

const ease = [0.22, 1, 0.36, 1] as const

const FEATURED_SLUGS = [
  'health-records',
  'medication-reminders',
  'appointments',
  'family-care-circle',
] as const

function FeatureTab({
  feature,
  active,
  onSelect,
}: {
  feature: CarevieFeature
  active: boolean
  onSelect: () => void
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className={clsx(
        'w-full border-l-2 py-3 pl-4 text-left transition-[border-color,padding] duration-200',
        active
          ? 'border-accent-500 pl-5'
          : 'border-transparent hover:border-line',
      )}
    >
      <span className="text-sm font-semibold text-brand-950">{feature.title}</span>
    </button>
  )
}

export function CarevieHomeSection() {
  const reduceMotion = useReducedMotion()
  const overviewSrc = getCarevieSpotlightImage('overview')
  const features = carevie.features.filter((f) =>
    FEATURED_SLUGS.includes(f.slug as (typeof FEATURED_SLUGS)[number]),
  )
  const [activeSlug, setActiveSlug] = useState(features[0]?.slug ?? '')
  const active = features.find((f) => f.slug === activeSlug) ?? features[0]

  return (
    <HomeSectionShell
      id="carevie"
      eyebrow={carevie.eyebrow}
      title={carevie.headline}
      description={carevie.summary}
      variant="muted"
      density="compact"
      tone="carevie"
      action={
        <Link
          to="/carevie"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-electric-600 transition-colors hover:text-electric-500"
        >
          Product overview
          <span aria-hidden>→</span>
        </Link>
      }
    >
      <div className="overflow-hidden rounded-[1.75rem] border border-line bg-white shadow-[0_28px_70px_rgba(8,29,41,0.1)]">
        <div className="grid lg:grid-cols-2">
          <Reveal className="flex flex-col justify-between p-6 sm:p-8 lg:min-h-[26rem]">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent-600">
                {carevie.name}
              </p>
              <p className="mt-2 text-lg font-semibold text-brand-950">
                {carevie.tagline}
              </p>
              <div className="mt-6 border-t border-line pt-4" role="tablist" aria-label="Carevie capabilities">
                {features.map((feature) => (
                  <FeatureTab
                    key={feature.slug}
                    feature={feature}
                    active={feature.slug === activeSlug}
                    onSelect={() => setActiveSlug(feature.slug)}
                  />
                ))}
              </div>
              <AnimatePresence mode="wait">
                {active ? (
                  <motion.p
                    key={active.slug}
                    initial={reduceMotion ? false : { opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={reduceMotion ? undefined : { opacity: 0, y: -6 }}
                    transition={{ duration: 0.3, ease }}
                    className="mt-4 text-sm leading-relaxed text-ink-muted"
                  >
                    {active.description}
                  </motion.p>
                ) : null}
              </AnimatePresence>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={CAREVIE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-950 px-6 py-3 text-sm font-semibold text-on-dark shadow-md transition-[transform,background] duration-200 hover:-translate-y-0.5 hover:bg-brand-900 motion-reduce:hover:translate-y-0"
              >
                Explore Carevie
                <ExternalLink size={16} aria-hidden />
              </a>
              <Link
                to="/carevie"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-line px-6 py-3 text-sm font-semibold text-brand-950 transition-colors hover:border-electric-500/40 hover:text-electric-600"
              >
                Learn more
                <ArrowUpRight size={16} aria-hidden />
              </Link>
            </div>
          </Reveal>

          <div className="relative border-t border-line bg-[linear-gradient(180deg,#f0f7f5_0%,#e8f2f0_100%)] p-6 sm:p-8 lg:border-l lg:border-t-0">
            <div
              className="pointer-events-none absolute -right-16 top-8 h-48 w-48 rounded-full bg-accent-500/15 blur-3xl"
              aria-hidden
            />
            <Reveal delay={0.08} className="relative mx-auto max-w-md lg:max-w-none">
              <div
                className="carevie-cascade relative mx-auto w-full max-w-[280px] sm:max-w-[320px]"
                role="img"
                aria-label="Carevie product screens"
              >
                  <div className="carevie-cascade__layer carevie-cascade__layer--back">
                    <ScreenPlaceholder slug="reminders" />
                  </div>
                  <div className="carevie-cascade__layer carevie-cascade__layer--mid">
                    <ScreenPlaceholder slug="care-circle" />
                  </div>
                  <div className="carevie-cascade__layer carevie-cascade__layer--front">
                    {overviewSrc ? (
                      <img
                        src={overviewSrc}
                        alt="Carevie product overview on phone"
                        width={1200}
                        height={800}
                        loading="lazy"
                        decoding="async"
                        className="w-full rounded-2xl shadow-xl ring-1 ring-black/5"
                      />
                    ) : (
                      <div className="aspect-[9/16] w-full rounded-2xl bg-surface-100 shadow-xl" />
                    )}
                  </div>
                </div>
            </Reveal>
          </div>
        </div>
      </div>
    </HomeSectionShell>
  )
}

function ScreenPlaceholder({ slug }: { slug: string }) {
  const src = getCarevieSpotlightImage(slug)
  if (!src) {
    return (
      <div className="aspect-[9/16] w-full rounded-xl border border-line bg-white/80" aria-hidden />
    )
  }
  return (
    <img
      src={src}
      alt=""
      className="aspect-[9/16] w-full rounded-xl border border-line object-cover object-top shadow-md"
      loading="lazy"
      decoding="async"
    />
  )
}