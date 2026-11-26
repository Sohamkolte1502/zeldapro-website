import { motion, useReducedMotion } from 'framer-motion'

const NODES = [
  { x: 50, y: 48, r: 18, label: 'AI' },
  { x: 28, y: 32, r: 10 },
  { x: 72, y: 30, r: 10 },
  { x: 22, y: 62, r: 9 },
  { x: 78, y: 58, r: 9 },
  { x: 38, y: 78, r: 8 },
  { x: 62, y: 76, r: 8 },
] as const

const LINKS = [
  [0, 1],
  [0, 2],
  [0, 3],
  [0, 4],
  [0, 5],
  [0, 6],
  [1, 3],
  [2, 4],
  [5, 6],
] as const

export function HeroIntelligenceScene() {
  const reduceMotion = useReducedMotion()

  return (
    <div className="hero-intelligence-scene relative mx-auto aspect-[4/5] w-full max-w-[26rem] sm:max-w-[28rem] lg:max-w-none lg:aspect-square lg:h-[min(72vh,520px)] lg:w-full">
      <div
        className="pointer-events-none absolute inset-[8%] rounded-[2rem] bg-[radial-gradient(ellipse_70%_60%_at_50%_40%,rgba(167,182,255,0.35),rgba(255,255,255,0)_70%)]"
        aria-hidden
      />
      <div className="hero-intelligence-stage absolute inset-0" aria-hidden>
        <motion.div
          className="hero-glass-plate hero-glass-plate--a"
          animate={reduceMotion ? undefined : { y: [0, -10, 0], rotateX: [8, 12, 8] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="hero-glass-plate hero-glass-plate--b"
          animate={reduceMotion ? undefined : { y: [0, 12, 0], rotateX: [10, 6, 10] }}
          transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="hero-glass-plate hero-glass-plate--c"
          animate={reduceMotion ? undefined : { y: [0, -6, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <svg
        className="absolute inset-0 h-full w-full overflow-visible"
        viewBox="0 0 100 100"
        aria-hidden
      >
        <defs>
          <linearGradient id="hero-link" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#081d29" stopOpacity="0.15" />
          </linearGradient>
          <radialGradient id="hero-core" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.95" />
            <stop offset="55%" stopColor="#0284c7" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#081d29" stopOpacity="0.08" />
          </radialGradient>
        </defs>
        {LINKS.map(([a, b], i) => {
          const na = NODES[a]
          const nb = NODES[b]
          return (
            <motion.line
              key={`${a}-${b}`}
              x1={na.x}
              y1={na.y}
              x2={nb.x}
              y2={nb.y}
              stroke="url(#hero-link)"
              strokeWidth="0.35"
              initial={reduceMotion ? false : { opacity: 0.2 }}
              animate={reduceMotion ? undefined : { opacity: [0.2, 0.55, 0.2] }}
              transition={{
                duration: 4 + i * 0.25,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          )
        })}
        {NODES.map((node, i) => (
          <g key={i}>
            <circle cx={node.x} cy={node.y} r={node.r / 5} fill="url(#hero-core)" opacity={i === 0 ? 1 : 0.85} />
            {!reduceMotion && i > 0 ? (
              <motion.circle
                cx={node.x}
                cy={node.y}
                r={node.r / 4}
                fill="none"
                stroke="#38bdf8"
                strokeWidth="0.2"
                initial={{ opacity: 0.4 }}
                animate={{ opacity: [0.15, 0.45, 0.15], r: [node.r / 4, node.r / 3.2, node.r / 4] }}
                transition={{ duration: 3.5 + i * 0.3, repeat: Infinity }}
              />
            ) : null}
          </g>
        ))}
      </svg>

      {!reduceMotion ? (
        <div className="hero-particles pointer-events-none absolute inset-0" aria-hidden>
          {Array.from({ length: 14 }).map((_, i) => (
            <motion.span
              key={i}
              className="hero-particle"
              style={{
                left: `${12 + ((i * 17) % 76)}%`,
                top: `${18 + ((i * 23) % 62)}%`,
              }}
              animate={{
                y: [0, -16 - (i % 3) * 8, 0],
                opacity: [0.15, 0.55, 0.15],
              }}
              transition={{
                duration: 4 + (i % 4),
                repeat: Infinity,
                ease: 'easeInOut',
                delay: i * 0.15,
              }}
            />
          ))}
        </div>
      ) : null}
    </div>
  )
}