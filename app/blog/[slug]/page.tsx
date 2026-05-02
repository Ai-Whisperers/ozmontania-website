'use client'

import Link from 'next/link'
import { getContent } from '@/lib/content'
import { useParams } from 'next/navigation'
import { getWhatsAppUrl } from '@/lib/whatsapp'

const content = getContent()

export default function BlogPostPage() {
  const params = useParams()
  const slug = params.slug as string
  const items = content.blog.items as any[]
  const post = items.find((p: any) => p.id === slug)

  if (!post) {
    return (
      <section className="pt-32 pb-24 text-center">
        <div className="container-art">
          <h1 className="text-3xl font-serif font-bold mb-4">Artículo no encontrado</h1>
          <Link href="/blog" className="btn-outline">Volver al blog</Link>
        </div>
      </section>
    )
  }

  const shareMsg = `Mirá este artículo de Oz Montanía: ${post.title}`
  const whatsappShare = getWhatsAppUrl(shareMsg)

  return (
    <>
      <section className="pt-28 pb-8">
        <div className="container-art">
          <Link href="/blog" className="text-sm text-zinc-500 hover:text-amber-400 transition-colors">
            ← Volver al blog
          </Link>
        </div>
      </section>

      <article className="pb-24">
        <div className="container-art max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-amber-500/10 text-amber-500 text-xs font-semibold rounded-full">
              {post.category}
            </span>
            <span className="text-zinc-500 text-sm">{post.date}</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-serif font-bold mb-8">{post.title}</h1>

          {/* Hero image placeholder */}
          <div className="aspect-video rounded-2xl bg-gradient-to-br from-zinc-800 to-zinc-900 mb-10 flex items-center justify-center border border-zinc-800/50">
            <div className="text-center">
              <span className="text-4xl block mb-2">📸</span>
              <p className="text-zinc-600 text-sm">{post.title}</p>
            </div>
          </div>

          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-zinc-300 leading-relaxed text-lg">
              {post.excerpt}
            </p>
            <p className="text-zinc-400 leading-relaxed mt-6">
              {post.content || `Artículo completo próximamente. Mientras tanto, seguí a Oz en Instagram para ver el proceso detrás de esta historia.`}
            </p>
          </div>

          {/* Share */}
          <div className="mt-12 pt-8 border-t border-zinc-800/50">
            <p className="text-zinc-500 text-sm mb-3">Compartir este artículo</p>
            <div className="flex gap-3">
              <a href={whatsappShare} target="_blank" rel="noopener noreferrer" className="btn-outline text-sm py-2 px-4">
                WhatsApp
              </a>
              <a href={content.site.instagram_url} target="_blank" rel="noopener noreferrer" className="btn-outline text-sm py-2 px-4">
                Instagram
              </a>
            </div>
          </div>
        </div>
      </article>
    </>
  )
}
