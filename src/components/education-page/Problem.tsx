import { motion } from 'framer-motion'
import { AlertTriangle, Phone, Users, Brain, BarChart3, MessageSquare } from 'lucide-react'

const pains = [
  {
    icon: AlertTriangle,
    title: 'Gasisz pożary zamiast zarządzać',
    desc: 'Masz kilka placówek, nie wiesz co się dzieje w każdej z nich. Zamiast zarządzać — jeździsz i reagujesz na kryzysy.',
  },
  {
    icon: Phone,
    title: 'Telefony i maile zabierają cały dzień',
    desc: 'Odbierasz dziesiątki telefonów, odpisujesz na maile przez cały dzień i nie masz czasu skupić się na rozwijaniu biznesu.',
  },
  {
    icon: Users,
    title: 'Setki uczniów — wszystko w Twojej głowie',
    desc: 'Przez Twoją szkołę w skali roku przewijają się setki, tysiące uczniów. To zbyt duża ilość, abyś zadowolił wszystkich.',
  },
  {
    icon: Brain,
    title: '5 systemów zamiast jednego',
    desc: 'Komunikacja i zarządzanie jest w wielu różnych miejscach — telefon, mail, Excel, systemy rezerwacji, notatki.',
  },
  {
    icon: BarChart3,
    title: 'Nie mierzysz efektywności nauczycieli',
    desc: 'Nie wiesz ile lekcji przeprowadzili, jaka jest ich efektywność, u kogo uczniowie zostają najdłużej, kto ma najlepsze opinie.',
  },
  {
    icon: MessageSquare,
    title: 'Każdy problem trafia do Ciebie',
    desc: 'Brak jednego systemu sprawia, że każda zmiana lekcji, każde odwołanie, każde pytanie — ląduje bezpośrednio u Ciebie.',
  },
]

export default function Problem() {
  return (
    <section id="problem" className="relative py-24 overflow-hidden">
      {/* Background image with parallax */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: 'url(/education/section-bg-problem.jpg)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--background))]/80 via-[hsl(var(--muted))]/85 to-[hsl(var(--background))]/90" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium text-[hsl(var(--accent))] uppercase tracking-widest mb-4">
            Brzmi znajomo?
          </p>
          <h2
            className="font-display font-medium text-3xl md:text-4xl lg:text-5xl tracking-tighter text-foreground"
            style={{ textWrap: 'pretty' } as React.CSSProperties}
          >
            Czujesz się jak więzień
            <br />
            we własnym biznesie
          </h2>
          <p className="mt-4 text-lg text-foreground/80 max-w-2xl mx-auto">
            Prowadzisz placówkę edukacyjną, która powinna dawać Ci wolność.
            Zamiast tego — pochłania cały Twój czas i energię.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {pains.map((pain, i) => (
            <motion.div
              key={pain.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="bg-card rounded-xl p-6 border border-[hsl(var(--border))] hover:-translate-y-px transition-transform duration-150 motion-reduce:animate-none"
            >
              <pain.icon size={20} className="text-[hsl(var(--accent))] mb-4" />
              <h3 className="font-display font-medium text-base tracking-tight text-foreground mb-2">
                {pain.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {pain.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Cascading narrative */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-12 max-w-3xl mx-auto bg-card rounded-xl p-8 border border-[hsl(var(--border))]"
        >
          <p className="text-foreground/80 leading-relaxed text-base">
            Brak jednego prostego systemu sprawia, że{' '}
            <span className="text-foreground font-medium">nie widzisz co się dzieje w Twoich placówkach</span>.
            Więc zamiast zarządzać — jeździsz i gasisz pożary.{' '}
            <span className="text-foreground font-medium">Nie możesz wziąć dnia wolnego</span>,
            bo boisz się, że coś się wysypie.{' '}
            <span className="text-foreground font-medium">Boisz się skalować</span>,
            bo więcej lokalizacji = więcej chaosu.
            Te rzeczy są żmudne, powtarzalne i wypalające —
            a Ty musisz się z nimi użerać każdego dnia.
          </p>
          <p className="mt-4 text-foreground font-medium">
            Prawdziwy problem? Twoi uczniowie, nauczyciele i grafik żyją w 5 różnych systemach.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
