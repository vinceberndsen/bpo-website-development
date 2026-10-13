import Link from 'next/link'
import { company } from '@/lib/config/company'
import type { Locale } from '@/lib/i18n/config'
import type { Dictionary } from '@/lib/i18n/get-dictionary'
import { localePath, paths, serviceSlugs } from '@/lib/routes'
import { LanguageSwitcher } from './language-switcher'
import { Logo } from './logo'

function FooterColumn({ heading, links }: { heading: string; links: { href: string; label: string }[] }) {
  return (
    <div>
      <h2 className="text-xs font-semibold uppercase tracking-[0.14em] text-teal-light">{heading}</h2>
      <ul className="mt-4 flex flex-col gap-2.5">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="text-sm text-navy-muted hover:text-primary-foreground hover:underline">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function SiteFooter({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const p = (path: string) => localePath(locale, path)
  const year = new Date().getFullYear()

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-page grid gap-12 py-16 lg:grid-cols-12">
        <div className="flex flex-col gap-6 lg:col-span-4">
          <div className="flex flex-col gap-3">
            <Logo href={p(paths.home)} tone="light" />
            <p className="text-xs font-semibold uppercase tracking-widest text-teal-light">{dict.brand.descriptor}</p>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-navy-muted">{dict.footer.proposition}</p>
          <div>
            <LanguageSwitcher
              locale={locale}
              label={dict.common.language}
              selectLabel={dict.common.selectLanguage}
              tone="light"
            />
          </div>
        </div>

        <nav aria-label={dict.common.footerNav} className="grid gap-10 sm:grid-cols-2 lg:col-span-8 lg:grid-cols-4">
          <FooterColumn
            heading={dict.footer.servicesHeading}
            links={[
              { href: p(paths.services), label: dict.common.allServices },
              ...serviceSlugs.map((slug) => ({
                href: p(paths.service(slug)),
                label: dict.services.items[slug].name,
              })),
            ]}
          />
          <FooterColumn
            heading={dict.footer.pagesHeading}
            links={[
              { href: p(paths.howItWorks), label: dict.nav.howItWorks },
              { href: p(paths.markets), label: dict.nav.markets },
              { href: p(paths.about), label: dict.nav.about },
              { href: p(paths.careers), label: dict.nav.careers },
            ]}
          />
          <FooterColumn
            heading={dict.footer.legalHeading}
            links={[
              { href: p(paths.legal('privacy')), label: dict.footer.privacy },
              { href: p(paths.legal('recruitment-privacy')), label: dict.footer.recruitmentPrivacy },
              { href: p(paths.legal('cookies')), label: dict.footer.cookies },
              { href: p(paths.legal('company')), label: dict.footer.company },
            ]}
          />
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.14em] text-teal-light">
              {dict.footer.contactHeading}
            </h2>
            <ul className="mt-4 flex flex-col gap-2.5 text-sm">
              <li>
                <Link href={p(paths.contact)} className="text-navy-muted hover:text-primary-foreground hover:underline">
                  {dict.footer.contactLink}
                </Link>
              </li>
              {company.email && (
                <li>
                  <a href={`mailto:${company.email}`} className="text-navy-muted hover:text-primary-foreground hover:underline">
                    {company.email}
                  </a>
                </li>
              )}
              {company.phone && (
                <li>
                  <a href={`tel:${company.phone.replace(/\s/g, '')}`} className="text-navy-muted hover:text-primary-foreground hover:underline">
                    {company.phone}
                  </a>
                </li>
              )}
              {company.social.linkedin && (
                <li>
                  <a href={company.social.linkedin} rel="noopener noreferrer" target="_blank" className="text-navy-muted hover:text-primary-foreground hover:underline">
                    LinkedIn
                  </a>
                </li>
              )}
            </ul>
          </div>
        </nav>
      </div>
      <div className="border-t border-white/10">
        <div className="container-page flex flex-col gap-2 py-6 text-xs text-navy-muted sm:flex-row sm:justify-between">
          <p>
            © {year} {company.legalName ?? company.name}. {dict.footer.rights}
          </p>
          <p>{dict.footer.photoCredit}</p>
        </div>
      </div>
    </footer>
  )
}
