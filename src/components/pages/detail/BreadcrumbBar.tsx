import clsx from 'clsx'
import { ChevronDown } from 'lucide-react'
import { useEffect, useId, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

export type BreadcrumbDropdownItem = {
  title: string
  href: string
}

type BreadcrumbBarProps = {
  parentLabel: string
  parentHref: string
  parentDropdown: BreadcrumbDropdownItem[]
  currentLabel: string
  contactHref: string
  contactLabel?: string
}

export function BreadcrumbBar({
  parentLabel,
  parentHref,
  parentDropdown,
  currentLabel,
  contactHref,
  contactLabel = 'Get in touch',
}: BreadcrumbBarProps) {
  const [open, setOpen] = useState(false)
  const menuId = useId()
  const rootRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    const onPointerDown = (e: MouseEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false)
    }
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('mousedown', onPointerDown)
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('mousedown', onPointerDown)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [open])

  return (
    <div
      className="border-b border-white/10 bg-brand-950/55 px-4 py-2.5 backdrop-blur-md sm:px-6"
      ref={rootRef}
    >
      <div className="mx-auto flex max-w-content flex-wrap items-center justify-between gap-3">
        <nav aria-label="Breadcrumb" className="min-w-0 text-sm text-on-dark/90">
          <ol className="flex flex-wrap items-center gap-1.5">
            <li>
              <Link
                to="/"
                className="hover:text-on-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric-400"
              >
                Home
              </Link>
            </li>
            <li aria-hidden className="text-on-dark-muted">
              /
            </li>
            <li className="relative">
              <button
                type="button"
                className="inline-flex items-center gap-1 rounded-md px-1 py-0.5 hover:text-on-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric-400"
                aria-expanded={open}
                aria-controls={menuId}
                aria-haspopup="menu"
                onClick={() => setOpen((v) => !v)}
              >
                {parentLabel}
                <ChevronDown
                  size={14}
                  className={clsx('transition-transform', open && 'rotate-180')}
                  aria-hidden
                />
              </button>
              {open ? (
                <ul
                  id={menuId}
                  role="menu"
                  className="absolute left-0 z-20 mt-2 max-h-64 w-64 overflow-y-auto rounded-lg border border-line-dark bg-brand-950 py-1 shadow-lg"
                >
                  <li role="none">
                    <Link
                      role="menuitem"
                      to={parentHref}
                      className="block px-3 py-2 text-sm text-on-dark hover:bg-white/10"
                      onClick={() => setOpen(false)}
                    >
                      All {parentLabel.toLowerCase()}
                    </Link>
                  </li>
                  {parentDropdown.map((item) => (
                    <li key={item.href} role="none">
                      <Link
                        role="menuitem"
                        to={item.href}
                        className="block px-3 py-2 text-sm text-on-dark-muted hover:bg-white/10 hover:text-on-dark"
                        onClick={() => setOpen(false)}
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : null}
            </li>
            <li aria-hidden className="text-on-dark-muted">
              /
            </li>
            <li className="truncate font-medium text-on-dark" aria-current="page">
              {currentLabel}
            </li>
          </ol>
        </nav>
        <Link
          to={contactHref}
          className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#2878F0] px-4 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric-400"
        >
          {contactLabel}
          <span aria-hidden>→</span>
        </Link>
      </div>
    </div>
  )
}