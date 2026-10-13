import { notFound } from 'next/navigation'
import { isLocale } from '@/lib/i18n/config'
import { getDictionary } from '@/lib/i18n/get-dictionary'
import { paths } from '@/lib/routes'
import { buildMetadata } from '@/lib/seo'
import { MarketsPage } from '@/components/pages/info-pages'

export async function generateMetadata({ params }: PageProps<'/[locale]/markets-and-languages'>) {
  const { locale } = await params
  if (!isLocale(locale)) return {}
  const m = getDictionary(locale).meta.markets
  return buildMetadata({ locale, path: paths.markets, title: m.title, description: m.description })
}

export default async function Page({ params }: PageProps<'/[locale]/markets-and-languages'>) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()
  return <MarketsPage locale={locale} dict={getDictionary(locale)} />
}
