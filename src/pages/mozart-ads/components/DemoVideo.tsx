import { motion, useInView } from 'framer-motion'
import { Play, TrendingUp, Zap, BarChart3, Pause, ArrowUpRight, ArrowDownRight, Brain } from 'lucide-react'
import { useState, useRef, useEffect } from 'react'

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 10 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.8, delay, ease: [0.25, 0.4, 0.25, 1] },
})

/* Animated stat that counts up from 0 to target */
function AnimatedStat({ value, suffix = '', prefix = '', duration = 2 }: { value: number; suffix?: string; prefix?: string; duration?: number }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    let start = 0
    const end = value
    const stepTime = (duration * 1000) / end
    const timer = setInterval(() => {
      start += Math.max(1, Math.floor(end / 60))
      if (start >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(start)
      }
    }, stepTime)
    return () => clearInterval(timer)
  }, [inView, value, duration])

  return <span ref={ref}>{prefix}{count.toLocaleString()}{suffix}</span>
}

/* AI log entries that appear one by one */
const aiActions = [
  { color: 'text-emerald-400', icon: ArrowUpRight, action: 'Scaled "Summer_Reel_v2" budget +45%', result: 'ROAS jumped to 5.2x', time: 'Just now' },
  { color: 'text-amber-400', icon: Brain, action: 'Narrowed audience to 25-34 females', result: 'CTR up 23%', time: '3m ago' },
  { color: 'text-red-400', icon: ArrowDownRight, action: 'Paused "Banner_old_3" — CPA 3x avg', result: 'Saved $89/day', time: '12m ago' },
  { color: 'text-emerald-400', icon: ArrowUpRight, action: 'Reallocated $200 to Ad Set 7', result: 'Higher ROAS cluster', time: '28m ago' },
  { color: 'text-primary', icon: Brain, action: 'A/B test winner detected: Video > Image', result: '+67% conversions', time: '1h ago' },
]

/* Chart bars that animate in sequence */
const chartData = [18, 22, 25, 20, 30, 28, 35, 38, 32, 42, 40, 48, 45, 52, 50, 58, 55, 62, 60, 68, 65, 72, 70, 78, 75, 82, 80, 88, 85, 92]

export default function DemoVideo() {
  const [playing, setPlaying] = useState(false)
  const [visibleLogs, setVisibleLogs] = useState(0)
  const [chartAnimated, setChartAnimated] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  /* Auto-play the demo animation when section comes into view */
  useEffect(() => {
    if (!isInView) return
    const t = setTimeout(() => {
      setPlaying(true)
      setChartAnimated(true)
    }, 600)
    return () => clearTimeout(t)
  }, [isInView])

  /* Stagger AI log entries */
  useEffect(() => {
    if (!playing) return
    if (visibleLogs >= aiActions.length) return
    const t = setTimeout(() => setVisibleLogs((v) => v + 1), 800)
    return () => clearTimeout(t)
  }, [playing, visibleLogs])

  return (
    <section id="demo" ref={sectionRef} className="relative py-24 md:py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.03] to-transparent" />

      <div className="relative z-10 mx-auto max-w-5xl px-6">
        {/* Header */}
        <motion.div {...fadeUp(0)} className="text-center mb-12 motion-reduce:animate-none">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3.5 py-1.5 text-xs font-medium text-primary mb-6">
            <Play className="h-3 w-3" />
            See It In Action
          </span>
          <h2
            className="font-display text-3xl sm:text-4xl font-medium tracking-tighter text-foreground"
            style={{ textWrap: 'pretty' } as React.CSSProperties}
          >
            Watch Mozart optimize ads{' '}
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">in real-time</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-lg mx-auto">
            This is what happens inside your Mozart dashboard every hour — autonomous optimizations, explained in plain English.
          </p>
        </motion.div>

        {/* Animated Dashboard Demo */}
        <motion.div
          {...fadeUp(0.15)}
          className="relative motion-reduce:animate-none"
        >
          {/* Outer gradient glow ring */}
          <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-primary/30 via-primary/10 to-border/10" />
          <div className="absolute -inset-2 rounded-3xl bg-primary/5 blur-xl" />

          <div className="relative rounded-2xl overflow-hidden bg-card border border-border/60 shadow-2xl shadow-primary/10">
            {/* Browser chrome */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border/60 bg-muted/30">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/50" />
              </div>
              <div className="ml-3 flex-1">
                <div className="bg-muted rounded px-3 py-1 text-[11px] font-mono text-muted-foreground max-w-[240px]">
                  app.mozartads.com/dashboard
                </div>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[10px] font-mono text-emerald-400/80">AI Active</span>
              </div>
            </div>

            {/* Dashboard content */}
            <div className="p-4 md:p-6 space-y-4 bg-gradient-to-br from-[#0a0a0a] via-[#0d0a14] to-[#0a0a0a]">
              {/* Stats row with animated counters */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {[
                  { icon: TrendingUp, label: 'ROAS', value: 4.8, suffix: 'x', change: '+127%', color: 'text-emerald-400', glowColor: 'shadow-emerald-500/10' },
                  { icon: Zap, label: 'CPA', prefix: '$', value: 12, suffix: '.40', change: '-56%', color: 'text-emerald-400', glowColor: 'shadow-emerald-500/10' },
                  { icon: BarChart3, label: 'Conversions', value: 847, suffix: '', change: '+52%', color: 'text-emerald-400', glowColor: 'shadow-emerald-500/10' },
                  { icon: Brain, label: 'AI Actions', value: 147, suffix: '', change: 'this week', color: 'text-primary', glowColor: 'shadow-primary/10' },
                ].map((stat) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={playing ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className={`rounded-xl border border-border/40 bg-muted/10 p-3 md:p-4 hover:border-primary/30 hover:bg-muted/20 transition-all duration-200 shadow-lg ${stat.glowColor}`}
                  >
                    <div className="flex items-center gap-1.5 mb-2">
                      <stat.icon className="h-3 w-3 text-muted-foreground/60" />
                      <span className="text-[10px] text-muted-foreground/60 uppercase tracking-wider">{stat.label}</span>
                    </div>
                    <div className="text-xl md:text-2xl font-display font-medium text-foreground">
                      {playing ? (
                        stat.label === 'ROAS' ? '4.8x' :
                        stat.label === 'CPA' ? <AnimatedStat value={12} prefix="$" suffix=".40" /> :
                        <AnimatedStat value={stat.value} suffix={stat.suffix} />
                      ) : '—'}
                    </div>
                    <div className={`text-[10px] ${stat.color} font-medium mt-0.5`}>{stat.change}</div>
                  </motion.div>
                ))}
              </div>

              {/* Chart + AI Agent log */}
              <div className="grid md:grid-cols-5 gap-3">
                {/* Animated chart */}
                <div className="md:col-span-3 rounded-xl border border-border/40 bg-muted/10 p-4 hover:border-primary/20 transition-colors duration-200">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] text-muted-foreground font-medium">Performance — Last 30 Days</span>
                    <span className="text-[10px] text-emerald-400 font-medium bg-emerald-500/10 px-2 py-0.5 rounded-full">+47% avg</span>
                  </div>
                  <div className="flex items-end gap-[2px] h-28 md:h-32">
                    {chartData.map((h, i) => (
                      <motion.div
                        key={i}
                        className="flex-1 rounded-t-[2px]"
                        initial={{ height: 0 }}
                        animate={chartAnimated ? { height: `${h}%` } : { height: 0 }}
                        transition={{ duration: 0.6, delay: i * 0.03, ease: [0.25, 0.4, 0.25, 1] }}
                        style={{
                          background: `linear-gradient(to top, hsl(263 70% ${40 + (i / 30) * 25}%), hsl(263 70% ${55 + (i / 30) * 20}%))`,
                          opacity: 0.4 + (i / 30) * 0.6,
                        }}
                      />
                    ))}
                  </div>
                  {/* X-axis labels */}
                  <div className="flex justify-between mt-2">
                    <span className="text-[9px] text-muted-foreground/30">Feb 27</span>
                    <span className="text-[9px] text-muted-foreground/30">Mar 14</span>
                    <span className="text-[9px] text-muted-foreground/30">Mar 28</span>
                  </div>
                </div>

                {/* AI Agent log with staggered entries */}
                <div className="md:col-span-2 rounded-xl border border-border/40 bg-muted/10 p-4 hover:border-primary/20 transition-colors duration-200">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="h-5 w-5 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center">
                      <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                    </div>
                    <span className="text-[11px] text-primary font-medium font-mono">Mozart AI — Live</span>
                  </div>
                  <div className="space-y-2.5 min-h-[140px]">
                    {aiActions.map((log, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={i < visibleLogs ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                        transition={{ duration: 0.4, ease: 'easeOut' }}
                        className="group"
                      >
                        <div className="flex items-start gap-2 text-[11px]">
                          <log.icon className={`h-3 w-3 mt-0.5 ${log.color} flex-shrink-0`} />
                          <div className="flex-1 min-w-0">
                            <span className="text-muted-foreground/80 block">{log.action}</span>
                            <span className={`text-[10px] ${log.color} font-medium`}>{log.result}</span>
                          </div>
                          <span className="text-muted-foreground/30 flex-shrink-0 text-[9px]">{log.time}</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom status bar */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={playing ? { opacity: 1 } : {}}
                transition={{ delay: 2, duration: 0.6 }}
                className="flex items-center justify-between px-3 py-2 rounded-lg bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 border border-primary/10"
              >
                <div className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[10px] text-muted-foreground/60 font-mono">All systems nominal</span>
                </div>
                <span className="text-[10px] text-primary/60 font-mono">Next optimization check in 4m 32s</span>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Bottom caption */}
        <motion.p
          {...fadeUp(0.3)}
          className="mt-6 text-center text-xs text-muted-foreground/40 motion-reduce:animate-none"
        >
          Real optimization patterns from live campaigns. This is your actual dashboard experience.
        </motion.p>
      </div>
    </section>
  )
}
