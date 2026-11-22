import { Link } from 'react-router-dom'
import { insights } from '../data'
import { Badge, Container, Reveal } from '../components/ui'
import clsx from 'clsx'

export function InsightsFeature() {
  const lead = insights[0]
  const supporting = insights.slice(1, 3)

  return (
    <section className="bg-surface-0 py-[var(--spacing-section-y)] text-ink">
      <Container>
        <Reveal className="flex flex-wrap items-end justify-between gap-4">
          <div className="min-w-0">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-electric-600">
              Insights
            </p>
            <h2 className="mt-3 text-3xl text-ink sm:text-4xl">
              Perspectives on enterprise AI
            </h2>
          </div>
          <Link
            to="/insights"
            className="link-underline text-sm font-semibold text-electric-600"
          >
            All insights
          </Link>
        </Reveal>

        <div className="mt-10 grid gap-4 lg:grid-cols-12 lg:gap-6">
          {lead ? (
            <Reveal className="lg:col-span-7">
              <Link
                to={`/insights/${lead.slug}`}
                className="flex h-full min-h-[16rem] flex-col justify-between rounded-xl bg-brand-950 p-6 text-on-dark transition-transform duration-200 hover:-translate-y-0.5 motion-reduce:hover:translate-y-0 sm:p-8"
              >
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge tone="dark">{lead.statusLabel}</Badge>
                    <span className="text-xs text-on-dark-muted">
                      {lead.category} · {lead.readMinutes} min read
                    </span>
                  </div>
                  <h3 className="mt-4 break-words text-xl text-on-dark sm:text-2xl">
                    {lead.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-on-dark-muted sm:text-base">
                    {lead.summary}
                  </p>
                </div>
                <span className="mt-8 text-sm font-semibold text-electric-400">
                  Read sample →
                </span>
              </Link>
            </Reveal>
          ) : null}

          <div className="grid gap-4 lg:col-span-5">
            {supporting.map((article) => (
              <Reveal key={article.slug}>
                <Link
                  to={`/insights/${article.slug}`}
                  className={clsx(
                    'block rounded-xl border border-line bg-surface-50 p-5 transition-colors hover:border-electric-600 sm:p-6',
                  )}
                >
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge tone="light">{article.statusLabel}</Badge>
                    <span className="text-xs text-ink-subtle">
                      {article.category} · {article.readMinutes} min
                    </span>
                  </div>
                  <h3 className="mt-3 break-words text-lg text-brand-950">
                    {article.title}
                  </h3>
                  <p className="mt-2 line-clamp-3 text-sm text-ink-muted">
                    {article.summary}
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}