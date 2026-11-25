import clsx from 'clsx'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { createElement, useId, useState } from 'react'
import { Link } from 'react-router-dom'
import type { Service } from '../../../data'
import { iconForServiceSlug } from '../../catalog/catalogIcons'
import { Container } from '../../ui'
import { contactServicesPath } from '../../../utils/contactPaths'
import { getServiceHeroImage } from './serviceHeroImages'

type RelevantServicesOfferingsPanelProps = {
  sectionId: string
  heading: string
  description: string
  services: Service[]
  /** Background band behind the tray (`light` = white page, `muted` = #F5F7FA). */
  bandTone?: 'light' | 'muted' | 'lavender'
}

function ServiceHeroVisual({ service }: { service: Service }) {
  const imageUrl = getServiceHeroImage(service.slug)

  if (imageUrl) {
    return (
      <img
        src={imageUrl}
        alt=""
        width={2400}
        height={1100}
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
            id={`offerings-grid-${service.slug}`}
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
          fill={`url(#offerings-grid-${service.slug})`}
        />
      </svg>
      {createElement(iconForServiceSlug(service.slug), {
        size: 48,
        className: 'relative z-10 text-electric-400',
        'aria-hidden': true,
      })}
    </div>
  )
}

export function RelevantServicesOfferingsPanel({
  sectionId,
  heading,
  description,
  services,
  bandTone = 'light',
}: RelevantServicesOfferingsPanelProps) {
  const reduceMotion = useReducedMotion()
  const tabListId = useId()
  const [activeIndex, setActiveIndex] = useState(0)
  const active = services[activeIndex] ?? services[0]
  if (!active) return null

  const highlights = active.capabilities.slice(0, 4)

  return (
    <section
      id={sectionId}
      className="scroll-mt-nav border-t border-[#E1E8F2] py-14 sm:py-16"
      style={{
        backgroundColor:
          bandTone === 'lavender'
            ? '#F4F3F9'
            : bandTone === 'muted'
              ? '#F5F7FA'
              : '#ffffff',
      }}
    >
      <Container>
        <div className="grid gap-8 lg:grid-cols-[minmax(0,17.5rem)_1fr] lg:gap-10 xl:grid-cols-[minmax(0,20rem)_1fr]">
            <div>
              <h2 className="font-heading text-2xl text-brand-950 sm:text-3xl">
                {heading}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted sm:text-base">
                {description}
              </p>

              {services.length > 1 ? (
                <motion.ul
                  role="tablist"
                  aria-labelledby={`${tabListId}-label`}
                  aria-orientation="vertical"
                  className="mt-8 space-y-1"
                  layout={!reduceMotion}
                >
                  <span id={`${tabListId}-label`} className="sr-only">
                    {heading}
                  </span>
                  {services.map((service, index) => {
                    const selected = index === activeIndex
                    return (
                      <li key={service.slug} role="presentation">
                        <button
                          type="button"
                          role="tab"
                          id={`${tabListId}-tab-${service.slug}`}
                          aria-selected={selected}
                          aria-controls={`${tabListId}-panel`}
                          tabIndex={selected ? 0 : -1}
                          onClick={() => setActiveIndex(index)}
                          className={clsx(
                            'w-full rounded-lg border-l-4 px-4 py-3 text-left text-sm font-medium transition-colors sm:text-[0.95rem]',
                            'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2878F0]',
                            selected
                              ? 'border-[#2878F0] bg-white text-[#0B3B8C] shadow-sm'
                              : 'border-transparent text-ink-muted hover:bg-white/60 hover:text-brand-950',
                          )}
                        >
                          {service.title}
                        </button>
                      </li>
                    )
                  })}
                </motion.ul>
              ) : (
                <p className="mt-6 text-sm font-medium text-brand-950">
                  {active.title}
                </p>
              )}
            </div>

            <div
              role="tabpanel"
              id={`${tabListId}-panel`}
              aria-labelledby={`${tabListId}-tab-${active.slug}`}
              className="overflow-hidden rounded-2xl bg-white shadow-[0_12px_40px_rgb(8_29_41/0.1)]"
            >
              <div className="h-48 w-full overflow-hidden sm:h-56 lg:h-52 xl:h-60">
                {reduceMotion ? (
                  <ServiceHeroVisual service={active} />
                ) : (
                  <motion.div
                    key={active.slug}
                    initial={{ opacity: 0.85 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.35 }}
                    className="h-full w-full"
                  >
                    <ServiceHeroVisual service={active} />
                  </motion.div>
                )}
              </div>

              <div className="px-5 py-6 sm:px-7 sm:py-8">
                <p className="text-sm leading-relaxed text-ink-muted sm:text-base">
                  {active.summary}
                </p>

                {highlights.length > 0 ? (
                  <ol className="mt-6 grid gap-3 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-3">
                    {highlights.map((line, i) => (
                      <li
                        key={line}
                        className="flex gap-2 text-sm leading-snug text-brand-950"
                      >
                        <span
                          className="shrink-0 font-semibold tabular-nums text-[#2878F0]"
                          aria-hidden
                        >
                          {String(i + 1).padStart(2, '0')}.
                        </span>
                        <span>{line}</span>
                      </li>
                    ))}
                  </ol>
                ) : null}

                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                  <Link
                    to={`/services/${active.slug}`}
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-[#2878F0] bg-white px-5 py-2.5 text-sm font-semibold text-[#2878F0] transition-colors hover:bg-[#EEF3FC]"
                  >
                    View service detail
                    <ArrowRight size={16} aria-hidden />
                  </Link>
                  <Link
                    to={contactServicesPath(active.slug)}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-950 px-5 py-2.5 text-sm font-semibold text-on-dark transition-colors hover:bg-brand-900"
                  >
                    Discuss with Zeldapro
                    <ArrowRight size={16} aria-hidden />
                  </Link>
                </div>
              </div>
            </div>
        </div>
      </Container>
    </section>
  )
}