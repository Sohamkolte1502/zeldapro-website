import type { LucideIcon } from 'lucide-react'
import {
  Bot,
  Brain,
  Cpu,
  Eye,
  Package,
  Sparkles,
} from 'lucide-react'
import { solutions } from './solutions'

const iconBySlug: Record<string, LucideIcon> = {
  'enterprise-generative-ai': Sparkles,
  'agentic-workflow-systems': Bot,
  'predictive-decision-intelligence': Brain,
  'computer-vision': Eye,
  'industrial-iot-intelligence': Cpu,
  'ai-enabled-digital-products': Package,
}

export type HomeSolutionCard = {
  slug: string
  title: string
  description: string
  href: string
  icon: LucideIcon
}

export const homeSolutionsGridCopy = {
  eyebrow: 'AI solutions',
  heading: 'Intelligence patterns built for enterprise context.',
  subline:
    'Adaptable solution architectures shaped to your data, workflows, and operating controls.',
  viewAllLabel: 'Explore AI solutions',
  viewAllHref: '/ai-solutions',
} as const

export const homeSolutionsGrid: HomeSolutionCard[] = solutions.map((item) => ({
  slug: item.slug,
  title: item.title,
  description: item.whatItIs,
  href: `/ai-solutions/${item.slug}`,
  icon: iconBySlug[item.slug] ?? Sparkles,
}))