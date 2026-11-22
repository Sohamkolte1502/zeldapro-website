import type { LucideIcon } from 'lucide-react'
import {
  BarChart3,
  Bot,
  Cpu,
  LineChart,
  ShieldCheck,
  Sparkles,
  Workflow,
} from 'lucide-react'
import type { ReactNode } from 'react'
import type { Industry } from '../../../data'
import {
  servicesForIndustry,
  solutionsForIndustry,
} from '../../../utils/relatedContent'
import { contactIndustryPath } from '../../../utils/contactPaths'
import { Badge } from '../../ui'
import { Container } from '../../ui'
import { PageCta } from '../PageCta'
import { DetailPageCurtain } from '../detail/DetailPageCurtain'
import { DetailLinkTiles } from '../detail/DetailLinkTiles'
import { RelevantServicesOfferingsPanel } from '../detail/RelevantServicesOfferingsPanel'
import { SectionNav } from '../detail/SectionNav'

type IndustryDetailTemplateProps = {
  industry: Industry
}

const SECTION_NAV = [
  { id: 'industry-challenges', label: 'Challenges' },
  { id: 'how-ai-helps', label: 'How AI helps' },
  { id: 'relevant-services', label: 'Services' },
  { id: 'relevant-solutions', label: 'AI solutions' },
  { id: 'example-applications', label: 'Example applications' },
] as const

const HELP_ICONS: LucideIcon[] = [
  Sparkles,
  Workflow,
  LineChart,
  ShieldCheck,
  Bot,
  Cpu,
  BarChart3,
]

function DetailSection({
  id,
  title,
  description,
  tone = 'light',
  children,
}: {
  id: string
  title: string
  description?: string
  tone?: 'light' | 'muted'
  children: ReactNode
}) {
  return (
    <section
      id={id}
      className="scroll-mt-nav border-t border-[#E1E8F2] py-14 sm:py-16"
      style={{
        backgroundColor: tone === 'muted' ? '#E8EEF1' : '#f6f8f9',
      }}
    >
      <Container>
        <h2 className="font-heading text-2xl text-brand-950 sm:text-3xl">{title}</h2>
        {description ? (
          <p className="mt-3 max-w-3xl text-sm text-ink-muted sm:text-base">
            {description}
          </p>
        ) : null}
        <div className="mt-8">{children}</div>
      </Container>
    </section>
  )
}

function ChallengeList({ items }: { items: string[] }) {
  return (
    <ul className="grid gap-5 sm:grid-cols-2 sm:gap-6">
      {items.map((item) => (
        <li
          key={item}
          className="flex gap-3 text-sm leading-relaxed text-ink-muted sm:text-base"
        >
          <span
            className="mt-2 h-2 w-2 shrink-0 rounded-full"
            style={{ backgroundColor: '#2878F0' }}
            aria-hidden
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

function HowAiHelpsCards({ items }: { items: string[] }) {
  return (
    <ul className="grid gap-4 sm:grid-cols-2">
      {items.map((item, index) => {
        const Icon = HELP_ICONS[index % HELP_ICONS.length] ?? Sparkles
        return (
          <li
            key={item}
            className="rounded-xl border border-[#E1E8F2] bg-white p-5 sm:p-6"
          >
            <span
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[#E1E8F2] bg-[#F5F7FA] text-[#2878F0]"
              aria-hidden
            >
              <Icon size={20} />
            </span>
            <p className="mt-4 text-sm leading-relaxed text-ink-muted sm:text-base">
              {item}
            </p>
          </li>
        )
      })}
    </ul>
  )
}

export function IndustryDetailTemplate({ industry }: IndustryDetailTemplateProps) {
  const relatedServices = servicesForIndustry(industry)
  const relatedSolutions = solutionsForIndustry(industry)
  const heroDescription = industry.howAiHelps[0]

  const sectionNavItems = SECTION_NAV.filter((item) => {
    if (item.id === 'relevant-services') return relatedServices.length > 0
    if (item.id === 'relevant-solutions') return relatedSolutions.length > 0
    return true
  })

  return (
    <DetailPageCurtain
      heroProps={{
        slug: industry.slug,
        eyebrow: 'Industry',
        title: industry.title,
        description: heroDescription,
        breadcrumb: {
          parentLabel: 'Industries',
          currentLabel: industry.title,
        },
        contactHref: contactIndustryPath(),
      }}
    >
      <SectionNav items={[...sectionNavItems]} />

      <DetailSection id="industry-challenges" title="Industry challenges">
        <ChallengeList items={industry.challenges} />
      </DetailSection>

      <DetailSection id="how-ai-helps" title="How AI helps" tone="muted">
        <HowAiHelpsCards items={industry.howAiHelps} />
      </DetailSection>

      {relatedServices.length > 0 ? (
        <RelevantServicesOfferingsPanel
          sectionId="relevant-services"
          heading="Relevant Zeldapro services"
          description="Select a service line to review how we deliver—and start a focused conversation about your programme."
          services={relatedServices}
          bandTone="light"
        />
      ) : null}

      {relatedSolutions.length > 0 ? (
        <DetailSection
          id="relevant-solutions"
          title="Relevant AI solutions"
          tone="muted"
        >
          <DetailLinkTiles
            items={relatedSolutions.map((s) => ({
              title: s.title,
              href: `/ai-solutions/${s.slug}`,
              summary: s.whatItIs,
            }))}
          />
        </DetailSection>
      ) : null}

      <DetailSection
        id="example-applications"
        title="Example applications"
        description="Illustrative scenarios for discussion—not delivered client work."
        tone={
          relatedServices.length > 0 && relatedSolutions.length > 0
            ? 'light'
            : relatedServices.length > 0
              ? 'muted'
              : 'light'
        }
      >
        <p className="mb-6 text-xs font-semibold uppercase tracking-[0.14em] text-ink-muted">
          Illustrative scenarios
        </p>
        <ul className="space-y-4">
          {industry.exampleScenarios.map((scenario) => (
            <li
              key={scenario.title}
              className="rounded-xl border border-[#E1E8F2] bg-white p-5 sm:p-6"
            >
              <div className="flex flex-wrap items-center gap-2">
                <Badge tone="light">Illustrative</Badge>
              </div>
              <h3 className="mt-2 font-medium text-brand-950">{scenario.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                {scenario.description}
              </p>
            </li>
          ))}
        </ul>
      </DetailSection>

      <PageCta contactTo={contactIndustryPath()} />
    </DetailPageCurtain>
  )
}