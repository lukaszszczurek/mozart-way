import React from 'react'
import { motion } from 'framer-motion'

function AnimatedCounter({ target, suffix = '', prefix = '' }: { target: number; suffix?: string; prefix?: string }) {
  const [count, setCount] = React.useState(0)
  const ref = React.useRef<HTMLSpanElement>(null)
  const hasAnimated = React.useRef(false)

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          const duration = 2000
          const start = performance.now()
          const step = (now: number) => {
            const progress = Math.min((now - start) / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            setCount(Math.floor(eased * target))
            if (progress < 1) requestAnimationFrame(step)
          }
          requestAnimationFrame(step)
          observer.disconnect()
        }
      },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target])

  return (
    <span ref={ref}>
      {prefix}{count.toLocaleString('pl-PL')}{suffix}
    </span>
  )
}

const stats = [
  { value: 80, suffix: 'h+', label: 'zaoszczędzonych godzin miesięcznie' },
  { value: 30, suffix: ' dni', label: 'do pełnego wdrożenia' },
  { value: 100, suffix: '%', label: 'gwarancja zwrotu pieniędzy' },
  { value: 1, suffix: '', prefix: '', label: 'prosty system zamiast wielu narzędzi' },
]

export default function Stats() {
  return (
    <section className="py-20 bg-primary">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="text-center motion-reduce:animate-none"
            >
              <div className="font-display font-semibold text-4xl md:text-5xl tracking-tighter text-primary-foreground">
                <AnimatedCounter target={stat.value} suffix={stat.suffix} prefix={stat.prefix} />
              </div>
              <p className="mt-2 text-sm text-primary-foreground/90">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
