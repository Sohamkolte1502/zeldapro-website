import clsx from 'clsx'
import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Container, Reveal } from '../../components/ui'
import {
  homeWhatWeDoCards,
  homeWhatWeDoCopy,
} from '../../data/homeWhatWeDo'

function WhatWeDoCard({
  card,
}: {
  card: (typeof homeWhatWeDoCards)[number]
}) {
  const Icon = card.icon
  const href = `/services/${card.serviceSlug}`

  return (
    <Link
        to={href}
        className={clsx(
          'group relative flex h-full min-h-[14rem] flex-col rounded-2xl border border-[#E1E8F2] bg-white p-6 shadow-sm',
          'transition-[transform,box-shadow,border-color] duration-300',
          'hover:-translate-y-0.5 hover:border-electric-500/45 hover:shadow-md',
          'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric-600',
          'motion-reduce:transition-none motion-reduce:hover:translate-y-0',
        )}
      >
        <ArrowUpRight
          size={20}
          className={clsx(
            'absolute right-5 top-5 text-electric-600 opacity-0 transition-opacity duration-300',
            'group-hover:opacity-100 group-focus-visible:opacity-100',
            'motion-reduce:opacity-100 motion-reduce:group-hover:opacity-100',
          )}
          aria-hidden
        />
        <span
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#EAF1FE] text-electric-600"
          aria-hidden
        >
          <Icon size={22} strokeWidth={2} />
        </span>
        <h3 className="mt-4 pr-8 text-xl font-semibold leading-snug text-brand-950">
          {card.title}
        </h3>
        <p className="mt-2 flex-1 text-[0.9375rem] leading-relaxed text-ink-muted">
          {card.description}
        </p>
        <ul className="mt-4 flex flex-wrap gap-2" aria-label="Focus areas">
          {card.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full bg-surface-100 px-2.5 py-1 text-xs font-medium text-ink-muted"
            >
              {tag}
            </li>
          ))}
        </ul>
      </Link>
  )
}

export function WhatWeDoSection() {
  return (
    <section
      id="what-we-do"
      className="scroll-mt-nav overflow-x-hidden bg-surface-50 py-[var(--spacing-section-y)] text-ink"
    >
      <Container>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between sm:gap-6">
          <Reveal className="min-w-0 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-electric-600">
              {homeWhatWeDoCopy.eyebrow}
            </p>
            <h2 className="mt-3 font-heading text-3xl text-brand-950 sm:text-4xl">
              {homeWhatWeDoCopy.heading}
            </h2>
            <p className="mt-4 max-w-[60ch] text-base leading-relaxed text-ink-muted sm:text-lg">
              {homeWhatWeDoCopy.subline}
            </p>
          </Reveal>
          <Reveal delay={0.05} className="shrink-0">
            <Link
              to={homeWhatWeDoCopy.viewAllHref}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-electric-600 transition-colors hover:text-electric-500"
            >
              {homeWhatWeDoCopy.viewAllLabel}
              <span aria-hidden>→</span>
            </Link>
          </Reveal>
        </div>

        <ul className="mt-10 grid grid-cols-1 gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
          {homeWhatWeDoCards.map((card, index) => (
            <li
              key={`${card.serviceSlug}-${card.title}`}
              className="list-none min-w-0"
            >
              <Reveal delay={index * 0.04} className="h-full">
                <WhatWeDoCard card={card} />
              </Reveal>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
