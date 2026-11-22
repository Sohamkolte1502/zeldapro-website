import { type ReactNode } from 'react'
import { Container } from '../components/ui'

type PageShellProps = {
  title: string
  description?: string
  children?: ReactNode
  /** Dark hero band for home-style pages */
  hero?: boolean
}

export function PageShell({
  title,
  description,
  children,
  hero = false,
}: PageShellProps) {
  if (hero) {
    return (
      <>
        <section className="dark-surface bg-brand-950 pb-16 pt-12 text-on-dark sm:pb-20 sm:pt-16">
          <Container>
            <h1 className="font-heading text-4xl tracking-tight text-on-dark sm:text-5xl">
              {title}
            </h1>
            {description ? (
              <p className="mt-4 max-w-2xl text-lg text-on-dark-muted">
                {description}
              </p>
            ) : null}
            {children}
          </Container>
        </section>
        {!children ? (
          <Container className="py-12">
            <p className="text-ink-muted">Page content coming soon.</p>
          </Container>
        ) : null}
      </>
    )
  }

  return (
    <Container className="py-14 sm:py-16">
      <h1 className="font-heading text-3xl tracking-tight text-ink sm:text-4xl">
        {title}
      </h1>
      {description ? (
        <p className="mt-4 max-w-2xl text-ink-muted">{description}</p>
      ) : null}
      <div className="mt-8 text-ink-muted">
        {children ?? <p>Page content coming soon.</p>}
      </div>
    </Container>
  )
}