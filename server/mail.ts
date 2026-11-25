import nodemailer from 'nodemailer'
import type { ContactSubmission } from './contactPayload.js'

export type MailConfig = {
  host: string
  port: number
  secure: boolean
  user: string
  pass: string
  from: string
  to: string
}

export function mailConfigFromEnv(): MailConfig | null {
  const host = process.env.SMTP_HOST?.trim()
  const user =
    process.env.SMTP_EMAIL?.trim() ||
    process.env.SMTP_USER?.trim()
  const pass = process.env.SMTP_PASS?.trim()
  const from = process.env.MAIL_FROM?.trim()
  const to = process.env.MAIL_TO?.trim()

  if (!host || !user || !pass || !from || !to) return null

  const port = Number(process.env.SMTP_PORT ?? '587')
  const secure =
    process.env.SMTP_SECURE === 'true' ||
    (Number.isFinite(port) && port === 465)

  return {
    host,
    port: Number.isFinite(port) ? port : 587,
    secure,
    user,
    pass,
    from,
    to,
  }
}

function escapeHtml(text: string): string {
  return text
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
}

function buildPlainText(data: ContactSubmission): string {
  const isCareers = data.topic === 'careers'
  const lines = [
    `New ${data.topicTitle} submission`,
    '',
    `Topic slug: ${data.topic}`,
    `Name: ${data.name}`,
    isCareers
      ? data.location
        ? `Location: ${data.location}`
        : null
      : `Company: ${data.company}`,
    `Email: ${data.email}`,
    data.phone ? `Phone: ${data.phone}` : null,
    isCareers
      ? `Area of interest: ${data.roleArea ?? data.serviceOfInterest}`
      : `Service of interest: ${data.serviceOfInterest}`,
    !isCareers && data.serviceSlug
      ? `Service slug: ${data.serviceSlug}`
      : null,
    isCareers && data.linkedinUrl
      ? `Profile / résumé link: ${data.linkedinUrl}`
      : null,
    !isCareers
      ? `Marketing opt-in: ${data.marketingOptIn ? 'Yes' : 'No'}`
      : null,
    data.sourcePath ? `Source path: ${data.sourcePath}` : null,
    '',
    isCareers ? 'About the candidate:' : 'Message:',
    data.message,
  ].filter((line): line is string => line !== null)

  return lines.join('\n')
}

function buildHtml(data: ContactSubmission): string {
  const isCareers = data.topic === 'careers'
  const rows: Array<[string, string]> = [
    ['Enquiry type', data.topicTitle],
    ['Name', data.name],
    ...(isCareers
      ? data.location
        ? ([['Location', data.location]] as Array<[string, string]>)
        : []
      : ([['Company', data.company]] as Array<[string, string]>)),
    ['Email', data.email],
  ]
  if (data.phone) rows.push(['Phone', data.phone])
  rows.push([
    isCareers ? 'Area of interest' : 'Service of interest',
    data.roleArea ?? data.serviceOfInterest,
  ])
  if (!isCareers && data.serviceSlug) {
    rows.push(['Service slug', data.serviceSlug])
  }
  if (isCareers && data.linkedinUrl) {
    rows.push(['Profile / résumé link', data.linkedinUrl])
  }
  if (!isCareers) {
    rows.push(['Marketing opt-in', data.marketingOptIn ? 'Yes' : 'No'])
  }
  if (data.sourcePath) rows.push(['Submitted from', data.sourcePath])

  const tableRows = rows
    .map(
      ([label, value]) =>
        `<tr><td style="padding:6px 12px 6px 0;color:#555;vertical-align:top">${escapeHtml(label)}</td><td style="padding:6px 0">${escapeHtml(value)}</td></tr>`,
    )
    .join('')

  return `<!DOCTYPE html>
<html lang="en">
<body style="font-family:system-ui,sans-serif;color:#111;line-height:1.5">
  <h2 style="margin:0 0 16px">${escapeHtml(data.topicTitle)}</h2>
  <table style="border-collapse:collapse;margin-bottom:20px">${tableRows}</table>
  <p style="margin:0 0 8px;font-weight:600">Message</p>
  <p style="margin:0;white-space:pre-wrap">${escapeHtml(data.message)}</p>
</body>
</html>`
}

export async function sendContactEmail(
  config: MailConfig,
  data: ContactSubmission,
): Promise<void> {
  const transport = nodemailer.createTransport({
    host: config.host,
    port: config.port,
    secure: config.secure,
    auth: {
      user: config.user,
      pass: config.pass,
    },
  })

  const subject = `[Zeldapro] ${data.topicTitle} — ${data.name} (${data.company})`

  await transport.sendMail({
    from: config.from,
    to: config.to,
    replyTo: data.email,
    subject,
    text: buildPlainText(data),
    html: buildHtml(data),
  })
}