import { Link } from 'react-router-dom'
import { ArrowRight, Search, DoorOpen, KeyRound, MessageCircle } from 'lucide-react'
import { useDocumentTitle } from '../hooks/useDocumentTitle.js'
import { whatsappHref } from '../lib/contact.js'
import { areas } from '../data/properties.js'

const stats = [
  { value: '6', label: 'Years active' },
  { value: '100+', label: 'Properties' },
  { value: '1,200+', label: 'Total units' },
  { value: `${areas.length}+`, label: 'Areas covered' },
]

const steps = [
  {
    icon: Search,
    title: 'Browse',
    body: 'Filter by area, bedrooms and budget. Every listing is one we’ve seen in person.',
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
      {/* Hero */}
      <section className="relative overflow-hidden bg-white">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-primary-50 via-white to-white" />
        <div className="wrap relative py-12 sm:py-16 lg:py-20">
          <p className="eyebrow">About Rent2Stay</p>
          <h1 className="mt-4 max-w-3xl font-display text-2xl font-bold leading-tight text-gray-900 sm:text-3xl lg:text-4xl">
            We think renting a home should feel like a welcome, not a hurdle.
          </h1>
          <p className="mt-5 max-w-2xl text-base text-gray-500 sm:text-lg">
            Rent2Stay started with a simple frustration: finding a decent rental in Bangalore meant
            chasing brokers, paying steep commissions, and hoping the photos matched the flat. So we
            built the opposite. We manage homes across popular Bangalore localities,
            list only what we&rsquo;ve verified in person, and charge tenants zero brokerage.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-gray-100 bg-gray-50">
        <div className="wrap grid grid-cols-2 gap-6 py-10 sm:grid-cols-4 sm:py-12">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="tnum font-display text-3xl font-bold text-primary">{s.value}</p>
              <p className="mt-1 text-sm text-gray-500">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="section-pad">
        <div className="wrap">
          <div className="max-w-2xl">
            <p className="eyebrow">How it works</p>
            <h2 className="mt-3 font-display text-2xl font-bold text-gray-900 sm:text-3xl">
              Three steps, that&rsquo;s it
            </h2>
            <p className="mt-3 text-gray-500">
              From first browse to keys in hand, here&rsquo;s how a move with Rent2Stay goes.
            </p>
          </div>

          <ol className="mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {steps.map((s, i) => (
              <li
                key={s.title}
                className="relative rounded-2xl border border-gray-100 bg-white p-6 transition-all hover:shadow-card"
              >
                <span className="tnum absolute right-5 top-5 font-display text-3xl font-bold text-gray-100">
                  0{i + 1}
                </span>
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary">
                  <s.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold text-gray-900">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-500">{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* CTA */}
      <section className="wrap pb-16 sm:pb-20">
        <div className="rounded-2xl border border-gray-100 bg-gray-50 px-6 py-12 text-center sm:rounded-3xl sm:px-12">
          <h2 className="font-display text-2xl font-bold text-gray-900 sm:text-3xl">Have a look around</h2>
          <p className="mx-auto mt-3 max-w-md text-gray-500">
            The best way to understand how we work is to browse a few homes. Start with the area
            closest to your work.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link to="/explore" className="btn-primary px-7 py-3.5 text-base">
              Explore areas
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <a
              href={whatsappHref()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn bg-whatsapp px-6 py-3.5 text-base font-semibold text-white hover:brightness-95"
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
