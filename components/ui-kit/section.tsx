import { cn } from '@/lib/utils'

type Tone = 'default' | 'muted' | 'navy' | 'white'

const toneStyles: Record<Tone, string> = {
  default: 'bg-background',
  muted: 'bg-muted',
  white: 'bg-card',
  navy: 'bg-primary text-primary-foreground',
}

export function Section({
  children,
  tone = 'default',
  className,
  id,
  labelledBy,
}: {
  children: React.ReactNode
  tone?: Tone
  className?: string
  id?: string
  labelledBy?: string
}) {
  return (
    <section id={id} aria-labelledby={labelledBy} className={cn('py-16 sm:py-20 lg:py-24', toneStyles[tone], className)}>
      <div className="container-page">{children}</div>
    </section>
  )
}

export function Eyebrow({ children, tone = 'default' }: { children: React.ReactNode; tone?: 'default' | 'light' }) {
  return (
    <p
      className={cn(
        'mb-4 text-xs font-semibold uppercase tracking-[0.14em]',
        tone === 'light' ? 'text-teal-light' : 'text-accent',
      )}
    >
      {children}
    </p>
  )
}

export function SectionHeader({
  id,
  eyebrow,
  title,
  intro,
  tone = 'default',
  align = 'left',
  className,
}: {
  id?: string
  eyebrow?: string
  title: string
  intro?: string
  tone?: 'default' | 'light'
  align?: 'left' | 'center'
  className?: string
}) {
  return (
    <div className={cn('max-w-2xl', align === 'center' && 'mx-auto text-center', className)}>
      {eyebrow && <Eyebrow tone={tone}>{eyebrow}</Eyebrow>}
      <h2 id={id} className="font-serif text-3xl font-medium leading-tight tracking-tight sm:text-4xl">
        {title}
      </h2>
      {intro && (
        <p
          className={cn(
            'mt-5 text-base leading-relaxed sm:text-lg',
            tone === 'light' ? 'text-navy-muted' : 'text-muted-foreground',
          )}
        >
          {intro}
        </p>
      )}
    </div>
  )
}
