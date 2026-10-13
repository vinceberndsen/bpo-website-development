import { notFound } from 'next/navigation'
import { isDeliveryConfigured } from '@/lib/forms/delivery'
import { isLocale } from '@/lib/i18n/config'
import { getDictionary } from '@/lib/i18n/get-dictionary'
import { localePath, paths } from '@/lib/routes'
import { buildMetadata } from '@/lib/seo'
import { InterestForm } from '@/components/forms/interest-form'
import { CareersIntro } from '@/components/pages/info-pages'
import { Section, SectionHeader } from '@/components/ui-kit/section'

export async function generateMetadata({ params }: PageProps<'/[locale]/careers'>) {
  const { locale } = await params
  if (!isLocale(locale)) return {}
  const m = getDictionary(locale).meta.careers
  return buildMetadata({ locale, path: paths.careers, title: m.title, description: m.description })
}

export default async function Page({ params }: PageProps<'/[locale]/careers'>) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()
  const dict = getDictionary(locale)
  const t = dict.careers.form
  return (
    <>
      <CareersIntro dict={dict} />
      <Section labelledBy="interest-form-title">
        <div id="interest-form" className="grid scroll-mt-28 gap-12 lg:grid-cols-12">
          <SectionHeader id="interest-form-title" title={t.title} intro={t.intro} className="lg:col-span-4" />
          <div className="rounded-lg border bg-card p-6 shadow-sm sm:p-8 lg:col-span-8">
            <InterestForm
              dict={dict.forms}
              locale={locale}
              privacyHref={localePath(locale, paths.legal('recruitment-privacy'))}
              configured={isDeliveryConfigured()}
            />
          </div>
        </div>
      </Section>
    </>
  )
}
