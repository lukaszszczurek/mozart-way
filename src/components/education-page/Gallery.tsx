import { motion } from 'framer-motion'

const images = [
  {
    src: '/education/school-classroom.jpg',
    alt: 'Nowoczesna sala lekcyjna z uczniami korzystającymi z systemu',
    caption: 'Szkoła korepetycji — Warszawa',
  },
  {
    src: '/education/school-reception.jpg',
    alt: 'Recepcja szkoły z systemem zarządzania',
    caption: 'Centrum edukacyjne — Kraków',
  },
  {
    src: '/education/team-meeting.jpg',
    alt: 'Zespół analizujący dane z systemu Mozart Way',
    caption: 'Spotkanie zespołu wdrożeniowego',
  },
]

export default function Gallery() {
  return (
    <section className="py-24 bg-[hsl(var(--muted))]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-sm font-medium text-[hsl(var(--accent))] uppercase tracking-widest mb-4">
            W praktyce
          </p>
          <h2
            className="font-display font-medium text-3xl md:text-4xl tracking-tighter text-foreground"
            style={{ textWrap: 'pretty' } as React.CSSProperties}
          >
            System, który działa
            <br />
            w prawdziwych placówkach
          </h2>
          <p className="mt-4 text-base text-foreground/80 max-w-2xl mx-auto">
            Mozart Way jest wdrożony w szkołach korepetycji, centrach szkoleniowych
            i przedszkolach w całej Polsce. Oto jak wygląda codzienne korzystanie.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5">
          {images.map((img, i) => (
            <motion.div
              key={img.src}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.6 }}
              className="group rounded-xl overflow-hidden border border-[hsl(var(--border))] bg-card shadow-violet-sm hover-shadow-violet motion-reduce:animate-none"
            >
              <div className="aspect-[3/2] overflow-hidden">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <div className="px-5 py-4">
                <p className="text-sm font-medium text-foreground">{img.caption}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
