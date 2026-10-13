import { ButtonLink } from './button-link'

export function CtaBand({
  title,
  body,
  primary,
  secondary,
}: {
  title: string
  body: string
  primary: { href: string; label: string }
  secondary?: { href: string; label: string }
}) {
  return (
    <section aria-labelledby="cta-title" className="bg-primary text-primary-foreground">
      <div className="container-page flex flex-col gap-8 py-16 sm:py-20 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl">
          <h2 id="cta-title" className="font-serif text-3xl font-medium leading-tight tracking-tight sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-navy-muted">{body}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <ButtonLink href={primary.href} variant="light" withArrow>
            {primary.label}
          </ButtonLink>
          {secondary && (
            <ButtonLink href={secondary.href} variant="outlineLight">
              {secondary.label}
            </ButtonLink>
          )}
        </div>
      </div>
    </section>
  )
}
