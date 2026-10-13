import type { Locale } from '@/lib/i18n/config'
import type { Dictionary } from '@/lib/i18n/get-dictionary'
import { localePath, paths } from '@/lib/routes'
import { ButtonLink } from '@/components/ui-kit/button-link'
import { LanguageSwitcher } from './language-switcher'
import { Logo } from './logo'
import { MobileNav } from './mobile-nav'
import { DesktopNavLinks } from './nav-links'

export function SiteHeader({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const items = [
    { href: localePath(locale, paths.services), label: dict.nav.services },
    { href: localePath(locale, paths.howItWorks), label: dict.nav.howItWorks },
    { href: localePath(locale, paths.markets), label: dict.nav.markets },
    { href: localePath(locale, paths.about), label: dict.nav.about },
    { href: localePath(locale, paths.careers), label: dict.nav.careers },
  ]
  const cta = { href: localePath(locale, paths.contact), label: dict.common.discussYourTeam }

  return (
    <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur-sm [--header-height:4.5rem]">
      <div className="container-page flex h-[var(--header-height)] items-center justify-between gap-6">
        <Logo href={localePath(locale)} />
        <nav aria-label={dict.common.mainNav} className="hidden lg:block">
          <DesktopNavLinks items={items} />
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <LanguageSwitcher locale={locale} label={dict.common.language} selectLabel={dict.common.selectLanguage} />
          <ButtonLink href={cta.href} className="py-2.5">
            {cta.label}
          </ButtonLink>
        </div>
        <MobileNav
          locale={locale}
          items={[...items, { href: localePath(locale, paths.contact), label: dict.nav.contact }]}
          cta={cta}
          labels={{
            open: dict.common.openMenu,
            close: dict.common.closeMenu,
            nav: dict.common.mainNav,
            language: dict.common.language,
          }}
        />
      </div>
    </header>
  )
}
