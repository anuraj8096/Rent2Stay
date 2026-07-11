import { Link } from 'react-router-dom'
import { Home as HomeIcon, Compass } from 'lucide-react'
import { useDocumentTitle } from '../hooks/useDocumentTitle.js'

export default function NotFound() {
  useDocumentTitle('Page not found')

  return (
    <div className="wrap flex min-h-[70vh] flex-col items-center justify-center py-20 text-center">
      <span className="tnum font-display text-3xl font-bold text-marigold">404</span>
      <h1 className="mt-4 font-display text-2xl font-bold">This page took a wrong turn</h1>
      <p className="mt-3 max-w-md text-sand-600">
        The page you&rsquo;re after isn&rsquo;t here. Let&rsquo;s get you back to the homes.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link to="/" className="btn-evergreen">
          <HomeIcon className="h-4 w-4" aria-hidden="true" />
          Go home
        </Link>
        <Link to="/explore" className="btn-outline">
          <Compass className="h-4 w-4" aria-hidden="true" />
          Explore localities
        </Link>
      </div>
    </div>
  )
}
