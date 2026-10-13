/**
 * Guard: a production deployment must not silently ship enquiry forms that go nowhere.
 * Configure FORM_WEBHOOK_URL (see README > "Form integration"), or set
 * ALLOW_UNCONFIGURED_FORMS=true to deliberately launch with the "not enabled" notice.
 */
if (
  process.env.VERCEL_ENV === 'production' &&
  !process.env.FORM_WEBHOOK_URL &&
  process.env.ALLOW_UNCONFIGURED_FORMS !== 'true'
) {
  throw new Error(
    'FORM_WEBHOOK_URL is not set for the production deployment. Configure form delivery or set ALLOW_UNCONFIGURED_FORMS=true. See README.md.',
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
  async headers() {
    return [{ source: '/:path*', headers: securityHeaders }]
  },
}

export default nextConfig
