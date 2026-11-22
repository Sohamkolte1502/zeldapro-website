export function HowItWorksFlow({ text }: { text: string }) {
  const trimmed = text.trim()
  if (!trimmed) return null

  const steps = trimmed
    .split(/(?<=[.!?])\s+/)
    .map((s) => s.trim())
    .filter(Boolean)

  if (steps.length <= 1) {
    return (
      <p className="max-w-3xl text-sm leading-relaxed text-ink-muted sm:text-base">
        {trimmed}
      </p>
    )
  }

  return (
    <ol className="grid gap-6 lg:grid-cols-3 lg:gap-8">
      {steps.map((step, index) => (
        <li
          key={step}
          className="relative rounded-xl border border-[#E1E8F2] bg-white p-5 sm:p-6"
        >
          <span
            className="inline-flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold text-white"
            style={{ backgroundColor: '#2878F0' }}
            aria-hidden
          >
            {index + 1}
          </span>
          <p className="mt-4 text-sm leading-relaxed text-ink-muted sm:text-base">
            {step}
          </p>
        </li>
      ))}
    </ol>
  )
}