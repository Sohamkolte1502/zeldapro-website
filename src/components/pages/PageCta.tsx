import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { company } from '../../data'
import { Container } from '../ui'

type PageCtaProps = {
  heading?: string
  contactTo?: string
}

export function PageCta({
  heading = 'Have an enterprise challenge in mind?',
  contactTo = '/contact',
}: PageCtaProps) {
  return (
    <section className="dark-surface border-t border-line-dark bg-brand-900 text-on-dark">
      <Container className="flex flex-col items-start justify-between gap-6 py-12 sm:flex-row sm:items-center sm:py-14">
        <div>
          <h2 className="font-heading text-2xl text-on-dark sm:text-3xl">{heading}</h2>
          <p className="mt-2 max-w-lg text-sm text-on-dark-muted sm:text-base">
            {company.contact.enquiriesNote}
          </p>
        </div>
        <Link
          to={contactTo}
          className="inline-flex items-center gap-2 rounded-md bg-electric-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-electric-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric-400"
        >
          Contact us
          <ArrowRight size={18} aria-hidden />
        </Link>
      </Container>
    </section>
  )
}