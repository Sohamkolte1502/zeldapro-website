import type { Service } from './services'

export type Solution = {
  slug: string
  title: string
  whatItIs: string
  howItWorks: string
  problemsSolved: string[]
  useCases: string[]
  benefits: string[]
  /** Industry slugs where this pattern commonly applies */
  industries: string[]
  /** Related service slugs for delivery */
  relatedServiceSlugs: Service['slug'][]
}

export const solutions: Solution[] = [
  {
    slug: 'enterprise-generative-ai',
    title: 'Enterprise Generative AI',
    whatItIs:
      'Controlled language-model experiences that answer questions, summarise material, and draft content using your approved sources—not the open internet.',
    howItWorks:
      'We connect models to enterprise content through retrieval, access rules, and logging. Responses are grounded where possible; sensitive topics route to human review. Integrations bring answers into the tools people already use.',
    problemsSolved: [
      'Staff spend hours searching fragmented knowledge bases',
      'Inconsistent answers to customers and partners',
      'Drafting and summarisation work duplicated across teams',
      'Early pilots that cannot enforce confidentiality',
    ],
    useCases: [
      'Policy and procedure Q&A for operations and compliance teams',
      'Technical documentation search with citation to source pages',
      'Meeting and ticket summarisation with retention policies',
      'Multilingual first drafts for review before external send',
    ],
    benefits: [
      'Faster access to authoritative information',
      'Consistent tone and structure within defined templates',
      'Audit trails for queries and retrieved sources where required',
      'A path from pilot to governed production usage',
    ],
    industries: [
      'healthcare-life-sciences',
      'banking-financial-services',
      'technology-telecom',
      'public-sector-education',
    ],
    relatedServiceSlugs: [
      'ai-strategy-consulting',
      'generative-agentic-ai-engineering',
      'data-engineering-analytics',
      'cybersecurity-trust-engineering',
    ],
  },
  {
    slug: 'agentic-workflow-systems',
    title: 'Agentic Workflow Systems',
    whatItIs:
      'Software that plans and executes multi-step tasks using approved tools—stopping, escalating, or requesting input when policies require it.',
    howItWorks:
      'Workflows are modeled as steps with explicit permissions. Agents call APIs, update records, or prepare drafts within those boundaries. Human approval gates sit on high-impact actions. Runs are logged for traceability.',
    problemsSolved: [
      'Manual swivel-chair work between ERP, CRM, and ticketing',
      'Long cycle times on standard operational requests',
      'Tribal knowledge for “how we actually process this”',
      'Automation scripts that break when UIs change',
    ],
    useCases: [
      'Employee service requests with validation against HR data',
      'Supplier onboarding with document checks and status updates',
      'IT service triage with categorisation and routing suggestions',
      'Regulated handoffs that require named approvers',
    ],
    benefits: [
      'Reduced handling time on repeatable process paths',
      'Clear escalation when confidence or policy thresholds are hit',
      'Maintainable integrations instead of brittle UI automation alone',
      'Operational visibility into automated and assisted steps',
    ],
    industries: [
      'banking-financial-services',
      'logistics-supply-chain',
      'technology-telecom',
      'public-sector-education',
    ],
    relatedServiceSlugs: [
      'generative-agentic-ai-engineering',
      'application-platform-development',
      'digital-transformation',
      'managed-technology-support',
    ],
  },
  {
    slug: 'predictive-decision-intelligence',
    title: 'Predictive & Decision Intelligence',
    whatItIs:
      'Analytics and machine learning that estimate what is likely to happen next—and surface options—so planners can act earlier with eyes open to uncertainty.',
    howItWorks:
      'Historical and live data feed models trained for specific decisions: demand, risk, failure, or conversion. Outputs appear in dashboards, alerts, or planning tools with documented assumptions and refresh cadence.',
    problemsSolved: [
      'Planning based on last year’s spreadsheet rather than current signals',
      'Late discovery of equipment failure or quality drift',
      'Reactive staffing and inventory decisions',
      'Decisions made without shared view of drivers and confidence',
    ],
    useCases: [
      'Demand and capacity forecasting with scenario comparison',
      'Anomaly detection on transactional or sensor streams',
      'Maintenance prioritisation from leading indicators',
      'Credit, fraud, or exception scoring within defined policy bands',
    ],
    benefits: [
      'Earlier intervention before customer or operational impact',
      'Transparent metrics and model refresh suitable for governance',
      'Better alignment between analytics and line-of-business ownership',
      'Foundation for optimisation once baselines are trusted',
    ],
    industries: [
      'manufacturing-industrial',
      'logistics-supply-chain',
      'retail-consumer',
      'energy-utilities',
    ],
    relatedServiceSlugs: [
      'data-engineering-analytics',
      'ai-strategy-consulting',
      'application-platform-development',
      'managed-technology-support',
    ],
  },
  {
    slug: 'computer-vision',
    title: 'Computer Vision',
    whatItIs:
      'Software that interprets images or video to classify, measure, or flag conditions—on server, cloud, or edge depending on latency and connectivity.',
    howItWorks:
      'Labelled data defines what to detect. Models run in pipelines with confidence thresholds, secondary checks, and human review for edge cases. Deployments respect camera placement, lighting, and safety constraints.',
    problemsSolved: [
      'Visual inspection bottlenecks and reviewer fatigue',
      'Inconsistent subjective judgement on quality or defects',
      'Limited coverage of remote or hazardous inspection points',
      'Slow feedback from field photos to operational systems',
    ],
    useCases: [
      'Production-line defect detection with reject routing',
      'PPE or zone compliance in controlled environments',
      'Inventory or pallet identification in warehouses',
      'Infrastructure condition screening from captured imagery',
    ],
    benefits: [
      'More consistent inspection coverage within defined limits',
      'Faster triage of suspect cases to specialists',
      'Digital record of visual decisions where policies allow',
      'Scalable processing when image volumes grow',
    ],
    industries: [
      'manufacturing-industrial',
      'logistics-supply-chain',
      'energy-utilities',
      'retail-consumer',
    ],
    relatedServiceSlugs: [
      'generative-agentic-ai-engineering',
      'data-engineering-analytics',
      'iot-iiot-digital-systems',
      'cybersecurity-trust-engineering',
    ],
  },
  {
    slug: 'industrial-iot-intelligence',
    title: 'Industrial & IoT Intelligence',
    whatItIs:
      'An integrated view of connected assets—combining telemetry, events, and enterprise context so operations teams see issues before they become downtime.',
    howItWorks:
      'Devices and historians stream into a governed platform. Rules and models highlight drift, threshold breaches, or predicted failure windows. Work orders and dashboards receive the same signal vocabulary.',
    problemsSolved: [
      'Alarm floods without prioritisation or context',
      'Maintenance scheduled by calendar instead of condition',
      'Gap between shop floor data and ERP maintenance records',
      'Pilot sensors that never connect to daily workflows',
    ],
    useCases: [
      'Predictive maintenance on rotating or thermal equipment',
      'Energy and throughput monitoring across sites',
      'Cold-chain or environmental excursion alerting',
      'Asset health summaries for regional operations reviews',
    ],
    benefits: [
      'Prioritised actions aligned to operational risk',
      'Shared picture for engineering, maintenance, and planning',
      'Traceable data lineage from sensor to work order',
      'Incremental expansion from site pilots to standards',
    ],
    industries: [
      'manufacturing-industrial',
      'energy-utilities',
      'logistics-supply-chain',
      'healthcare-life-sciences',
    ],
    relatedServiceSlugs: [
      'iot-iiot-digital-systems',
      'data-engineering-analytics',
      'cloud-devops-platform-engineering',
      'managed-technology-support',
    ],
  },
  {
    slug: 'ai-enabled-digital-products',
    title: 'AI-enabled Digital Products',
    whatItIs:
      'Customer- or employee-facing products with intelligence embedded in core journeys—not bolted on as a separate chat window.',
    howItWorks:
      'Product teams define journeys where AI reduces friction: recommendations, guided flows, or adaptive content. Services behind the UI enforce auth, entitlements, logging, and fallbacks when models are unavailable.',
    problemsSolved: [
      'Products that compete on features but not on ease of use',
      'Heavy support load for tasks users should self-serve',
      'One-size-fits-all experiences that ignore context',
      'Standalone AI demos disconnected from billing, identity, and CRM',
    ],
    useCases: [
      'Guided onboarding that adapts to user role and region',
      'In-product assistance tied to account entitlements',
      'Health and lifestyle experiences such as medication reminders and care coordination (e.g. Carevie—validate against current product release)',
      'Partner portals with document intelligence on submissions',
    ],
    benefits: [
      'Differentiation through experience—not hype',
      'Controlled rollout of AI features behind feature flags',
      'Telemetry to refine journeys without guessing in workshops',
      'Architecture that can swap models as standards evolve',
    ],
    industries: [
      'healthcare-life-sciences',
      'retail-consumer',
      'banking-financial-services',
      'technology-telecom',
    ],
    relatedServiceSlugs: [
      'application-platform-development',
      'generative-agentic-ai-engineering',
      'cloud-devops-platform-engineering',
      'cybersecurity-trust-engineering',
    ],
  },
]

export const solutionBySlug = Object.fromEntries(
  solutions.map((solution) => [solution.slug, solution]),
) as Record<Solution['slug'], Solution>