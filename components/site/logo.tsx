import Link from 'next/link'
import { company } from '@/lib/config/company'
import { cn } from '@/lib/utils'

/** Text wordmark. Replace with a real logo file once available (see README). */
export function Logo({ href, tone = 'default' }: { href: string; tone?: 'default' | 'light' }) {
  return (
    <Link href={href} className="flex shrink-0 items-center gap-2.5">
      <span
        aria-hidden="true"
        className={cn(
          'flex size-8 items-center justify-center rounded-sm',
          tone === 'light' ? 'bg-primary-foreground' : 'bg-primary',
        )}
      >
        <span className={cn('h-3.5 w-1 rounded-full', tone === 'light' ? 'bg-accent' : 'bg-teal-light')} />
        <span className={cn('ml-0.5 h-2 w-1 rounded-full', tone === 'light' ? 'bg-primary/40' : 'bg-primary-foreground/60')} />
      </span>
      <span className={cn('font-serif text-lg font-semibold tracking-tight', tone === 'light' && 'text-primary-foreground')}>
        {company.name}
      </span>
    </Link>
  )
}
