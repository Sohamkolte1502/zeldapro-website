import { useParams } from 'react-router-dom'
import { Seo } from '../components/layout/Seo'
import { ServiceDetailTemplate } from '../components/pages/templates/ServiceDetailTemplate'
import { serviceBySlug } from '../data'
import NotFoundPage from './NotFoundPage'

export default function ServiceDetailPage() {
  const { slug } = useParams()
  const service = slug ? serviceBySlug[slug as keyof typeof serviceBySlug] : undefined

  if (!service) return <NotFoundPage />

  return (
    <>
      <Seo title={service.title} description={service.summary} />
      <ServiceDetailTemplate service={service} />
    </>
  )
}