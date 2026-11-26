import clsx from 'clsx'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { getIndustryHeroImage } from '../../components/pages/detail/industryHeroImages'
import { HomeSectionShell } from '../../components/home/HomeSectionShell'
import { Reveal } from '../../components/ui'
import {
  homeIndustriesGrid,
  homeIndustriesGridCopy,
} from '../../data/homeIndustriesGrid'

const ease = [0.22, 1, 0.36, 1] as const

export function HomeIndustriesSection() {
  const reduceMotion = useReducedMotion()
  const [activeSlug, setActiveSlug] = useState(homeIndustriesGrid[0]?.slug ?? '')
  const active =
    homeIndustriesGrid.find((item) => item.slug === activeSlug) ??
    homeIndustriesGrid[0]
  const imageSrc = active ? getIndustryHeroImage(active.slug) : null

  return (
    <HomeSectionShell
      id="industries"
      eyebrow={homeIndustriesGridCopy.eyebrow}
      title={homeIndustriesGridCopy.heading}
      description={homeIndustriesGridCopy.subline}
      variant="default"
      density="compact"
      tone="industries"
      action={
        <Link
          to={homeIndustriesGridCopy.viewAllHref}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-electric-600 transition-colors hover:text-electric-500"
        >
          {homeIndustriesGridCopy.viewAllLabel}
          <span aria-hidden>→</span>
        </Link>
      }
    >
      <div className="grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-stretch lg:gap-8">
        <div
          className="relative min-h-[18rem] overflow-hidden rounded-2xl border border-line shadow-lg sm:min-h-[20rem]"
          role="tabpanel"
        >
          <AnimatePresence mode="wait">
            {active ? (
              <motion.div
                key={active.slug}
                className="absolute inset-0 flex flex-col justify-end"
                initial={reduceMotion ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={reduceMotion ? undefined : { opacity: 0 }}
                transition={{ duration: 0.4, ease }}
              >
                {imageSrc ? (
                  <img
                    src={imageSrc}
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                ) : (
                  <div
                    className="absolute inset-0 bg-[linear-gradient(135deg,#d9e6ef,#081d29)]"
                    aria-hidden
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-950/92 via-brand-950/45 to-brand-950/20" />
                <div className="relative p-6 text-white sm:p-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-electric-400">
                    Industry perspective
                  </p>
                  <h3 className="mt-2 font-heading text-2xl sm:text-3xl">
                    {active.title}
                  </h3>
                  <p className="mt-3 max-w-lg text-sm leading-relaxed text-white/85 sm:text-base">
                    {active.summary}
                  </p>
                  <Link
                    to={active.href}
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                  >
                    View industry page
                    <ArrowRight size={16} aria-hidden />
                  </Link>
                </div>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>

        <Reveal>
          <div
            className="flex flex-wrap gap-2 lg:flex-col lg:justify-center"
            role="tablist"
            aria-label="Industries"
          >
            {homeIndustriesGrid.map((item) => {
              const selected = item.slug === activeSlug
              return (
                <button
                  key={item.slug}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  onMouseEnter={() => setActiveSlug(item.slug)}
                  onFocus={() => setActiveSlug(item.slug)}
                  onClick={() => setActiveSlug(item.slug)}
                  className={clsx(
                    'rounded-full px-4 py-2 text-left text-sm font-semibold transition-all duration-200',
                    'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric-600',
                    selected
                      ? 'bg-brand-950 text-on-dark shadow-md'
                      : 'bg-surface-100 text-brand-950 ring-1 ring-line hover:ring-electric-500/40',
                  )}
                >
                  {item.title}
                </button>
              )
            })}
          </div>
        </Reveal>
      </div>
    </HomeSectionShell>
  )
}