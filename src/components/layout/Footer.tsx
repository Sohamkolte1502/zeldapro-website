import { Link } from 'react-router-dom'
import { company, industries, services, solutions } from '../../data'
import { Container } from '../ui'
import { Logo } from './Logo'

const socialLinks = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/zeldapro-placeholder',
  },
  {
    label: 'X',
    href: 'https://x.com/zeldapro-placeholder',
  },
  {
    label: 'YouTube',
    href: 'https://www.youtube.com/@zeldapro-placeholder',
  },
] as const

const DISPLAY_YEAR = 2026

export function Footer() {

  return (
    <footer className="dark-surface border-t border-line-dark bg-brand-950 text-on-dark-muted">
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
                {industries.slice(0, 4).map((i) => (
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
                <li>{company.contact.email}</li>
                <li>{company.contact.phone}</li>
                <li>{company.contact.website}</li>
              </ul>
              <ul className="mt-4 flex flex-wrap gap-3 text-sm">
                {socialLinks.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent-400 hover:text-on-dark"
                    >
                      {s.label}
                    </a>
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