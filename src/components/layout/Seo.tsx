import { Helmet } from 'react-helmet-async'

type SeoProps = {
  title: string
  description?: string
}

export function Seo({ title, description }: SeoProps) {
  const pageTitle = title.includes('Zeldapro') ? title : `${title} | Zeldapro`

  return (
    <Helmet>
      <title>{pageTitle}</title>
      {description ? (
        <meta name="description" content={description} />
      ) : null}
    </Helmet>
  )
}