import React from 'react'
import { cn } from '@/lib/utils'
import { Menu, X, Sparkles } from 'lucide-react'

export default function Nav() {
  const [scrolled, setScrolled] = React.useState(false)
  const [mobileOpen, setMobileOpen] = React.useState(false)

  React.useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const links = [
    { label: 'Jak działa', href: '#solution' },
    { label: 'Gry', href: '#features' },
    { label: 'Twórcy', href: '#founder' },
    { label: 'Opinie', href: '#testimonials' },
  ]

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-200',
        scrolled
          ? 'bg-[hsl(var(--mm-cream))]/90 backdrop-blur-md border-b border-[hsl(var(--mm-coral)/0.12)]'
          : 'bg-transparent'
      )}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 transition-opacity duration-150 hover:opacity-80">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[hsl(var(--mm-coral))] to-[hsl(var(--mm-coral-deep))] flex items-center justify-center shadow-sm">
            <Sparkles size={18} className="text-white" strokeWidth={2.5} />
          </div>
          <span className="font-display font-bold text-[hsl(var(--mm-navy))] text-lg tracking-tight">
            Master Mode
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[hsl(var(--mm-navy-soft))] hover:text-[hsl(var(--mm-navy))] transition-colors duration-150"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <a
            href="#cta"
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-[hsl(var(--mm-navy))] text-white text-sm font-semibold hover:-translate-y-px transition-transform duration-150 shadow-sm"
          >
            Wypróbuj za darmo
          </a>
        </div>

        <button
          className="md:hidden p-2 text-[hsl(var(--mm-navy))]"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="md:hidden bg-[hsl(var(--mm-cream))] border-b border-[hsl(var(--mm-coral)/0.12)] px-6 pb-4">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block py-2 text-sm font-medium text-[hsl(var(--mm-navy-soft))] hover:text-[hsl(var(--mm-navy))]"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#cta"
            className="mt-2 block text-center px-5 py-2.5 rounded-full bg-[hsl(var(--mm-navy))] text-white text-sm font-semibold"
            onClick={() => setMobileOpen(false)}
          >
            Wypróbuj za darmo
          </a>
        </div>
      )}
    </header>
  )
}
