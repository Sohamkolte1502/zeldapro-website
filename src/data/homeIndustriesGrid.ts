import { industries } from './industries'

export const homeIndustriesGridCopy = {
  eyebrow: 'Industries',
  heading: 'Domain depth for complex, data-rich environments.',
  subline:
    'We apply AI and modern engineering where regulatory, operational, and integration constraints are real.',
  viewAllLabel: 'All industries',
  viewAllHref: '/industries',
} as const

export const homeIndustriesGrid = industries.map((industry) => ({
  slug: industry.slug,
  title: industry.title,
  summary: industry.challenges[0] ?? '',
  href: `/industries/${industry.slug}`,
}))