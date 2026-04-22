import { Mail, Instagram, Facebook } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative py-16 bg-[hsl(var(--mm-navy))] text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-[1.5fr_1fr_1fr_1fr] gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[hsl(var(--mm-coral))] to-[hsl(var(--mm-coral-deep))] flex items-center justify-center text-lg font-bold">
                M
              </div>
              <span className="font-display font-extrabold text-xl">Master Mode</span>
            </div>
            <p className="text-sm text-white/70 leading-relaxed max-w-sm">
              Polska aplikacja edukacyjna dla dzieci 3–7 lat. Matematyka, muzyka, pamięć, logika — przez zabawę, bez reklam.
            </p>
          </div>

          {/* Aplikacja */}
          <div>
            <h4 className="font-display font-bold text-sm uppercase tracking-[0.12em] text-white/60 mb-4">
              Aplikacja
            </h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#features" className="text-white/85 hover:text-white transition-colors">Gry</a></li>
              <li><a href="#solution" className="text-white/85 hover:text-white transition-colors">Jak działa</a></li>
              <li><a href="#cta" className="text-white/85 hover:text-white transition-colors">Pobierz</a></li>
              <li><a href="mailto:lukasz.szczurek@mozartway.com" className="text-white/85 hover:text-white transition-colors">Dla przedszkoli</a></li>
            </ul>
          </div>

          {/* Firma */}
          <div>
            <h4 className="font-display font-bold text-sm uppercase tracking-[0.12em] text-white/60 mb-4">
              Firma
            </h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#founder" className="text-white/85 hover:text-white transition-colors">Twórcy</a></li>
              <li><a href="#testimonials" className="text-white/85 hover:text-white transition-colors">Opinie</a></li>
              <li><a href="https://mozartway.com" className="text-white/85 hover:text-white transition-colors">mozartway.com</a></li>
            </ul>
          </div>

          {/* Kontakt */}
          <div>
            <h4 className="font-display font-bold text-sm uppercase tracking-[0.12em] text-white/60 mb-4">
              Kontakt
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="mailto:lukasz.szczurek@mozartway.com" className="flex items-center gap-2 text-white/85 hover:text-white transition-colors">
                  <Mail size={14} />
                  <span className="text-xs">lukasz.szczurek@mozartway.com</span>
                </a>
              </li>
              <li className="flex items-center gap-3 pt-1">
                <a href="#" aria-label="Instagram" className="w-9 h-9 rounded-xl bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                  <Instagram size={16} />
                </a>
                <a href="#" aria-label="Facebook" className="w-9 h-9 rounded-xl bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                  <Facebook size={16} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/55">
          <p>© {new Date().getFullYear()} mozartway · Master Mode. Wszystkie prawa zastrzeżone.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">Polityka prywatności</a>
            <a href="#" className="hover:text-white transition-colors">Regulamin</a>
            <a href="#" className="hover:text-white transition-colors">RODO</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
