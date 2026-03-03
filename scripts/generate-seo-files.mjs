import { writeFileSync } from 'node:fs'
import { resolve } from 'node:path'

const routes = [
  '/',
  '/services',
  '/get-quote',
  '/blog',
  '/privacy-policy',
  '/services/new-build-landscaping',
  '/services/sod-installation',
  '/services/artificial-turf-installation',
  '/services/garden-design',
  '/services/garden-restorations',
  '/services/yard-clean-ups',
  '/services/garden-beds-edging',
  '/services/plant-supply-installation',
  '/services/feature-planting-clusters',
  '/services/mulching-soil-prep',
  '/services/residential-landscape-refreshes',
  '/services/commercial-landscape-fit-outs',
  '/services/landscape-maintenance-touch-ups',
  '/service-areas/casuarina',
  '/service-areas/kingscliff',
  '/service-areas/cudgen',
  '/service-areas/bogangar',
  '/service-areas/cabarita-beach',
  '/service-areas/pottsville',
  '/service-areas/hastings-point',
  '/service-areas/chinderah',
  '/service-areas/tweed-heads',
  '/service-areas/tweed-heads-south',
  '/service-areas/banora-point',
  '/service-areas/terranora',
  '/service-areas/fingal-head',
  '/service-areas/bilambil',
  '/service-areas/murwillumbah',
  '/service-areas/tweed-coast',
  '/blog/new-build-landscaping-handover-checklist',
  '/blog/sod-vs-artificial-turf-which-is-right',
  '/blog/garden-design-for-low-maintenance-yards',
  '/blog/garden-restoration-where-to-start',
  '/blog/yard-clean-up-before-sale-or-rent',
  '/blog/plant-selection-for-coastal-style-gardens'
]

const normalizeBaseUrl = (value) => {
  if (!value) {
    return 'https://localhost'
  }

  const withProtocol = /^https?:\/\//i.test(value) ? value : `https://${value}`
  return withProtocol.replace(/\/+$/, '')
}

const baseUrl = normalizeBaseUrl(
  process.env.SITE_URL || process.env.VERCEL_PROJECT_PRODUCTION_URL || process.env.VERCEL_URL
)

const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map((route) => `  <url><loc>${baseUrl}${route}</loc></url>`).join('\n')}
</urlset>
`

const robotsTxt = `User-agent: *
Allow: /

Sitemap: ${baseUrl}/sitemap.xml
`

writeFileSync(resolve('public', 'sitemap.xml'), sitemapXml, 'utf8')
writeFileSync(resolve('public', 'robots.txt'), robotsTxt, 'utf8')

console.log(`[seo] Generated sitemap.xml and robots.txt for ${baseUrl}`)
