import clsx from 'clsx'
import {
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from 'framer-motion'
import { useEffect, useRef, useState, type ReactNode } from 'react'
import { StickyHero } from '../../layout/StickyHero'
import { DetailHero, type DetailHeroProps } from './DetailHero'

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

function DetailPageCurtainDesktop({
  heroProps,
  children,
}: {
  heroProps: DetailHeroProps
  children: ReactNode
}) {
  const heroStickyRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: heroStickyRef,
    offset: ['start start', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, -32])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.45])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.98])

  const curtainMotion: CurtainMotion = { y, opacity, scale }

  return (
    <>
      <StickyHero ref={heroStickyRef} enabled>
        <DetailHero {...heroProps} curtainMotion={curtainMotion} fillSticky />
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

type DetailPageCurtainProps = {
  heroProps: DetailHeroProps
  children: ReactNode
}

export function DetailPageCurtain({
  heroProps,
  children,
}: DetailPageCurtainProps) {
  const reduceMotion = useReducedMotion()
  const minMd = useMinMdViewport()
  const curtain = minMd && !reduceMotion

  if (!curtain) {
    return (
      <>
        <DetailHero {...heroProps} />
        <div className="relative z-10 w-full overflow-x-hidden bg-surface-50">
          {children}
        </div>
      </>
    )
  }

  return (
    <DetailPageCurtainDesktop heroProps={heroProps}>
      {children}
    </DetailPageCurtainDesktop>
  )
}