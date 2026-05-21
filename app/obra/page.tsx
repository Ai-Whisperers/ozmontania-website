'use client'

import Link from 'next/link'
import es from '@/content/es.json'
import { useState } from 'react'

export default function ObraPage() {
  const [activeCategory, setActiveCategory] = useState('Todas')
  const items = es.obra.items as any[]
  const categories = es.obra.categories as string[]
  const filtered = activeCategory === 'Todas' ? items : items.filter((item) => item.category === activeCategory)

  return (
    <>
      <section className="pt-24 sm:pt-32 pb-10 sm:pb-16">
        <div className="container-art text-center">
          <h1 className="section-title mb-4">{es.obra.title}</h1>
          <p className="section-subtitle mx-auto text-sm sm:text-base">{es.obra.description}</p>
        </div>
      </section>

      <section className="pb-8 sm:pb-12">
        <div className="container-art">
          <div className="flex flex-wrap justify-center gap-2 px-4 sm:px-0">
            {categories.map((cat) => (
              <button key={cat} onClick={() => setActiveCategory(cat)}
                className={`px-3 sm:px-5 py-1.5 sm:py-2 rounded-full text-[10px] sm:text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat ? 'bg-amber-500 text-zinc-950' : 'bg-zinc-900 text-zinc-400 hover:text-amber-400 border border-zinc-800'
                }`}>
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-16 sm:pb-24">
        <div className="container-art">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 px-4 sm:px-0">
            {filtered.map((item: any) => (
              <Link key={item.id} href={`/obra/${item.id}`}
                className="group relative overflow-hidden rounded-2xl aspect-[4/3] bg-zinc-900 border border-zinc-800/50 transition-all duration-500 hover:scale-[1.02] hover:border-amber-500/30">
                <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-zinc-900" />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />
                {item.featured && (
                  <div className="absolute top-3 sm:top-4 left-3 sm:left-4 z-10">
                    <span className="px-2 sm:px-3 py-0.5 sm:py-1 bg-amber-500 text-zinc-950 text-[10px] sm:text-xs font-semibold rounded-full">Destacado</span>
                  </div>
                )}
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] sm:text-xs text-amber-500 font-medium">{item.category}</span>
                    <span className="text-zinc-600 text-[10px]">·</span>
                    <span className="text-xs text-zinc-500">{item.year}</span>
                  </div>
                  <h3 className="text-sm sm:text-lg font-serif font-bold text-white">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-zinc-400 mt-1">{item.location}</p>
                </div>
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-amber-500/30 rounded-2xl transition-all duration-500" />
              </Link>
            ))}
          </div>
          {filtered.length === 0 && (
            <div className="text-center py-20 text-zinc-500 text-sm">No hay obras en esta categoría.</div>
          )}
        </div>
      </section>
    </>
  )
}
