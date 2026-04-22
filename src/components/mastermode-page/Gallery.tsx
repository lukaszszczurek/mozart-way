import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

type GameCard = {
  category: string
  title: string
  emoji: string
  gradient: string
  stars: number
}

const games: GameCard[] = [
  { category: 'Matematyka', title: 'Ile żabek?', emoji: '🐸', gradient: 'from-[hsl(158_55%_82%)] to-[hsl(195_70%_88%)]', stars: 3 },
  { category: 'Muzyka', title: 'Zagraj melodię', emoji: '🎹', gradient: 'from-[hsl(270_50%_88%)] to-[hsl(var(--mm-coral)/0.15)]', stars: 2 },
  { category: 'Pamięć', title: 'Znajdź parę', emoji: '🦋', gradient: 'from-[hsl(var(--mm-yellow)/0.25)] to-[hsl(var(--mm-coral)/0.15)]', stars: 3 },
  { category: 'Logika', title: 'Posortuj kolory', emoji: '🎨', gradient: 'from-[hsl(var(--mm-mint)/0.25)] to-[hsl(var(--mm-yellow)/0.2)]', stars: 1 },
  { category: 'Matematyka', title: 'Liczymy jabłka', emoji: '🍎', gradient: 'from-[hsl(var(--mm-coral)/0.18)] to-[hsl(var(--mm-yellow)/0.15)]', stars: 3 },
  { category: 'Muzyka', title: 'Rytm zwierząt', emoji: '🦁', gradient: 'from-[hsl(45_80%_85%)] to-[hsl(var(--mm-coral)/0.12)]', stars: 2 },
  { category: 'Pamięć', title: 'Co było tutaj?', emoji: '🎯', gradient: 'from-[hsl(220_30%_88%)] to-[hsl(var(--mm-mint)/0.2)]', stars: 3 },
  { category: 'Logika', title: 'Który nie pasuje?', emoji: '🐝', gradient: 'from-[hsl(var(--mm-yellow)/0.3)] to-[hsl(40_80%_80%)]', stars: 2 },
]

export default function Gallery() {
  return (
    <section className="relative py-24 md:py-32 bg-[hsl(var(--mm-cream))]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mb-16 motion-reduce:animate-none"
        >
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[hsl(var(--mm-coral-deep))] mb-4">
            Podgląd aplikacji
          </p>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl lg:text-[3.5rem] tracking-[-0.03em] text-[hsl(var(--mm-navy))] leading-[1.05]" style={{ textWrap: 'pretty' } as React.CSSProperties}>
            Tak wyglądają gry, które <span className="text-[hsl(var(--mm-coral-deep))]">pokochają dzieci</span>.
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
          {games.map((game, i) => (
            <motion.div
              key={game.title + i}
              initial={{ opacity: 0, y: 20, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.5 }}
              className={`relative aspect-[3/4] rounded-3xl bg-gradient-to-br ${game.gradient} border border-white/60 shadow-sm overflow-hidden flex flex-col justify-between p-5 motion-reduce:animate-none hover:-translate-y-0.5 transition-transform duration-200`}
            >
              {/* Top — stars earned */}
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-[hsl(var(--mm-coral-deep))] bg-white/70 px-2 py-1 rounded-full">
                  {game.category}
                </span>
                <div className="flex gap-0.5">
                  {[1, 2, 3].map((n) => (
                    <Star
                      key={n}
                      size={11}
                      className={n <= game.stars ? 'text-[hsl(var(--mm-yellow))]' : 'text-white/60'}
                      fill="currentColor"
                      strokeWidth={0}
                    />
                  ))}
                </div>
              </div>

              {/* Center — emoji */}
              <div className="flex-1 flex items-center justify-center">
                <div className="text-6xl md:text-7xl drop-shadow-md">{game.emoji}</div>
              </div>

              {/* Bottom — title */}
              <div>
                <p className="font-display font-extrabold text-[hsl(var(--mm-navy))] text-base leading-tight tracking-tight">
                  {game.title}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-10 text-center text-sm text-[hsl(var(--mm-navy-soft))] motion-reduce:animate-none"
        >
          + 42 kolejne gry · Nowe co miesiąc · Bez dopłat
        </motion.p>
      </div>
    </section>
  )
}
