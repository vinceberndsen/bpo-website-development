'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { Menu, X } from 'lucide-react'
import type { Locale } from '@/lib/i18n/config'
import { cn } from '@/lib/utils'
import { buttonStyles } from '@/components/ui-kit/button-link'
import { LanguageListInline } from './language-switcher'
import { useIsActive, type NavItem } from './nav-links'

type Props = {
  locale: Locale
  items: NavItem[]
  cta: NavItem
  labels: { open: string; close: string; nav: string; language: string }
}

export function MobileNav({ locale, items, cta, labels }: Props) {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const isActive = useIsActive()
  const buttonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    if (!open) return
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    function onKey(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setOpen(false)
        buttonRef.current?.focus()
      }
    }
    document.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = previous
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <div className="lg:hidden">
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((v) => !v)}
        className="inline-flex size-11 items-center justify-center rounded-md border bg-card text-foreground"
      >
        {open ? <X aria-hidden="true" className="size-5" /> : <Menu aria-hidden="true" className="size-5" />}
        <span className="sr-only">{open ? labels.close : labels.open}</span>
      </button>

      <div
        id="mobile-menu"
        hidden={!open}
        className="fixed inset-x-0 top-[var(--header-height)] bottom-0 z-40 overflow-y-auto border-t bg-background"
      >
        <div className="container-page flex flex-col gap-8 py-6">
          <nav aria-label={labels.nav}>
            <ul className="flex flex-col divide-y border-y">
              {items.map((item) => {
                const active = isActive(item.href)
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={active ? 'page' : undefined}
                      className={cn(
                        'flex py-4 font-serif text-xl',
                        active ? 'text-accent' : 'text-foreground',
                      )}
                    >
                      {item.label}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>
          <Link href={cta.href} className={cn(buttonStyles.base, buttonStyles.primary, 'w-full py-3.5')}>
            {cta.label}
          </Link>
          <LanguageListInline locale={locale} label={labels.language} />
        </div>
      </div>
    </div>
  )
}
