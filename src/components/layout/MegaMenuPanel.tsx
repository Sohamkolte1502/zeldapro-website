import clsx from 'clsx'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { useEffect, useId, type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { Container } from '../ui'

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
          className="absolute inset-x-0 top-full z-[90] border-t border-line bg-surface-0 shadow-lg"
        >
          <Container className="py-8">
            <div className="grid gap-8 lg:grid-cols-[minmax(12rem,16rem)_1fr] lg:gap-12">
              <div className="border-b border-line pb-6 lg:border-b-0 lg:border-r lg:pb-0 lg:pr-8">
                <p
                  id={headingId}
                  className="font-heading text-xl text-brand-950"
                >
                  {title}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                  {intro}
                </p>
                <Link
                  to={viewAllHref}
                  className="mt-5 inline-flex text-sm font-semibold text-electric-600 hover:text-electric-500"
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
                        'block min-w-0 rounded-lg border border-transparent px-3 py-2.5 transition-colors',
                        'hover:border-line hover:bg-surface-50',
                        'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric-500',
                      )}
                      onClick={onClose}
                    >
                      <span className="block truncate text-sm font-medium text-brand-950">
                        {item.title}
                      </span>
                      {item.summary ? (
                        <span className="mt-0.5 block truncate text-xs leading-snug text-ink-muted">
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
}

export function MobileAccordionSection({
  title,
  viewAllHref,
  items,
  onNavigate,
}: MobileAccordionProps) {
  return (
    <details className="group border-b border-line-dark py-2">
      <summary className="cursor-pointer list-none py-3 text-base font-medium text-on-dark marker:content-none [&::-webkit-details-marker]:hidden">
        <span className="flex items-center justify-between">
          {title}
          <span
            className="text-on-dark-muted transition-transform group-open:rotate-180"
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
              className="block rounded-md py-2.5 text-sm text-on-dark-muted hover:text-on-dark"
              onClick={onNavigate}
            >
              {item.title}
            </Link>
          </li>
        ))}
        <li>
          <Link
            to={viewAllHref}
            className="mt-2 inline-block text-sm font-medium text-electric-400"
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
}: {
  open: boolean
  onClose: () => void
  children: ReactNode
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
      className="dark-surface fixed inset-0 z-[120] bg-brand-950 lg:hidden"
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