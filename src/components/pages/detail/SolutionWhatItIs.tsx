import clsx from 'clsx'
import { CheckCircle2 } from 'lucide-react'
import type { Solution } from '../../../data'
import { Reveal } from '../../ui'

export function SolutionWhatItIs({ solution }: { solution: Solution }) {
  const pressures = solution.problemsSolved.slice(0, 4)
  const outcomes = solution.benefits.slice(0, 4)

  return (
    <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
      <Reveal className="lg:col-span-7">
        <p className="text-lg leading-relaxed text-ink sm:text-xl sm:leading-relaxed">
          {solution.whatItIs}
        </p>
        {solution.useCases.length > 0 ? (
          <p className="mt-6 text-sm leading-relaxed text-ink-muted sm:text-base">
            In enterprise programmes, this pattern shows up when teams need
            repeatable ways to{' '}
            {solution.useCases[0]?.replace(/\.$/, '').toLowerCase() ??
              'apply intelligence to operational work'}
            —with governance, integration, and adoption planned from the start,
            not bolted on after a demo.
          </p>
        ) : null}
      </Reveal>

      <div className="grid gap-5 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-1">
        {pressures.length > 0 ? (
          <Reveal delay={0.05}>
            <div className="rounded-2xl border border-line bg-surface-50 p-5 sm:p-6">
              <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-electric-600">
                Pressures we address
              </h3>
              <ul className="mt-4 space-y-3">
                {pressures.map((item) => (
                  <li
                    key={item}
                    className="flex gap-2.5 text-sm leading-snug text-ink-muted"
                  >
                    <CheckCircle2
                      size={18}
                      className="mt-0.5 shrink-0 text-electric-600"
                      aria-hidden
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ) : null}

        {outcomes.length > 0 ? (
          <Reveal delay={0.1}>
            <div
              className={clsx(
                'rounded-2xl border border-electric-500/20 bg-gradient-to-br from-electric-500/[0.06] to-white p-5 sm:p-6',
              )}
            >
              <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-electric-600">
                What teams gain
              </h3>
              <ul className="mt-4 space-y-3">
                {outcomes.map((item) => (
                  <li
                    key={item}
                    className="flex gap-2.5 text-sm leading-snug text-ink"
                  >
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-electric-600"
                      aria-hidden
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ) : null}
      </div>
    </div>
  )
}