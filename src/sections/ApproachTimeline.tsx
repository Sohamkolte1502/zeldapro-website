import { motion, useReducedMotion } from 'framer-motion'
import { company } from '../data'
import { howWeWorkImageSpec } from '../data/approachPage'
import { Container, Reveal } from '../components/ui'
import howWeWorkImage from '../assets/images/how-we-work.jpg'

const ease = [0.22, 1, 0.36, 1] as const

function LifecycleIllustration({
  alt,
  className,
}: {
  alt: string
  className?: string
}) {
  return (
    <img
      src={howWeWorkImage}
      alt={alt}
      className={className ?? 'h-auto w-full max-w-full'}
      width={howWeWorkImageSpec.width}
      height={howWeWorkImageSpec.height}
      loading="lazy"
      decoding="async"
    />
  )
}

function ApproachStepCard({
  step,
  index,
}: {
  step: (typeof company.approachSteps)[number]
  index: number
}) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.li
      className="scroll-mt-20 border-l-2 border-electric-500/70 py-0.5 pl-4"
      initial={reduceMotion ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.55, margin: '0px 0px -8% 0px' }}
      transition={{ duration: 0.5, ease }}
    >
      <p className="font-heading text-xs font-semibold tabular-nums text-electric-600">
        {String(index + 1).padStart(2, '0')}
      </p>
      <h3 className="mt-0.5 font-heading text-base text-brand-950">{step.title}</h3>
      <p className="mt-1 text-sm leading-relaxed text-ink-muted">{step.summary}</p>
    </motion.li>
  )
}

export function ApproachTimeline() {
  const { approachSteps } = company
  const reduceMotion = useReducedMotion()

  return (
    <section className="overflow-x-clip bg-surface-0 py-12 text-ink sm:py-14">
      <Container>
        <div className="grid min-w-0 gap-8 lg:grid-cols-2 lg:items-center lg:gap-12">
          <div className="order-1 min-w-0 lg:order-1">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-electric-600">
                How we work
              </p>
              <h2 className="mt-2 font-heading text-2xl text-brand-950 sm:text-3xl">
                From discovery to ongoing evolution.
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                Structured delivery aligned to the Discover → Design → Engineer → Integrate
                → Evolve lifecycle from our brief.
              </p>
            </Reveal>

            <motion.div
              className="mt-6 max-w-md lg:hidden"
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.5, ease }}
            >
              <LifecycleIllustration alt="" />
            </motion.div>

            <ol className="mt-6 space-y-5 sm:mt-8 sm:space-y-6">
              {approachSteps.map((step, index) => (
                <ApproachStepCard key={step.slug} step={step} index={index} />
              ))}
            </ol>
          </div>

          <motion.div
            className="order-2 hidden min-w-0 justify-self-center lg:order-2 lg:flex lg:w-full lg:justify-end"
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, ease }}
          >
            <LifecycleIllustration
              alt="Abstract illustration of the Discover through Evolve delivery lifecycle"
              className="h-auto w-full max-h-[min(640px,72vh)] max-w-full object-contain object-center"
            />
          </motion.div>
        </div>
      </Container>
    </section>
  )
}