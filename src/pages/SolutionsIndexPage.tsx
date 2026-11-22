import { Seo } from '../components/layout/Seo'
import { CategoryPanelList } from '../components/category/CategoryPanelList'
import { PageHeaderBand } from '../components/category/PageHeaderBand'
import { Container } from '../components/ui'
import aiSolutionsHeader from '../assets/headers/ai-solutions.avif'
import { solutions } from '../data'

const TITLE = 'AI Solutions'
const DESCRIPTION =
  'Adaptable AI capabilities shaped to your data, workflows, and operating environment.'

export default function SolutionsIndexPage() {
  const items = solutions.map((s) => ({
    slug: s.slug,
    title: s.title,
    summary: s.whatItIs,
  }))

  return (
    <>
      <Seo
        title="AI Solutions"
        description="Intelligence built around the way your business works."
      />
      <div className="overflow-x-hidden bg-[#F5F7FA] pb-16 sm:pb-20">
        <PageHeaderBand
          eyebrow="AI Solutions"
          title={TITLE}
          description={DESCRIPTION}
          backgroundImage={aiSolutionsHeader}
        />
        <Container className="relative z-10 -mt-10 sm:-mt-12">
          <CategoryPanelList
            title="AI Solutions"
            items={items}
            basePath="/ai-solutions"
          />
        </Container>
      </div>
    </>
  )
}