import clsx from 'clsx'
import { ArrowUpRight, Check } from 'lucide-react'
import { Container, Reveal } from '../../components/ui'
import { careersBuildWithUs } from '../../data/careersPage'

type CareersBuildWithUsSectionProps = {
  onGetInTouch: () => void
}

export function CareersBuildWithUsSection({
  onGetInTouch,
}: CareersBuildWithUsSectionProps) {
  const copy = careersBuildWithUs

  return (
    <section
      className="border-b border-line bg-surface-0 py-14 text-[#0f2128] sm:py-20 lg:py-24"
      aria-labelledby="careers-build-heading"
    >
      <Container>
        <div className="grid items-start gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 xl:gap-24">
          <Reveal className="min-w-0">
            <h2
              id="careers-build-heading"
              className="max-w-[14ch] font-heading text-[clamp(2.2rem,4.6vw,3.6rem)] font-extrabold leading-[1.06] tracking-[-0.03em] text-balance text-brand-950"
            >
              {copy.heading}
            </h2>
            <p className="mt-6 max-w-[46ch] text-base leading-[1.7] text-[#5a6a72] sm:text-lg">
              {copy.lead}
            </p>

            <ul className="mt-10 max-w-[560px] border-t border-[#e3ebed] sm:mt-12">
              {copy.focusAreas.map((item) => (
                <li
                  key={item}
                  className="group flex items-center gap-4 border-b border-[#e3ebed] py-4 text-[1.0625rem] font-medium leading-snug transition-[padding] duration-300 ease-out hover:pl-3 motion-reduce:transition-none"
                >
                  <span
                    className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#e4f4f1] text-[#0d6b66] transition-colors duration-300 group-hover:bg-[#0d6b66] group-hover:text-white"
                    aria-hidden
                  >
                    <Check size={14} strokeWidth={2.5} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.08} className="min-w-0 lg:sticky lg:top-[calc(var(--nav-h)+2rem)]">
            <aside
              className={clsx(
                'relative isolate overflow-hidden rounded-[28px] p-8 text-white sm:p-10 lg:p-12',
                'bg-[linear-gradient(145deg,#0a2a33_0%,#0f4745_100%)]',
                'shadow-[0_40px_80px_-36px_rgba(8,36,44,0.55)]',
                'ring-1 ring-inset ring-white/[0.06]',
              )}
            >
              <motionRings />
              <span className="text-[0.8125rem] font-bold uppercase tracking-[0.16em] text-[#62e3c0]">
                {copy.cardEyebrow}
              </span>
              <h3 className="mt-3.5 max-w-[18ch] font-heading text-[clamp(1.7rem,2.9vw,2.35rem)] font-extrabold leading-[1.14] tracking-[-0.02em] text-balance">
                {copy.cardTitle}
              </h3>
              <p className="mt-5 max-w-[38ch] text-[1.0625rem] leading-[1.7] text-white/80">
                {copy.cardBody}
              </p>
              <button
                type="button"
                onClick={onGetInTouch}
                className="mt-8 inline-flex w-full items-center justify-center gap-2.5 rounded-xl bg-[#62e3c0] px-6 py-3.5 text-base font-bold text-[#06302c] transition-[transform,box-shadow,background] duration-200 hover:-translate-y-0.5 hover:bg-[#7aedce] hover:shadow-[0_14px_28px_-12px_rgba(98,227,192,0.65)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white motion-reduce:hover:translate-y-0 sm:mt-9 sm:w-auto"
              >
                {copy.ctaLabel}
                <ArrowUpRight size={14} aria-hidden />
              </button>
            </aside>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}

function motionRings() {
  return (
    <>
      <span
        className="pointer-events-none absolute -bottom-44 -right-40 z-0 h-[440px] w-[440px] rounded-full bg-[rgba(98,227,192,0.07)]"
        aria-hidden
      />
      <span
        className="pointer-events-none absolute -bottom-28 -right-24 z-0 h-[300px] w-[300px] rounded-full border border-[rgba(98,227,192,0.28)]"
        aria-hidden
      />
      <span
        className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(120%_90%_at_100%_100%,rgba(98,227,192,0.16),transparent_55%)]"
        aria-hidden
      />
    </>
  )
}