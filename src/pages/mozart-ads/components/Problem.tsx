import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { AlertTriangle } from 'lucide-react'

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 10 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.8, delay, ease: [0.25, 0.4, 0.25, 1] },
})

const pains = [
  {
    step: 'You open Meta Business Suite at 8am.',
    detail: 'Campaigns running, money burning. But are they actually working? The numbers look... fine? You think?',
  },
  {
    step: 'So you spend 2 hours digging through dashboards.',
    detail: 'Comparing yesterday vs. last week. Trying to figure out which ad set is bleeding money. You\'re a business owner, not a data analyst.',
  },
  {
    step: 'You tweak something. Maybe the audience. Maybe the budget.',
    detail: 'You\'re guessing. You know it. There\'s no system, no process — just gut feeling and whatever that one YouTube video said.',
  },
  {
    step: 'Next month: same thing. Or worse, you hire an agency.',
    detail: 'They charge you $2K–$5K/month. They have 40 other clients. Your account gets maybe 3 hours of attention per month. Three.',
  },
  {
    step: 'End of month: a PDF lands in your inbox.',
    detail: '"We changed the targeting from A to B and adjusted the budget." That\'s it. That\'s what $3K bought you. You have no idea if it was worth it.',
  },
]

export default function Problem() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="relative py-24 md:py-32 overflow-hidden">
      {/* Section background */}
      <div className="absolute inset-0 bg-muted/30" />
      <div className="absolute inset-0 grid-pattern" />

      <div className="relative z-10 mx-auto max-w-3xl px-6">
        {/* Section header */}
        <motion.div {...fadeUp(0)} className="text-center mb-16 motion-reduce:animate-none">
          <div className="inline-flex items-center gap-2 rounded-full border border-destructive/20 bg-destructive/5 px-3 py-1 text-xs font-medium text-destructive mb-6">
            <AlertTriangle className="h-3 w-3" />
            The Real Problem
          </div>
          <h2
            className="font-display text-3xl sm:text-4xl font-medium tracking-tighter text-foreground"
            style={{ textWrap: 'pretty' }}
          >
            You're burning money on ads you don't understand
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            And the alternatives aren't much better.
          </p>
        </motion.div>

        {/* Cascading pain narrative */}
        <div className="space-y-0">
          {pains.map((pain, i) => (
            <motion.div
              key={i}
              {...fadeUp(0.1 + i * 0.1)}
              className="relative pl-8 pb-8 motion-reduce:animate-none"
            >
              {/* Vertical line */}
              {i < pains.length - 1 && (
                <div className="absolute left-[11px] top-6 bottom-0 w-px bg-gradient-to-b from-border to-border/0" />
              )}
              {/* Dot */}
              <div className="absolute left-0 top-1 h-[22px] w-[22px] rounded-full border border-border bg-card flex items-center justify-center">
                <div className={`h-2 w-2 rounded-full ${i === pains.length - 1 ? 'bg-destructive' : 'bg-muted-foreground/40'}`} />
              </div>

              <p className="text-sm font-medium text-foreground/90 leading-relaxed">
                {pain.step}
              </p>
              <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">
                {pain.detail}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom transition */}
        <motion.div
          {...fadeUp(0.6)}
          className="mt-8 text-center motion-reduce:animate-none"
        >
          <p className="text-sm text-muted-foreground/60 italic">
            Sound familiar? There's a better way.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
