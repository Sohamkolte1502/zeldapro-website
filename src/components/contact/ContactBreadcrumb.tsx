import { ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { contactHubPath } from '../../utils/contactPaths'

type ContactBreadcrumbProps = {
  /** When false, "Contact Us" is plain text (hub page). */
  linkHub?: boolean
}

export function ContactBreadcrumb({ linkHub = true }: ContactBreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm text-on-dark-muted">
      {linkHub ? (
        <Link
          to={contactHubPath()}
          className="text-on-dark transition-colors hover:text-electric-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric-400"
        >
          Contact Us
        </Link>
      ) : (
        <span className="text-on-dark-muted">Contact Us</span>
      )}
      <ChevronRight
        size={14}
        className="mx-1.5 inline-block align-middle text-electric-400/80"
        aria-hidden
      />
    </nav>
  )
}