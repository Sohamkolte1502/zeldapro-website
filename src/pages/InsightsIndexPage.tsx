import clsx from 'clsx'
import { ArrowRight, Clock } from 'lucide-react'
import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import insightsHero from '../assets/images/insights-hero.jpg'
import { Seo } from '../components/layout/Seo'
import { EnterprisePageHero } from '../components/pages/EnterprisePageHero'
import { Badge, Container } from '../components/ui'
import { insights } from '../data'
import {
  insightsMetaFields,
  insightsPageMeta,
  insightsTopicHighlights,
} from '../data/insightsPage'

export default function InsightsIndexPage() {
  const categories = useMemo(
    () => ['All', ...Array.from(new Set(insights.map((a) => a.category))).sort()],
    [],
  )
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered =
    activeCategory === 'All'
      ? insights
      : insights.filter((a) => a.category === activeCategory)

  const featured = insights[0]

  return (
    <>
      <Seo title="Insights" description={insightsPageMeta.seoDescription} />
      <EnterprisePageHero
        eyebrow={insightsPageMeta.eyebrow}
        title={insightsPageMeta.title}
        description={insightsPageMeta.subtitle}
        backgroundImage={insightsHero}
        fullViewport
        imagePosition="78% center"
      />

      <section className="border-b border-line bg-surface-0">
        <Container className="py-10 sm:py-12">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {insightsMetaFields.map((field) => (
              <div
                key={field.label}
                className="rounded-xl border border-line bg-surface-50 px-4 py-4 shadow-sm"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-ink-subtle">
                  {field.label}
                </p>
                <p className="mt-2 text-sm font-medium leading-snug text-brand-950">
                  {field.value}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {insightsTopicHighlights.map((card) => (
              <div
                key={card.title}
                className="rounded-xl border border-electric-500/20 bg-gradient-to-br from-electric-500/[0.08] to-surface-0 px-5 py-5"
              >
                <h2 className="font-heading text-base text-brand-950">{card.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{card.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {featured ? (
        <section className="bg-surface-50 py-10 sm:py-12">
          <Container>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-electric-600">
              Featured draft
            </p>
            <Link
              to={`/insights/${featured.slug}`}
              className="group mt-4 block overflow-hidden rounded-2xl border border-line bg-surface-0 shadow-md transition-shadow hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric-600 lg:grid lg:grid-cols-[1.15fr_1fr]"
            >
              <div className="border-b border-line bg-gradient-to-br from-brand-950 via-brand-900 to-electric-600/30 p-8 text-on-dark lg:border-b-0 lg:border-r">
                <Badge tone="dark">{featured.statusLabel}</Badge>
                <h2 className="mt-4 font-heading text-2xl sm:text-3xl group-hover:text-electric-300">
                  {featured.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-on-dark-muted">
                  {featured.summary}
                </p>
              </div>
              <div className="flex flex-col justify-center p-8">
                <p className="text-sm text-ink-muted">{featured.author}</p>
                <p className="mt-2 flex items-center gap-1.5 text-xs text-ink-subtle">
                  <Clock size={14} aria-hidden />
                  {featured.category} · {featured.readMinutes} min read
                </p>
                <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-electric-600">
                  Read preview
                  <ArrowRight size={16} aria-hidden />
                </span>
              </div>
            </Link>
          </Container>
        </section>
      ) : null}

      <section className="bg-surface-0 py-12 sm:py-14">
        <Container>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="font-heading text-2xl text-brand-950 sm:text-3xl">
                Latest perspectives
              </h2>
              <p className="mt-2 text-sm text-ink-muted">
                Draft articles for layout and editorial workflow—final versions pending review.
              </p>
            </div>
          </div>

          <div
            className="mt-8 flex flex-wrap gap-2"
            role="tablist"
            aria-label="Filter by category"
          >
            {categories.map((category) => {
              const selected = category === activeCategory
              return (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  className={clsx(
                    'rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors',
                    selected
                      ? 'border-electric-600 bg-electric-600 text-white'
                      : 'border-line bg-surface-0 text-ink-muted hover:border-electric-600 hover:text-brand-950',
                  )}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              )
            })}
          </div>

          <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((article) => (
              <li key={article.slug}>
                <Link
                  to={`/insights/${article.slug}`}
                  className="group flex h-full flex-col rounded-2xl border border-line bg-surface-50 p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:border-electric-500/30 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric-600"
                >
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge tone="light">{article.statusLabel}</Badge>
                    <span className="text-xs text-ink-subtle">{article.category}</span>
                  </div>
                  <h3 className="mt-3 font-heading text-lg text-brand-950 group-hover:text-electric-600">
                    {article.title}
                  </h3>
                  <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-ink-muted">
                    {article.summary}
                  </p>
                  <p className="mt-4 flex items-center gap-1.5 text-xs text-ink-subtle">
                    <Clock size={14} aria-hidden />
                    {article.readMinutes} min read
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="bg-brand-950 py-12 text-on-dark sm:py-14">
        <Container className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="max-w-xl">
            <h2 className="font-heading text-2xl sm:text-3xl">
              Enterprise challenge in mind?
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-on-dark-muted sm:text-base">
              Talk to our team about AI strategy, engineering, or product programmes—we respond
              through the contact channels on this site.
            </p>
          </div>
          <Link
            to="/contact/general-enquiry"
            className="inline-flex items-center gap-2 rounded-full bg-electric-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-electric-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric-400"
          >
            Start a conversation
            <ArrowRight size={16} aria-hidden />
          </Link>
        </Container>
      </section>
    </>
  )
}