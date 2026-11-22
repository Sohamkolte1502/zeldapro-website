import { Link } from 'react-router-dom'
import { company } from '../data'
import { Container, Reveal } from '../components/ui'

const highlights = [
  {
    title: 'Strategy before software',
    text: 'We clarify the business problem, constraints, and success measures before choosing models or platforms.',
  },
  {
    title: 'Engineering that integrates',
    text: 'Solutions are designed to fit identity, data, and the systems your teams already run.',
  },
  {
    title: 'Adoption built in',
    text: 'Governance, handover, and human oversight are part of delivery—not a later phase.',
  },
]

export function IntroSection() {
  return (
    <section className="bg-surface-0 py-[var(--spacing-section-y)] text-ink">
      <Container className="grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-electric-600">
            {company.tagline}
          </p>
          <h2 className="mt-3 text-3xl text-ink sm:text-4xl">
            Technology with purpose. Intelligence with impact.
          </h2>
          <p className="mt-5 text-ink-muted">{company.vision}</p>
          <Link
            to="/about"
            className="link-underline mt-6 inline-block text-sm font-semibold text-brand-950"
          >
            
          </Link>
        </Reveal>
        <ul className="space-y-6">
          {highlights.map((item, index) => (
            <li key={item.title} className="border-l-2 border-electric-600 pl-5">
              <Reveal delay={index * 0.08}>
                <h3 className="text-lg text-brand-950">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                  {item.text}
                </p>
              </Reveal>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
