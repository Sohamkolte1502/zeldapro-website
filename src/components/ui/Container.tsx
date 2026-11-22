import clsx from 'clsx'
import { type HTMLAttributes, type ReactNode } from 'react'

export type ContainerSize = 'narrow' | 'content' | 'wide'

type ContainerProps = HTMLAttributes<HTMLDivElement> & {
  size?: ContainerSize
  children: ReactNode
}

const sizeClass: Record<ContainerSize, string> = {
  narrow: 'max-w-narrow',
  content: 'max-w-content',
  wide: 'max-w-wide',
}

export function Container({
  size = 'content',
  className,
  children,
  ...props
}: ContainerProps) {
  return (
    <div
      className={clsx(
        'mx-auto w-full px-5 sm:px-6 lg:px-8',
        sizeClass[size],
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}