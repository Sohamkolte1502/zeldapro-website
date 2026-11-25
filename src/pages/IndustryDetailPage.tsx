import { useParams } from 'react-router-dom'
import { Seo } from '../components/layout/Seo'
import { IndustryDetailTemplate } from '../components/pages/templates/IndustryDetailTemplate'
import { industryBySlug } from '../data'
import NotFoundPage from './NotFoundPage'

export default function IndustryDetailPage() {
  const { slug } = useParams()
  const industry = slug ? industryBySlug[slug as keyof typeof industryBySlug] : undefined

  if (!industry) return <NotFoundPage />

  return (
    <>
      <Seo
        title={industry.title}
        description={industry.overview.paragraphs[0]}
      />
      <IndustryDetailTemplate industry={industry} />
    </>
  )
}