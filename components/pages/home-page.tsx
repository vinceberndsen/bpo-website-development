import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import type { Locale } from '@/lib/i18n/config'
import type { Dictionary } from '@/lib/i18n/get-dictionary'
import { localePath, paths, serviceSlugs } from '@/lib/routes'
import { CheckList, Faq, FeatureGrid, ProcessSteps } from '@/components/ui-kit/blocks'
import { ButtonLink, TextLink } from '@/components/ui-kit/button-link'
import { CtaBand } from '@/components/ui-kit/cta-band'
import { ExperienceList } from '@/components/ui-kit/experience-list'
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
            <h1 className="font-serif text-4xl font-medium leading-[1.06] tracking-tight text-balance sm:text-5xl lg:text-6xl">
              {t.hero.title}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">{t.hero.intro}</p>
            <p className="mt-4 max-w-xl border-l-2 border-accent pl-4 text-sm leading-relaxed text-muted-foreground">
              {t.hero.shortLine}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href={p(paths.contact)} withArrow>
                {dict.common.discussYourTeam}
              </ButtonLink>
              <ButtonLink href={p(paths.services)} variant="outline">
                {dict.common.exploreExpertise}
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

      <Section labelledBy="resolution-title">
        <div className="grid gap-12 lg:grid-cols-12">
          <SectionHeader
            id="resolution-title"
            eyebrow={t.resolution.eyebrow}
            title={t.resolution.title}
            intro={t.resolution.intro}
            className="lg:col-span-5"
          />
          <ul className="flex flex-col divide-y border-y lg:col-span-7">
            {t.resolution.points.map((point) => (
              <li key={point.title} className="grid gap-2 py-6 sm:grid-cols-3 sm:gap-6">
                <h3 className="font-semibold">{point.title}</h3>
                <p className="leading-relaxed text-muted-foreground sm:col-span-2">{point.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section tone="muted" labelledBy="services-title">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeader id="services-title" eyebrow={t.services.eyebrow} title={t.services.title} intro={t.services.intro} />
          <TextLink href={p(paths.services)}>{dict.common.allServices}</TextLink>
        </div>
        <ul className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {serviceSlugs.map((slug) => {
            const s = dict.services.items[slug]
            return (
              <li key={slug}>
                <Link
                  href={p(paths.service(slug))}
                  className="group flex h-full flex-col gap-4 rounded-lg border bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
                >
                  <h3 className="font-serif text-xl font-medium leading-snug">{s.name}</h3>
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

      <Section labelledBy="layer-title">
        <SectionHeader id="layer-title" eyebrow={t.layer.eyebrow} title={t.layer.title} intro={t.layer.intro} />
        <div className="mt-12">
          <FeatureGrid items={t.layer.models} columns={3} />
        </div>
        <p className="mt-8 max-w-3xl leading-relaxed text-muted-foreground">{t.layer.note}</p>
      </Section>

      <Section tone="navy" labelledBy="experience-title">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeader
              id="experience-title"
              tone="light"
              eyebrow={t.experience.eyebrow}
              title={t.experience.title}
              intro={t.experience.intro}
            />
            <Link
              href={p(paths.about)}
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-teal-light hover:underline"
            >
              {t.experience.cta}
              <ArrowRight aria-hidden="true" className="size-4" />
            </Link>
          </div>
          <ExperienceList dict={dict} tone="light" className="lg:col-span-7 lg:pt-2" />
        </div>
      </Section>

      <Section labelledBy="dedicated-title">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <Photo name="dedicated" alt={dict.images.dedicated} className="aspect-[4/3] lg:col-span-5" />
          <div className="lg:col-span-7">
            <SectionHeader id="dedicated-title" eyebrow={t.dedicated.eyebrow} title={t.dedicated.title} intro={t.dedicated.intro} />
            <div className="mt-10 grid gap-8 sm:grid-cols-2">
              <div>
                <h3 className="mb-4 font-semibold">{t.dedicated.dedicatedHeading}</h3>
                <CheckList items={t.dedicated.dedicatedItems} />
              </div>
              <div className="border-t pt-8 sm:border-t-0 sm:border-l sm:pt-0 sm:pl-8">
                <h3 className="mb-4 font-semibold">{t.dedicated.sharedHeading}</h3>
                <CheckList items={t.dedicated.sharedItems} />
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section tone="muted" labelledBy="process-title">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeader id="process-title" eyebrow={t.process.eyebrow} title={t.process.title} />
          <TextLink href={p(paths.howItWorks)}>{t.process.cta}</TextLink>
        </div>
        <div className="mt-12">
          <ProcessSteps steps={t.process.steps} stepLabel={dict.common.stepLabel} />
        </div>
      </Section>

      <Section labelledBy="markets-title">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeader id="markets-title" eyebrow={t.markets.eyebrow} title={t.markets.title} intro={t.markets.body} />
            <TextLink href={p(paths.markets)} className="mt-6">
              {t.markets.cta}
            </TextLink>
          </div>
          <div className="flex flex-col gap-6 lg:col-span-7">
            <ul className="grid gap-6 sm:grid-cols-2">
              {t.markets.items.map((item) => (
                <li key={item.title} className="rounded-lg border bg-card p-6">
                  <h3 className="font-serif text-xl font-medium">{item.title}</h3>
                  <p className="mt-3 leading-relaxed text-muted-foreground">{item.body}</p>
                </li>
              ))}
            </ul>
            <p className="rounded-lg border border-accent/30 bg-muted px-5 py-4 text-sm leading-relaxed">{t.markets.note}</p>
          </div>
        </div>
      </Section>

      <Section tone="muted" labelledBy="greece-title">
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
      />
    </>
  )
}
