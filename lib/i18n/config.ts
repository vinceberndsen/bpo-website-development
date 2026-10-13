export const locales = ['en', 'nl', 'nb', 'sv', 'da', 'fi'] as const

export type Locale = (typeof locales)[number]

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
