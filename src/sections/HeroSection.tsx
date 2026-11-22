import { Link } from 'react-router-dom'
import { motion, useReducedMotion, type MotionValue } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { Container } from '../components/ui'
import { HeroFibersLayer } from './HeroFibersLayer'

const HERO_EYEBROW = 'Enterprise AI & Technology'
const HERO_HEADLINE_LEAD = 'Engineering Intelligence for a '
const HERO_HEADLINE_ACCENT = 'Smarter Enterprise.'
const HERO_DESCRIPTION =
  'We help enterprises harness AI, modern software engineering and connected technologies to transform operations, unlock new possibilities and build lasting advantage.'
const EXPLORE_CTA = { label: 'Explore our capabilities', to: '/services' }
const TALK_CTA = { label: 'Talk to our experts', to: '/contact' }

const heroStagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.14, delayChildren: 0.12 },
  },
}

const heroFadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const },
  },
}

function HeroCopy({ reduceMotion }: { reduceMotion: boolean | null }) {
  const ctas = (
    <div className="mt-8 flex w-full max-w-md flex-col gap-3 sm:max-w-none sm:flex-row sm:flex-wrap sm:gap-4">
      <Link
        to={EXPLORE_CTA.to}
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-electric-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-electric-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric-400 sm:w-auto"
      >
        {EXPLORE_CTA.label}
        <ArrowUpRight size={18} aria-hidden />
      </Link>
      <Link
        to={TALK_CTA.to}
        className="inline-flex w-full items-center justify-center rounded-full border border-white/25 bg-white/5 px-6 py-3 text-sm font-semibold text-on-dark backdrop-blur-sm transition-colors hover:border-white/40 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric-400 sm:w-auto"
      >
        {TALK_CTA.label}
      </Link>
    </div>
  )

  if (reduceMotion) {
    return (
      <div className="flex w-full max-w-3xl flex-col items-start text-left">
        <span className="inline-flex rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-medium uppercase tracking-[0.14em] text-on-dark/90 backdrop-blur-sm">
          {HERO_EYEBROW}
        </span>
        <h1 className="hero-primary-text mt-6 max-w-4xl text-left text-4xl leading-[1.08] sm:text-5xl lg:text-6xl">
          {HERO_HEADLINE_LEAD}
          <span className="text-electric-400">{HERO_HEADLINE_ACCENT}</span>
        </h1>
        <p className="hero-primary-text mt-5 max-w-2xl text-left text-base leading-relaxed sm:text-lg">
          {HERO_DESCRIPTION}
        </p>
        {ctas}
      </div>
    )
  }

  return (
    <motion.div
      className="flex w-full max-w-3xl flex-col items-start text-left"
      variants={heroStagger}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={heroFadeIn} className="w-full">
        <span className="inline-flex rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-medium uppercase tracking-[0.14em] text-on-dark/90 backdrop-blur-sm">
          {HERO_EYEBROW}
        </span>
      </motion.div>
      <motion.div variants={heroFadeIn} className="w-full">
        <h1 className="hero-primary-text mt-6 max-w-4xl text-left text-4xl leading-[1.08] sm:text-5xl lg:text-6xl">
          {HERO_HEADLINE_LEAD}
          <span className="text-electric-400">{HERO_HEADLINE_ACCENT}</span>
        </h1>
      </motion.div>
      <motion.div variants={heroFadeIn} className="w-full">
        <p className="hero-primary-text mt-5 max-w-2xl text-left text-base leading-relaxed sm:text-lg">
          {HERO_DESCRIPTION}
        </p>
      </motion.div>
      <motion.div variants={heroFadeIn} className="w-full">
        {ctas}
      </motion.div>
    </motion.div>
  )
}

type HeroCurtainMotion = {
  y: MotionValue<number>
  opacity: MotionValue<number>
  scale: MotionValue<number>
}

type HeroSectionProps = {
  fibersPaused?: boolean
  curtainMotion?: HeroCurtainMotion
}

export function HeroSection({
  fibersPaused = false,
  curtainMotion,
}: HeroSectionProps) {
  const reduceMotion = useReducedMotion()
  const inStickyCurtain = Boolean(curtainMotion)

  const sectionClass = inStickyCurtain
    ? 'hero-section-overlay dark-surface relative flex h-full min-h-[calc(100svh-var(--nav-h))] flex-col overflow-hidden bg-[#0B1424] text-on-dark'
    : 'hero-section-overlay dark-surface relative flex min-h-[calc(100svh-var(--nav-h))] flex-col overflow-hidden bg-[#0B1424] text-on-dark'

  const inner = (
    <>
      <div
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
        aria-hidden
      >
        <div className="absolute inset-0 bg-[#0B1424]" />
        <div className="absolute inset-0">
          <HeroFibersLayer paused={fibersPaused} />
        </div>
      </div>

      <Container className="relative z-10 flex min-h-0 flex-1 flex-col items-start justify-center px-5 py-10 pb-14 text-left sm:py-12">
        <HeroCopy reduceMotion={reduceMotion} />
      </Container>
    </>
  )

  return (
    <section className={sectionClass}>
      {curtainMotion ? (
        <motion.div
          className="relative flex h-full min-h-0 flex-1 flex-col"
          style={{
            y: curtainMotion.y,
            opacity: curtainMotion.opacity,
            scale: curtainMotion.scale,
          }}
        >
          {inner}
        </motion.div>
      ) : (
        inner
      )}
    </section>
  )
}