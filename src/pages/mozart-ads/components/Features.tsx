import { motion } from 'framer-motion'
import { Brain, BarChart3, Clock, Shield, Zap, Eye } from 'lucide-react'

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 10 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.8, delay, ease: [0.25, 0.4, 0.25, 1] },
})

const features = [
  {
    icon: Brain,
    title: 'Learns from YOUR data',
    description: "Not a generic algorithm. Mozart builds a model specific to your audience, your products, and your conversion patterns — getting smarter with every impression.",
    stat: '92% model accuracy',
    statColor: 'text-primary',
  },
  {
    icon: Clock,
    title: '24/7 optimization',
    description: 'While you sleep, Mozart reallocates budgets, pauses underperformers, and scales winners. Every hour — not once a month when your agency remembers.',
    stat: '147 optimizations/week',
    statColor: 'text-emerald-400',
  },
  {
    icon: Eye,
    title: 'Full transparency',
    description: "Every action the AI takes is logged and explained in plain English. No black boxes, no mystery PDFs. You see exactly what changed, why, and what it cost.",
    stat: 'Every action explained',
    statColor: 'text-amber-400',
  },
  {
    icon: BarChart3,
    title: 'Real-time analytics',
    description: "One dashboard for all your campaigns. ROAS, CPA, conversions — updated in real-time. No more waiting 30 days for a PDF that says 'we adjusted the targeting.'",
    stat: 'Live data, not monthly reports',
    statColor: 'text-primary',
  },
  {
    icon: Zap,
    title: 'Instant setup',
    description: 'Connect your Meta account in 2 minutes. No technical knowledge required, no onboarding calls, no 6-week implementation process. Just connect and let Mozart work.',
    stat: '2-minute setup',
    statColor: 'text-emerald-400',
  },
  {
    icon: Shield,
    title: 'Budget protection',
    description: "Set spending limits and guardrails. Mozart will never exceed your budget or make changes you haven't pre-approved. You stay in control — AI handles the execution.",
    stat: 'Your rules, AI execution',
    statColor: 'text-amber-400',
  },
]

export default function Features() {
  return (
    <section id="features" className="relative py-24 md:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-muted/30 via-muted/40 to-muted/30" />
      {/* Decorative gradient orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full bg-primary/[0.03] blur-[120px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-5xl px-6">
        {/* Header */}
        <motion.div {...fadeUp(0)} className="text-center mb-16 motion-reduce:animate-none">
          <h2
            className="font-display text-3xl sm:text-4xl font-medium tracking-tighter text-foreground"
            style={{ textWrap: 'pretty' }}
          >
            Everything your agency promised, actually delivered
          </h2>
          <p className="mt-4 text-muted-foreground max-w-lg mx-auto">
            Six things Mozart Ads does better than any human media buyer — at a fraction of the cost.
          </p>
        </motion.div>

        {/* Feature grid — text-focused, no heavy diagrams */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              {...fadeUp(0.05 + i * 0.08)}
              className="group rounded-xl border border-border/60 bg-card p-6 hover:-translate-y-px hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-200 motion-reduce:animate-none"
            >
              {/* Icon + stat */}
              <div className="flex items-center justify-between mb-4">
                <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-primary/15 to-primary/5 border border-primary/10 flex items-center justify-center group-hover:from-primary/25 group-hover:to-primary/10 transition-all duration-200">
                  <feature.icon className="h-5 w-5 text-primary group-hover:scale-110 transition-transform duration-200" />
                </div>
                <span className={`text-[11px] font-mono font-medium ${feature.statColor}`}>
                  {feature.stat}
                </span>
              </div>

              {/* Text content */}
              <h3 className="font-display text-base font-medium text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
