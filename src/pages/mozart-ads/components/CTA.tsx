import { motion } from 'framer-motion'
import { ArrowRight, Shield, Clock, BadgeCheck, CircleDollarSign } from 'lucide-react'

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 10 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.8, delay, ease: [0.25, 0.4, 0.25, 1] },
})

export default function CTA() {
  return (
    <section id="cta" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background glow — layered gradient orbs */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[700px] h-[500px] bg-gradient-to-br from-primary/15 via-primary/8 to-transparent rounded-full blur-[160px]" />
      </div>
      <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-emerald-500/[0.04] rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[250px] h-[250px] bg-primary/[0.06] rounded-full blur-[80px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-2xl px-6 text-center">
        <motion.div {...fadeUp(0)} className="motion-reduce:animate-none">
          <h2
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tighter text-foreground"
            style={{ textWrap: 'pretty' }}
          >
            Let AI manage your ads — while you focus on growth.
          </h2>
        </motion.div>

        <motion.p
          {...fadeUp(0.1)}
          className="mt-5 text-base sm:text-lg text-muted-foreground max-w-md mx-auto motion-reduce:animate-none"
        >
          Book a free 30-minute strategy call. We'll show you exactly how Mozart AI can take over your ad management.
        </motion.p>

        {/* Money-back guarantee badge */}
        <motion.div
          {...fadeUp(0.15)}
          className="mt-8 inline-flex items-center gap-3 rounded-xl border border-emerald-500/20 bg-emerald-500/5 px-5 py-3 motion-reduce:animate-none"
        >
          <div className="flex items-center justify-center h-10 w-10 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex-shrink-0">
            <CircleDollarSign className="h-5 w-5 text-emerald-400" />
          </div>
          <div className="text-left">
            <p className="text-sm font-medium text-emerald-400">30-Day Money-Back Guarantee</p>
            <p className="text-xs text-muted-foreground/60">If Mozart doesn't improve your ad performance, you get a full refund. No questions asked.</p>
          </div>
        </motion.div>

        <motion.div
          {...fadeUp(0.2)}
          className="mt-8 flex flex-col sm:flex-row gap-3 justify-center motion-reduce:animate-none"
        >
          <a
            href="https://calendly.com/lukasz-szczurek-mozartway/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-primary via-primary to-primary/80 px-8 py-4 text-base font-medium text-primary-foreground hover:ring-4 hover:ring-primary/20 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-px transition-all duration-200 group"
          >
            Book Your Free Strategy Call
            <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform duration-150" />
          </a>
        </motion.div>

        <motion.p
          {...fadeUp(0.3)}
          className="mt-4 text-xs text-muted-foreground/50 motion-reduce:animate-none"
        >
          Free consultation. No commitment. No hard sell.
        </motion.p>

        {/* Trust badges */}
        <motion.div
          {...fadeUp(0.4)}
          className="mt-12 flex items-center justify-center gap-6 sm:gap-8 motion-reduce:animate-none"
        >
          {[
            { icon: Shield, label: 'Your data stays private' },
            { icon: Clock, label: '30-min call' },
            { icon: BadgeCheck, label: '30-day money-back guarantee' },
          ].map((badge) => (
            <div key={badge.label} className="flex items-center gap-2">
              <badge.icon className="h-3.5 w-3.5 text-muted-foreground/40" />
              <span className="text-[11px] text-muted-foreground/50">{badge.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
