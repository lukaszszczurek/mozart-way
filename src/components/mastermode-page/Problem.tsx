import { motion } from 'framer-motion'
import { Youtube, Clock, Frown } from 'lucide-react'

const pains = [
  {
    icon: Youtube,
    headline: 'YouTube Kids to nie nauka.',
    body: 'Twoje dziecko godzinami ogląda algorytmicznie dobierane filmiki. Kolorowe, głośne, uzależniające — i zero realnej wiedzy.',
  },
  {
    icon: Clock,
    headline: 'Nie masz czasu siedzieć obok.',
    body: 'Chciałabyś uczyć dziecko literek i liczenia, ale po pracy, gotowaniu i sprzątaniu masz już siły tylko na Netflix.',
  },
  {
    icon: Frown,
    headline: 'Wiesz, że inne dzieci liczą do 100.',
    body: 'Czujesz, że twoje dziecko jest w tyle. Boisz się, że w pierwszej klasie będzie musiało gonić. I masz wyrzuty sumienia.',
  },
]

export default function Problem() {
  return (
    <section id="problem" className="relative py-24 md:py-32 bg-[hsl(var(--mm-cream))]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mb-16 motion-reduce:animate-none"
        >
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[hsl(var(--mm-coral-deep))] mb-4">
            Problem
          </p>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl lg:text-[3.5rem] tracking-[-0.03em] text-[hsl(var(--mm-navy))] leading-[1.05]" style={{ textWrap: 'pretty' } as React.CSSProperties}>
            Wiesz, że YouTube nie uczy twojego dziecka.
            <br />
            <span className="text-[hsl(var(--mm-navy-soft))]">Ale co w zamian?</span>
          </h2>
          <p className="mt-6 text-lg text-[hsl(var(--mm-navy-soft))] leading-relaxed max-w-2xl">
            Każdego dnia stajesz przed tym samym dylematem. Zabrać tablet i słuchać płaczu, czy dać — i czuć się winna, że dziecko marnuje czas.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5">
          {pains.map((pain, i) => (
            <motion.div
              key={pain.headline}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.6 }}
              className="relative p-7 rounded-3xl bg-white border border-[hsl(var(--mm-coral)/0.15)] shadow-sm motion-reduce:animate-none"
            >
              <div className="w-12 h-12 rounded-2xl bg-[hsl(var(--mm-coral)/0.1)] flex items-center justify-center mb-5">
                <pain.icon size={22} className="text-[hsl(var(--mm-coral-deep))]" strokeWidth={2} />
              </div>
              <h3 className="font-display font-bold text-lg text-[hsl(var(--mm-navy))] mb-2.5 leading-tight tracking-tight">
                {pain.headline}
              </h3>
              <p className="text-sm text-[hsl(var(--mm-navy-soft))] leading-relaxed">
                {pain.body}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-16 max-w-2xl motion-reduce:animate-none"
        >
          <div className="relative pl-6 border-l-4 border-[hsl(var(--mm-coral))]">
            <p className="text-xl md:text-2xl font-display font-medium text-[hsl(var(--mm-navy))] leading-snug tracking-tight">
              Prawdziwy problem nie tkwi w tablecie.
              Tkwi w tym, że{' '}
              <span className="font-bold text-[hsl(var(--mm-coral-deep))]">większość aplikacji dla dzieci jest robiona pod rodzica, nie pod dziecko</span>
              {' '}— sztywne, nudne, pełne reklam, bez żadnej dydaktyki.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
