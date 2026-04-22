import { motion } from 'framer-motion'
import { X } from 'lucide-react'

const attempts = [
  {
    title: 'Excel lub tani CRM',
    desc: 'Musiałeś wszystko dostosować pod swoją szkołę samodzielnie. Nie masz na to czasu, nie wiesz jak się za to zabrać, a te proste systemy i tak nie spełniają 100% Twoich potrzeb.',
    reason: 'Wymaga godzin konfiguracji, a i tak pokrywa tylko 60% potrzeb.',
  },
  {
    title: 'Firma informatyczna',
    desc: 'Zrobili Ci wycenę na kilkaset tysięcy złotych i powiedzieli, że wdrożenie potrwa 6-12 miesięcy. Co najgorsze — totalnie nie rozumieli Twoich problemów i tego, jak działa Twój biznes.',
    reason: 'Drogo, długo, i budujesz coś z kimś, kto nie zna branży edukacyjnej.',
  },
  {
    title: 'Robienie wszystkiego ręcznie',
    desc: 'Działa, gdy masz 10 uczniów. Załamuje się przy 100. A przy 500? Wypalenie gwarantowane. Każdy problem ląduje bezpośrednio u Ciebie.',
    reason: 'Nie skaluje się. Im więcej uczniów, tym więcej chaosu.',
  },
]

export default function Disqualification() {
  return (
    <section className="relative py-24 overflow-hidden" style={{ background: 'linear-gradient(135deg, hsl(220 40% 12%) 0%, hsl(220 35% 18%) 50%, hsl(230 30% 14%) 100%)' }}>
      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium text-amber-400 uppercase tracking-widest mb-4">
            Dlaczego nic dotąd nie zadziałało
          </p>
          <h2
            className="font-display font-medium text-3xl md:text-4xl tracking-tighter text-white"
            style={{ textWrap: 'pretty' } as React.CSSProperties}
          >
            Próbowałeś już — i nie zadziałało
          </h2>
        </motion.div>

        <div className="space-y-6">
          {attempts.map((attempt, i) => (
            <motion.div
              key={attempt.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="rounded-xl p-6 md:p-8 border border-white/10 bg-white/5 backdrop-blur-sm motion-reduce:animate-none"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center mt-0.5">
                  <X size={16} className="text-red-400" />
                </div>
                <div>
                  <h3 className="font-display font-medium text-lg tracking-tight text-white mb-2">
                    {attempt.title}
                  </h3>
                  <p className="text-white/70 leading-relaxed mb-3">
                    {attempt.desc}
                  </p>
                  <p className="text-sm text-white/40 italic">
                    {attempt.reason}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-12 text-center text-xl font-display font-medium tracking-tight text-amber-400"
        >
          Dlatego stworzyłem Mozart Way — inaczej.
        </motion.p>
      </div>
    </section>
  )
}
