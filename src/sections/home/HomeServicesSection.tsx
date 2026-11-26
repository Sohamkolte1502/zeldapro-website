import { Link } from 'react-router-dom'
import { HomeCapabilityCard } from '../../components/home/HomeCapabilityCard'
import { HomeSectionShell } from '../../components/home/HomeSectionShell'
import {
  homeServicesGrid,
  homeServicesGridCopy,
} from '../../data/homeServicesGrid'

export function HomeServicesSection() {
  return (
    <HomeSectionShell
      id="what-we-do"
      eyebrow={homeServicesGridCopy.eyebrow}
      title={homeServicesGridCopy.heading}
      description={homeServicesGridCopy.subline}
      variant="muted"
      texture
      action={
        <Link
          to={homeServicesGridCopy.viewAllHref}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-electric-600 transition-colors hover:text-electric-500"
        >
          {homeServicesGridCopy.viewAllLabel}
          <span aria-hidden>→</span>
        </Link>
      }
    >
      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-12">
        {homeServicesGrid.map((card, index) => (
          <HomeCapabilityCard
            key={card.slug}
            href={card.href}
            title={card.title}
            description={card.description}
            icon={card.icon}
            index={index}
            variant={card.featured ? 'featured' : 'default'}
            className={card.bentoClass}
          />
        ))}
      </ul>
    </HomeSectionShell>
  )
}