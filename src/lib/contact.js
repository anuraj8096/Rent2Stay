export const PHONE_E164 = '919187359668'
export const EMAIL = 'support@rent2stays.com'
export const ADDRESS = '#407, First Floor, 4th Main Road, West Wing, Krishna Reddy Layout, Amarjyoti Layout, Domlur, Bangalore - 560071'

export const telHref = `tel:+${PHONE_E164}`

export const phoneDisplay = `+91 ${PHONE_E164.slice(2, 7)} ${PHONE_E164.slice(7)}`

const DEFAULT_WA_TEXT =
  "Hi, I'm interested in a property on Rent2Stay"

/**
 * Build a wa.me deep link with URL-encoded prefilled text.
 * @param {string} [message] custom prefill; falls back to the default enquiry line.
 */
export function whatsappHref(message = DEFAULT_WA_TEXT) {
  return `https://wa.me/${PHONE_E164}?text=${encodeURIComponent(message)}`
}
