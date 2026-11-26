import clsx from 'clsx'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
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

  return (
    <HomeSectionShell
      id="industries"
      eyebrow={homeIndustriesGridCopy.eyebrow}
      title={homeIndustriesGridCopy.heading}
      description={homeIndustriesGridCopy.subline}
      variant="muted"
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
      <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)] lg:items-stretch lg:gap-10">
        <Reveal>
          <div
            className="flex flex-wrap gap-2"
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
                  onClick={() => setActiveSlug(item.slug)}
                  onFocus={() => setActiveSlug(item.slug)}
                  className={clsx(
                    'rounded-full px-4 py-2.5 text-left text-sm font-semibold transition-[background,box-shadow,transform] duration-200',
                    'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric-600',
                    selected
                      ? 'bg-brand-950 text-on-dark shadow-md'
                      : 'bg-white text-brand-950 ring-1 ring-line hover:-translate-y-0.5 hover:ring-electric-500/40',
                    'motion-reduce:transition-none motion-reduce:hover:translate-y-0',
                  )}
                >
                  {item.title}
                </button>
              )
            })}
          </div>
        </Reveal>

        <div className="relative min-h-[14rem] overflow-hidden rounded-2xl border border-line bg-white p-6 shadow-md sm:p-8">
          <AnimatePresence mode="wait">
            {active ? (
              <motion.div
                key={active.slug}
                initial={reduceMotion ? false : { opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                exit={reduceMotion ? undefined : { opacity: 0, x: -12 }}
                transition={{ duration: 0.35, ease }}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-electric-600">
                  Industry perspective
                </p>
                <h3 className="mt-2 font-heading text-2xl text-brand-950 sm:text-3xl">
                  {active.title}
                </h3>
                <p className="mt-4 max-w-[50ch] text-base leading-relaxed text-ink-muted">
                  {active.summary}
                </p>
                <Link
                  to={active.href}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-electric-600 transition-colors hover:text-electric-500"
                >
                  View industry page
                  <ArrowRight size={16} aria-hidden />
                </Link>
              </motion.div>
            ) : null}
          </AnimatePresence>
          <div
            className="pointer-events-none absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-electric-500/10 blur-2xl"
            aria-hidden
          />
        </div>
      </div>

    </HomeSectionShell>
  )
}