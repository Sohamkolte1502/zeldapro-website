import { Link } from 'react-router-dom'
import { Seo } from '../components/layout/Seo'
import overviewHero from '../assets/carevie/overview.png'
import { carevie } from '../data/carevie'
import { Badge, Card, Container } from '../components/ui'

function ScreenPlaceholder({ title }: { title: string }) {
  return (
    <div
      className="flex min-h-[200px] flex-col items-center justify-center rounded-lg border border-dashed border-line bg-surface-50 p-6 text-center"
      role="img"
      aria-label={`${title} — UI placeholder`}
    >
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-subtle">
        UI placeholder
      </p>
      <p className="mt-2 text-sm font-medium text-brand-950">{title}</p>
      <p className="mt-2 max-w-xs text-xs text-ink-muted">
        Replace with approved product screenshots when available.
      </p>
    </div>
  )
}

export default function CareviePage() {
  return (
    <>
      <Seo
        title="Carevie"
        description={carevie.summary}
      />
      <section className="dark-surface border-b border-line-dark bg-brand-950 py-14 text-on-dark sm:py-16">
        <Container className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-electric-400">
              {carevie.eyebrow}
            </p>
            <h1 className="mt-3 text-4xl text-on-dark sm:text-5xl">{carevie.name}</h1>
            <p className="mt-2 text-lg text-electric-400">{carevie.tagline}</p>
            <p className="mt-5 text-on-dark-muted">{carevie.headline}</p>
            <p className="mt-4 text-sm text-on-dark-subtle">{carevie.summary}</p>
            <Link
              to="/contact"
              className="mt-8 inline-flex rounded-md bg-on-dark px-5 py-2.5 text-sm font-semibold text-brand-950"
            >
              Discuss Carevie with our team
            </Link>
          </div>
          <img
            src={overviewHero}
            alt="Carevie product marketing preview"
            className="rounded-xl border border-line-dark shadow-lg"
            loading="eager"
          />
        </Container>
      </section>

      <Container className="py-14 sm:py-16">
        <h2 className="text-2xl text-brand-950 sm:text-3xl">Capabilities</h2>
        <p className="mt-3 max-w-2xl text-ink-muted">
          Features marked <strong className="font-medium">Coming soon</strong> are
          not yet available in a public release.
        </p>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2">
          {carevie.features.map((feature) => (
            <li key={feature.slug}>
              <Card className="h-full">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-lg text-brand-950">{feature.title}</h3>
                  <Badge tone="light">
                    {feature.status === 'coming-soon'
                      ? 'Coming soon'
                      : feature.statusLabel}
                  </Badge>
                </div>
                <p className="mt-3 text-sm text-ink-muted">{feature.description}</p>
              </Card>
            </li>
          ))}
        </ul>

        <h2 className="mt-16 text-2xl text-brand-950">Product screens</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <ScreenPlaceholder title="Medical vault" />
          <ScreenPlaceholder title="Medication schedule" />
          <ScreenPlaceholder title="Family dashboard" />
        </div>

        <p className="mt-10 text-sm text-ink-subtle">
          Carevie is a Zeldapro product innovation. Clinical, regulatory, and
          release details must be confirmed before customer-facing claims.
        </p>
      </Container>
    </>
  )
}