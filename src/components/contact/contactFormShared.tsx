import clsx from 'clsx'
import type { ReactNode } from 'react'

export const contactFieldClass =
  'w-full rounded-xl border border-line bg-white px-4 pb-3 pt-8 text-sm text-ink shadow-sm transition-[box-shadow,border-color] placeholder:text-ink-subtle focus:border-electric-500 focus:outline-none focus:ring-2 focus:ring-electric-500/35'

export function ContactFieldShell({
  id,
  label,
  required,
  error,
  children,
}: {
  id: string
  label: string
  required?: boolean
  error?: string
  children: ReactNode
}) {
  const errorId = `${id}-error`
  return (
    <div className="relative">
      <label
        htmlFor={id}
        className="pointer-events-none absolute left-4 top-3 z-10 text-xs font-medium text-ink-subtle"
      >
        {label}
        {required ? (
          <>
            <span aria-hidden>*</span>
            <span className="sr-only"> (required)</span>
          </>
        ) : null}
      </label>
      {children}
      {error ? (
        <p id={errorId} className="mt-1.5 text-xs text-red-700" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  )
}

export function ContactToggleSwitch({
  id,
  checked,
  onChange,
  label,
  required,
}: {
  id: string
  checked: boolean
  onChange: (next: boolean) => void
  label: ReactNode
  required?: boolean
}) {
  return (
    <div className="flex items-start gap-3">
      <button
        type="button"
        role="switch"
        id={id}
        aria-checked={checked}
        aria-required={required}
        onClick={() => onChange(!checked)}
        className={clsx(
          'relative mt-0.5 h-7 w-12 shrink-0 rounded-full border transition-colors',
          'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric-600',
          checked
            ? 'border-electric-600 bg-electric-600'
            : 'border-line bg-surface-200',
        )}
      >
        <span
          className={clsx(
            'absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-white shadow-sm transition-transform',
            checked && 'translate-x-5',
          )}
          aria-hidden
        />
      </button>
      <span className="text-sm leading-relaxed text-ink-muted">
        {label}
        {required ? (
          <span className="text-brand-950">
            {' '}
            <span aria-hidden>*</span>
            <span className="sr-only"> (required)</span>
          </span>
        ) : null}
      </span>
    </div>
  )
}