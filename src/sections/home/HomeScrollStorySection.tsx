import clsx from 'clsx'
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useTransform,
} from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import howWeWorkImage from '../../assets/images/how-we-work.jpg'
import { Container } from '../../components/ui'
import { company } from '../../data'
import { howWeWorkImageSpec } from '../../data/approachPage'

const STEPS = company.approachSteps
const ease = [0.22, 1, 0.36, 1] as const

function useMinLgViewport() {
  const [minLg, setMinLg] = useState(
    () =>
      typeof window !== 'undefined' &&
      window.matchMedia('(min-width: 1024px)').matches,
  )

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)')
    const sync = () => setMinLg(mq.matches)
    sync()
    mq.addEventListener('change', sync)
    return () => mq.removeEventListener('change', sync)
  }, [])

  return minLg
}

function StaticDeliverySection() {
  return (
    <section className="border-y border-line bg-[linear-gradient(180deg,#f8fafb_0%,#ffffff_100%)] py-[var(--spacing-section-y)] text-ink">
      <Container>
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-electric-600">
          How we work
        </p>
        <h2 className="mt-3 max-w-2xl font-heading text-3xl text-brand-950 sm:text-4xl">
          From discovery to ongoing evolution.
        </h2>
        <p className="mt-4 max-w-[60ch] text-base text-ink-muted">
          Structured delivery aligned to Discover → Design → Engineer → Integrate
          → Evolve — with governance and adoption built in.
        </p>
        <div className="mt-8 grid gap-8 lg:grid-cols-2 lg:items-start">
          <ol className="space-y-4">
            {STEPS.map((step, index) => (
              <li
                key={step.slug}
                className="rounded-xl border border-line bg-white px-4 py-4"
              >
                <p className="text-xs font-semibold tabular-nums text-electric-600">
                  {String(index + 1).padStart(2, '0')}
                </p>
                <h3 className="mt-0.5 font-heading text-lg text-brand-950">
                  {step.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-ink-muted">
                  {step.summary}
                </p>
              </li>
            ))}
          </ol>
          <img
            src={howWeWorkImage}
            alt="Abstract illustration of the Discover through Evolve delivery lifecycle"
            width={howWeWorkImageSpec.width}
            height={howWeWorkImageSpec.height}
            loading="lazy"
            decoding="async"
            className="mx-auto h-auto w-full max-h-[520px] object-contain"
          />
        </div>
      </Container>
    </section>
  )
}

function ScrollDeliveryDesktop() {
  const sectionRef = useRef<HTMLElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  })

  const illustrationY = useTransform(scrollYProgress, [0, 1], [24, -24])
  const progressWidth = useTransform(
    scrollYProgress,
    [0, 1],
    ['0%', '100%'],
  )

  useMotionValueEvent(scrollYProgress, 'change', (value) => {
    const next = Math.min(
      STEPS.length - 1,
      Math.max(0, Math.floor(value * STEPS.length)),
    )
    setActiveIndex(next)
  })

  const active = STEPS[activeIndex] ?? STEPS[0]

  return (
    <section
      ref={sectionRef}
      className="relative bg-[linear-gradient(180deg,#f3f5f8_0%,#fafbfc_45%,#ffffff_100%)]"
      style={{ height: `${STEPS.length * 72}vh` }}
      aria-labelledby="scroll-delivery-heading"
    >
      <div className="sticky top-[var(--nav-h)] flex h-[calc(100svh-var(--nav-h))] items-center overflow-hidden">
        <Container className="py-8">
          <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-electric-600">
                How we work
              </p>
              <h2
                id="scroll-delivery-heading"
                className="mt-3 max-w-xl font-heading text-3xl text-brand-950 sm:text-4xl"
              >
                Delivery designed for enterprise reality.
              </h2>
              <div
                className="mt-6 h-1 w-full max-w-md overflow-hidden rounded-full bg-line"
                aria-hidden
              >
                <motion.div
                  className="h-full rounded-full bg-electric-600"
                  style={{ width: progressWidth }}
                />
              </div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.slug}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.35, ease }}
                  className="mt-6"
                >
                  <p className="text-xs font-semibold tabular-nums text-electric-600">
                    {String(activeIndex + 1).padStart(2, '0')} /{' '}
                    {String(STEPS.length).padStart(2, '0')}
                  </p>
                  <h3 className="mt-2 font-heading text-2xl text-brand-950">
                    {active.title}
                  </h3>
                  <p className="mt-3 max-w-[50ch] text-base leading-relaxed text-ink-muted">
                    {active.summary}
                  </p>
                </motion.div>
              </AnimatePresence>
              <div
                className="mt-8 flex flex-wrap gap-2"
                role="tablist"
                aria-label="Delivery lifecycle steps"
              >
                {STEPS.map((step, index) => (
                  <span
                    key={step.slug}
                    role="presentation"
                    className={clsx(
                      'rounded-full px-3 py-1.5 text-xs font-semibold transition-colors duration-300',
                      index === activeIndex
                        ? 'bg-brand-950 text-on-dark'
                        : 'bg-white text-ink-muted ring-1 ring-line',
                    )}
                  >
                    {step.title}
                  </span>
                ))}
              </div>
            </div>

            <motion.div
              className="relative mx-auto flex w-full max-w-md justify-center lg:max-w-none"
              style={{ y: illustrationY }}
            >
              <div
                className="pointer-events-none absolute inset-0 rounded-3xl bg-[radial-gradient(ellipse_70%_60%_at_50%_40%,rgba(14,165,233,0.12),transparent_70%)]"
                aria-hidden
              />
              <img
                src={howWeWorkImage}
                alt=""
                width={howWeWorkImageSpec.width}
                height={howWeWorkImageSpec.height}
                decoding="async"
                className="relative z-[1] h-auto w-full max-h-[min(62vh,640px)] object-contain"
              />
            </motion.div>
          </div>
        </Container>
      </div>
    </section>
  )
}

/** Scroll-linked lifecycle storytelling (desktop pin); static list on mobile / reduced motion. */
export function HomeScrollStorySection() {
  const reduceMotion = useReducedMotion()
  const minLg = useMinLgViewport()

  if (reduceMotion || !minLg) {
    return <StaticDeliverySection />
  }

  return <ScrollDeliveryDesktop />
}