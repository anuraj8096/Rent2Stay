export const areas = [
  {
    slug: 'hsr-layout',
    name: 'HSR Layout',
    blurb: 'Premium living in south Bangalore — cafés, parks, and excellent connectivity.',
  },
  {
    slug: 'whitefield',
    name: 'Whitefield & Kadugodi',
    blurb: 'IT hub surroundings with growing infrastructure and peaceful residential pockets.',
  },
  {
    slug: 'sarjapur',
    name: 'Sarjapur & Varthur',
    blurb: 'Rapidly developing corridor with new apartments and easy access to tech parks.',
  },
]

const BASE = import.meta.env.BASE_URL + 'properties'

export const properties = [
  {
    id: 'prop-1',
    areaSlug: 'hsr-layout',
    title: 'The Palasha',
    bhk: 2,
    rent: 37000,
    deposit: 100000,
    address: '#36, Royal Placid, Haralur Main Road, HSR Extension, HSR Layout, Bengaluru 560102',
    amenities: ['Furnished', 'Parking', 'Power Backup', 'Lift', 'Security', 'Water Supply'],
    images: Array.from({ length: 7 }, (_, i) => `${BASE}/1/${i + 1}.jpeg`),
  },
  {
    id: 'prop-2',
    areaSlug: 'hsr-layout',
    title: 'AGR Elegant',
    bhk: 1,
    rent: 20000,
    deposit: 60000,
    address: 'Somasandra Palya, Near Poorva Motors, HSR 2nd, 28/4, Bangalore 560102',
    amenities: ['Semi-Furnished', 'Parking', 'Power Backup', 'Water Supply'],
    images: Array.from({ length: 7 }, (_, i) => `${BASE}/2/${i + 1}.jpeg`),
  },
  {
    id: 'prop-3',
    areaSlug: 'whitefield',
    title: 'Geetha Nivas',
    bhk: 1,
    rent: 20000,
    deposit: 66000,
    address: 'No. 07, GJM Sai Green Garden Layout, Kadugodi Road, Behind HP Petrol Pump, Seegehalli Village, Bengaluru 560067',
    amenities: ['Semi-Furnished', 'Parking', 'Water Supply', 'Power Backup'],
    images: Array.from({ length: 10 }, (_, i) => `${BASE}/3/${i + 1}.jpeg`),
  },
  {
    id: 'prop-4',
    areaSlug: 'sarjapur',
    title: 'Sri Venkateshwara Swamy Nilaya',
    bhk: 2,
    rent: 27000,
    deposit: 80000,
    address: '#135, Kumbar Street, Gunjur (via Varthur), Bangalore 560087',
    amenities: ['Parking', 'Power Backup', 'Water Supply', 'Balcony'],
    images: Array.from({ length: 8 }, (_, i) => `${BASE}/4/${i + 1}.jpeg`),
  },
  {
    id: 'prop-5',
    areaSlug: 'hsr-layout',
    title: "Bhat's Galaxy",
    bhk: 2,
    rent: 40000,
    deposit: 120000,
    address: 'Site 29, 5th Cross, Royal Placid Phase 2, Harluru, Bengaluru 560102',
    amenities: ['Furnished', 'Parking', 'Power Backup', 'Lift', 'Security', 'Balcony', 'Modular Kitchen'],
    images: Array.from({ length: 8 }, (_, i) => `${BASE}/5/${i + 1}.jpeg`),
  },
]

export function getArea(slug) {
  return areas.find((a) => a.slug === slug)
}

export function propertiesByArea(slug) {
  return properties.filter((p) => p.areaSlug === slug)
}

export function countByArea(slug) {
  return propertiesByArea(slug).length
}

export function formatRent(rent) {
  return `₹${rent.toLocaleString('en-IN')}`
}

export function formatDeposit(deposit) {
  return `₹${deposit.toLocaleString('en-IN')}`
}
