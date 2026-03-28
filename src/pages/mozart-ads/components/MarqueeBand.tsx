import { Zap, TrendingUp, Clock, Shield } from 'lucide-react'

const items = [
  { icon: TrendingUp, text: '4.8x average ROAS' },
  { icon: Zap, text: '-34% average CPA reduction' },
  { icon: Clock, text: '82 hours saved per month' },
  { icon: Shield, text: '30-day money-back guarantee' },
  { icon: TrendingUp, text: '+127% performance improvement' },
  { icon: Zap, text: '24/7 AI optimization' },
  { icon: Clock, text: '2-minute setup' },
  { icon: Shield, text: 'Full transparency on every action' },
]

export default function MarqueeBand() {
  return (
    <div className="relative py-4 border-y border-border/30 bg-gradient-to-r from-primary/[0.02] via-primary/[0.05] to-primary/[0.02] overflow-hidden">
      <div className="flex marquee-band whitespace-nowrap">
        {[...items, ...items].map((item, i) => (
          <div
            key={i}
            className="inline-flex items-center gap-2 mx-8 text-xs text-muted-foreground/40"
          >
            <item.icon className="h-3 w-3 text-primary/30 flex-shrink-0" />
            <span className="font-mono">{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
