import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import {
  company,
  type ContactHref,
  type SocialContactHref,
} from '../../data'
import { Container } from '../ui'
import { Logo } from './Logo'

const footerLink =
  'text-sm text-on-dark-muted transition-colors hover:text-on-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric-400'

const footerHeading =
  'text-xs font-semibold uppercase tracking-[0.16em] text-on-dark-subtle'

function SocialBrandIcon({ network }: { network: SocialContactHref['label'] }) {
  const className = 'h-[18px] w-[18px] fill-current'
  if (network === 'LinkedIn') {
    return (
      <svg className={className} viewBox="0 0 24 24" aria-hidden>
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.062 2.062 0 0 1 2.063-2.064 2.062 2.062 0 0 1 2.063 2.064 2.062 2.062 0 0 1-2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    )
  }
  if (network === 'YouTube') {
    return (
      <svg className={className} viewBox="0 0 24 24" aria-hidden>
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    )
  }
  return <span className="text-sm font-medium">{network}</span>
}

function FooterSocialItem({ item }: { item: SocialContactHref }) {
  const icon = <SocialBrandIcon network={item.label} />

  if (item.href) {
    return (
      <a
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex rounded-md p-1.5 text-on-dark-muted transition-colors hover:bg-white/5 hover:text-on-dark"
        aria-label={item.label}
      >
        {icon}
      </a>
    )
  }

  return (
    <span
      className="inline-flex rounded-md p-1.5 text-on-dark-muted opacity-60"
      aria-label={`${item.label} — link to be added`}
    >
      {icon}
    </span>
  )
}

function ContactLine({ item }: { item: ContactHref }) {
  if (item.href) {
    return (
      <a
        href={item.href}
        className={footerLink}
        {...(item.href.startsWith('http')
          ? { target: '_blank', rel: 'noopener noreferrer' }
          : {})}
      >
        {item.label}
      </a>
    )
  }
  return <span className={footerLink}>{item.label}</span>
}

const DISPLAY_YEAR = 2026

const companyLinks = [
  { to: '/about', label: 'About Us' },
  { to: '/insights', label: 'Insights' },
  { to: '/contact', label: 'Contact' },
] as const

const capabilityLinks = [
  { to: '/services', label: 'Services' },
  { to: '/ai-solutions', label: 'AI Solutions' },
  { to: '/industries', label: 'Industries' },
] as const

export function Footer() {
  return (
    <footer className="dark-surface border-t border-line-dark bg-brand-950 text-on-dark-muted print:hidden">
      <Container className="py-14 lg:py-16">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <Link
              to="/"
              className="inline-block rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric-400"
            >
              <Logo variant="dark" />
            </Link>
            <p className="mt-5 max-w-md font-heading text-lg font-medium leading-snug text-on-dark">
              {company.positioningLine}
            </p>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-on-dark-muted">
              {company.tagline}
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-electric-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-electric-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric-400"
            >
              Talk to our experts
              <ArrowUpRight size={16} aria-hidden />
            </Link>
          </div>

          <div className="grid gap-10 sm:grid-cols-3 lg:col-span-7 lg:gap-8">
            <div>
              <h2 className={footerHeading}>Company</h2>
              <ul className="mt-4 space-y-3">
                {companyLinks.map((link) => (
                  <li key={link.to}>
                    <Link to={link.to} className={footerLink}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className={footerHeading}>Capabilities</h2>
              <ul className="mt-4 space-y-3">
                {capabilityLinks.map((link) => (
                  <li key={link.to}>
                    <Link to={link.to} className={footerLink}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className={footerHeading}>Connect</h2>
              <div className="mt-4 space-y-3">
                <ContactLine item={company.contact.email} />
                <ContactLine item={company.contact.phone} />
                <ContactLine item={company.contact.website} />
              </div>
              <ul className="mt-5 flex flex-wrap items-center gap-1">
                {company.contact.social.map((s) => (
                  <li key={s.label}>
                    <FooterSocialItem item={s} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-line-dark/80 pt-8 text-xs text-on-dark-subtle sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {DISPLAY_YEAR} {company.contact.legalName}. All rights reserved.
          </p>
          <nav aria-label="Legal" className="flex gap-6">
            <Link to="/privacy" className={`${footerLink} text-xs`}>
              Privacy
            </Link>
            <Link to="/terms" className={`${footerLink} text-xs`}>
              Terms
            </Link>
          </nav>
        </div>
      </Container>
    </footer>
  )
}