import clsx from 'clsx'
import { ArrowUpRight, ExternalLink } from 'lucide-react'
import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import { CAREVIE_URL, carevie } from '../../data/carevie'
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

export function CarevieHomeSection() {
  const reduceMotion = useReducedMotion()
  const overviewSrc = getCarevieSpotlightImage('overview')
  const features = carevie.features.filter((f) =>
    FEATURED_SLUGS.includes(f.slug as (typeof FEATURED_SLUGS)[number]),
  )

  const visual = (
    <div className="relative">
      <div
        className="pointer-events-none absolute -inset-4 rounded-[2rem] bg-[radial-gradient(ellipse_80%_70%_at_50%_30%,rgba(58,133,129,0.14),transparent_65%)]"
        aria-hidden
      />
      <div className="relative overflow-hidden rounded-2xl border border-line bg-white p-2 shadow-lg">
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
      </div>
    </div>
  )

  return (
    <HomeSectionShell
      id="carevie"
      eyebrow={carevie.eyebrow}
      title={carevie.headline}
      description={carevie.summary}
      variant="muted"
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
      <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
        <Reveal className="min-w-0">
          <p className="text-sm font-semibold text-accent-600">{carevie.tagline}</p>
          <ul className="mt-8 space-y-3">
            {features.map((feature, index) => (
              <motion.li
                key={feature.slug}
                className={clsx(
                  'rounded-xl border border-line bg-white px-5 py-4 shadow-sm',
                  'transition-[border-color,box-shadow] duration-300 hover:border-accent-500/35 hover:shadow-md',
                )}
                initial={reduceMotion ? false : { opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, delay: index * 0.05, ease }}
              >
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <h3 className="text-base font-semibold text-brand-950">
                    {feature.title}
                  </h3>
                  <span
                    className={clsx(
                      'rounded-full px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide',
                      feature.status === 'coming-soon'
                        ? 'bg-surface-100 text-ink-subtle'
                        : 'bg-accent-500/10 text-accent-600',
                    )}
                  >
                    {feature.status === 'coming-soon'
                      ? 'Coming soon'
                      : feature.statusLabel}
                  </span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                  {feature.description}
                </p>
              </motion.li>
            ))}
          </ul>
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
              className="inline-flex items-center justify-center gap-2 rounded-full border border-line bg-white px-6 py-3 text-sm font-semibold text-brand-950 transition-colors hover:border-electric-500/40 hover:text-electric-600"
            >
              Learn more
              <ArrowUpRight size={16} aria-hidden />
            </Link>
          </div>
        </Reveal>

        <Reveal delay={0.06} className="min-w-0 lg:sticky lg:top-[calc(var(--nav-h)+2rem)]">
          {visual}
        </Reveal>
      </div>
    </HomeSectionShell>
  )
}