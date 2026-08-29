import { useEffect, useState, useCallback } from 'react'
import { Phone, MessageCircle, MapPin, X, ChevronLeft, ChevronRight, IndianRupee, Shield } from 'lucide-react'
import AmenityIcon from './AmenityIcon.jsx'
import { formatRent, formatDeposit } from '../data/properties.js'
import { telHref, whatsappHref } from '../lib/contact.js'

function ImageGallery({ images, alt, onImageClick }) {
  const [idx, setIdx] = useState(0)

  const prev = (e) => {
    e.stopPropagation()
    setIdx((i) => (i === 0 ? images.length - 1 : i - 1))
  }
  const next = (e) => {
    e.stopPropagation()
    setIdx((i) => (i === images.length - 1 ? 0 : i + 1))
  }

  return (
    <div className="group/gallery relative aspect-[4/3] w-full overflow-hidden bg-gray-100">
      <img
        src={images[idx]}
        alt={alt}
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        loading="lazy"
        onClick={onImageClick}
      />
      {images.length > 1 && (
        <>
          <button
            type="button"
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-1.5 text-gray-700 opacity-0 shadow-card backdrop-blur transition-opacity hover:bg-white group-hover/gallery:opacity-100"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-1.5 text-gray-700 opacity-0 shadow-card backdrop-blur transition-opacity hover:bg-white group-hover/gallery:opacity-100"
            aria-label="Next image"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
          <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-1">
            {images.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={(e) => { e.stopPropagation(); setIdx(i) }}
                className={`h-1.5 rounded-full transition-all ${
                  i === idx ? 'w-4 bg-white' : 'w-1.5 bg-white/60'
                }`}
                aria-label={`Image ${i + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}

function DetailsModal({ property, onClose }) {
  const [idx, setIdx] = useState(0)
  const images = property.images || [property.image]

  const handleKey = useCallback(
    (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') setIdx((i) => (i === 0 ? images.length - 1 : i - 1))
      if (e.key === 'ArrowRight') setIdx((i) => (i === images.length - 1 ? 0 : i + 1))
    },
    [onClose, images.length],
  )

  useEffect(() => {
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [handleKey])

  const waMsg = `Hi, I'm interested in ${property.title} (${property.bhk} BHK, ${formatRent(
    property.rent,
  )}/mo) at ${property.address}. Is it available?`

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center p-0 sm:items-center sm:p-4">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={onClose} aria-hidden="true" />
      <div
        role="dialog"
        aria-modal="true"
        aria-label={`${property.title} details`}
        className="relative flex max-h-[95vh] w-full max-w-lg animate-fade-up flex-col overflow-hidden rounded-t-2xl bg-white shadow-premium sm:max-h-[85vh] sm:rounded-2xl"
        style={{ maxWidth: '100vw' }}
      >
        {/* Image gallery */}
        <div className="relative shrink-0">
          <img
            src={images[idx]}
            alt={`${property.title} — photo ${idx + 1}`}
            className="h-56 w-full object-cover sm:h-64"
          />
          <button
            type="button"
            onClick={onClose}
            className="absolute right-3 top-3 rounded-full bg-white/90 p-2 text-gray-700 shadow-card backdrop-blur hover:bg-white"
            aria-label="Close details"
          >
            <X className="h-4 w-4" aria-hidden="true" />
          </button>
          <span className="absolute left-3 top-3 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-white">
            {property.bhk} BHK
          </span>
          {images.length > 1 && (
            <>
              <button
                type="button"
                onClick={() => setIdx((i) => (i === 0 ? images.length - 1 : i - 1))}
                className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-1.5 text-gray-700 shadow-card backdrop-blur hover:bg-white"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => setIdx((i) => (i === images.length - 1 ? 0 : i + 1))}
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-1.5 text-gray-700 shadow-card backdrop-blur hover:bg-white"
                aria-label="Next image"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
              <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
                {images.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setIdx(i)}
                    className={`h-2 rounded-full transition-all ${
                      i === idx ? 'w-5 bg-white' : 'w-2 bg-white/60'
                    }`}
                    aria-label={`View photo ${i + 1}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        <div className="flex-1 overflow-y-auto overflow-x-hidden p-5">
          <h3 className="font-display text-xl font-bold text-gray-900">{property.title}</h3>
          <p className="mt-1.5 flex items-start gap-1.5 text-sm text-gray-500">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
            {property.address}
          </p>

          <div className="mt-4 grid grid-cols-2 gap-3">
            <div className="min-w-0 rounded-xl bg-gray-50 p-3">
              <div className="flex items-center gap-1.5 text-xs text-gray-500">
                <IndianRupee className="h-3 w-3 shrink-0" /> Rent
              </div>
              <p className="tnum mt-1 font-display text-lg font-bold text-gray-900 truncate">
                {formatRent(property.rent)}
              </p>
            </div>
            <div className="min-w-0 rounded-xl bg-gray-50 p-3">
              <div className="flex items-center gap-1.5 text-xs text-gray-500">
                <Shield className="h-3 w-3 shrink-0" /> Deposit
              </div>
              <p className="tnum mt-1 font-display text-lg font-bold text-gray-900 truncate">
                {property.deposit ? formatDeposit(property.deposit) : '—'}
              </p>
            </div>
          </div>

          <h4 className="mt-5 text-xs font-semibold uppercase tracking-wider text-gray-400">
            Amenities
          </h4>
          <ul className="mt-3 grid grid-cols-2 gap-2.5">
            {property.amenities.map((a) => (
              <li key={a} className="flex min-w-0 items-center gap-2.5 text-sm text-gray-700">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary-50 text-primary">
                  <AmenityIcon name={a} />
                </span>
                <span className="truncate">{a}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="grid grid-cols-2 gap-3 border-t border-gray-100 bg-gray-50 p-4">
          <a href={telHref} className="btn-outline w-full py-3">
            <Phone className="h-4 w-4" aria-hidden="true" />
            Call now
          </a>
          <a
            href={whatsappHref(waMsg)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn w-full bg-whatsapp px-5 py-3 font-semibold text-white hover:brightness-95"
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
  const images = property.images || [property.image]

  const waMsg = `Hi, I'm interested in ${property.title} (${property.bhk} BHK, ${formatRent(
    property.rent,
  )}/mo) at ${property.address}. Is it available?`

  const shown = property.amenities.slice(0, 3)
  const extra = property.amenities.length - shown.length

  return (
    <>
      <article className="group flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-card transition-all duration-300 hover:shadow-lift hover:border-gray-200">
        <div className="relative w-full overflow-hidden cursor-pointer">
          <ImageGallery
            images={images}
            alt={`${property.title}, a ${property.bhk} BHK`}
            onImageClick={() => setOpen(true)}
          />
          <span className="pointer-events-none absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-xs font-semibold text-gray-900 shadow-card backdrop-blur">
            {property.bhk} BHK
          </span>
          <span className="pointer-events-none absolute right-3 top-3 flex items-center gap-1 rounded-full bg-white/90 px-2 py-1 text-xs text-gray-500 shadow-card backdrop-blur">
            <svg viewBox="0 0 16 16" fill="none" className="h-3 w-3">
              <rect x="1" y="4" width="14" height="9" rx="1" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M4 4V3a4 4 0 018 0v1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            {images.length}
          </span>
        </div>

        <div className="flex flex-1 flex-col p-4">
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-display text-base font-semibold text-gray-900 line-clamp-1">{property.title}</h3>
            <span className="tnum shrink-0 font-display text-base font-bold text-primary">
              {formatRent(property.rent)}
              <span className="text-xs font-normal text-gray-400">/mo</span>
            </span>
          </div>
          <p className="mt-1.5 flex items-start gap-1.5 text-xs text-gray-500">
            <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden="true" />
            <span className="line-clamp-1">{property.address}</span>
          </p>

          {property.deposit && (
            <p className="mt-2 text-xs text-gray-400">
              Deposit: <span className="tnum font-medium text-gray-600">{formatDeposit(property.deposit)}</span>
            </p>
          )}

          <ul className="mt-3 flex flex-wrap gap-1.5">
            {shown.map((a) => (
              <li
                key={a}
                className="inline-flex items-center gap-1 rounded-full bg-gray-50 px-2.5 py-1 text-xs text-gray-600"
              >
                <AmenityIcon name={a} className="h-3 w-3 text-gray-400" />
                {a}
              </li>
            ))}
            {extra > 0 && (
              <li className="inline-flex items-center rounded-full bg-gray-50 px-2.5 py-1 text-xs text-gray-400">
                +{extra}
              </li>
            )}
          </ul>

          <div className="mt-4 flex items-center gap-2 border-t border-gray-100 pt-4">
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="btn-primary flex-1 py-2.5 text-xs"
            >
              View details
            </button>
            <a
              href={telHref}
              className="icon-btn h-10 w-10 border border-gray-200 bg-white text-gray-600 hover:border-gray-300 hover:bg-gray-50"
              aria-label={`Call about ${property.title}`}
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href={whatsappHref(waMsg)}
              target="_blank"
              rel="noopener noreferrer"
              className="icon-btn h-10 w-10 bg-whatsapp text-white hover:brightness-95"
              aria-label={`WhatsApp about ${property.title}`}
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </article>

      {open && <DetailsModal property={property} onClose={() => setOpen(false)} />}
    </>
  )
}
