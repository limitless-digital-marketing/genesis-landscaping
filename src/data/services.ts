export type ServiceEntry = {
  name: string
  slug: string
  heroSubtitle: string
  heroImage?: string
  content: string
}

export const services: ServiceEntry[] = [
  {
    name: 'Renovations',
    slug: 'renovations',
    heroSubtitle:
      'Plumbing and gasfitting upgrades for bathroom, kitchen, and laundry renovations.',
    heroImage: '/Images/services.png',
    content:
      'We coordinate pipework changes, fixture installations, and appliance connections to keep your renovation running smoothly.'
  },
  {
    name: 'General Maintenance',
    slug: 'general-maintenance',
    heroSubtitle:
      'Domestic plumbing maintenance for all types of dwellings, from small fixes to preventative care.',
    content:
      'Routine maintenance keeps your plumbing reliable. We handle inspections, adjustments, and minor repairs across taps, toilets, showers, and pipework.'
  },
  {
    name: 'Drain Cleaning',
    slug: 'drain-cleaning',
    heroSubtitle:
      'Clear slow drains and stubborn blockages with safe, effective cleaning.',
    heroImage: '/Images/blocked-drains.png',
    content:
      'We remove build-up from sinks, showers, and floor wastes to restore flow and reduce future clogs.'
  },
  {
    name: 'Tap Repair & Installation',
    slug: 'tap-repair-installation',
    heroSubtitle:
      'Repair leaks or install new taps and mixers for kitchens, bathrooms, and laundries.',
    content:
      'From dripping taps to full fixture upgrades, we supply and fit quality hardware and make sure everything seals and operates correctly.'
  },
  {
    name: 'Outdoor Plumbing Repairs',
    slug: 'outdoor-plumbing-repairs',
    heroSubtitle:
      'Repairs for garden taps, outdoor pipework, and exposed plumbing.',
    content:
      'We fix leaks, replace damaged sections, and ensure outdoor lines are protected and flowing properly.'
  },
  {
    name: 'Pipe & Leak Repairs',
    slug: 'pipe-leak-repairs',
    heroSubtitle:
      'Fast diagnosis and repair of leaking or damaged pipes.',
    heroImage: '/Images/leak-detection.png',
    content:
      'We locate the source of leaks and repair or replace affected pipework to prevent further damage.'
  },
  {
    name: 'Sewer Blockages & Repairs',
    slug: 'sewer-blockages',
    heroSubtitle:
      'Clear sewer blockages and repair damaged lines to restore flow.',
    content:
      'We identify blockages and complete repairs to keep your sewer system operating safely and reliably.'
  },
  {
    name: 'Shower Repair',
    slug: 'shower-repair',
    heroSubtitle:
      'Fix leaks, pressure issues, and faulty shower fittings.',
    content:
      'We repair mixers, shower heads, seals, and pipework to get your shower running properly again.'
  },
  {
    name: 'Toilet Installation & Repairs',
    slug: 'toilet-installation-repairs',
    heroSubtitle:
      'Install new toilets or repair leaks, blockages, and running cisterns.',
    content:
      'We handle supply, installation, and repairs for toilets to keep your bathroom reliable and efficient.'
  },
  {
    name: 'Gasfitting (Natural Gas & LPG)',
    slug: 'gasfitting-natural-gas-lpg',
    heroSubtitle:
      'Natural gas and LPG gasfitting across all service areas, including piping, bottle connections, cooktops, and hot water systems.',
    content:
      'We provide compliant gasfitting for natural gas and LPG systems, including new installations, replacements, and repairs for pipes, bottles, cooktops, and hot water services.'
  },
  {
    name: 'Water Filters',
    slug: 'water-filters',
    heroSubtitle:
      'Water filter installation, replacements, and maintenance for cleaner, better-tasting water.',
    content:
      'We install and service household water filtration systems, including under-sink and point-of-entry options, to improve water quality and day-to-day reliability.'
  },
  {
    name: 'Septic Tanks',
    slug: 'septic-tanks',
    heroSubtitle:
      'Septic tank plumbing support, including pipework, repairs, and system maintenance.',
    content:
      'We handle septic-related plumbing work, including tank connections, pipe repairs, and maintenance to help keep your wastewater system operating safely and efficiently.'
  },
  {
    name: 'Water Heaters (Electric, Gas & Heat Pump)',
    slug: 'water-heaters',
    heroSubtitle:
      'Installation and repairs for electric, gas, and heat pump hot water systems.',
    heroImage: '/Images/water-heaters.png',
    content:
      'We install and repair electric, gas, and heat pump hot water systems to restore reliable hot water.'
  },
  {
    name: 'Storm Water Repair & Installation',
    slug: 'storm-water',
    heroSubtitle:
      'Storm water repair and installation to keep runoff controlled.',
    content:
      'We repair and install storm water lines and drainage to protect your property during heavy rain.'
  }
]
