import clsx from 'clsx'
import { ArrowRight } from 'lucide-react'
import { useEffect, useId, useState } from 'react'
import { Link } from 'react-router-dom'
import { CategoryPanelPreview } from './CategoryPanelPreview'

export type CategoryPanelItem = {
  slug: string
  title: string
  summary: string
}

type CategoryPanelListProps = {
  title: string
  items: CategoryPanelItem[]
  basePath: string
}

function splitColumns(items: CategoryPanelItem[]) {
  const mid = Math.ceil(items.length / 2)
  return [items.slice(0, mid), items.slice(mid)] as const
}

function PanelColumn({
  items,
  basePath,
  canHover,
  onPreview,
  onClearPreview,
}: {
  items: CategoryPanelItem[]
  basePath: string
  canHover: boolean
  onPreview: (item: CategoryPanelItem, el: HTMLElement) => void
  onClearPreview: () => void
}) {
  return (
    <div
      className="min-w-0 rounded-3xl p-6"
      style={{ backgroundColor: '#EEF3FC', borderRadius: '24px' }}
    >
      <ul className="space-y-6">
        {items.map((item) => (
          <li key={item.slug}>
            <Link
              to={`${basePath}/${item.slug}`}
              className={clsx(
                'group flex items-center justify-between gap-3 text-[15px] leading-snug font-medium text-brand-950 transition-colors sm:text-base',
                'hover:text-[#2878F0] focus-visible:text-[#2878F0]',
                'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2878F0]',
              )}
              onMouseEnter={(e) => {
                if (canHover) onPreview(item, e.currentTarget)
              }}
              onMouseLeave={() => {
                if (canHover) onClearPreview()
              }}
              onFocus={(e) => {
                if (canHover) onPreview(item, e.currentTarget)
              }}
              onBlur={() => {
                if (canHover) onClearPreview()
              }}
            >
              <span className="min-w-0">{item.title}</span>
              <ArrowRight
                size={16}
                aria-hidden
                className="shrink-0 text-[#2878F0] opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:opacity-100 group-focus-visible:translate-x-0.5 group-focus-visible:opacity-100"
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function CategoryPanelList({
  title,
  items,
  basePath,
}: CategoryPanelListProps) {
  const titleId = useId()
  const [boundary, setBoundary] = useState<HTMLDivElement | null>(null)
  const [canHover, setCanHover] = useState(false)
  const [preview, setPreview] = useState<{
    item: CategoryPanelItem
    anchor: HTMLElement
  } | null>(null)

  useEffect(() => {
    const mq = window.matchMedia('(hover: hover) and (pointer: fine)')
    const update = () => setCanHover(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])

  const [leftCol, rightCol] = splitColumns(items)

  return (
    <div
      ref={setBoundary}
      className="relative max-w-full overflow-hidden rounded-[28px] bg-white px-6 py-10 shadow-sm sm:px-10 sm:py-12"
      aria-labelledby={titleId}
    >
      <h2
        id={titleId}
        className="font-heading text-3xl font-medium text-brand-950 sm:text-4xl"
      >
        {title}
      </h2>

      <div className="mt-8 grid gap-6 md:grid-cols-2 md:gap-8">
        <PanelColumn
          items={leftCol}
          basePath={basePath}
          canHover={canHover}
          onPreview={(item, el) => setPreview({ item, anchor: el })}
          onClearPreview={() => setPreview(null)}
        />
        <PanelColumn
          items={rightCol}
          basePath={basePath}
          canHover={canHover}
          onPreview={(item, el) => setPreview({ item, anchor: el })}
          onClearPreview={() => setPreview(null)}
        />
      </div>

      {canHover && preview ? (
        <CategoryPanelPreview
          open
          anchor={preview.anchor}
          boundary={boundary}
          title={preview.item.title}
          summary={preview.item.summary}
        />
      ) : null}
    </div>
  )
}