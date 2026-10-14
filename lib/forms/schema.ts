export type ErrorKey = 'required' | 'email' | 'url' | 'tooLong' | 'selectOne' | 'privacy'

export type FormStatus = 'idle' | 'invalid' | 'spam' | 'not-configured' | 'sent' | 'error'

export type FormState = {
  status: FormStatus
  errors: Record<string, ErrorKey>
  values: Record<string, string | string[]>
}

export const initialFormState: FormState = { status: 'idle', errors: {}, values: {} }

export const languageOptionKeys = [
  'dutch',
  'germanGermany',
  'germanSwitzerland',
  'germanAustria',
  'norwegian',
  'english',
  'other',
] as const
export const teamSizeKeys = ['3-5', '6-10', '11+', 'unsure'] as const
export const serviceOptionKeys = ['specialist', 'dealer', 'b2b', 'care', 'backOffice', 'unsure'] as const

/** Honeypot field name and the minimum time (ms) a human needs to fill in a form. */
export const HONEYPOT_FIELD = 'website_confirm'
export const STARTED_FIELD = 'form_started'
export const MIN_FILL_TIME_MS = 3000

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

export function text(formData: FormData, name: string): string {
  const value = formData.get(name)
  return typeof value === 'string' ? value.trim() : ''
}

export function list(formData: FormData, name: string, allowed: readonly string[]): string[] {
  return formData
    .getAll(name)
    .filter((v): v is string => typeof v === 'string' && allowed.includes(v))
}

type Rule = { required?: boolean; max?: number; kind?: 'email' | 'url' }

export function check(value: string, rule: Rule): ErrorKey | null {
  if (!value) return rule.required ? 'required' : null
  if (rule.max && value.length > rule.max) return 'tooLong'
  if (rule.kind === 'email' && !EMAIL_RE.test(value)) return 'email'
  if (rule.kind === 'url') {
    try {
      const url = new URL(value)
      if (url.protocol !== 'http:' && url.protocol !== 'https:') return 'url'
    } catch {
      return 'url'
    }
  }
  return null
}

export function isLikelySpam(formData: FormData): boolean {
  if (text(formData, HONEYPOT_FIELD)) return true
  const started = Number(text(formData, STARTED_FIELD))
  return !Number.isFinite(started) || Date.now() - started < MIN_FILL_TIME_MS
}
