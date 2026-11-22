import type { LucideIcon } from 'lucide-react'
import {
  AppWindow,
  Cloud,
  Layers,
  Link2,
  RefreshCw,
  Smartphone,
} from 'lucide-react'

/** Copy aligned with `docs/reference/software.html` — do not paraphrase in UI. */
export const softwarePage = {
  breadcrumb: 'Software Engineering',
  eyebrow: 'Software Engineering',
  headline: 'Custom software, platforms, integration',
  subtext:
    'Modern applications, platforms, integrations; security, scale, adaptability.',
  sectionTitle: 'Robust foundations for ambitious digital products.',
  ctaHeading: 'Have an enterprise challenge in mind?',
  ctaButton: 'Start a conversation',
} as const

export type SoftwareCapability = {
  id: string
  title: string
  description: string
  icon: LucideIcon
}

export const softwareCapabilities: SoftwareCapability[] = [
  {
    id: 'enterprise-applications',
    title: 'Enterprise Applications',
    description: 'Enterprise web and mobile application development',
    icon: AppWindow,
  },
  {
    id: 'web-mobile-products',
    title: 'Web & Mobile Products',
    description: 'Customer and partner portals',
    icon: Smartphone,
  },
  {
    id: 'saas-platform-engineering',
    title: 'SaaS & Platform Engineering',
    description: 'SaaS and multi-tenant platform design',
    icon: Layers,
  },
  {
    id: 'api-systems-integration',
    title: 'API & Systems Integration',
    description: 'System integration and event-driven interfaces',
    icon: Link2,
  },
  {
    id: 'cloud-native-engineering',
    title: 'Cloud-native Engineering',
    description: 'Cloud-native architecture and landing zones',
    icon: Cloud,
  },
  {
    id: 'quality-modernisation',
    title: 'Quality & Modernisation',
    description: 'Modernisation of high-value legacy modules via APIs',
    icon: RefreshCw,
  },
]

export function softwareCapabilityById(id: string): SoftwareCapability | undefined {
  return softwareCapabilities.find((c) => c.id === id)
}