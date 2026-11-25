import { useMemo } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import { ContactBanner } from '../components/contact/ContactBanner'
import { ContactForm } from '../components/contact/ContactForm'
import { Seo } from '../components/layout/Seo'
import { Container } from '../components/ui'
import { contactTopicBySlug } from '../data/contactTopics'
import { CareersTopicLayout } from '../sections/contact/CareersTopicLayout'
import NotFoundPage from './NotFoundPage'

export default function ContactTopicPage() {
  const { topic: topicSlug } = useParams()
  const [searchParams] = useSearchParams()
  const topic = topicSlug ? contactTopicBySlug(topicSlug) : undefined
  const serviceFromQuery = searchParams.get('service') ?? undefined

  const initialService = useMemo(() => serviceFromQuery, [serviceFromQuery])

  if (!topic) return <NotFoundPage />

  const isCareers = topic.slug === 'careers'

  if (isCareers) {
    return (
      <>
        <Seo title="Careers" description={topic.intro} />
        <CareersTopicLayout topic={topic} />
      </>
    )
  }

  return (
    <>
      <Seo
        title={`Contact — ${topic.title}`}
        description={topic.intro}
      />
      <ContactBanner
        variant="gradient"
        breadcrumbCurrent={topic.title}
        heading={
          <h1 className="font-heading text-3xl text-on-dark sm:text-4xl lg:text-5xl">
            {topic.title}
          </h1>
        }
      />

      <section className="bg-surface-100 py-12 sm:py-16">
        <Container>
          <header className="max-w-3xl">
            <h2 className="font-heading text-2xl text-brand-950 sm:text-3xl lg:text-4xl">
              {topic.title}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-muted sm:text-base">
              {topic.intro}
            </p>
            <p className="mt-4 text-xs text-ink-subtle sm:text-sm">
              All fields marked with * are required.
            </p>
          </header>

          <div className="mt-10">
            <ContactForm topic={topic} initialServiceSlug={initialService} />
          </div>
        </Container>
      </section>
    </>
  )
}