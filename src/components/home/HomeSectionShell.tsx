import clsx from 'clsx'
import type { ReactNode } from 'react'
import { Container, Reveal } from '../ui'

type HomeSectionTone = 'default' | 'services' | 'solutions' | 'industries' | 'carevie'

type HomeSectionShellProps = {
  id?: string
  eyebrow: string
  title: string
  description?: string
  action?: ReactNode
  children: ReactNode
  className?: string
  variant?: 'default' | 'muted'
  texture?: boolean
  density?: 'default' | 'compact'
  tone?: HomeSectionTone
}

const toneAccent: Record<HomeSectionTone, string> = {
  default: 'from-electric-500/0 via-electric-500/0',
  services: 'from-electric-600/12 via-transparent',
  solutions: 'from-[#7c9cff]/18 via-transparent',
  industries: 'from-accent-500/12 via-transparent',
  carevie: 'from-accent-400/14 via-transparent',
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
  texture = false,
  density = 'default',
  tone = 'default',
}: HomeSectionShellProps) {
  return (
    <section
      id={id}
      className={clsx(
        'relative scroll-mt-nav overflow-x-hidden text-ink',
        density === 'compact' ? 'home-density py-[var(--spacing-section-y)]' : 'py-[var(--spacing-section-y)]',
        variant === 'muted'
          ? 'bg-[linear-gradient(180deg,#eef2f6_0%,#f8fafb_50%,#ffffff_100%)]'
          : 'bg-white',
        className,
      )}
    >
      <div
        className={clsx(
          'pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b to-transparent',
          toneAccent[tone],
        )}
        aria-hidden
      />
      {texture ? (
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.22]"
          style={{
            backgroundImage:
              'linear-gradient(rgb(8 29 41 / 0.05) 1px, transparent 1px), linear-gradient(90deg, rgb(8 29 41 / 0.05) 1px, transparent 1px)',
            backgroundSize: '56px 56px',
          }}
          aria-hidden
        />
      ) : null}
      <Container className="relative">
        <SectionHeader eyebrow={eyebrow} title={title} description={description} action={action} />
        <div className="home-section-divider mb-8 mt-2 sm:mb-10" aria-hidden />
        <div>{children}</div>
      </Container>
    </section>
  )
}

function SectionHeader({
  eyebrow,
  title,
  description,
  action,
}: {
  eyebrow: string
  title: string
  description?: string
  action?: ReactNode
}) {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between sm:gap-6">
      <Reveal className="min-w-0 max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-electric-600">
          {eyebrow}
        </p>
        <h2 className="mt-3 font-heading text-[clamp(1.85rem,3.6vw,2.75rem)] leading-tight tracking-[-0.02em] text-brand-950">
          {title}
        </h2>
        {description ? (
          <p className="mt-3 max-w-[58ch] text-base leading-relaxed text-ink-muted sm:text-lg">
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
  )
}