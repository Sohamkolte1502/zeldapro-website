import { Seo } from '../components/layout/Seo'
import { company } from '../data'
import { SHOW_INSIGHTS } from '../data/homePage'
import { ApproachTimeline } from '../sections/ApproachTimeline'
import { FinalCta } from '../sections/FinalCta'
import { CarevieSpotlight } from '../sections/CarevieSpotlight'
import { IntroSection } from '../sections/IntroSection'
import { InsightsFeature } from '../sections/InsightsFeature'
import { HomeHeroCurtain } from '../sections/home/HomeHeroCurtain'
import { HomeIndustriesSection } from '../sections/home/HomeIndustriesSection'
import { HomeServicesSection } from '../sections/home/HomeServicesSection'
import { HomeSolutionsSection } from '../sections/home/HomeSolutionsSection'

export default function HomePage() {
  return (
    <>
      <Seo title="Home" description={company.mission} />
      <HomeHeroCurtain>
        <IntroSection />
        <HomeServicesSection />
        <HomeSolutionsSection />
        <HomeIndustriesSection />
        <CarevieSpotlight />
        <ApproachTimeline />
        {SHOW_INSIGHTS ? <InsightsFeature /> : null}
        <FinalCta />
      </HomeHeroCurtain>
    </>
  )
}