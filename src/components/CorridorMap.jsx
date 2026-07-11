import { Link } from 'react-router-dom'
import { MapPin, ArrowRight } from 'lucide-react'
import { areas, countByArea } from '../data/properties.js'

// Positions along a gentle southeast arc (percentages of the box).
// Order left→right follows the real EC → Bommanahalli → Begur → HSR sweep.
const POS = {
  'electronic-city': { x: 10, y: 72 },
  bommanahalli: { x: 37, y: 42 },
  begur: { x: 62, y: 60 },
  'hsr-layout': { x: 89, y: 30 },
}

// Same points expressed in the 0–1000 × 0–460 viewBox used to draw the road.
const VB = { w: 1000, h: 460 }
const pt = (slug) => ({ x: (POS[slug].x / 100) * VB.w, y: (POS[slug].y / 100) * VB.h })

const ROAD = (() => {
  const ec = pt('electronic-city')
  const bh = pt('bommanahalli')
  const bg = pt('begur')
  const hsr = pt('hsr-layout')
  return [
    `M ${ec.x} ${ec.y}`,
    `C ${ec.x + 120} ${ec.y}, ${bh.x - 90} ${bh.y}, ${bh.x} ${bh.y}`,
    `C ${bh.x + 100} ${bh.y}, ${bg.x - 90} ${bg.y}, ${bg.x} ${bg.y}`,
    `C ${bg.x + 110} ${bg.y}, ${hsr.x - 80} ${hsr.y}, ${hsr.x} ${hsr.y}`,
  ].join(' ')
})()

function MapIllustration({ withRoute = true }) {
  return (
    <svg
      viewBox={`0 0 ${VB.w} ${VB.h}`}
      preserveAspectRatio="none"
      className="absolute inset-0 h-full w-full"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <pattern id="dots" width="26" height="26" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1.4" fill="#1E4438" opacity="0.10" />
        </pattern>
        <linearGradient id="mapfade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#EDE9DE" />
          <stop offset="100%" stopColor="#F7F4EE" />
        </linearGradient>
      </defs>

      {/* Garden-City tinted ground + dotted texture */}
      <rect x="0" y="0" width={VB.w} height={VB.h} fill="url(#mapfade)" />
      <rect x="0" y="0" width={VB.w} height={VB.h} fill="url(#dots)" />

      {/* Faint contour lines suggesting terrain */}
      <path
        d="M -20 120 C 220 60, 520 200, 1020 90"
        fill="none"
        stroke="#2F6E52"
        strokeWidth="2"
        opacity="0.12"
      />
      <path
        d="M -20 360 C 260 300, 640 420, 1020 320"
        fill="none"
        stroke="#2F6E52"
        strokeWidth="2"
        opacity="0.12"
      />

      {withRoute && (
        <>
          {/* Road casing + dashed centre line */}
          <path d={ROAD} fill="none" stroke="#1E4438" strokeWidth="16" strokeLinecap="round" opacity="0.9" />
          <path d={ROAD} fill="none" stroke="#2F6E52" strokeWidth="10" strokeLinecap="round" />
          <path
            d={ROAD}
            fill="none"
            stroke="#E8A548"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeDasharray="2 18"
          />
        </>
      )}
    </svg>
  )
}

/**
 * variant='full' → interactive map (md+) with a stacked list fallback (mobile)
 * variant='mini' → compact non-interactive echo used on the Home page
 */
export default function CorridorMap({ variant = 'full' }) {
  const entries = areas.map((a) => ({ ...a, count: countByArea(a.slug), ...POS[a.slug] }))

  if (variant === 'mini') {
    return (
      <div className="relative aspect-[1000/300] w-full overflow-hidden rounded-card border border-line bg-paper">
        <MapIllustration />
        {entries.map((e) => (
          <div
            key={e.slug}
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${e.x}%`, top: `${e.y}%` }}
          >
            <span className="flex items-center gap-1.5">
              <span className="flex h-3.5 w-3.5 items-center justify-center rounded-full bg-marigold ring-4 ring-marigold/25" />
              <span className="hidden whitespace-nowrap rounded-full bg-evergreen/90 px-2 py-0.5 text-xs font-medium text-paper sm:inline">
                {e.name}
              </span>
            </span>
          </div>
        ))}
      </div>
    )
  }

  return (
    <div>
      {/* Interactive map — md and up */}
      <div className="relative hidden aspect-[1000/460] w-full overflow-hidden rounded-card border border-line shadow-card md:block">
        <MapIllustration />

        {/* Compass eyebrow */}
        <span className="absolute left-5 top-4 font-display text-xs font-semibold uppercase tracking-[0.18em] text-evergreen/60">
          South Bangalore · SE corridor
        </span>

        {entries.map((e, i) => (
          <Link
            key={e.slug}
            to={`/explore/${e.slug}`}
            className="group absolute -translate-x-1/2 -translate-y-1/2 rounded-2xl focus-visible:outline-none"
            style={{ left: `${e.x}%`, top: `${e.y}%` }}
            aria-label={`${e.name} — ${e.count} properties`}
          >
            <span className="flex flex-col items-center">
              {/* Pin dot */}
              <span className="relative flex h-6 w-6 items-center justify-center">
                <span className="absolute h-6 w-6 rounded-full bg-marigold/25 transition-transform duration-300 group-hover:scale-150" />
                <span className="relative flex h-5 w-5 items-center justify-center rounded-full bg-marigold text-ink shadow-card ring-2 ring-paper">
                  <MapPin className="h-3 w-3" aria-hidden="true" />
                </span>
              </span>
              {/* Label card */}
              <span className="mt-2 flex flex-col items-center rounded-xl border border-line bg-paper/95 px-3 py-1.5 text-center shadow-card backdrop-blur transition-colors group-hover:border-evergreen group-focus-visible:border-evergreen">
                <span className="font-display text-sm font-semibold leading-tight text-evergreen">
                  {e.name}
                </span>
                <span className="tnum text-xs text-sand-600">{e.count} properties</span>
              </span>
              <span className="mt-1 font-display text-[0.65rem] font-semibold uppercase tracking-widest text-marigold-deep">
                Stop {i + 1}
              </span>
            </span>
          </Link>
        ))}
      </div>

      {/* Stacked list fallback — below md */}
      <ul className="flex flex-col gap-3 md:hidden">
        {entries.map((e, i) => (
          <li key={e.slug}>
            <Link
              to={`/explore/${e.slug}`}
              className="group flex items-center gap-4 rounded-card border border-line bg-white p-4 shadow-card transition-colors hover:border-evergreen"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-evergreen text-paper">
                <MapPin className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="flex items-baseline justify-between gap-2">
                  <span className="font-display text-base font-semibold text-evergreen">{e.name}</span>
                  <span className="tnum shrink-0 text-sm text-sand-600">{e.count} homes</span>
                </span>
                <span className="mt-0.5 line-clamp-1 block text-sm text-sand-600">{e.blurb}</span>
              </span>
              <ArrowRight
                className="h-5 w-5 shrink-0 text-sand-400 transition-transform group-hover:translate-x-0.5 group-hover:text-evergreen"
                aria-hidden="true"
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
