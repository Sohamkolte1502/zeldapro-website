import { Link } from 'react-router-dom'
import { solutions, type Solution } from '../data'
import { Container, Reveal } from '../components/ui'
import clsx from 'clsx'

function SolutionArt({ slug }: { slug: Solution['slug'] }) {
  const stroke = 'currentColor'
  return (
    <svg viewBox="0 0 320 200" className="h-auto w-full text-on-dark" aria-hidden>
      <rect width="320" height="200" rx="12" className="fill-brand-900" />
      {slug === 'enterprise-generative-ai' ? (
        <>
          <rect x="36" y="40" width="110" height="120" rx="6" fill="none" stroke={stroke} strokeWidth="1.5" />
          <path d="M52 68h78M52 88h64M52 108h72" stroke={stroke} strokeWidth="1.5" opacity="0.7" />
          <path d="M168 56h100a8 8 0 0 1 8 8v52a8 8 0 0 1-8 8h-28l-16 16v-16h-56a8 8 0 0 1-8-8V64a8 8 0 0 1 8-8z" fill="none" stroke={stroke} strokeWidth="1.5" className="text-electric-400" />
        </>
      ) : null}
      {slug === 'agentic-workflow-systems' ? (
        <>
          {[0, 1, 2].map((step) => (
            <g key={step}>
              <rect x={40 + step * 90} y="78" width="64" height="44" rx="6" fill="none" stroke={stroke} strokeWidth="1.5" />
              {step < 2 ? (
                <path d={`M${108 + step * 90} 100h18`} stroke={stroke} strokeWidth="1.5" className="text-electric-400" />
              ) : null}
            </g>
          ))}
        </>
      ) : null}
      {slug === 'predictive-decision-intelligence' ? (
        <>
          <path d="M40 150h240" stroke={stroke} strokeWidth="1.5" opacity="0.4" />
          <path d="M48 132 L96 118 L144 124 L192 78 L248 52" fill="none" stroke={stroke} strokeWidth="2" className="text-electric-400" />
          <circle cx="248" cy="52" r="4" fill="currentColor" className="text-electric-400" />
        </>
      ) : null}
      {slug === 'computer-vision' ? (
        <>
          <rect x="70" y="36" width="180" height="128" rx="4" fill="none" stroke={stroke} strokeWidth="1.5" />
          <path d="M70 56h20M230 56h20M70 144h20M230 144h20" stroke={stroke} strokeWidth="2" className="text-electric-400" />
          <circle cx="160" cy="100" r="22" fill="none" stroke={stroke} strokeWidth="1.5" />
        </>
      ) : null}
      {slug === 'industrial-iot-intelligence' ? (
        <>
          <rect x="48" y="70" width="70" height="70" rx="8" fill="none" stroke={stroke} strokeWidth="1.5" />
          <path d="M150 105h40" stroke={stroke} strokeWidth="1.5" />
          <circle cx="214" cy="105" r="6" fill="none" stroke={stroke} strokeWidth="1.5" className="text-electric-400" />
          <circle cx="214" cy="105" r="22" fill="none" stroke={stroke} strokeWidth="1.5" opacity="0.55" />
          <circle cx="214" cy="105" r="38" fill="none" stroke={stroke} strokeWidth="1.5" opacity="0.3" />
        </>
      ) : null}
      {slug === 'ai-enabled-digital-products' ? (
        <>
          <rect x="118" y="28" width="84" height="144" rx="12" fill="none" stroke={stroke} strokeWidth="1.5" />
          <rect x="130" y="48" width="60" height="8" rx="2" className="fill-electric-400" />
          <rect x="130" y="68" width="48" height="8" rx="2" fill="currentColor" opacity="0.45" />
          <rect x="130" y="88" width="54" height="36" rx="4" fill="none" stroke={stroke} strokeWidth="1.5" />
        </>
      ) : null}
    </svg>
  )
}

export function SolutionsRows() {
  return (
    <section className="dark-surface bg-brand-950 py-[var(--spacing-section-y)] text-on-dark">
      <Container>
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-electric-400">
            AI Solutions
          </p>
          <h2 className="mt-3 max-w-2xl text-3xl text-on-dark sm:text-4xl">
            Intelligence built around the way your business works.
          </h2>
        </Reveal>
        <div className="mt-12 space-y-16">
          {solutions.map((solution, index) => (
            <Reveal key={solution.slug}>
              <article
                className={clsx(
                  'grid items-center gap-8 lg:grid-cols-2 lg:gap-16',
                  index % 2 === 1 && 'lg:[&>*:first-child]:order-2',
                )}
              >
                <div>
                  <h3 className="text-2xl text-on-dark">{solution.title}</h3>
                  <p className="mt-4 text-on-dark-muted">{solution.whatItIs}</p>
                  <p className="mt-4 text-sm leading-relaxed text-on-dark">
                    <span className="font-medium text-electric-400">In practice. </span>
                    {solution.useCases[0]}
                  </p>
                  <Link
                    to={`/ai-solutions/${solution.slug}`}
                    className="link-underline mt-6 inline-block text-sm font-semibold text-electric-400"
                  >
                    Learn more
                  </Link>
                </div>
                <SolutionArt slug={solution.slug} />
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
