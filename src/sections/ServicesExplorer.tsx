import {
  AppWindow,
  Cloud,
  Compass,
  Database,
  LifeBuoy,
  Radio,
  Shield,
  Sparkles,
  Workflow,
  type LucideIcon,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { services } from '../data'
import { Card, Container, Reveal } from '../components/ui'

const icons: Record<string, LucideIcon> = {
  'ai-strategy-consulting': Compass,
  'generative-agentic-ai-engineering': Sparkles,
  'data-engineering-analytics': Database,
  'application-platform-development': AppWindow,
  'cloud-devops-platform-engineering': Cloud,
  'iot-iiot-digital-systems': Radio,
  'cybersecurity-trust-engineering': Shield,
  'digital-transformation': Workflow,
  'managed-technology-support': LifeBuoy,
}

export function ServicesExplorer() {
  return (
    <section className="bg-surface-50 py-[var(--spacing-section-y)] text-ink">
      <Container>
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-electric-600">
            Services
          </p>
          <h2 className="mt-3 max-w-2xl text-3xl text-ink sm:text-4xl">
            From AI ambition to enterprise-scale execution.
          </h2>
        </Reveal>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = icons[service.slug] ?? Compass
            return (
              <li key={service.slug}>
                <Reveal delay={(index % 3) * 0.05} className="h-full">
                  <Card className="flex h-full flex-col">
                    <Icon className="text-electric-600" size={22} aria-hidden />
                    <h3 className="mt-4 text-lg text-brand-950">{service.title}</h3>
                    <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-ink-muted">
                      {service.summary}
                    </p>
                    <Link
                      to={`/services/${service.slug}`}
                      className="link-underline mt-5 inline-block text-sm font-semibold text-electric-600"
                    >
                      View service
                    </Link>
                  </Card>
                </Reveal>
              </li>
            )
          })}
        </ul>
      </Container>
    </section>
  )
}
