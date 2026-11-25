import clsx from 'clsx'
import { ArrowRight, Clock, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import { insights } from '../data'
import { Badge, Container, Reveal } from '../components/ui'

const categoryAccent: Record<string, string> = {
  'Responsible AI': 'from-electric-600/20 to-brand-950',
  Engineering: 'from-accent-500/15 to-brand-950',
  'Industrial & IoT': 'from-brand-700/30 to-brand-950',
  Strategy: 'from-electric-500/15 to-brand-900',
}

function FeatureLeadCard({
  article,
}: {
  article: (typeof insights)[number]
}) {
  const accent = categoryAccent[article.category] ?? 'from-brand-800 to-black'

  return (
    <Link
      to={`/insights/${article.slug}`}
      className="group relative flex h-full min-h-[18rem] flex-col justify-between overflow-hidden rounded-2xl border border-black bg-black p-6 text-on-dark shadow-xl shadow-black/20 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-2xl motion-reduce:hover:translate-y-0 sm:p-8"
    >
      <div
        className={clsx(
          'pointer-events-none absolute inset-0 bg-gradient-to-br opacity-90',
          accent,
        )}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-electric-500/20 blur-3xl"
        aria-hidden
      />
      <div className="relative z-10 min-w-0">
        <div className="flex flex-wrap items-center gap-2">
          <Badge tone="dark">{article.statusLabel}</Badge>
          <span className="inline-flex items-center gap-1.5 text-xs text-on-dark-muted">
            <Sparkles size={12} className="text-electric-400" aria-hidden />
            {article.category}
          </span>
        </div>
        <h3 className="hero-primary-text mt-5 break-words font-heading text-2xl leading-tight sm:text-3xl">
          {article.title}
        </h3>
        <p className="mt-4 text-sm leading-relaxed text-on-dark-muted sm:text-base">
          {article.summary}
        </p>
      </div>
      <span className="relative z-10 mt-8 inline-flex items-center gap-2 text-sm font-semibold text-electric-400 transition-colors group-hover:text-electric-300">
        <Clock size={15} aria-hidden />
        {article.readMinutes} min read
        <ArrowRight
          size={16}
          className="transition-transform group-hover:translate-x-0.5"
          aria-hidden
        />
      </span>
    </Link>
  )
}

function SupportingCard({ article }: { article: (typeof insights)[number] }) {
  return (
    <Link
      to={`/insights/${article.slug}`}
      className="group flex h-full flex-col rounded-2xl border border-line bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-electric-500/35 hover:shadow-lg motion-reduce:hover:translate-y-0 sm:p-6"
    >
      <div className="flex flex-wrap items-center justify-between gap-2">
        <Badge tone="light">{article.statusLabel}</Badge>
        <span className="text-xs font-medium text-ink-subtle">{article.category}</span>
      </div>
      <h3 className="mt-4 break-words font-heading text-lg leading-snug text-brand-950 transition-colors group-hover:text-electric-600">
        {article.title}
      </h3>
      <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-ink-muted">
        {article.summary}
      </p>
      <span className="mt-4 inline-flex items-center gap-1.5 text-xs text-ink-subtle">
        <Clock size={13} aria-hidden />
        {article.readMinutes} min
        <ArrowRight
          size={14}
          className="ml-auto text-electric-600 opacity-0 transition-opacity group-hover:opacity-100"
          aria-hidden
        />
      </span>
    </Link>
  )
}

export function InsightsFeature() {
  const lead = insights[0]
  const supporting = insights.slice(1, 3)

  return (
    <section className="relative overflow-hidden border-y border-line bg-gradient-to-b from-surface-50 via-surface-0 to-surface-50 py-[var(--spacing-section-y)] text-ink">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        aria-hidden
      >
        <div className="absolute left-1/4 top-0 h-64 w-64 rounded-full bg-electric-500/10 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-56 w-56 rounded-full bg-accent-500/10 blur-3xl" />
      </div>
      <Container className="relative">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <div className="min-w-0 max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-electric-600">
              Insights
            </p>
            <h2 className="mt-3 font-heading text-3xl text-brand-950 sm:text-4xl">
              Perspectives on enterprise AI
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-muted sm:text-base">
              Editorial previews on governance, engineering, and adoption—written for
              enterprise leaders planning serious AI programmes.
            </p>
          </div>
          <Link
            to="/insights"
            className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-5 py-2.5 text-sm font-semibold text-brand-950 shadow-sm transition-colors hover:border-electric-500/40 hover:text-electric-600"
          >
            View all insights
            <ArrowRight size={16} aria-hidden />
          </Link>
        </Reveal>

        <div className="mt-10 grid gap-5 lg:grid-cols-12 lg:gap-6">
          {lead ? (
            <Reveal className="lg:col-span-7">
              <FeatureLeadCard article={lead} />
            </Reveal>
          ) : null}

          <div className="grid gap-5 lg:col-span-5">
            {supporting.map((article, index) => (
              <Reveal key={article.slug} delay={index * 0.06}>
                <SupportingCard article={article} />
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}