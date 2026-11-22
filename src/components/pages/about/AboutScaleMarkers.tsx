import { motion, useInView, useReducedMotion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { Container } from '../../ui'
import { aboutScaleMarkers } from '../../../data/aboutPage'

const ease = [0.22, 1, 0.36, 1] as const

function AnimatedStatValue({
  value,
  active,
}: {
  value: string
  active: boolean
}) {
  const reduceMotion = useReducedMotion()
  const target = Number.parseInt(value, 10)
  const [display, setDisplay] = useState(reduceMotion ? target : 0)

  useEffect(() => {
    if (!active) return
    if (reduceMotion || Number.isNaN(target)) {
      setDisplay(target)
      return
    }

    let cancelled = false
    const durationMs = 1000
    const start = performance.now()

    const frame = (now: number) => {
      if (cancelled) return
      const t = Math.min(1, (now - start) / durationMs)
      const eased = 1 - Math.pow(1 - t, 3)
      setDisplay(Math.round(eased * target))
      if (t < 1) requestAnimationFrame(frame)
    }

    setDisplay(0)
    requestAnimationFrame(frame)
    return () => {
      cancelled = true
    }
  }, [active, reduceMotion, target])

  return (
    <span className="font-heading text-4xl tabular-nums tracking-tight text-electric-600 sm:text-5xl">
      {Number.isNaN(target) ? value : display}
    </span>
  )
}

function ScaleMarkerCard({
  label,
  value,
  index,
}: {
  label: string
  value: string
  index: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.45 })
  const reduceMotion = useReducedMotion()

  return (
    <motion.div
      ref={ref}
      className="group relative overflow-hidden rounded-2xl border border-line bg-surface-0 px-6 py-8 text-center shadow-sm"
      initial={reduceMotion ? undefined : { opacity: 0, y: 28, scale: 0.98 }}
      animate={
        reduceMotion || inView
          ? { opacity: 1, y: 0, scale: 1 }
          : { opacity: 0, y: 28, scale: 0.98 }
      }
      transition={{
        duration: 0.55,
        delay: index * 0.1,
        ease,
      }}
      whileHover={
        reduceMotion
          ? undefined
          : {
              y: -6,
              transition: { duration: 0.22, ease: 'easeOut' },
            }
      }
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-electric-500 to-electric-400 transition-transform duration-500 group-hover:scale-x-100"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-electric-500/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
        aria-hidden
      />
      <div className="relative">
        <AnimatedStatValue value={value} active={inView} />
        <p className="mt-3 text-sm font-medium leading-snug text-brand-950">{label}</p>
      </div>
    </motion.div>
  )
}

export function AboutScaleMarkers() {
  return (
    <section className="border-y border-line bg-surface-50 py-12 sm:py-14">
      <Container>
        <motion.p
          className="text-center text-xs font-semibold uppercase tracking-[0.14em] text-electric-600"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.45, ease }}
        >
          Portfolio at a glance
        </motion.p>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {aboutScaleMarkers.map((item, index) => (
            <ScaleMarkerCard
              key={item.label}
              label={item.label}
              value={item.value}
              index={index}
            />
          ))}
        </div>
      </Container>
    </section>
  )
}