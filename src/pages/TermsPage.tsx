import { Seo } from '../components/layout/Seo'
import { ContentSection } from '../components/pages/ContentSection'
import { EnterprisePageHero } from '../components/pages/EnterprisePageHero'
import { company } from '../data'

export default function TermsPage() {
  return (
    <>
      <Seo
        title="Terms"
        description="Draft website terms — pending legal review before production."
      />
      <EnterprisePageHero
        title="Terms of use"
        description="Draft for review. Do not treat as final legal advice."
      />

      <ContentSection title="Draft status">
        <p className="max-w-3xl text-ink-muted">
          This page is a <strong className="font-medium text-brand-950">draft template</strong>{' '}
          for website terms of use. Legal counsel must review and approve all terms before
          publication.
        </p>
      </ContentSection>

      <ContentSection title="Use of this website" tone="muted">
        <ul className="list-disc space-y-2 pl-5 text-ink-muted">
          <li>Content is provided for general information about Zeldapro services and solutions</li>
          <li>Nothing on this site constitutes a binding offer or professional advice</li>
          <li>You must not misuse the site, attempt unauthorised access, or interfere with its operation</li>
        </ul>
      </ContentSection>

      <ContentSection title="Intellectual property">
        <p className="max-w-3xl text-ink-muted">
          Logos, branding, and site content remain the property of{' '}
          {company.contact.legalName}. Unauthorised copying or redistribution is not
          permitted.
        </p>
      </ContentSection>

      <ContentSection title="Limitation" tone="muted">
        <p className="max-w-3xl text-ink-muted">
          To the extent permitted by law, the site is provided &quot;as is&quot; without
          warranties. Liability limits and governing law will be set out in the
          final legal version of these terms.
        </p>
      </ContentSection>
    </>
  )
}