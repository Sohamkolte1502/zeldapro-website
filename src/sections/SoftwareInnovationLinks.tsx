import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { innovationFocusAreas, innovationPage } from '../data/innovation'
import { softwareCapabilities, softwarePage } from '../data/software'
import { Container, Reveal } from '../components/ui'

const sectionDescription = `${softwarePage.subtext} ${innovationPage.subtext}`

type LinkItem = {
  label: string
  href: string
}

const linkItems: LinkItem[] = [
  ...softwareCapabilities.map((c) => ({
    label: c.title,
    href: `/software#${c.id}`,
  })),
  ...innovationFocusAreas.map((p) => ({
    label: p.title,
    href: '/innovation',
  })),
]

function AnchorLink({ item }: { item: LinkItem }) {
  return (
    <Link
      to={item.href}
      className="group flex min-h-[3.25rem] items-start gap-2 border-b-2 border-electric-500/35 pb-3 text-left text-lg font-medium text-brand-950 transition-colors hover:border-electric-500 hover:text-electric-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-electric-600 sm:text-xl"
    >
      <span className="min-w-0 flex-1 leading-snug">{item.label}</span>
      <ArrowUpRight
        size={20}
        className="mt-0.5 shrink-0 text-electric-500 opacity-70 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
        aria-hidden
      />
    </Link>
  )
}

export function SoftwareInnovationLinks() {
  return (
    <section className="bg-surface-0 py-14 sm:py-16 lg:py-20">
      <Container className="max-w-6xl">
        <Reveal>
          <div className="text-center">
            <h2 className="font-heading text-2xl text-brand-950 sm:text-3xl">
              Software &amp; Innovation
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-ink-muted sm:text-base">
              {sectionDescription}
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <ul className="mt-12 grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
            {linkItems.map((item) => (
              <li key={`${item.href}-${item.label}`}>
                <AnchorLink item={item} />
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  )
}