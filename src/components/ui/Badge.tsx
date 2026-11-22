import clsx from 'clsx'
import { type HTMLAttributes, type ReactNode } from 'react'

export type BadgeTone = 'light' | 'dark'

type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  tone?: BadgeTone
  children: ReactNode
}

export function Badge({
  tone = 'light',
  className,
  children,
  ...props
}: BadgeProps) {
  return (
    <span
      className={clsx(
        'inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium tracking-wide',
        tone === 'light' &&
          'border-line bg-surface-100 text-brand-800',
        tone === 'dark' &&
          'border-line-dark bg-white/5 text-on-dark-muted',
        className,
      )}
      {...props}
    >
      {children}
    </span>
  )
}