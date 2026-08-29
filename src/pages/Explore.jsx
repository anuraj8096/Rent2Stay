import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { useDocumentTitle } from '../hooks/useDocumentTitle.js'
import CorridorMap from '../components/CorridorMap.jsx'
import PropertyCard from '../components/PropertyCard.jsx'
import { areas, properties, countByArea } from '../data/properties.js'

export default function Explore() {
  useDocumentTitle('Explore localities')
  return (
    <div className="wrap py-8 sm:py-12 lg:py-16">
      <header className="max-w-2xl">
        <p className="eyebrow">Explore</p>
        <h1 className="mt-3 font-display text-2xl font-bold text-gray-900 sm:text-3xl lg:text-4xl">
          Pick a locality to start
        </h1>
        <p className="mt-3 text-gray-500">
          100+ verified homes across {areas.length}+ areas in Bangalore. Choose an area to see what's available.
        </p>
      </header>

      <div className="mt-8 sm:mt-10">
        <CorridorMap variant="full" />
      </div>

      {/* All properties grid */}
      <div className="mt-12 sm:mt-16">
        <div className="flex items-end justify-between gap-4">
          <h2 className="font-display text-xl font-bold text-gray-900 sm:text-2xl">
            All properties
          </h2>
          <span className="tnum text-sm text-gray-500">{properties.length} homes listed</span>
        </div>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {properties.map((p) => (
            <PropertyCard key={p.id} property={p} />
          ))}
        </div>
      </div>
    </div>
  )
}
