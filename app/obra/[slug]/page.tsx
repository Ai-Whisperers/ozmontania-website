'use client'

import Link from 'next/link'
import es from '@/content/es.json'
import { useParams } from 'next/navigation'
import { getWhatsAppUrl } from '@/lib/whatsapp'
import type { SiteContent, ObraItem } from '@/types/content'
import ImageGallery from '@/components/image-gallery'
import Reveal from '@/components/reveal'

const content = es as unknown as SiteContent

export default function ObraDetailPage() {
  const params = useParams()
  const slug = params.slug as string
  const items = content.obra.items as ObraItem[]
  const obra = items.find((i: ObraItem) => i.id === slug)

  if (!obra) {
    return (
      <section className="pt-24 sm:pt-32 pb-16 sm:pb-24 text-center">
        <div className="container-art">
          <h1 className="text-2xl sm:text-3xl font-serif font-bold mb-4">Obra no encontrada</h1>
          <Link href="/obra" className="btn-outline">Volver a obras</Link>
        </div>
      </section>
    )
  }

  const waMessage = obra.has_print
    ? `Hola Oz! Me interesa "${obra.title}" — ¿tenés prints disponibles?`
    : `Hola Oz! Me interesa "${obra.title}" — ¿me podés contar más?`
  const whatsappUrl = getWhatsAppUrl(waMessage)

  const galleryImages = obra.images.map((src, i) => ({
    src,
    alt: `${obra.title} — imagen ${i + 1}`,
  }))

  return (
    <>
      {/* Back link */}
      <section className="pt-20 sm:pt-28 pb-6 sm:pb-8">
        <div className="container-art">
          <Link href="/obra" className="text-xs sm:text-sm text-zinc-500 hover:text-amber-400 transition-colors">
            ← Volver a obras
          </Link>
        </div>
      </section>

      <section className="pb-16 sm:pb-24">
        <div className="container-art">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            {/* Gallery */}
            <Reveal variant="left">
              <ImageGallery images={galleryImages} title={obra.title} />
            </Reveal>

            {/* Info */}
            <Reveal variant="right" delay={150}>
              <div className="px-4 sm:px-0">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-amber-500/10 text-amber-500 text-[10px] sm:text-xs font-semibold rounded-full">
                    {obra.category}
                  </span>
                  <span className="text-zinc-500 text-xs sm:text-sm">{obra.year}</span>
                </div>

                <h1 className="text-2xl sm:text-4xl md:text-5xl font-serif font-bold mb-4 sm:mb-6">{obra.title}</h1>

                <div className="space-y-2 sm:space-y-3 text-zinc-400 mb-6 sm:mb-8 text-xs sm:text-sm">
                  {obra.location && (
                    <p><span className="text-zinc-500 font-medium">Ubicación: </span>{obra.location}</p>
                  )}
                  {obra.technique && (
                    <p><span className="text-zinc-500 font-medium">Técnica: </span>{obra.technique}</p>
                  )}
                  {obra.dimensions && (
                    <p><span className="text-zinc-500 font-medium">Dimensiones: </span>{obra.dimensions}</p>
                  )}
                </div>

                <p className="text-zinc-300 leading-relaxed mb-8 sm:mb-10 text-sm sm:text-base">
                  {obra.description}
                </p>

                <div className="flex flex-col sm:flex-row gap-3">
                  {obra.has_print && (
                    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-primary text-sm sm:text-base justify-center">
                      Comprar print — ${obra.print_price} USD
                    </a>
                  )}
                  <Link href="/contacto" className="btn-outline text-sm sm:text-base justify-center">
                    Solicitar obra similar
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  )
}
