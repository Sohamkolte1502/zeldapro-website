import clsx from 'clsx'
import type { CategoryKey } from './types'

type CategoryCardArtProps = {
  category: CategoryKey
  className?: string
}

export function CategoryCardArt({ category, className }: CategoryCardArtProps) {
  return (
    <div
      className={clsx(
        'relative h-full w-full overflow-hidden bg-brand-950',
        className,
      )}
      aria-hidden
    >
      <svg
        viewBox="0 0 640 400"
        className="h-full w-full"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id={`grad-${category}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#081d29" />
            <stop offset="55%" stopColor="#0a2433" />
            <stop offset="100%" stopColor="#0284c7" stopOpacity="0.85" />
          </linearGradient>
        </defs>
        <rect width="640" height="400" fill={`url(#grad-${category})`} />
        {category === 'services' ? (
          <>
            <path
              d="M-40 320 Q160 180 360 280 T720 200"
              fill="none"
              stroke="#38bdf8"
              strokeWidth="1.5"
              opacity="0.5"
            />
            <circle cx="120" cy="120" r="60" fill="#0ea5e9" opacity="0.15" />
            <circle cx="480" cy="260" r="90" fill="#38bdf8" opacity="0.12" />
            <rect
              x="200"
              y="80"
              width="240"
              height="140"
              rx="12"
              fill="none"
              stroke="#7dd3fc"
              strokeWidth="1.2"
              opacity="0.35"
            />
          </>
        ) : null}
        {category === 'solutions' ? (
          <>
            <path
              d="M80 200 L200 120 L320 200 L440 100 L560 180"
              fill="none"
              stroke="#38bdf8"
              strokeWidth="2"
              opacity="0.55"
            />
            {[200, 320, 440].map((x) => (
              <circle
                key={x}
                cx={x}
                cy={x === 320 ? 200 : 120}
                r="6"
                fill="#38bdf8"
              />
            ))}
            <path
              d="M40 340 Q320 260 600 360"
              fill="none"
              stroke="#0ea5e9"
              strokeWidth="1"
              opacity="0.4"
            />
          </>
        ) : null}
        {category === 'industries' ? (
          <>
            <g opacity="0.45" stroke="#7dd3fc" strokeWidth="1.2" fill="none">
              <rect x="100" y="60" width="140" height="100" rx="8" />
              <rect x="280" y="120" width="140" height="100" rx="8" />
              <rect x="400" y="40" width="140" height="100" rx="8" />
            </g>
            <circle cx="320" cy="300" r="70" fill="#0ea5e9" opacity="0.18" />
            <path
              d="M0 380 H640"
              stroke="#38bdf8"
              strokeWidth="1"
              opacity="0.3"
            />
          </>
        ) : null}
      </svg>
    </div>
  )
}