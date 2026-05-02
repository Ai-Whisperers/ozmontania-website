'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { getContent } from '@/lib/content'

const content = getContent()

const navItems = [
  { href: '/', label: content.nav.obra },
  { href: '/murales', label: content.nav.murales },
  { href: '/biografia', label: content.nav.biografia },
  { href: '/prensa', label: content.nav.prensa },
  { href: '/blog', label: content.nav.blog },
  { href: '/tienda', label: content.nav.tienda },
  { href: '/contacto', label: content.nav.contacto },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800/50 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container-art flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <span className="text-xl font-bold tracking-tight font-serif">
            Oz<span className="text-amber-500"> Montanía</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-4 py-2 text-sm text-zinc-400 hover:text-amber-400 transition-colors rounded-lg hover:bg-zinc-800/50"
            >
              {item.label}
            </Link>
          ))}
          <Link href="/contacto" className="ml-4 btn-primary text-sm py-2 px-5">
            {content.nav.contacto}
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden flex flex-col gap-1.5 p-2"
          aria-label="Menu"
        >
          <span className={`block w-6 h-0.5 bg-zinc-300 transition-all ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-zinc-300 transition-all ${mobileOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-zinc-300 transition-all ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile nav */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          mobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="container-art py-4 flex flex-col gap-1 border-t border-zinc-800/50 mt-3">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="px-4 py-3 text-zinc-400 hover:text-amber-400 transition-colors rounded-lg hover:bg-zinc-800/50"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
