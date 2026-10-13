import { notFound } from 'next/navigation'
import { isLocale } from '@/lib/i18n/config'
import { getDictionary } from '@/lib/i18n/get-dictionary'
import { paths } from '@/lib/routes'
import { buildMetadata } from '@/lib/seo'
import { ServicesOverviewPage } from '@/components/pages/services-pages'

export async function generateMetadata({ params }: PageProps<'/[locale]/services'>) {
  const { locale } = await params
  if (!isLocale(locale)) return {}
  const m = getDictionary(locale).meta.services
  return buildMetadata({ locale, path: paths.services, title: m.title, description: m.description })
}

export default async function Page({ params }: PageProps<'/[locale]/services'>) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()
  return <ServicesOverviewPage locale={locale} dict={getDictionary(locale)} />
}
