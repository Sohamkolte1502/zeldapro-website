export type ServiceOverview = {
  headline: string
  paragraphs: [string, string]
}

export type Service = {
  slug: string
  title: string
  summary: string
  overview: ServiceOverview
  challenges: string[]
  capabilities: string[]
  technologies: string[]
  applications: string[]
}

export const services: Service[] = [
  {
    slug: 'ai-strategy-consulting',
    title: 'AI Strategy & Consulting',
    summary:
      'Align AI investment with business priorities through readiness assessment, use-case selection, operating models, and architecture direction you can execute.',
    overview: {
      headline: 'Turning AI ambition into an executable enterprise roadmap',
      paragraphs: [
        'Enterprises are moving from isolated pilots to portfolios that must align with P&L owners, risk functions, and core platforms. Strategy work has to answer where value is, what must be true in data and controls first, and how delivery will be governed—not which model brand to pick.',
        'Zeldapro partners with leadership teams on readiness, prioritisation, operating models, and reference architectures so generative and analytical AI programmes can scale with clear ownership, phased investment, and integration paths your organisation can actually run.',
      ],
    },
    challenges: [
      'Unclear ownership between business, IT, and data teams',
      'Pilot proliferation without a path to production or scale',
      'Governance and risk requirements that slow—or stall—decisions',
      'Difficulty estimating cost, timeline, and dependency on core systems',
    ],
    capabilities: [
      'AI opportunity and readiness assessment',
      'Use-case prioritisation tied to measurable outcomes',
      'Target operating model and RACI for AI delivery',
      'Reference architecture and integration patterns',
      'Model and data governance frameworks',
      'Roadmaps phased for risk, value, and technical feasibility',
    ],
    technologies: [
      'Architecture modelling and documentation tooling',
      'Enterprise knowledge and collaboration platforms',
      'Model registries and MLOps platforms (client-selected)',
      'Cloud AI services and API platforms (vendor-neutral advisory)',
    ],
    applications: [
      'Executive and board-level AI direction',
      'Portfolio rationalisation before major spend',
      'Pre-build validation for generative or agentic initiatives',
      'Merger, reorganisation, or platform consolidation planning',
    ],
  },
  {
    slug: 'generative-agentic-ai-engineering',
    title: 'Generative & Agentic AI Engineering',
    summary:
      'Design and build enterprise assistants, retrieval-grounded applications, and agentic workflows with controls appropriate to your data and regulatory context.',
    overview: {
      headline: 'Building assistants and agents your enterprise can trust',
      paragraphs: [
        'Language models and agents only create durable value when they are grounded in approved content, wired into identity and ticketing systems, and stopped at the right approval gates. Engineering must balance speed with confidentiality, evaluation discipline, and operational observability.',
        'We design and ship copilots, retrieval pipelines, and multi-step automations with logging, human review paths, and integration patterns suited to your regulatory context—so experiences feel helpful to users without bypassing the controls risk teams require.',
      ],
    },
    challenges: [
      'Generic chat experiences that lack access to authoritative sources',
      'Hallucination and confidentiality risks on sensitive content',
      'Agents that bypass approval paths or operational guardrails',
      'Integration gaps with identity, ticketing, ERP, and document stores',
    ],
    capabilities: [
      'LLM application and copilot development',
      'Retrieval-augmented generation over approved corpora',
      'Tool use and orchestration with policy boundaries',
      'Prompt, evaluation, and regression testing harnesses',
      'Human-in-the-loop review where required',
      'Observability for quality, latency, and cost',
    ],
    technologies: [
      'Large language model APIs and hosted models (client-approved)',
      'Vector search and enterprise search connectors',
      'Workflow and integration middleware',
      'Identity, secrets, and API management layers',
    ],
    applications: [
      'Internal knowledge assistants for policy, engineering, or operations',
      'Customer- and employee-facing support augmentation',
      'Multi-step operational workflows with defined escalation',
      'Document-heavy processes such as intake, triage, and drafting support',
    ],
  },
  {
    slug: 'data-engineering-analytics',
    title: 'Data Engineering & Analytics',
    summary:
      'Establish trustworthy data pipelines and analytics foundations that support reporting, machine learning, and day-to-day operational decisions.',
    overview: {
      headline: 'Data foundations that power decisions and machine learning',
      paragraphs: [
        'Intelligent programmes stall when metrics disagree, lineage is unclear, and experiments cannot be reproduced in production. Modern enterprises need pipelines and semantic layers that analysts, engineers, and model teams can share without re-building the same extracts in silos.',
        'We implement domain-oriented data architecture, warehouse or lakehouse patterns, quality monitoring, and feature-serving consistency—so reporting, analytics, and AI workloads run on governed, timely data instead of one-off spreadsheets.',
      ],
    },
    challenges: [
      'Fragmented sources with inconsistent definitions and lineage',
      'Batch-only reporting that arrives too late for action',
      'ML experiments that cannot be reproduced or deployed safely',
      'Platform sprawl and rising cost without clear ownership',
    ],
    capabilities: [
      'Data architecture and domain-oriented modelling',
      'Batch and streaming pipeline design and implementation',
      'Modern warehouse/lakehouse patterns and BI layers',
      'Feature stores and training-serving consistency',
      'Data quality checks and operational monitoring',
      'Semantic layers for self-service within guardrails',
    ],
    technologies: [
      'Cloud data platforms and orchestration',
      'SQL and transformation frameworks',
      'Stream processing where latency matters',
      'Business intelligence and visualisation tools',
      'Experiment tracking and model serving platforms',
    ],
    applications: [
      'Executive and functional dashboards with agreed metrics',
      'Customer, product, and operational analytics programmes',
      'Feeding predictive and generative workloads with governed data',
      'Regulatory or audit-ready reporting pipelines',
    ],
  },
  {
    slug: 'application-platform-development',
    title: 'Application & Platform Development',
    summary:
      'Deliver custom software, APIs, and platforms engineered for security, integration, and long-term change—not one-off delivery.',
    overview: {
      headline: 'Software platforms built to evolve with the business',
      paragraphs: [
        'Customer and employee journeys now span web, mobile, partner APIs, and back-office systems—yet many organisations still carry legacy modules that slow every new idea. Sustainable engineering means clear service boundaries, thoughtful APIs, and quality practices that survive team changes.',
        'Zeldapro delivers applications and platforms with integration-first design, automated testing, and accessibility built in—so you can launch new capabilities and modernise high-value modules without accumulating fragile point solutions.',
      ],
    },
    challenges: [
      'Legacy applications that block new channels or partners',
      'Duplicated logic across teams and regions',
      'Release cycles that cannot keep pace with business change',
      'Weak contracts between frontends, services, and data stores',
    ],
    capabilities: [
      'Enterprise web and mobile application development',
      'SaaS and multi-tenant platform design',
      'API design, versioning, and developer experience',
      'System integration and event-driven interfaces',
      'Automated testing and quality gates',
      'Accessibility and operability for diverse user groups',
    ],
    technologies: [
      'Modern web stacks (TypeScript, React, and allied tooling)',
      'Service-oriented and event-driven architectures',
      'Container platforms and managed runtime services',
      'Relational and document data stores as fit-for-purpose',
    ],
    applications: [
      'Customer and partner portals',
      'Internal workflow and operations applications',
      'Productised capabilities sold as software or managed service',
      'Modernisation of high-value legacy modules via APIs',
    ],
  },
  {
    slug: 'cloud-devops-platform-engineering',
    title: 'Cloud, DevOps & Platform Engineering',
    summary:
      'Build reliable delivery pipelines and cloud foundations so teams can ship changes frequently without compromising stability or security.',
    overview: {
      headline: 'Cloud and delivery platforms for dependable change at scale',
      paragraphs: [
        'Digital products succeed when releases are frequent, observable, and recoverable—not when heroics patch each deployment weekend. Platform engineering aligns infrastructure, security policy, and developer experience so teams share standards instead of reinventing pipelines.',
        'We help establish landing zones, CI/CD guardrails, infrastructure as code, and SLO-driven operations—reducing drift and incident time while keeping pace with product and AI initiatives landing on the same cloud estate.',
      ],
    },
    challenges: [
      'Manual deployments and environment drift',
      'Siloed infrastructure knowledge and ticket-driven change',
      'Limited visibility into performance, cost, and failure modes',
      'Friction between security requirements and developer velocity',
    ],
    capabilities: [
      'Cloud-native architecture and landing zones',
      'Migration planning for workloads and data stores',
      'CI/CD pipelines with policy-as-code checks',
      'Infrastructure as code and environment standardisation',
      'Observability: logs, metrics, traces, and SLO definition',
      'Platform engineering for internal developer self-service',
    ],
    technologies: [
      'Major cloud providers (client-selected)',
      'Kubernetes and managed container services where appropriate',
      'Infrastructure-as-code tooling',
      'Artifact, secret, and configuration management',
    ],
    applications: [
      'Greenfield cloud programmes',
      'Datacentre exit or hybrid operating models',
      'Scaling product engineering teams with shared platforms',
      'Reliability uplift for customer-facing digital services',
    ],
  },
  {
    slug: 'iot-iiot-digital-systems',
    title: 'IoT, IIoT & Digital Systems',
    summary:
      'Connect devices, edge environments, and enterprise systems into coherent monitoring and control capabilities—without losing sight of security and uptime.',
    overview: {
      headline: 'Connected operations from the edge to the enterprise',
      paragraphs: [
        'Machines, sensors, and field assets generate signal only when telemetry is provisioned securely, buffered sensibly, and landed in systems operations teams already use. OT and IT must meet without exposing plants or utilities to ungoverned connectivity.',
        'We engineer device onboarding, edge processing, historian integration, and monitoring experiences that supervisors and maintainers can act on—supported by security zoning and lifecycle practices appropriate for industrial and facility environments.',
      ],
    },
    challenges: [
      'Sensor and machine data stranded at the edge or in silos',
      'Unreliable connectivity and difficult firmware or device lifecycle management',
      'OT/IT separation that blocks useful analytics',
      'Projects that demo well but lack operational support models',
    ],
    capabilities: [
      'Device onboarding, provisioning, and certificate management',
      'Edge processing and store-and-forward patterns',
      'Industrial protocol and historian integration',
      'Digital twin and asset-model foundations',
      'Fleet monitoring, alerting, and remote diagnostics',
      'Security zoning aligned with operational technology practice',
    ],
    technologies: [
      'IoT hubs, gateways, and edge runtimes',
      'Time-series and telemetry platforms',
      'Message brokers and stream processors',
      'Geospatial and asset registries where relevant',
    ],
    applications: [
      'Remote asset and equipment monitoring',
      'Smart facilities and environment sensing',
      'Production line visibility and traceability',
      'Field service informed by live device state',
    ],
  },
  {
    slug: 'cybersecurity-trust-engineering',
    title: 'Cybersecurity & Trust Engineering',
    summary:
      'Embed security architecture, secure development practice, and AI-specific risk considerations into programmes—not as a late-stage audit.',
    overview: {
      headline: 'Security and trust designed into how you build and run AI',
      paragraphs: [
        'AI adoption widens the attack surface through new APIs, training data paths, and model behaviour that traditional checklists were not written for. Security has to be threaded through architecture, SDLC, and operations—not bolted on after launch.',
        'Zeldapro works with your teams on threat modelling, secure engineering habits, identity and segmentation choices, and AI-specific risks such as data leakage and prompt handling—so programmes can move quickly within boundaries auditors and customers can understand.',
      ],
    },
    challenges: [
      'Accelerated AI adoption outpacing control design',
      'Third-party components and APIs expanding attack surface',
      'Inconsistent secrets, identity, and access patterns across teams',
      'Compliance obligations that vary by region and data type',
    ],
    capabilities: [
      'Threat modelling for applications and data flows',
      'Secure SDLC integration and code review practices',
      'Identity, access, and segmentation recommendations',
      'AI risk: data leakage, prompt injection, and output handling',
      'Resilience planning: backup, recovery, and incident playbooks',
      'Vendor and dependency review for critical paths',
    ],
    technologies: [
      'Static and dynamic application security testing (client toolchain)',
      'Secrets management and hardware security modules where required',
      'SIEM and detection integrations (client-operated)',
      'Policy engines for infrastructure and deployment',
    ],
    applications: [
      'Security architecture for new AI or cloud programmes',
      'Hardening integrations that move sensitive data',
      'Privacy-by-design reviews for customer-facing features',
      'Operational readiness before production cutover',
    ],
  },
  {
    slug: 'digital-transformation',
    title: 'Digital Transformation',
    summary:
      'Redesign how work flows across teams and systems—with automation and enablement so improvements stick after go-live.',
    overview: {
      headline: 'Transforming how work flows—not just the tools people use',
      paragraphs: [
        'Transformation programmes fail when technology ships but teams keep shadow processes in inboxes and spreadsheets. Lasting change means mapping journeys end to end, redesigning handoffs, and measuring outcomes people recognise in their week—not only go-live dates.',
        'We combine process design, workflow automation, and adoption planning so new digital paths are measurable, trainable, and owned by the functions that run them day to day.',
      ],
    },
    challenges: [
      'Process variation across regions or business units',
      'Change fatigue from technology-led projects with weak adoption',
      'Shadow processes maintained in spreadsheets and email',
      'KPIs that do not reflect end-to-end customer or employee experience',
    ],
    capabilities: [
      'Process discovery and journey mapping',
      'Target operating process design with clear handoffs',
      'Workflow and case management automation',
      'Role-based training and communications planning',
      'Measurement frameworks linked to transformation goals',
      'Continuous improvement cadence post-launch',
    ],
    technologies: [
      'Workflow, BPM, or case management platforms (fit-for-purpose)',
      'RPA only where integration cost warrants it',
      'Collaboration and knowledge platforms',
      'Analytics to monitor adoption and throughput',
    ],
    applications: [
      'Shared services modernisation',
      'Customer onboarding and service fulfilment',
      'Finance, HR, or supply operations digitisation',
      'Cross-functional programmes spanning multiple systems',
    ],
  },
  {
    slug: 'managed-technology-support',
    title: 'Managed Technology & Support',
    summary:
      'Sustain and improve live applications and platforms through structured support, proactive maintenance, and an engineering partnership—not ticket-only handover.',
    overview: {
      headline: 'Keeping production systems healthy after the spotlight fades',
      paragraphs: [
        'AI and platform investments only matter if they stay available, patched, and evolving once the initial build team moves on. Organisations need a support model that blends responsive incident handling with planned maintenance and small enhancements—not an endless backlog of frustrated users.',
        'Zeldapro provides managed support aligned to severities, release hygiene, and shared runbooks—partnering with internal IT so knowledge stays current and improvements continue without destabilising what is already live.',
      ],
    },
    challenges: [
      'Knowledge loss after initial project teams disband',
      'Reactive firefighting without root-cause reduction',
      'Backlogs of defects and small enhancements that block users',
      'Unclear SLAs and escalation between vendor and internal IT',
    ],
    capabilities: [
      'Application and platform support with defined severities',
      'Incident, problem, and change management alignment',
      'Release hygiene: patching, dependency updates, regression checks',
      'Performance and cost tuning on cloud workloads',
      'Enhancement delivery in agreed priority batches',
      'Runbooks, documentation, and knowledge transfer',
    ],
    technologies: [
      'Client-selected ticketing and ITSM tools',
      'Monitoring and alerting already in use',
      'Source control and CI/CD owned by the client or jointly',
      'Configuration management databases where available',
    ],
    applications: [
      'Stabilisation after major go-lives',
      'Long-term partnership for AI and data platforms',
      'Augmenting internal teams during peak delivery',
      'Progressive modernisation while keeping services running',
    ],
  },
]

export const serviceBySlug = Object.fromEntries(
  services.map((service) => [service.slug, service]),
) as Record<Service['slug'], Service>