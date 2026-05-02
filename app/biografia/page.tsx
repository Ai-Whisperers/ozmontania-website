'use client'

import { getContent } from '@/lib/content'
import { useState } from 'react'

const content = getContent()

export default function BiografiaPage() {
  const timeline = content.biografia.timeline as any[]
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  return (
    <>
      <section className="pt-32 pb-16">
        <div className="container-art">
          <div className="max-w-3xl mx-auto">
            <h1 className="section-title mb-8">{content.biografia.title}</h1>
            <p className="text-zinc-400 text-lg leading-relaxed mb-12">
              {content.biografia.intro}
            </p>

            {/* Quote */}
            <div className="glass-panel p-8 mb-16 border-l-4 border-l-amber-500">
              <p className="text-xl md:text-2xl font-serif italic text-zinc-200 leading-relaxed">
                &ldquo;{content.biografia.quote}&rdquo;
              </p>
              <p className="mt-4 text-sm text-zinc-500">— {content.biografia.quote_author}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="pb-24">
        <div className="container-art">
          <div className="max-w-3xl mx-auto relative">
            {/* Vertical line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-zinc-800 transform md:-translate-x-px" />

            {timeline.map((item, i) => (
              <div
                key={i}
                className={`relative flex items-start gap-6 mb-12 md:mb-16 ${
                  i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-amber-500 rounded-full transform -translate-x-1/2 z-10 mt-1.5" />

                {/* Content */}
                <div className={`ml-10 md:ml-0 md:w-1/2 ${i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                  <span className="text-amber-500 font-mono text-sm font-bold">{item.year}</span>
                  <h3 className="text-xl font-serif font-bold mt-1 mb-2">{item.event}</h3>
                  
                  <button
                    onClick={() => setExpandedIndex(expandedIndex === i ? null : i)}
                    className="text-left md:text-right"
                  >
                    <p className={`text-zinc-400 text-sm leading-relaxed transition-all ${
                      expandedIndex === i ? '' : 'line-clamp-2'
                    }`}>
                      {item.detail}
                    </p>
                    <span className="text-amber-500 text-xs mt-1 inline-block hover:underline">
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
      <section className="pb-24">
        <div className="container-art">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="glass-panel p-8">
              <h3 className="text-lg font-serif font-bold mb-4 text-amber-500">
                {content.biografia.section_influencias.title}
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                {content.biografia.section_influencias.text}
              </p>
            </div>
            <div className="glass-panel p-8">
              <h3 className="text-lg font-serif font-bold mb-4 text-amber-500">
                {content.biografia.section_filosofia.title}
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                {content.biografia.section_filosofia.text}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
