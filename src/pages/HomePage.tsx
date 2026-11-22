import { Seo } from '../components/layout/Seo'
import { company } from '../data'
import { ApproachTimeline } from '../sections/ApproachTimeline'
import { FinalCta } from '../sections/FinalCta'
import { HomeHeroCurtain } from '../sections/home/HomeHeroCurtain'
import { InsightsFeature } from '../sections/InsightsFeature'
import { IntroSection } from '../sections/IntroSection'
import { CategoryCards } from '../components/category/CategoryCards'
import { SoftwareInnovationLinks } from '../sections/SoftwareInnovationLinks'
import { CarevieSpotlight } from '../sections/CarevieSpotlight'
import { TechMatrix } from '../sections/TechMatrix'

export default function HomePage() {
  return (
    <>
      <Seo
        title="Home"
        description={company.mission}
      />
      <HomeHeroCurtain>
        <IntroSection />
        <CategoryCards />
        <SoftwareInnovationLinks />
        <CarevieSpotlight />
        <ApproachTimeline />
        <TechMatrix />
        <InsightsFeature />
        <FinalCta />
      </HomeHeroCurtain>
    </>
  )
}
