import 'server-only'
import { createHash } from 'node:crypto'
import { Resend } from 'resend'
import { company, formRecipients } from '@/lib/config/company'

export type FormKind = 'enquiry' | 'candidate'
type DeliveryResult = 'sent' | 'not-configured' | 'error'

/**
 * Submissions are delivered by email via Resend (RESEND_API_KEY) to FORM_RECIPIENT_EMAIL,
 * falling back to a JSON webhook (FORM_WEBHOOK_URL). Nothing is stored or logged by this website.
 * See README.md.
 */
export function isDeliveryConfigured(): boolean {
  return Boolean(process.env.RESEND_API_KEY || process.env.FORM_WEBHOOK_URL)
}

export async function deliver(kind: FormKind, payload: Record<string, unknown>): Promise<DeliveryResult> {
  if (process.env.RESEND_API_KEY) return deliverByEmail(kind, payload)
  if (process.env.FORM_WEBHOOK_URL) return deliverByWebhook(kind, payload)
  return 'not-configured'
}

const subjects: Record<FormKind, string> = {
  enquiry: 'New business enquiry',
  candidate: 'New candidate registration',
}

function formatValue(value: unknown): string {
  if (Array.isArray(value)) return value.join(', ')
  if (typeof value === 'boolean') return value ? 'Yes' : 'No'
  if (value === null || value === undefined || value === '') return '—'
  return String(value)
}

async function deliverByEmail(kind: FormKind, payload: Record<string, unknown>): Promise<DeliveryResult> {
  const resend = new Resend(process.env.RESEND_API_KEY)
  const submittedAt = new Date().toISOString()
  const name = typeof payload.name === 'string' ? payload.name : ''
  const replyTo = typeof payload.email === 'string' ? payload.email : undefined

  // Plain-text body only: submitted values are never interpreted as HTML.
  const text = [
    `${subjects[kind]} from the ${company.name} website`,
    `Submitted: ${submittedAt}`,
    '',
    ...Object.entries(payload).map(([key, value]) => `${key}: ${formatValue(value)}`),
  ].join('\n')

  const idempotencyKey = `${kind}/${createHash('sha256').update(text).digest('hex').slice(0, 32)}`

  const { error } = await resend.emails.send(
    {
      from:
        process.env.RESEND_FROM_EMAIL ||
        `${company.name} website <noreply@${process.env.RESEND_EMAIL_DOMAIN || 'resend.dev'}>`,
      to: [process.env.FORM_RECIPIENT_EMAIL || formRecipients[kind]],
      replyTo,
      subject: `[${company.name}] ${subjects[kind]}${name ? ` — ${name}` : ''}`,
      text,
    },
    { idempotencyKey },
  )

  if (error) {
    // Deliberately not logging the payload: it contains personal data.
    console.error(`[forms] ${kind} email delivery failed: ${error.name}`)
    return 'error'
  }
  return 'sent'
}

async function deliverByWebhook(kind: FormKind, payload: Record<string, unknown>): Promise<DeliveryResult> {
  try {
    const response = await fetch(process.env.FORM_WEBHOOK_URL as string, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...(process.env.FORM_WEBHOOK_SECRET ? { Authorization: `Bearer ${process.env.FORM_WEBHOOK_SECRET}` } : {}),
      },
      body: JSON.stringify({ kind, submittedAt: new Date().toISOString(), ...payload }),
      signal: AbortSignal.timeout(10_000),
      cache: 'no-store',
    })
    return response.ok ? 'sent' : 'error'
  } catch {
    console.error(`[forms] ${kind} webhook delivery failed`)
    return 'error'
  }
}
