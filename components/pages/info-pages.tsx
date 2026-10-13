import { company, getFounderBio } from '@/lib/config/company'
import type { Locale } from '@/lib/i18n/config'
import type { Dictionary } from '@/lib/i18n/get-dictionary'
import { localePath, paths } from '@/lib/routes'
import { CheckList, FeatureGrid } from '@/components/ui-kit/blocks'
import { ButtonLink } from '@/components/ui-kit/button-link'
import { CtaBand } from '@/components/ui-kit/cta-band'
import { PageHero } from '@/components/ui-kit/page-hero'
import { Photo } from '@/components/ui-kit/photo'
import { Section, SectionHeader } from '@/components/ui-kit/section'

type PageProps = { locale: Locale; dict: Dictionary }

export function HowItWorksPage({ locale, dict }: PageProps) {
  const t = dict.howItWorks
  const p = (path: string) => localePath(locale, path)
  return (
    <>
      <PageHero eyebrow={t.hero.eyebrow} title={t.hero.title} intro={t.hero.intro} image="howItWorks" imageAlt={dict.images.howItWorks} />

      <Section labelledBy="steps-title">
        <h2 id="steps-title" className="sr-only">
          {t.hero.eyebrow}
        </h2>
        <ol className="flex flex-col divide-y border-y">
          {t.steps.map((step, i) => (
            <li key={step.title} className="grid gap-3 py-8 md:grid-cols-12 md:gap-8">
              <span className="text-xs font-semibold uppercase tracking-[0.14em] text-accent md:col-span-2 md:pt-1.5">
                {dict.common.stepLabel} {i + 1}
              </span>
              <h3 className="font-serif text-2xl font-medium leading-snug md:col-span-4">{step.title}</h3>
              <p className="leading-relaxed text-muted-foreground md:col-span-6 md:pt-1">{step.body}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section tone="muted" labelledBy="resp-title">
        <SectionHeader id="resp-title" eyebrow={t.responsibilities.eyebrow} title={t.responsibilities.title} intro={t.responsibilities.intro} />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-lg bg-primary p-6 text-primary-foreground sm:p-8">
            <h3 className="mb-5 font-serif text-2xl font-medium">{t.responsibilities.weTitle}</h3>
            <CheckList items={t.responsibilities.we} tone="light" className="text-navy-muted" />
          </div>
          <div className="rounded-lg border bg-card p-6 sm:p-8">
            <h3 className="mb-5 font-serif text-2xl font-medium">{t.responsibilities.clientTitle}</h3>
            <CheckList items={t.responsibilities.client} />
          </div>
        </div>
      </Section>

      <Section labelledBy="define-title">
        <SectionHeader id="define-title" eyebrow={t.define.eyebrow} title={t.define.title} intro={t.define.intro} />
        <div className="mt-10">
          <FeatureGrid items={t.define.items} />
        </div>
        <aside className="mt-10 rounded-lg border border-accent/30 bg-card p-6 sm:p-8">
          <h3 className="font-semibold">{t.timing.title}</h3>
          <p className="mt-2 max-w-3xl leading-relaxed text-muted-foreground">{t.timing.body}</p>
        </aside>
      </Section>

      <CtaBand
        title={dict.closingCta.title}
        body={dict.closingCta.body}
        primary={{ href: p(paths.contact), label: dict.common.discussYourTeam }}
      />
    </>
  )
}

export function MarketsPage({ locale, dict }: PageProps) {
  const t = dict.markets
  const p = (path: string) => localePath(locale, path)
  return (
    <>
      <PageHero eyebrow={t.hero.eyebrow} title={t.hero.title} intro={t.hero.intro} image="markets" imageAlt={dict.images.markets} />

      <Section labelledBy="distinction-title">
        <SectionHeader id="distinction-title" title={t.distinction.title} />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <article className="rounded-lg border bg-card p-6 sm:p-8">
            <h3 className="font-serif text-xl font-medium">{t.distinction.websiteTitle}</h3>
            <p className="mt-3 leading-relaxed text-muted-foreground">{t.distinction.websiteBody}</p>
          </article>
          <article className="rounded-lg border-2 border-accent/40 bg-card p-6 sm:p-8">
            <h3 className="font-serif text-xl font-medium">{t.distinction.deliveryTitle}</h3>
            <p className="mt-3 leading-relaxed text-muted-foreground">{t.distinction.deliveryBody}</p>
          </article>
        </div>
      </Section>

      <Section tone="muted" labelledBy="markets-list-title">
        <SectionHeader id="markets-list-title" title={t.marketsTitle} intro={t.marketsIntro} />
        <ul className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {t.items.map((m) => (
            <li key={m.name} className="flex flex-col gap-3 rounded-lg border bg-card p-6">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-serif text-xl font-medium">{m.name}</h3>
                <span className="text-xs font-semibold uppercase tracking-[0.12em] text-accent">{m.language}</span>
              </div>
              <p className="leading-relaxed text-muted-foreground">{m.body}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section labelledBy="principles-title">
        <SectionHeader id="principles-title" title={t.principles.title} />
        <div className="mt-10">
          <FeatureGrid items={t.principles.items} columns={4} />
        </div>
      </Section>

      <CtaBand title={t.cta.title} body={t.cta.body} primary={{ href: p(paths.contact), label: dict.common.discussYourTeam }} />
    </>
  )
}

export function AboutPage({ locale, dict }: PageProps) {
  const t = dict.about
  const p = (path: string) => localePath(locale, path)
  const founderBio = getFounderBio(locale)
  return (
    <>
      <PageHero eyebrow={t.hero.eyebrow} title={t.hero.title} intro={t.hero.intro} image="athensAcropolis" imageAlt={dict.images.athensAcropolis} />

      <Section labelledBy="philosophy-title">
        <SectionHeader id="philosophy-title" title={t.philosophy.title} intro={t.philosophy.intro} />
        <div className="mt-10">
          <FeatureGrid items={t.philosophy.items} />
        </div>
      </Section>

      <Section tone="muted" labelledBy="greece-title">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <Photo name="athensStreet" alt={dict.images.athensStreet} className="aspect-[4/3] lg:col-span-6" />
          <div className="lg:col-span-6">
            <SectionHeader id="greece-title" title={t.greece.title} />
            <div className="mt-6 flex flex-col gap-4 leading-relaxed text-muted-foreground">
              {t.greece.paragraphs.map((para) => (
                <p key={para}>{para}</p>
              ))}
            </div>
            <p className="mt-6 text-sm italic text-muted-foreground">{t.greece.note}</p>
          </div>
        </div>
      </Section>

      {/* Founder section renders only once a verified biography is configured in lib/config/company.ts. */}
      {founderBio && company.founder.name && (
        <Section labelledBy="founder-title">
          <div className="max-w-3xl">
            <SectionHeader id="founder-title" title={t.founder.title} />
            <p className="mt-6 font-semibold">
              {company.founder.name}
              {company.founder.role && <span className="font-normal text-muted-foreground">, {company.founder.role}</span>}
            </p>
            <p className="mt-3 text-lg leading-relaxed text-muted-foreground">{founderBio}</p>
          </div>
        </Section>
      )}

      <CtaBand
        title={dict.closingCta.title}
        body={dict.closingCta.body}
        primary={{ href: p(paths.contact), label: dict.common.discussYourTeam }}
        secondary={{ href: p(paths.careers), label: dict.nav.careers }}
      />
    </>
  )
}

export function CareersIntro({ dict }: { dict: Dictionary }) {
  const t = dict.careers
  return (
    <>
      <PageHero eyebrow={t.hero.eyebrow} title={t.hero.title} intro={t.hero.intro} image="customerCare" imageAlt={dict.images.customerCare}>
        <ButtonLink href="#interest-form" withArrow>
          {t.form.title}
        </ButtonLink>
      </PageHero>
      <Section labelledBy="roles-title">
        <SectionHeader id="roles-title" title={t.roles.title} />
        <div className="mt-10">
          <FeatureGrid items={t.roles.items} columns={2} />
        </div>
      </Section>
      <Section tone="muted" labelledBy="careers-process-title">
        <SectionHeader id="careers-process-title" title={t.process.title} />
        <ol className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {t.process.steps.map((step, i) => (
            <li key={step} className="flex flex-col gap-3 border-t-2 border-accent pt-5">
              <span className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">
                {dict.common.stepLabel} {i + 1}
              </span>
              <p className="leading-relaxed">{step}</p>
            </li>
          ))}
        </ol>
      </Section>
    </>
  )
}
