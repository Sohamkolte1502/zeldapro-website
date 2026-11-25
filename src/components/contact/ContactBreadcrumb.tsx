import clsx from 'clsx'
import { ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { contactHubPath } from '../../utils/contactPaths'

type ContactBreadcrumbProps = {
  /** When false, "Contact Us" is plain text (hub page). */
  linkHub?: boolean
  /** Shown after the hub crumb on topic forms (e.g. Careers). */
  current?: string
  tone?: 'dark' | 'light'
}

export function ContactBreadcrumb({
  linkHub = true,
  current,
  tone = 'dark',
}: ContactBreadcrumbProps) {
  const isLight = tone === 'light'

  return (
    <nav
      aria-label="Breadcrumb"
      className={clsx(
        'text-sm',
        isLight ? 'text-ink-subtle' : 'text-on-dark-muted',
      )}
    >
      {linkHub ? (
        <Link
          to={contactHubPath()}
          className={clsx(
            'transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2',
            isLight
              ? 'text-brand-950 hover:text-electric-600 focus-visible:outline-electric-600'
              : 'text-on-dark hover:text-electric-400 focus-visible:outline-electric-400',
          )}
        >
          Contact Us
        </Link>
      ) : (
        <span className={isLight ? 'text-ink-subtle' : 'text-on-dark-muted'}>
          Contact Us
        </span>
      )}
      {current ? (
        <>
          <ChevronRight
            size={14}
            className={clsx(
              'mx-1.5 inline-block align-middle',
              isLight ? 'text-electric-600/70' : 'text-electric-400/80',
            )}
            aria-hidden
          />
          <span
            className={isLight ? 'text-brand-950' : 'text-on-dark'}
            aria-current="page"
          >
            {current}
          </span>
        </>
      ) : (
        <ChevronRight
          size={14}
          className={clsx(
            'mx-1.5 inline-block align-middle',
            isLight ? 'text-electric-600/70' : 'text-electric-400/80',
          )}
          aria-hidden
        />
      )}
    </nav>
  )
}