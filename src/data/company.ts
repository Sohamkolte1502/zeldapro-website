export type CompanyValue = {
  title: string
  description: string
}

export type ApproachStep = {
  slug: string
  title: string
  summary: string
}

/** Footer / legal contact line — link when `href` is set */
export type ContactHref = {
  label: string
  href: string | null
}

export type SocialContactHref = ContactHref & {
  label: 'LinkedIn' | 'X' | 'YouTube'
}

export type ContactPlaceholders = {
  /** Replace with registered legal name before production — see BRIEF §10 */
  legalName: string
  /** Replace with verified address before production */
  registeredAddress: string
  /** Approved general enquiries inbox — enable mailto when confirmed */
  email: ContactHref
  /** Published phone line — enable tel: when confirmed */
  phone: ContactHref
  /** Primary public website */
  website: ContactHref
  /** Org social profiles — replace placeholder hrefs when URLs are approved */
  social: SocialContactHref[]
  /** Short line for form and footer context */
  enquiriesNote: string
}

/** Industries shown under footer “Industries & contact” (before full directory link). */
export const footerIndustrySlugs = [
  'healthcare-life-sciences',
  'banking-financial-services',
  'manufacturing-industrial',
  'logistics-supply-chain',
] as const

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
    'We partner with ambitious enterprises to turn AI opportunity into practical advantage—through strategy, secure engineering, and products teams can adopt with confidence.',
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
    email: {
      label: 'enquiries@zeldapro.com',
      href: 'mailto:enquiries@zeldapro.com',
    },
    phone: {
      label: '+91 7506 000 000',
      href: 'tel:+917506000000',
    },
    website: {
      label: 'https://www.zeldapro.com',
      href: 'https://www.zeldapro.com',
    },
    social: [
      {
        label: 'LinkedIn',
        // TODO: Add org-approved LinkedIn company URL (e.g. https://www.linkedin.com/company/…).
        href: null,
      },
      {
        label: 'X',
        // TODO: Add org-approved X profile URL when ready.
        href: null,
      },
      {
        label: 'YouTube',
        // TODO: Add org-approved YouTube channel URL (e.g. https://www.youtube.com/@…).
        href: null,
      },
    ],
    enquiriesNote:
      'For enterprise AI, technology, and software enquiries worldwide.',
  },
}