import { useId } from 'react'
import { Container } from '../ui'

export type PageHeaderBandProps = {
  eyebrow: string
  title: string
  description: string
  backgroundImage?: string
}

function BandBackground({
  id,
  backgroundImage,
}: {
  id: string
  backgroundImage?: string
}) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {backgroundImage ? (
        <img
          src={backgroundImage}
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-[center_40%]"
          width={1920}
          height={1080}
          decoding="async"
        />
      ) : null}
      <div
        className={
          backgroundImage
            ? 'absolute inset-0 bg-gradient-to-b from-brand-950/85 via-brand-950/75 to-brand-950/90'
            : 'absolute inset-0 bg-gradient-to-b from-brand-950 via-brand-900/95 to-brand-950'
        }
      />
      {!backgroundImage ? (
        <svg
          className="absolute inset-0 h-full w-full opacity-[0.45]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id={`${id}-grid`}
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="#38bdf8"
                strokeOpacity="0.22"
                strokeWidth="0.75"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill={`url(#${id}-grid)`} />
          <path
            d="M-20 120 Q200 40 420 100 T900 60"
            fill="none"
            stroke="#0ea5e9"
            strokeOpacity="0.35"
            strokeWidth="1"
          />
          <circle cx="12%" cy="28%" r="2.5" fill="#38bdf8" fillOpacity="0.55" />
          <circle cx="78%" cy="22%" r="2" fill="#38bdf8" fillOpacity="0.4" />
        </svg>
      ) : null}
    </div>
  )
}

export function PageHeaderBand({
  eyebrow,
  title,
  description,
  backgroundImage,
}: PageHeaderBandProps) {
  const bgId = useId().replace(/:/g, '')

  return (
    <section className="dark-surface relative h-[280px] bg-brand-950 text-on-dark">
      <BandBackground id={bgId} backgroundImage={backgroundImage} />
      <Container className="relative z-10 flex h-full flex-col justify-end pb-10 sm:pb-12">
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-electric-400">
          {eyebrow}
        </p>
        <h1 className="mt-2 max-w-3xl text-3xl text-on-dark sm:text-4xl">{title}</h1>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-on-dark-muted sm:text-base">
          {description}
        </p>
      </Container>
    </section>
  )
}