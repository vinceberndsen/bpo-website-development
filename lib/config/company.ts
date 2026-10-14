import type { Locale } from '@/lib/i18n/config'

/**
 * Central business details — the single source for the legal entity name, registration,
 * address, contact and data controller used across the footer, company page and privacy notices.
 *
 * Every optional field is `null` until a verified value is supplied. Components only
 * render a detail (email, phone, address, registration, social links, founder bio)
 * when its value is set here, so the site never publishes fictitious information.
 * See the launch checklist in README.md.
 */
type LegalEntity = {
  name: string | null
  /** Legal form (e.g. BV/SRL, IKE). Not yet supplied. */
  legalForm: string | null
  registrationNumber: string | null
  vatNumber: string | null
  registeredAddress: string | null
}

/**
 * - `belgian-preparation`: 2026 — preparatory activities run through the founder's Belgian corporation.
 * - `greek-operational`: set MANUALLY only after the founder confirms the Greek IKE is incorporated,
 *   operational and the legal arrangements (contracts, privacy, data) have been reviewed.
 * The status never changes automatically based on the calendar date.
 */
export type LegalStatus = 'belgian-preparation' | 'greek-operational'

export type CompanyConfig = {
  /** Brand name. Not the registered legal name of either corporation. */
  name: string
  legal: {
    status: LegalStatus
    /** Founder's Belgian corporation, used for preparatory activities during 2026. */
    belgianEntity: LegalEntity
    /** Greek private company (IKE) being established. All null until registration is confirmed. */
    greekEntity: LegalEntity & { taxNumber: string | null }
    /** Intended date for the Greek IKE to become operational. Intention only, not a guarantee. */
    intendedTransitionDate: string
    /**
     * Verified entity responsible for website enquiries and applicant data (data controller).
     * null = not yet confirmed: privacy notices flag this as unresolved instead of guessing.
     */
    dataController: string | null
    /** Contact route for privacy requests. */
    privacyContact: string | null
  }
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
  legal: {
    status: 'belgian-preparation',
    belgianEntity: {
      name: 'Hatch Europe Consulting',
      legalForm: null,
      registrationNumber: '1005.878.023',
      vatNumber: 'BE1005.878.023',
      registeredAddress: 'Sterstraat 66a, 3920 Lommel, Belgium',
    },
    greekEntity: {
      name: null,
      legalForm: 'IKE',
      registrationNumber: null,
      vatNumber: null,
      taxNumber: null,
      registeredAddress: null,
    },
    intendedTransitionDate: '1 January 2027',
    dataController: 'Hatch Europe Consulting, Sterstraat 66a, 3920 Lommel, Belgium',
    privacyContact: 'hello@relavique.com',
  },
  email: 'hello@relavique.com',
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

/** Entity currently responsible for the website, as configured above. */
export function currentEntity(): LegalEntity {
  return company.legal.status === 'greek-operational' ? company.legal.greekEntity : company.legal.belgianEntity
}

/**
 * Organisations from the founder's PRIOR professional experience.
 * Not Relavique clients, partners or endorsers. Always render with the attribution note
 * (see `ExperienceList`). Text only — never add logos.
 */
export const founderExperienceOrganisations = [
  'Vodafone',
  'Philips',
  'Miele',
  'Stellantis',
  'ANZ Bank',
  'ABN AMRO',
  'Dyson',
  'Klarna',
  'Danone',
  'FrieslandCampina',
] as const

/**
 * Brand messaging, kept centrally so every language uses the same hierarchy.
 * "Relavique" is never translated.
 *
 * OUTDATED: the non-English entries (nl, nb, sv, da, fi) predate the October 2026 repositioning
 * (specialist / second-line focus; Dutch, German, Norwegian and English delivery). They are not
 * published and must be re-translated from `en` before any locale is enabled.
 */
export type BrandMessaging = {
  descriptor: string
  tagline: string
  secondaryLine: string
  heroHeadline: string
  heroCopy: string
  primaryCta: string
  secondaryCta: string
  finalCtaBody: string
  metaDescription: string
}

export const brandMessaging: Record<Locale, BrandMessaging> = {
  en: {
    descriptor: 'Specialist Customer Operations',
    tagline: 'Your customers. Our people. One team.',
    secondaryLine: 'Specialist teams for the cases that need more than a scripted answer.',
    heroHeadline: 'Specialist support teams that feel like your own.',
    heroCopy:
      'Dedicated teams of 3–10 people for second-line support, dealer networks and B2B customer operations. We combine hands-on experience with close account ownership, supporting your business in Dutch, German, Norwegian and English.',
    primaryCta: 'Discuss your team',
    secondaryCta: 'Explore our expertise',
    finalCtaBody: 'Let’s design the right specialist support team for your business.',
    metaDescription:
      'Dedicated teams for second-line support, dealer networks and B2B customer operations in Dutch, German, Norwegian and English.',
  },
  nl: {
    descriptor: 'Boutique klantenservice-operaties',
    tagline: 'Uw klanten. Onze mensen. Eén team.',
    secondaryLine: 'Kleine teams. Diepgaande expertise. Klantenservice die voelt als uw eigen afdeling.',
    heroHeadline: 'Toegewijde klantenserviceteams die voelen als uw eigen team.',
    heroCopy:
      'Wij bouwen en beheren kleine, gespecialiseerde klantenserviceteams in Griekenland voor Nederlandstalige en Noordse markten. Wij werven, trainen en begeleiden uw team rond uw klanten, processen en merk.',
    primaryCta: 'Bespreek uw team',
    secondaryCta: 'Zo werkt het',
    finalCtaBody: 'Laten we samen het juiste klantenserviceteam voor uw bedrijf ontwerpen.',
    metaDescription:
      'Toegewijde klantenserviceteams van 3–10 mensen, gevestigd in Griekenland en afgestemd op uw bedrijf. Boutique klantenservice-operaties voor Nederlandstalige en Noordse markten.',
  },
  nb: {
    descriptor: 'Kundeservice i boutiqueformat',
    tagline: 'Dine kunder. Våre folk. Ett team.',
    secondaryLine: 'Små team. Dyp kompetanse. Kundeservice som føles som en del av egen bedrift.',
    heroHeadline: 'Dedikerte kundeserviceteam som føles som dine egne.',
    heroCopy:
      'Vi bygger og driver små, spesialiserte kundeserviceteam i Hellas for nederlandsktalende og nordiske markeder. Vi rekrutterer, lærer opp og leder teamet rundt dine kunder, prosesser og merkevare.',
    primaryCta: 'Snakk med oss om teamet',
    secondaryCta: 'Se hvordan det fungerer',
    finalCtaBody: 'La oss sette sammen det riktige kundeserviceteamet for virksomheten din.',
    metaDescription:
      'Dedikerte kundeserviceteam på 3–10 personer, basert i Hellas og bygget rundt virksomheten din. Kundeservice i boutiqueformat for nederlandsktalende og nordiske markeder.',
  },
  sv: {
    descriptor: 'Kundtjänst i boutiqueformat',
    tagline: 'Era kunder. Våra medarbetare. Ett team.',
    secondaryLine: 'Små team. Djup expertis. Kundtjänst som känns som er egen.',
    heroHeadline: 'Dedikerade kundtjänstteam som känns som era egna.',
    heroCopy:
      'Vi bygger och leder små, specialiserade kundtjänstteam i Grekland för nederländsktalande och nordiska marknader. Vi rekryterar, utbildar och leder ert team utifrån era kunder, processer och varumärke.',
    primaryCta: 'Diskutera ert team',
    secondaryCta: 'Se hur det fungerar',
    finalCtaBody: 'Låt oss utforma rätt kundtjänstteam för ert företag.',
    metaDescription:
      'Dedikerade kundtjänstteam på 3–10 personer, baserade i Grekland och byggda kring ert företag. Kundtjänst i boutiqueformat för nederländsktalande och nordiska marknader.',
  },
  da: {
    descriptor: 'Kundeservice i boutiqueformat',
    tagline: 'Jeres kunder. Vores folk. Ét team.',
    secondaryLine: 'Små teams. Dyb ekspertise. Kundeservice, der føles som jeres egen.',
    heroHeadline: 'Dedikerede kundeserviceteams, der føles som jeres egne.',
    heroCopy:
      'Vi opbygger og leder små, specialiserede kundeserviceteams i Grækenland for nederlandsktalende og nordiske markeder. Vi rekrutterer, oplærer og leder jeres team ud fra jeres kunder, processer og brand.',
    primaryCta: 'Drøft jeres team',
    secondaryCta: 'Se, hvordan det fungerer',
    finalCtaBody: 'Lad os sammensætte det rette kundeserviceteam til jeres virksomhed.',
    metaDescription:
      'Dedikerede kundeserviceteams på 3–10 personer, baseret i Grækenland og bygget op omkring jeres virksomhed. Kundeservice i boutiqueformat for nederlandsktalende og nordiske markeder.',
  },
  fi: {
    descriptor: 'Asiakaspalvelua butiikkimallilla',
    tagline: 'Teidän asiakkaanne. Meidän ihmisemme. Yksi tiimi.',
    secondaryLine: 'Pienet tiimit. Syvä osaaminen. Asiakaspalvelua, joka tuntuu omalta.',
    heroHeadline: 'Omistautuneet asiakaspalvelutiimit, jotka tuntuvat omilta.',
    heroCopy:
      'Rakennamme ja johdamme pieniä, erikoistuneita asiakaspalvelutiimejä Kreikassa hollanninkielisille ja Pohjoismaiden markkinoille. Rekrytoimme, koulutamme ja johdamme tiiminne asiakkaidenne, prosessienne ja brändinne ympärille.',
    primaryCta: 'Keskustellaan tiimistänne',
    secondaryCta: 'Katso, miten se toimii',
    finalCtaBody: 'Suunnitellaan yhdessä yrityksellenne sopiva asiakaspalvelutiimi.',
    metaDescription:
      'Omistautuneet 3–10 hengen asiakaspalvelutiimit, jotka toimivat Kreikasta ja rakentuvat yrityksenne tarpeiden ympärille. Asiakaspalvelua butiikkimallilla hollanninkielisille ja Pohjoismaiden markkinoille.',
  },
}

/**
 * Where website form submissions are emailed. Server-only, never rendered on the site.
 * Override with FORM_RECIPIENT_EMAIL; this default is a temporary inbox until a company address exists.
 */
export const defaultFormRecipient = 'vincent.berndsen@pm.me'

export function getFounderBio(locale: Locale): string | null {
  const bio = company.founder.bio[locale]
  return company.founder.name && bio ? bio : null
}

export function hasLegalDetails(): boolean {
  const e = currentEntity()
  return Boolean(e.name || e.registrationNumber || e.vatNumber || e.registeredAddress)
}
