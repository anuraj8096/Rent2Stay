import { Link } from 'react-router-dom'
import { ArrowRight, Search, DoorOpen, KeyRound, MessageCircle } from 'lucide-react'
import { useDocumentTitle } from '../hooks/useDocumentTitle.js'
import { whatsappHref } from '../lib/contact.js'
import { properties, areas } from '../data/properties.js'

const stats = [
  { value: '6', label: 'Years active' },
  { value: `${properties.length}`, label: 'Homes managed' },
  { value: '1,200+', label: 'Happy tenants' },
  { value: `${areas.length}`, label: 'Localities covered' },
]

const steps = [
  {
    icon: Search,
    title: 'Browse',
    body: 'Filter by area, bedrooms and budget. Every listing is one we\u2019ve seen in person.',
  },
  {
    icon: DoorOpen,
    title: 'Visit',
    body: 'Shortlist over call or WhatsApp, then visit only the homes worth your time.',
  },
  {
    icon: KeyRound,
    title: 'Move in',
    body: 'Agree the terms, sign, and pick up the keys. We handle the handover.',
  },
]

export default function About() {
  useDocumentTitle('About us')

  return (
    <div>
      {/* Mission */}
      <section className="bg-evergreen text-paper">
        <div className="wrap py-16 lg:py-20">
          <p className="eyebrow text-marigold">About Rent2Stay</p>
          <h1 className="mt-4 max-w-3xl font-display text-2xl font-bold leading-tight text-paper sm:text-3xl">
            We think renting a home should feel like a welcome, not a hurdle.
          </h1>
          <p className="mt-5 max-w-2xl text-base text-paper/80">
            Rent2Stay started with a simple frustration: finding a decent rental in Bangalore meant
            chasing brokers, paying steep commissions, and hoping the photos matched the flat. So we
            built the opposite. We manage homes across four connected south-Bangalore localities,
            list only what we&rsquo;ve verified in person, and charge tenants zero brokerage. When
            you call, a real person who knows the area picks up.
          </p>
        </div>
      </section>

      {/* Stats strip */}
      <section className="border-b border-line bg-sand-50">
        <div className="wrap grid grid-cols-2 gap-6 py-10 sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center sm:text-left">
              <p className="tnum font-display text-2xl font-bold text-evergreen">{s.value}</p>
              <p className="mt-1 text-sm text-sand-600">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works — a real sequence, so numbering earns its place */}
      <section className="wrap py-16 lg:py-20">
        <div className="max-w-2xl">
          <p className="eyebrow">How it works</p>
          <h2 className="mt-3 font-display text-xl font-bold sm:text-2xl">Three steps, that&rsquo;s it</h2>
          <p className="mt-3 text-sand-600">
            From first browse to keys in hand, here&rsquo;s how a move with Rent2Stay goes.
          </p>
        </div>

        <ol className="mt-10 grid gap-4 md:grid-cols-3">
          {steps.map((s, i) => (
            <li
              key={s.title}
              className="relative rounded-card border border-line bg-white p-6 shadow-card"
            >
              <span className="tnum absolute right-5 top-5 font-display text-2xl font-bold text-line">
                0{i + 1}
              </span>
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-evergreen/10 text-evergreen">
                <s.icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold text-evergreen">{s.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-sand-600">{s.body}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Closing CTA */}
      <section className="wrap pb-20">
        <div className="rounded-card border border-line bg-sand-50 px-6 py-12 text-center sm:px-12">
          <h2 className="font-display text-xl font-bold sm:text-2xl">Have a look around</h2>
          <p className="mx-auto mt-3 max-w-md text-sand-600">
            The best way to understand how we work is to browse a few homes. Start with the area
            closest to your work.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Link to="/explore" className="btn-primary">
              Explore localities
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <a
              href={whatsappHref()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn bg-whatsapp px-6 py-3 font-semibold text-white hover:brightness-95"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
