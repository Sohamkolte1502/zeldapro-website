import clsx from 'clsx'
import { motion, useReducedMotion } from 'framer-motion'
import type { LucideIcon } from 'lucide-react'
import {
  BarChart3,
  Bot,
  Cpu,
  LineChart,
  ShieldCheck,
  Sparkles,
  Workflow,
} from 'lucide-react'
import { Reveal } from '../../ui'

const DEFAULT_ICONS: LucideIcon[] = [
  Sparkles,
  Workflow,
  LineChart,
  ShieldCheck,
  Bot,
  Cpu,
  BarChart3,
]

const ACCENT_GRADIENTS = [
  'from-electric-600 to-brand-800',
  'from-brand-700 to-brand-900',
  'from-electric-500 to-accent-600',
  'from-accent-500 to-brand-800',
] as const

type IconCardGridProps = {
  items: string[]
  icons?: LucideIcon[]
}

export function IconCardGrid({ items, icons = DEFAULT_ICONS }: IconCardGridProps) {
  const reduceMotion = useReducedMotion()

  if (items.length === 0) return null

  return (
    <ul className="grid gap-5 sm:grid-cols-2 lg:gap-6">
      {items.map((item, index) => {
        const Icon = icons[index % icons.length] ?? Sparkles
        const accent = ACCENT_GRADIENTS[index % ACCENT_GRADIENTS.length]
        const num = String(index + 1).padStart(2, '0')

        const card = (
          <div
            className={clsx(
              'group relative h-full overflow-hidden rounded-2xl border border-line bg-[#F5F7FA] p-6',
              'shadow-[0_8px_30px_rgba(11,20,36,0.06)]',
              'transition-[transform,box-shadow,border-color] duration-300',
              'hover:border-electric-500/40 hover:shadow-[0_14px_40px_rgba(11,20,36,0.12)]',
            )}
          >
            <div
              className={clsx(
                'mb-4 h-0.5 w-10 rounded-full bg-gradient-to-r transition-[width] duration-300 group-hover:w-14',
                accent,
              )}
              aria-hidden
            />
            <div className="flex items-start justify-between gap-3">
              <span
                className={clsx(
                  'inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br text-white shadow-md',
                  accent,
                )}
                aria-hidden
              >
                <Icon size={22} strokeWidth={2} />
              </span>
              <span className="font-heading text-xs font-medium tabular-nums text-electric-600">
                {num}
              </span>
            </div>
            <p className="mt-4 text-sm font-medium leading-relaxed text-brand-950 sm:text-base">
              {item}
            </p>
          </div>
        )

        return (
          <li key={item} className="list-none">
            <Reveal delay={index * 0.05} className="h-full">
              {reduceMotion ? (
                card
              ) : (
                <motion.div
                  className="h-full"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                >
                  {card}
                </motion.div>
              )}
            </Reveal>
          </li>
        )
      })}
    </ul>
  )
}