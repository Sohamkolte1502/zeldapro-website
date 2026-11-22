const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export type ContactSubmission = {
  topic: string
  topicTitle: string
  name: string
  company: string
  email: string
  phone?: string
  serviceOfInterest: string
  serviceSlug?: string
  message: string
  marketingOptIn: boolean
  privacyAgreed: boolean
  sourcePath?: string
}

export type ContactValidationResult =
  | { ok: true; data: ContactSubmission }
  | { ok: false; message: string }

function asString(value: unknown): string {
  return typeof value === 'string' ? value.trim() : ''
}

function asOptionalString(value: unknown): string | undefined {
  const s = asString(value)
  return s || undefined
}

function asBool(value: unknown): boolean {
  return value === true
}

export function parseContactBody(
  body: unknown,
): ContactValidationResult {
  if (!body || typeof body !== 'object') {
    return { ok: false, message: 'Invalid request body.' }
  }

  const raw = body as Record<string, unknown>

  const topic = asString(raw.topic)
  const topicTitle = asString(raw.topicTitle)
  const name = asString(raw.name)
  const company = asString(raw.company)
  const email = asString(raw.email)
  const phone = asOptionalString(raw.phone)
  const serviceOfInterest = asString(raw.serviceOfInterest)
  const serviceSlug = asOptionalString(raw.serviceSlug)
  const message = asString(raw.message)
  const marketingOptIn = asBool(raw.marketingOptIn)
  const privacyAgreed = asBool(raw.privacyAgreed)
  const sourcePath = asOptionalString(raw.sourcePath)

  if (!topic || !topicTitle) {
    return { ok: false, message: 'Missing enquiry type.' }
  }
  if (!name) return { ok: false, message: 'Name is required.' }
  if (!company) return { ok: false, message: 'Company is required.' }
  if (!email) return { ok: false, message: 'Email is required.' }
  if (!EMAIL_PATTERN.test(email)) {
    return { ok: false, message: 'Enter a valid email address.' }
  }
  if (!serviceOfInterest) {
    return { ok: false, message: 'Service of interest is required.' }
  }
  if (!message || message.length < 10) {
    return { ok: false, message: 'Message must be at least 10 characters.' }
  }
  if (!privacyAgreed) {
    return { ok: false, message: 'Privacy Policy agreement is required.' }
  }

  return {
    ok: true,
    data: {
      topic,
      topicTitle,
      name,
      company,
      email,
      phone,
      serviceOfInterest,
      serviceSlug,
      message,
      marketingOptIn,
      privacyAgreed,
      sourcePath,
    },
  }
}