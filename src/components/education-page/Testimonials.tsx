import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Anna Kowalska',
    role: 'Właścicielka sieci przedszkoli',
    avatar: '/education/avatar-1.jpg',
    quote: 'Zarządzałam 3 przedszkolami z telefonu i Excela. Teraz wszystko mam w jednym panelu. Zaoszczędzam ponad 60 godzin miesięcznie na samej administracji.',
    result: '60h+ oszczędności/mies.',
  },
  {
    name: 'Marek Wiśniewski',
    role: 'Właściciel szkoły językowej',
    avatar: '/education/avatar-2.jpg',
    quote: 'Wdrożenie trwało 3 tygodnie. Trzy tygodnie! A próbowałem wdrożyć CRM przez 6 miesięcy i dalej nie działał. Tu po prostu działa, bo jest zrobione pod szkoły.',
    result: 'Wdrożenie w 3 tygodnie',
  },
  {
    name: 'Katarzyna Nowak',
    role: 'Dyrektor centrum szkoleniowego',
    avatar: '/education/avatar-3.jpg',
    quote: 'Pierwszy raz od 5 lat wyjechałam na wakacje bez laptopa. Widzę wszystko w aplikacji — grafik, frekwencję, płatności. Nauczyciele też kochają ten system.',
    result: 'Wakacje bez stresu',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24 overflow-hidden">
      {/* Background image with parallax */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: 'url(/education/section-bg-testimonials.jpg)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--background))]/80 via-[hsl(var(--background))]/75 to-[hsl(var(--background))]/85 backdrop-blur-[1px]" />
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
            Opinie
          </p>
          <h2
            className="font-display font-medium text-3xl md:text-4xl tracking-tighter text-foreground"
            style={{ textWrap: 'pretty' } as React.CSSProperties}
          >
            Właściciele placówek edukacyjnych
            <br />
            odzyskali swój czas
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="bg-card rounded-xl p-6 border border-[hsl(var(--border))] shadow-violet-sm hover-shadow-violet hover:-translate-y-px transition-transform duration-150 motion-reduce:animate-none"
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={14} className="fill-[hsl(var(--accent))] text-[hsl(var(--accent))]" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-foreground/80 text-sm leading-relaxed mb-6">
                "{t.quote}"
              </p>

              {/* Result badge */}
              <div className="mb-4">
                <span className="text-xs font-medium text-[hsl(var(--accent))] bg-[hsl(var(--accent))]/10 px-3 py-1 rounded-full">
                  {t.result}
                </span>
              </div>

              {/* Person */}
              <div className="flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover ring-2 ring-[hsl(var(--mw-violet)/0.18)] ring-offset-2 ring-offset-[hsl(var(--card))]"
                  loading="lazy"
                />
                <div>
                  <p className="text-sm font-medium text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
