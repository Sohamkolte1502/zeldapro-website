import { Seo } from '../components/layout/Seo'
import { ContentSection } from '../components/pages/ContentSection'
import { ConversationCta } from '../components/pages/ConversationCta'
import { EnterprisePageHero } from '../components/pages/EnterprisePageHero'
import { MarketingBreadcrumb } from '../components/pages/MarketingBreadcrumb'
import { Container } from '../components/ui'
import { softwareCapabilities, softwarePage } from '../data/software'

export default function SoftwarePage() {
  return (
    <>
      <Seo
        title="Software Engineering"
        description={softwarePage.subtext}
      />
      <div className="dark-surface bg-brand-950">
        <Container className="relative z-10 pt-24 sm:pt-28">
          <MarketingBreadcrumb current={softwarePage.breadcrumb} />
        </Container>
        <EnterprisePageHero
          eyebrow={softwarePage.eyebrow}
          title={softwarePage.headline}
          description={softwarePage.subtext}
        />
      </div>

      <ContentSection title={softwarePage.sectionTitle}>
        <ul className="grid gap-6 sm:grid-cols-2">
          {softwareCapabilities.map((item) => {
            const Icon = item.icon
            return (
              <li
                key={item.id}
                id={item.id}
                className="scroll-mt-28 rounded-2xl border border-line bg-surface-0 p-6 shadow-sm"
              >
                <div className="flex gap-4">
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-electric-500/10 text-electric-600">
                    <Icon size={22} aria-hidden />
                  </span>
                  <div className="min-w-0">
                    <h3 className="font-heading text-lg text-brand-950">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                      {item.description}
                    </p>
                  </div>
                </div>
              </li>
            )
          })}
        </ul>
      </ContentSection>

      <ConversationCta
        heading={softwarePage.ctaHeading}
        buttonLabel={softwarePage.ctaButton}
      />
    </>
  )
}