import type { Solution } from '../../../data'
import { industryBySlug } from '../../../data'
import { contactSolutionsPath } from '../../../utils/contactPaths'
import { servicesForSolution } from '../../../utils/relatedContent'
import { PageCta } from '../PageCta'
import { DetailPageCurtain } from '../detail/DetailPageCurtain'
import { RelatedCarousel } from '../detail/RelatedCarousel'
import { RelevantServicesOfferingsPanel } from '../detail/RelevantServicesOfferingsPanel'
import { DetailSection } from '../detail/DetailSection'
import { HowItWorksFlow } from '../detail/HowItWorksFlow'
import { getSolutionHeroImage } from '../detail/solutionHeroImages'
import { SectionNav, type SectionNavItem } from '../detail/SectionNav'

type SolutionDetailTemplateProps = {
  solution: Solution
}

const BASE_SECTIONS: SectionNavItem[] = [
  { id: 'what-it-is', label: 'What it is' },
  { id: 'how-it-works', label: 'How it works' },
  { id: 'relevant-industries', label: 'Relevant industries' },
  { id: 'related-services', label: 'Related services' },
]

function sectionVisible(
  id: string,
  solution: Solution,
  relatedIndustriesCount: number,
  relatedServicesCount: number,
): boolean {
  switch (id) {
    case 'what-it-is':
      return Boolean(solution.whatItIs.trim())
    case 'how-it-works':
      return Boolean(solution.howItWorks.trim())
    case 'relevant-industries':
      return relatedIndustriesCount > 0
    case 'related-services':
      return relatedServicesCount > 0
    default:
      return false
  }
}

export function SolutionDetailTemplate({ solution }: SolutionDetailTemplateProps) {
  const relatedServices = servicesForSolution(solution)
  const relatedIndustries = solution.industries
    .map((slug) => industryBySlug[slug as keyof typeof industryBySlug])
    .filter(Boolean)

  const sectionNavItems = BASE_SECTIONS.filter((item) =>
    sectionVisible(
      item.id,
      solution,
      relatedIndustries.length,
      relatedServices.length,
    ),
  )

  const tones: Record<string, 'light' | 'muted'> = {}
  sectionNavItems.forEach((item, index) => {
    tones[item.id] = index % 2 === 0 ? 'light' : 'muted'
  })

  return (
    <DetailPageCurtain
      heroProps={{
        slug: solution.slug,
        eyebrow: 'AI Solution',
        title: solution.title,
        description: solution.whatItIs,
        resolveHeroImage: getSolutionHeroImage,
        breadcrumb: {
          parentLabel: 'AI Solutions',
          currentLabel: solution.title,
        },
        contactHref: contactSolutionsPath(),
      }}
    >
      {sectionNavItems.length > 0 ? (
        <SectionNav items={sectionNavItems} />
      ) : null}

      {solution.whatItIs.trim() ? (
        <DetailSection
          id="what-it-is"
          title="What it is"
          tone={tones['what-it-is']}
        >
          <p className="max-w-3xl text-sm leading-relaxed text-ink-muted sm:text-base">
            {solution.whatItIs}
          </p>
        </DetailSection>
      ) : null}

      {solution.howItWorks.trim() ? (
        <DetailSection
          id="how-it-works"
          title="How it works"
          tone={tones['how-it-works']}
        >
          <HowItWorksFlow text={solution.howItWorks} />
        </DetailSection>
      ) : null}

      {relatedIndustries.length > 0 ? (
        <RelatedCarousel
          variant="peek"
          sectionId="relevant-industries"
          heading="Relevant industries"
          items={relatedIndustries.map((i) => ({
            slug: i.slug,
            title: i.title,
            description: i.howAiHelps[0],
            href: `/industries/${i.slug}`,
            linkLabel: 'Explore industry',
          }))}
        />
      ) : null}

      {relatedServices.length > 0 ? (
        <RelevantServicesOfferingsPanel
          sectionId="related-services"
          heading="Related services"
          description="Explore the delivery services most often paired with this solution—then tell us about your context."
          services={relatedServices}
          bandTone={tones['related-services'] === 'muted' ? 'muted' : 'light'}
        />
      ) : null}

      <PageCta contactTo={contactSolutionsPath()} />
    </DetailPageCurtain>
  )
}