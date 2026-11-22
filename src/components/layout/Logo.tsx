import clsx from 'clsx'
import wordmark from '../../assets/logo/zeldapro-wordmark.jpg'

export type LogoVariant = 'light' | 'dark'
export type LogoSize = 'default' | 'compact'

type LogoProps = {
  className?: string
  /** Kept for call sites; wordmark carries its own background. */
  variant?: LogoVariant
  size?: LogoSize
}

export function Logo({
  className,
  size = 'default',
}: LogoProps) {
  const compact = size === 'compact'

  return (
    <span className={clsx('inline-flex max-w-full items-center', className)}>
      <img
        src={wordmark}
        alt="Zeldapro"
        width={640}
        height={160}
        decoding="async"
        className={clsx(
          'w-auto max-w-[min(100%,11rem)] object-contain object-left sm:max-w-[12.5rem]',
          compact ? 'h-8 sm:h-9' : 'h-9 sm:h-10',
        )}
      />
    </span>
  )
}