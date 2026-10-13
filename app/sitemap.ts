import type { MetadataRoute } from 'next'
import { canIndex, siteUrl } from '@/lib/config/site'
import { defaultLocale, locales } from '@/lib/i18n/config'
import { allPagePaths, localePath } from '@/lib/routes'

/** Empty until NEXT_PUBLIC_SITE_URL is set on the production deployment. */
export default function sitemap(): MetadataRoute.Sitemap {
  if (!canIndex || !siteUrl) return []
  return allPagePaths.flatMap((path) =>
    locales.map((locale) => ({
      url: `${siteUrl}${localePath(locale, path)}`,
      changeFrequency: 'monthly' as const,
      priority: path === '' ? 1 : 0.7,
      alternates: {
        languages: {
          ...Object.fromEntries(locales.map((l) => [l, `${siteUrl}${localePath(l, path)}`])),
          'x-default': `${siteUrl}${localePath(defaultLocale, path)}`,
        },
      },
    })),
  )
}
