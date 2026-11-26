import type { LucideIcon } from 'lucide-react'
import {
  Cloud,
  Code,
  Compass,
  Database,
  Layers,
  Sparkles,
} from 'lucide-react'
import type { Service } from './services'

export type HomeWhatWeDoCard = {
  serviceSlug: Service['slug']
  title: string
  description: string
  tags: string[]
  icon: LucideIcon
}

export const homeWhatWeDoCopy = {
  eyebrow: 'What we do',
  heading: 'AI and software engineering, from strategy to production.',
  subline:
    'We help enterprises plan, build and run AI-enabled systems that fit their data, security and operations.',
  viewAllLabel: 'View all services',
  viewAllHref: '/services',
} as const

/** Homepage “What we do” service cards — edit titles, copy and tags here. */
export const homeWhatWeDoCards: HomeWhatWeDoCard[] = [
  {
    serviceSlug: 'ai-strategy-consulting',
    title: 'AI Strategy & Advisory',
    description:
      'Turn AI ambition into a practical roadmap with readiness checks and clear priorities.',
    tags: ['Readiness', 'Roadmap', 'Use cases'],
    icon: Compass,
  },
  {
    serviceSlug: 'data-engineering-analytics',
    title: 'Data & Intelligence',
    description:
      'Build the data foundations and analytics that make decisions faster and more reliable.',
    tags: ['Pipelines', 'Analytics', 'ML'],
    icon: Database,
  },
  {
    serviceSlug: 'generative-agentic-ai-engineering',
    title: 'Generative & Agentic AI',
    description:
      'Copilots, knowledge assistants and agentic workflows grounded in your data and controls.',
    tags: ['Copilots', 'RAG', 'Agents'],
    icon: Sparkles,
  },
  {
    serviceSlug: 'application-platform-development',
    title: 'Software Engineering',
    description:
      'Secure, scalable applications, platforms and integrations built to last.',
    tags: ['Applications', 'APIs', 'Integrations'],
    icon: Code,
  },
  {
    serviceSlug: 'iot-iiot-digital-systems',
    title: 'Cloud & Connected Systems',
    description:
      'Resilient cloud, IoT and enterprise integrations that keep operations visible and running.',
    tags: ['Cloud', 'IoT', 'Monitoring'],
    icon: Cloud,
  },
  {
    serviceSlug: 'digital-transformation',
    title: 'AI Products & Platforms',
    description:
      'Intelligent digital products for customers and teams, from first release to scale.',
    tags: ['Digital products', 'Platforms'],
    icon: Layers,
  },
]