import clsx from 'clsx'
import { ArrowRight, Loader2 } from 'lucide-react'
import { type FormEvent, type ReactNode, useId, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { services } from '../../data'
import type { ContactTopic } from '../../data/contactTopics'
import { contactTopicPath } from '../../utils/contactPaths'

type ContactFormProps = {
  topic: ContactTopic
  initialServiceSlug?: string
}

type FieldKey =
  | 'name'
  | 'company'
  | 'email'
  | 'phone'
  | 'service'
  | 'message'

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const SERVICE_OTHER = 'other-not-sure'

function serviceOptions() {
  return [
    ...services.map((s) => ({ value: s.slug, label: s.title })),
    { value: SERVICE_OTHER, label: 'Other / Not sure' },
  ]
}

function resolveInitialService(slug?: string): string {
  if (!slug) return ''
  const valid = services.some((s) => s.slug === slug)
  return valid ? slug : SERVICE_OTHER
}

function ToggleSwitch({
  id,
  checked,
  onChange,
  label,
  required,
}: {
  id: string
  checked: boolean
  onChange: (next: boolean) => void
  label: ReactNode
  required?: boolean
}) {
  return (
    <div className="flex items-start gap-3">
      <button
        type="button"
        role="switch"
        id={id}
        aria-checked={checked}
        aria-required={required}
        onClick={() => onChange(!checked)}
        className={clsx(
          'relative mt-0.5 h-7 w-12 shrink-0 rounded-full border transition-colors',
          'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric-600',
          checked
            ? 'border-electric-600 bg-electric-600'
            : 'border-line bg-surface-200',
        )}
      >
        <span
          className={clsx(
            'absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-white shadow-sm transition-transform',
            checked && 'translate-x-5',
          )}
          aria-hidden
        />
      </button>
      <span className="text-sm leading-relaxed text-ink-muted">
        {label}
        {required ? (
          <span className="text-brand-950">
            {' '}
            <span aria-hidden>*</span>
            <span className="sr-only"> (required)</span>
          </span>
        ) : null}
      </span>
    </div>
  )
}

function FieldShell({
  id,
  label,
  required,
  error,
  children,
}: {
  id: string
  label: string
  required?: boolean
  error?: string
  children: ReactNode
}) {
  const errorId = `${id}-error`
  return (
    <div className="relative">
      <label
        htmlFor={id}
        className="pointer-events-none absolute left-4 top-3 z-10 text-xs font-medium text-ink-subtle"
      >
        {label}
        {required ? (
          <>
            <span aria-hidden>*</span>
            <span className="sr-only"> (required)</span>
          </>
        ) : null}
      </label>
      {children}
      {error ? (
        <p id={errorId} className="mt-1.5 text-xs text-red-700" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  )
}

const fieldClass =
  'w-full rounded-xl border border-line bg-white px-4 pb-3 pt-8 text-sm text-ink shadow-sm transition-[box-shadow,border-color] placeholder:text-ink-subtle focus:border-electric-500 focus:outline-none focus:ring-2 focus:ring-electric-500/35'

export function ContactForm({ topic, initialServiceSlug }: ContactFormProps) {
  const formId = useId()
  const statusId = `${formId}-status`
  const options = useMemo(() => serviceOptions(), [])

  const [values, setValues] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: resolveInitialService(initialServiceSlug),
    message: '',
    marketingOptIn: false,
    privacyAgreed: false,
  })
  const [touched, setTouched] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const [submitted, setSubmitted] = useState(false)
  const [honeypot, setHoneypot] = useState('')

  const errors = useMemo(() => {
    const next: Partial<Record<FieldKey | 'privacyAgreed', string>> = {}
    if (!values.name.trim()) next.name = 'Enter your name.'
    if (!values.company.trim()) next.company = 'Enter your company name.'
    if (!values.email.trim()) next.email = 'Enter your business email.'
    else if (!EMAIL_PATTERN.test(values.email.trim()))
      next.email = 'Enter a valid email address.'
    if (!values.service) next.service = 'Select a service of interest.'
    if (!values.message.trim()) next.message = 'Enter a message.'
    else if (values.message.trim().length < 10)
      next.message = 'Share a bit more detail (at least 10 characters).'
    if (!values.privacyAgreed)
      next.privacyAgreed = 'You must agree to the Privacy Policy.'
    return next
  }, [values])

  const hasErrors = Object.keys(errors).length > 0

  async function submitPayload() {
    setSubmitError(null)

    if (honeypot.trim()) {
      setSubmitted(true)
      return
    }

    if (hasErrors) return

    const endpoint = import.meta.env.VITE_FORM_ENDPOINT as string | undefined
    if (!endpoint?.trim()) {
      setSubmitError(
        'We could not send your request right now. Please try again shortly.',
      )
      return
    }

    const serviceLabel =
      options.find((o) => o.value === values.service)?.label ?? values.service

    const payload = {
      topic: topic.slug,
      topicTitle: topic.title,
      name: values.name.trim(),
      company: values.company.trim(),
      email: values.email.trim(),
      phone: values.phone.trim() || undefined,
      serviceOfInterest: serviceLabel,
      serviceSlug:
        values.service === SERVICE_OTHER ? undefined : values.service,
      message: values.message.trim(),
      marketingOptIn: values.marketingOptIn,
      privacyAgreed: values.privacyAgreed,
      sourcePath: window.location.pathname,
    }

    setSubmitting(true)
    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })
      if (!res.ok) throw new Error('Request failed')
      setSubmitted(true)
    } catch {
      setSubmitError(
        'Something went wrong while sending your request. Please try again.',
      )
    } finally {
      setSubmitting(false)
    }
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setTouched(true)
    if (hasErrors && !honeypot.trim()) return
    await submitPayload()
  }

  if (submitted) {
    return (
      <div
        className="max-w-3xl rounded-2xl border border-line bg-surface-0 p-8 shadow-md sm:p-10"
        role="status"
        aria-live="polite"
      >
        <h2 className="font-heading text-2xl text-brand-950 sm:text-3xl">
          Thank you for reaching out
        </h2>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-ink-muted sm:text-base">
          We received your {topic.title.toLowerCase()} request. A Zeldapro
          representative will follow up using the details you provided.
        </p>
        <Link
          to={contactTopicPath(topic.slug)}
          className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-electric-600 underline decoration-electric-500/40 underline-offset-4 hover:text-electric-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric-600"
        >
          Submit another request
          <ArrowRight size={16} aria-hidden />
        </Link>
      </div>
    )
  }

  return (
    <form
      className="max-w-3xl rounded-2xl border border-line bg-white p-6 shadow-md sm:p-8 sm:shadow-lg"
      onSubmit={handleSubmit}
      noValidate
      aria-describedby={submitError ? statusId : undefined}
    >
      <HoneypotField value={honeypot} onChange={setHoneypot} />

      <div className="grid gap-5 sm:grid-cols-2">
        <FieldShell
          id={`${formId}-name`}
          label="Name"
          required
          error={touched ? errors.name : undefined}
        >
          <input
            id={`${formId}-name`}
            name="name"
            type="text"
            autoComplete="name"
            required
            value={values.name}
            onChange={(e) => setValues((v) => ({ ...v, name: e.target.value }))}
            className={fieldClass}
            aria-invalid={touched && !!errors.name}
            aria-describedby={
              touched && errors.name ? `${formId}-name-error` : undefined
            }
          />
        </FieldShell>

        <FieldShell
          id={`${formId}-company`}
          label="Company"
          required
          error={touched ? errors.company : undefined}
        >
          <input
            id={`${formId}-company`}
            name="company"
            type="text"
            autoComplete="organization"
            required
            value={values.company}
            onChange={(e) =>
              setValues((v) => ({ ...v, company: e.target.value }))
            }
            className={fieldClass}
            aria-invalid={touched && !!errors.company}
            aria-describedby={
              touched && errors.company ? `${formId}-company-error` : undefined
            }
          />
        </FieldShell>

        <FieldShell
          id={`${formId}-email`}
          label="Business email"
          required
          error={touched ? errors.email : undefined}
        >
          <input
            id={`${formId}-email`}
            name="email"
            type="email"
            autoComplete="email"
            required
            value={values.email}
            onChange={(e) => setValues((v) => ({ ...v, email: e.target.value }))}
            className={fieldClass}
            aria-invalid={touched && !!errors.email}
            aria-describedby={
              touched && errors.email ? `${formId}-email-error` : undefined
            }
          />
        </FieldShell>

        <FieldShell id={`${formId}-phone`} label="Phone">
          <input
            id={`${formId}-phone`}
            name="phone"
            type="tel"
            autoComplete="tel"
            value={values.phone}
            onChange={(e) => setValues((v) => ({ ...v, phone: e.target.value }))}
            className={fieldClass}
          />
        </FieldShell>
      </div>

      <div className="mt-5">
        <FieldShell
          id={`${formId}-service`}
          label="Service of interest"
          required
          error={touched ? errors.service : undefined}
        >
          <select
            id={`${formId}-service`}
            name="service"
            required
            value={values.service}
            onChange={(e) =>
              setValues((v) => ({ ...v, service: e.target.value }))
            }
            className={clsx(fieldClass, 'appearance-none pr-10')}
            aria-invalid={touched && !!errors.service}
            aria-describedby={
              touched && errors.service ? `${formId}-service-error` : undefined
            }
          >
            <option value="" disabled>
              Select…
            </option>
            {options.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </FieldShell>
      </div>

      <div className="mt-5">
        <FieldShell
          id={`${formId}-message`}
          label="Message"
          required
          error={touched ? errors.message : undefined}
        >
          <textarea
            id={`${formId}-message`}
            name="message"
            rows={5}
            required
            value={values.message}
            onChange={(e) =>
              setValues((v) => ({ ...v, message: e.target.value }))
            }
            className={clsx(fieldClass, 'resize-y min-h-[8rem]')}
            aria-invalid={touched && !!errors.message}
            aria-describedby={
              touched && errors.message ? `${formId}-message-error` : undefined
            }
          />
        </FieldShell>
      </div>

      <div className="mt-8 space-y-5">
        <ToggleSwitch
          id={`${formId}-marketing`}
          checked={values.marketingOptIn}
          onChange={(marketingOptIn) =>
            setValues((v) => ({ ...v, marketingOptIn }))
          }
          label="Opt in for marketing communication"
        />
        <ToggleSwitch
          id={`${formId}-privacy`}
          required
          checked={values.privacyAgreed}
          onChange={(privacyAgreed) =>
            setValues((v) => ({ ...v, privacyAgreed }))
          }
          label={
            <>
              I agree to the{' '}
              <Link
                to="/privacy"
                className="font-medium text-electric-600 underline decoration-electric-500/40 underline-offset-2 hover:text-electric-500"
              >
                Privacy Policy
              </Link>
            </>
          }
        />
        {touched && errors.privacyAgreed ? (
          <p className="text-xs text-red-700" role="alert">
            {errors.privacyAgreed}
          </p>
        ) : null}
      </div>

      {submitError ? (
        <div
          id={statusId}
          role="alert"
          className="mt-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-900"
        >
          {submitError}{' '}
          <button
            type="submit"
            className="font-semibold underline underline-offset-2"
          >
            Try again
          </button>
        </div>
      ) : null}

      <button
        type="submit"
        disabled={submitting}
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand-950 px-8 py-3.5 text-sm font-semibold text-on-dark shadow-lg shadow-brand-950/25 transition-colors hover:bg-brand-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric-600 disabled:opacity-60"
      >
        {submitting ? (
          <>
            <Loader2 size={18} className="animate-spin" aria-hidden />
            Sending…
          </>
        ) : (
          <>
            Submit
            <ArrowRight size={18} aria-hidden />
          </>
        )}
      </button>
    </form>
  )
}

function HoneypotField({
  value,
  onChange,
}: {
  value: string
  onChange: (v: string) => void
}) {
  return (
    <div className="absolute -left-[9999px] h-px w-px overflow-hidden" aria-hidden>
      <label htmlFor="contact-website-url">Company website</label>
      <input
        id="contact-website-url"
        name="website-url"
        tabIndex={-1}
        autoComplete="off"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  )
}