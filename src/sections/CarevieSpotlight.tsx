import { Link } from 'react-router-dom'
import carevieHero from '../assets/carevie.png'
import { carevie } from '../data/carevie'
import { Badge, Container, Reveal } from '../components/ui'

function UiPlaceholder({ label }: { label: string }) {
  return (
    <div
      className="flex aspect-[9/16] max-h-48 w-full flex-col items-center justify-center rounded-lg border border-dashed border-line bg-surface-100 px-3 text-center"
      role="img"
      aria-label={label}
    >
      <p className="text-[10px] font-semibold uppercase tracking-wider text-ink-subtle">
        UI placeholder
      </p>
      <p className="mt-1 text-xs text-ink-muted">{label}</p>
    </div>
  )
}

export function CarevieSpotlight() {
  const spotlight = carevie.features.slice(0, 4)

  return (
    <section className="border-y border-line bg-gradient-to-b from-surface-0 to-surface-50 py-[var(--spacing-section-y)] text-ink">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-electric-600">
              {carevie.eyebrow}
            </p>
            <h2 className="mt-3 font-heading text-3xl text-brand-950 sm:text-4xl">
              {carevie.name}
            </h2>
            <p className="mt-2 text-sm font-medium text-accent-600">
              {carevie.tagline}
            </p>
            <p className="mt-5 max-w-lg text-ink-muted">{carevie.summary}</p>
            <ul className="mt-8 space-y-4">
              {spotlight.map((feature) => (
                <li
                  key={feature.slug}
                  className="flex flex-wrap items-start gap-2 border-b border-line pb-4 last:border-0"
                >
                  <div className="min-w-0 flex-1">
                    <p className="font-medium text-brand-950">{feature.title}</p>
                    <p className="mt-1 text-sm text-ink-muted">
                      {feature.description}
                    </p>
                  </div>
                  <Badge tone="light">
                    {feature.status === 'coming-soon'
                      ? 'Coming soon'
                      : feature.statusLabel}
                  </Badge>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Link
                to="/carevie"
                className="inline-flex items-center justify-center rounded-md bg-brand-950 px-5 py-2.5 text-sm font-semibold text-on-dark transition-colors hover:bg-brand-900"
              >
                Explore Carevie
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.08} className="space-y-4">
            <div className="space-y-4">
              <img
                src={carevieHero}
                alt="Carevie product marketing preview"
                className="w-full rounded-xl border border-line shadow-md"
                loading="lazy"
                decoding="async"
              />
              <div className="grid grid-cols-3 gap-3">
                <UiPlaceholder label="Medical vault screen" />
                <UiPlaceholder label="Reminders screen" />
                <UiPlaceholder label="Care circle screen" />
              </div>
              <p className="text-xs text-ink-subtle">
                App screens are illustrative placeholders unless otherwise noted on
                the product page.
              </p>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}