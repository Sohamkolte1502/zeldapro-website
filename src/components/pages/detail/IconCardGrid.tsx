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

const DEFAULT_ICONS: LucideIcon[] = [
  Sparkles,
  Workflow,
  LineChart,
  ShieldCheck,
  Bot,
  Cpu,
  BarChart3,
]

type IconCardGridProps = {
  items: string[]
  icons?: LucideIcon[]
}

export function IconCardGrid({ items, icons = DEFAULT_ICONS }: IconCardGridProps) {
  if (items.length === 0) return null

  return (
    <ul className="grid gap-4 sm:grid-cols-2">
      {items.map((item, index) => {
        const Icon = icons[index % icons.length] ?? Sparkles
        return (
          <li
            key={item}
            className="rounded-xl border border-[#E1E8F2] bg-white p-5 sm:p-6"
          >
            <span
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[#E1E8F2] bg-[#F5F7FA] text-[#2878F0]"
              aria-hidden
            >
              <Icon size={20} />
            </span>
            <p className="mt-4 text-sm leading-relaxed text-ink-muted sm:text-base">
              {item}
            </p>
          </li>
        )
      })}
    </ul>
  )
}