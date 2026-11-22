import { CheckCircle2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import { company } from '../data'
import { Container, Reveal } from '../components/ui'

const differentiators = [
  {
    title: 'AI-first engineering',
    text: 'Models, data, and software are designed together so intelligence can be operated, not just demonstrated.',
  },
  {
    title: 'Business-focused solutions',
    text: 'Every engagement starts from the decision, workflow, or experience that needs to change.',
  },
  {
    title: 'Security mindset',
    text: 'Access, data handling, and human oversight are specified before systems go live.',
  },
  {
    title: 'Technology capabilities',
    text: 'Strategy, platforms, and product engineering sit in one partnership—so handoffs stay short.',
  },
]

export function WhyZeldapro() {
  return (
    <section className="bg-surface-50 py-[var(--spacing-section-y)] text-ink">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-electric-600">
              Why Zeldapro
            </p>
            <h2 className="mt-3 text-3xl text-ink sm:text-4xl">
              Built for enterprise complexity.
            </h2>
            <p className="mt-5 text-ink-muted">
              Successful transformation takes more than a promising model. It takes
              trusted data, thoughtful architecture, responsible implementation, and
              teams who understand the business context.
            </p>
            <ul className="mt-8 space-y-3">
              {company.values.map((value) => (
                <li
                  key={value.title}
                  className="flex gap-3 text-sm text-ink-muted"
                >
                  <CheckCircle2
                    className="mt-0.5 shrink-0 text-electric-600"
                    size={18}
                    aria-hidden
                  />
                  <span>
                    <span className="font-medium text-brand-950">
                      {value.title}.
                    </span>{' '}
                    {value.description}
                  </span>
                </li>
              ))}
            </ul>
            <Link
              to="/about"
              className="link-underline mt-8 inline-block text-sm font-semibold text-electric-600"
            >
              How we work
            </Link>
          </Reveal>

          <div className="rounded-2xl border border-line bg-surface-0 p-6 shadow-sm sm:p-8">
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-ink-subtle">
              What you can expect
            </p>
            <ol className="mt-6 space-y-8">
              {differentiators.map((point, index) => (
                <li
                  key={point.title}
                  className="flex gap-5 border-b border-line pb-8 last:border-0 last:pb-0"
                >
                  <span className="font-heading text-3xl leading-none text-electric-600">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div className="min-w-0 flex-1">
                    <Reveal delay={index * 0.05}>
                      <h3 className="text-xl text-brand-950">{point.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                        {point.text}
                      </p>
                    </Reveal>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Container>
    </section>
  )
}