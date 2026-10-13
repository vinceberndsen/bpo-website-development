import { NextResponse, type NextRequest } from 'next/server'
import { defaultLocale, isLocale, LOCALE_COOKIE, supportedLocales } from '@/lib/i18n/config'

/**
 * Adds a locale prefix to unprefixed paths. Uses the visitor's explicit, remembered
 * language choice (cookie set by the language selector) or falls back to English.
 * No geo-location or Accept-Language based redirects.
 */
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl
  const firstSegment = pathname.split('/')[1]

  if (isLocale(firstSegment)) return NextResponse.next()

  // A supported but not-yet-published language prefix falls back to the English page.
  const unpublishedPrefix = (supportedLocales as readonly string[]).includes(firstSegment)
  const rest = unpublishedPrefix ? pathname.slice(firstSegment.length + 1) : pathname

  const remembered = request.cookies.get(LOCALE_COOKIE)?.value
  const locale = isLocale(remembered) ? remembered : defaultLocale

  const url = request.nextUrl.clone()
  url.pathname = `/${locale}${rest === '/' ? '' : rest}`
  return NextResponse.redirect(url)
}

export const config = {
  matcher: ['/((?!_next|api|images|.*\\..*).*)'],
}
