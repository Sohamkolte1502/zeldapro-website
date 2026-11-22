import { aiDomains } from '../data'
import { Container, Reveal } from '../components/ui'

export function TechMatrix() {
  return (
    <section className="border-y border-line bg-surface-50 py-[var(--spacing-section-y)] text-ink">
      <Container>
        <Reveal className="max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-electric-600">
            Technology capabilities
          </p>
          <h2 className="mt-3 text-3xl text-ink sm:text-4xl">
            Broad capabilities. Purpose-built applications.
          </h2>
          <p className="mt-4 text-sm text-ink-muted">
            Eight AI and engineering domains we draw on when shaping enterprise
            programmes—not a catalog of disconnected tools.
          </p>
        </Reveal>
        <ul className="mt-8 flex flex-wrap gap-2 sm:mt-10">
          {aiDomains.map((domain, index) => (
            <li key={domain.slug} className="list-none">
              <Reveal delay={(index % 4) * 0.04}>
                <span className="inline-flex max-w-full flex-col rounded-lg border border-line bg-surface-0 px-4 py-3 text-left shadow-sm">
                  <span className="break-words text-sm font-semibold text-brand-950">
                    {domain.title}
                  </span>
                  <span className="mt-0.5 text-xs text-ink-muted">
                    {domain.tagline}
                  </span>
                </span>
              </Reveal>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}