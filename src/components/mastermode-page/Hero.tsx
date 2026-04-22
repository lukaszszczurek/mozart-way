import { motion } from 'framer-motion'
import { ArrowRight, Star, ShieldCheck, BookOpen, Sparkles } from 'lucide-react'

const heroVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.8, ease: [0.25, 0.4, 0.25, 1] },
  }),
}

const visualVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { delay: 0.5, duration: 1.1, ease: [0.16, 1, 0.3, 1] },
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
    <section className="relative min-h-screen overflow-hidden pt-24 pb-16 md:pt-32 md:pb-24">
      {/* Soft watercolor background */}
      <div className="absolute inset-0">
        <img
          src="/mastermode/hero-bg.jpg"
          alt=""
          className="w-full h-full object-cover opacity-60"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--mm-cream))]/60 via-[hsl(var(--mm-cream))]/70 to-[hsl(var(--mm-cream))]" />

        {/* Warm coral glow — top right */}
        <div
          className="absolute -top-20 -right-20 w-[560px] h-[560px] rounded-full opacity-30 blur-3xl"
          style={{ background: 'radial-gradient(circle, hsl(var(--mm-coral)) 0%, transparent 70%)' }}
        />
        {/* Yellow glow — bottom left */}
        <div
          className="absolute -bottom-40 -left-20 w-[520px] h-[520px] rounded-full opacity-25 blur-3xl"
          style={{ background: 'radial-gradient(circle, hsl(var(--mm-yellow)) 0%, transparent 70%)' }}
        />
        {/* Mint glow — center */}
        <div
          className="absolute top-1/3 left-1/3 w-[340px] h-[340px] rounded-full opacity-20 blur-3xl"
          style={{ background: 'radial-gradient(circle, hsl(var(--mm-mint)) 0%, transparent 70%)' }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-[1.05fr_1fr] gap-12 lg:gap-16 items-center">
          {/* LEFT — copy */}
          <div className="max-w-2xl">
            <motion.div
              custom={0.2}
              variants={heroVariants}
              initial="hidden"
              animate="visible"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[hsl(var(--mm-coral)/0.12)] border border-[hsl(var(--mm-coral)/0.25)] mb-7 motion-reduce:animate-none"
            >
              <Sparkles size={14} className="text-[hsl(var(--mm-coral-deep))]" />
              <span className="text-xs font-bold text-[hsl(var(--mm-coral-deep))] uppercase tracking-[0.12em]">
                Aplikacja dla dzieci 3–7 lat
              </span>
            </motion.div>

            <motion.h1
              custom={0.45}
              variants={heroVariants}
              initial="hidden"
              animate="visible"
              className="font-display font-extrabold text-[3rem] sm:text-[3.5rem] md:text-[4.25rem] lg:text-[4.75rem] tracking-[-0.035em] leading-[0.98] text-[hsl(var(--mm-navy))] motion-reduce:animate-none"
              style={{ textWrap: 'pretty' } as React.CSSProperties}
            >
              Twoje dziecko{' '}
              <span className="relative inline-block">
                <span
                  className="relative z-10"
                  style={{
                    background:
                      'linear-gradient(135deg, hsl(var(--mm-coral)) 0%, hsl(var(--mm-coral-deep)) 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  samo chce
                </span>
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 200 8"
                  preserveAspectRatio="none"
                  style={{ height: '10px' }}
                >
                  <path
                    d="M 0 4 Q 50 1 100 4 T 200 4"
                    stroke="hsl(var(--mm-yellow))"
                    strokeWidth="3"
                    strokeLinecap="round"
                    fill="none"
                  />
                </svg>
              </span>
              <br />
              się uczyć.
            </motion.h1>

            <motion.p
              custom={0.7}
              variants={heroVariants}
              initial="hidden"
              animate="visible"
              className="mt-7 text-lg md:text-xl text-[hsl(var(--mm-navy-soft))] leading-relaxed max-w-xl motion-reduce:animate-none"
            >
              50+ gier edukacyjnych zgodnych z{' '}
              <span className="font-bold text-[hsl(var(--mm-navy))]">podstawą programową</span>{' '}
              — matematyka, muzyka, pamięć, logika. Stworzone przez pedagogów.{' '}
              <span className="font-bold text-[hsl(var(--mm-navy))]">Bez reklam. Bez mikropłatności.</span>
            </motion.p>

            <motion.div
              custom={1.0}
              variants={heroVariants}
              initial="hidden"
              animate="visible"
              className="mt-9 flex flex-col sm:flex-row items-start sm:items-center gap-4 motion-reduce:animate-none"
            >
              <a
                href="#cta"
                className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-br from-[hsl(var(--mm-coral))] to-[hsl(var(--mm-coral-deep))] text-white font-bold text-base hover:-translate-y-px transition-all duration-200 shadow-lg shadow-[hsl(var(--mm-coral)/0.3)] hover:shadow-xl hover:shadow-[hsl(var(--mm-coral)/0.4)]"
              >
                Wypróbuj bezpłatnie 7 dni
                <ArrowRight size={18} className="group-hover:translate-x-0.5 transition-transform duration-150" />
              </a>
              <a
                href="#solution"
                className="inline-flex items-center gap-2 px-5 py-3.5 text-base font-semibold text-[hsl(var(--mm-navy))] hover:text-[hsl(var(--mm-coral-deep))] transition-colors duration-150"
              >
                Zobacz jak działa
                <span className="text-[hsl(var(--mm-coral))]">→</span>
              </a>
            </motion.div>

            <motion.p
              custom={1.2}
              variants={heroVariants}
              initial="hidden"
              animate="visible"
              className="mt-4 text-sm text-[hsl(var(--mm-navy-soft))] motion-reduce:animate-none"
            >
              Bez karty · Bez reklam · Bez mikropłatności · Anuluj w każdej chwili
            </motion.p>

            {/* Trust badges */}
            <motion.div
              custom={1.45}
              variants={heroVariants}
              initial="hidden"
              animate="visible"
              className="mt-10 pt-8 border-t border-[hsl(var(--mm-coral)/0.15)] grid grid-cols-3 gap-4 max-w-md motion-reduce:animate-none"
            >
              {[
                { icon: Star, value: '4.9/5', label: '500+ rodziców' },
                { icon: BookOpen, value: '50+', label: 'gier edukacyjnych' },
                { icon: ShieldCheck, value: '100%', label: 'podstawa progr.' },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <div className="flex items-center gap-1.5 mb-1">
                    <stat.icon size={14} className="text-[hsl(var(--mm-coral-deep))]" fill="currentColor" strokeWidth={0} />
                    <span className="text-lg font-extrabold text-[hsl(var(--mm-navy))] tracking-tight">{stat.value}</span>
                  </div>
                  <span className="text-xs text-[hsl(var(--mm-navy-soft))]">{stat.label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT — tablet mockup visual */}
          <motion.div
            variants={visualVariants}
            initial="hidden"
            animate="visible"
            className="relative motion-reduce:animate-none"
          >
            <div className="relative mx-auto max-w-md lg:max-w-lg">
              {/* Backdrop glow */}
              <div
                className="absolute -inset-12 rounded-[3rem] opacity-60"
                style={{
                  background:
                    'linear-gradient(135deg, hsl(var(--mm-coral) / 0.25) 0%, hsl(var(--mm-yellow) / 0.22) 50%, hsl(var(--mm-mint) / 0.18) 100%)',
                  filter: 'blur(40px)',
                }}
              />

              {/* Tablet frame */}
              <div className="relative aspect-[3/4] rounded-[2.25rem] bg-gradient-to-br from-[hsl(var(--mm-navy))] to-[hsl(220_35%_28%)] p-3 shadow-2xl ring-1 ring-black/10">
                <div className="relative w-full h-full rounded-[1.75rem] overflow-hidden bg-gradient-to-br from-[hsl(38_100%_96%)] to-[hsl(38_60%_92%)]">
                  {/* Game UI inside tablet */}
                  <div className="absolute inset-0 flex flex-col p-6">
                    {/* Top bar */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="flex items-center gap-2">
                        <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[hsl(var(--mm-coral))] to-[hsl(var(--mm-coral-deep))] flex items-center justify-center shadow-sm">
                          <Sparkles size={16} className="text-white" strokeWidth={2.5} />
                        </div>
                        <span className="font-display font-bold text-sm text-[hsl(var(--mm-navy))]">Master Mode</span>
                      </div>
                      <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-[hsl(var(--mm-yellow)/0.3)] border border-[hsl(var(--mm-yellow)/0.5)]">
                        <Star size={11} className="text-[hsl(var(--mm-coral-deep))]" fill="currentColor" strokeWidth={0} />
                        <span className="text-[11px] font-bold text-[hsl(var(--mm-navy))]">12</span>
                      </div>
                    </div>

                    {/* Game title */}
                    <div className="mb-4">
                      <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[hsl(var(--mm-coral-deep))] mb-1">
                        Matematyka · Poziom 3
                      </p>
                      <h3 className="font-display font-extrabold text-xl text-[hsl(var(--mm-navy))] tracking-tight leading-tight">
                        Ile żabek siedzi na liściu?
                      </h3>
                    </div>

                    {/* Game scene — frogs on a lily pad */}
                    <div className="flex-1 relative rounded-2xl bg-gradient-to-br from-[hsl(158_55%_88%)] to-[hsl(195_70%_90%)] overflow-hidden border border-[hsl(var(--mm-mint)/0.4)]">
                      {/* Lily pad */}
                      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-32 h-8 rounded-[50%] bg-gradient-to-b from-[hsl(130_50%_55%)] to-[hsl(140_60%_40%)] shadow-md" />
                      {/* Frogs (emojis as cartoon characters) */}
                      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-1.5">
                        <span className="text-3xl drop-shadow-sm">🐸</span>
                        <span className="text-3xl drop-shadow-sm">🐸</span>
                        <span className="text-3xl drop-shadow-sm">🐸</span>
                      </div>
                      {/* Sun */}
                      <div className="absolute top-3 right-3 w-10 h-10 rounded-full bg-gradient-to-br from-[hsl(var(--mm-yellow))] to-[hsl(40_90%_55%)] shadow-md" />
                      {/* Cloud */}
                      <div className="absolute top-5 left-4 w-12 h-5 rounded-full bg-white/80" />
                    </div>

                    {/* Answer buttons */}
                    <div className="mt-4 grid grid-cols-4 gap-2">
                      {[2, 3, 4, 5].map((n) => (
                        <div
                          key={n}
                          className={`aspect-square rounded-xl flex items-center justify-center font-display font-extrabold text-lg transition-all ${
                            n === 3
                              ? 'bg-gradient-to-br from-[hsl(var(--mm-coral))] to-[hsl(var(--mm-coral-deep))] text-white shadow-md ring-2 ring-[hsl(var(--mm-yellow))]'
                              : 'bg-white text-[hsl(var(--mm-navy))] shadow-sm border border-[hsl(var(--mm-navy-soft)/0.15)]'
                          }`}
                        >
                          {n}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating badge — parent's view */}
              <motion.div
                custom={1.1}
                variants={floatVariants}
                initial="hidden"
                animate="visible"
                className="absolute -left-4 sm:-left-8 top-20 motion-reduce:animate-none"
              >
                <div className="rounded-2xl bg-white shadow-xl ring-1 ring-black/5 px-4 py-3 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[hsl(var(--mm-mint))] to-[hsl(158_55%_55%)] flex items-center justify-center text-xl">
                    👧
                  </div>
                  <div>
                    <p className="text-[11px] font-bold text-[hsl(var(--mm-navy-soft))] uppercase tracking-wider">Dzisiaj</p>
                    <p className="text-sm font-extrabold text-[hsl(var(--mm-navy))]">15 min nauki ✓</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating badge — achievement */}
              <motion.div
                custom={1.35}
                variants={floatVariants}
                initial="hidden"
                animate="visible"
                className="hidden sm:flex absolute -right-2 sm:-right-6 bottom-24 rounded-2xl bg-white shadow-xl ring-1 ring-black/5 px-4 py-3 items-center gap-3 motion-reduce:animate-none"
              >
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[hsl(var(--mm-yellow))] to-[hsl(38_95%_55%)] flex items-center justify-center text-lg shadow-sm">
                  🏆
                </div>
                <div>
                  <p className="text-sm font-extrabold text-[hsl(var(--mm-navy))] leading-tight">Nowy rekord!</p>
                  <p className="text-[11px] text-[hsl(var(--mm-navy-soft))]">Matematyka · Poziom 3</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
