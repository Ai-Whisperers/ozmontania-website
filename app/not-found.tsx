import Link from 'next/link'
import { getContentSync } from '@/lib/content'

const content = getContentSync()

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center px-6">
        <div className="text-8xl mb-6">🎨</div>
        <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">
          {content.not_found.title}
        </h1>
        <p className="text-xl text-zinc-400 mb-8 font-serif italic">
          &ldquo;{content.not_found.message}&rdquo;
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="btn-primary">
            {content.not_found.cta}
          </Link>
          <Link href="/murales" className="btn-outline">
            {content.not_found.subtext}
          </Link>
        </div>
      </div>
    </div>
  )
}
