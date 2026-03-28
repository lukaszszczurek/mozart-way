import { motion } from 'framer-motion'
import { X, Minus, Check } from 'lucide-react'
import { cn } from '@/lib/utils'

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 10 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.8, delay, ease: [0.25, 0.4, 0.25, 1] },
})

const approaches = [
  {
    title: 'DIY with Meta Business Suite',
    verdict: "You're guessing",
    description: 'You spend hours in dashboards but you\'re not a media buyer. You optimize by gut feeling, not data science. Every wrong tweak burns budget.',
    items: [
      { label: 'Time investment', value: '10-15h/week', bad: true },
      { label: 'Expertise level', value: 'Trial & error', bad: true },
      { label: 'Optimization speed', value: 'When you remember', bad: true },
      { label: 'Cost', value: 'Free (+ wasted ad spend)', bad: true },
    ],
  },
  {
    title: 'Marketing Agency',
    verdict: '3 hours of attention per month',
    description: 'They have 40+ clients. Your account gets a junior media buyer for 3 hours a month. End of month: a PDF you can\'t act on.',
    items: [
      { label: 'Time investment', value: 'Minimal (you hope)', neutral: true },
      { label: 'Expertise level', value: 'Generic playbook', bad: true },
      { label: 'Optimization speed', value: 'Monthly reviews', bad: true },
      { label: 'Cost', value: '$2K-$5K/month', bad: true },
    ],
  },
  {
    title: 'Mozart Ads',
    verdict: '24/7 AI optimization',
    description: 'An AI agent that only works on YOUR campaigns. It learns from your data, optimizes in real-time, and shows you exactly what it did and why.',
    items: [
      { label: 'Time investment', value: '2 min setup', good: true },
      { label: 'Expertise level', value: 'AI trained on your data', good: true },
      { label: 'Optimization speed', value: 'Real-time, 24/7', good: true },
      { label: 'Cost', value: 'From $99/month', good: true },
    ],
    highlight: true,
  },
]

export default function Comparison() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <motion.div {...fadeUp(0)} className="text-center mb-16 motion-reduce:animate-none">
          <h2
            className="font-display text-3xl sm:text-4xl font-medium tracking-tighter text-foreground"
            style={{ textWrap: 'pretty' }}
          >
            What you've tried — and why it didn't work
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Every approach has a fundamental flaw. Here's the honest breakdown.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-3 gap-4">
          {approaches.map((approach, i) => (
            <motion.div
              key={approach.title}
              {...fadeUp(0.1 + i * 0.1)}
              className={cn(
                'relative rounded-xl border p-6 transition-all duration-150 motion-reduce:animate-none',
                approach.highlight
                  ? 'border-primary/40 bg-gradient-to-b from-primary/10 to-primary/5 ring-1 ring-primary/20 shadow-lg shadow-primary/10 hover:shadow-xl hover:shadow-primary/20'
                  : 'border-border/60 bg-card hover:-translate-y-px hover:border-border hover:shadow-lg hover:shadow-black/10'
              )}
            >
              {approach.highlight && (
                <div className="absolute -top-3 left-6 px-3 py-0.5 rounded-full bg-primary text-[11px] font-medium text-primary-foreground">
                  Recommended
                </div>
              )}

              <h3 className="font-display text-base font-medium text-foreground">
                {approach.title}
              </h3>
              <p className={cn(
                'mt-1 text-xs font-medium',
                approach.highlight ? 'text-primary' : 'text-muted-foreground/60'
              )}>
                {approach.verdict}
              </p>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                {approach.description}
              </p>

              <div className="mt-5 space-y-3">
                {approach.items.map((item) => (
                  <div key={item.label} className="flex items-center justify-between gap-2">
                    <span className="text-xs text-muted-foreground/70">{item.label}</span>
                    <div className="flex items-center gap-1.5">
                      <span className={cn(
                        'text-xs font-medium',
                        'good' in item && item.good ? 'text-emerald-400' :
                        'bad' in item && item.bad ? 'text-foreground/50' :
                        'text-muted-foreground'
                      )}>
                        {item.value}
                      </span>
                      {'good' in item && item.good && <Check className="h-3 w-3 text-emerald-400" />}
                      {'bad' in item && item.bad && <X className="h-3 w-3 text-muted-foreground/40" />}
                      {'neutral' in item && item.neutral && <Minus className="h-3 w-3 text-muted-foreground/40" />}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
