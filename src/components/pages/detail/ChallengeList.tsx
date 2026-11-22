export function ChallengeList({ items }: { items: string[] }) {
  if (items.length === 0) return null

  return (
    <ul className="grid gap-5 sm:grid-cols-2 sm:gap-6">
      {items.map((item) => (
        <li
          key={item}
          className="flex gap-3 text-sm leading-relaxed text-ink-muted sm:text-base"
        >
          <span
            className="mt-2 h-2 w-2 shrink-0 rounded-full"
            style={{ backgroundColor: '#2878F0' }}
            aria-hidden
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}