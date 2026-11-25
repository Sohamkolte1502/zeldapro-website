import clsx from 'clsx'
import { motion, useInView, useReducedMotion } from 'framer-motion'
import { ArrowRight, Compass, Puzzle, Users, type LucideIcon } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { company, industries, services, solutions } from '../data'
import { Container } from '../components/ui'

const highlights = [
  {
    title: 'Strategy before software',
    text: 'We clarify the business problem, constraints, and success measures before choosing models or platforms.',
    icon: Compass,
  },
  {
    title: 'Engineering that integrates',
    text: 'Solutions are designed to fit identity, data, and the systems your teams already run.',
    icon: Puzzle,
  },
  {
    title: 'Adoption built in',
    text: 'Governance, handover, and human oversight are part of delivery—not a later phase.',
    icon: Users,
  },
] as const

const easeOut = [0.22, 1, 0.36, 1] as const

function ConcentricRings() {
  return (
    <svg
      className="pointer-events-none absolute right-0 top-0 h-[min(220px,45vw)] w-[min(220px,45vw)] -translate-y-1/4 translate-x-1/4 text-[#DCE6F5]"
      viewBox="0 0 200 200"
      fill="none"
      aria-hidden
    >
      <circle cx="100" cy="100" r="92" stroke="currentColor" strokeWidth="1" />
      <circle cx="100" cy="100" r="68" stroke="currentColor" strokeWidth="1" />
      <circle cx="100" cy="100" r="44" stroke="currentColor" strokeWidth="1" />
    </svg>
  )
}

function useCountUp(target: number, enabled: boolean) {
  const reduceMotion = useReducedMotion()
  const [value, setValue] = useState(reduceMotion ? target : 0)

  useEffect(() => {
    if (!enabled) return
    if (reduceMotion) {
      setValue(target)
      return
    }
    const start = performance.now()
    const duration = 1200
    let frame = 0
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration)
      const eased = 1 - (1 - t) ** 3
      setValue(Math.round(eased * target))
      if (t < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [enabled, reduceMotion, target])

  return value
}

function FactStat({
  value,
  label,
  animate,
}: {
  value: number
  label: string
  animate: boolean
}) {
  const display = useCountUp(value, animate)
  return (
    <div className="min-w-0 text-center sm:text-left">
      <p className="font-heading text-3xl font-medium tabular-nums text-brand-950 sm:text-4xl">
        {display}
      </p>
      <p className="mt-1 text-xs font-medium uppercase tracking-[0.14em] text-ink-muted">
        {label}
      </p>
    </div>
  )
}

function IntroFactsStrip() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.35 })
  const reduceMotion = useReducedMotion()

  const facts = [
    { value: services.length, label: 'Core services' },
    { value: solutions.length, label: 'AI solution areas' },
    { value: industries.length, label: 'Industries' },
    { value: company.approachSteps.length, label: 'Delivery steps' },
  ]

  const showStrip = facts.every((f) => typeof f.value === 'number' && f.value > 0)
  if (!showStrip) return null

  return (
    <div
      ref={ref}
      className="mt-14 border-t border-[#D3DFF0] pt-10 sm:mt-16 sm:pt-12 lg:mt-20 lg:pt-14"
    >
      <div className="grid grid-cols-2 gap-8 lg:grid-cols-4 lg:gap-6">
        {facts.map((fact) => (
          <FactStat
            key={fact.label}
            value={fact.value}
            label={fact.label}
            animate={inView || Boolean(reduceMotion)}
          />
        ))}
      </div>
    </div>
  )
}

function HighlightCard({
  index,
  title,
  text,
  icon: Icon,
}: {
  index: number
  title: string
  text: string
  icon: LucideIcon
}) {
  const reduceMotion = useReducedMotion()
  const num = String(index + 1).padStart(2, '0')

  return (
    <motion.li
      initial={reduceMotion ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: reduceMotion ? 0 : 0.45,
        delay: reduceMotion ? 0 : index * 0.08,
        ease: easeOut,
      }}
      className="list-none"
    >
      <article
        tabIndex={0}
        className={clsx(
          'group rounded-2xl border border-[#E1E8F2] bg-white p-6 transition-[transform,box-shadow,border-color] duration-300 motion-reduce:transition-none lg:p-7',
          'hover:translate-x-1.5 hover:border-[#2878F0] hover:shadow-[0_12px_32px_rgba(11,20,36,0.08)]',
          'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2878F0]',
        )}
      >
        <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:gap-5">
          <span
            className="font-heading text-4xl font-medium leading-none text-[#CFE0FB] transition-colors duration-300 group-hover:text-[#2878F0] motion-reduce:transition-none lg:text-[2.75rem]"
            aria-hidden
          >
            {num}
          </span>
          <div className="min-w-0 flex-1">
            <div className="flex items-start justify-between gap-3">
              <h3 className="text-lg font-medium text-brand-950">{title}</h3>
              <span
                className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#EAF1FE] text-[#2878F0] lg:mt-0"
                aria-hidden
              >
                <Icon size={22} strokeWidth={2} />
              </span>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-[#4A5568]">{text}</p>
          </div>
        </div>
      </article>
    </motion.li>
  )
}

export function IntroSection() {
  const reduceMotion = useReducedMotion()

  return (
    <section className="relative z-10 overflow-x-hidden bg-[#F5F7FA] py-20 text-ink sm:py-24 lg:py-[120px]">
      <ConcentricRings />
      <Container className="relative">
        <div className="grid gap-10 lg:grid-cols-[42fr_58fr] lg:items-start lg:gap-16">
          <motion.div
            className="lg:sticky lg:top-[calc(var(--nav-h)+32px)] lg:max-w-xl"
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: reduceMotion ? 0 : 0.55, ease: easeOut }}
          >
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#2878F0]">
              {company.tagline}
            </p>
            <h2 className="mt-4 font-heading text-3xl leading-[1.12] text-brand-950 sm:text-4xl lg:text-[3rem] lg:leading-[1.1] xl:text-[3.5rem]">
              Technology with purpose.{' '}
              <span className="text-[#2878F0]">Intelligence with impact.</span>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-[#4A5568] sm:text-lg">
              {company.vision}
            </p>
            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#0B1424] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2878F0]"
            >
              About Zeldapro
              <ArrowRight size={16} aria-hidden />
            </Link>
          </motion.div>

          <ul className="flex min-w-0 flex-col gap-4">
            {highlights.map((item, index) => (
              <HighlightCard
                key={item.title}
                index={index}
                title={item.title}
                text={item.text}
                icon={item.icon}
              />
            ))}
          </ul>
        </div>

        <IntroFactsStrip />
      </Container>
    </section>
  )
}