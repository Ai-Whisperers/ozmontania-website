'use client'

import Link from 'next/link'
import { getContent } from '@/lib/content'
import { useState } from 'react'

const content = getContent()

export default function ObraPage() {
  const [activeCategory, setActiveCategory] = useState('Todas')

  const items = content.obra.items as any[]
  const categories = content.obra.categories as string[]
  const filtered = activeCategory === 'Todas'
    ? items
    : items.filter((item) => item.category === activeCategory)

  return (
    <>
      {/* Page header */}
      <section className="pt-32 pb-16">
        <div className="container-art text-center">
          <h1 className="section-title mb-4">{content.obra.title}</h1>
          <p className="section-subtitle mx-auto">{content.obra.description}</p>
        </div>
      </section>

      {/* Filters */}
      <section className="pb-12">
        <div className="container-art">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-amber-500 text-zinc-950'
                    : 'bg-zinc-900 text-zinc-400 hover:text-amber-400 border border-zinc-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery grid */}
      <section className="pb-24">
        <div className="container-art">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((item, i) => (
              <Link
                key={item.id}
                href={`/obra/${item.id}`}
                className="group relative overflow-hidden rounded-2xl aspect-[4/3] bg-zinc-900 border border-zinc-800/50
                           transition-all duration-500 hover:scale-[1.02] hover:border-amber-500/30"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-zinc-900" />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />

                {item.featured && (
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1 bg-amber-500 text-zinc-950 text-xs font-semibold rounded-full">
                      Destacado
                    </span>
                  </div>
                )}

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs text-amber-500 font-medium">{item.category}</span>
                    <span className="text-xs text-zinc-600">·</span>
                    <span className="text-xs text-zinc-500">{item.year}</span>
                  </div>
                  <h3 className="text-lg font-serif font-bold text-white">{item.title}</h3>
                  <p className="text-sm text-zinc-400 mt-1">{item.location}</p>
                </div>

                <div className="absolute inset-0 border-2 border-transparent group-hover:border-amber-500/30 rounded-2xl transition-all duration-500" />
              </Link>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-zinc-500">
              No hay obras en esta categoría.
            </div>
          )}
        </div>
      </section>
    </>
  )
}
