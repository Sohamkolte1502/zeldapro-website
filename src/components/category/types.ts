export type CategoryKey = 'services' | 'solutions' | 'industries'

export type CategoryItem = {
  title: string
  href: string
  summary?: string
}

export type CategoryDefinition = {
  key: CategoryKey
  title: string
  description: string
  viewAllHref: string
  viewAllLabel: string
  items: CategoryItem[]
}