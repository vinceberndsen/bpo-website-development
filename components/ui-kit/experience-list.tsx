import { founderExperienceOrganisations } from '@/lib/config/company'
import type { Dictionary } from '@/lib/i18n/get-dictionary'
import { cn } from '@/lib/utils'

/**
 * Text-only list of organisations from the founder's prior experience.
 * The attribution note is always rendered with it so the list cannot read as a client roster.
 */
export function ExperienceList({
  dict,
  tone = 'default',
  className,
}: {
  dict: Dictionary
  tone?: 'default' | 'light'
  className?: string
}) {
  const light = tone === 'light'
  return (
    <figure className={cn('flex flex-col gap-5', className)}>
      <p className={cn('text-xs font-semibold uppercase tracking-[0.14em]', light ? 'text-teal-light' : 'text-accent')}>
        {dict.experience.listHeading}
      </p>
      <ul className="flex flex-wrap gap-x-6 gap-y-3">
        {founderExperienceOrganisations.map((org) => (
          <li key={org} className="font-serif text-xl font-medium sm:text-2xl">
            {org}
          </li>
        ))}
      </ul>
      <figcaption className={cn('max-w-2xl text-sm leading-relaxed', light ? 'text-navy-muted' : 'text-muted-foreground')}>
        {dict.experience.attribution}
      </figcaption>
    </figure>
  )
}
