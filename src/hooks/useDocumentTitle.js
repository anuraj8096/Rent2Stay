import { useEffect } from 'react'

/**
 * Sets document.title for the lifetime of the mounted route and restores
 * the previous title on unmount. Small enough to avoid a Helmet dependency.
 */
export function useDocumentTitle(title) {
  useEffect(() => {
    const previous = document.title
    document.title = title ? `${title} · Rent2Stay` : 'Rent2Stay'
    return () => {
      document.title = previous
    }
  }, [title])
}
