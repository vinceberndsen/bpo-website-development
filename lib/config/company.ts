import type { Locale } from '@/lib/i18n/config'

/**
 * Central business details. Replace placeholder values before launch.
 *
 * Every optional field is `null` until a verified value is supplied. Components only
 * render a detail (email, phone, address, registration, social links, founder bio)
 * when its value is set here, so the site never publishes fictitious information.
 * See README.md > "Company details" and LAUNCH-CHECKLIST.md.
 */
export type CompanyConfig = {
  name: string
  legalName: string | null
  registrationNumber: string | null
  vatNumber: string | null
  registeredAddress: string | null
  email: string | null
  phone: string | null
  social: {
    linkedin: string | null
  }
  founder: {
    name: string | null
    role: string | null
    /** Verified biography per locale. Leave a locale out to hide the founder section in that language. */
    bio: Partial<Record<Locale, string>>
  }
}

export const company: CompanyConfig = {
  name: 'Relavique',
  legalName: null,
  registrationNumber: null,
  vatNumber: null,
  registeredAddress: null,
  email: null,
  phone: null,
  social: {
    linkedin: null,
  },
  founder: {
    name: null,
    role: null,
    bio: {},
  },
}

export function getFounderBio(locale: Locale): string | null {
  const bio = company.founder.bio[locale]
  return company.founder.name && bio ? bio : null
}

export function hasLegalDetails(): boolean {
  return Boolean(
    company.legalName || company.registrationNumber || company.vatNumber || company.registeredAddress,
  )
}
