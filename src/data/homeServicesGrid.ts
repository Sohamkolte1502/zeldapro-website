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

/** Tailwind col-span classes for bento layout (12-col grid at lg). */
const bentoSpanBySlug: Record<string, string> = {
  'ai-strategy-consulting': 'lg:col-span-6',
  'generative-agentic-ai-engineering': 'lg:col-span-6',
  'data-engineering-analytics': 'lg:col-span-4',
  'application-platform-development': 'lg:col-span-4',
  'cloud-devops-platform-engineering': 'lg:col-span-4',
  'iot-iiot-digital-systems': 'lg:col-span-3',
  'cybersecurity-trust-engineering': 'lg:col-span-3',
  'digital-transformation': 'lg:col-span-3',
  'managed-technology-support': 'lg:col-span-3',
}

const featuredSlugs = new Set([
  'ai-strategy-consulting',
  'generative-agentic-ai-engineering',
])

export type HomeServiceCard = {
  slug: string
  title: string
  description: string
  href: string
  icon: LucideIcon
  bentoClass: string
  featured: boolean
}

export const homeServicesGridCopy = {
  eyebrow: 'What we do',
  heading: 'One partner across the full AI and technology stack.',
  subline:
    'Advisory, engineering, and operations services designed around measurable business outcomes—not disconnected pilots.',
  viewAllLabel: 'All services',
  viewAllHref: '/services',
} as const

export const homeServicesGrid: HomeServiceCard[] = services.map((service) => ({
  slug: service.slug,
  title: service.title,
  description: service.summary,
  href: `/services/${service.slug}`,
  icon: iconBySlug[service.slug] ?? Layers,
  bentoClass: bentoSpanBySlug[service.slug] ?? 'lg:col-span-4',
  featured: featuredSlugs.has(service.slug),
}))