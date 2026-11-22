import clsx from 'clsx'

export type SectionHeadingTone = 'light' | 'dark'
export type SectionHeadingAlign = 'left' | 'center'

type SectionHeadingProps = {
  eyebrow?: string
  title: string
  description?: string
  tone?: SectionHeadingTone
  align?: SectionHeadingAlign
  className?: string
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  tone = 'light',
  align = 'left',
  className,
}: SectionHeadingProps) {
  const isDark = tone === 'dark'

  return (
    <div
      className={clsx(
        align === 'center' && 'mx-auto max-w-2xl text-center',
        className,
      )}
    >
      {eyebrow ? (
        <p
          className={clsx(
            'mb-3 text-xs font-medium uppercase tracking-[0.18em]',
            isDark ? 'text-accent-400' : 'text-accent-600',
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={clsx(
          'text-3xl leading-tight sm:text-4xl',
          isDark ? 'text-on-dark' : 'text-ink',
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={clsx(
            'mt-4 max-w-2xl text-base leading-relaxed',
            align === 'center' && 'mx-auto',
            isDark ? 'text-on-dark-muted' : 'text-ink-muted',
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  )
}