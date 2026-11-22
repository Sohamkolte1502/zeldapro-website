import clsx from 'clsx'
import { Menu, X } from 'lucide-react'
import { useCallback, useEffect, useId, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { industries, services, solutions } from '../../data'
import { NAV_THEME } from '../../data/navTheme'
import { Container } from '../ui'
import { Logo } from './Logo'
import {
  MegaMenuPanel,
  MobileAccordionSection,
  MobileNavDrawer,
  type MegaMenuLink,
} from './MegaMenuPanel'
type MegaMenuKey = 'services' | 'solutions' | 'industries'
type OpenMenuKey = MegaMenuKey

const isLightNav = NAV_THEME === 'light'

const serviceLinks: MegaMenuLink[] = services.map((s) => ({
  title: s.title,
  href: `/services/${s.slug}`,
  summary: s.summary,
}))

const solutionLinks: MegaMenuLink[] = solutions.map((s) => ({
  title: s.title,
  href: `/ai-solutions/${s.slug}`,
  summary: s.whatItIs,
}))

const industryLinks: MegaMenuLink[] = industries.map((i) => ({
  title: i.title,
  href: `/industries/${i.slug}`,
  summary: i.challenges[0],
}))

const megaMenus: Record<
  MegaMenuKey,
  {
    label: string
    title: string
    intro: string
    viewAllHref: string
    items: MegaMenuLink[]
  }
> = {
  services: {
    label: 'Services',
    title: 'AI & Technology Services',
    intro:
      'Advisory, engineering, and transformation services designed around measurable business outcomes.',
    viewAllHref: '/services',
    items: serviceLinks,
  },
  solutions: {
    label: 'AI Solutions',
    title: 'AI Solutions',
    intro:
      'Adaptable intelligence patterns shaped to your data, workflows, and controls.',
    viewAllHref: '/ai-solutions',
    items: solutionLinks,
  },
  industries: {
    label: 'Industries',
    title: 'Industries',
    intro:
      'Domain-aware engineering for complex, data-rich operating environments.',
    viewAllHref: '/industries',
    items: industryLinks,
  },
}

const lightLinkBase =
  'transition-[color,border-color] duration-200 ease-out'

function navLinkClass({ isActive }: { isActive: boolean }) {
  return clsx(
    'inline-flex whitespace-nowrap border-b-2 border-transparent px-2 py-2 text-[15px] font-medium lg:text-base',
    isLightNav
      ? clsx(
          lightLinkBase,
          'text-[#172B3A] hover:border-[#078BCB] hover:text-[#078BCB]',
        )
      : 'text-white transition-colors duration-200 hover:border-[#078BCB] hover:text-white',
    isActive &&
      (isLightNav
        ? 'border-[#078BCB] text-[#078BCB]'
        : 'border-[#078BCB] text-white'),
  )
}

function megaTriggerClass(isOpen: boolean, sectionActive: boolean) {
  return clsx(
    'inline-flex items-center gap-1 whitespace-nowrap border-b-2 border-transparent px-2 py-2 text-[15px] font-medium lg:text-base',
    isLightNav
      ? clsx(
          lightLinkBase,
          'text-[#172B3A] hover:border-[#078BCB] hover:text-[#078BCB]',
        )
      : 'text-white transition-colors duration-200 hover:border-[#078BCB] hover:text-white',
    (isOpen || sectionActive) &&
      (isLightNav
        ? 'border-[#078BCB] text-[#078BCB]'
        : 'border-[#078BCB] text-white'),
  )
}

export function Navbar() {
  const location = useLocation()
  const path = location.pathname
  const servicesActive =
    path === '/services' || path.startsWith('/services/')
  const solutionsActive =
    path === '/ai-solutions' || path.startsWith('/ai-solutions/')
  const industriesActive =
    path === '/industries' || path.startsWith('/industries/')
  const [openMenu, setOpenMenu] = useState<OpenMenuKey | null>(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const servicesMenuId = useId()
  const solutionsMenuId = useId()
  const industriesMenuId = useId()
  useEffect(() => {
    setOpenMenu(null)
    setMobileOpen(false)
  }, [location.pathname])

  const closeMega = useCallback(() => setOpenMenu(null), [])

  const menuIds: Record<MegaMenuKey, string> = {
    services: servicesMenuId,
    solutions: solutionsMenuId,
    industries: industriesMenuId,
  }

  const activeMega = openMenu ? megaMenus[openMenu] : null
  const menuExpanded = openMenu !== null

  return (
    <header
      className={clsx(
        'fixed inset-x-0 top-0 z-50 w-full border-b transition-colors duration-200 print:hidden',
        isLightNav
          ? 'border-[#DCE5EA] bg-[#F0F4F6] shadow-[0_4px_18px_rgba(7,19,31,0.08)]'
          : clsx(
              'border-white/[0.08] text-[#FFFFFF]',
              menuExpanded ? 'bg-[#1E2222]' : 'bg-[#000000]',
            ),
      )}
    >
      <div className="relative" onMouseLeave={closeMega}>
        <Container className="bg-transparent">
          <nav
            aria-label="Primary"
            className="flex h-[var(--nav-h)] w-full items-center justify-between gap-3"
          >
            <Link
              to="/"
              className={clsx(
                'shrink-0 rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2',
                isLightNav
                  ? 'focus-visible:outline-[#078BCB]'
                  : 'focus-visible:outline-electric-400',
              )}
            >
              <Logo />
            </Link>

            <ul className="hidden min-w-0 flex-1 items-center justify-center gap-0 lg:flex">
              <li>
                <NavLink to="/about" className={navLinkClass}>
                  About Us
                </NavLink>
              </li>
              {(Object.keys(megaMenus) as MegaMenuKey[]).map((key) => {
                const menu = megaMenus[key]
                const isOpen = openMenu === key
                const sectionActive =
                  key === 'services'
                    ? servicesActive
                    : key === 'solutions'
                      ? solutionsActive
                      : industriesActive
                return (
                  <li key={key} onMouseEnter={() => setOpenMenu(key)}>
                    <button
                      type="button"
                      className={megaTriggerClass(isOpen, sectionActive)}
                      aria-expanded={isOpen}
                      aria-current={sectionActive ? 'page' : undefined}
                      aria-controls={menuIds[key]}
                      onClick={() => setOpenMenu(key)}
                      onKeyDown={(e) => {
                        if (e.key === 'Escape') closeMega()
                      }}
                    >
                      {menu.label}
                      <span aria-hidden className="text-[10px] opacity-80">
                        ▾
                      </span>
                    </button>
                  </li>
                )
              })}
              <li>
                <NavLink to="/insights" className={navLinkClass}>
                  Insights
                </NavLink>
              </li>
            </ul>

            <div className="flex shrink-0 items-center gap-2">
              <Link
                to="/contact"
                onClick={closeMega}
                className="hidden items-center justify-center rounded-full bg-[#087FC1] px-4 py-2 text-[15px] font-semibold tracking-tight text-white transition-colors duration-200 hover:bg-[#076CAA] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#078BCB] lg:inline-flex lg:text-base"
              >
                Contact Us
              </Link>

              <button
                type="button"
                className={clsx(
                  'inline-flex items-center justify-center rounded-md p-2 lg:hidden',
                  isLightNav
                    ? 'text-[#172B3A] transition-colors duration-200 hover:bg-[#DCE5EA]/60'
                    : 'text-white hover:bg-white/10',
                )}
                aria-expanded={mobileOpen}
                aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
                onClick={() => setMobileOpen((v) => !v)}
              >
                {mobileOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </nav>
        </Container>

        {activeMega && openMenu ? (
          <MegaMenuPanel
            id={menuIds[openMenu]}
            open
            title={activeMega.title}
            intro={activeMega.intro}
            viewAllHref={activeMega.viewAllHref}
            viewAllLabel={`View all ${activeMega.label.toLowerCase()}`}
            items={activeMega.items}
            onClose={closeMega}
          />
        ) : null}
      </div>

      <MobileNavDrawer
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        light={isLightNav}
      >
        <div className="mb-6 flex items-center justify-between">
          <Logo />
          <button
            type="button"
            className={clsx(
              'rounded-md p-2 transition-colors duration-200',
              isLightNav
                ? 'text-[#172B3A] hover:bg-[#DCE5EA]/60'
                : 'text-on-dark hover:bg-white/10',
            )}
            aria-label="Close menu"
            onClick={() => setMobileOpen(false)}
          >
            <X size={24} />
          </button>
        </div>
        <nav aria-label="Mobile primary">
          <ul
            className={clsx(
              'space-y-1 border-b pb-4',
              isLightNav ? 'border-[#DCE5EA]' : 'border-line-dark',
            )}
          >
            {[
              { to: '/about', label: 'About Us' },
              { to: '/insights', label: 'Insights' },
            ].map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    clsx(
                      'block rounded-md border-l-2 py-3 pl-3 text-base font-medium transition-colors duration-200',
                      isLightNav
                        ? isActive
                          ? 'border-[#078BCB] text-[#078BCB]'
                          : 'border-transparent text-[#172B3A] hover:text-[#078BCB]'
                        : isActive
                          ? 'border-electric-400 text-on-dark'
                          : 'border-transparent text-on-dark-muted hover:text-on-dark',
                    )
                  }
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <MobileAccordionSection
            title="Services"
            viewAllHref="/services"
            items={serviceLinks}
            onNavigate={() => setMobileOpen(false)}
            light={isLightNav}
          />
          <MobileAccordionSection
            title="AI Solutions"
            viewAllHref="/ai-solutions"
            items={solutionLinks}
            onNavigate={() => setMobileOpen(false)}
            light={isLightNav}
          />
          <MobileAccordionSection
            title="Industries"
            viewAllHref="/industries"
            items={industryLinks}
            onNavigate={() => setMobileOpen(false)}
            light={isLightNav}
          />
          <Link
            to="/contact"
            className="mt-6 flex w-full items-center justify-center rounded-md bg-[#087FC1] px-5 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[#076CAA]"
            onClick={() => setMobileOpen(false)}
          >
            Contact Us
          </Link>
        </nav>
      </MobileNavDrawer>
    </header>
  )
}