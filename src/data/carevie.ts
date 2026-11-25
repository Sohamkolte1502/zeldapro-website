export const CAREVIE_URL = 'https://carevie.in/landing-page'

export type CarevieFeatureStatus = 'available' | 'coming-soon'

export type CarevieFeature = {
  slug: string
  title: string
  description: string
  status: CarevieFeatureStatus
  statusLabel: string
}

export const carevie = {
  name: 'Carevie',
  tagline: 'Caring for Life, Naturally.',
  eyebrow: 'Product innovation',
  headline: 'Health and lifestyle management, designed around families.',
  summary:
    'A Zeldapro product concept for digital health: records, reminders, appointments, and family-oriented care experiences in one place. Validate all capabilities against the current product release before publication.',
  features: [
    {
      slug: 'health-records',
      title: 'Personal health records',
      description:
        'Organise lab reports, prescriptions, and insurance documents with clear categories for quick reference.',
      status: 'available',
      statusLabel: 'Available',
    },
    {
      slug: 'medication-reminders',
      title: 'Medication reminders',
      description:
        'Scheduled prompts for doses and refills, tuned to the medication plans your clinicians approve.',
      status: 'available',
      statusLabel: 'Available',
    },
    {
      slug: 'appointments',
      title: 'Appointment prompts',
      description:
        'Upcoming visit reminders and preparation notes for patients and caregivers.',
      status: 'available',
      statusLabel: 'Available',
    },
    {
      slug: 'family-care-circle',
      title: 'Family care circle',
      description:
        'Connect trusted relatives to shared visibility where permissions and privacy rules allow.',
      status: 'available',
      statusLabel: 'Available',
    },
    {
      slug: 'ai-health-summary',
      title: 'AI-assisted record summary',
      description:
        'Plain-language highlights from uploaded reports, for patient review—not a clinical diagnosis.',
      status: 'coming-soon',
      statusLabel: 'Coming soon',
    },
    {
      slug: 'emergency-sos',
      title: 'Emergency profile sharing',
      description:
        'Secure, consent-based access to critical information in urgent situations.',
      status: 'coming-soon',
      statusLabel: 'Coming soon',
    },
    {
      slug: 'smart-qr',
      title: 'Smart QR access',
      description:
        'Time-bound QR sharing for authorised providers when you choose to grant access.',
      status: 'coming-soon',
      statusLabel: 'Coming soon',
    },
  ] satisfies CarevieFeature[],
} as const