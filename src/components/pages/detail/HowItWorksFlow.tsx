import clsx from 'clsx'
import { motion, useReducedMotion } from 'framer-motion'
import { Reveal } from '../../ui'

export function HowItWorksFlow({ text }: { text: string }) {
  const reduceMotion = useReducedMotion()
  const trimmed = text.trim()
  if (!trimmed) return null

  const steps = trimmed
    .split(/(?<=[.!?])\s+/)
    .map((s) => s.trim())
    .filter(Boolean)

  if (steps.length <= 1) {
    return (
      <p className="max-w-3xl text-base leading-relaxed text-ink-muted sm:text-lg">
        {trimmed}
      </p>
    )
  }

  return (
    <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
      {steps.map((step, index) => {
        const card = (
          <div
            className={clsx(
              'relative h-full overflow-hidden rounded-2xl border border-line bg-white p-6 shadow-sm',
              'transition-[box-shadow,border-color] duration-300 hover:border-electric-500/35 hover:shadow-md',
            )}
          >
            <div
              className="pointer-events-none absolute -right-6 -top-6 h-20 w-20 rounded-full bg-electric-500/10 blur-2xl"
              aria-hidden
            />
            <span
              className="relative inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-electric-600 to-brand-800 text-sm font-semibold text-white shadow-sm"
              aria-hidden
            >
              {index + 1}
            </span>
            <p className="relative mt-4 text-sm leading-relaxed text-ink sm:text-base">
              {step}
            </p>
          </div>
        )

        return (
          <li key={step} className="list-none">
            <Reveal delay={index * 0.07} className="h-full">
              {reduceMotion ? (
                card
              ) : (
                <motion.div
                  className="h-full"
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                >
                  {card}
                </motion.div>
              )}
            </Reveal>
          </li>
        )
      })}
    </ol>
  )
}