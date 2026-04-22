import { motion } from 'framer-motion'
import { Building2, GraduationCap, BookOpen, Users, Music, Palette } from 'lucide-react'

const institutionTypes = [
  { icon: GraduationCap, name: 'Szkoły korepetycji', count: '12+' },
  { icon: BookOpen, name: 'Szkoły językowe', count: '8+' },
  { icon: Building2, name: 'Centra szkoleniowe', count: '5+' },
  { icon: Users, name: 'Przedszkola i żłobki', count: '6+' },
  { icon: Music, name: 'Szkoły muzyczne', count: '4+' },
  { icon: Palette, name: 'Szkoły artystyczne', count: '3+' },
]

export default function TrustedBy() {
  return (
    <section className="py-16 border-y border-[hsl(var(--border))]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-sm font-medium text-muted-foreground uppercase tracking-widest mb-10"
        >
          Zaufało nam ponad 40 placówek edukacyjnych w Polsce
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {institutionTypes.map((inst, i) => (
            <motion.div
              key={inst.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="flex flex-col items-center gap-2 py-4 px-3 rounded-xl bg-[hsl(var(--muted))]/50 border border-[hsl(var(--border))]/50 motion-reduce:animate-none"
            >
              <inst.icon size={22} className="text-primary" strokeWidth={1.5} />
              <span className="text-xs font-medium text-foreground text-center leading-tight">
                {inst.name}
              </span>
              <span className="text-xs text-[hsl(var(--accent))] font-semibold">
                {inst.count}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
