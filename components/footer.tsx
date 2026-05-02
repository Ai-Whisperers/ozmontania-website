import Link from 'next/link'
import { getContentSync } from '@/lib/content'

const content = getContentSync()

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800/50 bg-zinc-950">
      <div className="container-art py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="text-2xl font-serif font-bold">
              Oz<span className="text-amber-500"> Montanía</span>
            </Link>
            <p className="mt-3 text-zinc-500 text-sm max-w-sm">
              {content.footer.tagline}
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href={content.site.instagram_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-500 hover:text-amber-400 transition-colors text-sm"
              >
                Instagram
              </a>
              <a
                href={content.site.facebook_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-500 hover:text-amber-400 transition-colors text-sm"
              >
                Facebook
              </a>
            </div>
          </div>

          {/* Nav links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-zinc-400 mb-4">
              {Object.values(content.footer.links)[0]?.title || 'Links'}
            </h4>
            <ul className="space-y-2">
              {Object.values(content.footer.links).flatMap((section) =>
                'items' in section
                  ? (section as { items: { label: string; url: string }[] }).items.map((item) => (
                      <li key={item.label}>
                        <a
                          href={item.url}
                          className="text-zinc-500 hover:text-amber-400 transition-colors text-sm"
                        >
                          {item.label}
                        </a>
                      </li>
                    ))
                  : []
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-zinc-400 mb-4">
              Contacto
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href={`https://wa.me/${content.site.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-500 hover:text-amber-400 transition-colors text-sm"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${content.site.email}`}
                  className="text-zinc-500 hover:text-amber-400 transition-colors text-sm"
                >
                  {content.site.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-zinc-800/50 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-zinc-600 text-xs">{content.footer.copyright}</p>
          <Link href="/" className="text-zinc-600 hover:text-amber-400 text-xs transition-colors">
            ozmontania.paragu-ai.com
          </Link>
        </div>
      </div>
    </footer>
  )
}
