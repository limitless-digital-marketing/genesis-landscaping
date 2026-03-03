import { Link } from 'react-router-dom'
import ReviewsSection from '../components/ReviewsSection'
import ServiceAreasSection from '../components/ServiceAreasSection'
import CurvedCTASection from '../components/CurvedCTASection'
import PageSeo from '../components/PageSeo'
import './BlogPage.css'

export const posts = [
  {
    slug: 'new-build-landscaping-handover-checklist',
    title: 'New Build Landscaping: A Practical Handover Checklist',
    date: 'February 12, 2026',
    excerpt:
      'A simple checklist to plan turf, garden beds, planting, and presentation work before handover.',
    image:
      'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=1200',
    sections: [
      {
        heading: 'Start With The Final Look In Mind',
        body:
          'New build landscaping runs smoother when the end result is planned before installation starts. Mapping out lawn areas, garden beds, and plant zones helps avoid rushed decisions.'
      },
      {
        heading: 'Prioritise Ground Preparation',
        body:
          'Good preparation makes a big difference to the final finish and how well the landscape establishes. Levelling, cleaning, and soil preparation should be done before turf or planting is installed.'
      },
      {
        heading: 'Sequence Turf, Beds, and Planting',
        body:
          'A clean sequence keeps the site tidy and reduces rework. Garden bed shaping and edging usually come before final turf placement, with plants installed once key layout elements are set.'
      },
      {
        heading: 'Plan For Presentation',
        body:
          'Handover-ready landscaping should look neat and complete. Yard clean-up, mulch, edging details, and plant spacing all help the property present well on day one.'
      },
      {
        heading: 'Work With A Clear Scope',
        body:
          'A clear scope and timeline keeps the project moving. Confirm inclusions early so everyone knows what will be completed before handover.'
      }
    ]
  },
  {
    slug: 'sod-vs-artificial-turf-which-is-right',
    title: 'Sod vs Artificial Turf: Which Option Suits Your Yard?',
    date: 'February 5, 2026',
    excerpt:
      'Compare look, maintenance, installation, and long-term use when choosing natural turf or synthetic grass.',
    image:
      'https://images.unsplash.com/photo-1466692052106-e5cf528f34ce?w=1200',
    sections: [
      {
        heading: 'Natural Look vs Low Maintenance',
        body:
          'Sod offers a natural lawn feel and can look great when maintained well. Artificial turf reduces mowing and regular upkeep, which can suit busy households and investment properties.'
      },
      {
        heading: 'Installation Matters For Both',
        body:
          'Whether you choose sod or synthetic grass, base preparation is key. A flat, stable, well-prepared surface helps the lawn look better and last longer.'
      },
      {
        heading: 'How The Space Is Used',
        body:
          'The best option often depends on how the space is used. High-use zones, narrow side yards, and feature areas may benefit from artificial turf, while larger lawns may suit natural turf.'
      },
      {
        heading: 'Budget and Ongoing Care',
        body:
          'Sod and artificial turf have different upfront and ongoing costs. Comparing installation budget, maintenance time, and the desired look can help narrow the choice.'
      },
      {
        heading: 'Get Advice Before You Commit',
        body:
          'If you are unsure, a site inspection can help confirm what will work best for your yard layout and maintenance goals.'
      }
    ]
  },
  {
    slug: 'garden-design-for-low-maintenance-yards',
    title: 'Garden Design Ideas for a Clean, Low-Maintenance Yard',
    date: 'January 29, 2026',
    excerpt:
      'Smart layout choices can make your outdoor space look fresh without becoming high maintenance.',
    image:
      'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=1200',
    sections: [
      {
        heading: 'Start With Zones',
        body:
          'Dividing the yard into lawn, planting, and access zones creates a cleaner layout. This makes the space easier to use and easier to maintain over time.'
      },
      {
        heading: 'Use Defined Garden Beds',
        body:
          'Well-shaped garden beds and clear edging give the yard structure. They also make mowing lines cleaner and reduce the spread of grass into planting areas.'
      },
      {
        heading: 'Choose Plant Groupings Carefully',
        body:
          'Planting in clusters with similar care needs helps the garden stay balanced and easier to manage. It also creates a stronger visual result than scattered planting.'
      },
      {
        heading: 'Mulch For Presentation and Practicality',
        body:
          'Mulch improves presentation while helping with weed control and moisture retention. It is a simple finishing step that lifts the look of a fresh garden install.'
      },
      {
        heading: 'Keep It Cohesive',
        body:
          'A clean landscaping result usually comes from consistent materials, spacing, and bed lines. Simple, consistent choices often look the best.'
      }
    ]
  },
  {
    slug: 'garden-restoration-where-to-start',
    title: 'Garden Restoration: Where to Start With an Overgrown Yard',
    date: 'January 21, 2026',
    excerpt:
      'A step-by-step approach to restoring tired garden areas without wasting time or budget.',
    image:
      'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=1200',
    sections: [
      {
        heading: 'Clear and Assess First',
        body:
          'The first step in a restoration is clearing the site so the layout is visible again. Once the area is clean, it is easier to decide what can stay and what should be replaced.'
      },
      {
        heading: 'Rebuild The Structure',
        body:
          'Restoration work usually starts with the main shapes of the yard, such as beds, edges, and lawn zones. Re-establishing structure creates the foundation for the final result.'
      },
      {
        heading: 'Refresh Planting and Turf',
        body:
          'New plants and fresh turf can quickly lift the look of a restored garden. The key is matching the planting layout to the space and how you want to use it.'
      },
      {
        heading: 'Finish With Clean Details',
        body:
          'A tidy finish makes a restoration look complete. Mulch, edging clean-up, and waste removal all improve the final presentation.'
      },
      {
        heading: 'Plan For Ongoing Upkeep',
        body:
          'Even simple maintenance planning can help a restored yard stay looking good longer. Small touch-ups are easier than another full reset later.'
      }
    ]
  },
  {
    slug: 'yard-clean-up-before-sale-or-rent',
    title: 'Yard Clean Up Before Sale or Rent: Fast Wins That Improve Presentation',
    date: 'January 14, 2026',
    excerpt:
      'Quick landscaping improvements can dramatically improve curb appeal before listing a property.',
    image:
      'https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?w=1200',
    sections: [
      {
        heading: 'Presentation Starts at the Street',
        body:
          'First impressions are shaped before anyone steps inside. A clean front yard, trimmed beds, and tidy lawn can improve how the whole property feels.'
      },
      {
        heading: 'Remove Clutter and Green Waste',
        body:
          'Clearing debris, overgrowth, and unused materials immediately improves the space. It also makes the yard look larger and easier to maintain.'
      },
      {
        heading: 'Refresh Lawn and Garden Beds',
        body:
          'Spot repairs, fresh turf, new mulch, and simple planting upgrades can make a big visual impact without a full redesign.'
      },
      {
        heading: 'Focus on Entry Areas',
        body:
          'Pathways, front entries, and visible corners are high-impact zones. Cleaning these areas up first often gives the best return on effort.'
      },
      {
        heading: 'Keep the Scope Practical',
        body:
          'For pre-sale and pre-rent work, practical improvements usually matter more than overbuilding. Aim for clean, tidy, and move-in ready.'
      }
    ]
  },
  {
    slug: 'plant-selection-for-coastal-style-gardens',
    title: 'Plant Selection Tips for Coastal-Style Gardens',
    date: 'January 7, 2026',
    excerpt:
      'Planning planting layouts with local conditions in mind helps your garden look better and establish well.',
    image:
      'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=1200',
    sections: [
      {
        heading: 'Design For the Site Conditions',
        body:
          'Every property is different, so planting plans should consider sun, shade, wind exposure, and how the space is used. This helps the layout stay practical as well as attractive.'
      },
      {
        heading: 'Use Layering and Clusters',
        body:
          'Grouping plants by height and texture creates depth and a cleaner visual finish. Plant clusters can also make garden beds feel more intentional and less patchy.'
      },
      {
        heading: 'Balance Statement and Structure',
        body:
          'A strong garden design usually mixes feature planting with reliable structural planting. This creates interest while keeping the space cohesive.'
      },
      {
        heading: 'Allow Room for Growth',
        body:
          'Spacing matters. Proper placement helps plants establish, reduces overcrowding, and keeps the garden easier to maintain long term.'
      },
      {
        heading: 'Install With a Tidy Finish',
        body:
          'Even a great planting plan needs a clean install. Bed edges, mulch, and final tidy-up work all contribute to a professional result.'
      }
    ]
  }
]

const BlogPage = () => {
  return (
    <div className="blog-page">
      <PageSeo
        title="Landscaping Blog | Genesis Landscaping"
        description="Read practical landscaping tips from Genesis Landscaping on new build handovers, turf, planting, garden design, restorations, and outdoor presentation."
      />

      <section className="blog-hero">
        <div className="container blog-hero-container">
          <div className="blog-hero-tag">Blog</div>
          <h1 className="blog-hero-title">Landscaping Tips &amp; Project Ideas</h1>
          <p className="blog-hero-subtitle">
            Practical advice from Genesis Landscaping on turf, garden design, restorations, and getting outdoor spaces
            looking clean and finished.
          </p>
          <a
            className="blog-hero-cta"
            href="#blog-listing"
            onClick={(event) => {
              event.preventDefault()
              document.getElementById('blog-listing')?.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
              })
            }}
          >
            <span>Read Blogs</span>
            <span className="blog-hero-cta-arrow" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="24" height="24">
                <path d="M12 4v14m0 0l-6-6m6 6l6-6" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </a>
        </div>
      </section>

      <section className="blog-listing" id="blog-listing">
        <div className="container blog-listing-container">
          <div className="blog-listing-header">
            <div className="blog-listing-heading-row">
              <h2 className="blog-listing-title">Latest Articles</h2>
              <span className="blog-listing-midline" aria-hidden="true"></span>
            </div>
          </div>

          <div className="blog-grid">
            {posts.map((post) => (
              <article key={post.slug} className="blog-card">
                <div className="blog-card-body">
                  <span className="blog-card-date">{post.date}</span>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <Link className="blog-card-link" to={`/blog/${post.slug}`}>
                    Read More
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ReviewsSection />
      <ServiceAreasSection />
      <CurvedCTASection />
    </div>
  )
}

export default BlogPage
