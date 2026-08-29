import { Link } from 'react-router-dom'
import {
  ArrowRight,
  BadgeIndianRupee,
  ShieldCheck,
  Timer,
  MapPin,
  MessageCircle,
  Quote,
  Star,
} from 'lucide-react'
import { useDocumentTitle } from '../hooks/useDocumentTitle.js'
import CorridorMap from '../components/CorridorMap.jsx'
import PropertyCard from '../components/PropertyCard.jsx'
import { whatsappHref } from '../lib/contact.js'
import { properties } from '../data/properties.js'

const features = [
  {
    icon: BadgeIndianRupee,
    title: 'Zero brokerage',
    body: 'No commission, no surprise cuts. The rent you see is the rent you pay.',
  },
  {
    icon: ShieldCheck,
    title: 'Verified listings',
    body: 'We visit every home and check the paperwork before it goes live.',
  },
  {
    icon: Timer,
    title: 'Quick move-in',
    body: 'Most homes are ready to occupy. Pick a date, we handle the handover.',
  },
  {
    icon: MapPin,
    title: 'Local support',
    body: "We're on the ground in Bangalore, a phone call away when you need us.",
  },
]

const testimonials = [
  {
    quote:
      'Found a 1 BHK near my office in two days. No broker, no runaround — they just showed me homes that fit my budget.',
    name: 'Ananya R.',
    detail: 'Moved to HSR Layout',
    rating: 5,
  },
  {
    quote:
      'The WhatsApp updates made it easy. I shortlisted three flats from my phone and visited only the one I liked.',
    name: 'Karthik M.',
    detail: 'Moved to Haralur',
    rating: 5,
  },
  {
    quote:
      'Honest about what each place actually had. What I saw on the listing is exactly what I got at the door.',
    name: 'Sneha & Vivek',
    detail: 'Moved to Varthur',
    rating: 5,
  },
]

const featured = properties.slice(0, 3)

export default function Home() {
  useDocumentTitle('Rental homes in Bangalore')
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-white">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary-50 via-white to-white" />
        <div className="wrap relative grid items-center gap-8 py-12 sm:py-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12 lg:py-24">
          <div>
            <p className="eyebrow hero-rise hero-rise-1">
              100+ verified homes &middot; 1,200+ units
            </p>
            <h1 className="mt-4 font-display text-3xl font-bold leading-[1.1] text-gray-900 sm:text-4xl lg:text-5xl hero-rise hero-rise-2">
              Find your perfect
              <br />
              <span className="text-primary">rental home</span>
            </h1>
            <p className="mt-5 max-w-md text-base text-gray-500 sm:text-lg hero-rise hero-rise-3">
              Browse verified rental homes across Bangalore. No brokerage, no jargon — just call, visit, and move in.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 hero-rise hero-rise-4">
              <Link to="/explore" className="btn-primary px-7 py-3.5 text-base">
                Browse homes
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <a
                href={whatsappHref()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn bg-whatsapp px-6 py-3.5 text-base font-semibold text-white hover:brightness-95"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                WhatsApp us
              </a>
            </div>

            <div className="mt-8 flex items-center gap-6 text-sm text-gray-500 hero-rise hero-rise-5">
              <span className="flex items-center gap-1.5">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary-50 text-primary">
                  <ShieldCheck className="h-3 w-3" />
                </span>
                Verified listings
              </span>
              <span className="flex items-center gap-1.5">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary-50 text-primary">
                  <BadgeIndianRupee className="h-3 w-3" />
                </span>
                Zero brokerage
              </span>
            </div>
          </div>

          <div className="relative hero-scale-in">
            <div className="overflow-hidden rounded-2xl shadow-premium lg:rounded-3xl">
              <img
                src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80"
                alt="A bright, furnished apartment interior in Bangalore"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-3 -left-3 hidden rounded-2xl border border-gray-100 bg-white px-5 py-3 shadow-lift sm:block">
              <p className="tnum font-display text-xl font-bold text-primary">₹0</p>
              <p className="text-xs text-gray-500">brokerage, always</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured properties */}
      <section className="section-pad bg-gray-50">
        <div className="wrap">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="eyebrow">Featured properties</p>
              <h2 className="mt-3 font-display text-2xl font-bold text-gray-900 sm:text-3xl">
                Available right now
              </h2>
            </div>
            <Link to="/explore" className="btn-outline hidden sm:inline-flex">
              View all
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((p) => (
              <PropertyCard key={p.id} property={p} />
            ))}
          </div>
          <div className="mt-6 text-center sm:hidden">
            <Link to="/explore" className="btn-outline">
              View all properties
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Rent2Stay */}
      <section className="section-pad">
        <div className="wrap">
          <div className="max-w-2xl">
            <p className="eyebrow">Why Rent2Stay</p>
            <h2 className="mt-3 font-display text-2xl font-bold text-gray-900 sm:text-3xl">
              Renting, minus the middlemen
            </h2>
            <p className="mt-3 text-gray-500">
              We built Rent2Stay so finding a home feels less like negotiating and more like choosing.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f) => (
              <div
                key={f.title}
                className="group rounded-2xl border border-gray-100 bg-white p-6 transition-all hover:border-primary/20 hover:shadow-card"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                  <f.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-4 font-display text-base font-semibold text-gray-900">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-500">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular localities */}
      <section className="section-pad bg-gray-50">
        <div className="wrap">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="max-w-xl">
              <p className="eyebrow">Popular localities</p>
              <h2 className="mt-3 font-display text-2xl font-bold text-gray-900 sm:text-3xl">
                Explore by area
              </h2>
              <p className="mt-3 text-gray-500">
                Browse homes across popular Bangalore neighbourhoods.
              </p>
            </div>
            <Link to="/explore" className="btn-outline hidden sm:inline-flex">
              View all areas
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
          <div className="mt-8">
            <CorridorMap variant="mini" />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-pad">
        <div className="wrap">
          <div className="max-w-2xl">
            <p className="eyebrow">In their words</p>
            <h2 className="mt-3 font-display text-2xl font-bold text-gray-900 sm:text-3xl">
              Renters who found their place
            </h2>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {testimonials.map((t) => (
              <figure
                key={t.name}
                className="flex flex-col rounded-2xl border border-gray-100 bg-white p-6 transition-shadow hover:shadow-card"
              >
                <div className="flex gap-0.5">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" aria-hidden="true" />
                  ))}
                </div>
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-gray-600">
                  "{t.quote}"
                </blockquote>
                <figcaption className="mt-5 border-t border-gray-100 pt-4">
                  <span className="font-display text-sm font-semibold text-gray-900">{t.name}</span>
                  <span className="block text-xs text-gray-500">{t.detail}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="wrap pb-16 sm:pb-20">
        <div className="relative overflow-hidden rounded-2xl bg-primary px-6 py-12 text-center text-white sm:rounded-3xl sm:px-12 sm:py-16">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-primary-light/30 via-transparent to-transparent" />
          <div className="relative mx-auto max-w-xl">
            <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
              Ready to find your next home?
            </h2>
            <p className="mt-3 text-white/80">
              Browse the listings, or send us a message and we'll shortlist a few that fit.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link to="/explore" className="btn bg-white px-7 py-3.5 text-base font-semibold text-primary hover:bg-gray-100">
                Browse homes
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
        </div>
      </section>
    </>
  )
}
