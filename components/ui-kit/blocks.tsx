import { Check, Minus } from 'lucide-react'
import { cn } from '@/lib/utils'

export function CheckList({
  items,
  tone = 'default',
  icon = 'check',
  className,
}: {
  items: string[]
  tone?: 'default' | 'light'
  icon?: 'check' | 'dash'
  className?: string
}) {
  const Icon = icon === 'check' ? Check : Minus
  return (
    <ul className={cn('flex flex-col gap-3', className)}>
      {items.map((item) => (
        <li key={item} className="flex gap-3 leading-relaxed">
          <Icon
            aria-hidden="true"
            className={cn('mt-1 size-4 shrink-0', tone === 'light' ? 'text-teal-light' : 'text-accent')}
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

export function FeatureGrid({
  items,
  columns = 3,
  numbered = false,
  tone = 'default',
}: {
  items: { title: string; body: string }[]
  columns?: 2 | 3 | 4
  numbered?: boolean
  tone?: 'default' | 'light'
}) {
  const cols = { 2: 'md:grid-cols-2', 3: 'md:grid-cols-2 lg:grid-cols-3', 4: 'md:grid-cols-2 lg:grid-cols-4' }[columns]
  return (
    <ul className={cn('grid gap-px overflow-hidden rounded-lg border', cols, tone === 'light' ? 'border-white/10 bg-white/10' : 'bg-border')}>
      {items.map((item, i) => (
        <li key={item.title} className={cn('flex flex-col gap-3 p-6 sm:p-8', tone === 'light' ? 'bg-primary' : 'bg-card')}>
          {numbered && (
            <span className={cn('font-serif text-sm', tone === 'light' ? 'text-teal-light' : 'text-accent')}>
              {String(i + 1).padStart(2, '0')}
            </span>
          )}
          <h3 className="text-lg font-semibold leading-snug">{item.title}</h3>
          <p className={cn('leading-relaxed', tone === 'light' ? 'text-navy-muted' : 'text-muted-foreground')}>{item.body}</p>
        </li>
      ))}
    </ul>
  )
}

export function ProcessSteps({
  steps,
  stepLabel,
}: {
  steps: { title: string; body: string }[]
  stepLabel: string
}) {
  return (
    <ol className="grid gap-6 md:grid-cols-2 lg:grid-cols-5 lg:gap-4">
      {steps.map((step, i) => (
        <li key={step.title} className="relative flex flex-col gap-3 border-t-2 border-primary/15 pt-5">
          <span
            aria-hidden="true"
            className="absolute -top-px left-0 h-0.5 w-10 bg-accent"
          />
          <span className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">
            {stepLabel} {i + 1}
          </span>
          <h3 className="text-lg font-semibold leading-snug">{step.title}</h3>
          <p className="text-sm leading-relaxed text-muted-foreground">{step.body}</p>
        </li>
      ))}
    </ol>
  )
}

export function Faq({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="divide-y rounded-lg border bg-card">
      {items.map((item) => (
        <details key={item.q} className="group px-5 sm:px-7">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-left font-semibold leading-snug [&::-webkit-details-marker]:hidden">
            <span>{item.q}</span>
            <span
              aria-hidden="true"
              className="relative size-4 shrink-0 before:absolute before:top-1/2 before:left-0 before:h-0.5 before:w-4 before:-translate-y-1/2 before:bg-accent after:absolute after:top-0 after:left-1/2 after:h-4 after:w-0.5 after:-translate-x-1/2 after:bg-accent after:transition-transform group-open:after:scale-y-0"
            />
          </summary>
          <p className="max-w-3xl pb-6 leading-relaxed text-muted-foreground">{item.a}</p>
        </details>
      ))}
    </div>
  )
}
