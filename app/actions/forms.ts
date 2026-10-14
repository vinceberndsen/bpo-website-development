'use server'

import { deliver } from '@/lib/forms/delivery'
import {
  check,
  isLikelySpam,
  languageOptionKeys,
  list,
  serviceOptionKeys,
  teamSizeKeys,
  text,
  type ErrorKey,
  type FormState,
} from '@/lib/forms/schema'
import { isLocale } from '@/lib/i18n/config'

function finish(errors: Record<string, ErrorKey>, values: FormState['values']): FormState | null {
  return Object.keys(errors).length ? { status: 'invalid', errors, values } : null
}

export async function submitEnquiry(_prev: FormState, formData: FormData): Promise<FormState> {
  const values = {
    name: text(formData, 'name'),
    email: text(formData, 'email'),
    company: text(formData, 'company'),
    website: text(formData, 'website'),
    languages: list(formData, 'languages', languageOptionKeys),
    otherLanguage: text(formData, 'otherLanguage'),
    teamSize: text(formData, 'teamSize'),
    services: list(formData, 'services', serviceOptionKeys),
    coverage: text(formData, 'coverage'),
    startDate: text(formData, 'startDate'),
    message: text(formData, 'message'),
  }
  const privacy = formData.get('privacy') === 'on'
  const marketing = formData.get('marketing') === 'on'

  if (isLikelySpam(formData)) return { status: 'spam', errors: {}, values }

  const errors: Record<string, ErrorKey> = {}
  const set = (field: string, error: ErrorKey | null) => {
    if (error) errors[field] = error
  }
  set('name', check(values.name, { required: true, max: 120 }))
  set('email', check(values.email, { required: true, max: 200, kind: 'email' }))
  set('company', check(values.company, { required: true, max: 160 }))
  set('website', check(values.website, { max: 300, kind: 'url' }))
  if (!values.languages.length) errors.languages = 'selectOne'
  set('otherLanguage', check(values.otherLanguage, { required: values.languages.includes('other'), max: 200 }))
  if (!(teamSizeKeys as readonly string[]).includes(values.teamSize)) errors.teamSize = 'required'
  if (!values.services.length) errors.services = 'selectOne'
  set('coverage', check(values.coverage, { max: 200 }))
  set('startDate', check(values.startDate, { max: 100 }))
  set('message', check(values.message, { required: true, max: 4000 }))
  if (!privacy) errors.privacy = 'privacy'

  const invalid = finish(errors, values)
  if (invalid) return invalid

  const locale = text(formData, 'locale')
  const result = await deliver('enquiry', { ...values, marketingConsent: marketing, locale: isLocale(locale) ? locale : 'en' })
  return { status: result, errors: {}, values: result === 'sent' ? {} : values }
}

export async function submitInterest(_prev: FormState, formData: FormData): Promise<FormState> {
  const values = {
    fullName: text(formData, 'fullName'),
    email: text(formData, 'email'),
    country: text(formData, 'country'),
    languages: text(formData, 'languages'),
    experience: text(formData, 'experience'),
    profileUrl: text(formData, 'profileUrl'),
    message: text(formData, 'message'),
  }
  const privacy = formData.get('privacy') === 'on'

  if (isLikelySpam(formData)) return { status: 'spam', errors: {}, values }

  const errors: Record<string, ErrorKey> = {}
  const set = (field: string, error: ErrorKey | null) => {
    if (error) errors[field] = error
  }
  set('fullName', check(values.fullName, { required: true, max: 120 }))
  set('email', check(values.email, { required: true, max: 200, kind: 'email' }))
  set('country', check(values.country, { required: true, max: 100 }))
  set('languages', check(values.languages, { required: true, max: 500 }))
  set('experience', check(values.experience, { required: true, max: 2000 }))
  set('profileUrl', check(values.profileUrl, { max: 300, kind: 'url' }))
  set('message', check(values.message, { max: 2000 }))
  if (!privacy) errors.privacy = 'privacy'

  const invalid = finish(errors, values)
  if (invalid) return invalid

  const locale = text(formData, 'locale')
  const result = await deliver('candidate', { ...values, locale: isLocale(locale) ? locale : 'en' })
  return { status: result, errors: {}, values: result === 'sent' ? {} : values }
}
