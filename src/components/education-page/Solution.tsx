import { motion } from 'framer-motion'
import { Monitor, Settings, Rocket } from 'lucide-react'

const steps = [
  {
    num: '01',
    icon: Monitor,
    title: 'Analizujemy Twoje potrzeby',
    desc: 'Rozmawiamy o Twojej placówce, procesach, problemach. Projektujemy system dopasowany do Ciebie — nie do "ogólnego klienta".',
    badge: 'Dzień 1-3',
  },
  {
    num: '02',
    icon: Settings,
    title: 'Wdrażamy system od A do Z',
    desc: 'Konfigurujemy wszystko — uczniów, nauczycieli, grafik, automatyzacje. Nie musisz być techniczny. My robimy wszystko za Ciebie.',
    badge: 'Dzień 4-25',
  },
  {
    num: '03',
    icon: Rocket,
    title: 'Szkolimy i wspieramy',
    desc: 'Szkolimy Twoich nauczycieli i pracowników. Zapewniamy wsparcie po-wdrożeniowe — nie zostawiamy Cię samego z systemem.',
    badge: 'Dzień 25-30',
  },
]

export default function Solution() {
  return (
    <section id="solution" className="py-24 bg-[hsl(var(--muted))]">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium text-[hsl(var(--accent))] uppercase tracking-widest mb-4">
            Jak to działa
          </p>
          <h2
            className="font-display font-medium text-3xl md:text-4xl lg:text-5xl tracking-tighter text-foreground"
            style={{ textWrap: 'pretty' } as React.CSSProperties}
          >
            Cała placówka w 1 systemie.
            <br />
            Gotowa w 30 dni.
          </h2>
          <p className="mt-4 text-lg text-foreground/80 max-w-2xl mx-auto">
            Wdrażamy działający system AI do zarządzania Twoją placówką edukacyjną
            — dostosowany do Twoich potrzeb, prosty dla nauczycieli i uczniów.
          </p>
        </motion.div>

        {/* Steps + product image */}
        <div className="grid lg:grid-cols-5 gap-8 items-center">
          {/* Steps */}
          <div className="lg:col-span-3 grid md:grid-cols-1 gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="bg-card rounded-xl p-6 border border-[hsl(var(--border))] hover:-translate-y-px transition-transform duration-150 motion-reduce:animate-none"
              >
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 font-display font-semibold text-2xl tracking-tighter text-[hsl(var(--accent))]">
                    {step.num}
                  </span>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <step.icon size={18} className="text-primary" />
                      <h3 className="font-display font-medium text-base tracking-tight text-foreground">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {step.desc}
                    </p>
                    <span className="inline-block mt-3 text-xs font-medium text-muted-foreground bg-[hsl(var(--muted))] px-3 py-1 rounded-full">
                      {step.badge}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Product mockup image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="lg:col-span-2 motion-reduce:animate-none"
          >
            <img
              src="/education/feature-notifications.jpg"
              alt="System powiadomień Mozart Way"
              className="w-full rounded-2xl shadow-xl border border-[hsl(var(--border))]"
              loading="lazy"
            />
          </motion.div>
        </div>

        {/* Key differentiator */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-card border border-[hsl(var(--border))]">
            <span className="text-sm text-foreground/80">
              Nie musisz znać się na technologii — <span className="font-medium text-foreground">wdrażamy wszystko od A do Z</span>
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
