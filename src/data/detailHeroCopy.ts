/**
 * TCS-style detail page hero copy (headline + short description).
 * Breadcrumb name comes from each item's `title` in industries / services / solutions data.
 */
export type DetailHeroCopy = {
  headline: string
  description: string
}

export const detailHeroCopyBySlug: Record<string, DetailHeroCopy> = {
  // Industries
  'healthcare-life-sciences': {
    headline: 'Connected care, clearer data',
    description:
      'We help you unify clinical and operational data across EHR, labs, and ancillary systems.',
  },
  'banking-financial-services': {
    headline: 'Faster, compliant finance',
    description:
      'We help you streamline document-heavy processes without losing compliance checkpoints.',
  },
  'manufacturing-industrial': {
    headline: 'Operations that keep running',
    description:
      'We help you reduce unplanned downtime and protect schedules and customer commitments.',
  },
  'logistics-supply-chain': {
    headline: 'Resilient supply chains',
    description:
      'We help you respond to volatile demand and disruption across lanes and suppliers.',
  },
  'retail-consumer': {
    headline: 'One view of every customer',
    description:
      'We help you connect customer data across ecommerce, stores, and loyalty.',
  },
  'energy-utilities': {
    headline: 'Smarter assets, safer fields',
    description:
      'We help you manage ageing assets and a dispersed field workforce.',
  },
  'technology-telecom': {
    headline: 'Faster cycles, less technical debt',
    description:
      'We help you modernise billing and provisioning stacks without slowing delivery.',
  },
  'public-sector-education': {
    headline: 'Transparent, efficient delivery',
    description:
      'We help you meet procurement and transparency requirements without lengthening delivery.',
  },
  // AI solutions
  'enterprise-generative-ai': {
    headline: 'Generative AI on your own data',
    description:
      'Language-model experiences that answer, summarise, and draft from your approved sources.',
  },
  'agentic-workflow-systems': {
    headline: 'Workflows that act within limits',
    description:
      'Software that plans multi-step tasks with approved tools and escalates when policy requires.',
  },
  'predictive-decision-intelligence': {
    headline: "See what's next, decide earlier",
    description:
      'Forecasts and options that help planners act sooner, with uncertainty in view.',
  },
  'computer-vision': {
    headline: 'Systems that see and flag',
    description:
      'Software that classifies, measures, and flags conditions from images and video.',
  },
  'industrial-iot-intelligence': {
    headline: 'Spot issues before downtime',
    description:
      'One view of connected assets, combining telemetry, events, and enterprise context.',
  },
  'ai-enabled-digital-products': {
    headline: 'Intelligence built into the journey',
    description:
      'Customer and employee products with AI embedded in core journeys, not bolted on.',
  },
  // Services
  'ai-strategy-consulting': {
    headline: 'AI strategy you can execute',
    description:
      'We align AI investment with business priorities through readiness, use cases, and architecture.',
  },
  'generative-agentic-ai-engineering': {
    headline: 'Engineering enterprise AI',
    description:
      'We build assistants, grounded applications, and agentic workflows with the right controls.',
  },
  'data-engineering-analytics': {
    headline: 'Data you can trust',
    description:
      'We build pipelines and analytics foundations that support reporting, ML, and daily decisions.',
  },
  'application-platform-development': {
    headline: 'Software built to last',
    description:
      'Custom software, APIs, and platforms engineered for security, integration, and long-term change.',
  },
  'cloud-devops-platform-engineering': {
    headline: 'Ship faster, stay stable',
    description:
      'Reliable delivery pipelines and cloud foundations, so teams release often without risking security.',
  },
  'iot-iiot-digital-systems': {
    headline: 'Connected systems, full visibility',
    description:
      'We link devices, edge environments, and enterprise systems into coherent monitoring and control.',
  },
  'cybersecurity-trust-engineering': {
    headline: 'Security built in, not bolted on',
    description:
      'We embed security architecture, secure development, and AI risk controls into programmes.',
  },
  'digital-transformation': {
    headline: 'Change that sticks',
    description:
      'We redesign how work flows across teams and systems, with automation and enablement.',
  },
  'managed-technology-support': {
    headline: 'A partner, not a ticket desk',
    description:
      'We sustain and improve live applications and platforms through structured support.',
  },
}

export function getDetailHeroCopy(slug: string): DetailHeroCopy {
  return (
    detailHeroCopyBySlug[slug] ?? {
      headline: '',
      description: '',
    }
  )
}