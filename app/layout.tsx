import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import Header from '@/components/header'
import Footer from '@/components/footer'
import WhatsAppFloat from '@/components/whatsapp-float'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
})

export const metadata: Metadata = {
  title: 'Oz Montanía — Artista visual paraguayo',
  description: 'Oz Montanía (Oscar Montanía Villar) — Artista visual, muralista e ilustrador paraguayo. Más de 20 años transformando muros en historias.',
  openGraph: {
    title: 'Oz Montanía',
    description: 'Artista visual, muralista e ilustrador paraguayo',
    url: 'https://ozmontania.paragu-ai.com',
    siteName: 'Oz Montanía',
    locale: 'es_PY',
    type: 'website',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="min-h-screen bg-zinc-950 text-zinc-100 font-sans antialiased">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  )
}
