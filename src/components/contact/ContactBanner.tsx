import clsx from 'clsx'
import { type ReactNode } from 'react'
import heroBg from '../../assets/hero.png'
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
  return (
    <section
      className={clsx(
        'dark-surface relative px-4 pb-6 pt-6 sm:px-6 sm:pt-8',
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
              <img
                src={heroBg}
                alt=""
                className="absolute inset-0 h-full w-full object-cover object-center"
              />
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