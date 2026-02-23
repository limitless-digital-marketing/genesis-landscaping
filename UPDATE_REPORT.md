# Update Report - Brads Plumbing & Gasfitting

**Global Theme (`src/index.css` + site CSS)**
- Updated the palette to match the logo blues, reds, and yellow accents across the site.
- Added a muted red CTA palette and applied it to primary buttons across the site.

**Home Page (`src/pages/HomePage.tsx`)**
- Changed hero badge text to "5-Star Reviews".
- Updated hero headline to "BRADS PLUMBING & GASFITTING DOMESTIC MAINTENANCE".
- Rewrote hero description to match domestic plumbing and gasfitting maintenance scope.
- Replaced logo image blocks with a single-line "BRADS" text logo.
- Rewrote About copy to describe Brads and removed social links block.
- Rebuilt the services grid to highlight Renovations, Drain Cleaning, Water Heaters (no solar), and Pipe & Leak Repairs with new descriptions and links.
- Added the Google logo to the review badge.

**Home Page Styles (`src/pages/HomePage.css`)**
- Added text-logo styles for the Brads lockup and scoped image logo styling to non-text logos.
- Ensured text logo uses Montserrat and consistent uppercase tracking.
- Set the review badge text to uppercase on mobile.

**Services Page (`src/pages/ServicesPage.tsx`)**
- Updated hero title to "Plumbing & Gasfitting Services".
- Rewrote hero subtitle to reflect domestic maintenance for all dwelling types.

**Service Detail Page (`src/pages/ServiceDetailPage.tsx`)**
- Replaced company name with "Brads Plumbing & Gasfitting" in the body copy.
- Removed the word "licensed" from the generic team paragraph.

**Service Area Page (`src/pages/ServiceAreaPage.tsx`)**
- Replaced Sydney Opera House hero image with `/Images/services.png`.
- Updated hero subtitle to remove Sydney/North Shore wording.
- Rewrote body copy to Brads branding and listed specific services provided.
- Added explicit "no solar hot water systems" note in the service description.

**Domestic Maintenance Page (`src/pages/EmergencyPlumbingPage.tsx`)**
- Repurposed the page from "Emergency Plumbing" to "Domestic Maintenance".
- Rewrote the hero subtitle and body to match Brads' maintenance, renovation, and repair scope.
- Added the "no solar hot water systems" note in the content.

**Quote Page (`src/pages/QuotePage.tsx`)**
- Replaced the logo image with a single-line "BRADS" text logo.

**Quote Page Styles (`src/pages/QuotePage.css`)**
- Adjusted text logo sizing for the quote page layout with the single-line wordmark.

**Blog Page (`src/pages/BlogPage.tsx`)**
- Updated hero subtitle to reference Brads Plumbing & Gasfitting.
- Rewrote all 9 blog posts to match Brad's services (renovations, maintenance, drains, taps, leaks, sewer blockages, bathroom repairs, hot water systems, outdoor/storm water).

**Blog Post Page (`src/pages/BlogPostPage.tsx`)**
- Updated fallback meta label to "Brads Plumbing & Gasfitting".

**Header (`src/components/Header.tsx`)**
- Replaced the image logo with a single-line "BRADS" text logo and updated aria label.

**Header Styles (`src/components/Header.css`)**
- Added styling for the Brads text logo in the header and simplified it for a single-line wordmark.
- Kept nav links and the header "Get Free Quote" button text white on hover.

**Footer (`src/components/Footer.tsx`)**
- Updated business name and tagline to Brads Plumbing & Gasfitting.
- Removed old email and social links.
- Updated copyright line.

**Reviews Section (`src/components/ReviewsSection.tsx`)**
- Rewrote review text to align to Brads.
- Replaced the external Google review CTA with a "Get Free Quote" link.
- Removed Google Review icon/source label from review cards.

**FAQ Section (`src/components/FAQSection.tsx`)**
- Replaced all FAQ items with Brads-specific service scope, hot water constraints, and quote instructions.

**Service Areas Section (`src/components/ServiceAreasSection.tsx`)**
- Updated section heading from "THESE AREAS" to "LOCAL AREAS".

**Services Data (`src/data/services.ts`)**
- Rebuilt the services list to match your provided scope (renovations, maintenance, drain cleaning, taps, outdoor plumbing, pipe/leak repairs, sewer blockages, shower repairs, toilets, water heaters, storm water).
- Added explicit "no solar HWS work" note in the water heater service copy.

**App Routing (`src/App.tsx`)**
- Removed the dedicated `/services/emergency-plumbing` route from the router.

**Site Metadata (`index.html`)**
- Updated the page title and meta description to Brads Plumbing & Gasfitting.

**Project Docs (`README.md`)**
- Updated the project name and description to Brads Plumbing & Gasfitting.

**Package Metadata (`package.json`, `package-lock.json`)**
- Renamed the package to `brads-plumbing`.
