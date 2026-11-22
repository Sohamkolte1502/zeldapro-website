import { RelatedCarouselDefault } from './RelatedCarouselDefault'
import { RelatedCarouselPeek } from './RelatedCarouselPeek'
import type { RelatedCarouselProps } from './relatedCarouselTypes'

export type { RelatedCarouselItem, RelatedCarouselProps } from './relatedCarouselTypes'

export function RelatedCarousel(props: RelatedCarouselProps) {
  if (props.variant === 'peek') {
    return (
      <RelatedCarouselPeek
        heading={props.heading}
        items={props.items}
        sectionId={props.sectionId}
      />
    )
  }

  return (
    <RelatedCarouselDefault
      heading={props.heading}
      description={props.description}
      viewAllHref={props.viewAllHref}
      viewAllLabel={props.viewAllLabel}
      items={props.items}
      sectionId={props.sectionId}
    />
  )
}