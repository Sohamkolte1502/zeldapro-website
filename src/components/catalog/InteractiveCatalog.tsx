import clsx from 'clsx'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, ChevronDown, type LucideIcon } from 'lucide-react'
import { useId, useState } from 'react'
import { Link } from 'react-router-dom'
import { contactServicesPath } from '../../utils/contactPaths'
import { Container } from '../ui'

export type CatalogItem = {
  id: string
  title: string
  summary: string
  highlights: string[]
  icon: LucideIcon
}

type InteractiveCatalogProps = {
  eyebrow: string
  title: string
  description: string
  items: CatalogItem[]
  basePath: string
}

function CatalogBackground({ id }: { id: string }) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div className="absolute inset-0 bg-gradient-to-b from-brand-950 via-brand-900/95 to-brand-950" />
      <div
        className="absolute -right-32 -top-24 h-[min(28rem,70vw)] w-[min(28rem,70vw)] rounded-full bg-electric-500/20 blur-3xl"
        aria-hidden
      />
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.45]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id={`${id}-grid`}
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke="#38bdf8"
              strokeOpacity="0.22"
              strokeWidth="0.75"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#${id}-grid)`} />
        <path
          d="M-20 220 Q200 80 420 200 T900 120"
          fill="none"
          stroke="#0ea5e9"
          strokeOpacity="0.35"
          strokeWidth="1"
        />
        <path
          d="M0 380 Q340 300 680 360"
          fill="none"
          stroke="#38bdf8"
          strokeOpacity="0.2"
          strokeWidth="0.8"
        />
        <circle cx="12%" cy="18%" r="2.5" fill="#38bdf8" fillOpacity="0.55" />
        <circle cx="78%" cy="32%" r="2" fill="#38bdf8" fillOpacity="0.4" />
      </svg>
    </div>
  )
}

function PreviewPanel({
  item,
  detailHref,
  reduceMotion,
}: {
  item: CatalogItem
  detailHref: string
  reduceMotion: boolean | null
}) {
  const Icon = item.icon
  return (
    <motion.div
      key={item.id}
      initial={reduceMotion ? false : { opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={reduceMotion ? undefined : { opacity: 0, y: -6 }}
      transition={{ duration: reduceMotion ? 0 : 0.28, ease: [0.22, 1, 0.36, 1] }}
      className="flex h-full min-h-[20rem] flex-col rounded-2xl border border-electric-500/25 bg-brand-900/55 p-6 backdrop-blur-md sm:p-8"
    >
      <div className="flex h-20 w-20 items-center justify-center rounded-xl border border-electric-500/30 bg-brand-950/80">
        <Icon className="text-electric-400" size={36} aria-hidden />
      </div>
      <h2 className="mt-6 font-heading text-2xl text-on-dark sm:text-3xl">
        {item.title}
      </h2>
      <p className="mt-4 text-sm leading-relaxed text-on-dark-muted sm:text-base">
        {item.summary}
      </p>
      <ul className="mt-6 flex flex-wrap gap-2">
        {item.highlights.map((chip) => (
          <li
            key={chip}
            className="rounded-full border border-electric-500/30 bg-brand-950/50 px-3 py-1 text-xs text-on-dark-muted"
          >
            {chip}
          </li>
        ))}
      </ul>
      <Link
        to={detailHref}
        className="mt-8 inline-flex items-center justify-center gap-2 rounded-md bg-electric-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-electric-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric-400 sm:mt-auto"
      >
        Explore service
        <ArrowRight size={18} aria-hidden />
      </Link>
    </motion.div>
  )
}

export function InteractiveCatalog({
  eyebrow,
  title,
  description,
  items,
  basePath,
}: InteractiveCatalogProps) {
  const reduceMotion = useReducedMotion()
  const bgId = useId().replace(/:/g, '')
  const [activeId, setActiveId] = useState(() => items[0]?.id ?? '')
  const [openMobile, setOpenMobile] = useState<string | null>(() => items[0]?.id ?? null)

  const active = items.find((i) => i.id === activeId) ?? items[0]

  return (
    <motion.div className="dark-surface relative bg-brand-950 text-on-dark" initial={false}>
      <CatalogBackground id={bgId} />

      <div className="relative pb-6 pt-6 sm:pt-8">
        <Container>
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-electric-400">
            {eyebrow}
          </p>
          <h1 className="mt-3 max-w-3xl text-4xl text-on-dark sm:text-5xl">{title}</h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-on-dark-muted sm:text-lg">
            {description}
          </p>
        </Container>
      </div>

      <Container className="relative pb-16 lg:pb-20">
        {/* Desktop: two columns */}
        <div className="hidden lg:grid lg:grid-cols-[minmax(0,45%)_minmax(0,55%)] lg:gap-10 xl:gap-14">
          <ol className="min-w-0 space-y-1">
            {items.map((item, index) => {
              const Icon = item.icon
              const isActive = item.id === activeId
              return (
                <li key={item.id}>
                  <button
                    type="button"
                    className={clsx(
                      'flex w-full items-center gap-4 rounded-xl px-3 py-4 text-left transition-all duration-300 motion-reduce:transition-none',
                      isActive
                        ? 'translate-x-1 text-electric-400'
                        : 'text-on-dark hover:translate-x-1 hover:text-electric-400',
                      'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric-400',
                    )}
                    onMouseEnter={() => setActiveId(item.id)}
                    onFocus={() => setActiveId(item.id)}
                    onClick={() => setActiveId(item.id)}
                    aria-current={isActive ? 'true' : undefined}
                  >
                    <span className="w-8 shrink-0 font-heading text-sm text-electric-500">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <Icon
                      className={clsx(
                        'shrink-0',
                        isActive ? 'text-electric-400' : 'text-electric-500/80',
                      )}
                      size={22}
                      aria-hidden
                    />
                    <span
                      className={clsx(
                        'min-w-0 flex-1 font-heading text-lg leading-snug',
                        isActive && 'text-electric-400',
                      )}
                    >
                      {item.title}
                    </span>
                    <ArrowRight
                      size={18}
                      className={clsx(
                        'shrink-0 transition-opacity',
                        isActive ? 'opacity-100' : 'opacity-0',
                      )}
                      aria-hidden
                    />
                  </button>
                </li>
              )
            })}
          </ol>

          <div className="sticky top-[calc(var(--nav-h)+1rem)] min-h-[28rem] self-start">
            <AnimatePresence mode="wait">
              {active ? (
                <PreviewPanel
                  item={active}
                  detailHref={`${basePath}/${active.id}`}
                  reduceMotion={reduceMotion}
                />
              ) : null}
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile / tablet accordion */}
        <div className="space-y-2 lg:hidden">
          {items.map((item, index) => {
            const Icon = item.icon
            const expanded = openMobile === item.id
            const panelId = `catalog-panel-${item.id}`
            return (
              <div
                key={item.id}
                className="overflow-hidden rounded-xl border border-white/10 bg-brand-900/40"
              >
                <button
                  type="button"
                  className="flex w-full items-center gap-3 px-4 py-4 text-left"
                  aria-expanded={expanded}
                  aria-controls={panelId}
                  onClick={() =>
                    setOpenMobile((prev) => (prev === item.id ? null : item.id))
                  }
                >
                  <span className="w-7 shrink-0 text-xs text-electric-500">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <Icon className="shrink-0 text-electric-400" size={20} aria-hidden />
                  <span className="min-w-0 flex-1 font-heading text-base text-on-dark">
                    {item.title}
                  </span>
                  <ChevronDown
                    size={18}
                    className={clsx(
                      'shrink-0 text-electric-400 transition-transform',
                      expanded && 'rotate-180',
                    )}
                    aria-hidden
                  />
                </button>
                {expanded ? (
                  <div id={panelId} className="border-t border-white/10 px-4 pb-4 pt-2">
                    <PreviewPanel
                      item={item}
                      detailHref={`${basePath}/${item.id}`}
                      reduceMotion={reduceMotion}
                    />
                  </div>
                ) : null}
              </div>
            )
          })}
        </div>
      </Container>

      <div className="relative border-t border-white/10 bg-brand-950/80">
        <Container className="flex flex-col items-start justify-between gap-4 py-10 sm:flex-row sm:items-center">
          <p className="max-w-md text-sm text-on-dark-muted">
            {description}
          </p>
          <Link
            to={contactServicesPath()}
            className="inline-flex items-center gap-2 rounded-md border border-electric-500/40 px-5 py-2.5 text-sm font-semibold text-electric-400 transition-colors hover:border-electric-400 hover:bg-electric-500/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric-400"
          >
            Talk to our team
            <ArrowRight size={16} aria-hidden />
          </Link>
        </Container>
      </div>
    </motion.div>
  )
}