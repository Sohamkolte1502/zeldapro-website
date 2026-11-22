import type { CSSProperties, HTMLAttributes } from 'react'

export type GhostFibersGradient = 'depth' | 'along' | 'across'
export type GhostFibersFiberStyle = 'dots' | 'dashes' | 'lines'
export type GhostFibersHoverEffect = 'focus' | 'part' | 'none'

export interface GhostFibersProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
  glowColor?: string
  lineColor?: string
  secondaryColor?: string
  gradient?: GhostFibersGradient | number
  speed?: number
  scale?: number
  rotation?: number
  rollSpeed?: number
  layers?: number
  waves?: number
  twist?: number
  threads?: number
  volume?: number
  spread?: number
  density?: number
  thickness?: number
  flow?: number
  fiberStyle?: GhostFibersFiberStyle | string
  tips?: number
  foldGlow?: number
  perspective?: number
  depthOfField?: number
  focusDepth?: number
  particles?: number
  sparkle?: number
  glow?: number
  brightness?: number
  vignette?: number
  grain?: number
  mouseInteraction?: boolean
  hoverEffect?: GhostFibersHoverEffect | string
  mouseStrength?: number
  pulseOnClick?: boolean
  intro?: boolean
  lightMode?: boolean
  paused?: boolean
  dpr?: number
  className?: string
  style?: CSSProperties
}

import type { FC } from 'react'

declare const GhostFibers: FC<GhostFibersProps>
export default GhostFibers