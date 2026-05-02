import Link from 'next/link'
import { getContentSync } from '@/lib/content'
import Hero from '@/components/hero'
import FeaturedWorks from '@/components/featured-works'

const content = getContentSync()

export default function HomePage() {
  return (
    <>
      <Hero />
      
      {/* Stats section */}
      <section className="py-20 border-b border-zinc-800/50">
        <div className="container-art">
          <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto">
            {content.stats.map((stat, i) => (
              <div key={i} className="text-center animate-fade-in-up" style={{ animationDelay: `${i * 0.15}s` }}>
                <div className="text-3xl md:text-5xl font-serif font-bold text-amber-500">
                  {stat.number}
                </div>
                <div className="mt-2 text-sm md:text-base text-zinc-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured works */}
      <FeaturedWorks />

      {/* CTA section */}
      <section className="py-24 bg-gradient-to-b from-zinc-950 via-zinc-900/50 to-zinc-950">
        <div className="container-art text-center">
          <h2 className="section-title mb-4">¿Querés un mural?</h2>
          <p className="section-subtitle mx-auto mb-8">
            Trabajemos juntos en tu próximo proyecto. Murales comerciales, institucionales o colaboraciones artísticas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contacto" className="btn-primary">
              {content.hero.cta_secondary}
            </Link>
            <Link href="/obra" className="btn-outline">
              {content.hero.cta_primary}
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
