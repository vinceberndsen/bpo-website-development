'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useId, useRef, useState } from 'react'
import { Check, ChevronDown, Globe } from 'lucide-react'
import { LOCALE_COOKIE, localeNames, locales, type Locale } from '@/lib/i18n/config'
import { cn } from '@/lib/utils'

function rememberLocale(locale: Locale) {
  document.cookie = `${LOCALE_COOKIE}=${locale}; path=/; max-age=31536000; samesite=lax`
}

function useLocalisedHref() {
  const pathname = usePathname() ?? '/'
  const rest = pathname.replace(/^\/[^/]+/, '')
  return (locale: Locale) => `/${locale}${rest}`
}

type Props = {
  locale: Locale
  label: string
  selectLabel: string
  tone?: 'default' | 'light'
}

export function LanguageSwitcher(props: Props) {
  if (locales.length < 2) return null
  return <LanguageSwitcherMenu {...props} />
}

function LanguageSwitcherMenu({ locale, label, selectLabel, tone = 'default' }: Props) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const menuId = useId()
  const hrefFor = useLocalisedHref()

  useEffect(() => {
    if (!open) return
    function onPointer(event: PointerEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) setOpen(false)
    }
    function onKey(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setOpen(false)
        buttonRef.current?.focus()
      }
    }
    document.addEventListener('pointerdown', onPointer)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('pointerdown', onPointer)
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <div ref={ref} className="relative">
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-controls={menuId}
        aria-label={`${selectLabel}: ${localeNames[locale]}`}
        onClick={() => setOpen((v) => !v)}
        className={cn(
          'inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm font-medium transition-colors',
          tone === 'light'
            ? 'border-white/20 text-primary-foreground hover:bg-white/10'
            : 'border-border bg-card text-foreground hover:border-primary/30',
        )}
      >
        <Globe aria-hidden="true" className="size-4" />
        <span>{localeNames[locale]}</span>
        <ChevronDown aria-hidden="true" className={cn('size-4 transition-transform', open && 'rotate-180')} />
      </button>
      <div
        id={menuId}
        hidden={!open}
        className={cn(
          'absolute z-50 mt-2 w-52 rounded-md border bg-popover p-1.5 text-popover-foreground shadow-lg',
          tone === 'light' ? 'bottom-full mb-2 left-0' : 'right-0',
        )}
      >
        <p className="px-3 pt-1.5 pb-2 text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">{label}</p>
        <LanguageList locale={locale} hrefFor={hrefFor} onSelect={() => setOpen(false)} />
      </div>
    </div>
  )
}

function LanguageList({
  locale,
  hrefFor,
  onSelect,
}: {
  locale: Locale
  hrefFor: (l: Locale) => string
  onSelect?: () => void
}) {
  return (
    <ul className="flex flex-col">
      {locales.map((l) => {
        const current = l === locale
        return (
          <li key={l}>
            <Link
              href={hrefFor(l)}
              hrefLang={l}
              lang={l}
              aria-current={current ? 'true' : undefined}
              onClick={() => {
                rememberLocale(l)
                onSelect?.()
              }}
              className={cn(
                'flex items-center justify-between gap-3 rounded px-3 py-2 text-sm hover:bg-muted',
                current && 'font-semibold text-primary',
              )}
            >
              <span>{localeNames[l]}</span>
              <span className="flex items-center gap-2 text-xs uppercase text-muted-foreground">
                {l}
                {current && <Check aria-hidden="true" className="size-4 text-accent" />}
              </span>
            </Link>
          </li>
        )
      })}
    </ul>
  )
}

/** Flat list variant used inside the mobile menu. */
export function LanguageListInline(props: { locale: Locale; label: string }) {
  if (locales.length < 2) return null
  return <LanguageListInlineInner {...props} />
}

function LanguageListInlineInner({ locale, label }: { locale: Locale; label: string }) {
  const hrefFor = useLocalisedHref()
  return (
    <nav aria-label={label}>
      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">{label}</p>
      <ul className="grid grid-cols-2 gap-2">
        {locales.map((l) => {
          const current = l === locale
          return (
            <li key={l}>
              <Link
                href={hrefFor(l)}
                hrefLang={l}
                lang={l}
                aria-current={current ? 'true' : undefined}
                onClick={() => rememberLocale(l)}
                className={cn(
                  'flex items-center justify-between rounded-md border px-3 py-2.5 text-sm',
                  current ? 'border-primary bg-primary text-primary-foreground' : 'bg-card hover:border-primary/30',
                )}
              >
                {localeNames[l]}
                <span className="text-xs uppercase opacity-70">{l}</span>
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
