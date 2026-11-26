import clsx from 'clsx'
import { Link } from 'react-router-dom'
import { HomeCapabilityCard } from '../../components/home/HomeCapabilityCard'
import { HomeHorizontalScroll } from '../../components/home/HomeHorizontalScroll'
import { HomeSectionShell } from '../../components/home/HomeSectionShell'
import {
  homeSolutionsGrid,
  homeSolutionsGridCopy,
} from '../../data/homeSolutionsGrid'

export function HomeSolutionsSection() {
  return (
    <HomeSectionShell
      id="ai-solutions"
      eyebrow={homeSolutionsGridCopy.eyebrow}
      title={homeSolutionsGridCopy.heading}
      description={homeSolutionsGridCopy.subline}
      texture
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
      <HomeHorizontalScroll aria-label="AI solution patterns">
        {homeSolutionsGrid.map((card, index) => (
          <li
            key={card.slug}
            className={clsx(
              'shrink-0 snap-start',
              index === 0
                ? 'w-[min(92vw,26rem)] sm:w-[28rem]'
                : 'w-[min(85vw,20rem)] sm:w-[22rem]',
            )}
          >
            <HomeCapabilityCard
              as="div"
              href={card.href}
              title={card.title}
              description={card.description}
              icon={card.icon}
              index={index}
              variant={index === 0 ? 'featured' : 'default'}
            />
          </li>
        ))}
      </HomeHorizontalScroll>
    </HomeSectionShell>
  )
}