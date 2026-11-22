import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { useEffect, useId } from 'react'
import { Link } from 'react-router-dom'
import { Container } from '../ui'
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
          className="absolute inset-x-0 top-full z-[90] border-t border-line bg-surface-0 shadow-lg"
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
                    className="block rounded-lg border border-line px-4 py-3 transition-colors hover:border-electric-500/40 hover:bg-surface-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric-600"
                    onClick={onClose}
                  >
                    <span className="font-heading text-base text-brand-950">
                      {item.title}
                    </span>
                    {item.summary ? (
                      <span className="mt-1 block text-sm text-ink-muted">
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