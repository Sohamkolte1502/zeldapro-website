import {
  Component,
  lazy,
  Suspense,
  useEffect,
  useMemo,
  useState,
  type ErrorInfo,
  type ReactNode,
} from 'react'
import type { GhostFibersProps } from '../components/GhostFibers'

const GhostFibers = lazy(() => import('../components/GhostFibers.jsx'))

function canUseWebGL2(): boolean {
  try {
    const canvas = document.createElement('canvas')
    return !!canvas.getContext('webgl2')
  } catch {
    return false
  }
}

function useNarrowViewport() {
  const [narrow, setNarrow] = useState(false)
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 767px)')
    const sync = () => setNarrow(mq.matches)
    sync()
    mq.addEventListener('change', sync)
    return () => mq.removeEventListener('change', sync)
  }, [])
  return narrow
}

function fibersConfig(narrow: boolean): GhostFibersProps {
  return {
    glowColor: '#168bff',
    lineColor: '#d2402d',
    secondaryColor: '#123f82',
    layers: narrow ? 2 : 3,
    twist: 1.2,
    threads: narrow ? 30 : 60,
    fiberStyle: 'dots',
    depthOfField: 0.65,
    hoverEffect: 'focus',
    intro: true,
    mouseInteraction: !narrow,
    foldGlow: 0.7,
    speed: 0.3,
    particles: narrow ? 0.15 : 0.3,
    sparkle: 0.25,
    glow: 0.65,
    brightness: 0.9,
    grain: 0.03,
    mouseStrength: 0.5,
    className: 'h-full w-full',
  }
}

class FibersErrorBoundary extends Component<
  { children: ReactNode },
  { failed: boolean }
> {
  state = { failed: false }

  static getDerivedStateFromError() {
    return { failed: true }
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    if (import.meta.env.DEV) {
      console.warn('[HeroFibersLayer]', error.message, info.componentStack)
    }
  }

  render() {
    if (this.state.failed) return null
    return this.props.children
  }
}

type HeroFibersLayerProps = {
  paused?: boolean
}

export function HeroFibersLayer({ paused = false }: HeroFibersLayerProps) {
  const narrow = useNarrowViewport()
  const [webglOk, setWebglOk] = useState(false)

  useEffect(() => {
    setWebglOk(canUseWebGL2())
  }, [])

  const props = useMemo(() => fibersConfig(narrow), [narrow])

  if (!webglOk) return null

  return (
    <FibersErrorBoundary>
      <Suspense fallback={null}>
        <GhostFibers {...props} paused={paused} />
      </Suspense>
    </FibersErrorBoundary>
  )
}