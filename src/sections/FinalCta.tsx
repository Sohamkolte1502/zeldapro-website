import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { company } from '../data'
import { Container, Reveal } from '../components/ui'

export function FinalCta() {
  return (
    <section className="dark-surface relative overflow-hidden bg-brand-950 py-[var(--spacing-section-y)] text-on-dark">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
          backgroundSize: '28px 28px',
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -top-24 right-0 h-64 w-64 rounded-full bg-electric-500/20 blur-3xl"
        aria-hidden
      />
      <Container className="relative">
        <div className="rounded-2xl border border-line-dark bg-brand-900/60 p-6 backdrop-blur-sm sm:p-10 lg:flex lg:items-center lg:justify-between lg:gap-10">
          <Reveal className="min-w-0 max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-electric-400">
              Contact
            </p>
            <h2 className="mt-3 break-words text-3xl text-on-dark sm:text-4xl">
              Have an enterprise challenge in mind?
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-on-dark-muted sm:text-base">
              {company.contact.enquiriesNote} Share your context and we will
              respond with a practical next step—not a generic pitch deck.
            </p>
          </Reveal>
          <Reveal delay={0.06} className="mt-8 flex w-full shrink-0 flex-col gap-3 sm:flex-row lg:mt-0 lg:w-auto lg:flex-col xl:flex-row">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-on-dark px-6 py-3 text-sm font-semibold text-brand-950 transition-transform duration-200 hover:-translate-y-0.5 motion-reduce:hover:translate-y-0"
            >
              Talk to our team
              <ArrowRight size={18} aria-hidden />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center justify-center rounded-md border border-line-dark px-6 py-3 text-sm font-semibold text-on-dark transition-colors hover:border-on-dark-muted hover:bg-white/5"
            >
              Explore services
            </Link>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}