import type { Service } from './services'
import type { Solution } from './solutions'

export type IllustrativeScenario = {
  title: string
  description: string
  /** Always true — not a delivered client engagement */
  illustrative: true
}

export type IndustryOverview = {
  /** Editorial headline for industry detail (displayed uppercase in UI). */
  headline: string
  paragraphs: [string, string]
}

export type Industry = {
  slug: string
  title: string
  overview: IndustryOverview
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
    overview: {
      headline: 'Intelligence that respects clinical context',
      paragraphs: [
        'Healthcare and life sciences organisations coordinate care across fragmented clinical, operational, and patient-facing systems. Leaders are expected to improve access and throughput while privacy regimes, audit expectations, and validation discipline stay non-negotiable.',
        'Zeldapro helps teams apply AI to summarisation, coordination, and digital health experiences—always with access control, human oversight, and clear boundaries on what software may recommend versus what licensed staff must decide.',
      ],
    },
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
    overview: {
      headline: 'Modern service without weakening control',
      paragraphs: [
        'Banks and financial institutions run on document-heavy processes, legacy cores, and model-risk frameworks that must keep pace with customer expectations. Every automation candidate competes with explainability, compliance checkpoints, and the reputational cost of error.',
        'We partner on governed extraction, servicing assistance, and workflow automation—grounded in approved policies, routed through approval gates, and designed so risk and operations teams retain clear accountability.',
      ],
    },
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
    overview: {
      headline: 'From plant data to earlier, safer decisions',
      paragraphs: [
        'Manufacturers balance uptime, quality, and multi-site standardisation while OT and IT environments mature at different speeds. Shop-floor expertise remains essential—technology must amplify supervisors and engineers instead of bypassing them.',
        'Our work connects historians, MES, and sensor data to practical signals for maintenance, quality, and operations—supporting vision inspection and digital twins with human override and security-aware integration patterns.',
      ],
    },
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
    overview: {
      headline: 'Visibility and foresight across volatile networks',
      paragraphs: [
        'Logistics and supply-chain operators navigate demand shocks, lane disruption, and exception management workflows that still rely on coordinated people as much as systems. Investment must show margin-aware value—not speculative dashboards.',
        'We help teams integrate TMS, WMS, and planning data for forecasting, exception surfacing, and customer-facing status—transparent about constraints and designed for planner adjustment, not black-box rerouting.',
      ],
    },
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
    overview: {
      headline: 'Consistent experiences across every channel',
      paragraphs: [
        'Retailers and consumer brands unify ecommerce, stores, and loyalty while margins and privacy preferences shape how far personalisation can go. Support and merchandising teams need shared truth—not another siloed pilot.',
        'We build AI-assisted service, recommendation, and analytics on entitlements and inventory reality—grounded in current product and policy content so customers get accurate answers and merchants retain control.',
      ],
    },
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
    overview: {
      headline: 'Resilient assets and informed field operations',
      paragraphs: [
        'Energy and utilities operators steward ageing infrastructure, dispersed crews, and safety obligations where weather and demand variability drive planning every season. Enterprise IT and operational technology must interoperate without introducing unmanaged risk.',
        'Zeldapro supports condition monitoring, outage context, load and renewable forecasting, and mobile access to procedures—always aligned with control-room practices and qualified field judgement.',
      ],
    },
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
    overview: {
      headline: 'Scale product velocity with operational discipline',
      paragraphs: [
        'Technology and telecom providers ship under relentless release cycles while billing, provisioning, and support stacks carry years of technical debt. Network and product data grows faster than manual analysis can sustain.',
        'We help engineering and service organisations deploy assistants on runbooks, automate tier-1 triage with escalation, and modernise customer journeys through API-led platforms—protecting SLAs on what already runs in production.',
      ],
    },
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
    overview: {
      headline: 'Digital services citizens and learners can trust',
      paragraphs: [
        'Public sector and education institutions deliver under procurement transparency, accessibility mandates, and scrutiny of any automated decision that affects people. Legacy records and case systems rarely offer modern APIs out of the box.',
        'Our programmes emphasise digitised workflows with audit trails, staff search over policy libraries, and accessible self-service—plus responsible-AI planning so innovation stays accountable to the communities you serve.',
      ],
    },
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