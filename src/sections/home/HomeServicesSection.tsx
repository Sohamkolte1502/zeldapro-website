import clsx from 'clsx'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { getServiceHeroImage } from '../../components/pages/detail/serviceHeroImages'
import { HomeSectionShell } from '../../components/home/HomeSectionShell'
import {
  homeServicesGrid,
  homeServicesGridCopy,
} from '../../data/homeServicesGrid'

const ease = [0.22, 1, 0.36, 1] as const

export function HomeServicesSection() {
  const reduceMotion = useReducedMotion()
  const [activeSlug, setActiveSlug] = useState(homeServicesGrid[0]?.slug ?? '')
  const active =
    homeServicesGrid.find((s) => s.slug === activeSlug) ?? homeServicesGrid[0]
  const heroSrc = active ? getServiceHeroImage(active.slug) : null
  const Icon = active?.icon

  return (
    <HomeSectionShell
      id="what-we-do"
      eyebrow={homeServicesGridCopy.eyebrow}
      title={homeServicesGridCopy.heading}
      description={homeServicesGridCopy.subline}
      variant="default"
      density="compact"
      tone="services"
      action={
        <Link
          to={homeServicesGridCopy.viewAllHref}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-electric-600 transition-colors hover:text-electric-500"
        >
          {homeServicesGridCopy.viewAllLabel}
          <span aria-hidden>→</span>
        </Link>
      }
    >
      <div className="grid gap-6 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.35fr)] lg:gap-8">
        <ul
          className="flex gap-2 overflow-x-auto pb-1 lg:flex-col lg:overflow-visible lg:pb-0"
          role="tablist"
          aria-label="Services"
        >
          {homeServicesGrid.map((service, index) => {
            const selected = service.slug === activeSlug
            const ServiceIcon = service.icon
            return (
              <li key={service.slug} className="shrink-0 lg:shrink">
                <button
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  onMouseEnter={() => setActiveSlug(service.slug)}
                  onFocus={() => setActiveSlug(service.slug)}
                  onClick={() => setActiveSlug(service.slug)}
                  className={clsx(
                    'flex w-[min(72vw,16rem)] items-center gap-3 rounded-xl border px-4 py-3 text-left transition-[border-color,background,box-shadow,transform] duration-250 lg:w-full',
                    'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric-600',
                    selected
                      ? 'border-brand-950/20 bg-brand-950 text-on-dark shadow-lg'
                      : 'border-line bg-white text-brand-950 hover:-translate-y-0.5 hover:border-electric-500/35 hover:shadow-md',
                    'motion-reduce:transform-none',
                  )}
                >
                  <span
                    className={clsx(
                      'flex h-9 w-9 shrink-0 items-center justify-center rounded-lg',
                      selected ? 'bg-white/15 text-on-dark' : 'bg-surface-100 text-electric-600',
                    )}
                    aria-hidden
                  >
                    <ServiceIcon size={18} />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[10px] font-bold tabular-nums opacity-70">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="block text-sm font-semibold leading-snug">
                      {service.title}
                    </span>
                  </span>
                </button>
              </li>
            )
          })}
        </ul>

        <div className="relative min-h-[22rem] overflow-hidden rounded-2xl border border-line shadow-[0_24px_60px_rgba(8,29,41,0.12)] sm:min-h-[26rem]">
          <AnimatePresence mode="wait">
            {active ? (
              <motion.div
                key={active.slug}
                className="home-service-stage absolute inset-0 flex flex-col justify-end"
                style={
                  heroSrc
                    ? {
                        backgroundImage: `linear-gradient(180deg, rgba(8,29,41,0.15) 0%, rgba(8,29,41,0.82) 72%), url(${heroSrc})`,
                      }
                    : {
                        backgroundImage:
                          'linear-gradient(145deg, #e8f0fa 0%, #081d29 65%)',
                      }
                }
                initial={reduceMotion ? false : { opacity: 0, scale: 1.02 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={reduceMotion ? undefined : { opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.45, ease }}
              >
                <div className="relative p-6 text-white sm:p-8">
                  {Icon ? (
                    <span className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/15 backdrop-blur-sm">
                      <Icon size={22} aria-hidden />
                    </span>
                  ) : null}
                  <h3 className="font-heading text-2xl leading-tight sm:text-3xl">
                    {active.title}
                  </h3>
                  <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/85 sm:text-base">
                    {active.description}
                  </p>
                  <Link
                    to={active.href}
                    className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-brand-950 transition-transform hover:-translate-y-0.5 motion-reduce:hover:translate-y-0"
                  >
                    View service
                    <ArrowRight size={16} aria-hidden />
                  </Link>
                </div>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>
      </div>
    </HomeSectionShell>
  )
}