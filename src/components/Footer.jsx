import { Link } from 'react-router-dom'
import { Home as HomeIcon, Phone, Mail, MessageCircle, MapPin, Instagram, Facebook, Twitter } from 'lucide-react'
import { areas } from '../data/properties.js'
import { telHref, whatsappHref, phoneDisplay, EMAIL, ADDRESS } from '../lib/contact.js'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="mt-auto border-t border-gray-100 bg-gray-50">
      <div className="wrap grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4 lg:py-16">
        {/* Brand */}
        <div className="lg:col-span-1">
          <div className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-white">
              <HomeIcon className="h-4.5 w-4.5" aria-hidden="true" />
            </span>
            <span className="font-display text-xl font-bold text-gray-900">
              Rent<span className="text-primary">2</span>Stay
            </span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-gray-500">
            Zero-brokerage rental homes across Bangalore. We list only what we've verified, and we pick up the phone.
          </p>
        </div>

        {/* Localities */}
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-gray-400">
            Localities
          </h3>
          <ul className="mt-4 space-y-2.5">
            {areas.map((a) => (
              <li key={a.slug}>
                <Link
                  to={`/explore/${a.slug}`}
                  className="text-sm text-gray-600 transition-colors hover:text-primary"
                >
                  {a.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-gray-400">
            Get in touch
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-gray-600">
            <li>
              <a href={telHref} className="inline-flex items-center gap-2.5 hover:text-primary">
                <Phone className="h-4 w-4 shrink-0 text-gray-400" aria-hidden="true" />
                <span className="tnum">{phoneDisplay}</span>
              </a>
            </li>
            <li>
              <a href={`mailto:${EMAIL}`} className="inline-flex items-center gap-2.5 hover:text-primary">
                <Mail className="h-4 w-4 shrink-0 text-gray-400" aria-hidden="true" />
                {EMAIL}
              </a>
            </li>
            <li>
              <a
                href={whatsappHref()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 hover:text-primary"
              >
                <MessageCircle className="h-4 w-4 shrink-0 text-gray-400" aria-hidden="true" />
                WhatsApp us
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gray-400" aria-hidden="true" />
              <span className="text-gray-500">{ADDRESS}</span>
            </li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-gray-400">
            Follow along
          </h3>
          <div className="mt-4 flex gap-2">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-btn h-10 w-10 border border-gray-200 bg-white text-gray-500 hover:border-gray-300 hover:text-primary"
              aria-label="Rent2Stay on Instagram"
            >
              <Instagram className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-btn h-10 w-10 border border-gray-200 bg-white text-gray-500 hover:border-gray-300 hover:text-primary"
              aria-label="Rent2Stay on Facebook"
            >
              <Facebook className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-btn h-10 w-10 border border-gray-200 bg-white text-gray-500 hover:border-gray-300 hover:text-primary"
              aria-label="Rent2Stay on X"
            >
              <Twitter className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
          <div className="mt-6 flex flex-col gap-2 text-sm text-gray-600">
            <Link to="/explore" className="hover:text-primary">
              Explore all areas
            </Link>
            <Link to="/about" className="hover:text-primary">
              About Rent2Stay
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200">
        <div className="wrap flex flex-col items-center justify-between gap-2 py-6 text-xs text-gray-400 sm:flex-row">
          <p>&copy; {year} Rent2Stay. All rights reserved.</p>
          <p>Made in Bengaluru</p>
        </div>
      </div>
    </footer>
  )
}
