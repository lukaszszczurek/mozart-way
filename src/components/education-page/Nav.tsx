import React from 'react'
import { cn } from '@/lib/utils'
import { Menu, X } from 'lucide-react'
import MozartWayLogo from './MozartWayLogo'

export default function Nav() {
  const [scrolled, setScrolled] = React.useState(false)
  const [mobileOpen, setMobileOpen] = React.useState(false)

  React.useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const links = [
    { label: 'Problem', href: '#problem' },
    { label: 'Rozwiązanie', href: '#solution' },
    { label: 'O mnie', href: '#founder' },
    { label: 'Opinie', href: '#testimonials' },
  ]

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-200',
        scrolled
          ? 'bg-[hsl(var(--background))]/95 backdrop-blur-md border-b border-[hsl(var(--border))]'
          : 'bg-transparent'
      )}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 transition-opacity duration-150 hover:opacity-80">
          <MozartWayLogo iconSize={28} variant="dark" />
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-150"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <a
            href="#cta"
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:-translate-y-px transition-transform duration-150"
          >
            Umów rozmowę
          </a>
        </div>

        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="md:hidden bg-[hsl(var(--background))] border-b border-[hsl(var(--border))] px-6 pb-4">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block py-2 text-sm text-muted-foreground hover:text-foreground"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#cta"
            className="mt-2 block text-center px-5 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-medium"
            onClick={() => setMobileOpen(false)}
          >
            Umów rozmowę
          </a>
        </div>
      )}
    </header>
  )
}
