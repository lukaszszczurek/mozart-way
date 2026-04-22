import { motion } from 'framer-motion'

type Feature = {
  emoji: string
  title: string
  body: string
  bg: string
  span?: string
}

const features: Feature[] = [
  {
    emoji: '🔢',
    title: 'Matematyka',
    body: 'Liczenie, porównywanie, dodawanie, odejmowanie — przez zabawę z żabkami, kwiatkami i ciasteczkami.',
    bg: 'from-[hsl(var(--mm-coral)/0.15)] to-[hsl(var(--mm-yellow)/0.15)]',
    span: 'md:col-span-2',
  },
  {
    emoji: '🎹',
    title: 'Muzyka',
    body: 'Pianino, rytm, rozpoznawanie dźwięków. Rozwija słuch i koordynację.',
    bg: 'from-[hsl(var(--mm-mint)/0.2)] to-[hsl(195_60%_85%)]',
  },
  {
    emoji: '🧠',
    title: 'Pamięć',
    body: 'Gry typu memory, układanki, zapamiętywanie sekwencji — trenują skupienie.',
    bg: 'from-[hsl(270_50%_90%)] to-[hsl(var(--mm-mint)/0.2)]',
  },
  {
    emoji: '🎨',
    title: 'Logika i kolory',
    body: 'Sortowanie, klasyfikowanie, rozpoznawanie kształtów i kolorów — fundament myślenia.',
    bg: 'from-[hsl(var(--mm-yellow)/0.2)] to-[hsl(var(--mm-coral)/0.12)]',
    span: 'md:col-span-2',
  },
  {
    emoji: '📊',
    title: 'Raporty dla rodzica',
    body: 'Co tydzień dostajesz podsumowanie: co dziecko opanowało, gdzie potrzebuje powtórek. Bez statystycznego szumu — konkrety.',
    bg: 'from-white to-[hsl(var(--mm-cream))]',
    span: 'md:col-span-2',
  },
  {
    emoji: '🎯',
    title: 'Adaptacyjny poziom',
    body: 'Gry dostosowują się do dziecka w czasie rzeczywistym — bez frustracji, bez nudy.',
    bg: 'from-[hsl(var(--mm-mint)/0.2)] to-[hsl(var(--mm-yellow)/0.15)]',
  },
  {
    emoji: '🔒',
    title: 'Zero reklam. Zero mikropłatności.',
    body: 'Jedna subskrypcja. Koniec. Dziecko nie widzi reklam ani wyskakujących okienek „kup teraz”.',
    bg: 'from-[hsl(var(--mm-navy))] to-[hsl(220_35%_22%)]',
  },
  {
    emoji: '📚',
    title: 'Podstawa programowa',
    body: 'Każda gra jest przypisana do konkretnego celu z podstawy programowej wychowania przedszkolnego MEN.',
    bg: 'from-[hsl(var(--mm-coral)/0.15)] to-[hsl(var(--mm-coral-deep)/0.12)]',
    span: 'md:col-span-2',
  },
]

export default function Features() {
  return (
    <section id="features" className="relative py-24 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mb-16 motion-reduce:animate-none"
        >
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[hsl(var(--mm-coral-deep))] mb-4">
            Co jest w środku
          </p>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl lg:text-[3.5rem] tracking-[-0.03em] text-[hsl(var(--mm-navy))] leading-[1.05]" style={{ textWrap: 'pretty' } as React.CSSProperties}>
            50+ gier. 4 obszary rozwoju. <span className="text-[hsl(var(--mm-coral-deep))]">Zero kompromisów.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {features.map((feature, i) => {
            const isDark = feature.bg.includes('mm-navy')
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.55 }}
                className={`relative p-7 rounded-3xl bg-gradient-to-br ${feature.bg} ${feature.span || ''} border ${isDark ? 'border-white/10' : 'border-[hsl(var(--mm-coral)/0.15)]'} overflow-hidden motion-reduce:animate-none hover:-translate-y-px transition-transform duration-200`}
              >
                <div className="text-4xl mb-4 drop-shadow-sm">{feature.emoji}</div>
                <h3 className={`font-display font-extrabold text-xl tracking-tight mb-2.5 leading-tight ${isDark ? 'text-white' : 'text-[hsl(var(--mm-navy))]'}`}>
                  {feature.title}
                </h3>
                <p className={`text-sm leading-relaxed ${isDark ? 'text-white/80' : 'text-[hsl(var(--mm-navy-soft))]'}`}>
                  {feature.body}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
