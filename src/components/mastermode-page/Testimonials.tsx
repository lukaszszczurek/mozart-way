import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

type Testimonial = {
  quote: string
  name: string
  role: string
  avatar: string
  avatarBg: string
  highlight?: boolean
}

const testimonials: Testimonial[] = [
  {
    quote: 'Po tygodniu syn sam zaczął prosić o telefon, żeby grać w „Mastermode”. Nauczył się liczyć do 20 zanim zorientowałam się, że to już umie.',
    name: 'Anna K.',
    role: 'Mama 4-letniego Stasia',
    avatar: '👩',
    avatarBg: 'from-[hsl(var(--mm-coral))] to-[hsl(var(--mm-yellow))]',
    highlight: true,
  },
  {
    quote: 'Używamy w trzech grupach w przedszkolu. Dzieciaki same się proszą o tablety — ale to ich tablety „z tymi grami, co się uczymy”. Dyrektorka marzeń.',
    name: 'Barbara W.',
    role: 'Dyrektor Niepubl. Przedszkola „Tęcza”',
    avatar: '👩‍🏫',
    avatarBg: 'from-[hsl(var(--mm-mint))] to-[hsl(195_60%_70%)]',
  },
  {
    quote: 'Córka w miesiąc nauczyła się wszystkich liter i zaczęła składać proste wyrazy. Zero walki, zero łez. Dla mnie to cud.',
    name: 'Michał P.',
    role: 'Tata 6-letniej Zosi',
    avatar: '👨',
    avatarBg: 'from-[hsl(var(--mm-yellow))] to-[hsl(var(--mm-coral))]',
  },
  {
    quote: 'Wreszcie apka po polsku, która nie ma reklam ani „kup monety za 5 zł”. Płacę spokojnie — wiem za co.',
    name: 'Katarzyna M.',
    role: 'Mama bliźniaków 5 lat',
    avatar: '👩‍🦰',
    avatarBg: 'from-[hsl(var(--mm-coral-deep))] to-[hsl(var(--mm-coral))]',
  },
  {
    quote: 'Raporty co tydzień to game-changer. Widzę dokładnie, że Filip ma trudność z sekwencjami — pracujemy nad tym też w przedszkolu.',
    name: 'Ewa R.',
    role: 'Wychowawczyni grupy 5-latków',
    avatar: '👩‍🏫',
    avatarBg: 'from-[hsl(var(--mm-mint))] to-[hsl(158_55%_55%)]',
  },
  {
    quote: 'Dziecko na autyzmie, trudno go było zainteresować czymkolwiek. Master Mode trzymał go 20 minut w skupieniu już pierwszego dnia.',
    name: 'Jacek T.',
    role: 'Tata 5-letniego Maksa',
    avatar: '👨‍🦱',
    avatarBg: 'from-[hsl(270_50%_60%)] to-[hsl(var(--mm-coral))]',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24 md:py-32 bg-[hsl(var(--mm-cream))]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mb-16 text-center mx-auto motion-reduce:animate-none"
        >
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[hsl(var(--mm-coral-deep))] mb-4">
            Opinie rodziców i nauczycieli
          </p>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl lg:text-[3.5rem] tracking-[-0.03em] text-[hsl(var(--mm-navy))] leading-[1.05]" style={{ textWrap: 'pretty' } as React.CSSProperties}>
            500+ dzieci już się uczy. <span className="text-[hsl(var(--mm-coral-deep))]">Bez walki.</span>
          </h2>
          <div className="flex items-center justify-center gap-1 mt-6">
            {[1, 2, 3, 4, 5].map((n) => (
              <Star key={n} size={22} className="text-[hsl(var(--mm-yellow))]" fill="currentColor" strokeWidth={0} />
            ))}
            <span className="ml-3 font-bold text-[hsl(var(--mm-navy))]">4.9/5</span>
            <span className="text-sm text-[hsl(var(--mm-navy-soft))]">· 500+ recenzji</span>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.55 }}
              className={`relative p-7 rounded-3xl border motion-reduce:animate-none ${
                t.highlight
                  ? 'bg-gradient-to-br from-[hsl(var(--mm-coral))] to-[hsl(var(--mm-coral-deep))] border-[hsl(var(--mm-coral-deep))] text-white shadow-lg shadow-[hsl(var(--mm-coral)/0.25)] lg:row-span-2'
                  : 'bg-white border-[hsl(var(--mm-coral)/0.15)] shadow-sm'
              }`}
            >
              <Quote size={24} className={`mb-4 ${t.highlight ? 'text-[hsl(var(--mm-yellow))]' : 'text-[hsl(var(--mm-coral))]'}`} fill="currentColor" strokeWidth={0} />

              <p className={`text-base leading-relaxed mb-6 ${t.highlight ? 'text-white font-medium text-lg' : 'text-[hsl(var(--mm-navy))]'}`}>
                „{t.quote}"
              </p>

              <div className="flex items-center gap-3 pt-5 border-t border-current/15">
                <div className={`w-11 h-11 rounded-full bg-gradient-to-br ${t.avatarBg} flex items-center justify-center text-xl shadow-sm`}>
                  {t.avatar}
                </div>
                <div>
                  <p className={`font-display font-extrabold text-sm leading-tight ${t.highlight ? 'text-white' : 'text-[hsl(var(--mm-navy))]'}`}>
                    {t.name}
                  </p>
                  <p className={`text-xs ${t.highlight ? 'text-white/80' : 'text-[hsl(var(--mm-navy-soft))]'}`}>
                    {t.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
