import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import type { Locale } from '@/lib/i18n/config'
import type { Dictionary } from '@/lib/i18n/get-dictionary'
import { localePath, paths, serviceSlugs } from '@/lib/routes'
import { CheckList, Faq, FeatureGrid, ProcessSteps } from '@/components/ui-kit/blocks'
import { ButtonLink, TextLink } from '@/components/ui-kit/button-link'
import { CtaBand } from '@/components/ui-kit/cta-band'
import { Photo } from '@/components/ui-kit/photo'
import { Eyebrow, Section, SectionHeader } from '@/components/ui-kit/section'

export function HomePage({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const t = dict.home
  const p = (path: string) => localePath(locale, path)

  return (
    <>
      <section className="border-b">
        <div className="container-page grid items-center gap-10 py-14 sm:py-20 lg:grid-cols-12 lg:gap-14 lg:py-24">
          <div className="lg:col-span-6">
            <Eyebrow>{t.hero.eyebrow}</Eyebrow>
            <h1 className="font-serif text-4xl font-medium leading-[1.06] tracking-tight sm:text-5xl lg:text-6xl">
              {t.hero.title}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">{t.hero.intro}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href={p(paths.contact)} withArrow>
                {dict.common.discussYourTeam}
              </ButtonLink>
              <ButtonLink href={p(paths.howItWorks)} variant="outline">
                {dict.common.seeHowItWorks}
              </ButtonLink>
            </div>
          </div>
          <Photo
            name="hero"
            alt={dict.images.hero}
            priority
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="aspect-[4/3] lg:col-span-6 lg:aspect-[5/4]"
          />
        </div>
        <div className="border-t bg-card">
          <div className="container-page">
            <h2 className="sr-only">{t.strip.label}</h2>
            <ul className="grid grid-cols-2 gap-px bg-border lg:grid-cols-4">
              {t.strip.items.map((item) => (
                <li key={item} className="flex items-center gap-3 bg-card py-5 pr-4 text-sm font-medium sm:text-base">
                  <span aria-hidden="true" className="h-5 w-0.5 shrink-0 bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <Section labelledBy="why-title">
        <div className="grid gap-12 lg:grid-cols-12">
          <SectionHeader id="why-title" eyebrow={t.why.eyebrow} title={t.why.title} intro={t.why.intro} className="lg:col-span-5" />
          <ul className="flex flex-col divide-y border-y lg:col-span-7">
            {t.why.points.map((point) => (
              <li key={point.title} className="grid gap-2 py-6 sm:grid-cols-3 sm:gap-6">
                <h3 className="font-semibold">{point.title}</h3>
                <p className="leading-relaxed text-muted-foreground sm:col-span-2">{point.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section tone="muted" labelledBy="services-title">
        <SectionHeader id="services-title" eyebrow={t.services.eyebrow} title={t.services.title} intro={t.services.intro} />
        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {serviceSlugs.map((slug) => {
            const s = dict.services.items[slug]
            return (
              <li key={slug}>
                <Link
                  href={p(paths.service(slug))}
                  className="group flex h-full flex-col gap-4 rounded-lg border bg-card p-6 shadow-sm transition-shadow hover:shadow-md sm:p-8"
                >
                  <h3 className="font-serif text-xl font-medium">{s.name}</h3>
                  <p className="flex-1 leading-relaxed text-muted-foreground">{s.summary}</p>
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
                    {dict.common.viewService}
                    <ArrowRight aria-hidden="true" className="size-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              </li>
            )
          })}
        </ul>
      </Section>

      <Section labelledBy="clients-title">
        <SectionHeader id="clients-title" eyebrow={t.clients.eyebrow} title={t.clients.title} />
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {t.clients.items.map((client) => (
            <article key={client.title} className="flex flex-col gap-4 rounded-lg border bg-card p-6 sm:p-8">
              <h3 className="font-serif text-2xl font-medium leading-snug">{client.title}</h3>
              <p className="leading-relaxed text-muted-foreground">{client.body}</p>
              <CheckList items={client.points} className="mt-2" />
            </article>
          ))}
        </div>
      </Section>

      <Section tone="navy" labelledBy="dedicated-title">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <Photo name="dedicated" alt={dict.images.dedicated} className="aspect-[4/3] lg:col-span-5" />
          <div className="lg:col-span-7">
            <SectionHeader id="dedicated-title" tone="light" eyebrow={t.dedicated.eyebrow} title={t.dedicated.title} intro={t.dedicated.intro} />
            <div className="mt-10 grid gap-8 sm:grid-cols-2">
              <div>
                <h3 className="mb-4 font-semibold">{t.dedicated.dedicatedHeading}</h3>
                <CheckList items={t.dedicated.dedicatedItems} tone="light" className="text-navy-muted" />
              </div>
              <div className="border-t border-white/15 pt-8 sm:border-t-0 sm:border-l sm:pt-0 sm:pl-8">
                <h3 className="mb-4 font-semibold">{t.dedicated.sharedHeading}</h3>
                <CheckList items={t.dedicated.sharedItems} tone="light" className="text-navy-muted" />
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section labelledBy="process-title">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeader id="process-title" eyebrow={t.process.eyebrow} title={t.process.title} />
          <TextLink href={p(paths.howItWorks)}>{t.process.cta}</TextLink>
        </div>
        <div className="mt-12">
          <ProcessSteps steps={t.process.steps} stepLabel={dict.common.stepLabel} />
        </div>
      </Section>

      <Section tone="muted" labelledBy="markets-title">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeader id="markets-title" eyebrow={t.markets.eyebrow} title={t.markets.title} intro={t.markets.body} />
            <TextLink href={p(paths.markets)} className="mt-6">
              {t.markets.cta}
            </TextLink>
          </div>
          <div className="flex flex-col gap-6 lg:col-span-7">
            <div className="grid gap-6 sm:grid-cols-2">
              <article className="rounded-lg border bg-card p-6">
                <h3 className="font-serif text-xl font-medium">{t.markets.dutchTitle}</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{t.markets.dutchBody}</p>
              </article>
              <article className="rounded-lg border bg-card p-6">
                <h3 className="font-serif text-xl font-medium">{t.markets.nordicTitle}</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{t.markets.nordicBody}</p>
              </article>
            </div>
            <p className="rounded-lg border border-accent/30 bg-card px-5 py-4 text-sm leading-relaxed">{t.markets.note}</p>
          </div>
        </div>
      </Section>

      <Section labelledBy="greece-title">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <SectionHeader id="greece-title" eyebrow={t.greece.eyebrow} title={t.greece.title} />
            <div className="mt-6 flex flex-col gap-4 leading-relaxed text-muted-foreground">
              {t.greece.paragraphs.map((para) => (
                <p key={para}>{para}</p>
              ))}
            </div>
            <CheckList items={t.greece.points} className="mt-8" />
          </div>
          <Photo name="athensView" alt={dict.images.athensView} className="aspect-[4/3] lg:col-span-6" />
        </div>
      </Section>

      <Section tone="muted" labelledBy="clarity-title">
        <SectionHeader id="clarity-title" eyebrow={t.clarity.eyebrow} title={t.clarity.title} intro={t.clarity.intro} />
        <div className="mt-12">
          <FeatureGrid items={t.clarity.items} columns={4} />
        </div>
      </Section>

      <Section labelledBy="faq-title">
        <div className="grid gap-12 lg:grid-cols-12">
          <SectionHeader id="faq-title" eyebrow={t.faq.eyebrow} title={t.faq.title} className="lg:col-span-4" />
          <div className="lg:col-span-8">
            <Faq items={t.faq.items} />
          </div>
        </div>
      </Section>

      <CtaBand
        title={t.finalCta.title}
        body={t.finalCta.body}
        primary={{ href: p(paths.contact), label: dict.common.discussYourTeam }}
        secondary={{ href: p(paths.howItWorks), label: dict.common.seeHowItWorks }}
      />
    </>
  )
}
