/** Copy aligned with `docs/reference/innovation.html` — do not paraphrase in UI. */
export const innovationPage = {
  breadcrumb: 'Innovation',
  headline: 'Innovation & R&D',
  subtext: 'Product mindset; ideas to products; Carevie and future offerings.',
  sectionTitle: 'Turn emerging technology into evidence-led decisions.',
  pathTitle: 'A disciplined path to innovation',
  ctaHeading: 'Have an enterprise challenge in mind?',
  ctaButton: 'Start a conversation',
} as const

export type InnovationFocus = {
  title: string
  description: string
}

export const innovationFocusAreas: InnovationFocus[] = [
  {
    title: 'Generative AI & LLMs',
    description: 'Knowledge, copilots, and RAG',
  },
  {
    title: 'Agentic AI',
    description: 'Multi-step workflow orchestration',
  },
  {
    title: 'Machine Learning',
    description: 'Prediction, classification, optimisation',
  },
  {
    title: 'Healthcare AI',
    description: 'Digital health experiences',
  },
  {
    title: 'Intelligent Automation',
    description: 'Process automation and orchestration',
  },
]

export type InnovationPathStep = {
  title: string
  description: string
}

export const innovationPathSteps: InnovationPathStep[] = [
  {
    title: 'Explore',
    description:
      'Clarify goals, constraints, and stakeholders. Assess readiness, data, and integration landscape before committing to build.',
  },
  {
    title: 'Validate',
    description:
      'Shape target architecture, experiences, and governance. Define what success looks like and how it will be measured.',
  },
  {
    title: 'Learn',
    description:
      'Deliver in iterative releases with testing, security review, and documentation suited to enterprise operations.',
  },
  {
    title: 'Industrialise',
    description:
      'Monitor performance, refine models and workflows, and extend capabilities as needs and data mature.',
  },
]