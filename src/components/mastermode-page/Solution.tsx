import { motion } from 'framer-motion'
import { Download, Gamepad2, TrendingUp } from 'lucide-react'

const steps = [
  {
    num: '01',
    icon: Download,
    time: '2 min',
    title: 'Pobierz aplikację',
    body: 'Ustaw profil dziecka w 2 minuty. Wybierz wiek (3, 4, 5, 6 lub 7 lat) — gry dobierają się automatycznie.',
  },
  {
    num: '02',
    icon: Gamepad2,
    time: '15 min dziennie',
    title: 'Dziecko wybiera grę',
    body: 'Matematyka, muzyka, pamięć, logika. Każda gra to krótka przygoda z postaciami zwierząt. Dziecko gra — i uczy się.',
  },
  {
    num: '03',
    icon: TrendingUp,
    time: 'Co tydzień',
    title: 'Ty widzisz postępy',
    body: 'Dostajesz raport: co dziecko opanowało, gdzie potrzebuje więcej. Żadnej presji — tylko spokojna obserwacja rozwoju.',
  },
]

export default function Solution() {
  return (
    <section id="solution" className="relative py-24 md:py-32 bg-[hsl(var(--mm-cream))] overflow-hidden">
      <div className="absolute top-40 right-0 w-[400px] h-[400px] rounded-full opacity-20 blur-3xl" style={{ background: 'radial-gradient(circle, hsl(var(--mm-mint)) 0%, transparent 70%)' }} />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mb-16 motion-reduce:animate-none"
        >
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[hsl(var(--mm-coral-deep))] mb-4">
            Jak to działa
          </p>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl lg:text-[3.5rem] tracking-[-0.03em] text-[hsl(var(--mm-navy))] leading-[1.05]" style={{ textWrap: 'pretty' } as React.CSSProperties}>
            Trzy kroki.{' '}
            <span className="relative inline-block">
              <span
                style={{
                  background: 'linear-gradient(135deg, hsl(var(--mm-coral)) 0%, hsl(var(--mm-coral-deep)) 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Zero walki
              </span>
            </span>
            {' '}z dzieckiem.
          </h2>
          <p className="mt-6 text-lg text-[hsl(var(--mm-navy-soft))] leading-relaxed max-w-2xl">
            Nie musisz siedzieć obok. Nie musisz niczego tłumaczyć. Dziecko samo wybiera, ile i co chce grać — a ty masz pewność, że każda minuta to realna nauka.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.7 }}
              className="relative motion-reduce:animate-none"
            >
              {/* Connecting arrow */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-20 -right-3 z-20 text-[hsl(var(--mm-coral))] text-2xl font-bold">
                  →
                </div>
              )}

              <div className="relative p-8 rounded-3xl bg-white border border-[hsl(var(--mm-coral)/0.15)] shadow-sm h-full">
                {/* Step number + time badge */}
                <div className="flex items-start justify-between mb-6">
                  <div className="font-display font-extrabold text-5xl text-[hsl(var(--mm-coral)/0.2)] tracking-tight leading-none">
                    {step.num}
                  </div>
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-[hsl(var(--mm-yellow)/0.2)] border border-[hsl(var(--mm-yellow)/0.35)] text-[11px] font-bold uppercase tracking-[0.1em] text-[hsl(var(--mm-coral-deep))]">
                    {step.time}
                  </span>
                </div>

                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[hsl(var(--mm-coral))] to-[hsl(var(--mm-coral-deep))] flex items-center justify-center mb-5 shadow-md shadow-[hsl(var(--mm-coral)/0.25)]">
                  <step.icon size={24} className="text-white" strokeWidth={2.2} />
                </div>

                <h3 className="font-display font-extrabold text-xl text-[hsl(var(--mm-navy))] tracking-tight mb-3 leading-tight">
                  {step.title}
                </h3>
                <p className="text-sm text-[hsl(var(--mm-navy-soft))] leading-relaxed">
                  {step.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
