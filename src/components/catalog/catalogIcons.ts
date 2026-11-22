import {
  AppWindow,
  Building2,
  Cloud,
  Compass,
  Database,
  Factory,
  GraduationCap,
  HeartPulse,
  Landmark,
  LifeBuoy,
  Radio,
  RadioTower,
  Shield,
  ShoppingBag,
  Sparkles,
  Truck,
  Workflow,
  type LucideIcon,
} from 'lucide-react'
import type { CatalogItem } from './InteractiveCatalog'
import type { Service } from '../../data/services'

const serviceIcons: Record<string, LucideIcon> = {
  'ai-strategy-consulting': Compass,
  'generative-agentic-ai-engineering': Sparkles,
  'data-engineering-analytics': Database,
  'application-platform-development': AppWindow,
  'cloud-devops-platform-engineering': Cloud,
  'iot-iiot-digital-systems': Radio,
  'cybersecurity-trust-engineering': Shield,
  'digital-transformation': Workflow,
  'managed-technology-support': LifeBuoy,
}

const solutionIcons: Record<string, LucideIcon> = {
  'enterprise-generative-ai': Sparkles,
  'agentic-workflow-systems': Workflow,
  'predictive-decision-intelligence': Database,
  'computer-vision': Radio,
  'industrial-iot-intelligence': RadioTower,
  'ai-enabled-digital-products': AppWindow,
}

const industryIcons: Record<string, LucideIcon> = {
  'healthcare-life-sciences': HeartPulse,
  'banking-financial-services': Landmark,
  'manufacturing-industrial': Factory,
  'logistics-supply-chain': Truck,
  'retail-consumer': ShoppingBag,
  'energy-utilities': RadioTower,
  'technology-telecom': Building2,
  'public-sector-education': GraduationCap,
}

export function iconForHref(href: string): LucideIcon {
  const slug = href.split('/').filter(Boolean).pop() ?? ''
  return serviceIcons[slug] ?? solutionIcons[slug] ?? industryIcons[slug] ?? Compass
}

export function iconForSolutionSlug(slug: string): LucideIcon {
  return solutionIcons[slug] ?? Compass
}

export function iconForServiceSlug(slug: string): LucideIcon {
  return serviceIcons[slug] ?? Compass
}

export function iconForIndustrySlug(slug: string): LucideIcon {
  return industryIcons[slug] ?? Compass
}

export function serviceCatalogItems(services: Service[]): CatalogItem[] {
  return services.map((service) => ({
    id: service.slug,
    title: service.title,
    summary: service.summary,
    highlights: service.capabilities.slice(0, 3),
    icon: serviceIcons[service.slug] ?? Compass,
  }))
}