// Oz Montanía — Messaging helper
// Phone number sourced from content JSON

import es from '@/content/es.json'
import type { SiteContent } from '@/types/content'
const content = es as unknown as SiteContent

export function getMessagingUrl(message: string): string {
  const number = content.site.messaging
  const encoded = encodeURIComponent(message)
  return `tel:+${number}?text=${encoded}`
}
