import { type ButtonHTMLAttributes, type ReactNode } from 'react'
import clsx from 'clsx'

export type ButtonVariant = 'primary' | 'secondary' | 'ghost'
export type ButtonTone = 'light' | 'dark'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant
  tone?: ButtonTone
  children: ReactNode
}

const variantStyles: Record<
  ButtonTone,
  Record<ButtonVariant, string>
> = {
  light: {
    primary:
      'bg-brand-950 text-on-dark border border-transparent hover:bg-brand-900 focus-visible:outline-on-dark',
    secondary:
      'bg-surface-0 text-brand-950 border border-line hover:border-brand-700 hover:text-brand-800 focus-visible:outline-brand-700',
    ghost:
      'bg-transparent text-brand-800 border border-transparent hover:bg-surface-100 focus-visible:outline-brand-700',
  },
  dark: {
    primary:
      'bg-on-dark text-brand-950 border border-transparent hover:bg-surface-100 focus-visible:outline-on-dark',
    secondary:
      'bg-transparent text-on-dark border border-line-dark hover:border-on-dark-muted focus-visible:outline-on-dark',
    ghost:
      'bg-transparent text-on-dark-muted border border-transparent hover:bg-white/5 hover:text-on-dark focus-visible:outline-on-dark',
  },
}

export function Button({
  variant = 'primary',
  tone = 'light',
  className,
  children,
  type = 'button',
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={clsx(
        'inline-flex items-center justify-center gap-2 rounded-md px-5 py-2.5 text-sm font-medium tracking-tight transition-colors duration-200',
        'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2',
        'disabled:pointer-events-none disabled:opacity-45',
        variantStyles[tone][variant],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  )
}