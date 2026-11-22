import type { Service } from './services'
import type { Solution } from './solutions'

export type IllustrativeScenario = {
  title: string
  description: string
  /** Always true — not a delivered client engagement */
  illustrative: true
}

export type Industry = {
  slug: string
  title: string
  challenges: string[]
  howAiHelps: string[]
  relatedServiceSlugs: Service['slug'][]
  relatedSolutionSlugs: Solution['slug'][]
  exampleScenarios: IllustrativeScenario[]
}

export const industries: Industry[] = [
  {
    slug: 'healthcare-life-sciences',
    title: 'Healthcare & Life Sciences',
    challenges: [
      'Clinical and operational data spread across EHR, labs, and ancillary systems',
      'Documentation burden reducing time for patient-facing work',
      'Strict privacy regimes and audit expectations for any new tooling',
      'Pilot fatigue when innovations do not connect to workflow',
    ],
    howAiHelps: [
      'Retrieve and summarise approved clinical or operational content with access control',
      'Coordinate handoffs between scheduling, care teams, and patient communication channels',
      'Monitor operational metrics and queues without replacing clinical judgement',
      'Support digital health products with reminders and structured information—subject to validation',
    ],
    relatedServiceSlugs: [
      'ai-strategy-consulting',
      'generative-agentic-ai-engineering',
      'data-engineering-analytics',
      'cybersecurity-trust-engineering',
    ],
    relatedSolutionSlugs: [
      'enterprise-generative-ai',
      'ai-enabled-digital-products',
      'predictive-decision-intelligence',
    ],
    exampleScenarios: [
      {
        illustrative: true,
        title: 'Illustrative: care coordination assistant',
        description:
          'A regional provider could use a governed assistant to surface appointment prep checklists and policy excerpts to schedulers—routing clinical questions to licensed staff.',
      },
      {
        illustrative: true,
        title: 'Illustrative: operational flow visibility',
        description:
          'A hospital network could combine bed, staffing, and transport signals to flag emerging bottlenecks for operations review—not for automated clinical decisions.',
      },
    ],
  },
  {
    slug: 'banking-financial-services',
    title: 'Banking & Financial Services',
    challenges: [
      'High volumes of document-heavy processes with compliance checkpoints',
      'Customer expectations for faster service without weakening controls',
      'Legacy core systems that constrain integration options',
      'Model risk and explainability requirements for automated decisions',
    ],
    howAiHelps: [
      'Extract and classify information from statements, forms, and correspondence for analyst review',
      'Augment contact centres with grounded answers from approved product and policy libraries',
      'Score exceptions or anomalies within policy bands defined by risk teams',
      'Automate routine servicing steps with approval gates on material changes',
    ],
    relatedServiceSlugs: [
      'generative-agentic-ai-engineering',
      'data-engineering-analytics',
      'cybersecurity-trust-engineering',
      'digital-transformation',
    ],
    relatedSolutionSlugs: [
      'enterprise-generative-ai',
      'agentic-workflow-systems',
      'predictive-decision-intelligence',
    ],
    exampleScenarios: [
      {
        illustrative: true,
        title: 'Illustrative: commercial onboarding packet',
        description:
          'A corporate bank could route KYC packets through extraction and validation, highlighting missing fields for relationship managers before submission to core systems.',
      },
      {
        illustrative: true,
        title: 'Illustrative: service request routing',
        description:
          'A retail bank could classify servicing emails and prepopulate case records—always requiring agent confirmation before account changes.',
      },
    ],
  },
  {
    slug: 'manufacturing-industrial',
    title: 'Manufacturing & Industrial',
    challenges: [
      'Unplanned downtime affecting schedules and customer commitments',
      'Quality escapes discovered late in the process',
      'OT networks and IT standards that must coexist safely',
      'Skills gaps in data and AI alongside shop-floor expertise',
    ],
    howAiHelps: [
      'Combine sensor, historian, and MES data for earlier maintenance signals',
      'Support visual inspection with human override on borderline cases',
      'Provide supervisors with shift-level summaries instead of raw tag lists',
      'Standardise digital twin or asset models for multi-site rollouts',
    ],
    relatedServiceSlugs: [
      'iot-iiot-digital-systems',
      'data-engineering-analytics',
      'cloud-devops-platform-engineering',
      'managed-technology-support',
    ],
    relatedSolutionSlugs: [
      'computer-vision',
      'industrial-iot-intelligence',
      'predictive-decision-intelligence',
    ],
    exampleScenarios: [
      {
        illustrative: true,
        title: 'Illustrative: line changeover quality',
        description:
          'An automotive parts plant could compare vision inspection results across changeovers to flag tooling drift for engineers—without auto-rejecting without human rules.',
      },
      {
        illustrative: true,
        title: 'Illustrative: spindle health monitoring',
        description:
          'A precision manufacturer could prioritise maintenance work orders from vibration trends fused with production schedule risk.',
      },
    ],
  },
  {
    slug: 'logistics-supply-chain',
    title: 'Logistics & Supply Chain',
    challenges: [
      'Volatile demand and disruption across lanes and suppliers',
      'Limited end-to-end visibility once goods leave the warehouse',
      'Exception management still driven by phone and email',
      'Margin pressure discouraging speculative technology spend',
    ],
    howAiHelps: [
      'Forecast demand and capacity with scenarios planners can adjust',
      'Highlight late shipments and inventory exceptions from integrated events',
      'Assist dispatch and customer service with status grounded in TMS/WMS data',
      'Support route and load decisions with transparent constraints',
    ],
    relatedServiceSlugs: [
      'data-engineering-analytics',
      'application-platform-development',
      'digital-transformation',
      'iot-iiot-digital-systems',
    ],
    relatedSolutionSlugs: [
      'predictive-decision-intelligence',
      'agentic-workflow-systems',
      'industrial-iot-intelligence',
    ],
    exampleScenarios: [
      {
        illustrative: true,
        title: 'Illustrative: regional distribution hub',
        description:
          'A 3PL operator could surface pick-face shortages and inbound delays on a single operations board for shift leads—not autonomous rerouting without approval.',
      },
      {
        illustrative: true,
        title: 'Illustrative: seasonal retail build-up',
        description:
          'A retailer could run weekly demand scenarios tied to promotional calendars, feeding buyers a shared assumption set.',
      },
    ],
  },
  {
    slug: 'retail-consumer',
    title: 'Retail & Consumer',
    challenges: [
      'Fragmented customer data across ecommerce, stores, and loyalty',
      'Support costs rising with channel proliferation',
      'Personalisation expectations versus privacy preferences',
      'Thin margins requiring careful prioritisation of tech investment',
    ],
    howAiHelps: [
      'Recommend and explain within entitlement and stock constraints',
      'Ground conversational support in current product and policy content',
      'Analyse basket and return patterns for merchandising review',
      'Enable consistent experiences across channels with shared services',
    ],
    relatedServiceSlugs: [
      'application-platform-development',
      'data-engineering-analytics',
      'generative-agentic-ai-engineering',
      'digital-transformation',
    ],
    relatedSolutionSlugs: [
      'enterprise-generative-ai',
      'ai-enabled-digital-products',
      'predictive-decision-intelligence',
    ],
    exampleScenarios: [
      {
        illustrative: true,
        title: 'Illustrative: order status assistant',
        description:
          'A multichannel retailer could let customers ask order questions authenticated to their account, pulling status from OMS—not inventing delivery promises.',
      },
      {
        illustrative: true,
        title: 'Illustrative: markdown planning support',
        description:
          'A fashion brand could flag slow-moving SKUs by region for planner review using agreed inventory ageing rules.',
      },
    ],
  },
  {
    slug: 'energy-utilities',
    title: 'Energy & Utilities',
    challenges: [
      'Ageing assets and dispersed field workforce',
      'Safety and environmental obligations on any operational change',
      'SCADA and enterprise IT integration complexity',
      'Weather and demand variability affecting planning',
    ],
    howAiHelps: [
      'Monitor asset condition and prioritise inspections from telemetry',
      'Summarise work orders and outage context for control-room staff',
      'Forecast load or renewable output for planning teams',
      'Support field technicians with mobile access to procedures and history',
    ],
    relatedServiceSlugs: [
      'iot-iiot-digital-systems',
      'data-engineering-analytics',
      'cybersecurity-trust-engineering',
      'managed-technology-support',
    ],
    relatedSolutionSlugs: [
      'industrial-iot-intelligence',
      'predictive-decision-intelligence',
      'computer-vision',
    ],
    exampleScenarios: [
      {
        illustrative: true,
        title: 'Illustrative: transmission line patrol',
        description:
          'A utility could triage inspection imagery for vegetation encroachment, sending only flagged spans to qualified inspectors.',
      },
      {
        illustrative: true,
        title: 'Illustrative: transformer fleet review',
        description:
          'An operator could rank substations for thermal and loading risk for quarterly maintenance planning meetings.',
      },
    ],
  },
  {
    slug: 'technology-telecom',
    title: 'Technology & Telecom',
    challenges: [
      'Rapid product cycles and technical debt in billing and provisioning stacks',
      'Support organisations overwhelmed by complex product catalogues',
      'Network and service data at scales that resist manual analysis',
      'Pressure to modernise while retaining SLAs on existing services',
    ],
    howAiHelps: [
      'Power internal engineering assistants on runbooks and architecture records',
      'Automate tier-1 triage with escalation paths to specialists',
      'Detect anomalies in usage or network KPIs for NOC review',
      'Accelerate API-led modernisation of customer-facing journeys',
    ],
    relatedServiceSlugs: [
      'cloud-devops-platform-engineering',
      'application-platform-development',
      'generative-agentic-ai-engineering',
      'managed-technology-support',
    ],
    relatedSolutionSlugs: [
      'enterprise-generative-ai',
      'agentic-workflow-systems',
      'ai-enabled-digital-products',
    ],
    exampleScenarios: [
      {
        illustrative: true,
        title: 'Illustrative: NOC summary digest',
        description:
          'A telecom could produce shift handover summaries from ticket and alarm feeds—edited by lead engineers before distribution.',
      },
      {
        illustrative: true,
        title: 'Illustrative: catalogue-aware support',
        description:
          'A SaaS vendor could ground answers in versioned documentation tied to the customer’s subscribed plan.',
      },
    ],
  },
  {
    slug: 'public-sector-education',
    title: 'Public Sector & Education',
    challenges: [
      'Procurement and transparency requirements lengthening delivery',
      'Legacy case and records systems with limited APIs',
      'Equity and accessibility mandates on digital services',
      'Heightened scrutiny of automated decisions affecting citizens or learners',
    ],
    howAiHelps: [
      'Digitise workflows with clear audit trails and role-based access',
      'Assist staff with search across policy libraries—not final determinations',
      'Provide accessible self-service for routine status and information requests',
      'Plan responsible AI use with citizen impact assessments',
    ],
    relatedServiceSlugs: [
      'ai-strategy-consulting',
      'digital-transformation',
      'application-platform-development',
      'cybersecurity-trust-engineering',
    ],
    relatedSolutionSlugs: [
      'enterprise-generative-ai',
      'agentic-workflow-systems',
      'ai-enabled-digital-products',
    ],
    exampleScenarios: [
      {
        illustrative: true,
        title: 'Illustrative: permitting status portal',
        description:
          'A municipality could let applicants track case status and required documents—without AI deciding eligibility.',
      },
      {
        illustrative: true,
        title: 'Illustrative: learner support navigation',
        description:
          'A university could guide students to official policies and deadlines from a single search experience overseen by student services.',
      },
    ],
  },
]

export const industryBySlug = Object.fromEntries(
  industries.map((industry) => [industry.slug, industry]),
) as Record<Industry['slug'], Industry>