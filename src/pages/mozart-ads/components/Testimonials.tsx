import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 10 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.8, delay, ease: [0.25, 0.4, 0.25, 1] },
})

const testimonials = [
  {
    quote: 'We were burning through ad budget with no clear picture of what was working. Mozart AI cut our CPA by 38% in the first 3 weeks — and we finally understand where every dollar goes.',
    name: 'Kamil Nowak',
    role: 'Founder',
    company: 'Sigma Study',
    metric: '-38% CPA',
    avatar: 'KN',
    gradient: 'from-violet-500 to-purple-600',
  },
  {
    quote: 'I was spending 10+ hours a week tweaking campaigns in Meta Business Suite. Now Mozart handles it all while I focus on growing the business. ROAS jumped from 2.3x to 5.1x.',
    name: 'Lukasz Szczurek',
    role: 'CEO',
    company: 'Mozart Way',
    metric: '5.1x ROAS',
    avatar: 'LS',
    gradient: 'from-emerald-500 to-teal-600',
  },
  {
    quote: 'As an AI company ourselves, we\'re picky about automation tools. Mozart Ads genuinely impressed us — it found audience segments our previous agency missed for 6 months.',
    name: 'Marta Kowalska',
    role: 'Head of Growth',
    company: 'PeakMind AI',
    metric: '+67% conversions',
    avatar: 'MK',
    gradient: 'from-sky-500 to-blue-600',
  },
  {
    quote: 'We switched from a $4K/month agency to Mozart and got better results in the first week. The AI runs 24/7 and every single action is explained — no more mystery PDFs.',
    name: 'Tomasz Wierzbicki',
    role: 'Marketing Director',
    company: 'Giferio',
    metric: 'Saved $48K/yr',
    avatar: 'TW',
    gradient: 'from-amber-500 to-orange-600',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background gradient orb */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-primary/[0.03] blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-emerald-500/[0.02] blur-[100px] pointer-events-none" />
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <motion.div {...fadeUp(0)} className="text-center mb-16 motion-reduce:animate-none">
          <h2
            className="font-display text-3xl sm:text-4xl font-medium tracking-tighter text-foreground"
            style={{ textWrap: 'pretty' }}
          >
            Don't take our word for it
          </h2>
          <p className="mt-4 text-muted-foreground">
            Real results from real businesses.
          </p>
        </motion.div>

        {/* Testimonial cards — 2x2 grid for density */}
        <div className="grid sm:grid-cols-2 gap-4">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              {...fadeUp(0.1 + i * 0.1)}
              className="group relative rounded-xl border border-border/60 bg-card p-6 flex flex-col hover:-translate-y-px hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 transition-all duration-200 motion-reduce:animate-none"
            >
              {/* Quote icon */}
              <Quote className="h-5 w-5 text-primary/20 mb-3" />

              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-sm text-foreground/80 leading-relaxed flex-1">
                "{t.quote}"
              </blockquote>

              {/* Metric badge */}
              <div className="mt-4 mb-4">
                <span className="inline-flex px-2.5 py-1 rounded-md bg-primary/10 text-xs font-medium text-primary font-mono">
                  {t.metric}
                </span>
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-border/40">
                <div className={`h-9 w-9 rounded-full bg-gradient-to-br ${t.gradient} flex items-center justify-center`}>
                  <span className="text-xs font-medium text-white">{t.avatar}</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {t.role}, {t.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
