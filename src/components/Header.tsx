import { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { cn } from '../lib/utils';

export function Header() {
  const { t, language, setLanguage } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const lastScrollCheck = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      // Throttle: max 10 updates per second
      const now = Date.now();
      if (now - lastScrollCheck.current < 100) return;
      lastScrollCheck.current = now;

      const shouldBeScrolled = window.scrollY > 20;
      // Only update state if value actually changed
      setIsScrolled(prev => prev !== shouldBeScrolled ? shouldBeScrolled : prev);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#services', label: t.nav.services },
    { href: '#portfolio', label: t.nav.portfolio },
    { href: '#testimonials', label: t.nav.testimonials },
    { href: '#process', label: t.nav.process },
    { href: '#contact', label: t.nav.contact },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        isScrolled
          ? 'bg-white/80 backdrop-blur-xl shadow-sm border-b border-border/50'
          : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-3 font-bold text-xl"
            aria-label="mozart_way - Home"
          >
            <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-violet-500 to-violet-700 rounded-xl shadow-lg overflow-hidden">
              <img src="/images/logo-icon-white.webp" alt="mozart_way logo" className="w-full h-full object-contain p-1" />
            </div>
            <span className="text-lg font-bold tracking-tight">
              <span className="text-foreground">mozart</span>
              <span className="text-violet-600">_way</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            {/* Language Toggle */}
            <div className="hidden sm:flex items-center bg-muted rounded-lg p-1">
              <button
                onClick={() => setLanguage('pl')}
                className={cn(
                  'px-3 py-1.5 text-sm font-medium rounded-md transition-all duration-200',
                  language === 'pl'
                    ? 'bg-white text-foreground shadow-sm'
                    : 'text-muted-foreground hover:text-foreground'
                )}
              >
                PL
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={cn(
                  'px-3 py-1.5 text-sm font-medium rounded-md transition-all duration-200',
                  language === 'en'
                    ? 'bg-white text-foreground shadow-sm'
                    : 'text-muted-foreground hover:text-foreground'
                )}
              >
                EN
              </button>
            </div>

            {/* CTA Button - Desktop */}
            <a
              href="#contact"
              className="hidden md:inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold bg-primary text-primary-foreground rounded-lg btn-primary"
            >
              {t.nav.getQuote}
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-muted-foreground hover:text-foreground transition-colors relative w-10 h-10 flex items-center justify-center"
              aria-label={isMobileMenuOpen ? 'Zamknij menu' : 'Otwórz menu'}
              aria-expanded={isMobileMenuOpen}
            >
              <Menu className={cn(
                'w-6 h-6 absolute transition-all duration-300',
                isMobileMenuOpen ? 'opacity-0 rotate-90 scale-0' : 'opacity-100 rotate-0 scale-100'
              )} />
              <X className={cn(
                'w-6 h-6 absolute transition-all duration-300',
                isMobileMenuOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-0'
              )} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          'lg:hidden overflow-hidden transition-all duration-300 bg-white/95 backdrop-blur-xl border-b border-border',
          isMobileMenuOpen ? 'max-h-[400px]' : 'max-h-0'
        )}
      >
        <nav className="px-4 py-4 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-4 py-3 text-base font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors"
            >
              {link.label}
            </a>
          ))}

          {/* Mobile language toggle */}
          <div className="flex items-center gap-2 px-4 py-3">
            <button
              onClick={() => { setLanguage('pl'); setIsMobileMenuOpen(false); }}
              className={cn(
                'px-4 py-2 text-sm font-medium rounded-lg transition-all',
                language === 'pl' ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
              )}
            >
              Polski
            </button>
            <button
              onClick={() => { setLanguage('en'); setIsMobileMenuOpen(false); }}
              className={cn(
                'px-4 py-2 text-sm font-medium rounded-lg transition-all',
                language === 'en' ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
              )}
            >
              English
            </button>
          </div>

          <a
            href="#contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block mx-4 py-3 text-base font-semibold bg-primary text-primary-foreground rounded-lg text-center mt-4"
          >
            {t.nav.getQuote}
          </a>
        </nav>
      </div>
    </header>
  );
}
