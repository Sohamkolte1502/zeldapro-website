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
  variant?: 'default' | 'featured'
  className?: string
  as?: 'li' | 'div'
}

const ease = [0.22, 1, 0.36, 1] as const

function CapabilityCardLink({
  href,
  title,
  description,
  icon: Icon,
  variant,
  className,
}: Pick<
  HomeCapabilityCardProps,
  'href' | 'title' | 'description' | 'icon' | 'variant' | 'className'
>) {
  const featured = variant === 'featured'

  return (
    <Link
      to={href}
      className={clsx(
        'group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white',
        featured ? 'min-h-[12rem] p-7 sm:min-h-[14rem] sm:p-8' : 'min-h-[13rem] p-6',
        'shadow-sm transition-[transform,box-shadow,border-color] duration-300',
        'hover:-translate-y-1 hover:border-electric-500/45 hover:shadow-lg',
        'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric-600',
        'motion-reduce:transition-none motion-reduce:hover:translate-y-0',
        className,
      )}
    >
      <span
        className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-electric-500/0 transition-[background,transform] duration-500 group-hover:scale-110 group-hover:bg-electric-500/[0.07]"
        aria-hidden
      />
      <span
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,transparent_40%,rgba(14,165,233,0.06)_100%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        aria-hidden
      />
      <ArrowUpRight
        size={featured ? 20 : 18}
        className={clsx(
          'absolute right-5 top-5 z-[1] text-electric-600 transition-[opacity,transform] duration-300',
          'opacity-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100',
          'group-focus-visible:opacity-100',
          'motion-reduce:opacity-80',
        )}
        aria-hidden
      />
      <span
        className={clsx(
          'relative z-[1] inline-flex items-center justify-center rounded-xl bg-surface-100 text-electric-600',
          'transition-[background,transform] duration-300 group-hover:scale-105 group-hover:bg-electric-600/10',
          featured ? 'h-12 w-12' : 'h-10 w-10',
        )}
        aria-hidden
      >
        <Icon size={featured ? 24 : 20} strokeWidth={2} />
      </span>
      <h3
        className={clsx(
          'relative z-[1] mt-4 pr-8 font-semibold leading-snug text-brand-950',
          featured ? 'text-xl sm:text-2xl' : 'text-lg',
        )}
      >
        {title}
      </h3>
      <p
        className={clsx(
          'relative z-[1] mt-2 flex-1 leading-relaxed text-ink-muted',
          featured ? 'text-base line-clamp-4' : 'text-sm line-clamp-3',
        )}
      >
        {description}
      </p>
    </Link>
  )
}

export function HomeCapabilityCard({
  href,
  title,
  description,
  icon,
  index = 0,
  variant = 'default',
  className,
  as = 'li',
}: HomeCapabilityCardProps) {
  const reduceMotion = useReducedMotion()
  const card = (
    <CapabilityCardLink
      href={href}
      title={title}
      description={description}
      icon={icon}
      variant={variant}
    />
  )

  if (as === 'div') {
    if (reduceMotion) {
      return <div className={clsx('h-full min-w-0', className)}>{card}</div>
    }
    return (
      <motion.div
        className={clsx('h-full min-w-0', className)}
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.12 }}
        transition={{ duration: 0.5, delay: index * 0.03, ease }}
      >
        {card}
      </motion.div>
    )
  }

  if (reduceMotion) {
    return <li className="list-none min-w-0">{card}</li>
  }

  return (
    <motion.li
      className={clsx('list-none min-w-0', className)}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.5, delay: index * 0.03, ease }}
    >
      {card}
    </motion.li>
  )
}