import type { ReactNode } from 'react'
import { Container } from '../../ui'

type DetailSectionProps = {
  id: string
  title: string
  description?: string
  tone?: 'light' | 'muted'
  children: ReactNode
}

export function DetailSection({
  id,
  title,
  description,
  tone = 'light',
  children,
}: DetailSectionProps) {
  return (
    <section
      id={id}
      className="scroll-mt-nav border-t border-[#E1E8F2] py-14 sm:py-16"
      style={{ backgroundColor: tone === 'muted' ? '#F5F7FA' : '#ffffff' }}
    >
      <Container>
        <h2 className="font-heading text-2xl text-brand-950 sm:text-3xl">{title}</h2>
        {description ? (
          <p className="mt-3 max-w-3xl text-sm text-ink-muted sm:text-base">
            {description}
          </p>
        ) : null}
        <div className="mt-8">{children}</div>
      </Container>
    </section>
  )
}