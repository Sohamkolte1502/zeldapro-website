import clsx from 'clsx'
import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { HomeSectionShell } from '../../components/home/HomeSectionShell'
import { Reveal } from '../../components/ui'
import {
  homeIndustriesGrid,
  homeIndustriesGridCopy,
} from '../../data/homeIndustriesGrid'

export function HomeIndustriesSection() {
  return (
    <HomeSectionShell
      id="industries"
      eyebrow={homeIndustriesGridCopy.eyebrow}
      title={homeIndustriesGridCopy.heading}
      description={homeIndustriesGridCopy.subline}
      variant="muted"
      action={
        <Link
          to={homeIndustriesGridCopy.viewAllHref}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-electric-600 transition-colors hover:text-electric-500"
        >
          {homeIndustriesGridCopy.viewAllLabel}
          <span aria-hidden>→</span>
        </Link>
      }
    >
      <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">
        {homeIndustriesGrid.map((item, index) => (
          <li key={item.slug} className="list-none">
            <Reveal delay={index * 0.03}>
              <Link
                to={item.href}
                className={clsx(
                  'group flex h-full flex-col rounded-xl border border-line bg-white p-5 shadow-sm',
                  'transition-[border-color,box-shadow,transform] duration-300',
                  'hover:-translate-y-0.5 hover:border-electric-500/35 hover:shadow-md',
                  'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric-600',
                  'motion-reduce:transition-none motion-reduce:hover:translate-y-0',
                )}
              >
                <span className="flex items-start justify-between gap-2">
                  <h3 className="text-base font-semibold text-brand-950">
                    {item.title}
                  </h3>
                  <ArrowUpRight
                    size={16}
                    className="shrink-0 text-electric-600 opacity-0 transition-opacity group-hover:opacity-100 motion-reduce:opacity-80"
                    aria-hidden
                  />
                </span>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-muted line-clamp-3">
                  {item.summary}
                </p>
              </Link>
            </Reveal>
          </li>
        ))}
      </ul>
    </HomeSectionShell>
  )
}