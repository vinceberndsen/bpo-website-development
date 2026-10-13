import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

export const buttonStyles = {
  base: 'inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-3 disabled:pointer-events-none disabled:opacity-60',
  primary: 'bg-primary text-primary-foreground hover:bg-primary/90',
  accent: 'bg-accent text-accent-foreground hover:bg-accent/90',
  outline: 'border border-primary/25 bg-transparent text-primary hover:border-primary/50 hover:bg-primary/5',
  light: 'bg-primary-foreground text-primary hover:bg-white',
  outlineLight: 'border border-primary-foreground/35 text-primary-foreground hover:bg-primary-foreground/10',
} as const

type Variant = Exclude<keyof typeof buttonStyles, 'base'>

export function ButtonLink({
  href,
  children,
  variant = 'primary',
  withArrow = false,
  className,
}: {
  href: string
  children: React.ReactNode
  variant?: Variant
  withArrow?: boolean
  className?: string
}) {
  return (
    <Link href={href} className={cn(buttonStyles.base, buttonStyles[variant], className)}>
      {children}
      {withArrow && <ArrowRight aria-hidden="true" className="size-4" />}
    </Link>
  )
}

export function TextLink({
  href,
  children,
  className,
  tone = 'default',
}: {
  href: string
  children: React.ReactNode
  className?: string
  tone?: 'default' | 'light'
}) {
  return (
    <Link
      href={href}
      className={cn(
        'group inline-flex items-center gap-1.5 text-sm font-semibold underline-offset-4 hover:underline',
        tone === 'light' ? 'text-teal-light' : 'text-accent',
        className,
      )}
    >
      {children}
      <ArrowRight aria-hidden="true" className="size-4 transition-transform group-hover:translate-x-0.5" />
    </Link>
  )
}
