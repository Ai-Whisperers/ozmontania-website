'use client'

import Link from 'next/link'
import es from '@/content/es.json'
import { useEffect, useState } from 'react'

const featured = es.obra.items.filter((item: any) => item.featured)

export default function FeaturedWorks() {
  const [visible, setVisible] = useState(false)
  useEffect(() => { setVisible(true) }, [])

  return (
    <section className="py-12 sm:py-24">
      <div className="container-art">
        <div className="text-center mb-10 sm:mb-16 px-4 sm:px-0">
          <h2 className="section-title mb-4">{es.obra.title}</h2>
          <p className="section-subtitle mx-auto text-sm sm:text-base">{es.obra.description}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {featured.map((item: any, i: number) => (
            <Link
              key={item.id}
              href={`/obra/${item.id}`}
              className="group relative overflow-hidden rounded-2xl aspect-[4/3] bg-zinc-900 border border-zinc-800/50
                         transition-all duration-500 hover:scale-[1.02] hover:border-amber-500/30"
              style={{
                animation: visible ? `fadeInUp 0.7s ease-out ${i * 0.15}s forwards` : 'none',
                opacity: 0,
              }}
            >
              {/* Placeholder gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-zinc-900" />

              {/* Content overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                <p className="text-[10px] sm:text-xs text-amber-500 font-medium uppercase tracking-wider mb-1">
                  {item.category} · {item.year}
                </p>
                <h3 className="text-base sm:text-xl font-serif font-bold text-white">{item.title}</h3>
                <p className="text-xs sm:text-sm text-zinc-400 mt-1">{item.location}</p>
              </div>

              {/* Hover effect */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-amber-500/30 rounded-2xl transition-all duration-500" />
            </Link>
          ))}
        </div>

        <div className="text-center mt-8 sm:mt-12">
          <Link href="/obra" className="btn-outline text-sm sm:text-base">
            Ver todas las obras
          </Link>
        </div>
      </div>
    </section>
  )
}
