import type { Locale } from '@/lib/i18n/config'

/** In priority order. Retired slugs are permanently redirected in next.config.mjs. */
export const serviceSlugs = [
  'specialist-support-teams',
  'dealer-partner-support',
  'b2b-customer-operations',
  'customer-care-back-office',
] as const
export type ServiceSlug = (typeof serviceSlugs)[number]

export const legalSlugs = ['privacy', 'recruitment-privacy', 'cookies', 'company'] as const
export type LegalSlug = (typeof legalSlugs)[number]

export const paths = {
  home: '',
  services: '/services',
  service: (slug: ServiceSlug) => `/services/${slug}`,
  howItWorks: '/how-it-works',
  markets: '/markets-and-languages',
  about: '/about',
  careers: '/careers',
  contact: '/contact',
  legal: (slug: LegalSlug) => `/legal/${slug}`,
} as const

/** Locale-independent path suffixes of every page, used for the sitemap and hreflang. */
export const allPagePaths: string[] = [
  paths.home,
  paths.services,
  ...serviceSlugs.map(paths.service),
  paths.howItWorks,
  paths.markets,
  paths.about,
  paths.careers,
  paths.contact,
  ...legalSlugs.map(paths.legal),
]

export function localePath(locale: Locale, path: string = ''): string {
  return `/${locale}${path}`
}
