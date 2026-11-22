import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { useEffect, useId } from 'react'
import { Link } from 'react-router-dom'
import clsx from 'clsx'
import { NAV_THEME } from '../../data/navTheme'
import { Container } from '../ui'

const isLightNav = NAV_THEME === 'light'
import type { MegaMenuLink } from './MegaMenuPanel'

type SimpleDropPanelProps = {
  id: string
  open: boolean
  title: string
  items: MegaMenuLink[]
  onClose: () => void
}

export function SimpleDropPanel({
  id,
  open,
  title,
  items,
  onClose,
}: SimpleDropPanelProps) {
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
          <Container className="py-6">
            <p id={headingId} className="sr-only">
              {title}
            </p>
            <ul className="grid gap-2 sm:grid-cols-2 sm:gap-4">
              {items.map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className={clsx(
                      'block rounded-lg border px-4 py-3 transition-colors duration-200',
                      isLightNav
                        ? 'border-[#DCE5EA] hover:border-[#078BCB]/35 hover:bg-[#E8EEF1]'
                        : 'border-line-dark hover:border-electric-500/40 hover:bg-white/5',
                      'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2',
                      isLightNav
                        ? 'focus-visible:outline-[#078BCB]'
                        : 'focus-visible:outline-electric-600',
                    )}
                    onClick={onClose}
                  >
                    <span
                      className={clsx(
                        'font-heading text-base',
                        isLightNav ? 'text-[#172B3A]' : 'text-on-dark',
                      )}
                    >
                      {item.title}
                    </span>
                    {item.summary ? (
                      <span
                        className={clsx(
                          'mt-1 block text-sm',
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
          </Container>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}