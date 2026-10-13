import 'server-only'
import type { Locale } from './config'
import { da } from './dictionaries/da'
import { en, type Dictionary } from './dictionaries/en'
import { fi } from './dictionaries/fi'
import { nb } from './dictionaries/nb'
import { nl } from './dictionaries/nl'
import { sv } from './dictionaries/sv'

const dictionaries: Record<Locale, Dictionary> = { en, nl, nb, sv, da, fi }

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale]
}

export type { Dictionary }
