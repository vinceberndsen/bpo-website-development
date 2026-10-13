'use client'

import Link from 'next/link'
import { useState } from 'react'
import { AlertCircle, CheckCircle2, Info } from 'lucide-react'
import type { Dictionary } from '@/lib/i18n/get-dictionary'
import { HONEYPOT_FIELD, STARTED_FIELD, type ErrorKey, type FormState } from '@/lib/forms/schema'
import { cn } from '@/lib/utils'

export type FormDict = Dictionary['forms']

const inputBase =
  'block w-full rounded-md border border-input bg-card px-3.5 py-2.5 text-base leading-relaxed text-foreground placeholder:text-muted-foreground/70 aria-[invalid=true]:border-destructive'

type FieldProps = {
  name: string
  label: string
  dict: FormDict
  state: FormState
  required?: boolean
  hint?: string
  type?: 'text' | 'email' | 'url'
  autoComplete?: string
  multiline?: boolean
  className?: string
}

function stringValue(state: FormState, name: string): string {
  const v = state.values[name]
  return typeof v === 'string' ? v : ''
}

function Label({ htmlFor, label, required, dict }: { htmlFor: string; label: string; required?: boolean; dict: FormDict }) {
  return (
    <label htmlFor={htmlFor} className="mb-1.5 flex flex-wrap items-baseline gap-x-2 text-sm font-semibold">
      {label}
      {required ? (
        <span className="text-xs font-normal text-accent">
          <span aria-hidden="true">*</span>
          <span className="sr-only">({dict.common.required})</span>
        </span>
      ) : (
        <span className="text-xs font-normal text-muted-foreground">({dict.common.optional})</span>
      )}
    </label>
  )
}

export function FieldError({ id, error, dict }: { id: string; error?: ErrorKey; dict: FormDict }) {
  if (!error) return null
  return (
    <p id={id} className="mt-1.5 flex items-center gap-1.5 text-sm text-destructive">
      <AlertCircle aria-hidden="true" className="size-4 shrink-0" />
      {dict.errors[error]}
    </p>
  )
}

export function TextField({ name, label, dict, state, required, hint, type = 'text', autoComplete, multiline, className }: FieldProps) {
  const id = `field-${name}`
  const error = state.errors[name]
  const describedBy = [hint && `${id}-hint`, error && `${id}-error`].filter(Boolean).join(' ') || undefined
  const shared = {
    id,
    name,
    required,
    defaultValue: stringValue(state, name),
    'aria-invalid': error ? true : undefined,
    'aria-describedby': describedBy,
    className: inputBase,
  }
  return (
    <div className={className}>
      <Label htmlFor={id} label={label} required={required} dict={dict} />
      {hint && (
        <p id={`${id}-hint`} className="mb-2 text-sm text-muted-foreground">
          {hint}
        </p>
      )}
      {multiline ? (
        <textarea {...shared} rows={5} className={cn(inputBase, 'resize-y')} />
      ) : (
        <input {...shared} type={type} autoComplete={autoComplete} />
      )}
      <FieldError id={`${id}-error`} error={error} dict={dict} />
    </div>
  )
}

export function ChoiceGroup({
  name,
  legend,
  options,
  type,
  dict,
  state,
  hint,
  required,
}: {
  name: string
  legend: string
  options: { value: string; label: string }[]
  type: 'checkbox' | 'radio'
  dict: FormDict
  state: FormState
  hint?: string
  required?: boolean
}) {
  const id = `field-${name}`
  const error = state.errors[name]
  const current = state.values[name]
  const selected = Array.isArray(current) ? current : typeof current === 'string' ? [current] : []
  return (
    <fieldset
      aria-invalid={error ? true : undefined}
      aria-describedby={[hint && `${id}-hint`, error && `${id}-error`].filter(Boolean).join(' ') || undefined}
    >
      <legend className="mb-1.5 flex flex-wrap items-baseline gap-x-2 text-sm font-semibold">
        {legend}
        {required && (
          <span className="text-xs font-normal text-accent">
            <span aria-hidden="true">*</span>
            <span className="sr-only">({dict.common.required})</span>
          </span>
        )}
      </legend>
      {hint && (
        <p id={`${id}-hint`} className="mb-2 text-sm text-muted-foreground">
          {hint}
        </p>
      )}
      <div className="grid gap-2 sm:grid-cols-2">
        {options.map((option) => (
          <label
            key={option.value}
            className="flex cursor-pointer items-center gap-3 rounded-md border border-input bg-card px-3.5 py-2.5 text-sm has-[:checked]:border-accent has-[:checked]:bg-accent/5 has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-ring"
          >
            <input
              type={type}
              name={name}
              value={option.value}
              defaultChecked={selected.includes(option.value)}
              className="size-4 accent-[var(--accent)]"
            />
            {option.label}
          </label>
        ))}
      </div>
      <FieldError id={`${id}-error`} error={error} dict={dict} />
    </fieldset>
  )
}

export function PrivacyCheckbox({ href, linkText, dict, state }: { href: string; linkText: string; dict: FormDict; state: FormState }) {
  const error = state.errors.privacy
  return (
    <div>
      <label className="flex gap-3 text-sm leading-relaxed">
        <input
          type="checkbox"
          name="privacy"
          required
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? 'field-privacy-error' : undefined}
          className="mt-1 size-4 shrink-0 accent-[var(--accent)]"
        />
        <span>
          {dict.common.privacyBefore}{' '}
          <Link href={href} className="font-semibold text-accent underline underline-offset-2" target="_blank">
            {linkText}
          </Link>{' '}
          {dict.common.privacyAfter}
        </span>
      </label>
      <FieldError id="field-privacy-error" error={error} dict={dict} />
    </div>
  )
}

/** Honeypot plus a render timestamp; both are checked server-side. */
export function AntiSpamFields({ dict, locale }: { dict: FormDict; locale: string }) {
  const [started] = useState(() => Date.now())
  return (
    <>
      <input type="hidden" name={STARTED_FIELD} value={started} />
      <input type="hidden" name="locale" value={locale} />
      <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label>
          {dict.common.honeypot}
          <input type="text" name={HONEYPOT_FIELD} tabIndex={-1} autoComplete="off" />
        </label>
      </div>
    </>
  )
}

export function NotConfiguredNotice({ dict }: { dict: FormDict }) {
  return (
    <div role="note" className="flex gap-3 rounded-lg border border-accent/40 bg-muted px-5 py-4 text-sm leading-relaxed">
      <Info aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-accent" />
      <div>
        <p className="font-semibold">{dict.common.notConfiguredTitle}</p>
        <p className="mt-1 text-muted-foreground">{dict.common.notConfiguredBody}</p>
      </div>
    </div>
  )
}

export function FormStatusMessage({ state, dict }: { state: FormState; dict: FormDict }) {
  const c = dict.common
  const content: Partial<Record<FormState['status'], { tone: 'ok' | 'info' | 'error'; title: string; body?: string }>> = {
    invalid: { tone: 'error', title: c.errorSummary },
    spam: { tone: 'error', title: c.spamBlocked },
    error: { tone: 'error', title: c.errorTitle, body: c.errorBody },
    'not-configured': { tone: 'info', title: c.notConfiguredTitle, body: c.notConfiguredResult },
    sent: { tone: 'ok', title: c.successTitle, body: c.successBody },
  }
  const message = content[state.status]
  return (
    <div aria-live="polite" role="status">
      {message && (
        <div
          className={cn(
            'flex gap-3 rounded-lg border px-5 py-4 text-sm leading-relaxed',
            message.tone === 'error' && 'border-destructive/40 bg-destructive/5',
            message.tone === 'info' && 'border-accent/40 bg-muted',
            message.tone === 'ok' && 'border-accent bg-accent/5',
          )}
        >
          {message.tone === 'ok' ? (
            <CheckCircle2 aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-accent" />
          ) : message.tone === 'info' ? (
            <Info aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-accent" />
          ) : (
            <AlertCircle aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-destructive" />
          )}
          <div>
            <p className="font-semibold">{message.title}</p>
            {message.body && <p className="mt-1 text-muted-foreground">{message.body}</p>}
          </div>
        </div>
      )}
    </div>
  )
}
