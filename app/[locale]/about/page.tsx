import { notFound } from 'next/navigation'
import { isLocale } from '@/lib/i18n/config'
import { getDictionary } from '@/lib/i18n/get-dictionary'
import { paths } from '@/lib/routes'
import { buildMetadata } from '@/lib/seo'
import { AboutPage } from '@/components/pages/info-pages'

export async function generateMetadata({ params }: PageProps<'/[locale]/about'>) {
  const { locale } = await params
  if (!isLocale(locale)) return {}
  const m = getDictionary(locale).meta.about
  return buildMetadata({ locale, path: paths.about, title: m.title, description: m.description })
}

export default async function Page({ params }: PageProps<'/[locale]/about'>) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()
  return <AboutPage locale={locale} dict={getDictionary(locale)} />
}
