import { notFound } from 'next/navigation'
import { isLocale } from '@/lib/i18n/config'
import { getDictionary } from '@/lib/i18n/get-dictionary'
import { paths, serviceSlugs, type ServiceSlug } from '@/lib/routes'
import { buildMetadata } from '@/lib/seo'
import { ServiceDetailPage } from '@/components/pages/services-pages'

export const dynamicParams = false

export function generateStaticParams() {
  return serviceSlugs.map((slug) => ({ slug }))
}

const isServiceSlug = (s: string): s is ServiceSlug => (serviceSlugs as readonly string[]).includes(s)

export async function generateMetadata({ params }: PageProps<'/[locale]/services/[slug]'>) {
  const { locale, slug } = await params
  if (!isLocale(locale) || !isServiceSlug(slug)) return {}
  const s = getDictionary(locale).services.items[slug]
  return buildMetadata({ locale, path: paths.service(slug), title: s.name, description: s.summary })
}

export default async function Page({ params }: PageProps<'/[locale]/services/[slug]'>) {
  const { locale, slug } = await params
  if (!isLocale(locale) || !isServiceSlug(slug)) notFound()
  return <ServiceDetailPage locale={locale} dict={getDictionary(locale)} slug={slug} />
}
