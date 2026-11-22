import { useCallback, useEffect, useRef, useState } from 'react'
import { Container, Reveal } from '../ui'
import { homepageCategories } from './categoryData'
import { CategoryCard } from './CategoryCard'
import { CategoryOverlay } from './CategoryOverlay'
import type { CategoryKey } from './types'

const CATEGORY_ORDER: CategoryKey[] = ['services', 'solutions', 'industries']

export function CategoryCards() {
  const [hoveredKey, setHoveredKey] = useState<CategoryKey | null>(null)
  const [openKey, setOpenKey] = useState<CategoryKey | null>(null)
  const [canHover, setCanHover] = useState(false)
  const triggerRefs = useRef<Record<CategoryKey, HTMLButtonElement | null>>({
    services: null,
    solutions: null,
    industries: null,
  })

  useEffect(() => {
    const mq = window.matchMedia('(hover: hover) and (pointer: fine)')
    const update = () => setCanHover(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])

  const activeCategory =
    homepageCategories.find((c) => c.key === openKey) ?? null

  const closeOverlay = useCallback(() => {
    const key = openKey
    setOpenKey(null)
    if (key) {
      window.requestAnimationFrame(() => {
        triggerRefs.current[key]?.focus()
      })
    }
  }, [openKey])

  const openOverlay = useCallback((key: CategoryKey) => {
    setOpenKey(key)
  }, [])

  return (
    <section className="bg-surface-50 py-[var(--spacing-section-y)] text-ink">
      <Container>
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-electric-600">
            Capabilities
          </p>
          <h2 className="mt-3 max-w-2xl text-3xl text-ink sm:text-4xl">
            One partner. Multiple dimensions of transformation.
          </h2>
        </Reveal>

        <ul
          className="mt-10 flex flex-col gap-8 lg:mt-12 lg:grid lg:grid-cols-3 lg:gap-6"
          onMouseLeave={() => {
            if (canHover) setHoveredKey(null)
          }}
        >
          {CATEGORY_ORDER.map((key) => {
            const category = homepageCategories.find((c) => c.key === key)
            if (!category) return null
            const elevated = canHover && hoveredKey === key
            const dimmed =
              canHover && hoveredKey !== null && hoveredKey !== key
            return (
              <li
                key={key}
                className="min-w-0"
                onMouseEnter={() => {
                  if (canHover) setHoveredKey(key)
                }}
              >
                <CategoryCard
                  category={category}
                  dimmed={dimmed}
                  elevated={elevated}
                  onOpen={() => openOverlay(key)}
                  setTriggerRef={(el) => {
                    triggerRefs.current[key] = el
                  }}
                />
              </li>
            )
          })}
        </ul>
      </Container>

      <CategoryOverlay
        open={openKey !== null}
        category={activeCategory}
        onClose={closeOverlay}
      />
    </section>
  )
}