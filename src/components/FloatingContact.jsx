import { Phone, MessageCircle } from 'lucide-react'
import { telHref, whatsappHref } from '../lib/contact.js'

// Fixed bottom-right, stacked, thumb-reachable. Present on every page.
export default function FloatingContact() {
  return (
    <div className="fixed bottom-5 right-5 z-30 flex flex-col gap-3">
      <a
        href={whatsappHref()}
        target="_blank"
        rel="noopener noreferrer"
        className="icon-btn h-14 w-14 bg-whatsapp text-white shadow-float transition-transform hover:scale-105 active:scale-95"
        aria-label="Chat with Rent2Stay on WhatsApp"
      >
        <MessageCircle className="h-6 w-6" aria-hidden="true" />
      </a>
      <a
        href={telHref}
        className="icon-btn h-14 w-14 bg-evergreen text-paper shadow-float transition-transform hover:scale-105 active:scale-95"
        aria-label="Call Rent2Stay"
      >
        <Phone className="h-6 w-6" aria-hidden="true" />
      </a>
    </div>
  )
}
