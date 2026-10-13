import { notFound } from 'next/navigation'
import { company } from '@/lib/config/company'
import { isDeliveryConfigured } from '@/lib/forms/delivery'
import { isLocale } from '@/lib/i18n/config'
import { getDictionary } from '@/lib/i18n/get-dictionary'
import { localePath, paths } from '@/lib/routes'
import { buildMetadata } from '@/lib/seo'
import { EnquiryForm } from '@/components/forms/enquiry-form'
import { Eyebrow } from '@/components/ui-kit/section'

export async function generateMetadata({ params }: PageProps<'/[locale]/contact'>) {
  const { locale } = await params
  if (!isLocale(locale)) return {}
  const m = getDictionary(locale).meta.contact
  return buildMetadata({ locale, path: paths.contact, title: m.title, description: m.description })
}

export default async function Page({ params }: PageProps<'/[locale]/contact'>) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()
  const dict = getDictionary(locale)
  const t = dict.contact

  return (
    <div className="container-page grid gap-12 py-14 sm:py-20 lg:grid-cols-12 lg:gap-16">
      <div className="flex flex-col gap-8 lg:col-span-5">
        <div>
          <Eyebrow>{t.hero.eyebrow}</Eyebrow>
          <h1 className="font-serif text-4xl font-medium leading-tight tracking-tight text-balance sm:text-5xl">{t.hero.title}</h1>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{t.hero.intro}</p>
        </div>
        <aside className="rounded-lg bg-primary p-6 text-primary-foreground sm:p-8">
          <h2 className="font-serif text-xl font-medium">{t.aside.title}</h2>
          <ol className="mt-5 flex flex-col gap-4">
            {t.aside.steps.map((step, i) => (
              <li key={step} className="flex gap-4 leading-relaxed text-navy-muted">
                <span aria-hidden="true" className="font-serif text-lg text-accent-light">
                  {i + 1}
                </span>
                {step}
              </li>
            ))}
          </ol>
          <p className="mt-6 border-t border-primary-foreground/15 pt-5 text-sm leading-relaxed text-navy-muted">{t.aside.note}</p>
        </aside>
        {company.email && (
          <p className="text-sm text-muted-foreground">
            <a href={`mailto:${company.email}`} className="font-semibold text-accent underline underline-offset-2">
              {company.email}
            </a>
          </p>
        )}
      </div>
      <div className="rounded-lg border bg-card p-6 shadow-sm sm:p-8 lg:col-span-7">
        <h2 className="sr-only">{dict.forms.enquiry.title}</h2>
        <EnquiryForm
          dict={dict.forms}
          locale={locale}
          privacyHref={localePath(locale, paths.legal('privacy'))}
          configured={isDeliveryConfigured()}
        />
      </div>
    </div>
  )
}
