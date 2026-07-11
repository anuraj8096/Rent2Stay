// All site data lives here — no backend, no API. Filtering is plain array work.

export const areas = [
  {
    slug: 'electronic-city',
    name: 'Electronic City',
    blurb: 'Walk-to-work homes around the tech parks, from tidy studios to family 2 BHKs.',
  },
  {
    slug: 'bommanahalli',
    name: 'Bommanahalli',
    blurb: 'Central and well-connected off Hosur Road — the easy commute in every direction.',
  },
  {
    slug: 'begur',
    name: 'Begur',
    blurb: 'Quieter, greener, lake-side living with rents that still leave room to breathe.',
  },
  {
    slug: 'hsr-layout',
    name: 'HSR Layout',
    blurb: 'Cafés, parks and sectors — the polished side of south Bangalore renting.',
  },
]

// image uses picsum seeds so every card renders a real photo, never a broken icon.
const img = (id) => `https://picsum.photos/seed/${id}/800/600`

export const properties = [
  // ── Electronic City ───────────────────────────────────────────────
  {
    id: 'ec-101',
    areaSlug: 'electronic-city',
    title: 'Sunrise Residency',
    bhk: 1,
    rent: 12500,
    address: 'Neeladri Road, Electronic City Phase 1',
    amenities: ['Parking', 'Power Backup', 'Lift', 'Water Supply'],
    image: img('ec-101'),
  },
  {
    id: 'ec-102',
    areaSlug: 'electronic-city',
    title: 'Wipro Lane Studio',
    bhk: 1,
    rent: 11000,
    address: 'Doddathoguru Main Road, Phase 1',
    amenities: ['Furnished', 'Security', 'Water Supply'],
    image: img('ec-102'),
  },
  {
    id: 'ec-103',
    areaSlug: 'electronic-city',
    title: 'Silicon Court',
    bhk: 1,
    rent: 16500,
    address: 'Infosys Gate, Electronic City Phase 2',
    amenities: ['Furnished', 'Parking', 'Power Backup', 'Lift', 'Gym'],
    image: img('ec-103'),
  },
  {
    id: 'ec-104',
    areaSlug: 'electronic-city',
    title: 'Velankani Grove',
    bhk: 2,
    rent: 18500,
    address: 'Konappana Agrahara, Phase 1',
    amenities: ['Parking', 'Power Backup', 'Lift', 'Balcony', 'Security'],
    image: img('ec-104'),
  },
  {
    id: 'ec-105',
    areaSlug: 'electronic-city',
    title: 'Doddathoguru Heights',
    bhk: 2,
    rent: 23000,
    address: 'Doddathoguru, Electronic City Phase 1',
    amenities: ['Furnished', 'Parking', 'Modular Kitchen', 'Power Backup', 'Gym', 'Lift'],
    image: img('ec-105'),
  },
  {
    id: 'ec-106',
    areaSlug: 'electronic-city',
    title: 'Green Glen Duplex',
    bhk: 2,
    rent: 31000,
    address: 'Green Glen Layout, Phase 2',
    amenities: ['Furnished', 'Parking', 'Gym', 'Play Area', 'Gated Community', 'Power Backup'],
    image: img('ec-106'),
  },

  // ── Bommanahalli ──────────────────────────────────────────────────
  {
    id: 'bh-201',
    areaSlug: 'bommanahalli',
    title: 'Silk Board Studio',
    bhk: 1,
    rent: 12000,
    address: 'Hosur Main Road, near Silk Board',
    amenities: ['Semi-Furnished', 'Security', 'Water Supply'],
    image: img('bh-201'),
  },
  {
    id: 'bh-202',
    areaSlug: 'bommanahalli',
    title: 'Madiwala Comfort',
    bhk: 1,
    rent: 13500,
    address: 'Madiwala, Hosur Main Road',
    amenities: ['Parking', 'Power Backup', 'Lift'],
    image: img('bh-202'),
  },
  {
    id: 'bh-203',
    areaSlug: 'bommanahalli',
    title: 'Garvebhavipalya Homes',
    bhk: 1,
    rent: 15500,
    address: 'Garvebhavipalya, Bommanahalli',
    amenities: ['Furnished', 'Parking', 'Lift', 'Water Supply'],
    image: img('bh-203'),
  },
  {
    id: 'bh-204',
    areaSlug: 'bommanahalli',
    title: 'Mangammanapalya Court',
    bhk: 2,
    rent: 19000,
    address: 'Mangammanapalya Road, Bommanahalli',
    amenities: ['Parking', 'Power Backup', 'Lift', 'Balcony', 'Security'],
    image: img('bh-204'),
  },
  {
    id: 'bh-205',
    areaSlug: 'bommanahalli',
    title: 'Parangipalya Twin',
    bhk: 2,
    rent: 24000,
    address: 'Parangipalya, near BTM 2nd Stage',
    amenities: ['Furnished', 'Modular Kitchen', 'Parking', 'Gym', 'Lift'],
    image: img('bh-205'),
  },
  {
    id: 'bh-206',
    areaSlug: 'bommanahalli',
    title: 'Hosa Road Residency',
    bhk: 2,
    rent: 26000,
    address: 'Hosa Road, Bommanahalli',
    amenities: ['Furnished', 'Parking', 'Gym', 'Gated Community', 'Power Backup', 'Play Area'],
    image: img('bh-206'),
  },

  // ── Begur ─────────────────────────────────────────────────────────
  // Note: no 2 BHK under ₹15,000 here — a natural empty state for that filter combo.
  {
    id: 'bg-301',
    areaSlug: 'begur',
    title: 'Begur Lake View',
    bhk: 1,
    rent: 11500,
    address: 'Begur Main Road, near Begur Lake',
    amenities: ['Parking', 'Water Supply', 'Balcony'],
    image: img('bg-301'),
  },
  {
    id: 'bg-302',
    areaSlug: 'begur',
    title: 'Akshayanagar Nest',
    bhk: 1,
    rent: 13000,
    address: 'Akshayanagar, Begur',
    amenities: ['Semi-Furnished', 'Parking', 'Power Backup'],
    image: img('bg-302'),
  },
  {
    id: 'bg-303',
    areaSlug: 'begur',
    title: 'Begur Road Residency',
    bhk: 1,
    rent: 14500,
    address: 'Begur Road, Hongasandra',
    amenities: ['Parking', 'Lift', 'Security', 'Water Supply'],
    image: img('bg-303'),
  },
  {
    id: 'bg-304',
    areaSlug: 'begur',
    title: 'Yelenahalli Homes',
    bhk: 2,
    rent: 17500,
    address: 'Yelenahalli, Akshayanagar',
    amenities: ['Parking', 'Power Backup', 'Lift', 'Balcony'],
    image: img('bg-304'),
  },
  {
    id: 'bg-305',
    areaSlug: 'begur',
    title: 'Hongasandra Court',
    bhk: 2,
    rent: 22000,
    address: 'Hongasandra, Begur',
    amenities: ['Furnished', 'Parking', 'Modular Kitchen', 'Lift', 'Security'],
    image: img('bg-305'),
  },
  {
    id: 'bg-306',
    areaSlug: 'begur',
    title: 'Kalena Agrahara Heights',
    bhk: 2,
    rent: 28000,
    address: 'Kalena Agrahara, Bannerghatta Road',
    amenities: ['Furnished', 'Parking', 'Gym', 'Gated Community', 'Play Area', 'Power Backup'],
    image: img('bg-306'),
  },

  // ── HSR Layout ────────────────────────────────────────────────────
  // Note: nothing under ₹15,000 here — HSR runs pricier, so that bucket is empty by design.
  {
    id: 'hsr-401',
    areaSlug: 'hsr-layout',
    title: 'Sector 1 Suites',
    bhk: 1,
    rent: 16000,
    address: '17th Cross, HSR Layout Sector 1',
    amenities: ['Furnished', 'Parking', 'Lift', 'Power Backup'],
    image: img('hsr-401'),
  },
  {
    id: 'hsr-402',
    areaSlug: 'hsr-layout',
    title: '27th Main Studio',
    bhk: 1,
    rent: 18500,
    address: '27th Main, HSR Layout Sector 2',
    amenities: ['Furnished', 'Gym', 'Lift', 'Security', 'Wifi Ready'],
    image: img('hsr-402'),
  },
  {
    id: 'hsr-403',
    areaSlug: 'hsr-layout',
    title: 'BDA Complex View',
    bhk: 1,
    rent: 21000,
    address: 'BDA Complex Road, Sector 6',
    amenities: ['Furnished', 'Parking', 'Gym', 'Balcony', 'Power Backup'],
    image: img('hsr-403'),
  },
  {
    id: 'hsr-404',
    areaSlug: 'hsr-layout',
    title: 'Sector 7 Court',
    bhk: 2,
    rent: 24000,
    address: '24th Main, HSR Layout Sector 7',
    amenities: ['Parking', 'Power Backup', 'Lift', 'Balcony', 'Security'],
    image: img('hsr-404'),
  },
  {
    id: 'hsr-405',
    areaSlug: 'hsr-layout',
    title: 'Sector 2 Residency',
    bhk: 2,
    rent: 27000,
    address: '19th Main, HSR Layout Sector 2',
    amenities: ['Furnished', 'Modular Kitchen', 'Parking', 'Gym', 'Lift'],
    image: img('hsr-405'),
  },
  {
    id: 'hsr-406',
    areaSlug: 'hsr-layout',
    title: 'Agara Lake Homes',
    bhk: 2,
    rent: 32000,
    address: 'Agara, HSR Layout Sector 1',
    amenities: ['Furnished', 'Parking', 'Gym', 'Gated Community', 'Play Area', 'Balcony', 'Power Backup'],
    image: img('hsr-406'),
  },
  {
    id: 'hsr-407',
    areaSlug: 'hsr-layout',
    title: 'Sector 3 Garden Flat',
    bhk: 2,
    rent: 35000,
    address: '14th Main, HSR Layout Sector 3',
    amenities: ['Furnished', 'Modular Kitchen', 'Parking', 'Gym', 'Gated Community', 'Balcony', 'Wifi Ready'],
    image: img('hsr-407'),
  },
]

// ── Derived helpers ─────────────────────────────────────────────────

export function getArea(slug) {
  return areas.find((a) => a.slug === slug)
}

export function propertiesByArea(slug) {
  return properties.filter((p) => p.areaSlug === slug)
}

export function countByArea(slug) {
  return propertiesByArea(slug).length
}

// Rent formatted as ₹12,500 with Indian digit grouping.
export function formatRent(rent) {
  return `₹${rent.toLocaleString('en-IN')}`
}
