import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X, Phone, MessageCircle, Home as HomeIcon } from 'lucide-react'
import { telHref, whatsappHref, phoneDisplay } from '../lib/contact.js'

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/explore', label: 'Explore' },
  { to: '/about', label: 'About' },
]

function Wordmark() {
  return (
    <Link to="/" className="group flex items-center gap-2.5" aria-label="Rent2Stay home">
      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-white transition-colors group-hover:bg-primary-light">
        <HomeIcon className="h-4.5 w-4.5" aria-hidden="true" />
      </span>
      <span className="font-display text-xl font-bold tracking-tight text-gray-900">
        Rent<span className="text-primary">2</span>Stay
      </span>
    </Link>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const navLinkClass = ({ isActive }) =>
    [
      'text-sm font-medium transition-colors relative py-1',
      isActive
        ? 'text-primary'
        : 'text-gray-500 hover:text-gray-900',
    ].join(' ')

  return (
    <header className="sticky top-0 z-40 border-b border-gray-100 bg-white/95 backdrop-blur-md">
      <nav className="wrap flex h-16 items-center justify-between gap-4">
        <Wordmark />

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.end} className={navLinkClass}>
              {l.label}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href={telHref}
            className="hidden items-center gap-2 rounded-full border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:border-gray-300 hover:bg-gray-50 lg:inline-flex"
          >
            <Phone className="h-3.5 w-3.5" aria-hidden="true" />
            <span className="tnum">{phoneDisplay}</span>
          </a>

          <a
            href={whatsappHref()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn hidden bg-whatsapp px-4 py-2 text-sm font-semibold text-white hover:brightness-95 sm:inline-flex"
          >
            <MessageCircle className="h-3.5 w-3.5" aria-hidden="true" />
            WhatsApp
          </a>

          <a
            href={telHref}
            className="icon-btn h-10 w-10 bg-primary text-white hover:bg-primary-light sm:hidden"
            aria-label={`Call Rent2Stay at ${phoneDisplay}`}
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
          </a>

          <button
            type="button"
            onClick={() => setOpen(true)}
            className="icon-btn h-10 w-10 text-gray-700 hover:bg-gray-100 md:hidden"
            aria-label="Open menu"
            aria-expanded={open}
          >
            <Menu className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </nav>

      {/* Mobile slide-in drawer */}
      <div
        className={`fixed inset-0 z-50 md:hidden ${open ? '' : 'pointer-events-none'}`}
        aria-hidden={!open}
      >
        <div
          className={`absolute inset-0 bg-black/30 backdrop-blur-sm transition-opacity duration-300 ${
            open ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setOpen(false)}
        />
        <div
          className={`absolute right-0 top-0 flex h-full w-[280px] max-w-[85%] flex-col bg-white shadow-premium transition-transform duration-300 ease-out ${
            open ? 'translate-x-0' : 'translate-x-full'
          }`}
          role="dialog"
          aria-label="Menu"
        >
          <div className="flex h-16 items-center justify-between border-b border-gray-100 px-5">
            <span className="font-display text-lg font-bold text-gray-900">Menu</span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="icon-btn h-10 w-10 text-gray-500 hover:bg-gray-100"
              aria-label="Close menu"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>

          <div className="flex flex-col gap-1 p-3">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.end}
                className={({ isActive }) =>
                  [
                    'rounded-xl px-4 py-3.5 text-base font-medium transition-colors',
                    isActive
                      ? 'bg-primary-50 text-primary'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                  ].join(' ')
                }
              >
                {l.label}
              </NavLink>
            ))}
          </div>

          <div className="mt-auto flex flex-col gap-3 border-t border-gray-100 p-4">
            <a href={telHref} className="btn-outline w-full py-3">
              <Phone className="h-4 w-4" aria-hidden="true" />
              <span className="tnum">{phoneDisplay}</span>
            </a>
            <a
              href={whatsappHref()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn w-full bg-whatsapp px-5 py-3 font-semibold text-white hover:brightness-95"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
