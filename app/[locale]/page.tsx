import { notFound } from 'next/navigation'
import { isLocale } from '@/lib/i18n/config'
import { getDictionary } from '@/lib/i18n/get-dictionary'
import { paths } from '@/lib/routes'
import { buildMetadata } from '@/lib/seo'
import { HomePage } from '@/components/pages/home-page'

export async function generateMetadata({ params }: PageProps<'/[locale]'>) {
  const { locale } = await params
  if (!isLocale(locale)) return {}
  const m = getDictionary(locale).meta.home
  return buildMetadata({ locale, path: paths.home, title: m.title, description: m.description, absoluteTitle: true })
}

export default async function Page({ params }: PageProps<'/[locale]'>) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()
  return <HomePage locale={locale} dict={getDictionary(locale)} />
}
