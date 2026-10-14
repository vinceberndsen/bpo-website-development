import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import type { Locale } from '@/lib/i18n/config'
import type { Dictionary } from '@/lib/i18n/get-dictionary'
import type { ImageKey } from '@/lib/images'
import { localePath, paths, serviceSlugs, type ServiceSlug } from '@/lib/routes'
import { cn } from '@/lib/utils'
import { CheckList } from '@/components/ui-kit/blocks'
import { ButtonLink, TextLink } from '@/components/ui-kit/button-link'
import { CtaBand } from '@/components/ui-kit/cta-band'
import { PageHero } from '@/components/ui-kit/page-hero'
import { Photo } from '@/components/ui-kit/photo'
import { Section, SectionHeader } from '@/components/ui-kit/section'

export const serviceImages: Record<ServiceSlug, ImageKey> = {
  'specialist-support-teams': 'specialist',
  'dealer-partner-support': 'howItWorks',
  'b2b-customer-operations': 'dedicated',
  'customer-care-back-office': 'backOffice',
}

function ServiceCards({ locale, dict, slugs }: { locale: Locale; dict: Dictionary; slugs: readonly ServiceSlug[] }) {
  return (
    <ul className={cn('grid gap-6 md:grid-cols-2', slugs.length === 3 && 'lg:grid-cols-3')}>
      {slugs.map((slug) => {
        const s = dict.services.items[slug]
        return (
          <li key={slug}>
            <Link
              href={localePath(locale, paths.service(slug))}
              className="group flex h-full flex-col overflow-hidden rounded-lg border bg-card shadow-sm transition-shadow hover:shadow-md"
            >
              <Photo
                name={serviceImages[slug]}
                alt=""
                sizes="(min-width: 1024px) 30vw, (min-width: 768px) 45vw, 100vw"
                className="aspect-[16/10] rounded-none shadow-none"
              />
              <div className="flex flex-1 flex-col gap-3 p-6">
                <h3 className="font-serif text-xl font-medium">{s.name}</h3>
                <p className="flex-1 leading-relaxed text-muted-foreground">{s.summary}</p>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
                  {dict.common.viewService}
                  <ArrowRight aria-hidden="true" className="size-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </div>
            </Link>
          </li>
        )
      })}
    </ul>
  )
}

export function ServicesOverviewPage({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const t = dict.servicesPage
  const p = (path: string) => localePath(locale, path)
  return (
    <>
      <PageHero eyebrow={t.hero.eyebrow} title={t.hero.title} intro={t.hero.intro} image="hero" imageAlt={dict.images.hero}>
        <ButtonLink href={p(paths.contact)} withArrow>
          {dict.common.discussYourTeam}
        </ButtonLink>
      </PageHero>
      <Section labelledBy="services-list-title">
        <h2 id="services-list-title" className="sr-only">
          {dict.nav.services}
        </h2>
        <ServiceCards locale={locale} dict={dict} slugs={serviceSlugs} />
      </Section>
      <Section tone="muted" labelledBy="approach-title">
        <div className="grid gap-10 lg:grid-cols-12">
          <SectionHeader id="approach-title" title={t.approach.title} className="lg:col-span-5" />
          <div className="flex flex-col gap-8 lg:col-span-7">
            <CheckList items={t.approach.points} className="text-lg" />
            <p className="rounded-lg border bg-card px-5 py-4 text-sm leading-relaxed text-muted-foreground">{t.scopeNote}</p>
          </div>
        </div>
      </Section>
      <CtaBand
        title={dict.closingCta.title}
        body={dict.closingCta.body}
        primary={{ href: p(paths.contact), label: dict.common.discussYourTeam }}
        secondary={{ href: p(paths.howItWorks), label: dict.common.seeHowItWorks }}
      />
    </>
  )
}

export function ServiceDetailPage({ locale, dict, slug }: { locale: Locale; dict: Dictionary; slug: ServiceSlug }) {
  const s = dict.services.items[slug]
  const labels = dict.services.labels
  const p = (path: string) => localePath(locale, path)
  const related = serviceSlugs.filter((other) => other !== slug)

  return (
    <>
      <PageHero eyebrow={s.eyebrow} title={s.title} intro={s.intro} image={serviceImages[slug]} imageAlt={dict.images[serviceImages[slug]]}>
        <ButtonLink href={p(paths.contact)} withArrow>
          {dict.common.discussYourTeam}
        </ButtonLink>
        <ButtonLink href={p(paths.services)} variant="outline">
          {dict.common.allServices}
        </ButtonLink>
      </PageHero>

      <Section labelledBy="problem-title">
        <div className="grid gap-10 lg:grid-cols-12">
          <SectionHeader id="problem-title" title={labels.problem} intro={s.problem} className="lg:col-span-5" />
          <div className="lg:col-span-7">
            <h3 className="mb-5 font-serif text-xl font-medium">{labels.scope}</h3>
            <CheckList items={s.scope} className="text-lg" />
          </div>
        </div>
      </Section>

      <Section tone="muted" labelledBy="responsibilities-title">
        <SectionHeader id="responsibilities-title" title={labels.responsibilities} />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-lg bg-primary p-6 text-primary-foreground sm:p-8">
            <h3 className="mb-5 font-serif text-xl font-medium">{labels.weHandle}</h3>
            <CheckList items={s.weHandle} tone="light" className="text-navy-muted" />
          </div>
          <div className="rounded-lg border bg-card p-6 sm:p-8">
            <h3 className="mb-5 font-serif text-xl font-medium">{labels.clientRetains}</h3>
            <CheckList items={s.clientRetains} icon="dash" />
          </div>
        </div>
        <aside className="mt-6 rounded-lg border border-accent/30 bg-card p-6 sm:p-8">
          <h3 className="mb-4 font-semibold">{labels.boundaries}</h3>
          <CheckList items={s.boundaries} />
        </aside>
      </Section>

      <Section labelledBy="onboarding-title">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeader id="onboarding-title" title={labels.onboarding} intro={s.onboarding} />
            <p className="mt-6 border-l-2 border-accent pl-4 text-sm leading-relaxed text-muted-foreground">
              {labels.experienceNote}
            </p>
            <TextLink href={p(paths.howItWorks)} className="mt-6">
              {labels.onboardingLink}
            </TextLink>
          </div>
          <div>
            <h2 className="font-serif text-3xl font-medium tracking-tight">{labels.quality}</h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{s.quality.body}</p>
            <CheckList items={s.quality.points} className="mt-6" />
          </div>
        </div>
      </Section>

      <Section tone="muted" labelledBy="related-title">
        <SectionHeader id="related-title" title={labels.related} />
        <div className="mt-10">
          <ServiceCards locale={locale} dict={dict} slugs={related} />
        </div>
      </Section>

      <CtaBand
        title={dict.closingCta.title}
        body={dict.closingCta.body}
        primary={{ href: p(paths.contact), label: dict.common.discussYourTeam }}
      />
    </>
  )
}
