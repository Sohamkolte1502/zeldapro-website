import {
  ArrowUpRight,
  Building2,
  Factory,
  GraduationCap,
  HeartPulse,
  Landmark,
  RadioTower,
  ShoppingBag,
  Truck,
  type LucideIcon,
} from 'lucide-react'
import clsx from 'clsx'
import { Link } from 'react-router-dom'
import { industries } from '../data'
import { Container, Reveal } from '../components/ui'

const icons: Record<string, LucideIcon> = {
  'healthcare-life-sciences': HeartPulse,
  'banking-financial-services': Landmark,
  'manufacturing-industrial': Factory,
  'logistics-supply-chain': Truck,
  'retail-consumer': ShoppingBag,
  'energy-utilities': RadioTower,
  'technology-telecom': Building2,
  'public-sector-education': GraduationCap,
}

const accent: Record<string, string> = {
  'healthcare-life-sciences': 'from-rose-950/80 via-brand-950 to-brand-900',
  'banking-financial-services': 'from-brand-900 via-brand-950 to-slate-950',
  'manufacturing-industrial': 'from-brand-800 via-brand-950 to-brand-900',
  'logistics-supply-chain': 'from-brand-900 to-brand-950',
  'retail-consumer': 'from-brand-800 via-brand-950 to-brand-900',
  'energy-utilities': 'from-brand-900 via-brand-950 to-brand-800',
  'technology-telecom': 'from-slate-900 via-brand-950 to-brand-900',
  'public-sector-education': 'from-brand-950 via-brand-900 to-brand-800',
}

export function IndustriesGrid() {
  return (
    <section className="bg-surface-0 py-[var(--spacing-section-y)] text-ink">
      <Container>
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-electric-600">
            Industries
          </p>
          <h2 className="mt-3 max-w-2xl text-3xl text-ink sm:text-4xl">
            Domain understanding. Technology that moves business forward.
          </h2>
          <p className="mt-4 max-w-xl text-ink-muted">
            Eight sectors where we apply AI and engineering with respect for
            regulation, legacy systems, and operating reality.
          </p>
        </Reveal>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-12">
          {industries.map((industry, index) => {
            const Icon = icons[industry.slug] ?? Building2
            const featured = index === 0 || index === 4
            return (
              <li
                key={industry.slug}
                className={clsx(
                  featured ? 'sm:col-span-2 lg:col-span-6' : 'lg:col-span-3',
                )}
              >
                <Reveal delay={(index % 4) * 0.05} className="h-full">
                  <Link
                    to={`/industries/${industry.slug}`}
                    className={clsx(
                      'group relative flex h-full min-h-[11rem] flex-col justify-end overflow-hidden rounded-2xl border border-line/0 p-6 text-on-dark transition-all duration-300',
                      'hover:-translate-y-1 hover:border-electric-500/40 hover:shadow-lg motion-reduce:hover:translate-y-0',
                      'bg-gradient-to-br',
                      accent[industry.slug] ?? 'from-brand-900 to-brand-950',
                      featured && 'min-h-[13rem] lg:min-h-[15rem]',
                    )}
                  >
                    <div
                      className="pointer-events-none absolute inset-0 opacity-[0.07]"
                      style={{
                        backgroundImage:
                          'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
                        backgroundSize: '20px 20px',
                      }}
                      aria-hidden
                    />
                    <Icon
                      className="absolute right-5 top-5 text-on-dark/25 transition-colors group-hover:text-electric-400/50"
                      size={featured ? 36 : 28}
                      aria-hidden
                    />
                    <h3
                      className={clsx(
                        'relative font-heading text-on-dark',
                        featured ? 'text-xl sm:text-2xl' : 'text-lg',
                      )}
                    >
                      {industry.title}
                    </h3>
                    <p className="relative mt-2 line-clamp-2 text-sm text-on-dark-muted">
                      {industry.howAiHelps[0]}
                    </p>
                    <span className="relative mt-4 inline-flex items-center gap-1 text-sm font-semibold text-electric-400">
                      Explore industry
                      <ArrowUpRight
                        size={16}
                        className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </span>
                  </Link>
                </Reveal>
              </li>
            )
          })}
        </ul>

        <div className="mt-8 text-center">
          <Link
            to="/industries"
            className="link-underline text-sm font-semibold text-electric-600"
          >
            View all industries
          </Link>
        </div>
      </Container>
    </section>
  )
}