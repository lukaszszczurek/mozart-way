import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'

export default function FounderStory() {
  return (
    <section id="founder" className="relative py-24 md:py-32 bg-white overflow-hidden">
      <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full opacity-15 blur-3xl" style={{ background: 'radial-gradient(circle, hsl(var(--mm-coral)) 0%, transparent 70%)' }} />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-16 items-center">
          {/* LEFT — photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="relative motion-reduce:animate-none"
          >
            <div
              className="absolute -inset-6 rounded-[2.5rem] opacity-70"
              style={{
                background: 'linear-gradient(135deg, hsl(var(--mm-coral) / 0.3) 0%, hsl(var(--mm-yellow) / 0.25) 50%, hsl(var(--mm-mint) / 0.2) 100%)',
                filter: 'blur(36px)',
              }}
            />
            <div className="relative rounded-[1.75rem] overflow-hidden aspect-[4/5] shadow-xl ring-1 ring-[hsl(var(--mm-coral)/0.15)]">
              <img
                src="/mastermode/founder.jpg"
                alt="Twórca Master Mode — pedagog i rodzic"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <p className="text-white font-display font-extrabold text-lg leading-tight drop-shadow-md">
                  Łukasz Szczurek
                </p>
                <p className="text-white/90 text-xs font-medium uppercase tracking-[0.14em] drop-shadow-md">
                  Współzałożyciel · Pedagog · Rodzic
                </p>
              </div>
            </div>

            {/* Floating quote badge */}
            <div className="hidden sm:flex absolute -top-5 -right-5 w-16 h-16 rounded-2xl bg-gradient-to-br from-[hsl(var(--mm-coral))] to-[hsl(var(--mm-coral-deep))] items-center justify-center shadow-xl">
              <Quote size={24} className="text-white" strokeWidth={2.2} />
            </div>
          </motion.div>

          {/* RIGHT — story */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="motion-reduce:animate-none"
          >
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[hsl(var(--mm-coral-deep))] mb-4">
              Skąd się wziął Master Mode
            </p>
            <h2 className="font-display font-extrabold text-4xl md:text-5xl tracking-[-0.03em] text-[hsl(var(--mm-navy))] leading-[1.05] mb-8" style={{ textWrap: 'pretty' } as React.CSSProperties}>
              Zrobiłem aplikację, której szukałem{' '}
              <span className="text-[hsl(var(--mm-coral-deep))]">dla własnego dziecka</span>.
            </h2>

            <div className="space-y-5 text-lg text-[hsl(var(--mm-navy-soft))] leading-relaxed">
              <p>
                Przez lata pracowałem z dziećmi — widziałem, jak szybko się uczą, gdy coś je naprawdę wciąga. I widziałem, jak szybko się wypalają, gdy dostają nudną ćwiczeniówkę albo głośną apkę pełną reklam.
              </p>
              <p>
                Gdy mój syn miał 4 lata, przeszukałem cały App Store. Wszystko albo po angielsku, albo kiepskie pod kątem dydaktycznym, albo pożerane reklamami. Zero aplikacji zrobionej <span className="font-bold text-[hsl(var(--mm-navy))]">dla polskiego dziecka przez polskich pedagogów</span>.
              </p>
              <p className="pl-5 border-l-4 border-[hsl(var(--mm-coral))] py-1">
                <span className="font-display font-bold text-[hsl(var(--mm-navy))] text-xl">
                  Więc zebrałem zespół i zbudowaliśmy ją sami.
                </span>
              </p>
              <p>
                Każda gra w Master Mode przeszła przez dwa testy: pedagogiczny (czy realnie uczy) i dziecięcy (czy dziecko chce w nią grać dobrowolnie). Jeśli oblała którykolwiek — nie trafiała do aplikacji.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-4 pt-8 border-t border-[hsl(var(--mm-coral)/0.15)]">
              {[
                { value: '15 lat', label: 'pracy z dziećmi' },
                { value: '50+', label: 'gier wyprodukowanych' },
                { value: '500+', label: 'dzieci testujących' },
              ].map((s) => (
                <div key={s.label}>
                  <div className="font-display font-extrabold text-2xl text-[hsl(var(--mm-navy))] tracking-tight mb-1">
                    {s.value}
                  </div>
                  <div className="text-xs text-[hsl(var(--mm-navy-soft))] font-medium">{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
