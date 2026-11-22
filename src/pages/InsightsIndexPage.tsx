import clsx from 'clsx'
import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { Seo } from '../components/layout/Seo'
import { EnterprisePageHero } from '../components/pages/EnterprisePageHero'
import { insights } from '../data'
import { Badge, Container } from '../components/ui'

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

  return (
    <>
      <Seo
        title="Insights"
        description="Perspectives on enterprise AI and engineering."
      />
      <EnterprisePageHero
        eyebrow="Insights"
        title="Insights"
        description="Articles and perspectives on enterprise AI, data, and engineering."
      />

      <section className="bg-surface-0 py-12 text-ink sm:py-14">
        <Container>
          <p className="text-sm font-medium text-ink-muted">
            All articles are sample content until editorial publishes final versions.
          </p>
          <div
            className="mt-6 flex flex-wrap gap-2"
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

          <ul className="mt-10 divide-y divide-line">
            {filtered.map((article) => (
              <li key={article.slug} className="py-6 first:pt-0">
                <Link
                  to={`/insights/${article.slug}`}
                  className="group block min-w-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-electric-600"
                >
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge tone="light">{article.statusLabel}</Badge>
                    <span className="text-xs text-ink-subtle">
                      {article.category} · {article.readMinutes} min
                    </span>
                  </div>
                  <h2 className="mt-2 font-heading text-xl text-brand-950 transition-colors group-hover:text-electric-600 sm:text-2xl">
                    {article.title}
                  </h2>
                  <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-ink-muted">
                    {article.summary}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </>
  )
}