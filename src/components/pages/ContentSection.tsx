import clsx from 'clsx'
import { type ReactNode } from 'react'
import { Container } from '../ui'

type ContentSectionProps = {
  title: string
  description?: string
  children: ReactNode
  tone?: 'light' | 'muted'
  className?: string
}

export function ContentSection({
  title,
  description,
  children,
  tone = 'light',
  className,
}: ContentSectionProps) {
  return (
    <section
      className={clsx(
        tone === 'light' ? 'bg-surface-0 text-ink' : 'bg-surface-50 text-ink',
        className,
      )}
    >
      <Container className="py-12 sm:py-14">
        <h2 className="font-heading text-2xl text-brand-950 sm:text-3xl">{title}</h2>
        {description ? (
          <p className="mt-3 max-w-2xl text-ink-muted">{description}</p>
        ) : null}
        <div className="mt-6">{children}</div>
      </Container>
    </section>
  )
}