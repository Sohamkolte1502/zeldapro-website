import clsx from 'clsx'
import { useEffect, useState } from 'react'

export type SectionNavItem = {
  id: string
  label: string
}

type SectionNavProps = {
  items: SectionNavItem[]
}

export function SectionNav({ items }: SectionNavProps) {
  const [activeId, setActiveId] = useState(items[0]?.id ?? '')

  useEffect(() => {
    const sections = items
      .map((item) => document.getElementById(item.id))
      .filter(Boolean) as HTMLElement[]
    if (sections.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        if (visible[0]?.target.id) {
          setActiveId(visible[0].target.id)
        }
      },
      {
        rootMargin: '-40% 0px -45% 0px',
        threshold: [0, 0.25, 0.5],
      },
    )

    sections.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [items])

  return (
    <nav
      aria-label="On this page"
      className="sticky top-[5.25rem] z-40 border-b border-[#E1E8F2] bg-white/95 backdrop-blur-sm sm:top-[6rem]"
    >
      <div className="mx-auto w-full max-w-content px-5 sm:px-6 lg:px-8">
        <ul className="flex gap-1 overflow-x-auto py-2.5 [-ms-overflow-style:none] [scrollbar-width:none] sm:gap-2 [&::-webkit-scrollbar]:hidden">
          {items.map((item) => {
            const active = item.id === activeId
            return (
              <li key={item.id} className="shrink-0">
                <a
                  href={`#${item.id}`}
                  className={clsx(
                    'inline-flex whitespace-nowrap rounded-full px-3 py-1.5 text-sm font-medium transition-colors',
                    active
                      ? 'bg-[#EEF3FC] text-[#2878F0]'
                      : 'text-brand-950 hover:bg-[#F5F7FA]',
                    'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2878F0]',
                  )}
                  aria-current={active ? 'location' : undefined}
                >
                  {item.label}
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}