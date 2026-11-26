import clsx from 'clsx'
import type { ReactNode } from 'react'
import { Container, Reveal } from '../ui'

type HomeSectionShellProps = {
  id?: string
  eyebrow: string
  title: string
  description?: string
  /** Right-aligned text link (e.g. view all). */
  action?: ReactNode
  children: ReactNode
  className?: string
  /** Alternate band for rhythm (lavender-tinted). */
  variant?: 'default' | 'muted'
}

export function HomeSectionShell({
  id,
  eyebrow,
  title,
  description,
  action,
  children,
  className,
  variant = 'default',
}: HomeSectionShellProps) {
  return (
    <section
      id={id}
      className={clsx(
        'scroll-mt-nav overflow-x-hidden py-[var(--spacing-section-y)] text-ink',
        variant === 'muted'
          ? 'bg-[linear-gradient(180deg,#f3f5f8_0%,#f6f8f9_55%,#ffffff_100%)]'
          : 'bg-white',
        className,
      )}
    >
      <Container>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between sm:gap-6">
          <Reveal className="min-w-0 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-electric-600">
              {eyebrow}
            </p>
            <h2 className="mt-3 font-heading text-3xl text-brand-950 sm:text-4xl lg:text-[2.65rem] lg:leading-tight">
              {title}
            </h2>
            {description ? (
              <p className="mt-4 max-w-[62ch] text-base leading-relaxed text-ink-muted sm:text-lg">
                {description}
              </p>
            ) : null}
          </Reveal>
          {action ? (
            <Reveal delay={0.05} className="shrink-0">
              {action}
            </Reveal>
          ) : null}
        </div>
        <div className="mt-10 sm:mt-12">{children}</div>
      </Container>
    </section>
  )
}