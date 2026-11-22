import { Link } from 'react-router-dom'

type RelatedLinksProps = {
  items: { title: string; href: string; summary?: string }[]
}

export function RelatedLinks({ items }: RelatedLinksProps) {
  if (items.length === 0) return null

  return (
    <ul className="grid gap-3 sm:grid-cols-2">
      {items.map((item) => (
        <li key={item.href} className="min-w-0">
          <Link
            to={item.href}
            className="block rounded-lg border border-line bg-surface-0 p-4 transition-colors hover:border-electric-600 hover:bg-surface-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric-600"
          >
            <span className="font-medium text-brand-950">{item.title}</span>
            {item.summary ? (
              <p className="mt-1 line-clamp-2 text-sm text-ink-muted">
                {item.summary}
              </p>
            ) : null}
          </Link>
        </li>
      ))}
    </ul>
  )
}