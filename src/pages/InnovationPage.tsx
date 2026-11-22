import clsx from 'clsx'
import { Seo } from '../components/layout/Seo'
import { ContentSection } from '../components/pages/ContentSection'
import { ConversationCta } from '../components/pages/ConversationCta'
import { EnterprisePageHero } from '../components/pages/EnterprisePageHero'
import { MarketingBreadcrumb } from '../components/pages/MarketingBreadcrumb'
import { Container } from '../components/ui'
import {
  innovationFocusAreas,
  innovationPage,
  innovationPathSteps,
} from '../data/innovation'

export default function InnovationPage() {
  return (
    <>
      <Seo title="Innovation & R&D" description={innovationPage.subtext} />
      <div className="dark-surface bg-brand-950">
        <Container className="relative z-10 pt-6 sm:pt-8">
          <MarketingBreadcrumb current={innovationPage.breadcrumb} />
        </Container>
        <EnterprisePageHero
          title={innovationPage.headline}
          description={innovationPage.subtext}
        />
      </div>

      <ContentSection title={innovationPage.sectionTitle}>
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {innovationFocusAreas.map((item) => (
            <li
              key={item.title}
              className="rounded-2xl border border-line bg-surface-0 p-6 shadow-sm"
            >
              <h3 className="font-heading text-lg text-brand-950">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                {item.description}
              </p>
            </li>
          ))}
        </ul>
      </ContentSection>

      <section className="bg-surface-50 text-ink">
        <Container className="py-12 sm:py-14">
          <h2 className="font-heading text-2xl text-brand-950 sm:text-3xl">
            {innovationPage.pathTitle}
          </h2>
          <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {innovationPathSteps.map((step, index) => (
              <li
                key={step.title}
                className={clsx(
                  'flex flex-col rounded-2xl border border-line bg-surface-0 p-6',
                  'lg:border-l-0 lg:first:border-l lg:first:rounded-l-2xl',
                )}
              >
                <span className="text-xs font-semibold uppercase tracking-[0.14em] text-electric-600">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-3 font-heading text-xl text-brand-950">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <ConversationCta
        heading={innovationPage.ctaHeading}
        buttonLabel={innovationPage.ctaButton}
      />
    </>
  )
}