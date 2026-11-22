import clsx from 'clsx'
import { useReducedMotion } from 'framer-motion'
import { type ReactNode, useState } from 'react'
import { HERO_POSTER_SRC, HERO_VIDEO_SRC } from '../../config/heroMedia'
import { Container } from '../ui'
import { ContactBreadcrumb } from './ContactBreadcrumb'

type ContactBannerProps = {
  variant: 'media' | 'gradient'
  heading: ReactNode
  breadcrumbLinkHub?: boolean
  className?: string
}

export function ContactBanner({
  variant,
  heading,
  breadcrumbLinkHub = true,
  className,
}: ContactBannerProps) {
  const reduceMotion = useReducedMotion()
  const [videoFailed, setVideoFailed] = useState(false)
  const showVideo = variant === 'media' && !reduceMotion && !videoFailed

  return (
    <section
      className={clsx(
        'dark-surface relative px-4 pt-24 pb-6 sm:px-6 sm:pt-28 lg:pt-32',
        className,
      )}
    >
      <Container>
        <div
          className={clsx(
            'relative min-h-[clamp(16rem,42vw,22rem)] overflow-hidden rounded-3xl',
            'shadow-[0_20px_50px_rgb(8_29_41/0.25)]',
          )}
        >
          {variant === 'media' ? (
            <div className="absolute inset-0" aria-hidden>
              {showVideo ? (
                <video
                  className="absolute inset-0 h-full w-full object-cover object-center"
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
                  className="absolute inset-0 h-full w-full object-cover object-center"
                />
              )}
              <div className="absolute inset-0 bg-brand-950/75" />
              <div className="absolute inset-0 bg-gradient-to-br from-brand-950/90 via-brand-950/60 to-electric-600/25" />
            </div>
          ) : (
            <div
              className="absolute inset-0 bg-gradient-to-br from-brand-950 via-brand-800 to-electric-600/80"
              aria-hidden
            />
          )}

          <div className="relative flex h-full min-h-[inherit] flex-col justify-between p-6 sm:p-10 lg:p-12">
            <ContactBreadcrumb linkHub={breadcrumbLinkHub} />
            <div className="flex flex-1 flex-col items-center justify-center py-8 text-center sm:py-10">
              {heading}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}