export function ChipList({ items }: { items: string[] }) {
  if (items.length === 0) return null

  return (
    <ul className="flex flex-wrap gap-2 sm:gap-3">
      {items.map((item) => (
        <li
          key={item}
          className="rounded-full border border-[#E1E8F2] bg-white px-3.5 py-1.5 text-sm text-ink-muted sm:px-4 sm:py-2"
        >
          {item}
        </li>
      ))}
    </ul>
  )
}