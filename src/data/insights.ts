export type InsightStatus = 'draft'

export type InsightArticle = {
  slug: string
  title: string
  summary: string
  category: string
  /** Estimated read time for layout preview only */
  readMinutes: number
  status: InsightStatus
  statusLabel: 'DRAFT'
  publishedAt: null
  author: string
}

export const insights: InsightArticle[] = [
  {
    slug: 'draft-governing-generative-ai-in-the-enterprise',
    title: 'Governing generative AI in the enterprise',
    summary:
      'Practical control patterns—data boundaries, human review, and logging—before widening access to language models.',
    category: 'Responsible AI',
    readMinutes: 7,
    status: 'draft',
    statusLabel: 'DRAFT',
    publishedAt: null,
    author: 'Zeldapro editorial (draft)',
  },
  {
    slug: 'draft-from-pilot-to-production-ml',
    title: 'From pilot to production ML',
    summary:
      'Why integration, monitoring, and ownership matter as much as model accuracy when moving past proof of concept.',
    category: 'Engineering',
    readMinutes: 6,
    status: 'draft',
    statusLabel: 'DRAFT',
    publishedAt: null,
    author: 'Zeldapro editorial (draft)',
  },
  {
    slug: 'draft-connecting-ot-data-safely',
    title: 'Connecting OT data safely',
    summary:
      'Segmentation, identity, and incremental telemetry strategies for industrial environments—not big-bang data lakes.',
    category: 'Industrial & IoT',
    readMinutes: 8,
    status: 'draft',
    statusLabel: 'DRAFT',
    publishedAt: null,
    author: 'Zeldapro editorial (draft)',
  },
  {
    slug: 'draft-measuring-ai-programmes-without-vanity-metrics',
    title: 'Measuring AI programmes without vanity metrics',
    summary:
      'Choosing indicators tied to workflow time, quality, and risk reduction—rather than usage counts alone.',
    category: 'Strategy',
    readMinutes: 5,
    status: 'draft',
    statusLabel: 'DRAFT',
    publishedAt: null,
    author: 'Zeldapro editorial (draft)',
  },
  {
    slug: 'draft-rag-patterns-for-regulated-enterprises',
    title: 'RAG patterns for regulated enterprises',
    summary:
      'Grounding, citation, retention, and escalation design when assistants touch policy-heavy content.',
    category: 'Responsible AI',
    readMinutes: 9,
    status: 'draft',
    statusLabel: 'DRAFT',
    publishedAt: null,
    author: 'Zeldapro editorial (draft)',
  },
  {
    slug: 'draft-agentic-workflows-with-approval-gates',
    title: 'Agentic workflows with approval gates',
    summary:
      'Where autonomous steps help—and where explicit human checkpoints must stay non-negotiable.',
    category: 'Engineering',
    readMinutes: 8,
    status: 'draft',
    statusLabel: 'DRAFT',
    publishedAt: null,
    author: 'Zeldapro editorial (draft)',
  },
  {
    slug: 'draft-health-data-platforms-and-consent',
    title: 'Health data platforms and consent by design',
    summary:
      'Lessons from building governed personal health records—with patient control at the centre.',
    category: 'Digital health',
    readMinutes: 7,
    status: 'draft',
    statusLabel: 'DRAFT',
    publishedAt: null,
    author: 'Zeldapro editorial (draft)',
  },
  {
    slug: 'draft-cloud-cost-and-reliability-for-ml',
    title: 'Cloud cost and reliability for ML workloads',
    summary:
      'Right-sizing inference, batch vs. realtime paths, and operability trade-offs finance teams ask about.',
    category: 'Cloud & platform',
    readMinutes: 6,
    status: 'draft',
    statusLabel: 'DRAFT',
    publishedAt: null,
    author: 'Zeldapro editorial (draft)',
  },
]

export const insightBySlug = Object.fromEntries(
  insights.map((article) => [article.slug, article]),
) as Record<InsightArticle['slug'], InsightArticle>