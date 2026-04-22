import { motion } from 'framer-motion'
import { Star, Users, Sparkles, BookOpen } from 'lucide-react'

const stats = [
  { icon: Users, value: '500+', label: 'aktywnych dzieci' },
  { icon: Star, value: '4.9/5', label: 'ocena rodziców' },
  { icon: Sparkles, value: '50+', label: 'gier edukacyjnych' },
  { icon: BookOpen, value: '100%', label: 'podstawa programowa' },
]

export default function TrustedBy() {
  return (
    <section className="relative py-16 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-xs font-bold uppercase tracking-[0.18em] text-[hsl(var(--mm-coral-deep))] mb-10 motion-reduce:animate-none"
        >
          Zaufały nam przedszkola i rodzice w całej Polsce
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="flex flex-col items-center text-center motion-reduce:animate-none"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[hsl(var(--mm-coral)/0.15)] to-[hsl(var(--mm-yellow)/0.15)] flex items-center justify-center mb-3 ring-1 ring-[hsl(var(--mm-coral)/0.2)]">
                <stat.icon size={22} className="text-[hsl(var(--mm-coral-deep))]" strokeWidth={2.2} />
              </div>
              <div className="font-display font-extrabold text-3xl text-[hsl(var(--mm-navy))] tracking-tight mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-[hsl(var(--mm-navy-soft))] font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
