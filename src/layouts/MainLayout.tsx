import clsx from 'clsx'
import { Outlet, useLocation } from 'react-router-dom'
import { Footer } from '../components/layout/Footer'
import { Navbar } from '../components/layout/Navbar'
import { PageTransition } from '../components/layout/PageTransition'
import { ScrollToTop } from '../components/layout/ScrollToTop'
import { SkipToContent } from '../components/layout/SkipToContent'

const DARK_CATALOG_INDEX = new Set(['/services', '/ai-solutions', '/industries'])

export function MainLayout() {
  const { pathname } = useLocation()
  const isHome = pathname === '/'
  const isContact =
    pathname === '/contact' || pathname.startsWith('/contact/')
  const darkCatalogIndex = DARK_CATALOG_INDEX.has(pathname)
  const industryDetail =
    pathname.startsWith('/industries/') && pathname !== '/industries'
  const serviceDetail =
    pathname.startsWith('/services/') && pathname !== '/services'
  const solutionDetail =
    pathname.startsWith('/ai-solutions/') && pathname !== '/ai-solutions'
  const darkHeroUnderNav =
    isHome ||
    isContact ||
    darkCatalogIndex ||
    industryDetail ||
    serviceDetail ||
    solutionDetail
  const needsNavOffset = !darkHeroUnderNav

  return (
    <div className="flex min-h-svh flex-col overflow-x-hidden">
      <SkipToContent />
      <ScrollToTop />
      <Navbar />
      <main
        id="main-content"
        className={clsx(
          'flex-1',
          needsNavOffset && 'pt-[5.25rem] sm:pt-[6rem]',
        )}
        tabIndex={-1}
      >
        <PageTransition>
          <Outlet />
        </PageTransition>
      </main>
      <Footer />
    </div>
  )
}