import { ExternalLink } from 'lucide-react'
import { CAREVIE_URL, carevie } from '../data/carevie'
import { Badge, Container, Reveal } from '../components/ui'
import {
  CAREVIE_SCREEN_TILES,
  getCarevieSpotlightImage,
} from './carevieSpotlightImages'

const SCREEN_WIDTH = 1200
const SCREEN_HEIGHT = 1000

function UiPlaceholder({ label }: { label: string }) {
  return (
    <div
      className="flex aspect-[6/5] h-auto w-full min-w-0 flex-col items-center justify-center rounded-lg border border-dashed border-line bg-surface-100 px-2 text-center"
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

function CarevieScreenTile({
  slug,
  placeholderLabel,
  alt,
}: {
  slug: string
  placeholderLabel: string
  alt: string
}) {
  const src = getCarevieSpotlightImage(slug)
  if (!src) {
    return <UiPlaceholder label={placeholderLabel} />
  }
  return (
    <img
      src={src}
      alt={alt}
      width={SCREEN_WIDTH}
      height={SCREEN_HEIGHT}
      loading="lazy"
      decoding="async"
      className="aspect-[6/5] h-auto w-full min-w-0 rounded-lg border border-[#E1E8F2] object-cover object-top"
    />
  )
}

export function CarevieSpotlight() {
  const spotlight = carevie.features.slice(0, 4)
  const overviewSrc = getCarevieSpotlightImage('overview')
  const screenTiles = CAREVIE_SCREEN_TILES.map((tile) => ({
    ...tile,
    hasImage: Boolean(getCarevieSpotlightImage(tile.slug)),
  }))
  const showPlaceholderCaption = screenTiles.some((tile) => !tile.hasImage)

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
              <a
                href={CAREVIE_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Explore Carevie (opens in a new tab)"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-brand-950 px-5 py-2.5 text-sm font-semibold text-on-dark transition-colors hover:bg-brand-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric-600"
              >
                Explore Carevie
                <ExternalLink size={16} aria-hidden className="opacity-90" />
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.08} className="min-w-0 space-y-4">
            <div className="min-w-0 space-y-4">
              {overviewSrc ? (
                <img
                  src={overviewSrc}
                  alt="Carevie product overview"
                  width={1200}
                  height={800}
                  loading="lazy"
                  decoding="async"
                  className="w-full rounded-xl border border-[#E1E8F2] shadow-md"
                />
              ) : null}
              <div className="grid min-w-0 grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-3">
                {screenTiles.map((tile) => (
                  <div key={tile.slug} className="min-w-0">
                    <CarevieScreenTile
                      slug={tile.slug}
                      placeholderLabel={tile.placeholderLabel}
                      alt={tile.alt}
                    />
                  </div>
                ))}
              </div>
              {showPlaceholderCaption ? (
                <p className="text-xs text-ink-subtle">
                  App screens are illustrative placeholders unless otherwise noted
                  on the product page.
                </p>
              ) : null}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}