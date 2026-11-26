import type { LucideIcon } from 'lucide-react'
import {
  Bot,
  Cloud,
  Code,
  Compass,
  Cpu,
  Database,
  Layers,
  LifeBuoy,
  Shield,
} from 'lucide-react'
import { services } from './services'

const iconBySlug: Record<string, LucideIcon> = {
  'ai-strategy-consulting': Compass,
  'generative-agentic-ai-engineering': Bot,
  'data-engineering-analytics': Database,
  'application-platform-development': Code,
  'cloud-devops-platform-engineering': Cloud,
  'iot-iiot-digital-systems': Cpu,
  'cybersecurity-trust-engineering': Shield,
  'digital-transformation': Layers,
  'managed-technology-support': LifeBuoy,
}

export type HomeServiceCard = {
  slug: string
  title: string
  description: string
  href: string
  icon: LucideIcon
}

export const homeServicesGridCopy = {
  eyebrow: 'What we do',
  heading: 'One partner across the full AI and technology stack.',
  subline:
    'Advisory, engineering, and operations services designed around measurable business outcomes—not disconnected pilots.',
  viewAllLabel: 'All services',
  viewAllHref: '/services',
} as const

/** All nine services — sourced from `services` data. */
export const homeServicesGrid: HomeServiceCard[] = services.map((service) => ({
  slug: service.slug,
  title: service.title,
  description: service.summary,
  href: `/services/${service.slug}`,
  icon: iconBySlug[service.slug] ?? Layers,
}))