/** Lead capture entry points used across CTAs. */
export function contactHubPath(): string {
  return '/contact'
}

export function contactServicesPath(serviceSlug?: string): string {
  const base = '/contact/request-for-services'
  if (!serviceSlug) return base
  return `${base}?service=${encodeURIComponent(serviceSlug)}`
}

export function contactSolutionsPath(): string {
  return '/contact/ai-solutions-enquiry'
}

export function contactIndustryPath(): string {
  return '/contact/industry-enquiry'
}

export function contactTopicPath(topicSlug: string): string {
  return `/contact/${topicSlug}`
}