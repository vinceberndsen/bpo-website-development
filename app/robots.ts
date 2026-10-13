import type { MetadataRoute } from 'next'
import { canIndex, siteUrl } from '@/lib/config/site'

/** Preview and local deployments disallow all crawling. */
export default function robots(): MetadataRoute.Robots {
  if (!canIndex || !siteUrl) {
    return { rules: { userAgent: '*', disallow: '/' } }
  }
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: `${siteUrl}/sitemap.xml`,
  }
}
