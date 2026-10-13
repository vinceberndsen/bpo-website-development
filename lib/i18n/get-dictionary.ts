import 'server-only'
import type { Locale } from './config'
import { en, type Dictionary } from './dictionaries/en'

/** Register each translated dictionary here when it is added (and add the locale to `locales` in config.ts). */
const dictionaries: Partial<Record<Locale, Dictionary>> = { en }

export function getDictionary(locale: Locale): Dictionary {
  const dictionary = dictionaries[locale]
  if (!dictionary) throw new Error(`No dictionary registered for locale "${locale}"`)
  return dictionary
}

export type { Dictionary }
