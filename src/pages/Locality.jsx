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
  { value: 'under-15k', label: 'Under ₹15,000' },
  { value: '15-25k', label: '₹15,000–₹25,000' },
  { value: '25k-plus', label: '₹25,000+' },
]

function matchesPrice(rent, bucket) {
  if (bucket === 'under-15k') return rent < 15000
  if (bucket === '15-25k') return rent >= 15000 && rent <= 25000
  if (bucket === '25k-plus') return rent > 25000
  return true
}

// Segmented control used for both filters.
function Segmented({ label, options, value, onChange, name }) {
  return (
    <div>
      <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-sand-600">
        {label}
      </span>
      <div
        role="radiogroup"
        aria-label={label}
        className="inline-flex flex-wrap gap-1 rounded-full border border-line bg-white p-1"
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
                'rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors',
                active
                  ? 'bg-evergreen text-paper'
                  : 'text-sand-600 hover:bg-sand-100 hover:text-evergreen',
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
      <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-sand-100 text-evergreen">
        <MapPinOff className="h-8 w-8" aria-hidden="true" />
      </span>
      <h1 className="mt-6 font-display text-2xl font-bold">We don't cover that area yet</h1>
      <p className="mt-3 max-w-md text-sand-600">
        That locality isn't on our corridor. Take a look at the four areas we do cover — you'll
        likely find something close by.
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

  // Write a filter into the URL query string so the view is shareable.
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
      <div className="border-b border-line bg-sand-50">
        <div className="wrap py-8">
          <nav className="text-sm" aria-label="Breadcrumb">
            <Link
              to="/explore"
              className="inline-flex items-center gap-1 text-sand-600 transition-colors hover:text-evergreen"
            >
              <ChevronLeft className="h-4 w-4" aria-hidden="true" />
              Explore
            </Link>
          </nav>
          <h1 className="mt-2 font-display text-2xl font-bold sm:text-3xl">{area.name}</h1>
          <p className="mt-2 max-w-2xl text-sand-600">{area.blurb}</p>
        </div>
      </div>

      {/* Sticky filter bar */}
      <div className="sticky top-16 z-20 border-b border-line bg-paper/95 backdrop-blur">
        <div className="wrap flex flex-col gap-4 py-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="flex flex-wrap items-end gap-x-8 gap-y-4">
            <span className="flex items-center gap-2 pb-1 font-display text-sm font-semibold text-evergreen">
              <SlidersHorizontal className="h-4 w-4" aria-hidden="true" />
              Filters
            </span>
            <Segmented
              label="Bedrooms"
              name="bhk"
              options={BHK_OPTIONS}
              value={bhk}
              onChange={(v) => setFilter('bhk', v)}
            />
            <Segmented
              label="Monthly rent"
              name="price"
              options={PRICE_OPTIONS}
              value={price}
              onChange={(v) => setFilter('price', v)}
            />
          </div>

          <div className="flex items-center justify-between gap-4">
            <span aria-live="polite" className="tnum text-sm font-medium text-sand-600">
              {results.length} {results.length === 1 ? 'home' : 'homes'}
            </span>
            {isFiltered && (
              <button
                type="button"
                onClick={clearFilters}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-marigold-deep hover:text-evergreen"
              >
                <RotateCcw className="h-4 w-4" aria-hidden="true" />
                Clear filters
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="wrap py-10">
        {results.length > 0 ? (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {results.map((p) => (
              <PropertyCard key={p.id} property={p} />
            ))}
          </div>
        ) : (
          <div className="mx-auto flex max-w-md flex-col items-center py-16 text-center">
            <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-sand-100 text-evergreen">
              <SearchX className="h-8 w-8" aria-hidden="true" />
            </span>
            <h2 className="mt-6 font-display text-xl font-bold text-evergreen">
              Nothing matches just yet
            </h2>
            <p className="mt-3 text-sand-600">
              No {[bhkLabel, priceLabel !== 'any price' ? priceLabel : ''].filter(Boolean).join(' ')}{' '}
              homes in {area.name} right now. Try widening the price range or clearing a filter.
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
