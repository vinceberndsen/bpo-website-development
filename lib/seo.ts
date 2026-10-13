import type { Metadata } from 'next'
import { company } from '@/lib/config/company'
import { canIndex, siteUrl } from '@/lib/config/site'
import { defaultLocale, locales, openGraphLocale, type Locale } from '@/lib/i18n/config'
import { localePath } from '@/lib/routes'

type PageMetadataInput = {
  locale: Locale
  /** Locale-independent path suffix, e.g. "/services". */
  path: string
  title: string
  description: string
  /** Use the title as-is without the "| Company" suffix (home page). */
  absoluteTitle?: boolean
}

export function buildMetadata({ locale, path, title, description, absoluteTitle }: PageMetadataInput): Metadata {
  const fullTitle = absoluteTitle ? title : `${title} | ${company.name}`

  const metadata: Metadata = {
    title: absoluteTitle ? { absolute: fullTitle } : title,
    description,
    openGraph: {
      type: 'website',
      siteName: company.name,
      title: fullTitle,
      description,
      locale: openGraphLocale[locale],
      alternateLocale: locales.filter((l) => l !== locale).map((l) => openGraphLocale[l]),
    },
    twitter: { card: 'summary', title: fullTitle, description },
    robots: canIndex ? { index: true, follow: true } : { index: false, follow: false },
  }

  // Canonical URLs and hreflang are only emitted once a real production domain is configured.
  if (canIndex && siteUrl) {
    const languages: Record<string, string> = {}
    for (const l of locales) languages[l] = `${siteUrl}${localePath(l, path)}`
    languages['x-default'] = `${siteUrl}${localePath(defaultLocale, path)}`

    metadata.metadataBase = new URL(siteUrl)
    metadata.alternates = { canonical: `${siteUrl}${localePath(locale, path)}`, languages }
    metadata.openGraph = { ...metadata.openGraph, url: `${siteUrl}${localePath(locale, path)}` }
  }

  return metadata
}
