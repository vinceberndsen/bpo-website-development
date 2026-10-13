import Link from 'next/link'
import { company } from '@/lib/config/company'
import { cn } from '@/lib/utils'

/** The "R" monogram. Same geometry as public/icon.svg so favicon and header match. */
export function Monogram({ tone = 'default', className }: { tone?: 'default' | 'light'; className?: string }) {
  const light = tone === 'light'
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" className={cn('size-8 shrink-0', className)}>
      <rect width="32" height="32" rx="4" className={light ? 'fill-primary-foreground' : 'fill-primary'} />
      <path
        d="M11 25V7.5h6a5 5 0 0 1 0 10h-6"
        fill="none"
        strokeWidth="2.6"
        strokeLinejoin="miter"
        className={light ? 'stroke-primary' : 'stroke-primary-foreground'}
      />
      <path d="M16.5 17.5 22.5 25" fill="none" strokeWidth="2.6" className={light ? 'stroke-accent' : 'stroke-teal-light'} />
    </svg>
  )
}

export function Logo({ href, tone = 'default' }: { href: string; tone?: 'default' | 'light' }) {
  return (
    <Link href={href} className="flex shrink-0 items-center gap-2.5 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4">
      <Monogram tone={tone} />
      <span
        className={cn(
          'font-serif text-xl font-semibold tracking-tight',
          tone === 'light' ? 'text-primary-foreground' : 'text-primary',
        )}
      >
        {company.name}
      </span>
    </Link>
  )
}
