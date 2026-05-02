// Oz Montanía — Content loader
// Supports bilingüe (es/en) with fallback to es

import es from '@/content/es.json'
import en from '@/content/en.json'

export type SupportedLocale = 'es' | 'en'

const contentMap = { es, en }

export function getContent(locale?: string) {
  // Try URL-based locale detection on client side
  if (typeof window !== 'undefined' && !locale) {
    const params = new URLSearchParams(window.location.search)
    locale = params.get('lang') || 'es'
  }
  const l = (locale || 'es') as SupportedLocale
  return contentMap[l] || contentMap.es
}

export function getContentSync(): typeof es {
  return es
}
