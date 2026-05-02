// Oz Montanía — WhatsApp helper

export const WHATSAPP_NUMBER = "595981234567" // Replace with real number

export function getWhatsAppUrl(message: string): string {
  const encoded = encodeURIComponent(message)
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`
}
