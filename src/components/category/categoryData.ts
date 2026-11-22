import { industries, services, solutions } from '../../data'
import type { CategoryDefinition } from './types'

export const homepageCategories: CategoryDefinition[] = [
  {
    key: 'services',
    title: 'Services',
    description:
      'Connected advisory, engineering, and transformation services designed around real business outcomes.',
    viewAllHref: '/services',
    viewAllLabel: 'View all services',
    items: services.map((s) => ({
      title: s.title,
      href: `/services/${s.slug}`,
      summary: s.summary,
    })),
  },
  {
    key: 'solutions',
    title: 'AI Solutions',
    description: 'Intelligence built around the way your business works.',
    viewAllHref: '/ai-solutions',
    viewAllLabel: 'View all AI solutions',
    items: solutions.map((s) => ({
      title: s.title,
      href: `/ai-solutions/${s.slug}`,
      summary: s.whatItIs,
    })),
  },
  {
    key: 'industries',
    title: 'Industries',
    description:
      'Domain understanding. Technology that moves business forward.',
    viewAllHref: '/industries',
    viewAllLabel: 'View all industries',
    items: industries.map((i) => ({
      title: i.title,
      href: `/industries/${i.slug}`,
      summary: i.howAiHelps[0],
    })),
  },
]