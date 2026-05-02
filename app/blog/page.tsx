'use client'

import Link from 'next/link'
import { getContent } from '@/lib/content'

const content = getContent()

export default function BlogPage() {
  const items = content.blog.items as any[]

  return (
    <>
      <section className="pt-32 pb-16">
        <div className="container-art text-center">
          <h1 className="section-title mb-4">{content.blog.title}</h1>
          <p className="section-subtitle mx-auto">{content.blog.description}</p>
        </div>
      </section>

      <section className="pb-24">
        <div className="container-art">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((post: any) => (
              <Link
                key={post.id}
                href={`/blog/${post.id}`}
                className="glass-panel overflow-hidden group transition-all duration-300 hover:border-amber-500/30 hover:scale-[1.02]"
              >
                <div className="aspect-video bg-gradient-to-br from-zinc-800 to-zinc-900 flex items-center justify-center">
                  <span className="text-3xl">📝</span>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[10px] font-semibold text-amber-500 uppercase tracking-wider">
                      {post.category}
                    </span>
                    <span className="text-zinc-600 text-[10px]">·</span>
                    <span className="text-zinc-500 text-[10px]">{post.date}</span>
                  </div>
                  <h3 className="font-serif font-bold text-zinc-100 group-hover:text-amber-400 transition-colors mb-2">
                    {post.title}
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
