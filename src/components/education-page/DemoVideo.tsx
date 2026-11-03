import { motion } from 'framer-motion'

/**
 * Demo filmowe systemu. Na stronie głównej jako sekcja, na /demo jako nagłówek strony
 * (standalone: większy odstęp pod stały pasek nawigacji i h1 zamiast h2).
 */
export default function DemoVideo({ standalone = false }: { standalone?: boolean }) {
  const Heading = standalone ? 'h1' : 'h2'

  return (
    <section id="demo" className={standalone ? 'pt-32 pb-24' : 'py-24'}>
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-sm font-medium text-[hsl(var(--accent))] uppercase tracking-widest mb-4">
            Demo systemu
          </p>
          <Heading
            className="font-display font-medium text-3xl md:text-4xl tracking-tighter text-foreground"
            style={{ textWrap: 'pretty' } as React.CSSProperties}
          >
            Zobacz system w akcji
          </Heading>
          <p className="mt-4 text-base text-foreground/80 max-w-2xl mx-auto">
            Zapisy, grafik, płatności i przypomnienia w jednym miejscu. Tak to działa w mojej
            szkole korepetycji, Sigma Study. Film trwa nieco ponad minutę.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="rounded-xl overflow-hidden border border-[hsl(var(--border))] bg-black shadow-violet-sm"
        >
          <video
            className="w-full aspect-video"
            src="/education/system-demo.mp4"
            poster="/education/system-demo-poster.jpg"
            controls
            playsInline
            preload="none"
          >
            Twoja przeglądarka nie odtwarza filmów.{' '}
            <a href="/education/system-demo.mp4">Pobierz film</a>.
          </video>
        </motion.div>
      </div>
    </section>
  )
}
