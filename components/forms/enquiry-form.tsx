'use client'

import { useActionState } from 'react'
import { submitEnquiry } from '@/app/actions/forms'
import { initialFormState, languageOptionKeys, serviceOptionKeys, teamSizeKeys } from '@/lib/forms/schema'
import { buttonStyles } from '@/components/ui-kit/button-link'
import { cn } from '@/lib/utils'
import {
  AntiSpamFields,
  ChoiceGroup,
  FormStatusMessage,
  NotConfiguredNotice,
  PrivacyCheckbox,
  TextField,
  type FormDict,
} from './fields'

export function EnquiryForm({
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
  const [state, action, pending] = useActionState(submitEnquiry, initialFormState)
  const f = dict.enquiry.fields
  const common = { dict, state }

  return (
    <form action={action} noValidate className="relative flex flex-col gap-6" key={state.status === 'sent' ? 'sent' : 'form'}>
      {!configured && <NotConfiguredNotice dict={dict} />}
      <AntiSpamFields dict={dict} locale={locale} />

      <div className="grid gap-6 sm:grid-cols-2">
        <TextField name="name" label={f.name} required autoComplete="name" {...common} />
        <TextField name="email" label={f.workEmail} type="email" required autoComplete="email" {...common} />
        <TextField name="company" label={f.company} required autoComplete="organization" {...common} />
        <TextField name="website" label={f.website} type="url" autoComplete="url" {...common} />
      </div>

      <ChoiceGroup
        name="languages"
        legend={f.languages}
        hint={f.languagesHint}
        type="checkbox"
        required
        options={languageOptionKeys.map((k) => ({ value: k, label: dict.enquiry.languageOptions[k] }))}
        {...common}
      />
      <ChoiceGroup
        name="teamSize"
        legend={f.teamSize}
        type="radio"
        required
        options={teamSizeKeys.map((k) => ({ value: k, label: dict.enquiry.teamSizeOptions[k] }))}
        {...common}
      />
      <ChoiceGroup
        name="services"
        legend={f.services}
        type="checkbox"
        required
        options={serviceOptionKeys.map((k) => ({ value: k, label: dict.enquiry.serviceOptions[k] }))}
        {...common}
      />

      <div className="grid gap-6 sm:grid-cols-2">
        <TextField name="coverage" label={f.coverage} hint={f.coverageHint} {...common} />
        <TextField name="startDate" label={f.startDate} hint={f.startDateHint} {...common} />
      </div>
      <TextField name="message" label={f.message} hint={f.messageHint} required multiline {...common} />

      <div className="flex flex-col gap-4 border-t pt-6">
        <PrivacyCheckbox href={privacyHref} linkText={dict.common.privacyLinkText} {...common} />
        <label className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
          <input type="checkbox" name="marketing" className="mt-1 size-4 shrink-0 accent-[var(--accent)]" />
          <span>{f.marketing}</span>
        </label>
      </div>

      <FormStatusMessage state={state} dict={dict} />

      <button type="submit" disabled={pending} className={cn(buttonStyles.base, buttonStyles.primary, 'self-start px-6')}>
        {pending ? dict.common.submitting : dict.common.submit}
      </button>
    </form>
  )
}
