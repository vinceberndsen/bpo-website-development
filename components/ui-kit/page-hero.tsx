import type { ImageKey } from '@/lib/images'
import { Photo } from './photo'
import { Eyebrow } from './section'

export function PageHero({
  eyebrow,
  title,
  intro,
  image,
  imageAlt,
  children,
}: {
  eyebrow: string
  title: string
  intro: string
  image?: ImageKey
  imageAlt?: string
  children?: React.ReactNode
}) {
  return (
    <section className="border-b bg-background">
      <div className="container-page grid items-center gap-10 py-14 sm:py-20 lg:grid-cols-12 lg:gap-14 lg:py-24">
        <div className={image ? 'lg:col-span-6' : 'lg:col-span-9'}>
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="font-serif text-4xl font-medium leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.4rem]">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">{intro}</p>
          {children && <div className="mt-8 flex flex-wrap gap-3">{children}</div>}
        </div>
        {image && (
          <Photo
            name={image}
            alt={imageAlt ?? ''}
            priority
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="aspect-[4/3] lg:col-span-6"
          />
        )}
      </div>
    </section>
  )
}
