import { Link } from 'react-router-dom'
import { Seo } from '../components/layout/Seo'
import { PageShell } from './PageShell'

export default function NotFoundPage() {
  return (
    <>
      <Seo title="Page not found" description="The page you requested could not be found." />
      <PageShell title="Page not found" description="The page you requested is not available.">
        <Link
          to="/"
          className="font-medium text-brand-800 hover:text-accent-600"
        >
          Return to home
        </Link>
      </PageShell>
    </>
  )
}