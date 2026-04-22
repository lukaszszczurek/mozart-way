import { motion } from 'framer-motion'
import { X, CheckCircle2 } from 'lucide-react'

const alternatives = [
  {
    name: 'YouTube Kids',
    whyFails: 'Algorytm promuje hipnotyczne filmiki. Dziecko ogląda biernie — nie uczy się aktywnie.',
    verdict: 'Rozrywka, nie edukacja.',
  },
  {
    name: 'Duolingo Kids / Khan Academy Kids',
    whyFails: 'Świetne apki, ale stworzone po angielsku i pod amerykański system. Nie uczą polskich liczb, liter ani rymowanek.',
    verdict: 'Nie pasuje do polskiego dziecka.',
  },
  {
    name: 'Darmowe „edu-apki” z Play Store',
    whyFails: 'Reklama co 30 sekund, wyskakujące mikropłatności, nachalne powiadomienia. Dziecko uczy się klikania „Nie”, nie matematyki.',
    verdict: 'Pożeracze uwagi.',
  },
  {
    name: 'Papierowe ćwiczeniówki',
    whyFails: 'Dobre w teorii. W praktyce dziecko woli ekran — i robi ćwiczenia tylko pod twoją groźbą.',
    verdict: 'Wymagają walki każdego dnia.',
  },
]

export default function Disqualification() {
  return (
    <section className="relative py-24 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mb-14 motion-reduce:animate-none"
        >
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[hsl(var(--mm-coral-deep))] mb-4">
            Pewnie już próbowałaś
          </p>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl tracking-[-0.03em] text-[hsl(var(--mm-navy))] leading-[1.05]" style={{ textWrap: 'pretty' } as React.CSSProperties}>
            Dlaczego to, co próbowałaś dotąd, <span className="text-[hsl(var(--mm-coral-deep))]">nie zadziałało</span>.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5 mb-16">
          {alternatives.map((alt, i) => (
            <motion.div
              key={alt.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="relative p-7 rounded-3xl bg-[hsl(var(--mm-cream))] border border-[hsl(var(--mm-coral)/0.15)] motion-reduce:animate-none"
            >
              <div className="flex items-start gap-4 mb-3">
                <div className="w-9 h-9 rounded-xl bg-[hsl(var(--mm-coral)/0.15)] flex items-center justify-center flex-shrink-0">
                  <X size={18} className="text-[hsl(var(--mm-coral-deep))]" strokeWidth={2.5} />
                </div>
                <h3 className="font-display font-extrabold text-xl text-[hsl(var(--mm-navy))] tracking-tight leading-tight pt-1">
                  {alt.name}
                </h3>
              </div>
              <p className="text-sm text-[hsl(var(--mm-navy-soft))] leading-relaxed mb-3 pl-13" style={{ paddingLeft: '3.25rem' }}>
                {alt.whyFails}
              </p>
              <p className="text-sm font-bold text-[hsl(var(--mm-coral-deep))] pl-13" style={{ paddingLeft: '3.25rem' }}>
                → {alt.verdict}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-[2rem] bg-gradient-to-br from-[hsl(var(--mm-navy))] via-[hsl(220_35%_22%)] to-[hsl(var(--mm-navy))] p-10 md:p-14 overflow-hidden motion-reduce:animate-none"
        >
          <div className="absolute top-0 right-0 w-72 h-72 rounded-full opacity-30 blur-3xl" style={{ background: 'radial-gradient(circle, hsl(var(--mm-coral)) 0%, transparent 70%)' }} />
          <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full opacity-25 blur-3xl" style={{ background: 'radial-gradient(circle, hsl(var(--mm-yellow)) 0%, transparent 70%)' }} />
          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[hsl(var(--mm-yellow)/0.2)] border border-[hsl(var(--mm-yellow)/0.3)] mb-5">
              <CheckCircle2 size={14} className="text-[hsl(var(--mm-yellow))]" />
              <span className="text-xs font-bold uppercase tracking-[0.14em] text-[hsl(var(--mm-yellow))]">
                Dlatego zrobiliśmy Master Mode
              </span>
            </div>
            <h3 className="font-display font-extrabold text-2xl md:text-3xl lg:text-4xl tracking-[-0.02em] text-white leading-tight" style={{ textWrap: 'pretty' } as React.CSSProperties}>
              Aplikacja po polsku, zgodna z podstawą programową, stworzona przez pedagogów — i zaprojektowana tak, żeby dziecko <span className="text-[hsl(var(--mm-yellow))]">samo prosiło</span> o naukę.
            </h3>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
