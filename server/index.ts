import cors from 'cors'
import 'dotenv/config'
import express from 'express'
import { parseContactBody } from './contactPayload.js'
import { mailConfigFromEnv, sendContactEmail } from './mail.js'

const port = Number(process.env.CONTACT_API_PORT ?? '3001')
const corsOrigin = process.env.CORS_ORIGIN?.trim() || 'http://localhost:5173'

const mailConfig = mailConfigFromEnv()
if (!mailConfig) {
  console.warn(
    '[contact-api] SMTP is not fully configured. Set SMTP_HOST, SMTP_EMAIL, SMTP_PASS, MAIL_FROM, and MAIL_TO in .env.',
  )
}

const app = express()
app.use(express.json({ limit: '32kb' }))
app.use(
  cors({
    origin: corsOrigin.split(',').map((o) => o.trim()),
    methods: ['POST', 'OPTIONS'],
  }),
)

app.get('/health', (_req, res) => {
  res.json({
    ok: true,
    mailConfigured: Boolean(mailConfig),
  })
})

app.post('/api/contact', async (req, res) => {
  const parsed = parseContactBody(req.body)
  if (!parsed.ok) {
    res.status(400).json({ error: parsed.message })
    return
  }

  if (!mailConfig) {
    res.status(503).json({
      error: 'Contact form is not configured on the server. Try again later.',
    })
    return
  }

  try {
    await sendContactEmail(mailConfig, parsed.data)
    res.status(200).json({ ok: true })
  } catch (err) {
    console.error('[contact-api] Failed to send email:', err)
    res.status(500).json({
      error: 'Something went wrong while sending your request. Please try again.',
    })
  }
})

app.listen(port, () => {
  console.log(`[contact-api] Listening on http://localhost:${port}`)
})