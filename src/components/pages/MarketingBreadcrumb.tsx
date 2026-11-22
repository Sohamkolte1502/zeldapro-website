import { ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import clsx from 'clsx'

type MarketingBreadcrumbProps = {
  current: string
  /** When set, replaces default `Home` parent. */
  parent?: { label: string; href: string }
  className?: string
  tone?: 'dark' | 'light'
}

export function MarketingBreadcrumb({
  current,
  parent = { label: 'Home', href: '/' },
  className,
  tone = 'dark',
}: MarketingBreadcrumbProps) {
  const muted = tone === 'dark' ? 'text-on-dark-muted' : 'text-ink-subtle'
  const link =
    tone === 'dark'
      ? 'text-on-dark hover:text-electric-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric-400'
      : 'text-brand-950 hover:text-electric-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric-600'

  return (
    <nav aria-label="Breadcrumb" className={clsx('text-sm', muted, className)}>
      <Link to={parent.href} className={link}>
        {parent.label}
      </Link>
      <ChevronRight
        size={14}
        className="mx-1.5 inline-block align-middle text-electric-400/80"
        aria-hidden
      />
      <span className={tone === 'dark' ? 'text-on-dark' : 'text-ink-muted'}>
        {current}
      </span>
    </nav>
  )
}