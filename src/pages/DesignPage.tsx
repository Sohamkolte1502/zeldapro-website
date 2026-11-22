import clsx from 'clsx'
import { Helmet } from 'react-helmet-async'
import { Logo } from '../components/layout/Logo'
import {
  Badge,
  Button,
  Card,
  Container,
  Reveal,
  SectionHeading,
} from '../components/ui'

const colorSwatches = [
  { name: 'brand-950', className: 'bg-brand-950 text-on-dark' },
  { name: 'brand-800', className: 'bg-brand-800 text-on-dark' },
  { name: 'brand-700', className: 'bg-brand-700 text-on-dark' },
  { name: 'accent-600', className: 'bg-accent-600 text-on-dark' },
  { name: 'accent-500', className: 'bg-accent-500 text-on-dark' },
  { name: 'surface-50', className: 'bg-surface-50 text-ink border border-line' },
  { name: 'surface-0', className: 'bg-surface-0 text-ink border border-line' },
  { name: 'ink', className: 'bg-ink text-on-dark' },
  { name: 'ink-muted', className: 'bg-ink-muted text-on-dark' },
] as const

const buttonVariants = ['primary', 'secondary', 'ghost'] as const

function TypographySample({ tone }: { tone: 'light' | 'dark' }) {
  const isDark = tone === 'dark'

  return (
    <div className="space-y-6">
      <div>
        <p
          className={
            isDark
              ? 'text-xs uppercase tracking-[0.18em] text-accent-400'
              : 'text-xs uppercase tracking-[0.18em] text-accent-600'
          }
        >
          Heading / Sora
        </p>
        <h1
          className={clsx(
            'mt-2 text-4xl leading-tight sm:text-5xl',
            isDark ? 'text-on-dark' : 'text-ink',
          )}
        >
          Engineering intelligence
        </h1>
        <h2
          className={clsx(
            'mt-4 text-2xl sm:text-3xl',
            isDark ? 'text-on-dark' : 'text-ink',
          )}
        >
          Enterprise AI &amp; technology
        </h2>
      </div>
      <div>
        <p
          className={
            isDark
              ? 'text-xs uppercase tracking-[0.18em] text-on-dark-subtle'
              : 'text-xs uppercase tracking-[0.18em] text-ink-subtle'
          }
        >
          Body / Inter
        </p>
        <p
          className={clsx(
            'mt-2 max-w-xl text-base leading-relaxed',
            isDark ? 'text-on-dark-muted' : 'text-ink-muted',
          )}
        >
          Zeldapro partners with ambitious enterprises to turn AI opportunity
          into practical advantage through strategy, engineering, and intelligent
          products.
        </p>
      </div>
    </div>
  )
}

function DesignSurface({
  tone,
  title,
  children,
}: {
  tone: 'light' | 'dark'
  title: string
  children: React.ReactNode
}) {
  return (
    <section
      className={clsx(
        'py-[var(--spacing-section-y)]',
        tone === 'light' ? 'bg-surface-50' : 'bg-brand-950',
      )}
    >
      <Container>
        <Reveal>
          <p
            className={clsx(
              'text-xs font-medium uppercase tracking-[0.18em]',
              tone === 'dark' ? 'text-accent-400' : 'text-accent-600',
            )}
          >
            {title}
          </p>
        </Reveal>
        <div className="mt-10 space-y-12">{children}</div>
      </Container>
    </section>
  )
}

export default function DesignPage() {
  return (
    <>
      <Helmet>
        <title>Design system | Zeldapro</title>
        <meta
          name="description"
          content="Internal review of Zeldapro UI primitives, color, and typography."
        />
      </Helmet>

      <div className="border-b border-line bg-surface-0 py-4">
        <Container className="flex items-center justify-between gap-4">
          <Logo variant="light" />
          <Badge tone="light">Design review</Badge>
        </Container>
      </div>

      <DesignSurface tone="light" title="Light surface">
        <Reveal>
          <Card tone="light">
            <SectionHeading
              eyebrow="Brand & assets"
              title="Official logo lock-up"
              description="Full wordmark from src/assets/logo. No reversed/white asset on file—variant dark adds a light backing on dark backgrounds."
              tone="light"
            />
            <div className="mt-8 flex flex-col gap-8 sm:flex-row sm:flex-wrap sm:items-end">
              <div className="space-y-2">
                <p className="text-xs text-ink-subtle">variant=&quot;light&quot;</p>
                <Logo variant="light" />
              </div>
              <div className="space-y-2 rounded-lg bg-brand-950 p-5">
                <p className="text-xs text-on-dark-subtle">variant=&quot;dark&quot;</p>
                <Logo variant="dark" />
              </div>
            </div>
          </Card>
        </Reveal>

        <Reveal>
          <TypographySample tone="light" />
        </Reveal>

        <Reveal delay={0.05}>
          <SectionHeading
            eyebrow="AI Solutions"
            title="Intelligence built around the way your business works"
            description="Adaptable capabilities shaped to your data, workflows, and operating environment."
            tone="light"
          />
        </Reveal>

        <Reveal delay={0.08}>
          <div className="flex flex-wrap gap-3">
            {buttonVariants.map((variant) => (
              <Button key={variant} variant={variant} tone="light">
                {variant.charAt(0).toUpperCase() + variant.slice(1)}
              </Button>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {colorSwatches.map((swatch) => (
              <div
                key={swatch.name}
                className={clsx(
                  'rounded-md px-4 py-3 text-sm font-medium',
                  swatch.className,
                )}
              >
                {swatch.name}
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="grid gap-4 md:grid-cols-2">
            <Card tone="light">
              <Badge tone="light" className="mb-3">
                Enterprise Generative AI
              </Badge>
              <h3 className="font-heading text-xl text-ink">
                Grounded knowledge experiences
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                Assistants, document intelligence, and enterprise search with
                appropriate controls.
              </p>
              <Button variant="secondary" tone="light" className="mt-5">
                View capability
              </Button>
            </Card>
            <Card tone="light">
              <Badge tone="light" className="mb-3">
                Agentic workflows
              </Badge>
              <h3 className="font-heading text-xl text-ink">
                Coordinated task systems
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                Multi-step orchestration with approved tools and human
                oversight.
              </p>
              <Button variant="ghost" tone="light" className="mt-5">
                Learn more
              </Button>
            </Card>
          </div>
        </Reveal>
      </DesignSurface>

      <DesignSurface tone="dark" title="Dark surface">
        <Reveal>
          <div className="flex flex-wrap items-center justify-between gap-4">
            <Logo variant="dark" />
            <Badge tone="dark">Official logo</Badge>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <TypographySample tone="dark" />
        </Reveal>

        <Reveal delay={0.08}>
          <SectionHeading
            eyebrow="Brand & assets"
            title="Technology with purpose. Intelligence with impact."
            description="Minimal enterprise aesthetic — structured layouts, restrained accent, no decorative effects."
            tone="dark"
            align="left"
          />
        </Reveal>

        <Reveal delay={0.1}>
          <div className="flex flex-wrap gap-3">
            {buttonVariants.map((variant) => (
              <Button key={variant} variant={variant} tone="dark">
                {variant.charAt(0).toUpperCase() + variant.slice(1)}
              </Button>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="grid gap-4 md:grid-cols-2">
            <Card tone="dark">
              <Badge tone="dark" className="mb-3">
                AI domains
              </Badge>
              <h3 className="font-heading text-xl text-on-dark">
                Purpose-built applications
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-on-dark-muted">
                Generative AI, agentic systems, machine learning, and connected
                operations — chosen to fit the problem.
              </p>
            </Card>
            <Card tone="dark">
              <Badge tone="dark" className="mb-3">
                Industries
              </Badge>
              <h3 className="font-heading text-xl text-on-dark">
                Domain-aware engineering
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-on-dark-muted">
                Healthcare, finance, manufacturing, and public sector contexts
                with sector-specific constraints.
              </p>
            </Card>
          </div>
        </Reveal>
      </DesignSurface>
    </>
  )
}