import clsx from 'clsx'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { getSolutionHeroImage } from '../../components/pages/detail/solutionHeroImages'
import { HomeSectionShell } from '../../components/home/HomeSectionShell'
import {
  homeSolutionsGrid,
  homeSolutionsGridCopy,
} from '../../data/homeSolutionsGrid'

const ease = [0.22, 1, 0.36, 1] as const

export function HomeSolutionsSection() {
  const reduceMotion = useReducedMotion()

  return (
    <HomeSectionShell
      id="ai-solutions"
      eyebrow={homeSolutionsGridCopy.eyebrow}
      title={homeSolutionsGridCopy.heading}
      description={homeSolutionsGridCopy.subline}
      variant="muted"
      density="compact"
      tone="solutions"
      action={
        <Link
          to={homeSolutionsGridCopy.viewAllHref}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-electric-600 transition-colors hover:text-electric-500"
        >
          {homeSolutionsGridCopy.viewAllLabel}
          <span aria-hidden>→</span>
        </Link>
      }
    >
      <ul className="space-y-5">
        {homeSolutionsGrid.map((item, index) => {
          const image = getSolutionHeroImage(item.slug)
          const reversed = index % 2 === 1
          const Icon = item.icon

          return (
            <motion.li
              key={item.slug}
              initial={reduceMotion ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: index * 0.04, ease }}
            >
              <Link
                to={item.href}
                className={clsx(
                  'group grid overflow-hidden rounded-2xl border border-line bg-white shadow-sm transition-[box-shadow,border-color] duration-300 hover:border-electric-500/35 hover:shadow-lg',
                  'lg:grid-cols-2 lg:min-h-[14.5rem]',
                )}
              >
                <div
                  className={clsx(
                    'relative min-h-[11rem] overflow-hidden lg:min-h-full',
                    reversed ? 'lg:order-2' : 'lg:order-1',
                  )}
                >
                  {image ? (
                    <img
                      src={image}
                      alt=""
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03] motion-reduce:transform-none"
                      loading="lazy"
                      decoding="async"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-[linear-gradient(135deg,#e2ebf5_0%,#b8d4ee_100%)]" />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-950/55 via-brand-950/10 to-transparent lg:bg-gradient-to-r lg:from-brand-950/50 lg:via-transparent lg:to-transparent" />
                </div>
                <div
                  className={clsx(
                    'flex flex-col justify-center p-6 sm:p-8',
                    reversed ? 'lg:order-1' : 'lg:order-2',
                  )}
                >
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-electric-600/10 text-electric-600 transition-colors group-hover:bg-electric-600 group-hover:text-white">
                    <Icon size={20} aria-hidden />
                  </span>
                  <h3 className="mt-4 font-heading text-xl text-brand-950 sm:text-2xl">
                    {item.title}
                  </h3>
                  <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-ink-muted sm:text-base">
                    {item.description}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-electric-600">
                    Explore solution
                    <ArrowUpRight
                      size={16}
                      className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      aria-hidden
                    />
                  </span>
                </div>
              </Link>
            </motion.li>
          )
        })}
      </ul>
    </HomeSectionShell>
  )
}