import type { Service } from '../../../data'
import { contactServicesPath } from '../../../utils/contactPaths'
import { solutionsForService } from '../../../utils/relatedContent'
import { PageCta } from '../PageCta'
import { ChallengeList } from '../detail/ChallengeList'
import { ChipList } from '../detail/ChipList'
import { DetailPageCurtain } from '../detail/DetailPageCurtain'
import { RelatedCarousel } from '../detail/RelatedCarousel'
import { DetailSection } from '../detail/DetailSection'
import { IconCardGrid } from '../detail/IconCardGrid'
import { getServiceHeroImage } from '../detail/serviceHeroImages'
import { SectionNav, type SectionNavItem } from '../detail/SectionNav'

type ServiceDetailTemplateProps = {
  service: Service
}

const BASE_SECTIONS: SectionNavItem[] = [
  { id: 'business-challenges', label: 'Business challenges' },
  { id: 'key-capabilities', label: 'Key capabilities' },
  { id: 'relevant-technologies', label: 'Relevant technologies' },
  { id: 'practical-applications', label: 'Practical applications' },
  { id: 'related-ai-solutions', label: 'Related AI solutions' },
]

function sectionVisible(
  id: string,
  service: Service,
  relatedSolutionsCount: number,
): boolean {
  switch (id) {
    case 'business-challenges':
      return service.challenges.length > 0
    case 'key-capabilities':
      return service.capabilities.length > 0
    case 'relevant-technologies':
      return service.technologies.length > 0
    case 'practical-applications':
      return service.applications.length > 0
    case 'related-ai-solutions':
      return relatedSolutionsCount > 0
    default:
      return false
  }
}

export function ServiceDetailTemplate({ service }: ServiceDetailTemplateProps) {
  const relatedSolutions = solutionsForService(service)

  const sectionNavItems = BASE_SECTIONS.filter((item) =>
    sectionVisible(item.id, service, relatedSolutions.length),
  )

  const tones: Record<string, 'light' | 'muted'> = {}
  sectionNavItems.forEach((item, index) => {
    tones[item.id] = index % 2 === 0 ? 'light' : 'muted'
  })

  return (
    <DetailPageCurtain
      heroProps={{
        slug: service.slug,
        eyebrow: 'Service',
        title: service.title,
        description: service.summary,
        resolveHeroImage: getServiceHeroImage,
        breadcrumb: {
          parentLabel: 'Services',
          currentLabel: service.title,
        },
        contactHref: contactServicesPath(service.slug),
      }}
    >
      {sectionNavItems.length > 0 ? (
        <SectionNav items={sectionNavItems} />
      ) : null}

      {service.challenges.length > 0 ? (
        <DetailSection
          id="business-challenges"
          title="Business challenges"
          tone={tones['business-challenges']}
        >
          <ChallengeList items={service.challenges} />
        </DetailSection>
      ) : null}

      {service.capabilities.length > 0 ? (
        <DetailSection
          id="key-capabilities"
          title="Key capabilities"
          tone={tones['key-capabilities']}
        >
          <IconCardGrid items={service.capabilities} />
        </DetailSection>
      ) : null}

      {service.technologies.length > 0 ? (
        <DetailSection
          id="relevant-technologies"
          title="Relevant technologies"
          tone={tones['relevant-technologies']}
        >
          <ChipList items={service.technologies} />
        </DetailSection>
      ) : null}

      {service.applications.length > 0 ? (
        <DetailSection
          id="practical-applications"
          title="Practical applications"
          tone={tones['practical-applications']}
        >
          <ChallengeList items={service.applications} />
        </DetailSection>
      ) : null}

      {relatedSolutions.length > 0 ? (
        <RelatedCarousel
          sectionId="related-ai-solutions"
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

      <PageCta contactTo={contactServicesPath(service.slug)} />
    </DetailPageCurtain>
  )
}