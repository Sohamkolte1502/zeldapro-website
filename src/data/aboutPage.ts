import { registeredOffice } from './privacyPolicy'

export const aboutPageMeta = {
  eyebrow: 'About Zeldapro',
  title: 'We do not just build technology. We build possibilities.',
  subtitle:
    'Zeldapro Consultancy Private Limited is an enterprise AI and technology partner—connecting business ambition with engineering discipline across advisory, delivery, and product innovation.',
  seoDescription:
    'Who we are, how we work, and why enterprises choose Zeldapro for AI strategy, engineering, and digital products.',
}

export const aboutMetaFields = [
  { label: 'Legal entity', value: 'Zeldapro Consultancy Private Limited' },
  { label: 'Headquarters', value: 'Mumbai, Maharashtra, India' },
  { label: 'What we do', value: 'AI · Technology · Software · Products' },
  { label: 'Signature product', value: 'Carevie health platform' },
] as const

export const aboutHighlights = [
  {
    title: 'Business-led from day one',
    body: 'We clarify outcomes, constraints, and adoption context before models, clouds, or codebases are chosen.',
  },
  {
    title: 'Integration-ready engineering',
    body: 'Identity, data, security, and operations are designed in—not bolted on before launch.',
  },
  {
    title: 'Responsible AI by default',
    body: 'Governance, privacy, human oversight, and measurable risk controls sit alongside capability.',
  },
  {
    title: 'Product as well as programmes',
    body: 'From enterprise programmes to our own digital health innovation with Carevie, we ship what we stand behind.',
  },
] as const

export const aboutWhoWeAre = {
  eyebrow: 'Who we are',
  paragraphs: [
    'Zeldapro is an AI and technology company. We work with businesses that need new systems to solve old problems, and with teams that already have data, software and infrastructure and want more from them.',
    'Our work spans nine service areas: AI strategy, generative and agentic engineering, data, application development, cloud, industrial systems, security, transformation and managed support. They sit under one roof because the hard problems never stay inside one discipline.',
    'We are a new company. We do not claim a long client list or a decade of awards. What we bring is a clear method, senior engineering attention and a refusal to call something finished before it runs.',
  ],
} as const

export const aboutCapabilityPillars = [
  {
    title: 'AI & Technology Services',
    description: 'Nine connected advisory and engineering practices—from strategy through managed support.',
    href: '/services',
  },
  {
    title: 'AI Solution Patterns',
    description: 'Six repeatable solution shapes for generative AI, agents, decision intelligence, vision, and more.',
    href: '/ai-solutions',
  },
  {
    title: 'Software Engineering',
    description: 'Custom platforms, APIs, and integration built for enterprise security and scale.',
    href: '/software',
  },
  {
    title: 'Innovation & R&D',
    description: 'Product exploration, prototypes, and IP—including our Carevie digital health platform.',
    href: '/innovation',
  },
] as const

export const aboutScaleMarkers = [
  { label: 'Service practices', value: '9' },
  { label: 'AI solution patterns', value: '6' },
  { label: 'Industry perspectives', value: '8' },
  { label: 'Lifecycle stages', value: '5' },
] as const

export const aboutRegisteredOffice = registeredOffice

/** Hero image: save as src/assets/images/about-hero.jpg (1920×720, 8:3). */
export const aboutHeroImagePrompt = `Wide cinematic hero for an enterprise technology and AI consultancy "About Us" page. Abstract future-forward digital transformation: connected nodes, luminous pathways, subtle cityscale infrastructure, collaboration and innovation mood. Deep navy #081d29, electric cyan #38bdf8 accents, restrained teal. Left third darker for white headline text overlay; visual interest on the right. No people, no logos, no readable text. Professional CGI, 1920x720, 8:3 banner.`