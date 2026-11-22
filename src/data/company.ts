export type CompanyValue = {
  title: string
  description: string
}

export type ApproachStep = {
  slug: string
  title: string
  summary: string
}

export type ContactPlaceholders = {
  /** Replace with registered legal name before production — see BRIEF §10 */
  legalName: string
  /** Replace with verified address before production */
  registeredAddress: string
  /** Replace with approved general enquiries inbox */
  email: string
  /** Replace with approved phone line, if published */
  phone: string
  /** Primary public website */
  website: string
  /** Short line for form and footer context */
  enquiriesNote: string
}

export type CompanyProfile = {
  tagline: string
  positioningLine: string
  vision: string
  mission: string
  values: CompanyValue[]
  approachSteps: ApproachStep[]
  contact: ContactPlaceholders
}

export const company: CompanyProfile = {
  tagline: 'Intelligence. Innovation. Impact.',
  positioningLine: 'Engineering intelligence for a smarter enterprise.',
  vision:
    'A world where enterprises adopt AI and modern engineering with clarity—improving decisions, operations, and experiences without sacrificing trust or accountability.',
  mission:
    '',
  values: [
    {
      title: 'Business-led thinking',
      description:
        'We start with outcomes, users, and operating context. Technology choices follow the problem—not the headline.',
    },
    {
      title: 'Engineering discipline',
      description:
        'Architecture, integration, security, and quality are designed in from the start—not patched in before launch.',
    },
    {
      title: 'Responsible innovation',
      description:
        'We plan for transparency, privacy, human oversight, and lifecycle impact so solutions can be adopted with confidence.',
    },
  ],
  approachSteps: [
    {
      slug: 'discover',
      title: 'Discover',
      summary:
        'Clarify goals, constraints, and stakeholders. Assess readiness, data, and integration landscape before committing to build.',
    },
    {
      slug: 'design',
      title: 'Design',
      summary:
        'Shape target architecture, experiences, and governance. Define what success looks like and how it will be measured.',
    },
    {
      slug: 'engineer',
      title: 'Engineer',
      summary:
        'Deliver in iterative releases with testing, security review, and documentation suited to enterprise operations.',
    },
    {
      slug: 'integrate',
      title: 'Integrate',
      summary:
        'Connect people, processes, and systems. Enable adoption through training, runbooks, and sensible handover.',
    },
    {
      slug: 'evolve',
      title: 'Evolve',
      summary:
        'Monitor performance, refine models and workflows, and extend capabilities as needs and data mature.',
    },
  ],
  contact: {
    legalName: '[Legal entity name — pending confirmation]',
    registeredAddress: '[Registered address — pending confirmation]',
    email: '[enquiries@zeldapro.com — pending confirmation]',
    phone: '[Published phone — optional, pending confirmation]',
    website: 'https://www.zeldapro.com',
    enquiriesNote:
      'For enterprise AI, technology, and software enquiries worldwide.',
  },
}