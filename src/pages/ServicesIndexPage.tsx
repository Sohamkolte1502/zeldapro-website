import { Seo } from '../components/layout/Seo'
import { CategoryIndexBand } from '../components/category/CategoryIndexBand'
import { CategoryPanelList } from '../components/category/CategoryPanelList'
import { Container } from '../components/ui'
import servicesHeroBg from '../assets/services/hero-bg.png'
import { services } from '../data'

const TITLE = 'AI & Technology Services'
const DESCRIPTION =
  'A connected portfolio of advisory, engineering, and transformation services designed around real business outcomes.'

export default function ServicesIndexPage() {
  const items = services.map((s) => ({
    slug: s.slug,
    title: s.title,
    summary: s.summary,
  }))

  return (
    <>
      <Seo title="AI & Technology Services" description={DESCRIPTION} />
      <div className="overflow-x-hidden bg-[#F5F7FA] pb-16 sm:pb-20">
        <CategoryIndexBand
          eyebrow="Services"
          title={TITLE}
          description={DESCRIPTION}
          heroImageSrc={servicesHeroBg}
        />
        <Container className="relative z-10 -mt-10 sm:-mt-12">
          <CategoryPanelList title="Services" items={items} basePath="/services" />
        </Container>
      </div>
    </>
  )
}