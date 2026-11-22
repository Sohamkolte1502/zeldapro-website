export type ContactTopic = {
  slug: string
  title: string
  intro: string
}

export const contactTopics: ContactTopic[] = [
  {
    slug: 'request-for-services',
    title: 'Request for Services',
    intro:
      'Tell us about the outcomes you need from advisory, engineering, or transformation work.',
  },
  {
    slug: 'ai-solutions-enquiry',
    title: 'AI Solutions Enquiry',
    intro:
      'Share how you want to apply intelligence to workflows, decisions, or customer experiences.',
  },
  {
    slug: 'industry-enquiry',
    title: 'Industry Enquiry',
    intro:
      'Describe your sector context and where technology should strengthen operations or compliance.',
  },
  {
    slug: 'partnerships',
    title: 'Partnerships',
    intro:
      'Explore co-delivery, alliances, or joint go-to-market opportunities with Zeldapro.',
  },
  {
    slug: 'careers',
    title: 'Careers',
    intro:
      'Introduce yourself and the kind of enterprise engineering or consulting role you are exploring.',
  },
  {
    slug: 'media-queries',
    title: 'Media Queries',
    intro:
      'Reach our team for interviews, speaking, or approved company information.',
  },
  {
    slug: 'general-enquiry',
    title: 'General Enquiry',
    intro:
      'Ask a question or start a conversation when your request does not fit a specific category.',
  },
  {
    slug: 'website-feedback',
    title: 'Website Feedback',
    intro:
      'Help us improve this site—report an issue, suggest content, or share usability feedback.',
  },
]

const topicMap = Object.fromEntries(
  contactTopics.map((t) => [t.slug, t]),
) as Record<string, ContactTopic>

export function contactTopicBySlug(slug: string): ContactTopic | undefined {
  return topicMap[slug]
}