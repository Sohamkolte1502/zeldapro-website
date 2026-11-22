import { Seo } from '../components/layout/Seo'
import { ContactBanner } from '../components/contact/ContactBanner'
import { ContactTopicLink } from '../components/contact/ContactTopicLink'
import { Container } from '../components/ui'
import { contactTopics } from '../data/contactTopics'

export default function ContactPage() {
  return (
    <>
      <Seo
        title="Contact"
        description="Choose how you would like to connect with Zeldapro for enterprise AI, technology, and software enquiries."
      />
      <ContactBanner
        variant="media"
        breadcrumbLinkHub={false}
        heading={
          <h1 className="max-w-3xl font-heading text-3xl text-on-dark sm:text-4xl lg:text-5xl">
            How can we help you?
          </h1>
        }
      />

      <section className="bg-surface-0 py-14 sm:py-16 lg:py-20">
        <Container className="max-w-5xl">
          <div className="text-center">
            <h2 className="font-heading text-2xl text-brand-950 sm:text-3xl">
              I&apos;m Looking For
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-ink-muted sm:text-base">
              Select your area of interest below. A Zeldapro representative will
              get in touch after receiving your request.
            </p>
          </div>

          <ul className="mt-12 grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
            {contactTopics.map((topic) => (
              <li key={topic.slug}>
                <ContactTopicLink topic={topic} />
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </>
  )
}