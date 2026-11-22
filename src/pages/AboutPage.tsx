import { ArrowRight, Building2, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'
import aboutCollaboration from '../assets/images/about-collaboration.png'
import aboutHero from '../assets/images/about-hero.jpg'
import { Seo } from '../components/layout/Seo'
import { PageCta } from '../components/pages/PageCta'
import { AboutScaleMarkers } from '../components/pages/about/AboutScaleMarkers'
import { EnterprisePageHero } from '../components/pages/EnterprisePageHero'
import { Container } from '../components/ui'
import { company } from '../data'
import {
  aboutCapabilityPillars,
  aboutHighlights,
  aboutMetaFields,
  aboutPageMeta,
  aboutRegisteredOffice,
  aboutWhoWeAre,
} from '../data/aboutPage'

export default function AboutPage() {
  return (
    <>
      <Seo title="About Us" description={aboutPageMeta.seoDescription} />
      <EnterprisePageHero
        eyebrow={aboutPageMeta.eyebrow}
        title={aboutPageMeta.title}
        description={aboutPageMeta.subtitle}
        backgroundImage={aboutHero}
        fullViewport
        imagePosition="72% center"
      />

      <AboutWhoWeAreSection />

      <section className="border-b border-line bg-surface-0">
        <Container className="py-10 sm:py-12">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {aboutMetaFields.map((field) => (
              <div
                key={field.label}
                className="rounded-xl border border-line bg-surface-50 px-4 py-4 shadow-sm"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-ink-subtle">
                  {field.label}
                </p>
                <p className="mt-2 text-sm font-medium leading-snug text-brand-950">
                  {field.value}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {aboutHighlights.map((card) => (
              <div
                key={card.title}
                className="rounded-xl border border-electric-500/20 bg-gradient-to-br from-electric-500/[0.08] to-surface-0 px-5 py-5"
              >
                <h2 className="font-heading text-base text-brand-950">{card.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{card.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <AboutScaleMarkers />

      <section className="bg-surface-50 py-12 sm:py-16">
        <Container>
          <h2 className="font-heading text-2xl text-brand-950 sm:text-3xl">Core values</h2>
          <p className="mt-2 max-w-2xl text-sm text-ink-muted">
            Principles that shape how we advise, build, and support enterprise programmes.
          </p>
          <ul className="mt-8 grid gap-4 md:grid-cols-3">
            {company.values.map((value) => (
              <li
                key={value.title}
                className="rounded-2xl border border-line bg-surface-0 p-6 shadow-sm"
              >
                <h3 className="font-heading text-lg text-brand-950">{value.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                  {value.description}
                </p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="bg-surface-0 py-12 sm:py-16">
        <Container>
          <div className="max-w-2xl">
            <h2 className="font-heading text-2xl text-brand-950 sm:text-3xl">Our approach</h2>
            <p className="mt-2 text-ink-muted">
              Discover → Design → Engineer → Integrate → Evolve.
            </p>
          </div>
          <ol className="mt-10 grid gap-4 lg:grid-cols-5">
            {company.approachSteps.map((step, index) => (
              <li
                key={step.slug}
                className="relative rounded-2xl border border-line bg-surface-50 p-5"
              >
                <span className="font-heading text-sm font-semibold text-electric-600">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-2 font-heading text-base text-brand-950">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{step.summary}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="bg-surface-50 py-12 sm:py-16">
        <Container>
          <h2 className="font-heading text-2xl text-brand-950 sm:text-3xl">
            What we bring to enterprises
          </h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {aboutCapabilityPillars.map((pillar) => (
              <Link
                key={pillar.href}
                to={pillar.href}
                className="group flex flex-col rounded-2xl border border-line bg-surface-0 p-6 shadow-sm transition-shadow hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric-600"
              >
                <h3 className="font-heading text-lg text-brand-950 group-hover:text-electric-600">
                  {pillar.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-muted">
                  {pillar.description}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-electric-600">
                  Explore
                  <ArrowRight size={16} aria-hidden />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-brand-950 py-12 text-on-dark sm:py-14">
        <Container className="grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <div>
            <h2 className="font-heading text-2xl sm:text-3xl">Vision & mission</h2>
            <p className="mt-4 leading-relaxed text-on-dark-muted">{company.vision}</p>
            <p className="mt-4 leading-relaxed text-on-dark-muted">{company.mission}</p>
          </div>
          <div className="rounded-2xl border border-line-dark bg-brand-900/50 p-6">
            <CorporateIdentityLabel />
            <p className="mt-4 text-sm leading-relaxed text-on-dark-muted">
              <Building2 className="mr-2 inline size-4 text-electric-400" aria-hidden />
              Registered office
            </p>
            <p className="mt-2 text-sm text-on-dark">{aboutRegisteredOffice}</p>
            <a
              href="mailto:support@zeldapro.com"
              className="mt-4 inline-block text-sm font-medium text-electric-400 underline underline-offset-2"
            >
              support@zeldapro.com
            </a>
          </div>
        </Container>
      </section>

      <PageCta />
    </>
  )
}

function AboutWhoWeAreSection() {
  return (
    <section className="border-b border-line bg-surface-0 py-12 sm:py-16">
      <Container>
        <div className="grid gap-8 lg:grid-cols-2 lg:items-stretch lg:gap-12">
          <div className="order-2 lg:order-1">
            <div className="overflow-hidden rounded-2xl border border-line bg-surface-100 shadow-md">
              <img
                src={aboutCollaboration}
                alt=""
                className="aspect-[4/3] w-full object-cover object-[center_38%] sm:aspect-[5/4] lg:h-full lg:min-h-[min(520px,70vh)] lg:max-h-[560px] lg:aspect-auto"
                width={900}
                height={600}
                decoding="async"
              />
            </div>
          </div>
          <div className="order-1 flex flex-col justify-center lg:order-2">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-electric-600">
              {aboutWhoWeAre.eyebrow}
            </p>
            <h2 className="mt-3 font-heading text-3xl text-brand-950 sm:text-4xl">
              {company.tagline}
            </h2>
            <p className="mt-2 text-sm font-medium text-ink-muted">
              Technology with purpose. Intelligence with impact.
            </p>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-muted">
              {aboutWhoWeAre.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

function CorporateIdentityLabel() {
  return (
    <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-electric-400">
      <MapPin size={14} aria-hidden />
      Corporate identity
    </p>
  )
}