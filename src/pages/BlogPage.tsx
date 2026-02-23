import { Link } from 'react-router-dom'
import ReviewsSection from '../components/ReviewsSection'
import ServiceAreasSection from '../components/ServiceAreasSection'
import CurvedCTASection from '../components/CurvedCTASection'
import './BlogPage.css'

export const posts = [
  {
    slug: 'renovation-plumbing-gasfitting',
    title: 'Renovation Plumbing & Gasfitting: Planning a Smooth Upgrade',
    date: 'January 30, 2026',
    excerpt:
      'What to plan for pipework, fixtures, and gas connections during bathroom, kitchen, and laundry renovations.',
    image:
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=1200',
    sections: [
      {
        heading: 'Introduction: Renovations Start With Good Planning',
        body:
          'Plumbing and gasfitting decisions made early can save time, cost, and rework later in a renovation. A clear plan helps coordinate trades and keeps the project moving.'
      },
      {
        heading: 'Scope of Plumbing Work in a Renovation',
        body:
          'Renovations often involve moving pipework, updating drainage, and installing new fixtures. Kitchens, bathrooms, and laundries each have unique requirements that should be mapped out before walls are closed.'
      },
      {
        heading: 'Gasfitting Considerations',
        body:
          'If you are updating appliances or adding a gas connection, safe and compliant gasfitting is essential. Proper sizing, ventilation, and appliance placement all affect performance and safety.'
      },
      {
        heading: 'Rough-In, Fit-Off, and Finish',
        body:
          'Most renovation plumbing is done in stages. Rough-in happens before linings go in, fit-off happens after tiling and cabinetry, and final adjustments ensure everything works as intended.'
      },
      {
        heading: 'Conclusion: A Renovation You Can Enjoy',
        body:
          'Good plumbing and gasfitting work helps your renovation look great and function reliably. Plan early and keep communication clear throughout the build.'
      }
    ]
  },
  {
    slug: 'domestic-plumbing-maintenance',
    title: 'Domestic Plumbing Maintenance: A Simple Checklist for Homeowners',
    date: 'January 22, 2026',
    excerpt:
      'Stay ahead of leaks, blockages, and wear with a practical maintenance routine for homes and units.',
    image:
      'https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=1200',
    sections: [
      {
        heading: 'Introduction: Maintenance Prevents Emergencies',
        body:
          'Small plumbing issues can become expensive if ignored. Regular checks help spot problems early and keep systems running efficiently.'
      },
      {
        heading: 'What to Check Around the Home',
        body:
          'Inspect taps for drips, showers for leaks, toilets for running cisterns, and outdoor taps for damp spots. Keep an eye on water pressure and listen for unusual pipe noises.'
      },
      {
        heading: 'Drains and Fixtures',
        body:
          'Slow drains or gurgling sounds are early signs of blockages. Clean strainers, avoid grease build-up, and address issues before they become full blockages.'
      },
      {
        heading: 'When to Call a Plumber',
        body:
          'If you notice leaks, sewer smells, or persistent drainage problems, it is best to book a professional inspection. Early fixes are usually faster and more affordable.'
      },
      {
        heading: 'Conclusion: Protect Your Property',
        body:
          'A simple maintenance routine keeps your plumbing reliable and reduces the risk of unexpected breakdowns.'
      }
    ]
  },
  {
    slug: 'drain-cleaning-blocked-drains',
    title: 'Drain Cleaning & Blocked Drains: Causes, Signs, and Fixes',
    date: 'January 15, 2026',
    excerpt:
      'Learn what causes blocked drains, how to spot them early, and why professional drain cleaning is worth it.',
    image:
      'https://images.unsplash.com/photo-1501183638710-841dd1904471?w=1200',
    sections: [
      {
        heading: 'Introduction: Blocked Drains Are Common',
        body:
          'Kitchen sinks, showers, and floor wastes are frequent sources of blockages. Knowing the early warning signs helps avoid overflows and damage.'
      },
      {
        heading: 'What Causes Drain Blockages',
        body:
          'Grease, soap build-up, hair, and foreign objects are the usual culprits indoors. Outdoors, tree roots and debris can block storm water and sewer lines.'
      },
      {
        heading: 'Signs Your Drain Needs Cleaning',
        body:
          'Slow drainage, gurgling noises, bad smells, or water backing up are all signs of a developing blockage.'
      },
      {
        heading: 'How Professionals Clear Drains',
        body:
          'A plumber will assess the issue, locate the blockage, and clear it safely using the right tools. Proper cleaning removes build-up instead of pushing it deeper.'
      },
      {
        heading: 'Conclusion: Keep Water Moving',
        body:
          'Regular drain cleaning keeps your plumbing healthy and reduces the chance of major repairs.'
      }
    ]
  },
  {
    slug: 'tap-repair-installation',
    title: 'Tap Repair & Installation: Fixing Leaks and Upgrading Fixtures',
    date: 'January 8, 2026',
    excerpt:
      'From dripping taps to new mixers, learn when to repair and when to upgrade.',
    image:
      'https://images.unsplash.com/photo-1502005097973-6a7082348e28?w=1200',
    sections: [
      {
        heading: 'Introduction: Small Leaks Add Up',
        body:
          'A dripping tap wastes water and can damage cabinetry over time. Quick repairs can prevent bigger issues.'
      },
      {
        heading: 'Common Tap Problems',
        body:
          'Worn washers, damaged cartridges, and loose fittings are common causes of leaks and low pressure.'
      },
      {
        heading: 'When to Repair vs Replace',
        body:
          'If a tap is old or corroded, replacement can be more cost effective. New mixers also improve usability and water efficiency.'
      },
      {
        heading: 'Professional Installation',
        body:
          'Correct installation ensures taps seal properly, align with fixtures, and meet water pressure requirements.'
      },
      {
        heading: 'Conclusion: Get the Right Result',
        body:
          'Whether repairing or installing, professional workmanship keeps taps working smoothly for years.'
      }
    ]
  },
  {
    slug: 'pipe-leak-repairs',
    title: 'Pipe & Leak Repairs: Stop Water Damage Early',
    date: 'December 18, 2025',
    excerpt:
      'Leaking pipes can cause major damage quickly. Here is how repairs work and what to watch for.',
    image:
      'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?w=1200',
    sections: [
      {
        heading: 'Introduction: Leaks Should Never Be Ignored',
        body:
          'Even a small leak can damage walls, floors, and cabinetry. Early repairs reduce costs and inconvenience.'
      },
      {
        heading: 'Common Leak Indicators',
        body:
          'Water stains, musty smells, low pressure, and unexplained high bills are often signs of hidden leaks.'
      },
      {
        heading: 'How Leak Repairs Are Done',
        body:
          'A plumber locates the source, isolates the affected section, and repairs or replaces damaged pipework.'
      },
      {
        heading: 'Preventing Future Leaks',
        body:
          'Quality materials and correct installation reduce the risk of repeat failures. Regular checks also help catch problems early.'
      },
      {
        heading: 'Conclusion: Protect Your Home',
        body:
          'Fast, professional leak repairs keep your property safe and your plumbing reliable.'
      }
    ]
  },
  {
    slug: 'sewer-blockages-repairs',
    title: 'Sewer Blockages & Repairs: Keep Your System Flowing',
    date: 'December 10, 2025',
    excerpt:
      'Understand the warning signs of sewer issues and why professional repairs matter.',
    image:
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200',
    sections: [
      {
        heading: 'Introduction: Sewer Problems Need Fast Attention',
        body:
          'Sewer blockages can cause overflows, bad odours, and property damage. Early action helps avoid larger repairs.'
      },
      {
        heading: 'Common Causes of Sewer Blockages',
        body:
          'Tree roots, grease build-up, foreign objects, and collapsed pipes are typical causes of sewer issues.'
      },
      {
        heading: 'How Sewer Repairs Work',
        body:
          'A plumber will locate the blockage, clear the line, and repair any damaged pipe sections to restore flow.'
      },
      {
        heading: 'Signs You Might Have a Sewer Issue',
        body:
          'Gurgling drains, multiple fixtures backing up, and persistent odours are all warning signs.'
      },
      {
        heading: 'Conclusion: Restore Flow and Safety',
        body:
          'Professional sewer repairs keep your system safe, reliable, and compliant.'
      }
    ]
  },
  {
    slug: 'bathroom-plumbing-repairs',
    title: 'Bathroom Plumbing Repairs: Showers and Toilets',
    date: 'December 3, 2025',
    excerpt:
      'From leaky showers to faulty toilets, here is how bathroom plumbing issues are fixed.',
    image:
      'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200',
    sections: [
      {
        heading: 'Introduction: Bathroom Issues Disrupt Daily Life',
        body:
          'Showers and toilets are used every day, so any fault can quickly become a major inconvenience.'
      },
      {
        heading: 'Common Shower Problems',
        body:
          'Leaks, low pressure, temperature issues, and worn fittings are common. A plumber can repair mixers, heads, and seals to restore performance.'
      },
      {
        heading: 'Common Toilet Problems',
        body:
          'Running cisterns, weak flushes, and blockages are typical issues. Repairs often involve replacing internal components or seals.'
      },
      {
        heading: 'When to Replace',
        body:
          'Older fixtures may be better replaced to improve efficiency and reliability. New installations can also modernise your bathroom.'
      },
      {
        heading: 'Conclusion: Keep Your Bathroom Working',
        body:
          'Professional repairs and installations keep showers and toilets reliable and water efficient.'
      }
    ]
  },
  {
    slug: 'hot-water-systems-electric-gas-heat-pump',
    title: 'Hot Water Systems: Electric, Gas, and Heat Pump Repairs',
    date: 'November 26, 2025',
    excerpt:
      'What causes hot water failures and how repairs or replacements are handled.',
    image:
      'https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=1200',
    sections: [
      {
        heading: 'Introduction: Reliable Hot Water Matters',
        body:
          'Hot water issues affect comfort and daily routines. Quick diagnosis keeps disruption to a minimum.'
      },
      {
        heading: 'Common Hot Water Problems',
        body:
          'No hot water, temperature fluctuations, leaks, and unusual noises are common issues across electric, gas, and heat pump systems.'
      },
      {
        heading: 'Repair or Replace?',
        body:
          'Older systems or repeated faults may need replacement. For newer systems, targeted repairs can restore performance.'
      },
      {
        heading: 'System Types We Service',
        body:
          'We install and repair electric, gas, and heat pump hot water systems.'
      },
      {
        heading: 'Conclusion: Get Hot Water Back Fast',
        body:
          'Professional hot water service keeps your system safe, efficient, and reliable.'
      }
    ]
  },
  {
    slug: 'outdoor-plumbing-storm-water',
    title: 'Outdoor Plumbing & Storm Water Repairs: Protect Your Property',
    date: 'November 18, 2025',
    excerpt:
      'Outdoor taps and storm water drains need attention too. Here is how repairs prevent water damage.',
    image:
      'https://images.unsplash.com/photo-1493666438817-866a91353ca9?w=1200',
    sections: [
      {
        heading: 'Introduction: Outdoor Plumbing Matters',
        body:
          'Outdoor taps, pipework, and storm water lines protect your property during heavy rain and daily use.'
      },
      {
        heading: 'Common Outdoor Plumbing Issues',
        body:
          'Leaking garden taps, damaged pipework, and cracked fittings can waste water and cause soil erosion.'
      },
      {
        heading: 'Storm Water Repairs and Installations',
        body:
          'Blocked or damaged storm water lines can lead to pooling and property damage. Repairs restore flow and improve drainage.'
      },
      {
        heading: 'Preventative Tips',
        body:
          'Keep drains clear of debris, check for pooling after storms, and repair leaks early.'
      },
      {
        heading: 'Conclusion: Keep Water Moving Away',
        body:
          'Reliable outdoor plumbing and storm water systems help protect your home and landscaping.'
      }
    ]
  }
]

const BlogPage = () => {
  return (
    <div className="blog-page">
      <section className="blog-hero">
        <div className="container blog-hero-container">
          <div className="blog-hero-tag">Blog</div>
          <h1 className="blog-hero-title">Plumbing Tips & Updates</h1>
          <p className="blog-hero-subtitle">
            Practical advice from the McKay’s Plumbing and Gasfitting team to help homes stay safe, efficient, and leak
            free.
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
