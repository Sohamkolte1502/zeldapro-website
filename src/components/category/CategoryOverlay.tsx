import clsx from 'clsx'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, X } from 'lucide-react'
import { createPortal } from 'react-dom'
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

function navigateFromPanel(onClose: () => void) {
  onClose()
  window.requestAnimationFrame(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  })
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
  const [mounted, setMounted] = useState(false)
  useFocusTrap(panelRef, open)

  useEffect(() => {
    setMounted(true)
  }, [])

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

  if (!mounted) return null

  return createPortal(
    <AnimatePresence>
      {open && category ? (
        <div
          className="fixed inset-x-0 bottom-0 top-[var(--nav-h)] z-[45] flex items-start justify-center overflow-y-auto px-4 py-6 sm:px-8 sm:py-10"
          role="presentation"
        >
          <motion.button
            type="button"
            aria-label="Close menu"
            className="fixed inset-x-0 bottom-0 top-[var(--nav-h)] bg-brand-950/40"
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduceMotion ? undefined : { opacity: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.2 }}
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
            className={clsx(
              'relative z-10 w-full max-w-6xl overflow-hidden rounded-2xl border border-line bg-white',
              'shadow-[0_24px_64px_rgba(11,20,36,0.16)]',
            )}
            initial={
              reduceMotion ? false : { opacity: 0, y: 16, scale: 0.98 }
            }
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={
              reduceMotion ? undefined : { opacity: 0, y: 12, scale: 0.99 }
            }
            transition={{ duration: reduceMotion ? 0 : 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-start justify-between gap-4 border-b border-line px-6 py-5 sm:px-8 sm:py-6">
              <div className="min-w-0 max-w-2xl">
                <h2
                  id={titleId}
                  className="font-heading text-2xl text-brand-950 sm:text-[1.75rem]"
                >
                  {category.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted sm:text-base">
                  {category.description}
                </p>
              </div>
              <button
                ref={closeRef}
                type="button"
                onClick={onClose}
                className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-line text-brand-950 transition-colors hover:border-electric-600 hover:text-electric-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric-600"
                aria-label="Close"
              >
                <X size={20} aria-hidden />
              </button>
            </div>

            <div className="max-h-[min(28rem,calc(100svh-var(--nav-h)-12rem))] overflow-y-auto px-6 py-6 sm:px-8 sm:py-8">
              <ul className="grid min-w-0 gap-x-10 gap-y-1 sm:grid-cols-2 lg:grid-cols-3">
                {category.items.map((item) => (
                  <li key={item.href} className="min-w-0">
                    <Link
                      to={item.href}
                      onClick={() => navigateFromPanel(onClose)}
                      className={clsx(
                        'group block min-w-0 rounded-md px-1 py-2.5 transition-colors duration-200',
                        'hover:bg-[#F5F7FA]',
                        'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric-600',
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
                      <span className="inline-flex items-center gap-2 text-sm font-medium text-brand-950 group-hover:text-electric-600">
                        {item.title}
                        <ArrowRight
                          size={14}
                          className="shrink-0 opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:opacity-100"
                          aria-hidden
                        />
                      </span>
                      {item.summary ? (
                        <span className="mt-1 line-clamp-2 text-xs leading-snug text-ink-muted">
                          {item.summary}
                        </span>
                      ) : null}
                    </Link>
                  </li>
                ))}
              </ul>

              <Link
                to={category.viewAllHref}
                onClick={() => navigateFromPanel(onClose)}
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-electric-600 transition-colors hover:text-brand-900"
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
    </AnimatePresence>,
    document.body,
  )
}