export type RelatedCarouselItem = {
  slug: string
  title: string
  description: string
  href: string
  image?: string
  badge?: string
  linkLabel?: string
}

export type RelatedCarouselDefaultProps = {
  variant?: 'default'
  heading: string
  description: string
  viewAllHref: string
  viewAllLabel: string
  items: RelatedCarouselItem[]
  sectionId?: string
  sectionBackground?: string
  /** `boxed` = grey rounded tray (industry). `flat` = white band like other detail sections (service). */
  surface?: 'boxed' | 'flat'
}

export type RelatedCarouselPeekProps = {
  variant: 'peek'
  heading: string
  items: RelatedCarouselItem[]
  sectionId?: string
}

export type RelatedCarouselProps =
  | RelatedCarouselDefaultProps
  | RelatedCarouselPeekProps