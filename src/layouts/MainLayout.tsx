import { Outlet } from 'react-router-dom'
import { Footer } from '../components/layout/Footer'
import { Navbar } from '../components/layout/Navbar'
import { PageTransition } from '../components/layout/PageTransition'
import { ScrollToTop } from '../components/layout/ScrollToTop'
import { SkipToContent } from '../components/layout/SkipToContent'

export function MainLayout() {
  return (
    <div className="flex min-h-svh flex-col pt-[var(--nav-h)]">
      <SkipToContent />
      <ScrollToTop />
      <Navbar />
      <main
        id="main-content"
        className="flex-1 overflow-x-clip"
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