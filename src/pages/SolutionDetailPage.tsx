import { useParams } from 'react-router-dom'
import { Seo } from '../components/layout/Seo'
import { SolutionDetailTemplate } from '../components/pages/templates/SolutionDetailTemplate'
import { solutionBySlug } from '../data'
import NotFoundPage from './NotFoundPage'

export default function SolutionDetailPage() {
  const { slug } = useParams()
  const solution = slug ? solutionBySlug[slug as keyof typeof solutionBySlug] : undefined

  if (!solution) return <NotFoundPage />

  return (
    <>
      <Seo title={solution.title} description={solution.whatItIs} />
      <SolutionDetailTemplate solution={solution} />
    </>
  )
}