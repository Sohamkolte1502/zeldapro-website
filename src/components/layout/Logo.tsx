import clsx from 'clsx'
import logoNew from '../../assets/logo/logo-new.png.png'

export type LogoVariant = 'light' | 'dark'
export type LogoSize = 'default' | 'compact'

type LogoProps = {
  className?: string
  /** Reserved for call sites; single asset used for all surfaces. */
  variant?: LogoVariant
  size?: LogoSize
}

export function Logo({ className, size = 'default' }: LogoProps) {
  const height = size === 'compact' ? 'h-9' : 'h-10'

  return (
    <span className={clsx('inline-flex max-w-full items-center', className)}>
      <img
        src={logoNew}
        alt="Zeldapro"
        width={160}
        height={40}
        decoding="async"
        className={clsx(
          'w-auto max-w-[min(100%,10rem)] object-contain object-left sm:max-w-[11rem]',
          height,
        )}
      />
    </span>
  )
}