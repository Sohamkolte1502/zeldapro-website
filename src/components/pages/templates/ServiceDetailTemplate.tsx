import clsx from 'clsx'
import type { ReactNode } from 'react'
import type { Service } from '../../../data'
import { getDetailHeroCopy } from '../../../data/detailHeroCopy'
import { contactServicesPath } from '../../../utils/contactPaths'
import { solutionsForService } from '../../../utils/relatedContent'
import { Container, Reveal } from '../../ui'
import { PageCta } from '../PageCta'
import { DetailPageCurtain } from '../detail/DetailPageCurtain'
import { RelatedCarousel } from '../detail/RelatedCarousel'
import { DetailSection } from '../detail/DetailSection'
import { IconCardGrid } from '../detail/IconCardGrid'
import { getServiceHeroImage } from '../detail/serviceHeroImages'
import { SectionNav, type SectionNavItem } from '../detail/SectionNav'

const BG_LAVENDER = '#F4F3F9'

type ServiceDetailTemplateProps = {
  service: Service
}

const BASE_SECTIONS: SectionNavItem[] = [
  { id: 'service-overview', label: 'Overview' },
  { id: 'related-ai-solutions', label: 'Related AI solutions' },
  { id: 'key-capabilities', label: 'Key capabilities' },
]

function sectionVisible(
  id: string,
  service: Service,
  relatedSolutionsCount: number,
): boolean {
  switch (id) {
    case 'service-overview':
      return Boolean(service.overview.headline.trim())
    case 'key-capabilities':
      return service.capabilities.length > 0
    case 'related-ai-solutions':
      return relatedSolutionsCount > 0
    default:
      return false
  }
}

function ServiceBandSection({
  id,
  backgroundColor,
  children,
}: {
  id: string
  backgroundColor: string
  children: ReactNode
}) {
  return (
    <section
      id={id}
      className="scroll-mt-nav border-t border-[#E1E8F2] py-14 sm:py-16"
      style={{ backgroundColor }}
    >
      {children}
    </section>
  )
}

function ServiceOverview({ service }: { service: Service }) {
  const { headline, paragraphs } = service.overview

  return (
    <ServiceBandSection id="service-overview" backgroundColor="#ffffff">
      <Container>
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-electric-600">
            {service.title}
          </p>
          <h2
            className={clsx(
              'mt-4 max-w-4xl font-heading text-xl font-medium uppercase',
              'leading-snug tracking-wide text-brand-950 sm:text-2xl lg:text-[1.65rem]',
            )}
          >
            {headline}
          </h2>
          <div className="mt-8 max-w-3xl space-y-5 text-base leading-relaxed text-ink-muted sm:text-[1.05rem]">
            {paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 48)}>{paragraph}</p>
            ))}
          </div>
        </Reveal>
      </Container>
    </ServiceBandSection>
  )
}

export function ServiceDetailTemplate({ service }: ServiceDetailTemplateProps) {
  const relatedSolutions = solutionsForService(service)
  const heroCopy = getDetailHeroCopy(service.slug)

  const sectionNavItems = BASE_SECTIONS.filter((item) =>
    sectionVisible(item.id, service, relatedSolutions.length),
  )

  return (
    <DetailPageCurtain
      heroProps={{
        slug: service.slug,
        headline: heroCopy.headline,
        description: heroCopy.description,
        resolveHeroImage: getServiceHeroImage,
        breadcrumb: {
          parentLabel: 'Services',
          currentLabel: service.title,
        },
      }}
    >
      {sectionNavItems.length > 0 ? (
        <SectionNav items={sectionNavItems} />
      ) : null}

      <ServiceOverview service={service} />

      {relatedSolutions.length > 0 ? (
        <RelatedCarousel
          sectionId="related-ai-solutions"
          surface="flat"
          sectionBackground={BG_LAVENDER}
          heading="Related AI solutions"
          description="Solution patterns often delivered alongside this service."
          viewAllHref="/ai-solutions"
          viewAllLabel="View all AI solutions"
          items={relatedSolutions.map((s) => ({
            slug: s.slug,
            title: s.title,
            description: s.whatItIs,
            href: `/ai-solutions/${s.slug}`,
            badge: 'AI Solution',
          }))}
        />
      ) : null}

      {service.capabilities.length > 0 ? (
        <DetailSection
          id="key-capabilities"
          title="Key capabilities"
          description="What we bring to programmes like this—from discovery through delivery."
          tone="light"
        >
          <IconCardGrid items={service.capabilities} />
        </DetailSection>
      ) : null}

      <PageCta contactTo={contactServicesPath(service.slug)} />
    </DetailPageCurtain>
  )
}