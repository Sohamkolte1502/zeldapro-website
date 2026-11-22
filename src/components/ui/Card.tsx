import clsx from 'clsx'
import { type HTMLAttributes, type ReactNode } from 'react'

export type CardTone = 'light' | 'dark'

type CardProps = HTMLAttributes<HTMLDivElement> & {
  tone?: CardTone
  children: ReactNode
}

export function Card({
  tone = 'light',
  className,
  children,
  ...props
}: CardProps) {
  return (
    <div
      className={clsx(
        'rounded-lg border p-6',
        tone === 'light' &&
          'border-line bg-surface-0 text-ink shadow-sm',
        tone === 'dark' &&
          'border-line-dark bg-surface-800/80 text-on-dark shadow-md',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}