export const supportedLocales = ['en', 'nl', 'nb', 'sv', 'da', 'fi'] as const

export type Locale = (typeof supportedLocales)[number]

/**
 * Locales that are actually served (routes, language switcher, sitemap, hreflang).
 * Add a locale here only once its dictionary in ./dictionaries exists and has been reviewed,
 * so English copy is never published under a translated URL.
 */
export const locales: readonly Locale[] = ['en', 'nl']

export const defaultLocale: Locale = 'en'

export const LOCALE_COOKIE = 'NEXT_LOCALE'

/** Each language is shown in its own language. */
export const localeNames: Record<Locale, string> = {
  en: 'English',
  nl: 'Nederlands',
  nb: 'Norsk',
  sv: 'Svenska',
  da: 'Dansk',
  fi: 'Suomi',
}

export const openGraphLocale: Record<Locale, string> = {
  en: 'en_GB',
  nl: 'nl_NL',
  nb: 'nb_NO',
  sv: 'sv_SE',
  da: 'da_DK',
  fi: 'fi_FI',
}

export function isLocale(value: string | undefined | null): value is Locale {
  return typeof value === 'string' && (locales as readonly string[]).includes(value)
}
