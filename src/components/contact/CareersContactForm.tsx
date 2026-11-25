import clsx from 'clsx'
import { ArrowRight, Loader2 } from 'lucide-react'
import { type FormEvent, useId, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { careerRoleAreas } from '../../data/careersForm'
import type { ContactTopic } from '../../data/contactTopics'
import { contactTopicPath } from '../../utils/contactPaths'
import {
  contactFieldClass,
  ContactFieldShell,
  ContactToggleSwitch,
} from './contactFormShared'

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

type CareersFieldKey =
  | 'name'
  | 'email'
  | 'phone'
  | 'linkedinUrl'
  | 'roleArea'
  | 'location'
  | 'message'
  | 'privacyAgreed'

type CareersContactFormProps = {
  topic: ContactTopic
  variant?: 'default' | 'elevated'
}

export function CareersContactForm({
  topic,
  variant = 'default',
}: CareersContactFormProps) {
  const elevated = variant === 'elevated'
  const shellClass = clsx(
    'rounded-2xl border border-line bg-white p-6 sm:p-8',
    elevated
      ? 'w-full max-w-none border-t-4 border-t-electric-500 shadow-xl shadow-brand-950/10 ring-1 ring-brand-950/5 sm:p-10'
      : 'max-w-3xl shadow-md sm:shadow-lg',
  )
  const formId = useId()
  const statusId = `${formId}-status`
  const roleOptions = useMemo(() => careerRoleAreas, [])

  const [values, setValues] = useState({
    name: '',
    email: '',
    phone: '',
    linkedinUrl: '',
    roleArea: '',
    location: '',
    message: '',
    privacyAgreed: false,
  })
  const [touched, setTouched] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const [submitted, setSubmitted] = useState(false)
  const [honeypot, setHoneypot] = useState('')

  const errors = useMemo(() => {
    const next: Partial<Record<CareersFieldKey, string>> = {}
    if (!values.name.trim()) next.name = 'Enter your full name.'
    if (!values.email.trim()) next.email = 'Enter your email address.'
    else if (!EMAIL_PATTERN.test(values.email.trim()))
      next.email = 'Enter a valid email address.'
    if (!values.roleArea) next.roleArea = 'Select the area you are interested in.'
    if (!values.message.trim()) next.message = 'Tell us about your experience and interests.'
    else if (values.message.trim().length < 20)
      next.message = 'Share a bit more detail (at least 20 characters).'
    if (
      values.linkedinUrl.trim() &&
      !/^https?:\/\//i.test(values.linkedinUrl.trim())
    ) {
      next.linkedinUrl = 'Enter a full URL (starting with https://).'
    }
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
        'We could not send your application right now. Please try again shortly.',
      )
      return
    }

    const roleLabel =
      roleOptions.find((o) => o.value === values.roleArea)?.label ??
      values.roleArea

    const payload = {
      topic: topic.slug,
      topicTitle: topic.title,
      name: values.name.trim(),
      company: values.location.trim() || 'Not provided',
      email: values.email.trim(),
      phone: values.phone.trim() || undefined,
      serviceOfInterest: roleLabel,
      serviceSlug: values.roleArea,
      linkedinUrl: values.linkedinUrl.trim() || undefined,
      location: values.location.trim() || undefined,
      roleArea: roleLabel,
      message: values.message.trim(),
      marketingOptIn: false,
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
        'Something went wrong while sending your application. Please try again.',
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
        className={clsx(shellClass, 'bg-surface-0')}
        role="status"
        aria-live="polite"
      >
        <h2 className="font-heading text-2xl text-brand-950 sm:text-3xl">
          Thank you for your interest
        </h2>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-ink-muted sm:text-base">
          We received your careers enquiry. Our team will review your details and
          reach out if there is a suitable match.
        </p>
        <Link
          to={contactTopicPath(topic.slug)}
          className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-electric-600 underline decoration-electric-500/40 underline-offset-4 hover:text-electric-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric-600"
        >
          Submit another application
          <ArrowRight size={16} aria-hidden />
        </Link>
      </div>
    )
  }

  return (
    <form
      className={shellClass}
      onSubmit={handleSubmit}
      noValidate
      aria-describedby={submitError ? statusId : undefined}
    >
      {elevated ? (
        <header className="mb-8 border-b border-line pb-6">
          <h2 className="font-heading text-xl text-brand-950 sm:text-2xl">
            Application form
          </h2>
          <p className="mt-2 text-xs text-ink-subtle sm:text-sm">
            All fields marked with * are required.
          </p>
        </header>
      ) : null}
      <CareersHoneypot value={honeypot} onChange={setHoneypot} />

      <div className="grid gap-5 sm:grid-cols-2">
        <ContactFieldShell
          id={`${formId}-name`}
          label="Full name"
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
            className={contactFieldClass}
            aria-invalid={touched && !!errors.name}
          />
        </ContactFieldShell>

        <ContactFieldShell
          id={`${formId}-email`}
          label="Email"
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
            className={contactFieldClass}
            aria-invalid={touched && !!errors.email}
          />
        </ContactFieldShell>

        <ContactFieldShell id={`${formId}-phone`} label="Phone">
          <input
            id={`${formId}-phone`}
            name="phone"
            type="tel"
            autoComplete="tel"
            value={values.phone}
            onChange={(e) => setValues((v) => ({ ...v, phone: e.target.value }))}
            className={contactFieldClass}
          />
        </ContactFieldShell>

        <ContactFieldShell
          id={`${formId}-location`}
          label="Location (city or region)"
        >
          <input
            id={`${formId}-location`}
            name="location"
            type="text"
            autoComplete="address-level2"
            value={values.location}
            onChange={(e) =>
              setValues((v) => ({ ...v, location: e.target.value }))
            }
            className={contactFieldClass}
          />
        </ContactFieldShell>
      </div>

      <div className="mt-5">
        <ContactFieldShell
          id={`${formId}-role`}
          label="Area of interest"
          required
          error={touched ? errors.roleArea : undefined}
        >
          <select
            id={`${formId}-role`}
            name="roleArea"
            required
            value={values.roleArea}
            onChange={(e) =>
              setValues((v) => ({ ...v, roleArea: e.target.value }))
            }
            className={clsx(contactFieldClass, 'appearance-none pr-10')}
            aria-invalid={touched && !!errors.roleArea}
          >
            <option value="" disabled>
              Select…
            </option>
            {roleOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </ContactFieldShell>
      </div>

      <div className="mt-5">
        <ContactFieldShell
          id={`${formId}-linkedin`}
          label="LinkedIn, portfolio, or résumé link"
          error={touched ? errors.linkedinUrl : undefined}
        >
          <input
            id={`${formId}-linkedin`}
            name="linkedinUrl"
            type="url"
            inputMode="url"
            placeholder="https://"
            value={values.linkedinUrl}
            onChange={(e) =>
              setValues((v) => ({ ...v, linkedinUrl: e.target.value }))
            }
            className={contactFieldClass}
            aria-invalid={touched && !!errors.linkedinUrl}
          />
        </ContactFieldShell>
        <p className="mt-2 text-xs text-ink-subtle">
          Share a link to your profile or a résumé stored in the cloud (optional but
          recommended).
        </p>
      </div>

      <div className="mt-5">
        <ContactFieldShell
          id={`${formId}-message`}
          label="About you"
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
            className={clsx(contactFieldClass, 'min-h-[8rem] resize-y')}
            aria-invalid={touched && !!errors.message}
          />
        </ContactFieldShell>
      </div>

      <div className="mt-8">
        <ContactToggleSwitch
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
          <p className="mt-2 text-xs text-red-700" role="alert">
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
            Submit application
            <ArrowRight size={18} aria-hidden />
          </>
        )}
      </button>
    </form>
  )
}

function CareersHoneypot({
  value,
  onChange,
}: {
  value: string
  onChange: (v: string) => void
}) {
  return (
    <div className="absolute -left-[9999px] h-px w-px overflow-hidden" aria-hidden>
      <label htmlFor="careers-website-url">Company website</label>
      <input
        id="careers-website-url"
        name="website-url"
        tabIndex={-1}
        autoComplete="off"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  )
}