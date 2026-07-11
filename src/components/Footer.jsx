import { Link } from 'react-router-dom'
import { Home as HomeIcon, Phone, Mail, MessageCircle, MapPin, Instagram, Facebook, Twitter } from 'lucide-react'
import { areas } from '../data/properties.js'
import { telHref, whatsappHref, phoneDisplay, EMAIL, ADDRESS } from '../lib/contact.js'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="mt-20 bg-evergreen-deep text-paper">
      <div className="wrap grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        {/* Blurb */}
        <div className="lg:col-span-1">
          <div className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-paper/10 text-paper">
              <HomeIcon className="h-5 w-5" aria-hidden="true" />
            </span>
            <span className="font-display text-lg font-bold">
              Rent<span className="text-marigold">2</span>Stay
            </span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-paper/70">
            Zero-brokerage rental homes across south Bangalore. We list only what we've verified, and
            we pick up the phone.
          </p>
        </div>

        {/* Localities */}
        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-[0.16em] text-marigold">
            Localities
          </h3>
          <ul className="mt-4 space-y-2.5">
            {areas.map((a) => (
              <li key={a.slug}>
                <Link
                  to={`/explore/${a.slug}`}
                  className="text-sm text-paper/80 transition-colors hover:text-paper"
                >
                  {a.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-[0.16em] text-marigold">
            Get in touch
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-paper/80">
            <li>
              <a href={telHref} className="inline-flex items-center gap-2.5 hover:text-paper">
                <Phone className="h-4 w-4 shrink-0 text-marigold" aria-hidden="true" />
                <span className="tnum">{phoneDisplay}</span>
              </a>
            </li>
            <li>
              <a href={`mailto:${EMAIL}`} className="inline-flex items-center gap-2.5 hover:text-paper">
                <Mail className="h-4 w-4 shrink-0 text-marigold" aria-hidden="true" />
                {EMAIL}
              </a>
            </li>
            <li>
              <a
                href={whatsappHref()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 hover:text-paper"
              >
                <MessageCircle className="h-4 w-4 shrink-0 text-marigold" aria-hidden="true" />
                WhatsApp us
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-marigold" aria-hidden="true" />
              <span className="text-paper/70">{ADDRESS}</span>
            </li>
          </ul>
        </div>

        {/* Social + quick nav */}
        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-[0.16em] text-marigold">
            Follow along
          </h3>
          <div className="mt-4 flex gap-3">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-btn bg-paper/10 text-paper hover:bg-paper/20"
              aria-label="Rent2Stay on Instagram"
            >
              <Instagram className="h-5 w-5" aria-hidden="true" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-btn bg-paper/10 text-paper hover:bg-paper/20"
              aria-label="Rent2Stay on Facebook"
            >
              <Facebook className="h-5 w-5" aria-hidden="true" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-btn bg-paper/10 text-paper hover:bg-paper/20"
              aria-label="Rent2Stay on X"
            >
              <Twitter className="h-5 w-5" aria-hidden="true" />
            </a>
          </div>
          <div className="mt-6 flex flex-col gap-2 text-sm text-paper/80">
            <Link to="/explore" className="hover:text-paper">
              Explore all areas
            </Link>
            <Link to="/about" className="hover:text-paper">
              About Rent2Stay
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-paper/10">
        <div className="wrap flex flex-col items-center justify-between gap-2 py-6 text-xs text-paper/60 sm:flex-row">
          <p>© {year} Rent2Stay. All rights reserved.</p>
          <p>Made in Bengaluru · Listings updated regularly</p>
        </div>
      </div>
    </footer>
  )
}
