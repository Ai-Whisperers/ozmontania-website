'use client'

import es from '@/content/es.json'
import { useState } from 'react'

export default function BiografiaPage() {
  const timeline = es.biografia.timeline as any[]
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  return (
    <>
      <section className="pt-24 sm:pt-32 pb-10 sm:pb-16">
        <div className="container-art">
          <div className="max-w-3xl mx-auto px-4 sm:px-0">
            <h1 className="section-title mb-6 sm:mb-8">{es.biografia.title}</h1>
            <p className="text-zinc-400 text-sm sm:text-base md:text-lg leading-relaxed mb-10 sm:mb-12">
              {es.biografia.intro}
            </p>
            {/* Quote */}
            <div className="glass-panel p-5 sm:p-8 mb-12 sm:mb-16 border-l-4 border-l-amber-500">
              <p className="text-base sm:text-xl md:text-2xl font-serif italic text-zinc-200 leading-relaxed">
                &ldquo;{es.biografia.quote}&rdquo;
              </p>
              <p className="mt-3 sm:mt-4 text-xs sm:text-sm text-zinc-500">— {es.biografia.quote_author}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="pb-16 sm:pb-24">
        <div className="container-art">
          <div className="max-w-3xl mx-auto relative px-4 sm:px-0">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-zinc-800 transform md:-translate-x-px" />
            {timeline.map((item: any, i: number) => (
              <div key={i}
                className={`relative flex items-start gap-4 sm:gap-6 mb-10 sm:mb-16 ${
                  i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}>
                <div className="absolute left-4 md:left-1/2 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-amber-500 rounded-full transform -translate-x-1/2 z-10 mt-1.5" />
                <div className={`ml-8 sm:ml-10 md:ml-0 md:w-1/2 ${i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                  <span className="text-amber-500 font-mono text-[10px] sm:text-sm font-bold">{item.year}</span>
                  <h3 className="text-base sm:text-xl font-serif font-bold mt-1 mb-2">{item.event}</h3>
                  <button onClick={() => setExpandedIndex(expandedIndex === i ? null : i)} className="text-left md:text-right">
                    <p className={`text-zinc-400 text-xs sm:text-sm leading-relaxed transition-all ${
                      expandedIndex === i ? '' : 'line-clamp-2'
                    }`}>
                      {item.detail}
                    </p>
                    <span className="text-amber-500 text-[10px] sm:text-xs mt-1 inline-block hover:underline">
                      {expandedIndex === i ? 'Leer menos' : 'Leer más'}
                    </span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Influencias + Filosofía */}
      <section className="pb-16 sm:pb-24">
        <div className="container-art">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto px-4 sm:px-0">
            <div className="glass-panel p-5 sm:p-8">
              <h3 className="text-base sm:text-lg font-serif font-bold mb-4 text-amber-500">
                {es.biografia.section_influencias.title}
              </h3>
              <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                {es.biografia.section_influencias.text}
              </p>
            </div>
            <div className="glass-panel p-5 sm:p-8">
              <h3 className="text-base sm:text-lg font-serif font-bold mb-4 text-amber-500">
                {es.biografia.section_filosofia.title}
              </h3>
              <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                {es.biografia.section_filosofia.text}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
