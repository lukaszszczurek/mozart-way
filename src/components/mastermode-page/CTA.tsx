import { motion } from 'framer-motion'
import { ArrowRight, Check } from 'lucide-react'

export default function CTA() {
  return (
    <section id="cta" className="relative py-24 md:py-32 bg-white overflow-hidden">
      <div className="absolute inset-0 opacity-40" style={{
        background: 'radial-gradient(ellipse at center, hsl(var(--mm-coral)/0.15) 0%, transparent 60%)',
      }} />

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-[2.5rem] overflow-hidden motion-reduce:animate-none"
          style={{
            background: 'linear-gradient(135deg, hsl(var(--mm-coral)) 0%, hsl(var(--mm-coral-deep)) 100%)',
          }}
        >
          {/* Decorative glow */}
          <div className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full opacity-30 blur-3xl" style={{ background: 'hsl(var(--mm-yellow))' }} />
          <div className="absolute bottom-0 left-0 w-[280px] h-[280px] rounded-full opacity-25 blur-3xl" style={{ background: 'hsl(var(--mm-mint))' }} />

          <div className="relative p-10 md:p-16 text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/80 mb-5">
              7 dni za darmo · Bez karty
            </p>

            <h2 className="font-display font-extrabold text-4xl md:text-5xl lg:text-6xl tracking-[-0.03em] text-white leading-[1.05] mb-6" style={{ textWrap: 'balance' } as React.CSSProperties}>
              Zacznij dziś.{' '}
              <span className="text-[hsl(var(--mm-yellow))]">Dziecko pokocha</span>{' '}
              pierwsze zadanie.
            </h2>

            <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-2xl mx-auto mb-10">
              Pobierz Master Mode, ustaw profil w 2 minuty i zobacz, jak twoje dziecko samo sięga po wiedzę. Pierwsze 7 dni — pełny dostęp za darmo.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8">
              <a
                href="#"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[hsl(var(--mm-coral-deep))] font-bold rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
              >
                Wypróbuj za darmo
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="mailto:lukasz.szczurek@mozartway.com"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur text-white font-bold rounded-2xl border border-white/30 hover:bg-white/20 transition-colors"
              >
                Dla przedszkoli
              </a>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-white/80">
              {['Bez karty kredytowej', 'Anuluj w każdej chwili', 'Bez reklam'].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <Check size={16} className="text-[hsl(var(--mm-yellow))]" strokeWidth={3} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
