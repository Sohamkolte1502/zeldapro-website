import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { company } from '../data'
import { Container } from '../components/ui'
import { HERO_POSTER_SRC, HERO_VIDEO_SRC } from '../config/heroMedia'
import { HERO_BACKGROUND } from '../data/hero'
import { HeroFibersLayer } from './HeroFibersLayer'

const ROTATING_TAGLINES = [
  'AI-Powered Engineering',
  'Core services',
  'AI solution areas',
  'Industries',
  '5-step Delivery approach',
] as const

const LOOP_MS = 3200

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

const loopFade = {
  initial: { opacity: 0, y: 14 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
  },
  exit: {
    opacity: 0,
    y: -10,
    transition: { duration: 0.4, ease: [0.4, 0, 0.6, 1] as const },
  },
}

function HeadlineWithAccent({ text }: { text: string }) {
  const words = text.trim().split(/\s+/)
  const lead =
    words.length < 3 ? text : `${words.slice(0, -2).join(' ')} `
  const accent = words.length < 3 ? '' : words.slice(-2).join(' ')

  return (
    <h1 className="mx-auto max-w-3xl text-center text-4xl leading-[1.08] text-on-dark sm:text-5xl lg:text-6xl">
      {lead}
      <span className="text-electric-400">{accent}</span>
    </h1>
  )
}

function RotatingTaglines({ reduceMotion }: { reduceMotion: boolean | null }) {
  const [index, setIndex] = useState(0)
  const line = ROTATING_TAGLINES[index] ?? ROTATING_TAGLINES[0]

  useEffect(() => {
    if (reduceMotion) return
    const timer = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % ROTATING_TAGLINES.length)
    }, LOOP_MS)
    return () => window.clearInterval(timer)
  }, [reduceMotion])

  const taglineClass =
    'text-lg font-medium tracking-wide text-electric-400 sm:text-xl md:text-2xl'

  if (reduceMotion) {
    return (
      <p className={`mt-8 ${taglineClass}`} aria-live="polite">
        {ROTATING_TAGLINES[0]}
      </p>
    )
  }

  return (
    <div
      className="relative mt-8 flex min-h-[2.75rem] w-full items-center justify-center sm:min-h-[3rem]"
      aria-live="polite"
      aria-atomic
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.p
          key={line}
          className={`absolute inset-x-0 text-center ${taglineClass}`}
          variants={loopFade}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          {line}
        </motion.p>
      </AnimatePresence>
    </div>
  )
}

function HeroCopy({ reduceMotion }: { reduceMotion: boolean | null }) {
  if (reduceMotion) {
    return (
      <div className="mx-auto flex w-full max-w-3xl flex-col items-center">
        <HeadlineWithAccent text={company.positioningLine} />
        <RotatingTaglines reduceMotion={reduceMotion} />
      </div>
    )
  }

  return (
    <motion.div
      className="mx-auto flex w-full max-w-3xl flex-col items-center"
      variants={heroStagger}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={heroFadeIn} className="w-full">
        <HeadlineWithAccent text={company.positioningLine} />
      </motion.div>
      <motion.div variants={heroFadeIn} className="w-full">
        <RotatingTaglines reduceMotion={reduceMotion} />
      </motion.div>
    </motion.div>
  )
}

export function HeroSection() {
  const reduceMotion = useReducedMotion()
  const [videoFailed, setVideoFailed] = useState(false)
  const showVideo = !reduceMotion && !videoFailed

  const useFibers = HERO_BACKGROUND === 'fibers'

  return (
    <section
      className={`dark-surface relative flex h-svh min-h-svh max-h-svh flex-col overflow-hidden text-on-dark ${useFibers ? 'bg-[#0B1424]' : 'bg-brand-950'}`}
    >
      <div
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
        aria-hidden
      >
        {useFibers ? (
          <>
            <div className="absolute inset-0 bg-[#0B1424]" />
            <div className="absolute inset-0">
              <HeroFibersLayer />
            </div>
          </>
        ) : (
          <>
            {showVideo ? (
              <video
                className="absolute inset-0 h-full w-full min-h-full min-w-full object-cover object-center"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                poster={HERO_POSTER_SRC}
                onError={() => setVideoFailed(true)}
              >
                <source src={HERO_VIDEO_SRC} type="video/mp4" />
              </video>
            ) : (
              <img
                src={HERO_POSTER_SRC}
                alt=""
                className="absolute inset-0 h-full w-full min-h-full min-w-full object-cover object-center"
              />
            )}
            <div className="absolute inset-0 bg-brand-950/75" />
            <div className="absolute inset-0 bg-gradient-to-b from-brand-950/90 via-brand-950/65 to-brand-950/85" />
          </>
        )}
      </div>

      <Container className="relative z-10 flex min-h-0 flex-1 flex-col items-center justify-center px-5 pt-24 pb-6 text-center sm:pt-28">
        <HeroCopy reduceMotion={reduceMotion} />
      </Container>
    </section>
  )
}