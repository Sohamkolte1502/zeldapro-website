import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { Seo } from '../components/layout/Seo'
import { EnterprisePageHero } from '../components/pages/EnterprisePageHero'
import { Badge, Container } from '../components/ui'
import { insightBySlug } from '../data'
import NotFoundPage from './NotFoundPage'

export default function InsightDetailPage() {
  const { slug } = useParams()
  const article = slug ? insightBySlug[slug as keyof typeof insightBySlug] : undefined

  if (!article) return <NotFoundPage />

  return (
    <>
      <Seo title={article.title} description={article.summary} />
      <EnterprisePageHero title={article.title} description={article.summary} />

      <article className="bg-surface-0 py-12 text-ink sm:py-14">
        <Container className="max-w-narrow">
          <div className="flex flex-wrap items-center gap-2">
            <Badge tone="light">{article.statusLabel}</Badge>
            <span className="text-xs text-ink-subtle">
              {article.category} · {article.readMinutes} min read
            </span>
          </div>
          <p className="mt-2 text-sm text-ink-subtle">{article.author}</p>

          <div
            className="mt-8 rounded-xl border border-amber-200/80 bg-amber-50 px-4 py-3 text-sm text-amber-950"
            role="note"
          >
            <strong className="font-semibold">Sample content.</strong> This article
            is a draft placeholder. A full version will be published after editorial
            review.
          </div>

          <p className="mt-8 leading-relaxed text-ink-muted">{article.summary}</p>

          <Link
            to="/insights"
            className="link-underline mt-10 inline-block text-sm font-semibold text-electric-600"
          >
            Back to insights
          </Link>
        </Container>
      </article>
    </>
  )
}