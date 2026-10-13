'use client'

import { useParams } from 'next/navigation'
import Link from 'next/link'
import { defaultLocale, isLocale } from '@/lib/i18n/config'

const copy: Record<string, { title: string; body: string; back: string }> = {
  en: { title: 'Page not found', body: 'The page you are looking for does not exist or has been moved.', back: 'Back to home' },
  nl: { title: 'Pagina niet gevonden', body: 'De pagina die u zoekt bestaat niet of is verplaatst.', back: 'Terug naar home' },
  nb: { title: 'Fant ikke siden', body: 'Siden du leter etter finnes ikke eller er flyttet.', back: 'Tilbake til forsiden' },
  sv: { title: 'Sidan hittades inte', body: 'Sidan du letar efter finns inte eller har flyttats.', back: 'Tillbaka till startsidan' },
  da: { title: 'Siden blev ikke fundet', body: 'Den side, du leder efter, findes ikke eller er flyttet.', back: 'Tilbage til forsiden' },
  fi: { title: 'Sivua ei löytynyt', body: 'Etsimääsi sivua ei ole olemassa tai se on siirretty.', back: 'Takaisin etusivulle' },
}

export default function NotFound() {
  const params = useParams<{ locale?: string }>()
  const locale = isLocale(params?.locale) ? params.locale : defaultLocale
  const t = copy[locale]
  return (
    <section className="container-page flex flex-col items-start gap-6 py-24 sm:py-32">
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">404</p>
      <h1 className="font-serif text-4xl font-medium tracking-tight sm:text-5xl">{t.title}</h1>
      <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">{t.body}</p>
      <Link
        href={`/${locale}`}
        className="inline-flex items-center rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
      >
        {t.back}
      </Link>
    </section>
  )
}
