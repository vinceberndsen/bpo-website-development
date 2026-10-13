'use client'

import { useActionState } from 'react'
import { submitInterest } from '@/app/actions/forms'
import { initialFormState } from '@/lib/forms/schema'
import { buttonStyles } from '@/components/ui-kit/button-link'
import { cn } from '@/lib/utils'
import { AntiSpamFields, FormStatusMessage, NotConfiguredNotice, PrivacyCheckbox, TextField, type FormDict } from './fields'

export function InterestForm({
  dict,
  locale,
  privacyHref,
  configured,
}: {
  dict: FormDict
  locale: string
  privacyHref: string
  configured: boolean
}) {
  const [state, action, pending] = useActionState(submitInterest, initialFormState)
  const f = dict.candidate.fields
  const common = { dict, state }

  return (
    <form action={action} noValidate className="relative flex flex-col gap-6" key={state.status === 'sent' ? 'sent' : 'form'}>
      {!configured && <NotConfiguredNotice dict={dict} />}
      <AntiSpamFields dict={dict} locale={locale} />

      <div className="grid gap-6 sm:grid-cols-2">
        <TextField name="fullName" label={f.fullName} required autoComplete="name" {...common} />
        <TextField name="email" label={f.email} type="email" required autoComplete="email" {...common} />
        <TextField name="country" label={f.country} required autoComplete="country-name" {...common} />
        <TextField name="profileUrl" label={f.profileUrl} type="url" autoComplete="url" {...common} />
      </div>
      <TextField name="languages" label={f.languages} hint={f.languagesHint} required multiline {...common} />
      <TextField name="experience" label={f.experience} hint={f.experienceHint} required multiline {...common} />
      <TextField name="message" label={f.message} multiline {...common} />

      <div className="border-t pt-6">
        <PrivacyCheckbox href={privacyHref} linkText={dict.common.recruitmentPrivacyLinkText} {...common} />
      </div>

      <FormStatusMessage state={state} dict={dict} />

      <button type="submit" disabled={pending} className={cn(buttonStyles.base, buttonStyles.primary, 'self-start px-6')}>
        {pending ? dict.common.submitting : dict.common.submitInterest}
      </button>
    </form>
  )
}
