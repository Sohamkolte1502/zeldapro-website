import { ArrowDown } from 'lucide-react'
import { Link } from 'react-router-dom'
import { CareersContactForm } from '../../components/contact/CareersContactForm'
import { CareersApplyVisual } from './CareersApplyVisual'
import { CareersBuildWithUsSection } from './CareersBuildWithUsSection'
import { ContactBreadcrumb } from '../../components/contact/ContactBreadcrumb'
import { Container, Reveal } from '../../components/ui'
import type { ContactTopic } from '../../data/contactTopics'
import { careersPageCopy } from '../../data/careersPage'
import { careersHeroImageSrc } from './careersHeroImage'

type CareersTopicLayoutProps = {
  topic: ContactTopic
}

function scrollToApply() {
  document
    .getElementById(careersPageCopy.applyAnchorId)
    ?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export function CareersTopicLayout({ topic }: CareersTopicLayoutProps) {
  const heroOnPhoto = Boolean(careersHeroImageSrc)

  return (
    <div className="bg-surface-0 text-ink">
      <section
        className={
          heroOnPhoto
            ? 'careers-hero-section--photo hero-section-overlay dark-surface relative overflow-hidden border-b border-line bg-brand-950'
            : 'relative overflow-hidden border-b border-line bg-surface-0'
        }
      >
        {heroOnPhoto ? (
          <div className="careers-hero-media" aria-hidden>
            <img
              src={careersHeroImageSrc!}
              alt=""
              className="careers-hero-media__photo"
              width={1920}
              height={720}
              decoding="async"
              fetchPriority="high"
            />
          </div>
        ) : null}
        <Container className="relative z-10 flex min-h-[inherit] flex-col justify-center py-10 sm:py-14 lg:py-16">
          <ContactBreadcrumb
            linkHub
            current={topic.title}
            tone={heroOnPhoto ? 'dark' : 'light'}
          />
          <div className="mt-10 max-w-3xl lg:mt-12">
            <p
              className={
                heroOnPhoto
                  ? 'text-xs font-semibold uppercase tracking-[0.2em] text-electric-400'
                  : 'text-xs font-semibold uppercase tracking-[0.2em] text-electric-600'
              }
            >
              {careersPageCopy.eyebrow}
            </p>
            <h1
              className={
                heroOnPhoto
                  ? 'hero-primary-text mt-4 font-heading text-3xl leading-[1.12] sm:text-4xl lg:text-5xl lg:leading-[1.08]'
                  : 'mt-4 font-heading text-3xl leading-[1.12] text-brand-950 sm:text-4xl lg:text-5xl lg:leading-[1.08]'
              }
            >
              {careersPageCopy.headline}
            </h1>
            <p
              className={
                heroOnPhoto
                  ? 'hero-primary-text mt-5 max-w-2xl text-base leading-relaxed text-on-dark-muted sm:text-lg'
                  : 'mt-5 max-w-2xl text-base leading-relaxed text-ink-muted sm:text-lg'
              }
            >
              {careersPageCopy.subhead}
            </p>
            <HeroActions onPhoto={heroOnPhoto} />
          </div>
        </Container>
      </section>

      <CareersBuildWithUsSection onGetInTouch={scrollToApply} />

      <section
        id={careersPageCopy.applyAnchorId}
        className="scroll-mt-nav bg-surface-100 py-14 sm:py-20"
      >
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
            <Reveal className="lg:col-span-5">
              <div className="lg:sticky lg:top-[calc(var(--nav-h)+2rem)]">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-electric-600">
                  Apply
                </p>
                <h2 className="mt-3 font-heading text-2xl text-brand-950 sm:text-3xl">
                  What&apos;s your story
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted sm:text-base">
                  {topic.intro}
                </p>
                <CareersApplyVisual />
              </div>
            </Reveal>

            <Reveal delay={0.06} className="lg:col-span-7">
              <CareersContactForm topic={topic} variant="elevated" />
            </Reveal>
          </div>
        </Container>
      </section>
    </div>
  )
}

function HeroActions({ onPhoto }: { onPhoto?: boolean }) {
  return (
    <div className="mt-8 flex flex-wrap items-center gap-4">
      <button
        type="button"
        onClick={scrollToApply}
        className={
          onPhoto
            ? 'inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-950 shadow-md transition-transform hover:-translate-y-0.5 motion-reduce:hover:translate-y-0'
            : 'inline-flex items-center gap-2 rounded-full bg-brand-950 px-6 py-3 text-sm font-semibold text-on-dark shadow-md transition-transform hover:-translate-y-0.5 motion-reduce:hover:translate-y-0'
        }
      >
        Start your application
        <ArrowDown size={18} aria-hidden />
      </button>
      <Link
        to="/about"
        className={
          onPhoto
            ? 'inline-flex items-center gap-2 rounded-full border border-white/35 px-6 py-3 text-sm font-semibold text-on-dark transition-colors hover:border-white/55 hover:bg-white/10'
            : 'inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 text-sm font-semibold text-brand-950 transition-colors hover:border-electric-500/40 hover:text-electric-600'
        }
      >
        Our story
      </Link>
    </div>
  )
}