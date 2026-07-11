import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { useDocumentTitle } from '../hooks/useDocumentTitle.js'
import CorridorMap from '../components/CorridorMap.jsx'
import { areas, countByArea, properties } from '../data/properties.js'

export default function Explore() {
  useDocumentTitle('Explore localities')
  const total = properties.length

  return (
    <div className="wrap py-12 lg:py-16">
      <header className="max-w-2xl">
        <p className="eyebrow">Explore</p>
        <h1 className="mt-3 font-display text-2xl font-bold sm:text-3xl">
          Pick a locality to start
        </h1>
        <p className="mt-3 text-sand-600">
          {total} verified homes across four connected areas in south Bangalore. Tap a stop on the
          corridor to see what's available there.
        </p>
      </header>

      {/* Signature element */}
      <div className="mt-10">
        <CorridorMap variant="full" />
      </div>

      {/* Desktop-only supporting list so every area is a plain link too */}
      <div className="mt-10 hidden gap-4 md:grid md:grid-cols-2 lg:grid-cols-4">
        {areas.map((a) => (
          <Link
            key={a.slug}
            to={`/explore/${a.slug}`}
            className="group flex h-full flex-col rounded-card border border-line bg-white p-5 shadow-card transition-colors hover:border-evergreen"
          >
            <div className="flex items-baseline justify-between gap-2">
              <h2 className="font-display text-lg font-semibold text-evergreen">{a.name}</h2>
              <span className="tnum shrink-0 rounded-full bg-sand-100 px-2.5 py-0.5 text-xs font-semibold text-evergreen">
                {countByArea(a.slug)}
              </span>
            </div>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-sand-600">{a.blurb}</p>
            <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-marigold-deep">
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
