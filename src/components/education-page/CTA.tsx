import { motion } from 'framer-motion'
import { ArrowRight, Shield, Clock, CheckCircle2 } from 'lucide-react'

export default function CTA() {
  return (
    <section id="cta" className="py-24 bg-primary relative overflow-hidden">
      {/* Mozart Way violet ambient glow — subtle brand pop */}
      <div
        className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full opacity-[0.18] blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, hsl(var(--mw-violet)) 0%, transparent 70%)' }}
      />
      <div
        className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full opacity-[0.12] blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, hsl(var(--mw-violet-deep)) 0%, transparent 70%)' }}
      />

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className="font-display font-medium text-3xl md:text-4xl lg:text-5xl tracking-tighter text-primary-foreground"
            style={{ textWrap: 'pretty' } as React.CSSProperties}
          >
            Przestań gasić pożary.
            <br />
            Zacznij zarządzać.
          </h2>

          <p className="mt-6 text-lg text-primary-foreground/95 max-w-xl mx-auto">
            Umów bezpłatną rozmowę — pokażę Ci jak wygląda system, który
            sam stworzyłem i używam w swojej szkole. Bez zobowiązań.
          </p>

          <div className="mt-10">
            <a
              href="https://calendly.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-[hsl(var(--primary))] font-medium text-base hover:-translate-y-px transition-transform duration-150 shadow-violet-lg"
            >
              Umów bezpłatną rozmowę
              <ArrowRight size={18} />
            </a>
          </div>

          <p className="mt-4 text-sm text-primary-foreground/90">
            Bez zobowiązań. Bez kart kredytowych. 30-minutowa rozmowa.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
            {[
              { icon: Clock, text: 'Wdrożenie w 30 dni' },
              { icon: Shield, text: '100% gwarancja zwrotu' },
              { icon: CheckCircle2, text: 'Wsparcie po-wdrożeniowe' },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-2 text-sm text-primary-foreground/90">
                <item.icon size={16} />
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
