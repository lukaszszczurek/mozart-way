import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { cn } from '@/lib/utils'

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 10 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.8, delay, ease: [0.25, 0.4, 0.25, 1] },
})

const plans = [
  {
    name: 'Starter',
    price: '$99',
    period: '/month',
    description: 'For businesses spending up to $5K/mo on Meta ads.',
    features: [
      '1 Meta ad account',
      'AI optimization 24/7',
      'Real-time dashboard',
      'Weekly performance reports',
      'Budget guardrails',
      'Email support',
    ],
  },
  {
    name: 'Growth',
    price: '$249',
    period: '/month',
    description: 'For businesses spending $5K-$25K/mo on Meta ads.',
    features: [
      'Up to 3 Meta ad accounts',
      'AI optimization 24/7',
      'Advanced analytics & attribution',
      'Daily AI action reports',
      'Creative performance scoring',
      'A/B test automation',
      'Priority support',
    ],
    highlight: true,
  },
  {
    name: 'Scale',
    price: '$499',
    period: '/month',
    description: 'For businesses spending $25K+/mo on Meta ads.',
    features: [
      'Unlimited Meta ad accounts',
      'AI optimization 24/7',
      'Custom AI training on your data',
      'Real-time Slack notifications',
      'Multi-account portfolio view',
      'API access',
      'Dedicated success manager',
      'Custom integrations',
    ],
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-24 md:py-32">
      <div className="absolute inset-0 bg-muted/30" />
      <div className="absolute inset-0 grid-pattern" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        {/* Header */}
        <motion.div {...fadeUp(0)} className="text-center mb-16 motion-reduce:animate-none">
          <h2
            className="font-display text-3xl sm:text-4xl font-medium tracking-tighter text-foreground"
            style={{ textWrap: 'pretty' }}
          >
            Less than your agency. Better results.
          </h2>
          <p className="mt-4 text-muted-foreground max-w-lg mx-auto">
            14-day free trial on every plan. No credit card required. Cancel anytime.
          </p>
        </motion.div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-3 gap-4">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              {...fadeUp(0.1 + i * 0.1)}
              className={cn(
                'relative rounded-xl border p-6 flex flex-col motion-reduce:animate-none',
                plan.highlight
                  ? 'border-primary/40 bg-primary/5 ring-1 ring-primary/20'
                  : 'border-border/60 bg-card'
              )}
            >
              {plan.highlight && (
                <div className="absolute -top-3 left-6 px-3 py-0.5 rounded-full bg-primary text-[11px] font-medium text-primary-foreground">
                  Most Popular
                </div>
              )}

              <h3 className="font-display text-base font-medium text-foreground">{plan.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{plan.description}</p>

              <div className="mt-5 mb-6">
                <span className="font-display text-4xl font-medium tracking-tighter text-foreground">{plan.price}</span>
                <span className="text-sm text-muted-foreground">{plan.period}</span>
              </div>

              <a
                href="#cta"
                className={cn(
                  'inline-flex items-center justify-center rounded-lg px-4 py-2.5 text-sm font-medium transition-all duration-150 mb-6',
                  plan.highlight
                    ? 'bg-primary text-primary-foreground hover:ring-4 hover:ring-primary/20'
                    : 'border border-border text-foreground hover:bg-muted/50'
                )}
              >
                Start Free Trial
              </a>

              <div className="space-y-3 flex-1">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-2.5">
                    <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          {...fadeUp(0.5)}
          className="mt-8 text-center text-xs text-muted-foreground/50 motion-reduce:animate-none"
        >
          All plans include a 14-day free trial. No credit card required. Prices in USD.
        </motion.p>
      </div>
    </section>
  )
}
