import { useId } from 'react'
import { Container } from '../ui'

type EnterprisePageHeroProps = {
  eyebrow?: string
  title: string
  description?: string
  /** Optional full-bleed hero photograph (e.g. privacy policy). */
  backgroundImage?: string
  /** Full viewport height below fixed nav (homepage-style hero). */
  fullViewport?: boolean
  /** CSS object-position for background photograph. */
  imagePosition?: string
}

export function EnterprisePageHero({
  eyebrow,
  title,
  description,
  backgroundImage,
  fullViewport = false,
  imagePosition = '68% center',
}: EnterprisePageHeroProps) {
  const patternId = useId().replace(/:/g, '')

  return (
    <section
      className={
        fullViewport
          ? 'dark-surface relative flex min-h-[calc(100svh-var(--nav-h))] flex-col overflow-hidden bg-brand-950 text-on-dark'
          : 'dark-surface relative min-h-[min(42vh,22rem)] overflow-hidden bg-brand-950 pt-8 text-on-dark sm:min-h-[min(46vh,26rem)] sm:pt-10'
      }
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        {backgroundImage ? (
          <>
            <img
              src={backgroundImage}
              alt=""
              className="absolute inset-0 h-full w-full object-cover"
              style={{ objectPosition: imagePosition }}
              width={1024}
              height={426}
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-brand-950/96 via-brand-950/88 to-brand-950/45" />
            <div
              className={
                fullViewport
                  ? 'absolute inset-0 bg-gradient-to-b from-brand-950/40 via-brand-950/10 to-brand-950/92'
                  : 'absolute inset-0 bg-gradient-to-b from-brand-950/30 via-transparent to-brand-950/85'
              }
            />
          </>
        ) : (
          <div className="opacity-35">
            <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern
                  id={`${patternId}-grid`}
                  width="40"
                  height="40"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M40 0H0V40"
                    fill="none"
                    stroke="#38bdf8"
                    strokeOpacity="0.15"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill={`url(#${patternId}-grid)`} />
            </svg>
          </div>
        )}
      </div>
      <Container
        className={
          fullViewport
            ? 'relative z-10 flex min-h-0 flex-1 flex-col items-start justify-center px-5 py-10 pb-14 sm:py-12'
            : 'relative z-10 pb-12 sm:pb-16'
        }
      >
        {eyebrow ? (
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-electric-400">
            {eyebrow}
          </p>
        ) : null}
        <h1
          className={
            fullViewport
              ? 'mt-3 max-w-3xl font-heading text-4xl text-on-dark sm:text-5xl lg:text-[3.25rem] lg:leading-tight'
              : 'mt-3 max-w-3xl font-heading text-4xl text-on-dark sm:text-5xl'
          }
        >
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