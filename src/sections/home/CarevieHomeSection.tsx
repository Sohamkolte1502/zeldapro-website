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

function FeatureButton({
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
        'w-full rounded-xl border px-4 py-3 text-left transition-[border-color,background,box-shadow,transform] duration-250',
        'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-500',
        active
          ? 'border-accent-500/50 bg-white shadow-md'
          : 'border-transparent bg-white/60 hover:border-line hover:bg-white hover:shadow-sm',
        active && '-translate-y-0.5',
        'motion-reduce:transform-none',
      )}
    >
      <div className="flex items-start justify-between gap-2">
        <span className="text-sm font-semibold text-brand-950">
          {feature.title}
        </span>
        <span
          className={clsx(
            'shrink-0 rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide',
            feature.status === 'coming-soon'
              ? 'bg-surface-100 text-ink-subtle'
              : 'bg-accent-500/15 text-accent-600',
          )}
        >
          {feature.status === 'coming-soon' ? 'Soon' : feature.statusLabel}
        </span>
      </div>
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
      className="overflow-hidden"
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
      <div className="relative rounded-3xl border border-line bg-[linear-gradient(145deg,#f8fbfa_0%,#ffffff_42%,#f3f6f8_100%)] p-5 sm:p-8 lg:p-10">
        <div
          className="pointer-events-none absolute -left-20 top-0 h-56 w-56 rounded-full bg-accent-500/10 blur-3xl"
          aria-hidden
        />
        <p className="relative text-sm font-semibold text-accent-600">
          {carevie.name} · {carevie.tagline}
        </p>

        <div className="relative mt-8 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <Reveal className="min-w-0 space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-subtle">
              Capabilities
            </p>
            {features.map((feature) => (
              <FeatureButton
                key={feature.slug}
                feature={feature}
                active={feature.slug === activeSlug}
                onSelect={() => setActiveSlug(feature.slug)}
              />
            ))}

            <AnimatePresence mode="wait">
              {active ? (
                <motion.p
                  key={active.slug}
                  initial={reduceMotion ? false : { opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduceMotion ? undefined : { opacity: 0, y: -6 }}
                  transition={{ duration: 0.3, ease }}
                  className="rounded-xl border border-line bg-white/90 p-4 text-sm leading-relaxed text-ink-muted"
                >
                  {active.description}
                </motion.p>
              ) : null}
            </AnimatePresence>

            <div className="flex flex-wrap gap-3 pt-2">
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
                className="inline-flex items-center justify-center gap-2 rounded-full border border-line bg-white px-6 py-3 text-sm font-semibold text-brand-950 transition-colors hover:border-electric-500/40 hover:text-electric-600"
              >
                Learn more
                <ArrowUpRight size={16} aria-hidden />
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.06} className="relative min-w-0">
            <motion.div
              animate={
                reduceMotion
                  ? undefined
                  : { scale: active ? 1 : 0.98, opacity: 1 }
              }
              transition={{ duration: 0.45, ease }}
              className="overflow-hidden rounded-2xl border border-line bg-white p-2 shadow-lg"
            >
              {overviewSrc ? (
                <img
                  src={overviewSrc}
                  alt="Carevie product overview"
                  width={1200}
                  height={800}
                  loading="lazy"
                  decoding="async"
                  className="w-full rounded-xl object-cover object-top"
                />
              ) : (
                <div
                  className="flex aspect-[3/2] items-center justify-center rounded-xl bg-surface-100 text-sm text-ink-muted"
                  role="img"
                  aria-label="Carevie product overview"
                >
                  Carevie overview
                </div>
              )}
            </motion.div>
          </Reveal>
        </div>
      </div>
    </HomeSectionShell>
  )
}