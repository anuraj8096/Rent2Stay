import { Phone, MessageCircle } from 'lucide-react'
import { telHref, whatsappHref } from '../lib/contact.js'

export default function FloatingContact() {
  return (
    <div className="fixed bottom-4 right-4 z-30 flex flex-col gap-2.5 sm:bottom-6 sm:right-6">
      <a
        href={whatsappHref()}
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-whatsapp text-white shadow-float transition-transform hover:scale-110 active:scale-95 sm:h-14 sm:w-14"
        aria-label="Chat with Rent2Stay on WhatsApp"
      >
        <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden="true" />
      </a>
      <a
        href={telHref}
        className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white shadow-float transition-transform hover:scale-110 active:scale-95 sm:h-14 sm:w-14"
        aria-label="Call Rent2Stay"
      >
        <Phone className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden="true" />
      </a>
    </div>
  )
}
