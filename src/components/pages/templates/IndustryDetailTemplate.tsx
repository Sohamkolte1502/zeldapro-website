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
import clsx from 'clsx'
import { motion, useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'
import type { Industry } from '../../../data'
import {
  servicesForIndustry,
  solutionsForIndustry,
} from '../../../utils/relatedContent'
import { getDetailHeroCopy } from '../../../data/detailHeroCopy'
import { contactIndustryPath } from '../../../utils/contactPaths'
import { Container, Reveal } from '../../ui'
import { PageCta } from '../PageCta'
import { DetailPageCurtain } from '../detail/DetailPageCurtain'
import { RelatedCarousel } from '../detail/RelatedCarousel'
import { RelevantServicesOfferingsPanel } from '../detail/RelevantServicesOfferingsPanel'
import { SectionNav } from '../detail/SectionNav'

const BG_WHITE = '#ffffff'
const BG_LAVENDER = '#F4F3F9'

type IndustryDetailTemplateProps = {
  industry: Industry
}

const SECTION_NAV = [
  { id: 'industry-overview', label: 'Overview' },
  { id: 'relevant-solutions', label: 'AI solutions' },
  { id: 'how-ai-helps', label: 'How AI helps' },
  { id: 'relevant-services', label: 'Services' },
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

function IndustryBandSection({
  id,
  backgroundColor,
  children,
  className,
}: {
  id: string
  backgroundColor: string
  children: ReactNode
  className?: string
}) {
  return (
    <section
      id={id}
      className={clsx(
        'scroll-mt-nav border-t border-[#E1E8F2] py-14 sm:py-16',
        className,
      )}
      style={{ backgroundColor }}
    >
      {children}
    </section>
  )
}

function IndustryOverview({ industry }: { industry: Industry }) {
  const { headline, paragraphs } = industry.overview

  return (
    <IndustryBandSection id="industry-overview" backgroundColor={BG_WHITE}>
      <Container>
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-electric-600">
            {industry.title}
          </p>
          <h2 className="mt-4 max-w-4xl font-heading text-xl font-medium uppercase leading-snug tracking-wide text-brand-950 sm:text-2xl lg:text-[1.65rem]">
            {headline}
          </h2>
          <div className="mt-8 max-w-3xl space-y-5 text-base leading-relaxed text-ink-muted sm:text-[1.05rem]">
            {paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 48)}>{paragraph}</p>
            ))}
          </div>
        </Reveal>
      </Container>
    </IndustryBandSection>
  )
}

function HowAiHelpsGrid({ items }: { items: string[] }) {
  const reduceMotion = useReducedMotion()

  return (
    <ul className="grid gap-5 sm:grid-cols-2 lg:gap-6">
      {items.map((item, index) => {
        const Icon = HELP_ICONS[index % HELP_ICONS.length] ?? Sparkles
        const card = (
          <div
            className={clsx(
              'group relative h-full overflow-hidden rounded-2xl border border-line bg-white p-6 shadow-sm',
              'transition-[transform,box-shadow,border-color] duration-300',
              'hover:border-electric-500/35 hover:shadow-lg',
            )}
          >
            <div
              className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-electric-500/10 blur-2xl transition-opacity group-hover:opacity-100"
              aria-hidden
            />
            <span
              className="relative inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-electric-600 to-brand-800 text-white shadow-md"
              aria-hidden
            >
              <Icon size={22} strokeWidth={2} />
            </span>
            <p className="relative mt-5 text-sm font-medium tabular-nums text-electric-600">
              {String(index + 1).padStart(2, '0')}
            </p>
            <p className="relative mt-2 text-sm leading-relaxed text-ink sm:text-base">
              {item}
            </p>
          </div>
        )

        return (
          <li key={item} className="list-none">
            <Reveal delay={index * 0.06} className="h-full">
              {reduceMotion ? (
                card
              ) : (
                <motion.div
                  className="h-full"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                >
                  {card}
                </motion.div>
              )}
            </Reveal>
          </li>
        )
      })}
    </ul>
  )
}

export function IndustryDetailTemplate({ industry }: IndustryDetailTemplateProps) {
  const relatedServices = servicesForIndustry(industry)
  const relatedSolutions = solutionsForIndustry(industry)
  const heroCopy = getDetailHeroCopy(industry.slug)

  const sectionNavItems = SECTION_NAV.filter((item) => {
    if (item.id === 'relevant-services') return relatedServices.length > 0
    if (item.id === 'relevant-solutions') return relatedSolutions.length > 0
    return true
  })

  return (
    <DetailPageCurtain
      heroProps={{
        slug: industry.slug,
        headline: heroCopy.headline,
        description: heroCopy.description,
        breadcrumb: {
          parentLabel: 'Industries',
          currentLabel: industry.title,
        },
      }}
    >
      <SectionNav items={[...sectionNavItems]} />

      <IndustryOverview industry={industry} />

      {relatedSolutions.length > 0 ? (
        <RelatedCarousel
          sectionId="relevant-solutions"
          surface="flat"
          heading="Relevant AI solutions"
          description="Solution patterns often shaped for this industry context."
          viewAllHref="/ai-solutions"
          viewAllLabel="View all AI solutions"
          sectionBackground={BG_LAVENDER}
          items={relatedSolutions.map((s) => ({
            slug: s.slug,
            title: s.title,
            description: s.whatItIs,
            href: `/ai-solutions/${s.slug}`,
            badge: 'AI Solution',
          }))}
        />
      ) : null}

      <IndustryBandSection id="how-ai-helps" backgroundColor={BG_WHITE}>
        <Container>
          <Reveal className="max-w-2xl">
            <h2 className="font-heading text-2xl text-brand-950 sm:text-3xl">
              How AI helps
            </h2>
            <p className="mt-3 text-sm text-ink-muted sm:text-base">
              Practical applications we design for {industry.title.toLowerCase()}—with
              governance and human oversight built in.
            </p>
          </Reveal>
          <div className="mt-10">
            <HowAiHelpsGrid items={industry.howAiHelps} />
          </div>
        </Container>
      </IndustryBandSection>

      {relatedServices.length > 0 ? (
        <RelevantServicesOfferingsPanel
          sectionId="relevant-services"
          heading="Relevant Zeldapro services"
          description="Select a service line to review how we deliver—and start a focused conversation about your programme."
          services={relatedServices}
          bandTone="light"
        />
      ) : null}

      <PageCta contactTo={contactIndustryPath()} />
    </DetailPageCurtain>
  )
}