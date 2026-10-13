'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

export type NavItem = { href: string; label: string }

export function useIsActive() {
  const pathname = usePathname() ?? ''
  return (href: string) => pathname === href || pathname.startsWith(`${href}/`)
}

export function DesktopNavLinks({ items }: { items: NavItem[] }) {
  const isActive = useIsActive()
  return (
    <ul className="flex items-center gap-1">
      {items.map((item) => {
        const active = isActive(item.href)
        return (
          <li key={item.href}>
            <Link
              href={item.href}
              aria-current={active ? 'page' : undefined}
              className={cn(
                'rounded-md px-3 py-2 text-sm font-medium transition-colors hover:text-primary',
                active ? 'text-primary underline decoration-accent decoration-2 underline-offset-8' : 'text-foreground/75',
              )}
            >
              {item.label}
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
