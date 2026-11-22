import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

type DetailLinkTilesProps = {
  items: { title: string; href: string; summary?: string }[]
}

export function DetailLinkTiles({ items }: DetailLinkTilesProps) {
  if (items.length === 0) return null

  return (
    <ul className="grid gap-4 sm:grid-cols-2">
      {items.map((item) => (
        <li key={item.href} className="min-w-0">
          <Link
            to={item.href}
            className="group flex items-start justify-between gap-3 rounded-xl border border-[#E1E8F2] bg-white p-5 transition-colors hover:border-[#2878F0]/40 hover:bg-[#F5F7FA] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2878F0]"
          >
            <span className="min-w-0">
              <span className="block font-medium text-brand-950 group-hover:text-[#2878F0]">
                {item.title}
              </span>
              {item.summary ? (
                <span className="mt-1 block line-clamp-2 text-sm text-ink-muted">
                  {item.summary}
                </span>
              ) : null}
            </span>
            <ArrowRight
              size={18}
              aria-hidden
              className="mt-0.5 shrink-0 text-[#2878F0] opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-100 group-focus-visible:opacity-100"
            />
          </Link>
        </li>
      ))}
    </ul>
  )
}