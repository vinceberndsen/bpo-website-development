/**
 * Guard: a production deployment must not silently ship enquiry forms that go nowhere.
 * Delivery works via Resend (RESEND_API_KEY) or a webhook (FORM_WEBHOOK_URL).
 * Set ALLOW_UNCONFIGURED_FORMS=true to deliberately launch with the "not enabled" notice.
 */
const hasFormDelivery = Boolean(process.env.RESEND_API_KEY || process.env.FORM_WEBHOOK_URL)

if (
  process.env.VERCEL_ENV === 'production' &&
  !hasFormDelivery &&
  process.env.ALLOW_UNCONFIGURED_FORMS !== 'true'
) {
  throw new Error(
    'No form delivery is configured for the production deployment. Set RESEND_API_KEY (Resend integration) or FORM_WEBHOOK_URL, or set ALLOW_UNCONFIGURED_FORMS=true. See README.md.',
  )
}

const securityHeaders = [
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Strict-Transport-Security', value: 'max-age=63072000' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
]

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  async redirects() {
    return [
      {
        source: '/:locale/services/dedicated-customer-care',
        destination: '/:locale/services/customer-care-back-office',
        permanent: true,
      },
      {
        source: '/:locale/services/customer-operations',
        destination: '/:locale/services/customer-care-back-office',
        permanent: true,
      },
    ]
  },
  async headers() {
    return [{ source: '/:path*', headers: securityHeaders }]
  },
}

export default nextConfig
