import { motion } from 'framer-motion'
import { ArrowRight, TrendingUp, Zap, BarChart3, Clock, Brain, Shield } from 'lucide-react'
import HeroShader from './HeroShader'

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.25, 0.4, 0.25, 1] },
})

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-24 pb-8 md:pt-32 md:pb-12">
      {/* Shader background — soft, subtle, not distracting */}
      <HeroShader />
      {/* Grid overlay on top of shader */}
      <div className="absolute inset-0 grid-pattern" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        {/* Kicker badge */}
        <motion.div {...fadeUp(0)} className="motion-reduce:animate-none flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-xs font-medium text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            AI-Powered Ad Management — Now in Beta
          </span>
        </motion.div>

        {/* Main headline — jace.ai style: centered, massive, with big stat */}
        <motion.h1
          {...fadeUp(0.1)}
          className="mt-8 font-display text-5xl sm:text-6xl md:text-7xl lg:text-[5rem] font-medium tracking-tighter leading-[1.05] text-foreground motion-reduce:animate-none"
          style={{ textWrap: 'pretty' }}
        >
          Your ads, managed by{' '}
          <span className="relative inline-block">
            <span className="relative z-10 bg-gradient-to-r from-primary via-primary to-primary/70 bg-clip-text text-transparent">
              specialized AI
            </span>
            {/* Subtle glow behind the stat */}
            <span className="absolute -inset-x-2 -inset-y-1 bg-primary/10 rounded-xl blur-xl" />
          </span>
          <br className="hidden sm:block" />
          — not a generic agency.
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          {...fadeUp(0.2)}
          className="mx-auto mt-6 max-w-2xl text-lg sm:text-xl leading-relaxed text-muted-foreground motion-reduce:animate-none"
        >
          Mozart Ads is an AI agent that monitors, analyzes, and optimizes
          your Meta campaigns 24/7 — making smarter decisions than any
          human media buyer, at a fraction of the cost.
        </motion.p>

        {/* CTAs — centered */}
        <motion.div
          {...fadeUp(0.3)}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 motion-reduce:animate-none"
        >
          <a
            href="https://calendly.com/lukasz-szczurek-mozartway/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-primary via-primary to-primary/80 px-8 py-3.5 text-sm font-medium text-primary-foreground hover:ring-4 hover:ring-primary/20 hover:shadow-xl hover:shadow-primary/25 hover:-translate-y-px transition-all duration-200 group"
          >
            Book a Free Strategy Call
            <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform duration-150" />
          </a>
          <a
            href="#solution"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-border px-8 py-3.5 text-sm font-medium text-foreground/80 hover:bg-muted/50 hover:text-foreground hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-px transition-all duration-200"
          >
            See How It Works
          </a>
        </motion.div>

        {/* Risk reversal */}
        <motion.p
          {...fadeUp(0.35)}
          className="mt-4 text-xs text-muted-foreground/50 motion-reduce:animate-none"
        >
          Free 30-min consultation. 30-day money-back guarantee.
        </motion.p>

        {/* 3 mini value props — jace.ai style step badges */}
        <motion.div
          {...fadeUp(0.4)}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 motion-reduce:animate-none"
        >
          {[
            { icon: Brain, text: 'AI manages your ads 24/7', accent: 'text-primary' },
            { icon: Clock, text: 'Setup in under 2 min', accent: 'text-emerald-400' },
            { icon: Shield, text: 'Full transparency & control', accent: 'text-amber-400' },
          ].map((item) => (
            <div key={item.text} className="flex items-center gap-2.5 text-sm text-muted-foreground">
              <div className={`flex items-center justify-center h-7 w-7 rounded-lg bg-muted/50 ${item.accent}`}>
                <item.icon className="h-3.5 w-3.5" />
              </div>
              <span>{item.text}</span>
            </div>
          ))}
        </motion.div>

        {/* Dashboard mockup — BIG, centered, below the copy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
          className="relative mt-16 md:mt-20 motion-reduce:animate-none"
        >
          {/* Big glow behind dashboard */}
          <div className="absolute -inset-8 bg-primary/8 rounded-[2rem] blur-3xl" />

          <div className="relative rounded-xl border border-border/60 bg-card overflow-hidden shadow-2xl shadow-primary/10">
            {/* Browser chrome */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border/60 bg-muted/30">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-muted-foreground/20" />
                <div className="w-2.5 h-2.5 rounded-full bg-muted-foreground/20" />
                <div className="w-2.5 h-2.5 rounded-full bg-muted-foreground/20" />
              </div>
              <div className="ml-3 flex-1">
                <div className="bg-muted rounded px-3 py-1 text-[11px] font-mono text-muted-foreground max-w-[200px]">
                  app.mozartads.com
                </div>
              </div>
            </div>

            {/* Dashboard content */}
            <div className="p-5 md:p-6 space-y-4">
              {/* Stats row */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {[
                  { icon: TrendingUp, label: 'ROAS', value: '4.8x', change: '+127%', color: 'text-emerald-400' },
                  { icon: Zap, label: 'CPA', value: '$12.40', change: '-34%', color: 'text-emerald-400' },
                  { icon: BarChart3, label: 'Conversions', value: '847', change: '+52%', color: 'text-emerald-400' },
                  { icon: Clock, label: 'Hours Saved', value: '82h', change: 'this month', color: 'text-primary' },
                ].map((stat) => (
                  <div key={stat.label} className="rounded-lg border border-border/40 bg-muted/20 p-3 md:p-4">
                    <div className="flex items-center gap-1.5 mb-2">
                      <stat.icon className="h-3 w-3 text-muted-foreground/60" />
                      <span className="text-[10px] text-muted-foreground/60 uppercase tracking-wider">{stat.label}</span>
                    </div>
                    <div className="text-xl md:text-2xl font-display font-medium text-foreground">{stat.value}</div>
                    <div className={`text-[10px] ${stat.color} font-medium mt-0.5`}>{stat.change}</div>
                  </div>
                ))}
              </div>

              {/* Chart + AI Agent side by side on desktop */}
              <div className="grid md:grid-cols-5 gap-3">
                {/* Chart area — takes 3 cols */}
                <div className="md:col-span-3 rounded-lg border border-border/40 bg-muted/20 p-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] text-muted-foreground font-medium">Performance — 30 Days</span>
                    <span className="text-[10px] text-emerald-400 font-medium">+47% avg improvement</span>
                  </div>
                  <div className="flex items-end gap-[3px] h-24 md:h-28">
                    {[25, 30, 28, 35, 32, 45, 42, 50, 48, 55, 52, 60, 58, 65, 62, 70, 68, 75, 72, 80, 78, 85, 82, 88, 86, 90, 88, 92].map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-[2px]"
                        style={{
                          height: `${h}%`,
                          backgroundColor: `hsl(263 70% ${48 + (i / 28) * 20}%)`,
                          opacity: 0.5 + (i / 28) * 0.5,
                        }}
                      />
                    ))}
                  </div>
                </div>

                {/* AI Agent log — takes 2 cols */}
                <div className="md:col-span-2 rounded-lg border border-border/40 bg-muted/20 p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center">
                      <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                    </div>
                    <span className="text-[11px] text-primary font-medium font-mono">Mozart AI — Active</span>
                  </div>
                  <div className="space-y-2">
                    {[
                      { color: 'text-emerald-400', sym: '↑', action: 'Reallocated $120 → Ad Set 7 (higher ROAS)', time: '2m ago' },
                      { color: 'text-amber-400', sym: '~', action: 'Narrowed audience 25-44 for "Summer Sale"', time: '18m ago' },
                      { color: 'text-red-400', sym: '↓', action: 'Paused "Banner_v3" — CPA 2.4x above avg', time: '1h ago' },
                      { color: 'text-emerald-400', sym: '↑', action: 'Scaled "Video_Reel_2" budget +40%', time: '3h ago' },
                    ].map((log, i) => (
                      <div key={i} className="flex items-start gap-2 text-[11px] text-muted-foreground/70">
                        <span className={`${log.color} mt-px font-mono flex-shrink-0`}>{log.sym}</span>
                        <span className="flex-1">{log.action}</span>
                        <span className="text-muted-foreground/40 flex-shrink-0 text-[10px]">{log.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom fade for smooth transition to next section */}
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent z-20 pointer-events-none" />
        </motion.div>
      </div>
    </section>
  )
}
