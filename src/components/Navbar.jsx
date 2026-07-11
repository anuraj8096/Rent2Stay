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
    <Link to="/" className="group flex items-center gap-2" aria-label="Rent2Stay home">
      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-evergreen text-paper transition-colors group-hover:bg-evergreen-light">
        <HomeIcon className="h-5 w-5" aria-hidden="true" />
      </span>
      <span className="font-display text-lg font-bold tracking-tight text-evergreen">
        Rent<span className="text-marigold-deep">2</span>Stay
      </span>
    </Link>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  // Close the drawer whenever the route changes.
  useEffect(() => {
    setOpen(false)
  }, [pathname])

  // Lock body scroll while the drawer is open.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const navLinkClass = ({ isActive }) =>
    [
      'text-base font-medium transition-colors',
      isActive ? 'text-evergreen' : 'text-sand-600 hover:text-evergreen',
    ].join(' ')

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/90 backdrop-blur">
      <nav className="wrap flex h-16 items-center justify-between gap-4">
        <Wordmark />

        {/* Desktop links */}
        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.end} className={navLinkClass}>
              {l.label}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-2">
          {/* One contact action always reachable without opening the drawer */}
          <a
            href={telHref}
            className="hidden items-center gap-2 text-sm font-medium text-evergreen hover:text-evergreen-light sm:inline-flex"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            <span className="tnum">{phoneDisplay}</span>
          </a>

          <a
            href={whatsappHref()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn hidden bg-whatsapp px-4 py-2 text-sm font-semibold text-white hover:brightness-95 sm:inline-flex"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            Chat on WhatsApp
          </a>

          {/* Call button always visible on the smallest screens */}
          <a
            href={telHref}
            className="icon-btn bg-evergreen text-paper hover:bg-evergreen-light sm:hidden"
            aria-label={`Call Rent2Stay at ${phoneDisplay}`}
          >
            <Phone className="h-5 w-5" aria-hidden="true" />
          </a>

          <button
            type="button"
            onClick={() => setOpen(true)}
            className="icon-btn text-evergreen hover:bg-sand-100 md:hidden"
            aria-label="Open menu"
            aria-expanded={open}
          >
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </nav>

      {/* Mobile slide-in drawer */}
      <div
        className={`fixed inset-0 z-50 md:hidden ${open ? '' : 'pointer-events-none'}`}
        aria-hidden={!open}
      >
        <div
          className={`absolute inset-0 bg-ink/40 transition-opacity duration-300 ${
            open ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setOpen(false)}
        />
        <div
          className={`absolute right-0 top-0 flex h-full w-72 max-w-[80%] flex-col bg-paper shadow-lift transition-transform duration-300 ease-out ${
            open ? 'translate-x-0' : 'translate-x-full'
          }`}
          role="dialog"
          aria-label="Menu"
        >
          <div className="flex h-16 items-center justify-between border-b border-line px-5">
            <span className="font-display font-semibold text-evergreen">Menu</span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="icon-btn text-evergreen hover:bg-sand-100"
              aria-label="Close menu"
            >
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          <div className="flex flex-col gap-1 p-4">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.end}
                className={({ isActive }) =>
                  [
                    'rounded-xl px-4 py-3 text-lg font-medium transition-colors',
                    isActive
                      ? 'bg-sand-100 text-evergreen'
                      : 'text-sand-600 hover:bg-sand-100 hover:text-evergreen',
                  ].join(' ')
                }
              >
                {l.label}
              </NavLink>
            ))}
          </div>

          <div className="mt-auto flex flex-col gap-3 border-t border-line p-4">
            <a href={telHref} className="btn-outline w-full">
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
