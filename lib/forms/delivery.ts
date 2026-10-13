import 'server-only'

export type FormKind = 'enquiry' | 'candidate'

/**
 * Form delivery is provider-agnostic: submissions are POSTed as JSON to FORM_WEBHOOK_URL
 * (e.g. a CRM inbound webhook, Zapier/Make, or your own email function). See README.md.
 * Nothing is stored or logged by this website.
 */
export function isDeliveryConfigured(): boolean {
  return Boolean(process.env.FORM_WEBHOOK_URL)
}

export async function deliver(kind: FormKind, payload: Record<string, unknown>): Promise<'sent' | 'not-configured' | 'error'> {
  const url = process.env.FORM_WEBHOOK_URL
  if (!url) return 'not-configured'

  try {
    const response = await fetch(url, {
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
    // Deliberately not logging the payload: it contains personal data.
    console.error(`[forms] ${kind} delivery failed`)
    return 'error'
  }
}
