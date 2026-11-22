import { Link } from 'react-router-dom'
import { CheckCircle2 } from 'lucide-react'
import { Seo } from '../components/layout/Seo'
import { company } from '../data'
import { ContentSection } from '../components/pages/ContentSection'
import { EnterprisePageHero } from '../components/pages/EnterprisePageHero'
import { PageCta } from '../components/pages/PageCta'
import { Container } from '../components/ui'

export default function AboutPage() {
  return (
    <>
      <Seo title="About Us" description={company.mission} />
      <EnterprisePageHero
        eyebrow="About"
        title="About Zeldapro"
        description={company.positioningLine}
      />

      <ContentSection title="Who we are">
        <p className="max-w-3xl text-lg leading-relaxed text-ink">
          {company.tagline}
        </p>
        <p className="mt-4 max-w-3xl leading-relaxed text-ink-muted">
          {company.mission}
        </p>
      </ContentSection>

      <section className="bg-surface-50 text-ink">
        <Container className="grid gap-10 py-12 sm:grid-cols-2 sm:py-14">
          <div>
            <h2 className="font-heading text-2xl text-brand-950">Vision</h2>
            <p className="mt-4 leading-relaxed text-ink-muted">{company.vision}</p>
          </div>
          <div>
            <h2 className="font-heading text-2xl text-brand-950">Mission</h2>
            <p className="mt-4 leading-relaxed text-ink-muted">{company.mission}</p>
          </div>
        </Container>
      </section>

      <ContentSection title="Core values">
        <ul className="space-y-4">
          {company.values.map((value) => (
            <li
              key={value.title}
              className="flex gap-3 rounded-xl border border-line bg-surface-0 p-5"
            >
              <CheckCircle2
                className="mt-0.5 shrink-0 text-electric-600"
                size={20}
                aria-hidden
              />
              <div>
                <h3 className="font-medium text-brand-950">{value.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-ink-muted">
                  {value.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </ContentSection>

      <ContentSection
        title="Our approach to AI and technology"
        description="Discover → Design → Engineer → Integrate → Evolve."
        tone="muted"
      >
        <ol className="space-y-4">
          {company.approachSteps.map((step, index) => (
            <li
              key={step.slug}
              className="flex gap-4 border-b border-line pb-4 last:border-0"
            >
              <span className="font-heading text-sm text-electric-600">
                {String(index + 1).padStart(2, '0')}
              </span>
              <div>
                <h3 className="font-medium text-brand-950">{step.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-ink-muted">
                  {step.summary}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </ContentSection>

      <ContentSection title="Why businesses choose Zeldapro">
        <p className="max-w-3xl leading-relaxed text-ink-muted">
          Successful transformation takes more than a promising model. It takes
          trusted data, thoughtful architecture, responsible implementation, and
          partners who understand operating context—not only models.
        </p>
        <ul className="mt-6 space-y-3">
          {company.values.map((value) => (
            <li key={value.title} className="flex gap-2 text-sm text-ink-muted">
              <span className="font-medium text-brand-950">{value.title}.</span>
              <span>{value.description}</span>
            </li>
          ))}
        </ul>
        <Link
          to="/services"
          className="link-underline mt-8 inline-block text-sm font-semibold text-electric-600"
        >
          Explore services
        </Link>
      </ContentSection>

      <PageCta />
    </>
  )
}