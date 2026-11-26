import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import aboutHero from '../../assets/images/about-hero.jpg'
import { Container } from '../../components/ui'
import { HERO_PROOF_LINE } from '../../data/homePage'
import { HeroAmbientNetwork } from './HeroAmbientNetwork'

const HERO_EYEBROW = 'Enterprise AI & Technology'
const HERO_HEADLINE = 'Engineering intelligence for a smarter enterprise.'
const HERO_DESCRIPTION =
  'We help enterprises harness AI, modern software engineering and connected technologies to transform operations, unlock new possibilities and build lasting advantage.'

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.08 } },
}

const fade = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
}

export function LightCinematicHero() {
  const reduceMotion = useReducedMotion()

  const copy = (
    <>
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-electric-600">
        {HERO_EYEBROW}
      </p>
      <h1 className="mt-5 max-w-4xl font-heading text-4xl leading-[1.08] text-brand-950 sm:text-5xl lg:text-[3.35rem] lg:leading-[1.06]">
        {HERO_HEADLINE}
      </h1>
      <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-muted sm:text-lg">
        {HERO_DESCRIPTION}
      </p>
      <div className="mt-8 flex flex-wrap gap-3 sm:gap-4">
        <Link
          to="/services"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-950 px-6 py-3 text-sm font-semibold text-on-dark shadow-md transition-[transform,background] duration-200 hover:-translate-y-0.5 hover:bg-brand-900 motion-reduce:hover:translate-y-0"
        >
          Explore our capabilities
          <ArrowUpRight size={18} aria-hidden />
        </Link>
        <Link
          to="/contact"
          className="inline-flex items-center justify-center rounded-full border border-line bg-white/80 px-6 py-3 text-sm font-semibold text-brand-950 backdrop-blur-sm transition-colors hover:border-electric-500/45 hover:text-electric-600"
        >
          Talk to our experts
        </Link>
      </div>
      <p className="mt-6 max-w-xl text-sm leading-relaxed text-ink-subtle">
        {HERO_PROOF_LINE}
      </p>
      <nav
        className="mt-8 flex flex-wrap gap-2"
        aria-label="Jump to homepage sections"
      >
        {[
          { label: 'Services', href: '#what-we-do' },
          { label: 'AI solutions', href: '#ai-solutions' },
          { label: 'Industries', href: '#industries' },
          { label: 'How we work', href: '#scroll-delivery-heading' },
        ].map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="rounded-full bg-white/90 px-3.5 py-1.5 text-xs font-semibold text-brand-950 ring-1 ring-line backdrop-blur-sm transition-colors hover:ring-electric-500/45 hover:text-electric-600"
          >
            {item.label}
          </a>
        ))}
      </nav>
    </>
  )

  return (
    <section className="relative flex min-h-[calc(100svh-var(--nav-h))] flex-col overflow-hidden bg-white text-ink">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute inset-0 bg-[linear-gradient(125deg,#ffffff_0%,#f5f8fb_42%,#eef3f8_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_85%_20%,rgba(186,196,255,0.22),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_10%_90%,rgba(14,165,233,0.08),transparent_50%)]" />
        <img
          src={aboutHero}
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-[70%_center] opacity-[0.14] mix-blend-multiply"
          width={1920}
          height={720}
          decoding="async"
          fetchPriority="high"
        />
        <HeroAmbientNetwork />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </div>

      <Container className="relative z-10 flex flex-1 flex-col justify-center py-14 sm:py-16 lg:py-20">
        {reduceMotion ? (
          <div className="max-w-3xl">{copy}</div>
        ) : (
          <motion.div
            className="max-w-3xl"
            variants={stagger}
            initial="hidden"
            animate="show"
          >
            <motion.div variants={fade}>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-electric-600">
                {HERO_EYEBROW}
              </p>
            </motion.div>
            <motion.div variants={fade}>
              <h1 className="mt-5 max-w-4xl font-heading text-4xl leading-[1.08] text-brand-950 sm:text-5xl lg:text-[3.35rem] lg:leading-[1.06]">
                {HERO_HEADLINE}
              </h1>
            </motion.div>
            <motion.div variants={fade}>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-muted sm:text-lg">
                {HERO_DESCRIPTION}
              </p>
            </motion.div>
            <motion.div variants={fade}>
              <div className="mt-8 flex flex-wrap gap-3 sm:gap-4">
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-950 px-6 py-3 text-sm font-semibold text-on-dark shadow-md transition-[transform,background] duration-200 hover:-translate-y-0.5 hover:bg-brand-900 motion-reduce:hover:translate-y-0"
                >
                  Explore our capabilities
                  <ArrowUpRight size={18} aria-hidden />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-full border border-line bg-white/80 px-6 py-3 text-sm font-semibold text-brand-950 backdrop-blur-sm transition-colors hover:border-electric-500/45 hover:text-electric-600"
                >
                  Talk to our experts
                </Link>
              </div>
            </motion.div>
            <motion.div variants={fade}>
              <p className="mt-6 max-w-xl text-sm leading-relaxed text-ink-subtle">
                {HERO_PROOF_LINE}
              </p>
              <nav
                className="mt-8 flex flex-wrap gap-2"
                aria-label="Jump to homepage sections"
              >
                {[
                  { label: 'Services', href: '#what-we-do' },
                  { label: 'AI solutions', href: '#ai-solutions' },
                  { label: 'Industries', href: '#industries' },
                  { label: 'How we work', href: '#scroll-delivery-heading' },
                ].map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="rounded-full bg-white/90 px-3.5 py-1.5 text-xs font-semibold text-brand-950 ring-1 ring-line backdrop-blur-sm transition-colors hover:ring-electric-500/45 hover:text-electric-600"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </motion.div>
          </motion.div>
        )}
      </Container>
    </section>
  )
}