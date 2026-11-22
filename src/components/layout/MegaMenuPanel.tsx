import clsx from 'clsx'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
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
          initial={reduceMotion ? false : { opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduceMotion ? undefined : { opacity: 0, y: -10 }}
          transition={{ duration: reduceMotion ? 0 : 0.22, ease: [0.22, 1, 0.36, 1] }}
          className={clsx(
            'absolute inset-x-0 top-full z-40 border border-t',
            isLightNav
              ? 'border-[#DCE5EA] bg-[#F0F4F6] shadow-[0_8px_24px_rgba(7,19,31,0.1)]'
              : 'border-white/[0.08] border-t bg-[#1E2222] shadow-[0_16px_40px_rgba(0,0,0,0.35)]',
          )}
        >
          <Container className="py-8">
            <div className="grid gap-8 lg:grid-cols-[minmax(12rem,16rem)_1fr] lg:gap-12">
              <div
                className={clsx(
                  'border-b pb-6 lg:border-b-0 lg:border-r lg:pb-0 lg:pr-8',
                  isLightNav ? 'border-line' : 'border-white/10',
                )}
              >
                <p
                  id={headingId}
                  className={clsx(
                    'font-heading text-xl',
                    isLightNav ? 'text-[#172B3A]' : 'text-on-dark',
                  )}
                >
                  {title}
                </p>
                <p
                  className={clsx(
                    'mt-3 text-sm leading-relaxed',
                    isLightNav ? 'text-ink-muted' : 'text-on-dark-muted',
                  )}
                >
                  {intro}
                </p>
                <Link
                  to={viewAllHref}
                  className={clsx(
                    'mt-5 inline-flex text-sm font-semibold transition-colors duration-200',
                    isLightNav
                      ? 'text-[#078BCB] hover:text-[#087FC1]'
                      : 'text-[#078BCB] hover:text-electric-300',
                  )}
                  onClick={onClose}
                >
                  {viewAllLabel} →
                </Link>
              </div>
              <ul className="grid min-w-0 gap-2 sm:grid-cols-2 xl:grid-cols-3">
                {items.map((item) => (
                  <li key={item.href} className="min-w-0">
                    <Link
                      to={item.href}
                      className={clsx(
                        'group',
                        'block min-w-0 rounded-lg border border-transparent px-3 py-2.5 transition-colors duration-200',
                        isLightNav
                          ? 'hover:border-[#DCE5EA] hover:bg-[#E8EEF1]'
                          : 'hover:border-line-dark hover:bg-white/5',
                        'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2',
                        isLightNav
                          ? 'focus-visible:outline-[#078BCB]'
                          : 'focus-visible:outline-electric-500',
                      )}
                      onClick={onClose}
                    >
                      <span
                        className={clsx(
                          'block truncate text-sm font-medium',
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
                            'mt-0.5 block truncate text-xs leading-snug',
                            isLightNav
                              ? 'text-ink-muted'
                              : 'text-on-dark-muted',
                          )}
                        >
                          {item.summary}
                        </span>
                      ) : null}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
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