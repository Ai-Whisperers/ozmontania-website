'use client'

import Link from 'next/link'
import { getContent } from '@/lib/content'
import { useParams } from 'next/navigation'
import { getWhatsAppUrl } from '@/lib/whatsapp'
import { useState } from 'react'

const content = getContent()

export default function ObraDetailPage() {
  const params = useParams()
  const slug = params.slug as string
  const items = content.obra.items as any[]
  const obra = items.find((i) => i.id === slug)

  if (!obra) {
    return (
      <section className="pt-32 pb-24 text-center">
        <div className="container-art">
          <h1 className="text-3xl font-serif font-bold mb-4">Obra no encontrada</h1>
          <Link href="/obra" className="btn-outline">Volver a obras</Link>
        </div>
      </section>
    )
  }

  const [imageIndex, setImageIndex] = useState(0)
  const hasPrints = obra.has_print
  const waMessage = `Hola Oz! Me interesa "${obra.title}" — ¿tenés prints disponibles?`
  const whatsappUrl = getWhatsAppUrl(waMessage)

  return (
    <>
      {/* Back link */}
      <section className="pt-28 pb-8">
        <div className="container-art">
          <Link href="/obra" className="text-sm text-zinc-500 hover:text-amber-400 transition-colors">
            ← Volver a obras
          </Link>
        </div>
      </section>

      <section className="pb-24">
        <div className="container-art">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Image */}
            <div>
              <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-zinc-800 to-zinc-900 border border-zinc-800/50 overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-zinc-600">
                  <div className="text-center p-8">
                    <svg className="w-16 h-16 mx-auto mb-4 opacity-30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p className="text-sm">Imagen de {obra.title}</p>
                    <p className="text-xs mt-2 text-zinc-700">(Agregar foto real)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Info */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-amber-500/10 text-amber-500 text-xs font-semibold rounded-full">
                  {obra.category}
                </span>
                <span className="text-zinc-500 text-sm">{obra.year}</span>
              </div>

              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">{obra.title}</h1>

              <div className="space-y-3 text-zinc-400 mb-8">
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

              <p className="text-zinc-300 leading-relaxed mb-10">
                {obra.description}
              </p>

              <div className="flex flex-wrap gap-3">
                {hasPrints && (
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
                    Comprar print — ${obra.print_price} USD
                  </a>
                )}
                <Link href="/contacto" className="btn-outline">
                  Solicitar obra similar
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
