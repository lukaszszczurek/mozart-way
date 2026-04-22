import { motion } from 'framer-motion'
import {
  ArrowRight,
  Shield,
  Clock,
  CheckCircle2,
  Sparkles,
  TrendingUp,
  Bell,
} from 'lucide-react'

const heroVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.8, ease: [0.25, 0.4, 0.25, 1] },
  }),
}

const visualVariants = {
  hidden: { opacity: 0, scale: 0.97, y: 16 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { delay: 0.35, duration: 1.1, ease: [0.16, 1, 0.3, 1] },
  },
}

const floatVariants = {
  hidden: { opacity: 0, y: 14 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  }),
}

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Atmospheric background */}
      <div className="absolute inset-0">
        <img
          src="/education/hero-bg.jpg"
          alt=""
          className="w-full h-full object-cover opacity-30"
        />
        {/* Heavy overlay for maximum text contrast */}
        <div className="absolute inset-0 bg-[hsl(var(--background))]/75" />
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--background))]/95 via-[hsl(var(--background))]/85 to-[hsl(var(--background))]/80" />
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--background))]/50 via-transparent to-[hsl(var(--background))]" />

        {/* Warm amber glow from top-right */}
        <div
          className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full opacity-[0.14] blur-3xl"
          style={{ background: 'radial-gradient(circle, hsl(38 92% 55%) 0%, transparent 70%)' }}
        />
        {/* Mozart Way violet ambient glow — bottom-left */}
        <div
          className="absolute bottom-20 left-0 w-[520px] h-[520px] rounded-full opacity-[0.14] blur-3xl"
          style={{ background: 'radial-gradient(circle, hsl(var(--mw-violet)) 0%, transparent 70%)' }}
        />
        {/* Subtle violet wash for brand cohesion */}
        <div
          className="absolute top-1/3 right-1/4 w-[340px] h-[340px] rounded-full opacity-[0.06] blur-3xl"
          style={{ background: 'radial-gradient(circle, hsl(var(--mw-violet-deep)) 0%, transparent 70%)' }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-20 md:pt-36 md:pb-28">
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-16 items-center">
          {/* LEFT: Copy */}
          <div className="max-w-2xl">
            {/* Kicker */}
            <motion.div
              custom={0.2}
              variants={heroVariants}
              initial="hidden"
              animate="visible"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[hsl(var(--accent))]/15 border border-[hsl(var(--accent))]/25 mb-7 motion-reduce:animate-none"
            >
              <Sparkles size={14} className="text-[hsl(var(--accent))]" />
              <span className="text-xs font-medium text-[hsl(var(--accent-foreground))] uppercase tracking-wider">
                System AI dla placówek edukacyjnych
              </span>
            </motion.div>

            {/* Headline — BIGGER, BOLDER, higher contrast */}
            <motion.h1
              custom={0.45}
              variants={heroVariants}
              initial="hidden"
              animate="visible"
              className="font-display font-bold text-[3rem] sm:text-[3.5rem] md:text-[4.25rem] lg:text-[5rem] tracking-[-0.04em] leading-[0.98] text-foreground motion-reduce:animate-none"
              style={{ textWrap: 'pretty' } as React.CSSProperties}
            >
              Zarządzaj{' '}
              <span className="relative inline-block">
                <span
                  className="relative z-10"
                  style={{
                    background:
                      'linear-gradient(135deg, hsl(38 98% 52%) 0%, hsl(28 92% 44%) 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  placówkami
                </span>
              </span>
              <br />
              z jednego miejsca.
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              custom={0.7}
              variants={heroVariants}
              initial="hidden"
              animate="visible"
              className="mt-7 text-lg md:text-xl text-foreground/90 leading-relaxed max-w-xl motion-reduce:animate-none"
            >
              System AI, który pokazuje co dzieje się w każdej szkole — na żywo.{' '}
              <span className="font-semibold text-foreground">Zaoszczędź 80h+ miesięcznie</span>,
              wdrożone w 30 dni lub zwrot pieniędzy.
            </motion.p>

            {/* CTA row */}
            <motion.div
              custom={1.0}
              variants={heroVariants}
              initial="hidden"
              animate="visible"
              className="mt-9 flex flex-col sm:flex-row items-start sm:items-center gap-4 motion-reduce:animate-none"
            >
              <a
                href="#cta"
                className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold text-base hover:-translate-y-px transition-all duration-200 shadow-violet-glow hover:shadow-violet-lg"
              >
                Umów bezpłatną rozmowę
                <ArrowRight size={18} className="group-hover:translate-x-0.5 transition-transform duration-150" />
              </a>
              <a
                href="#founder"
                className="inline-flex items-center gap-2 px-5 py-3.5 text-base font-medium text-foreground/90 hover:text-foreground transition-colors duration-150"
              >
                Poznaj historię
                <span className="text-muted-foreground">→</span>
              </a>
            </motion.div>

            {/* Risk reversal */}
            <motion.p
              custom={1.2}
              variants={heroVariants}
              initial="hidden"
              animate="visible"
              className="mt-4 text-sm text-foreground/65 motion-reduce:animate-none"
            >
              Bez zobowiązań · Bez kart kredytowych · Rozmowa 30 min
            </motion.p>

            {/* Trust badges */}
            <motion.div
              custom={1.45}
              variants={heroVariants}
              initial="hidden"
              animate="visible"
              className="mt-10 pt-8 border-t border-[hsl(var(--border))] grid grid-cols-3 gap-4 max-w-md motion-reduce:animate-none"
            >
              {[
                { icon: Clock, value: '80h+', label: 'miesięcznie' },
                { icon: CheckCircle2, value: '30 dni', label: 'wdrożenia' },
                { icon: Shield, value: '100%', label: 'gwarancja' },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <div className="flex items-center gap-1.5 mb-1">
                    <stat.icon size={14} className="text-[hsl(var(--accent))]" />
                    <span className="text-lg font-bold text-foreground tracking-tight">{stat.value}</span>
                  </div>
                  <span className="text-xs text-foreground/60">{stat.label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT: Simple visual — director photo + single system card */}
          <motion.div
            variants={visualVariants}
            initial="hidden"
            animate="visible"
            className="relative motion-reduce:animate-none"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Decorative backdrop glow — amber + violet for brand cohesion */}
              <div
                className="absolute -inset-8 rounded-[2.5rem] opacity-70"
                style={{
                  background:
                    'linear-gradient(135deg, hsl(38 92% 55% / 0.22) 0%, hsl(var(--mw-violet) / 0.14) 55%, hsl(var(--mw-violet-deep) / 0.10) 100%)',
                  filter: 'blur(36px)',
                }}
              />

              {/* Main photo */}
              <div className="relative rounded-[1.75rem] overflow-hidden shadow-violet-lg ring-1 ring-[hsl(var(--mw-violet)/0.12)] aspect-[4/5]">
                <img
                  src="/education/hero-director-new.jpg"
                  alt="Dyrektorka polskiej placówki edukacyjnej korzystająca z systemu Mozart Way"
                  className="w-full h-full object-cover"
                  style={{ objectPosition: 'center center' }}
                />
                {/* Subtle warm tint on photo */}
                <div
                  className="absolute inset-0 mix-blend-soft-light opacity-40"
                  style={{ background: 'linear-gradient(135deg, hsl(38 92% 55% / 0.4) 0%, transparent 60%)' }}
                />
                {/* Bottom gradient fade for legibility under floating card */}
                <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
              </div>

              {/* Floating system notification — coded, no gray frame, no brand text */}
              <motion.div
                custom={0.9}
                variants={floatVariants}
                initial="hidden"
                animate="visible"
                className="absolute -left-6 sm:-left-10 lg:-left-16 -bottom-6 sm:-bottom-8 w-[92%] sm:w-[88%] lg:w-[100%] motion-reduce:animate-none"
              >
                <div className="rounded-2xl bg-white shadow-2xl ring-1 ring-black/5 p-5 sm:p-6">
                  {/* Header row — status only, no brand name */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-semibold tracking-[0.14em] text-neutral-500 uppercase">
                      Podsumowanie dnia
                    </span>
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50">
                      <span className="relative flex h-1.5 w-1.5">
                        <span className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-75" />
                        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
                      </span>
                      <span className="text-[11px] font-semibold text-emerald-700">Na żywo</span>
                    </div>
                  </div>

                  {/* Date heading — day of week only, no brand */}
                  <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 tracking-tight mb-4">
                    Wtorek, 18 marca
                  </h3>

                  {/* Metric tiles */}
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="rounded-xl border border-neutral-200 p-3 text-center">
                      <div className="text-2xl sm:text-3xl font-bold text-emerald-600 tracking-tight leading-none mb-1.5">
                        147
                      </div>
                      <div className="text-[11px] sm:text-xs text-neutral-600 font-medium">
                        uczniów obecnych
                      </div>
                    </div>
                    <div className="rounded-xl border border-neutral-200 p-3 text-center">
                      <div className="text-2xl sm:text-3xl font-bold text-emerald-600 tracking-tight leading-none mb-1.5">
                        12
                      </div>
                      <div className="text-[11px] sm:text-xs text-neutral-600 font-medium">
                        zajęć dzisiaj
                      </div>
                    </div>
                  </div>

                  {/* Status strip */}
                  <div className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500">
                    <Bell size={14} className="text-white flex-shrink-0" />
                    <span className="text-[11px] sm:text-xs font-medium text-white leading-tight">
                      Wszystko pod kontrolą. Powiadomienia wysyłane automatycznie.
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Top-right floating badge */}
              <motion.div
                custom={1.15}
                variants={floatVariants}
                initial="hidden"
                animate="visible"
                className="hidden sm:flex absolute -top-4 -right-3 lg:-right-6 items-center gap-2.5 px-4 py-2.5 rounded-xl bg-[hsl(var(--card))]/95 backdrop-blur-xl shadow-xl ring-1 ring-[hsl(var(--border))] motion-reduce:animate-none"
              >
                <div className="w-8 h-8 rounded-lg bg-[hsl(var(--accent))]/15 flex items-center justify-center flex-shrink-0">
                  <TrendingUp size={16} className="text-[hsl(var(--accent))]" />
                </div>
                <div>
                  <p className="text-sm font-bold text-foreground leading-tight">+80h/mc</p>
                  <p className="text-[10px] text-foreground/60 leading-tight">zaoszczędzone</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
