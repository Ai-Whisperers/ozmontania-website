// Oz Montanía — WhatsApp helper
// Phone number sourced from content JSON, not hardcoded

import es from '@/content/es.json'

export function getWhatsAppUrl(message: string): string {
  const number = es.site.whatsapp
  const encoded = encodeURIComponent(message)
  return `https://wa.me/${number}?text=${encoded}`
}
