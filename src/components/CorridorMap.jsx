import { Link } from 'react-router-dom'
import { MapPin, ArrowRight, Building2 } from 'lucide-react'
import { areas, countByArea } from '../data/properties.js'

export default function CorridorMap({ variant = 'full' }) {
  const entries = areas.map((a) => ({ ...a, count: countByArea(a.slug) }))

  if (variant === 'mini') {
    return (
      <div className="grid gap-3 sm:grid-cols-3">
        {entries.map((e) => (
          <Link
            key={e.slug}
            to={`/explore/${e.slug}`}
            className="group flex items-center gap-3 rounded-2xl border border-gray-100 bg-white p-4 transition-all hover:border-primary/20 hover:shadow-card"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
              <Building2 className="h-5 w-5" aria-hidden="true" />
            </span>
            <span className="min-w-0 flex-1">
              <span className="block text-sm font-semibold text-gray-900">{e.name}</span>
              <span className="tnum block text-xs text-gray-500">{e.count} {e.count === 1 ? 'property' : 'properties'}</span>
            </span>
            <ArrowRight
              className="h-4 w-4 shrink-0 text-gray-300 transition-all group-hover:translate-x-0.5 group-hover:text-primary"
              aria-hidden="true"
            />
          </Link>
        ))}
      </div>
    )
  }

  return (
    <div>
      {/* Area cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {entries.map((e) => (
          <Link
            key={e.slug}
            to={`/explore/${e.slug}`}
            className="group flex h-full flex-col rounded-2xl border border-gray-100 bg-white p-6 shadow-card transition-all hover:border-primary/20 hover:shadow-lift"
          >
            <div className="flex items-center justify-between gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-50 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                <MapPin className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="tnum shrink-0 rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-600">
                {e.count} {e.count === 1 ? 'home' : 'homes'}
              </span>
            </div>
            <h2 className="mt-4 font-display text-lg font-semibold text-gray-900">{e.name}</h2>
            <p className="mt-1.5 flex-1 text-sm leading-relaxed text-gray-500">{e.blurb}</p>
            <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
              View homes
              <ArrowRight
                className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </span>
          </Link>
        ))}
      </div>
    </div>
  )
}
