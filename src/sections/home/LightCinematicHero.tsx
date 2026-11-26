import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { Container } from '../../components/ui'
import { HERO_PROOF_LINE } from '../../data/homePage'
import { HeroIntelligenceScene } from './HeroIntelligenceScene'

const HERO_EYEBROW = 'Enterprise AI & Technology'
const HERO_HEADLINE_LEAD = 'Engineering intelligence'
const HERO_HEADLINE_ACCENT = 'for a smarter enterprise.'
const HERO_DESCRIPTION =
  'We help enterprises harness AI, modern software engineering and connected technologies to transform operations, unlock new possibilities and build lasting advantage.'

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.11, delayChildren: 0.05 } },
}

const fade = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const },
  },
}

const SECTION_JUMPS = [
  { label: 'Services', href: '#what-we-do' },
  { label: 'AI solutions', href: '#ai-solutions' },
  { label: 'Industries', href: '#industries' },
  { label: 'How we work', href: '#scroll-delivery-heading' },
] as const

export function LightCinematicHero() {
  const reduceMotion = useReducedMotion()

  const copyBlock = (
    <>
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-electric-600">
        {HERO_EYEBROW}
      </p>
      <h1 className="mt-5 font-heading text-[clamp(2.35rem,5.8vw,4.15rem)] leading-[1.02] tracking-[-0.03em] text-brand-950">
        <span className="block">{HERO_HEADLINE_LEAD}</span>
        <span className="mt-1 block bg-[linear-gradient(120deg,#081d29_0%,#0284c7_55%,#0f3346_100%)] bg-clip-text text-transparent">
          {HERO_HEADLINE_ACCENT}
        </span>
      </h1>
      <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-muted sm:text-lg">
        {HERO_DESCRIPTION}
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link
          to="/services"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-950 px-6 py-3.5 text-sm font-semibold text-on-dark shadow-[0_12px_28px_rgba(8,29,41,0.18)] transition-[transform,background] duration-200 hover:-translate-y-0.5 hover:bg-brand-900 motion-reduce:hover:translate-y-0"
        >
          Explore our capabilities
          <ArrowUpRight size={18} aria-hidden />
        </Link>
        <Link
          to="/contact"
          className="inline-flex items-center justify-center rounded-full border border-brand-950/15 bg-white/90 px-6 py-3.5 text-sm font-semibold text-brand-950 backdrop-blur-sm transition-colors hover:border-electric-500/45 hover:text-electric-600"
        >
          Talk to our experts
        </Link>
      </div>
      <p className="mt-6 max-w-lg text-sm leading-relaxed text-ink-subtle">
        {HERO_PROOF_LINE}
      </p>
      <nav
        className="mt-6 flex flex-wrap gap-2"
        aria-label="Jump to homepage sections"
      >
        {SECTION_JUMPS.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="rounded-full bg-white/80 px-3.5 py-1.5 text-xs font-semibold text-brand-950 ring-1 ring-brand-950/10 backdrop-blur-sm transition-colors hover:ring-electric-500/40 hover:text-electric-600"
          >
            {item.label}
          </a>
        ))}
      </nav>
    </>
  )

  return (
    <section className="relative overflow-hidden bg-[#f8fafc] text-ink">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_70%_at_30%_0%,#e8eef8_0%,transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_100%_20%,rgba(186,196,255,0.28),transparent_50%)]" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-line to-transparent" />
      </div>

      <Container className="relative flex min-h-[calc(100svh-var(--nav-h))] flex-col justify-center py-12 sm:py-14 lg:py-16">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-6 xl:gap-12">
          {reduceMotion ? (
            <div className="max-w-xl">{copyBlock}</div>
          ) : (
            <motion.div
              className="max-w-xl"
              variants={stagger}
              initial="hidden"
              animate="show"
            >
              {[
                'eyebrow',
                'headline',
                'body',
                'cta',
                'proof',
                'nav',
              ].map((key) => (
                <motion.div key={key} variants={fade}>
                  {key === 'eyebrow' && (
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-electric-600">
                      {HERO_EYEBROW}
                    </p>
                  )}
                  {key === 'headline' && (
                    <h1 className="mt-5 font-heading text-[clamp(2.35rem,5.8vw,4.15rem)] leading-[1.02] tracking-[-0.03em] text-brand-950">
                      <span className="block">{HERO_HEADLINE_LEAD}</span>
                      <span className="mt-1 block bg-[linear-gradient(120deg,#081d29_0%,#0284c7_55%,#0f3346_100%)] bg-clip-text text-transparent">
                        {HERO_HEADLINE_ACCENT}
                      </span>
                    </h1>
                  )}
                  {key === 'body' && (
                    <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-muted sm:text-lg">
                      {HERO_DESCRIPTION}
                    </p>
                  )}
                  {key === 'cta' && (
                    <div className="mt-8 flex flex-wrap gap-3">
                      <Link
                        to="/services"
                        className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-950 px-6 py-3.5 text-sm font-semibold text-on-dark shadow-[0_12px_28px_rgba(8,29,41,0.18)] transition-[transform,background] duration-200 hover:-translate-y-0.5 hover:bg-brand-900 motion-reduce:hover:translate-y-0"
                      >
                        Explore our capabilities
                        <ArrowUpRight size={18} aria-hidden />
                      </Link>
                      <Link
                        to="/contact"
                        className="inline-flex items-center justify-center rounded-full border border-brand-950/15 bg-white/90 px-6 py-3.5 text-sm font-semibold text-brand-950 backdrop-blur-sm transition-colors hover:border-electric-500/45 hover:text-electric-600"
                      >
                        Talk to our experts
                      </Link>
                    </div>
                  )}
                  {key === 'proof' && (
                    <p className="mt-6 max-w-lg text-sm leading-relaxed text-ink-subtle">
                      {HERO_PROOF_LINE}
                    </p>
                  )}
                  {key === 'nav' && (
                    <nav
                      className="mt-6 flex flex-wrap gap-2"
                      aria-label="Jump to homepage sections"
                    >
                      {SECTION_JUMPS.map((item) => (
                        <a
                          key={item.href}
                          href={item.href}
                          className="rounded-full bg-white/80 px-3.5 py-1.5 text-xs font-semibold text-brand-950 ring-1 ring-brand-950/10 backdrop-blur-sm transition-colors hover:ring-electric-500/40 hover:text-electric-600"
                        >
                          {item.label}
                        </a>
                      ))}
                    </nav>
                  )}
                </motion.div>
              ))}
            </motion.div>
          )}

          <motion.div
            className="relative lg:justify-self-end"
            initial={reduceMotion ? false : { opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <HeroIntelligenceScene />
          </motion.div>
        </div>
      </Container>
    </section>
  )
}