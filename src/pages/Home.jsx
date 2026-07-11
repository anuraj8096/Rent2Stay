import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import {
  ArrowRight,
  BadgeIndianRupee,
  ShieldCheck,
  Timer,
  MapPin,
  MessageCircle,
  Quote,
} from 'lucide-react'
import { useDocumentTitle } from '../hooks/useDocumentTitle.js'
import CorridorMap from '../components/CorridorMap.jsx'
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
    body: 'We visit every home and check the paperwork before it goes live here.',
  },
  {
    icon: Timer,
    title: 'Quick move-in',
    body: 'Most homes are ready to occupy. Pick a date, we handle the handover.',
  },
  {
    icon: MapPin,
    title: 'Local support',
    body: "We're on the ground in south Bangalore, a phone call away when you need us.",
  },
]

const testimonials = [
  {
    quote:
      'Found a 1 BHK near my office in Electronic City in two days. No broker, no runaround — they just showed me homes that fit my budget.',
    name: 'Ananya R.',
    detail: 'Moved to Electronic City',
  },
  {
    quote:
      'The WhatsApp updates made it easy. I shortlisted three flats in HSR from my phone and visited only the one I liked.',
    name: 'Karthik M.',
    detail: 'Moved to HSR Layout',
  },
  {
    quote:
      'Honest about what each place actually had. What I saw on the listing is exactly what I got at the door.',
    name: 'Sneha & Vivek',
    detail: 'Moved to Begur',
  },
]

export default function Home() {
  useDocumentTitle('Rental homes in South Bangalore')
  const reduce = useReducedMotion()
  const total = properties.length

  const rise = (delay = 0) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 16 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] },
        }

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-evergreen text-paper">
        <div className="wrap grid items-center gap-10 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
          <div>
            <motion.p {...rise(0)} className="eyebrow text-marigold">
              South Bangalore · {total} homes live
            </motion.p>
            <motion.h1
              {...rise(0.08)}
              className="mt-4 font-display text-2xl font-bold leading-[1.05] text-paper sm:text-3xl"
            >
              A place to stay,
              <br />
              found the easy way.
            </motion.h1>
            <motion.p {...rise(0.16)} className="mt-5 max-w-md text-base text-paper/80">
              Browse verified rental homes across Electronic City, Bommanahalli, Begur and HSR
              Layout. No brokerage, no jargon — just call, visit, and move in.
            </motion.p>
            <motion.div {...rise(0.24)} className="mt-8 flex flex-wrap gap-3">
              <Link to="/explore" className="btn-primary">
                Browse homes
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <a
                href={whatsappHref()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn bg-paper/10 px-6 py-3 font-semibold text-paper ring-1 ring-inset ring-paper/25 hover:bg-paper/20"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                Chat on WhatsApp
              </a>
            </motion.div>
          </div>

          <motion.div
            {...(reduce
              ? {}
              : {
                  initial: { opacity: 0, scale: 0.96, y: 20 },
                  animate: { opacity: 1, scale: 1, y: 0 },
                  transition: { duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] },
                })}
            className="relative"
          >
            <div className="overflow-hidden rounded-card shadow-lift ring-1 ring-paper/10">
              <img
                src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80"
                alt="A bright, furnished apartment interior in Bangalore"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 hidden rounded-2xl bg-marigold px-5 py-3 text-ink shadow-card sm:block">
              <p className="tnum font-display text-lg font-bold">₹0</p>
              <p className="text-xs font-medium">brokerage, always</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Why Rent2Stay ────────────────────────────────────── */}
      <section className="wrap py-16 lg:py-20">
        <div className="max-w-2xl">
          <p className="eyebrow">Why Rent2Stay</p>
          <h2 className="mt-3 font-display text-xl font-bold sm:text-2xl">
            Renting, minus the middlemen
          </h2>
          <p className="mt-3 text-sand-600">
            We built Rent2Stay so finding a home feels less like negotiating and more like choosing.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-card border border-line bg-white p-5 shadow-card"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-evergreen/10 text-evergreen">
                <f.icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold text-evergreen">{f.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-sand-600">{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Popular localities (mini map echo) ───────────────── */}
      <section className="bg-sand-50 py-16 lg:py-20">
        <div className="wrap">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="max-w-xl">
              <p className="eyebrow">Popular localities</p>
              <h2 className="mt-3 font-display text-xl font-bold sm:text-2xl">
                Four areas, one easy corridor
              </h2>
              <p className="mt-3 text-sand-600">
                Our homes sit along a single southeast stretch of the city — easy to hop between on a
                viewing day.
              </p>
            </div>
            <Link to="/explore" className="btn-outline">
              Open the map
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="mt-8">
            <CorridorMap variant="mini" />
          </div>
        </div>
      </section>

      {/* ── Testimonials ─────────────────────────────────────── */}
      <section className="wrap py-16 lg:py-20">
        <div className="max-w-2xl">
          <p className="eyebrow">In their words</p>
          <h2 className="mt-3 font-display text-xl font-bold sm:text-2xl">
            Renters who found their place
          </h2>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col rounded-card border border-line bg-white p-6 shadow-card"
            >
              <Quote className="h-7 w-7 text-marigold" aria-hidden="true" />
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-ink">
                {t.quote}
              </blockquote>
              <figcaption className="mt-5 border-t border-line pt-4">
                <span className="font-display font-semibold text-evergreen">{t.name}</span>
                <span className="block text-xs text-sand-600">{t.detail}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* ── Closing CTA ──────────────────────────────────────── */}
      <section className="wrap pb-20">
        <div className="relative overflow-hidden rounded-card bg-evergreen px-6 py-12 text-center text-paper sm:px-12 sm:py-16">
          <div className="relative mx-auto max-w-xl">
            <h2 className="font-display text-xl font-bold text-paper sm:text-2xl">
              Ready to find your next home?
            </h2>
            <p className="mt-3 text-paper/80">
              Browse the listings, or send us a message and we'll shortlist a few that fit.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <Link to="/explore" className="btn-primary">
                Browse homes
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
        </div>
      </section>
    </>
  )
}
