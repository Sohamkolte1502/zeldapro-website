import clsx from 'clsx'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, X } from 'lucide-react'
import { useEffect, useId, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { iconForHref } from '../catalog/catalogIcons'
import { ItemPreview } from '../preview/ItemPreview'
import type { CategoryDefinition, CategoryItem } from './types'
import { useFocusTrap } from './useFocusTrap'

type CategoryOverlayProps = {
  open: boolean
  category: CategoryDefinition | null
  onClose: () => void
}

export function CategoryOverlay({
  open,
  category,
  onClose,
}: CategoryOverlayProps) {
  const reduceMotion = useReducedMotion()
  const panelRef = useRef<HTMLDivElement>(null)
  const [boundary, setBoundary] = useState<HTMLDivElement | null>(null)
  const closeRef = useRef<HTMLButtonElement>(null)
  const titleId = useId()
  const [canHover, setCanHover] = useState(false)
  const [active, setActive] = useState<CategoryItem | null>(null)
  const [anchor, setAnchor] = useState<HTMLElement | null>(null)
  useFocusTrap(panelRef, open)

  useEffect(() => {
    const mq = window.matchMedia('(hover: hover) and (pointer: fine)')
    const update = () => setCanHover(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])

  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKeyDown)
    const focusTimer = window.requestAnimationFrame(() => {
      closeRef.current?.focus()
    })
    return () => {
      document.body.style.overflow = prev
      document.removeEventListener('keydown', onKeyDown)
      window.cancelAnimationFrame(focusTimer)
    }
  }, [open, onClose])

  return (
    <AnimatePresence>
      {open && category ? (
        <div className="fixed inset-0 z-[220] flex items-start justify-center overflow-y-auto p-4 sm:p-6 lg:p-10">
          <motion.div
            role="presentation"
            className="absolute inset-0 bg-brand-950/75"
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduceMotion ? undefined : { opacity: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.25 }}
            onClick={onClose}
          />
          <motion.div
            ref={(node) => {
              panelRef.current = node
              setBoundary(node)
            }}
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            className="relative z-10 w-full max-w-6xl rounded-2xl border border-line-dark bg-brand-950 text-on-dark shadow-2xl"
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? undefined : { opacity: 0, y: 12 }}
            transition={{ duration: reduceMotion ? 0 : 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-start justify-between gap-4 border-b border-line-dark px-6 py-5 sm:px-8 sm:py-6">
              <h2
                id={titleId}
                className="font-heading text-2xl text-on-dark sm:text-3xl lg:text-4xl"
              >
                {category.title}
              </h2>
              <button
                ref={closeRef}
                type="button"
                onClick={onClose}
                className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-on-dark/30 text-on-dark transition-colors hover:border-electric-400 hover:text-electric-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric-400"
                aria-label="Close"
              >
                <X size={22} aria-hidden />
              </button>
            </div>

            <div className="px-6 py-8 sm:px-8 sm:py-10">
              <ul className="grid gap-x-10 gap-y-5 sm:grid-cols-2 lg:grid-cols-3">
                {category.items.map((item) => (
                  <li key={item.href} className="min-w-0">
                    <Link
                      to={item.href}
                      onClick={onClose}
                      className={clsx(
                        'group/link inline-flex max-w-full flex-col gap-1 border-b border-transparent pb-1',
                        'text-on-dark-muted transition-colors duration-200',
                        'hover:border-electric-400/50 hover:text-electric-400',
                        'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-electric-400',
                      )}
                      onMouseEnter={(event) => {
                        if (!canHover || !item.summary) return
                        setActive(item)
                        setAnchor(event.currentTarget)
                      }}
                      onMouseLeave={() => {
                        setActive(null)
                        setAnchor(null)
                      }}
                      onFocus={(event) => {
                        if (!canHover || !item.summary) return
                        setActive(item)
                        setAnchor(event.currentTarget)
                      }}
                      onBlur={() => {
                        setActive(null)
                        setAnchor(null)
                      }}
                    >
                      <span className="inline-flex items-center gap-2 break-words text-base font-medium text-inherit">
                        {item.title}
                        <ArrowRight
                          size={16}
                          className="shrink-0 opacity-0 transition-all duration-200 group-hover/link:translate-x-0.5 group-hover/link:opacity-100"
                          aria-hidden
                        />
                      </span>
                      {item.summary ? (
                        <span className="line-clamp-3 text-sm leading-snug text-on-dark-subtle lg:hidden">
                          {item.summary}
                        </span>
                      ) : null}
                    </Link>
                  </li>
                ))}
              </ul>
              <Link
                to={category.viewAllHref}
                onClick={onClose}
                className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-electric-400 underline decoration-electric-400/40 underline-offset-4 transition-colors hover:text-electric-500 hover:decoration-electric-500"
              >
                {category.viewAllLabel}
                <ArrowRight size={16} aria-hidden />
              </Link>
            </div>
            <ItemPreview
              open={canHover && active !== null && Boolean(active.summary)}
              anchor={anchor}
              boundary={boundary}
              title={active?.title ?? ''}
              summary={active?.summary ?? ''}
              icon={iconForHref(active?.href ?? '')}
            />
          </motion.div>
        </div>
      ) : null}
    </AnimatePresence>
  )
}