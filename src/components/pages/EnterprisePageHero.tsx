import { Container } from '../ui'

type EnterprisePageHeroProps = {
  eyebrow?: string
  title: string
  description?: string
}

export function EnterprisePageHero({
  eyebrow,
  title,
  description,
}: EnterprisePageHeroProps) {
  return (
    <section className="dark-surface relative overflow-hidden bg-brand-950 pt-8 text-on-dark sm:pt-10">
      <div className="pointer-events-none absolute inset-0 opacity-35" aria-hidden>
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="page-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path
                d="M40 0H0V40"
                fill="none"
                stroke="#38bdf8"
                strokeOpacity="0.15"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#page-grid)" />
        </svg>
      </div>
      <Container className="relative pb-12 sm:pb-16">
        {eyebrow ? (
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-electric-400">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="mt-3 max-w-3xl font-heading text-4xl text-on-dark sm:text-5xl">
          {title}
        </h1>
        {description ? (
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-on-dark-muted sm:text-lg">
            {description}
          </p>
        ) : null}
      </Container>
    </section>
  )
}