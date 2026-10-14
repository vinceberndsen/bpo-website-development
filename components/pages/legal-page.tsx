import Link from 'next/link'
import { company } from '@/lib/config/company'
import type { Locale } from '@/lib/i18n/config'
import type { Dictionary } from '@/lib/i18n/get-dictionary'
import { legalSlugs, localePath, paths, type LegalSlug } from '@/lib/routes'
import { cn } from '@/lib/utils'

type Row = { label: string; value: string | null; fallback?: string }

function DetailList({ rows, fallback }: { rows: Row[]; fallback: string }) {
  return (
    <dl className="divide-y rounded-lg border bg-card">
      {rows.map((row) => (
        <div key={row.label} className="grid gap-1 px-5 py-4 sm:grid-cols-3 sm:gap-6">
          <dt className="text-sm font-semibold">{row.label}</dt>
          <dd className={cn('sm:col-span-2', row.value ? '' : 'text-sm italic text-muted-foreground')}>
            {row.value ?? row.fallback ?? fallback}
          </dd>
        </div>
      ))}
    </dl>
  )
}

function CompanyDetails({ dict }: { dict: Dictionary }) {
  const l = dict.legal
  const f = l.companyFields
  const { belgianEntity: be, greekEntity: gr } = company.legal
  return (
    <div className="flex flex-col gap-10">
      <section>
        <h2 className="font-serif text-2xl font-medium">{l.companyStatus.title}</h2>
        <p className="mt-3 leading-relaxed text-muted-foreground">{l.companyStatus.body}</p>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{l.companyStatus.brandNote}</p>
      </section>
      <section>
        <h2 className="mb-4 font-serif text-xl font-medium">{l.belgianEntityTitle}</h2>
        <DetailList
          fallback={l.toComplete}
          rows={[
            { label: f.legalName, value: be.name },
            { label: f.legalForm, value: be.legalForm },
            { label: f.registrationNumber, value: be.registrationNumber },
            { label: f.vatNumber, value: be.vatNumber },
            { label: f.registeredAddress, value: be.registeredAddress },
          ]}
        />
      </section>
      <section>
        <h2 className="mb-4 font-serif text-xl font-medium">{l.greekEntityTitle}</h2>
        <DetailList
          fallback={l.notYetRegistered}
          rows={[
            { label: f.legalName, value: gr.name },
            { label: f.legalForm, value: gr.legalForm },
            { label: f.registrationNumber, value: gr.registrationNumber },
            { label: f.taxNumber, value: gr.taxNumber },
            { label: f.registeredAddress, value: gr.registeredAddress },
            { label: f.transitionDate, value: company.legal.intendedTransitionDate },
          ]}
        />
      </section>
      <section>
        <h2 className="mb-4 font-serif text-xl font-medium">{dict.footer.contactHeading}</h2>
        <DetailList
          fallback={l.toComplete}
          rows={[
            { label: f.brand, value: company.name },
            { label: f.dataController, value: company.legal.dataController, fallback: l.toConfirm },
            { label: f.privacyContact, value: company.legal.privacyContact, fallback: l.toConfirm },
            { label: f.email, value: company.email },
            { label: f.phone, value: company.phone },
          ]}
        />
      </section>
    </div>
  )
}

export function LegalPage({ locale, dict, slug }: { locale: Locale; dict: Dictionary; slug: LegalSlug }) {
  const doc = dict.legal.docs[slug]
  const navLabels: Record<LegalSlug, string> = {
    privacy: dict.footer.privacy,
    'recruitment-privacy': dict.footer.recruitmentPrivacy,
    cookies: dict.footer.cookies,
    company: dict.footer.company,
  }

  return (
    <div className="container-page grid gap-12 py-14 sm:py-20 lg:grid-cols-12">
      <nav aria-label={dict.footer.legalHeading} className="lg:col-span-3">
        <ul className="flex flex-wrap gap-2 lg:sticky lg:top-28 lg:flex-col">
          {legalSlugs.map((s) => (
            <li key={s}>
              <Link
                href={localePath(locale, paths.legal(s))}
                aria-current={s === slug ? 'page' : undefined}
                className={cn(
                  'block rounded-md px-3 py-2 text-sm',
                  s === slug ? 'bg-primary font-semibold text-primary-foreground' : 'text-muted-foreground hover:bg-muted hover:text-foreground',
                )}
              >
                {navLabels[s]}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <article className="max-w-3xl lg:col-span-9">
        <h1 className="font-serif text-4xl font-medium tracking-tight sm:text-5xl">{doc.title}</h1>
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{doc.description}</p>
        <p role="note" className="mt-8 rounded-lg border border-accent/30 bg-muted px-5 py-4 text-sm leading-relaxed">
          {dict.legal.draftNotice}
        </p>
        {slug === 'company' ? (
          <div className="mt-10">
            <CompanyDetails dict={dict} />
          </div>
        ) : (
          <div className="mt-10 flex flex-col gap-8">
            {doc.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="font-serif text-2xl font-medium">{section.heading}</h2>
                <p className="mt-3 leading-relaxed text-muted-foreground">{section.body}</p>
              </section>
            ))}
          </div>
        )}
      </article>
    </div>
  )
}
