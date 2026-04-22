import { motion } from 'framer-motion'
import { Shield, Lock, Server, HeadphonesIcon, FileCheck, Award } from 'lucide-react'

const trustItems = [
  {
    icon: Shield,
    title: 'Zgodność z RODO',
    desc: 'Pełna zgodność z przepisami o ochronie danych osobowych. Dane uczniów i rodziców są bezpieczne.',
  },
  {
    icon: Lock,
    title: 'Szyfrowanie SSL/TLS',
    desc: 'Cała komunikacja jest szyfrowana. Nikt postronny nie ma dostępu do Twoich danych.',
  },
  {
    icon: Server,
    title: 'Serwery w UE',
    desc: 'Dane przechowywane na serwerach w Unii Europejskiej — zgodnie z europejskimi standardami.',
  },
  {
    icon: HeadphonesIcon,
    title: 'Wsparcie po-wdrożeniowe',
    desc: 'Dedykowany opiekun. Pomoc techniczna w ciągu 4h w dni robocze. Nie zostawiamy Cię samego.',
  },
  {
    icon: FileCheck,
    title: 'Umowa i SLA',
    desc: 'Formalna umowa wdrożeniowa z gwarantowanym poziomem usług. Transparentne warunki.',
  },
  {
    icon: Award,
    title: '100% gwarancja zwrotu',
    desc: 'Jeśli w ciągu 30 dni system nie spełni Twoich oczekiwań — zwracamy 100% pieniędzy.',
  },
]

export default function Trust() {
  return (
    <section className="relative py-24 overflow-hidden" style={{ background: 'linear-gradient(180deg, hsl(220 55% 96%) 0%, hsl(220 40% 98%) 50%, hsl(var(--background)) 100%)' }}>
      {/* Decorative accent shapes */}
      <div className="absolute top-20 left-10 w-72 h-72 rounded-full opacity-[0.07]" style={{ background: 'radial-gradient(circle, hsl(220 55% 22%) 0%, transparent 70%)' }} />
      <div className="absolute bottom-10 right-20 w-56 h-56 rounded-full opacity-[0.05]" style={{ background: 'radial-gradient(circle, hsl(38 92% 50%) 0%, transparent 70%)' }} />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-sm font-medium text-[hsl(var(--accent))] uppercase tracking-widest mb-4">
            Bezpieczeństwo i zaufanie
          </p>
          <h2
            className="font-display font-medium text-3xl md:text-4xl tracking-tighter text-foreground"
            style={{ textWrap: 'pretty' } as React.CSSProperties}
          >
            System, któremu możesz zaufać
          </h2>
          <p className="mt-4 text-base text-foreground/80 max-w-2xl mx-auto">
            Obsługujemy placówki z setkami uczniów i dziesiątkami pracowników.
            Bezpieczeństwo danych i niezawodność to dla nas priorytet.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {trustItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="bg-card rounded-xl p-6 border border-[hsl(var(--border))] hover:-translate-y-px transition-transform duration-150 motion-reduce:animate-none"
            >
              <div className="w-10 h-10 rounded-lg bg-[hsl(var(--primary))]/5 flex items-center justify-center mb-4">
                <item.icon size={20} className="text-primary" />
              </div>
              <h3 className="font-display font-medium text-base tracking-tight text-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
