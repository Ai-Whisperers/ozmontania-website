import Link from 'next/link'
import es from '@/content/es.json'
import Hero from '@/components/hero'
import FeaturedWorks from '@/components/featured-works'
import Testimonials from '@/components/testimonials'
import Reveal from '@/components/reveal'
import type { SiteContent } from '@/types/content'

const content = es as unknown as SiteContent

export default function HomePage() {
  return (
    <>
      <Hero />
      
      {/* Stats section */}
      <section className="py-12 sm:py-20 border-b border-zinc-800/50">
        <div className="container-art">
          <div className="grid grid-cols-3 gap-4 sm:gap-8 max-w-3xl mx-auto">
            {content.stats.map((stat, i) => (
              <Reveal key={i} variant="up" delay={i * 150}>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl md:text-5xl font-serif font-bold text-amber-500">
                    {stat.number}
                  </div>
                  <div className="mt-1 sm:mt-2 text-xs sm:text-sm md:text-base text-zinc-400">
                    {stat.label}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Featured works */}
      <FeaturedWorks />

      {/* Testimonials */}
      <Testimonials />

      {/* CTA section */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-zinc-950 via-zinc-900/50 to-zinc-950">
        <div className="container-art text-center px-4 sm:px-0">
          <Reveal variant="scale">
            <h2 className="section-title mb-4">¿Querés un mural?</h2>
            <p className="section-subtitle mx-auto mb-6 sm:mb-8 text-sm sm:text-base">
              Trabajemos juntos en tu próximo proyecto. Murales comerciales, institucionales o colaboraciones artísticas.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link href="/contacto" className="btn-primary text-sm sm:text-base justify-center">
                {content.hero.cta_secondary}
              </Link>
              <Link href="/obra" className="btn-outline text-sm sm:text-base justify-center">
                {content.hero.cta_primary}
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
