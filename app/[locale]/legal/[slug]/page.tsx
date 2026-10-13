import { notFound } from 'next/navigation'
import { isLocale } from '@/lib/i18n/config'
import { getDictionary } from '@/lib/i18n/get-dictionary'
import { legalSlugs, paths, type LegalSlug } from '@/lib/routes'
import { buildMetadata } from '@/lib/seo'
import { LegalPage } from '@/components/pages/legal-page'

export const dynamicParams = false

export function generateStaticParams() {
  return legalSlugs.map((slug) => ({ slug }))
}

const isLegalSlug = (s: string): s is LegalSlug => (legalSlugs as readonly string[]).includes(s)

export async function generateMetadata({ params }: PageProps<'/[locale]/legal/[slug]'>) {
  const { locale, slug } = await params
  if (!isLocale(locale) || !isLegalSlug(slug)) return {}
  const doc = getDictionary(locale).legal.docs[slug]
  return buildMetadata({ locale, path: paths.legal(slug), title: doc.title, description: doc.description })
}

export default async function Page({ params }: PageProps<'/[locale]/legal/[slug]'>) {
  const { locale, slug } = await params
  if (!isLocale(locale) || !isLegalSlug(slug)) notFound()
  return <LegalPage locale={locale} dict={getDictionary(locale)} slug={slug} />
}
