import clsx from 'clsx'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { X } from 'lucide-react'
import { useEffect, useId, type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { NAV_THEME } from '../../data/navTheme'
import { Container } from '../ui'

const isLightNav = NAV_THEME === 'light'

export type MegaMenuLink = {
  title: string
  href: string
  summary?: string
}

type MegaMenuPanelProps = {
  id: string
  open: boolean
  title: string
  intro: string
  viewAllHref: string
  viewAllLabel: string
  items: MegaMenuLink[]
  onClose: () => void
}

export function MegaMenuPanel({
  id,
  open,
  title,
  intro,
  viewAllHref,
  viewAllLabel,
  items,
  onClose,
}: MegaMenuPanelProps) {
  const reduceMotion = useReducedMotion()
  const headingId = useId()

  useEffect(() => {
    if (!open) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [open, onClose])

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          id={id}
          role="region"
          aria-labelledby={headingId}
          initial={reduceMotion ? false : { opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
          transition={{ duration: reduceMotion ? 0 : 0.22, ease: [0.22, 1, 0.36, 1] }}
          className={clsx(
            'absolute inset-x-0 top-full z-40 border-t',
            isLightNav
              ? 'border-[#DCE5EA] bg-[#F0F4F6] shadow-[0_12px_32px_rgba(7,19,31,0.12)]'
              : 'border-white/[0.08] bg-brand-950 shadow-[0_20px_48px_rgba(0,0,0,0.45)]',
          )}
        >
          <Container className="py-8 sm:py-10">
            <div className="flex items-start justify-between gap-6">
              <div className="min-w-0 max-w-2xl">
                <h2
                  id={headingId}
                  className={clsx(
                    'font-heading text-2xl sm:text-[1.75rem]',
                    isLightNav ? 'text-[#172B3A]' : 'text-on-dark',
                  )}
                >
                  {title}
                </h2>
                <p
                  className={clsx(
                    'mt-2 text-sm leading-relaxed sm:text-base',
                    isLightNav ? 'text-ink-muted' : 'text-on-dark-muted',
                  )}
                >
                  {intro}
                </p>
              </div>
              <button
                type="button"
                onClick={onClose}
                className={clsx(
                  'inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border transition-colors duration-200',
                  isLightNav
                    ? 'border-[#DCE5EA] text-[#172B3A] hover:border-[#078BCB] hover:text-[#078BCB]'
                    : 'border-white/20 text-on-dark hover:border-electric-400 hover:text-electric-400',
                  'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#078BCB]',
                )}
                aria-label="Close menu"
              >
                <X size={20} aria-hidden />
              </button>
            </div>

            <ul className="mt-8 grid min-w-0 gap-x-10 gap-y-1 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-12">
              {items.map((item) => (
                <li key={item.href} className="min-w-0">
                  <Link
                    to={item.href}
                    className={clsx(
                      'group block min-w-0 rounded-md px-1 py-2.5 transition-colors duration-200',
                      isLightNav
                        ? 'hover:bg-[#E8EEF1]/80'
                        : 'hover:bg-white/[0.06]',
                      'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2',
                      isLightNav
                        ? 'focus-visible:outline-[#078BCB]'
                        : 'focus-visible:outline-electric-500',
                    )}
                    onClick={onClose}
                  >
                    <span
                      className={clsx(
                        'block text-sm font-medium leading-snug sm:text-[0.95rem]',
                        isLightNav
                          ? 'text-[#172B3A] group-hover:text-[#078BCB]'
                          : 'text-on-dark group-hover:text-electric-300',
                      )}
                    >
                      {item.title}
                    </span>
                    {item.summary ? (
                      <span
                        className={clsx(
                          'mt-1 line-clamp-2 hidden text-xs leading-snug lg:block',
                          isLightNav ? 'text-ink-muted' : 'text-on-dark-muted',
                        )}
                      >
                        {item.summary}
                      </span>
                    ) : null}
                  </Link>
                </li>
              ))}
            </ul>

            <Link
              to={viewAllHref}
              className={clsx(
                'mt-8 inline-flex text-sm font-semibold transition-colors duration-200',
                isLightNav
                  ? 'text-[#078BCB] hover:text-[#087FC1]'
                  : 'text-[#078BCB] hover:text-electric-300',
              )}
              onClick={onClose}
            >
              {viewAllLabel} →
            </Link>
          </Container>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}

type MobileAccordionProps = {
  title: string
  viewAllHref: string
  items: MegaMenuLink[]
  onNavigate: () => void
  light?: boolean
}

export function MobileAccordionSection({
  title,
  viewAllHref,
  items,
  onNavigate,
  light = false,
}: MobileAccordionProps) {
  return (
    <details
      className={clsx(
        'group border-b py-2',
        light ? 'border-[#DCE5EA]' : 'border-line-dark',
      )}
    >
      <summary
        className={clsx(
          'cursor-pointer list-none py-3 text-base font-medium marker:content-none [&::-webkit-details-marker]:hidden',
          light ? 'text-[#172B3A]' : 'text-on-dark',
        )}
      >
        <span className="flex items-center justify-between">
          {title}
          <span
            className={clsx(
              'transition-transform group-open:rotate-180',
              light ? 'text-[#172B3A]/70' : 'text-on-dark-muted',
            )}
            aria-hidden
          >
            ▾
          </span>
        </span>
      </summary>
      <ul className="space-y-1 pb-4 pl-1">
        {items.map((item) => (
          <li key={item.href}>
            <Link
              to={item.href}
              className={clsx(
                'block rounded-md py-2.5 text-sm transition-colors duration-200',
                light
                  ? 'text-[#172B3A]/80 hover:text-[#078BCB]'
                  : 'text-on-dark-muted hover:text-on-dark',
              )}
              onClick={onNavigate}
            >
              {item.title}
            </Link>
          </li>
        ))}
        <li>
          <Link
            to={viewAllHref}
            className={clsx(
              'mt-2 inline-block text-sm font-medium transition-colors duration-200',
              light ? 'text-[#078BCB]' : 'text-electric-400',
            )}
            onClick={onNavigate}
          >
            View all →
          </Link>
        </li>
      </ul>
    </details>
  )
}

export function MobileNavDrawer({
  open,
  onClose,
  children,
  light = false,
}: {
  open: boolean
  onClose: () => void
  children: ReactNode
  light?: boolean
}) {
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = prev
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [open, onClose])

  if (!open) return null

  return (
    <motion.div
      className={clsx(
        'fixed inset-0 z-[120] lg:hidden',
        light
          ? 'bg-[#F0F4F6] text-[#172B3A] shadow-[0_4px_18px_rgba(7,19,31,0.08)]'
          : 'dark-surface bg-[#000000]',
      )}
      initial={reduceMotion ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      role="dialog"
      aria-modal="true"
      aria-label="Mobile navigation"
    >
      <div className="flex h-full flex-col overflow-y-auto px-5 pb-8 pt-4">
        {children}
      </div>
    </motion.div>
  )
}