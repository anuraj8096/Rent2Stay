import { useMemo } from 'react'
import { Link, useParams, useSearchParams } from 'react-router-dom'
import { ChevronLeft, SlidersHorizontal, RotateCcw, MapPinOff, SearchX } from 'lucide-react'
import { useDocumentTitle } from '../hooks/useDocumentTitle.js'
import PropertyCard from '../components/PropertyCard.jsx'
import { getArea, propertiesByArea } from '../data/properties.js'

const BHK_OPTIONS = [
  { value: 'all', label: 'All' },
  { value: '1', label: '1 BHK' },
  { value: '2', label: '2 BHK' },
]

const PRICE_OPTIONS = [
  { value: 'all', label: 'Any price' },
  { value: 'under-20k', label: 'Under ₹20k' },
  { value: '20-30k', label: '₹20k–₹30k' },
  { value: '30k-plus', label: '₹30k+' },
]

function matchesPrice(rent, bucket) {
  if (bucket === 'under-20k') return rent < 20000
  if (bucket === '20-30k') return rent >= 20000 && rent <= 30000
  if (bucket === '30k-plus') return rent > 30000
  return true
}

function Segmented({ label, options, value, onChange }) {
  return (
    <div>
      <span className="mb-1.5 block text-xs font-medium text-gray-400">
        {label}
      </span>
      <div
        role="radiogroup"
        aria-label={label}
        className="inline-flex flex-wrap gap-1 rounded-full border border-gray-200 bg-gray-50 p-1"
      >
        {options.map((o) => {
          const active = value === o.value
          return (
            <button
              key={o.value}
              type="button"
              role="radio"
              aria-checked={active}
              onClick={() => onChange(o.value)}
              className={[
                'rounded-full px-3 py-1.5 text-xs font-medium transition-all sm:text-sm',
                active
                  ? 'bg-primary text-white shadow-card'
                  : 'text-gray-500 hover:bg-white hover:text-gray-900 hover:shadow-card',
              ].join(' ')}
            >
              {o.label}
            </button>
          )
        })}
      </div>
    </div>
  )
}

function LocalityNotFound() {
  useDocumentTitle('Locality not found')
  return (
    <div className="wrap flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
      <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gray-100 text-gray-400">
        <MapPinOff className="h-8 w-8" aria-hidden="true" />
      </span>
      <h1 className="mt-6 font-display text-2xl font-bold text-gray-900">We don't cover that area yet</h1>
      <p className="mt-3 max-w-md text-gray-500">
        That locality isn't on our list yet. Take a look at the areas we do cover.
      </p>
      <Link to="/explore" className="btn-primary mt-8">
        Back to Explore
      </Link>
    </div>
  )
}

export default function Locality() {
  const { areaSlug } = useParams()
  const area = getArea(areaSlug)
  const [params, setParams] = useSearchParams()

  const bhk = params.get('bhk') || 'all'
  const price = params.get('price') || 'all'
  const isFiltered = bhk !== 'all' || price !== 'all'

  useDocumentTitle(area ? `${area.name} rentals` : 'Locality not found')

  const all = useMemo(() => (area ? propertiesByArea(area.slug) : []), [area])
  const results = useMemo(
    () => all.filter((p) => (bhk === 'all' || p.bhk === Number(bhk)) && matchesPrice(p.rent, price)),
    [all, bhk, price],
  )

  if (!area) return <LocalityNotFound />

  const setFilter = (key, value) => {
    const next = new URLSearchParams(params)
    if (value === 'all') next.delete(key)
    else next.set(key, value)
    setParams(next, { replace: true })
  }

  const clearFilters = () => setParams(new URLSearchParams(), { replace: true })

  const priceLabel = PRICE_OPTIONS.find((o) => o.value === price)?.label.toLowerCase()
  const bhkLabel = bhk === 'all' ? '' : `${bhk} BHK`

  return (
    <div>
      {/* Header */}
      <div className="border-b border-gray-100 bg-gray-50">
        <div className="wrap py-6 sm:py-8">
          <nav className="text-sm" aria-label="Breadcrumb">
            <Link
              to="/explore"
              className="inline-flex items-center gap-1 text-gray-500 transition-colors hover:text-primary"
            >
              <ChevronLeft className="h-4 w-4" aria-hidden="true" />
              Explore
            </Link>
          </nav>
          <h1 className="mt-2 font-display text-2xl font-bold text-gray-900 sm:text-3xl">{area.name}</h1>
          <p className="mt-2 max-w-2xl text-sm text-gray-500 sm:text-base">{area.blurb}</p>
        </div>
      </div>

      {/* Filter bar */}
      <div className="sticky top-16 z-20 border-b border-gray-100 bg-white/95 backdrop-blur-md">
        <div className="wrap flex flex-col gap-4 py-3 sm:py-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="flex flex-wrap items-end gap-x-6 gap-y-3">
            <span className="flex items-center gap-2 pb-1 text-sm font-semibold text-gray-700">
              <SlidersHorizontal className="h-4 w-4 text-gray-400" aria-hidden="true" />
              Filters
            </span>
            <Segmented
              label="Bedrooms"
              options={BHK_OPTIONS}
              value={bhk}
              onChange={(v) => setFilter('bhk', v)}
            />
            <Segmented
              label="Monthly rent"
              options={PRICE_OPTIONS}
              value={price}
              onChange={(v) => setFilter('price', v)}
            />
          </div>

          <div className="flex items-center justify-between gap-4">
            <span aria-live="polite" className="tnum text-sm text-gray-500">
              {results.length} {results.length === 1 ? 'home' : 'homes'}
            </span>
            {isFiltered && (
              <button
                type="button"
                onClick={clearFilters}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-light"
              >
                <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
                Clear
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="wrap py-8 sm:py-10">
        {results.length > 0 ? (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {results.map((p) => (
              <PropertyCard key={p.id} property={p} />
            ))}
          </div>
        ) : (
          <div className="mx-auto flex max-w-md flex-col items-center py-16 text-center">
            <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gray-100 text-gray-400">
              <SearchX className="h-8 w-8" aria-hidden="true" />
            </span>
            <h2 className="mt-6 font-display text-xl font-bold text-gray-900">
              Nothing matches yet
            </h2>
            <p className="mt-3 text-gray-500">
              No {[bhkLabel, priceLabel !== 'any price' ? priceLabel : ''].filter(Boolean).join(' ')}{' '}
              homes in {area.name} right now. Try widening the filters.
            </p>
            <button type="button" onClick={clearFilters} className="btn-primary mt-8">
              <RotateCcw className="h-4 w-4" aria-hidden="true" />
              Reset filters
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
