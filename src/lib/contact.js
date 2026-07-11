// One place to swap in the real number later. Everything downstream derives from it.
export const PHONE_E164 = '1234567891' // country code + number, digits only
export const EMAIL = 'hello@rent2stay.in'
export const ADDRESS = '3rd Floor, Neeladri Road, Electronic City Phase 1, Bengaluru 560100'

export const telHref = `tel:+${PHONE_E164}`

// Human-readable version for display: +91 98765 43210
export const phoneDisplay = `+${PHONE_E164.slice(0, 2)} ${PHONE_E164.slice(2, 7)} ${PHONE_E164.slice(7)}`

const DEFAULT_WA_TEXT =
  "Hi, I'm interested in a property on Rent2Stay"

/**
 * Build a wa.me deep link with URL-encoded prefilled text.
 * @param {string} [message] custom prefill; falls back to the default enquiry line.
 */
export function whatsappHref(message = DEFAULT_WA_TEXT) {
  return `https://wa.me/${PHONE_E164}?text=${encodeURIComponent(message)}`
}
