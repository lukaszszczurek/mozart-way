import { motion } from 'framer-motion'
import { Link, Brain, Rocket, ArrowRight, CheckCircle2, Zap, TrendingUp, BarChart3, Users, DollarSign, Eye, MousePointerClick, Target } from 'lucide-react'

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 10 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.8, delay, ease: [0.25, 0.4, 0.25, 1] },
})

/* ── Step 1 Mockup: Account connection visual ── */
function ConnectMockup() {
  const accounts = [
    { name: 'Meta Business Suite', status: 'Connected', icon: '◉', color: 'text-blue-400', borderColor: 'border-blue-500/30', bgColor: 'bg-blue-500/10' },
    { name: 'Instagram Ads', status: 'Connected', icon: '◉', color: 'text-pink-400', borderColor: 'border-pink-500/30', bgColor: 'bg-pink-500/10' },
    { name: 'Google Analytics', status: 'Syncing…', icon: '◎', color: 'text-amber-400', borderColor: 'border-amber-500/30', bgColor: 'bg-amber-500/10' },
  ]

  return (
    <div className="rounded-xl border border-border/40 bg-card/60 backdrop-blur-sm overflow-hidden">
      {/* Window chrome */}
      <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-border/30 bg-muted/20">
        <span className="h-2 w-2 rounded-full bg-red-400/60" />
        <span className="h-2 w-2 rounded-full bg-amber-400/60" />
        <span className="h-2 w-2 rounded-full bg-emerald-400/60" />
        <span className="ml-3 text-[10px] text-muted-foreground/40 font-mono">mozart.ai / connect</span>
      </div>

      <div className="p-4 space-y-2.5">
        {accounts.map((acc, i) => (
          <motion.div
            key={acc.name}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 + i * 0.15 }}
            className={`flex items-center justify-between rounded-lg border ${acc.borderColor} ${acc.bgColor} px-3.5 py-2.5`}
          >
            <div className="flex items-center gap-2.5">
              <span className={`text-sm ${acc.color}`}>{acc.icon}</span>
              <span className="text-xs font-medium text-foreground/90">{acc.name}</span>
            </div>
            <span className={`text-[10px] font-mono ${acc.status === 'Connected' ? 'text-emerald-400' : 'text-amber-400'}`}>
              {acc.status === 'Connected' && <CheckCircle2 className="inline h-3 w-3 mr-1" />}
              {acc.status}
            </span>
          </motion.div>
        ))}

        {/* Stats bar */}
        <div className="mt-3 pt-3 border-t border-border/20 grid grid-cols-3 gap-2">
          {[
            { label: 'Accounts', value: '3' },
            { label: 'Campaigns', value: '12' },
            { label: 'Events', value: '24.8K' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-sm font-medium text-foreground/80 font-mono">{stat.value}</div>
              <div className="text-[9px] text-muted-foreground/50">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

/* ── Step 2 Mockup: AI analysis dashboard ── */
function AnalysisMockup() {
  const insights = [
    { icon: Users, label: 'Best Audience', value: 'Women 25-34', confidence: 92 },
    { icon: Eye, label: 'Peak Hours', value: '6PM – 10PM', confidence: 87 },
    { icon: MousePointerClick, label: 'Top Creative', value: 'Video Reels', confidence: 95 },
  ]

  // Simple bar chart data
  const bars = [35, 52, 78, 95, 68, 82, 90]
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

  return (
    <div className="rounded-xl border border-border/40 bg-card/60 backdrop-blur-sm overflow-hidden">
      {/* Window chrome */}
      <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-border/30 bg-muted/20">
        <span className="h-2 w-2 rounded-full bg-red-400/60" />
        <span className="h-2 w-2 rounded-full bg-amber-400/60" />
        <span className="h-2 w-2 rounded-full bg-emerald-400/60" />
        <span className="ml-3 text-[10px] text-muted-foreground/40 font-mono">mozart.ai / insights</span>
      </div>

      <div className="p-4">
        {/* Mini chart */}
        <div className="mb-4 p-3 rounded-lg border border-border/20 bg-muted/10">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] text-muted-foreground/60 font-mono">Performance Score</span>
            <span className="text-[10px] text-emerald-400 font-mono flex items-center gap-1">
              <TrendingUp className="h-2.5 w-2.5" /> +127%
            </span>
          </div>
          <div className="flex items-end gap-1 h-12">
            {bars.map((height, i) => (
              <motion.div
                key={i}
                initial={{ height: 0 }}
                whileInView={{ height: `${height}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 + i * 0.08, ease: 'easeOut' }}
                className="flex-1 rounded-sm bg-gradient-to-t from-primary/60 to-primary/30"
              />
            ))}
          </div>
          <div className="flex gap-1 mt-1">
            {days.map((d) => (
              <span key={d} className="flex-1 text-center text-[7px] text-muted-foreground/30">{d}</span>
            ))}
          </div>
        </div>

        {/* Insight cards */}
        <div className="space-y-2">
          {insights.map((ins, i) => (
            <motion.div
              key={ins.label}
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.6 + i * 0.12 }}
              className="flex items-center gap-3 rounded-lg border border-border/20 bg-muted/10 px-3 py-2"
            >
              <ins.icon className="h-3.5 w-3.5 text-primary/70 flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <div className="text-[10px] text-muted-foreground/50">{ins.label}</div>
                <div className="text-xs font-medium text-foreground/80">{ins.value}</div>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-10 h-1.5 rounded-full bg-muted/30 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${ins.confidence}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.8 + i * 0.12 }}
                    className="h-full rounded-full bg-gradient-to-r from-primary/50 to-primary"
                  />
                </div>
                <span className="text-[9px] text-muted-foreground/40 font-mono w-6 text-right">{ins.confidence}%</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

/* ── Step 3 Mockup: Live optimization dashboard ── */
function OptimizationMockup() {
  const metrics = [
    { icon: Target, label: 'ROAS', before: '2.1x', after: '4.8x', change: '+127%', positive: true },
    { icon: DollarSign, label: 'CPA', before: '$28.50', after: '$12.40', change: '-56%', positive: true },
    { icon: BarChart3, label: 'CTR', before: '1.2%', after: '3.8%', change: '+216%', positive: true },
  ]

  const actions = [
    { text: 'Paused underperforming ad set "Broad M25-44"', time: '2m ago', type: 'pause' },
    { text: 'Increased budget on "Lookalike W25-34" by 30%', time: '14m ago', type: 'boost' },
    { text: 'New creative test launched: Video Reel v3', time: '1h ago', type: 'test' },
  ]

  return (
    <div className="rounded-xl border border-border/40 bg-card/60 backdrop-blur-sm overflow-hidden">
      {/* Window chrome */}
      <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-border/30 bg-muted/20">
        <span className="h-2 w-2 rounded-full bg-red-400/60" />
        <span className="h-2 w-2 rounded-full bg-amber-400/60" />
        <span className="h-2 w-2 rounded-full bg-emerald-400/60" />
        <span className="ml-3 text-[10px] text-muted-foreground/40 font-mono">mozart.ai / dashboard</span>
      </div>

      <div className="p-4">
        {/* Metrics row */}
        <div className="grid grid-cols-3 gap-2 mb-4">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              className="rounded-lg border border-border/20 bg-muted/10 p-2.5 text-center"
            >
              <m.icon className="h-3 w-3 text-primary/50 mx-auto mb-1" />
              <div className="text-[9px] text-muted-foreground/40 mb-0.5">{m.label}</div>
              <div className="text-sm font-medium text-foreground/90 font-mono">{m.after}</div>
              <div className="flex items-center justify-center gap-1 mt-0.5">
                <span className="text-[8px] text-muted-foreground/30 line-through">{m.before}</span>
                <span className="text-[9px] text-emerald-400 font-mono">{m.change}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Live action feed */}
        <div className="rounded-lg border border-border/20 bg-muted/10 p-3">
          <div className="flex items-center gap-1.5 mb-2.5">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            <span className="text-[10px] text-muted-foreground/50 font-mono">Live Actions</span>
          </div>
          <div className="space-y-1.5">
            {actions.map((action, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -6 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.5 + i * 0.15 }}
                className="flex items-start gap-2"
              >
                <Zap className="h-2.5 w-2.5 text-primary/50 mt-0.5 flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <span className="text-[10px] text-foreground/60 leading-tight block">{action.text}</span>
                  <span className="text-[8px] text-muted-foreground/30">{action.time}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

/* ── Steps data ── */
const steps = [
  {
    icon: Link,
    number: '01',
    title: 'Connect your Meta account',
    description: 'Link your Meta Business Suite in 2 clicks. Mozart reads your campaigns, ad sets, creatives, and all historical performance data.',
    badge: 'Takes 2 min',
    badgeColor: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    mockup: ConnectMockup,
  },
  {
    icon: Brain,
    number: '02',
    title: 'AI learns your business',
    description: "Mozart analyzes your historical data, identifies winning patterns, and builds a model specific to YOUR audience and products.",
    badge: 'Takes 24 hours',
    badgeColor: 'bg-primary/10 text-primary border-primary/20',
    mockup: AnalysisMockup,
  },
  {
    icon: Rocket,
    number: '03',
    title: 'Watch your ads get better every day',
    description: 'The AI agent monitors, adjusts, and optimizes 24/7 — reallocating budget to winners, pausing losers, testing new audiences.',
    badge: 'AI runs 24/7',
    badgeColor: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
    mockup: OptimizationMockup,
  },
]

export default function Solution() {
  return (
    <section id="solution" className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent">
      <div className="relative z-10 mx-auto max-w-5xl px-6">
        {/* Header */}
        <motion.div {...fadeUp(0)} className="text-center mb-20 motion-reduce:animate-none">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3.5 py-1.5 text-xs font-medium text-primary mb-6">
            How It Works
          </span>
          <h2
            className="font-display text-3xl sm:text-4xl md:text-5xl font-medium tracking-tighter text-foreground"
            style={{ textWrap: 'pretty' } as React.CSSProperties}
          >
            From zero to{' '}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-emerald-400 via-primary to-primary/70 bg-clip-text text-transparent">
                smarter ads
              </span>
              <span className="absolute -inset-x-2 -inset-y-1 bg-primary/8 rounded-xl blur-xl" />
            </span>
            {' '}in minutes
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Three dead-simple steps. No technical knowledge needed. No onboarding calls. Just connect and let Mozart work.
          </p>
        </motion.div>

        {/* Steps — alternating layout with visual mockups */}
        <div className="space-y-16 md:space-y-24">
          {steps.map((step, i) => {
            const isReversed = i % 2 === 1
            const MockupComponent = step.mockup

            return (
              <motion.div
                key={step.number}
                {...fadeUp(0.1 + i * 0.1)}
                className={`flex flex-col ${isReversed ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 md:gap-12 items-center motion-reduce:animate-none`}
              >
                {/* Text side */}
                <div className="flex-1 w-full md:w-auto">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex items-center justify-center h-10 w-10 rounded-xl border border-border/60 bg-muted/30">
                      <span className="font-mono text-sm text-muted-foreground/40">{step.number}</span>
                    </div>
                    <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-primary/15 to-primary/5 flex items-center justify-center">
                      <step.icon className="h-5 w-5 text-primary" />
                    </div>
                    <span className={`text-[11px] font-medium px-2.5 py-1 rounded-full border ${step.badgeColor}`}>
                      {step.badge}
                    </span>
                  </div>

                  <h3 className="font-display text-2xl md:text-3xl font-medium tracking-tight text-foreground mb-3">
                    {step.title}
                  </h3>

                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-md">
                    {step.description}
                  </p>
                </div>

                {/* Visual mockup side */}
                <div className="flex-1 w-full md:w-auto max-w-sm md:max-w-none">
                  <MockupComponent />
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Connecting line between steps (desktop only) */}
        <div className="hidden md:block absolute left-1/2 top-[280px] bottom-[180px] w-px -translate-x-1/2"
          style={{
            background: 'linear-gradient(to bottom, transparent, hsl(263 70% 58% / 0.15) 15%, hsl(263 70% 58% / 0.15) 85%, transparent)',
          }}
        />

        {/* Bottom CTA */}
        <motion.div
          {...fadeUp(0.2)}
          className="mt-20 text-center motion-reduce:animate-none"
        >
          <a
            href="https://calendly.com/lukasz-szczurek-mozartway/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-primary to-primary/80 px-6 py-3 text-sm font-medium text-primary-foreground hover:ring-4 hover:ring-primary/20 hover:shadow-xl hover:shadow-primary/25 hover:-translate-y-px transition-all duration-200 group"
          >
            Book a Free Strategy Call
            <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform duration-150" />
          </a>
          <p className="mt-3 text-xs text-muted-foreground/50">
            Free 30-min consultation. 30-day money-back guarantee.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
