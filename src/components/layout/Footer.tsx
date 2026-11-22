import { Link } from 'react-router-dom'
import {
  company,
  footerIndustrySlugs,
  industries,
  services,
  solutions,
  type ContactHref,
  type SocialContactHref,
} from '../../data'
import { Container } from '../ui'
import { Logo } from './Logo'

const footerIndustries = footerIndustrySlugs
  .map((slug) => industries.find((i) => i.slug === slug))
  .filter((i): i is (typeof industries)[number] => Boolean(i))

const linkClass =
  'text-accent-400 hover:text-on-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-400'

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
        className={linkClass}
        aria-label={item.label}
      >
        {icon}
      </a>
    )
  }

  return (
    <span
      className="inline-flex text-on-dark-muted opacity-70"
      aria-label={`${item.label} — link to be added`}
    >
      {icon}
    </span>
  )
}

function FooterContactItem({ item }: { item: ContactHref }) {
  if (item.href) {
    return (
      <li>
        <a
          href={item.href}
          className={linkClass}
          {...(item.href.startsWith('http')
            ? { target: '_blank', rel: 'noopener noreferrer' }
            : {})}
        >
          {item.label}
        </a>
      </li>
    )
  }
  return <li>{item.label}</li>
}

const DISPLAY_YEAR = 2026

export function Footer() {

  return (
    <footer className="dark-surface border-t border-line-dark bg-brand-950 text-on-dark-muted print:hidden">
      <Container className="py-14 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <Link to="/" className="inline-block">
              <Logo variant="dark" />
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-on-dark-muted">
              {company.positioningLine} {company.tagline}
            </p>
            <p className="mt-4 text-sm text-on-dark-muted">
              {company.contact.enquiriesNote}
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:col-span-8 lg:grid-cols-4">
            <div>
              <h2 className="font-heading text-sm font-medium text-on-dark">
                Explore
              </h2>
              <ul className="mt-4 space-y-2 text-sm">
                {[
                  { to: '/', label: 'Home' },
                  { to: '/about', label: 'About Us' },
                  { to: '/software', label: 'Software' },
                  { to: '/innovation', label: 'Innovation' },
                  { to: '/insights', label: 'Insights' },
                  { to: '/contact', label: 'Contact' },
                ].map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="hover:text-on-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-400"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-heading text-sm font-medium text-on-dark">
                Services
              </h2>
              <ul className="mt-4 space-y-2 text-sm">
                <li>
                  <Link to="/services" className="font-medium text-accent-400 hover:text-on-dark">
                    All services
                  </Link>
                </li>
                {services.slice(0, 5).map((s) => (
                  <li key={s.slug}>
                    <Link
                      to={`/services/${s.slug}`}
                      className="hover:text-on-dark"
                    >
                      {s.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-heading text-sm font-medium text-on-dark">
                AI Solutions
              </h2>
              <ul className="mt-4 space-y-2 text-sm">
                <li>
                  <Link
                    to="/ai-solutions"
                    className="font-medium text-accent-400 hover:text-on-dark"
                  >
                    All solutions
                  </Link>
                </li>
                {solutions.map((s) => (
                  <li key={s.slug}>
                    <Link
                      to={`/ai-solutions/${s.slug}`}
                      className="hover:text-on-dark"
                    >
                      {s.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-heading text-sm font-medium text-on-dark">
                Industries &amp; contact
              </h2>
              <ul className="mt-4 space-y-2 text-sm">
                <li>
                  <Link
                    to="/industries"
                    className="font-medium text-accent-400 hover:text-on-dark"
                  >
                    All industries
                  </Link>
                </li>
                {footerIndustries.map((i) => (
                  <li key={i.slug}>
                    <Link
                      to={`/industries/${i.slug}`}
                      className="hover:text-on-dark"
                    >
                      {i.title}
                    </Link>
                  </li>
                ))}
              </ul>
              <ul className="mt-6 space-y-1 text-sm">
                <FooterContactItem item={company.contact.email} />
                <FooterContactItem item={company.contact.phone} />
                <FooterContactItem item={company.contact.website} />
              </ul>
              <ul className="mt-4 flex flex-wrap items-center gap-4 text-sm">
                {company.contact.social.map((s) => (
                  <li key={s.label}>
                    <FooterSocialItem item={s} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-line-dark pt-8 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {DISPLAY_YEAR} {company.contact.legalName}. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link to="/privacy" className="hover:text-on-dark">
              Privacy
            </Link>
            <Link to="/terms" className="hover:text-on-dark">
              Terms
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  )
}