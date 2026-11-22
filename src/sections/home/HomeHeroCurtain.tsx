import clsx from 'clsx'
import {
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from 'framer-motion'
import { useEffect, useRef, useState, type ReactNode } from 'react'
import { StickyHero } from '../../components/layout/StickyHero'
import { HeroSection } from '../HeroSection'

type CurtainMotion = {
  y: MotionValue<number>
  opacity: MotionValue<number>
  scale: MotionValue<number>
}

function useMinMdViewport() {
  const [minMd, setMinMd] = useState(
    () =>
      typeof window !== 'undefined' &&
      window.matchMedia('(min-width: 768px)').matches,
  )

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)')
    const sync = () => setMinMd(mq.matches)
    sync()
    mq.addEventListener('change', sync)
    return () => mq.removeEventListener('change', sync)
  }, [])

  return minMd
}

function HomeHeroCurtainDesktop({ children }: { children: ReactNode }) {
  const heroStickyRef = useRef<HTMLDivElement>(null)
  const [fibersPaused, setFibersPaused] = useState(false)

  const { scrollYProgress } = useScroll({
    target: heroStickyRef,
    offset: ['start start', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, -40])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.4])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.97])

  const curtainMotion: CurtainMotion = { y, opacity, scale }

  useMotionValueEvent(scrollYProgress, 'change', (value) => {
    setFibersPaused(value >= 0.95)
  })

  return (
    <>
      <StickyHero ref={heroStickyRef} enabled>
        <HeroSection fibersPaused={fibersPaused} curtainMotion={curtainMotion} />
      </StickyHero>
      <div
        className={clsx(
          'relative z-10 bg-surface-50',
          'shadow-[0_-12px_40px_rgba(11,20,36,0.18)]',
        )}
      >
        {children}
      </div>
    </>
  )
}

export function HomeHeroCurtain({ children }: { children: ReactNode }) {
  const reduceMotion = useReducedMotion()
  const minMd = useMinMdViewport()
  const curtain = minMd && !reduceMotion

  if (!curtain) {
    return (
      <>
        <HeroSection />
        <div className="relative z-10 w-full overflow-x-hidden bg-surface-50">
          {children}
        </div>
      </>
    )
  }

  return <HomeHeroCurtainDesktop>{children}</HomeHeroCurtainDesktop>
}