import { motion } from 'framer-motion'
import {
  Users,
  Bell,
  Smartphone,
} from 'lucide-react'

const imageFeatures = [
  {
    title: 'Zdalny podgląd wszystkich placówek',
    desc: 'Widzisz co się dzieje w każdej lokalizacji — z jednego panelu. Koniec z jeżdżeniem po szkołach.',
    image: '/education/feature-dashboard.jpg',
  },
  {
    title: 'Automatyczny grafik lekcji',
    desc: 'Uczniowie i nauczyciele widzą kiedy jest lekcja, kto prowadzi, mogą potwierdzić obecność lub odwołać.',
    image: '/education/feature-schedule.jpg',
  },
  {
    title: 'Efektywność nauczycieli na wyciągnięcie ręki',
    desc: 'Ile lekcji przeprowadzili, jaka efektywność, u kogo uczniowie zostają najdłużej, kto ma najlepsze opinie.',
    image: '/education/feature-analytics.jpg',
  },
]

const iconFeatures = [
  {
    icon: Users,
    title: 'Zarządzanie nauczycielami i uczniami',
    desc: 'Jedno miejsce na dane uczniów, nauczycieli, grupy, grafiki i płatności. Zero Exceli.',
  },
  {
    icon: Bell,
    title: 'Automatyczne powiadomienia',
    desc: 'System sam przypomina o lekcjach, wysyła powiadomienia o zmianach. Koniec z ręcznym dzwonieniem.',
  },
  {
    icon: Smartphone,
    title: 'Prosty dla nauczycieli i uczniów',
    desc: 'Zbudowany tak, aby każdy mógł z niego korzystać — bez szkolenia, bez instrukcji. Prosty jak WhatsApp.',
  },
]

export default function Features() {
  return (
    <section className="relative py-24">
      {/* Subtle diagonal accent — amber + violet blend */}
      <div className="absolute inset-0 opacity-[0.04]" style={{ background: 'linear-gradient(135deg, transparent 30%, hsl(38 92% 50%) 45%, hsl(var(--mw-violet)) 55%, transparent 70%)' }} />
      {/* Ambient violet orb — top-right */}
      <div
        className="absolute top-20 right-10 w-[400px] h-[400px] rounded-full opacity-[0.06] blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, hsl(var(--mw-violet)) 0%, transparent 70%)' }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium text-[hsl(var(--accent))] uppercase tracking-widest mb-4">
            Co zyskujesz
          </p>
          <h2
            className="font-display font-medium text-3xl md:text-4xl lg:text-5xl tracking-tighter text-foreground"
            style={{ textWrap: 'pretty' } as React.CSSProperties}
          >
            Wszystko czego potrzebujesz.
            <br />
            W jednym miejscu.
          </h2>
        </motion.div>

        {/* Image feature cards — large, visual */}
        <div className="grid md:grid-cols-3 gap-5 mb-5">
          {imageFeatures.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="group bg-card rounded-xl border border-[hsl(var(--border))] overflow-hidden shadow-violet-sm hover-shadow-violet hover:-translate-y-px transition-transform duration-150 motion-reduce:animate-none"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display font-medium text-base tracking-tight text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Icon feature cards — compact */}
        <div className="grid md:grid-cols-3 gap-5">
          {iconFeatures.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i + 3) * 0.1, duration: 0.6 }}
              className="group bg-card rounded-xl p-6 border border-[hsl(var(--border))] shadow-violet-sm hover-shadow-violet hover:-translate-y-px transition-transform duration-150 motion-reduce:animate-none"
            >
              <div className="w-10 h-10 rounded-lg bg-[hsl(var(--mw-violet))]/10 flex items-center justify-center mb-4 group-hover:bg-[hsl(var(--mw-violet))]/15 transition-colors duration-150">
                <feature.icon size={20} className="text-[hsl(var(--mw-violet))]" />
              </div>
              <h3 className="font-display font-medium text-base tracking-tight text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
