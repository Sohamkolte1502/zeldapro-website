import clsx from 'clsx'
import { motion, useReducedMotion } from 'framer-motion'
import {
  Bot,
  Brain,
  Cpu,
  Eye,
  Lock,
  Network,
  Sparkles,
  Workflow,
  type LucideIcon,
} from 'lucide-react'
import { aiDomains } from '../data'
import { Container, Reveal } from '../components/ui'

const domainIcons: Record<string, LucideIcon> = {
  'generative-ai-llms': Sparkles,
  'agentic-ai': Bot,
  'machine-learning': Brain,
  'computer-vision': Eye,
  'ai-iot-iiot': Network,
  'cybersecurity-ai': Lock,
  'healthcare-ai': Cpu,
  'intelligent-automation': Workflow,
}

const accentBorders = [
  'from-electric-500 to-electric-600',
  'from-accent-500 to-accent-600',
  'from-brand-700 to-brand-800',
  'from-electric-400 to-electric-600',
  'from-accent-400 to-brand-700',
  'from-brand-600 to-brand-800',
  'from-electric-500 to-accent-500',
  'from-accent-500 to-electric-500',
]

function CapabilityCard({
  title,
  tagline,
  slug,
  index,
  reduceMotion,
}: {
  title: string
  tagline: string
  slug: string
  index: number
  reduceMotion: boolean | null
}) {
  const Icon = domainIcons[slug] ?? Sparkles
  const accent = accentBorders[index % accentBorders.length]
  const num = String(index + 1).padStart(2, '0')

  const card = (
    <div
      className={clsx(
        'group relative flex h-full flex-col overflow-hidden rounded-xl border border-line bg-white p-5 shadow-sm',
        'transition-[transform,box-shadow,border-color] duration-300',
        'hover:border-electric-500/40 hover:shadow-lg hover:shadow-brand-950/10',
      )}
    >
      <div
        className={clsx(
          'mb-3 h-0.5 w-10 rounded-full bg-gradient-to-r opacity-90 transition-[width] duration-300 group-hover:w-14',
          accent,
        )}
        aria-hidden
      />
      <div className="flex items-start justify-between gap-3">
        <span
          className="font-heading text-xs font-medium tabular-nums text-ink-subtle"
          aria-hidden
        >
          {num}
        </span>
        <span
          className={clsx(
            'inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br text-white shadow-sm',
            accent,
          )}
          aria-hidden
        >
          <Icon size={18} strokeWidth={2} />
        </span>
      </div>
      <p className="mt-3 font-heading text-base font-medium text-brand-950">
        {title}
      </p>
      <p className="mt-2 text-sm leading-relaxed text-ink-muted">{tagline}</p>
    </div>
  )

  if (reduceMotion) return card

  return (
    <motion.div
      className="h-full"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
    >
      {card}
    </motion.div>
  )
}

export function TechMatrix() {
  const reduceMotion = useReducedMotion()

  return (
    <section className="relative overflow-hidden border-y border-line bg-gradient-to-b from-surface-0 via-surface-50 to-surface-0 py-[var(--spacing-section-y)] text-ink">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        aria-hidden
      >
        <div className="absolute -left-32 top-1/4 h-64 w-64 rounded-full bg-electric-500/10 blur-3xl" />
        <div className="absolute -right-24 bottom-1/4 h-72 w-72 rounded-full bg-accent-500/10 blur-3xl" />
      </div>
      <Container className="relative">
        <Reveal className="max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-electric-600">
            Technology capabilities
          </p>
          <h2 className="mt-3 font-heading text-3xl text-brand-950 sm:text-4xl">
            Broad capabilities. Purpose-built applications.
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-ink-muted sm:text-base">
            Eight AI and engineering domains we draw on when shaping enterprise
            programmes—not a catalog of disconnected tools.
          </p>
        </Reveal>
        <ul className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {aiDomains.map((domain, index) => (
            <li key={domain.slug} className="list-none">
              <Reveal delay={index * 0.05} className="h-full">
                <CapabilityCard
                  title={domain.title}
                  tagline={domain.tagline}
                  slug={domain.slug}
                  index={index}
                  reduceMotion={reduceMotion}
                />
              </Reveal>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}