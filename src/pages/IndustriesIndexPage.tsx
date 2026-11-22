import { Seo } from '../components/layout/Seo'
import { CategoryPanelList } from '../components/category/CategoryPanelList'
import { PageHeaderBand } from '../components/category/PageHeaderBand'
import { Container } from '../components/ui'
import industriesHeader from '../assets/headers/industries.webp'
import { industries } from '../data'

const TITLE = 'Industries'
const DESCRIPTION =
  'We apply AI and modern engineering to the challenges that matter across complex, data-rich industries.'

export default function IndustriesIndexPage() {
  const items = industries.map((i) => ({
    slug: i.slug,
    title: i.title,
    summary: i.challenges[0],
  }))

  return (
    <>
      <Seo
        title="Industries"
        description="Domain understanding. Technology that moves business forward."
      />
      <div className="overflow-x-hidden bg-[#F5F7FA] pb-16 sm:pb-20">
        <PageHeaderBand
          eyebrow="Industries"
          title={TITLE}
          description={DESCRIPTION}
          backgroundImage={industriesHeader}
        />
        <Container className="relative z-10 -mt-10 sm:-mt-12">
          <CategoryPanelList
            title="Industries"
            items={items}
            basePath="/industries"
          />
        </Container>
      </div>
    </>
  )
}