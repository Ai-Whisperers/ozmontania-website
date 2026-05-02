'use client'

import Link from 'next/link'
import { getContent } from '@/lib/content'
import { getWhatsAppUrl } from '@/lib/whatsapp'
import { useEffect, useState } from 'react'

const content = getContent()

export default function Hero() {
  const [loaded, setLoaded] = useState(false)
  useEffect(() => { setLoaded(true) }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950" />
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />

      {/* Grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="container-art relative z-10 text-center">
        <div className={`max-w-4xl mx-auto transition-all duration-1000 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Subtitle */}
          <p className="text-amber-500 font-medium text-sm md:text-base tracking-widest uppercase mb-6">
            {content.hero.subheadline}
          </p>

          {/* Name */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold tracking-tight mb-6">
            {content.hero.headline}
          </h1>

          {/* Description */}
          <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto mb-10">
            {content.hero.description}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/obra" className="btn-primary text-base">
              {content.hero.cta_primary}
            </Link>
            <Link href="/contacto" className="btn-outline text-base">
              {content.hero.cta_secondary}
            </Link>
          </div>

          {/* Social proof */}
          <div className="mt-16 flex items-center justify-center gap-8 text-zinc-600">
            <a href={content.site.instagram_url} target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors text-sm">
              Instagram
            </a>
            <a href={content.site.facebook_url} target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors text-sm">
              Facebook
            </a>
            <a href={getWhatsAppUrl(content.contacto.whatsapp_message)} target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors text-sm">
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-zinc-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}
