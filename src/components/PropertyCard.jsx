import { useEffect, useState } from 'react'
import { Phone, MessageCircle, MapPin, X, Check } from 'lucide-react'
import AmenityIcon from './AmenityIcon.jsx'
import { formatRent } from '../data/properties.js'
import { telHref, whatsappHref } from '../lib/contact.js'

function DetailsModal({ property, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  const waMsg = `Hi, I'm interested in ${property.title} (${property.bhk} BHK, ${formatRent(
    property.rent,
  )}/mo) in ${property.address}. Is it available?`

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center p-0 sm:items-center sm:p-4">
      <div className="absolute inset-0 bg-ink/50" onClick={onClose} aria-hidden="true" />
      <div
        role="dialog"
        aria-modal="true"
        aria-label={`${property.title} details`}
        className="relative flex max-h-[92vh] w-full max-w-lg animate-fade-up flex-col overflow-hidden rounded-t-card bg-paper shadow-lift sm:rounded-card"
      >
        <div className="relative">
          <img
            src={property.image}
            alt={`${property.title}, a ${property.bhk} BHK in ${property.address}`}
            className="h-52 w-full object-cover"
            loading="lazy"
          />
          <button
            type="button"
            onClick={onClose}
            className="icon-btn absolute right-3 top-3 bg-paper/90 text-evergreen hover:bg-paper"
            aria-label="Close details"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
          <span className="absolute left-3 top-3 rounded-full bg-evergreen px-3 py-1 text-xs font-semibold text-paper">
            {property.bhk} BHK
          </span>
        </div>

        <div className="flex-1 overflow-y-auto p-5">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="font-display text-xl font-bold text-evergreen">{property.title}</h3>
              <p className="mt-1 flex items-start gap-1.5 text-sm text-sand-600">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                {property.address}
              </p>
            </div>
            <div className="shrink-0 text-right">
              <span className="tnum font-display text-lg font-bold text-ink">
                {formatRent(property.rent)}
              </span>
              <span className="block text-xs text-sand-600">/month</span>
            </div>
          </div>

          <h4 className="mt-5 font-display text-sm font-semibold uppercase tracking-wider text-evergreen">
            What's included
          </h4>
          <ul className="mt-3 grid grid-cols-2 gap-2.5">
            {property.amenities.map((a) => (
              <li key={a} className="flex items-center gap-2 text-sm text-ink">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-sand-100 text-evergreen">
                  <AmenityIcon name={a} />
                </span>
                {a}
              </li>
            ))}
          </ul>
        </div>

        <div className="grid grid-cols-2 gap-3 border-t border-line bg-white p-4">
          <a href={telHref} className="btn-outline w-full">
            <Phone className="h-4 w-4" aria-hidden="true" />
            Call now
          </a>
          <a
            href={whatsappHref(waMsg)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn w-full bg-whatsapp px-5 py-2.5 font-semibold text-white hover:brightness-95"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  )
}

export default function PropertyCard({ property }) {
  const [open, setOpen] = useState(false)

  const waMsg = `Hi, I'm interested in ${property.title} (${property.bhk} BHK, ${formatRent(
    property.rent,
  )}/mo) in ${property.address}. Is it available?`

  const shown = property.amenities.slice(0, 3)
  const extra = property.amenities.length - shown.length

  return (
    <>
      <article className="group flex flex-col overflow-hidden rounded-card border border-line bg-white shadow-card transition-shadow duration-300 hover:shadow-lift">
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="relative block aspect-[4/3] w-full overflow-hidden text-left"
          aria-label={`View details for ${property.title}`}
        >
          <img
            src={property.image}
            alt={`${property.title}, a ${property.bhk} BHK in ${property.address}`}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
            loading="lazy"
          />
          <span className="absolute left-3 top-3 rounded-full bg-evergreen px-2.5 py-1 text-xs font-semibold text-paper">
            {property.bhk} BHK
          </span>
          <span className="tnum absolute bottom-3 right-3 rounded-full bg-marigold px-3 py-1 text-sm font-bold text-ink shadow-card">
            {formatRent(property.rent)}
            <span className="font-medium">/mo</span>
          </span>
        </button>

        <div className="flex flex-1 flex-col p-4">
          <h3 className="font-display text-lg font-semibold text-evergreen">{property.title}</h3>
          <p className="mt-1 flex items-start gap-1.5 text-sm text-sand-600">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
            <span className="line-clamp-1">{property.address}</span>
          </p>

          {/* Amenity chips */}
          <ul className="mt-3 flex flex-wrap gap-2">
            {shown.map((a) => (
              <li
                key={a}
                className="inline-flex items-center gap-1.5 rounded-full bg-sand-100 px-2.5 py-1 text-xs font-medium text-evergreen"
              >
                <AmenityIcon name={a} className="h-3.5 w-3.5" />
                {a}
              </li>
            ))}
            {extra > 0 && (
              <li className="inline-flex items-center rounded-full bg-sand-100 px-2.5 py-1 text-xs font-medium text-sand-600">
                +{extra} more
              </li>
            )}
          </ul>

          <div className="mt-4 flex items-center gap-2 border-t border-line pt-4">
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="btn-outline flex-1"
            >
              View details
            </button>
            <a
              href={telHref}
              className="icon-btn border border-line bg-white text-evergreen hover:border-evergreen hover:text-evergreen-light"
              aria-label={`Call about ${property.title}`}
            >
              <Phone className="h-5 w-5" aria-hidden="true" />
            </a>
            <a
              href={whatsappHref(waMsg)}
              target="_blank"
              rel="noopener noreferrer"
              className="icon-btn bg-whatsapp text-white hover:brightness-95"
              aria-label={`WhatsApp about ${property.title}`}
            >
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
            </a>
          </div>
        </div>
      </article>

      {open && <DetailsModal property={property} onClose={() => setOpen(false)} />}
    </>
  )
}
