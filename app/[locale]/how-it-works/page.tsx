import { notFound } from 'next/navigation'
import { isLocale } from '@/lib/i18n/config'
import { getDictionary } from '@/lib/i18n/get-dictionary'
import { paths } from '@/lib/routes'
import { buildMetadata } from '@/lib/seo'
import { HowItWorksPage } from '@/components/pages/info-pages'

export async function generateMetadata({ params }: PageProps<'/[locale]/how-it-works'>) {
  const { locale } = await params
  if (!isLocale(locale)) return {}
  const m = getDictionary(locale).meta.howItWorks
  return buildMetadata({ locale, path: paths.howItWorks, title: m.title, description: m.description })
}

export default async function Page({ params }: PageProps<'/[locale]/how-it-works'>) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()
  return <HowItWorksPage locale={locale} dict={getDictionary(locale)} />
}
