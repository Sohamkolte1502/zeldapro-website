import { company } from '../data'
import { Container, Reveal } from '../components/ui'

export function ApproachTimeline() {
  const { approachSteps } = company

  return (
    <section className="bg-surface-0 py-[var(--spacing-section-y)] text-ink">
      <Container>
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-electric-600">
            How we work
          </p>
          <h2 className="mt-3 max-w-2xl text-3xl text-ink sm:text-4xl">
            From discovery to ongoing evolution.
          </h2>
          <p className="mt-4 max-w-xl text-sm text-ink-muted">
            Structured delivery aligned to the Discover → Design → Engineer →
            Integrate → Evolve lifecycle from our brief.
          </p>
        </Reveal>

        {/* Desktop: horizontal lifecycle */}
        <ol className="relative mt-12 hidden lg:grid lg:grid-cols-5 lg:gap-4">
          <span
            className="pointer-events-none absolute top-6 right-8 left-8 h-px bg-line"
            aria-hidden
          />
          {approachSteps.map((step, index) => (
            <li key={step.slug} className="relative pt-0 text-left">
              <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-line bg-surface-0 text-sm font-semibold text-brand-950 shadow-sm">
                {index + 1}
              </span>
              <h3 className="mt-4 text-lg text-brand-950">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                {step.summary}
              </p>
            </li>
          ))}
        </ol>

        {/* Mobile: vertical steps */}
        <ol className="mt-10 space-y-8 border-l border-line pl-6 lg:hidden">
          {approachSteps.map((step, index) => (
            <li key={step.slug} className="relative">
              <span className="absolute -left-[calc(1.5rem+5px)] top-1 flex h-2.5 w-2.5 rounded-full border-2 border-electric-600 bg-surface-0" />
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-electric-600">
                Step {index + 1}
              </p>
              <h3 className="mt-1 text-xl text-brand-950">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                {step.summary}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  )
}