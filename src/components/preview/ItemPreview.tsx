import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { type LucideIcon } from 'lucide-react'
import { useLayoutEffect, useState } from 'react'
import { createPortal } from 'react-dom'

type ItemPreviewProps = {
  open: boolean
  anchor: HTMLElement | null
  boundary: HTMLElement | null
  title: string
  summary: string
  icon: LucideIcon
}

const PREVIEW_WIDTH = 260

export function ItemPreview({
  open,
  anchor,
  boundary,
  title,
  summary,
  icon: Icon,
}: ItemPreviewProps) {
  const reduceMotion = useReducedMotion()
  const [box, setBox] = useState<{ top: number; left: number } | null>(null)

  useLayoutEffect(() => {
    if (!open || !anchor) {
      setBox(null)
      return
    }

    const place = () => {
      const item = anchor.getBoundingClientRect()
      const limit = boundary?.getBoundingClientRect()
      const width = Math.min(PREVIEW_WIDTH, window.innerWidth - 24)
      const height = 132
      const margin = 12

      let left = item.right + 10
      const maxRight = Math.min(
        window.innerWidth - margin,
        limit ? limit.right - margin : window.innerWidth - margin,
      )
      if (left + width > maxRight) {
        left = item.left - width - 10
      }
      const minLeft = Math.max(margin, limit ? limit.left + margin : margin)
      if (left < minLeft) left = minLeft
      if (left + width > window.innerWidth - margin) {
        left = window.innerWidth - margin - width
      }

      let top = item.top
      const maxBottom = Math.min(
        window.innerHeight - margin,
        limit ? limit.bottom - margin : window.innerHeight - margin,
      )
      if (top + height > maxBottom) top = maxBottom - height
      const minTop = Math.max(margin, limit ? limit.top + margin : margin)
      if (top < minTop) top = minTop

      setBox({ top, left })
    }

    place()
    window.addEventListener('resize', place)
    window.addEventListener('scroll', place, true)
    return () => {
      window.removeEventListener('resize', place)
      window.removeEventListener('scroll', place, true)
    }
  }, [open, anchor, boundary])

  if (typeof document === 'undefined') return null

  return createPortal(
    <AnimatePresence>
      {open && box ? (
        <motion.div
          role="tooltip"
          className="pointer-events-none fixed z-[260] w-[min(16.25rem,calc(100vw-1.5rem))] rounded-xl border border-line-dark bg-brand-900/95 p-3 text-on-dark shadow-lg backdrop-blur-sm"
          style={{ top: box.top, left: box.left }}
          initial={reduceMotion ? false : { opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduceMotion ? undefined : { opacity: 0, y: 4 }}
          transition={{ duration: reduceMotion ? 0 : 0.18 }}
        >
          <div className="flex items-start gap-2">
            <Icon className="mt-0.5 shrink-0 text-electric-400" size={18} aria-hidden />
            <div className="min-w-0">
              <p className="text-sm font-semibold text-on-dark">{title}</p>
              <p className="mt-1 line-clamp-4 text-xs leading-relaxed text-on-dark-muted">
                {summary}
              </p>
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>,
    document.body,
  )
}
