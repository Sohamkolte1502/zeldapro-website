import { PageHeaderBand, type PageHeaderBandProps } from './PageHeaderBand'

export type CategoryIndexBandProps = Omit<PageHeaderBandProps, 'backgroundImage'> & {
  heroImageSrc?: string
}

/** @deprecated Use PageHeaderBand — kept for Services index compatibility. */
export function CategoryIndexBand({
  heroImageSrc,
  ...props
}: CategoryIndexBandProps) {
  return <PageHeaderBand {...props} backgroundImage={heroImageSrc} />
}