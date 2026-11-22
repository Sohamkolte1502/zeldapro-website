import { Seo } from '../components/layout/Seo'
import { ContentSection } from '../components/pages/ContentSection'
import { EnterprisePageHero } from '../components/pages/EnterprisePageHero'
import { company } from '../data'

export default function PrivacyPage() {
  return (
    <>
      <Seo
        title="Privacy"
        description="Draft privacy notice — pending legal review before production."
      />
      <EnterprisePageHero
        title="Privacy notice"
        description="Draft for review. Do not treat as final legal advice."
      />

      <ContentSection title="Draft status">
        <p className="max-w-3xl text-ink-muted">
          This page is a <strong className="font-medium text-brand-950">draft template</strong>{' '}
          for website privacy information. It must be reviewed and approved by qualified
          legal and security stakeholders before production use.
        </p>
      </ContentSection>

      <ContentSection title="Information we may collect" tone="muted">
        <ul className="list-disc space-y-2 pl-5 text-ink-muted">
          <li>Contact details you submit through enquiry or lead forms</li>
          <li>Technical information such as browser type and approximate region</li>
          <li>Communications you send to us in relation to services or support</li>
        </ul>
      </ContentSection>

      <ContentSection title="How information may be used">
        <ul className="list-disc space-y-2 pl-5 text-ink-muted">
          <li>Responding to enterprise enquiries and scheduling follow-up</li>
          <li>Operating and securing the website and related systems</li>
          <li>Compliance with applicable law when required</li>
        </ul>
      </ContentSection>

      <ContentSection title="Contact" tone="muted">
        <p className="text-ink-muted">
          Privacy questions should be directed to the approved business contact once
          confirmed: {company.contact.email}
        </p>
      </ContentSection>
    </>
  )
}