import { motion, useReducedMotion } from 'framer-motion'

/** Light network motif — inspired by MotionSites “network hero”, adapted for enterprise light UI. */
export function HeroAmbientNetwork() {
  const reduceMotion = useReducedMotion()

  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full text-electric-500/25"
      viewBox="0 0 1200 800"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden
    >
      <defs>
        <linearGradient id="net-fade" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgb(14 165 233 / 0.12)" />
          <stop offset="55%" stopColor="rgb(14 165 233 / 0.04)" />
          <stop offset="100%" stopColor="rgb(8 29 41 / 0)" />
        </linearGradient>
      </defs>
      <rect width="1200" height="800" fill="url(#net-fade)" />
      <g stroke="currentColor" strokeWidth="0.75" fill="none" opacity="0.55">
        <path d="M120 420 L320 280 L520 360 L720 240 L920 320 L1080 200" />
        <path d="M80 560 L280 480 L480 520 L680 400 L880 460 L1100 380" />
        <path d="M200 680 L400 600 L600 640 L800 520 L1000 580" />
      </g>
      {[
        [320, 280],
        [520, 360],
        [720, 240],
        [480, 520],
        [680, 400],
        [880, 460],
      ].map(([cx, cy], i) => (
        <g key={i}>
          <circle cx={cx} cy={cy} r="4" fill="rgb(2 132 199 / 0.35)" />
          {!reduceMotion ? (
            <motion.circle
              cx={cx}
              cy={cy}
              r="14"
              fill="none"
              stroke="rgb(2 132 199 / 0.25)"
              strokeWidth="1"
              initial={{ opacity: 0.5, scale: 0.85 }}
              animate={{ opacity: [0.35, 0.12, 0.35], scale: [0.85, 1.15, 0.85] }}
              transition={{
                duration: 5 + i * 0.4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          ) : null}
        </g>
      ))}
    </svg>
  )
}