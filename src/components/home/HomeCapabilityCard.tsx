import clsx from 'clsx'
import { ArrowUpRight, type LucideIcon } from 'lucide-react'
import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'

type HomeCapabilityCardProps = {
  href: string
  title: string
  description: string
  icon: LucideIcon
  index?: number
}

const ease = [0.22, 1, 0.36, 1] as const

export function HomeCapabilityCard({
  href,
  title,
  description,
  icon: Icon,
  index = 0,
}: HomeCapabilityCardProps) {
  const reduceMotion = useReducedMotion()

  const card = (
    <Link
      to={href}
      className={clsx(
        'group relative flex h-full min-h-[13.5rem] flex-col rounded-xl border border-line bg-white p-6',
        'shadow-sm transition-[transform,box-shadow,border-color] duration-300',
        'hover:-translate-y-1 hover:border-electric-500/40 hover:shadow-md',
        'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric-600',
        'motion-reduce:transition-none motion-reduce:hover:translate-y-0',
      )}
    >
      <ArrowUpRight
        size={18}
        className={clsx(
          'absolute right-5 top-5 text-electric-600 opacity-0 transition-opacity duration-300',
          'group-hover:opacity-100 group-focus-visible:opacity-100',
          'motion-reduce:opacity-80',
        )}
        aria-hidden
      />
      <span
        className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-surface-100 text-electric-600 transition-colors duration-300 group-hover:bg-electric-600/10"
        aria-hidden
      >
        <Icon size={20} strokeWidth={2} />
      </span>
      <h3 className="mt-4 pr-6 text-lg font-semibold leading-snug text-brand-950">
        {title}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-muted">
        {description}
      </p>
    </Link>
  )

  if (reduceMotion) {
    return card
  }

  return (
    <motion.div
      className="h-full"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, delay: index * 0.04, ease }}
    >
      {card}
    </motion.div>
  )
}