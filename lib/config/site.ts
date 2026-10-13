function normaliseSiteUrl(value: string | undefined): string | null {
  if (!value) return null
  try {
    const url = new URL(value)
    return url.origin
  } catch {
    return null
  }
}

/** Production origin, e.g. https://www.example.com. Unset until a real domain is configured. */
export const siteUrl = normaliseSiteUrl(process.env.NEXT_PUBLIC_SITE_URL)

/** True only for the Vercel production deployment. Preview and local builds are never indexed. */
export const isProductionDeployment = process.env.VERCEL_ENV === 'production'

/** Canonical URLs, hreflang, sitemap entries and indexing are enabled only when both are true. */
export const canIndex = isProductionDeployment && siteUrl !== null
