import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'
import MozartWayLogo from './MozartWayLogo'

export default function FounderStory() {
  return (
    <section id="founder" className="relative py-24 overflow-hidden" style={{ background: 'linear-gradient(160deg, hsl(30 30% 14%) 0%, hsl(25 25% 10%) 50%, hsl(20 20% 12%) 100%)' }}>
      {/* Warm ambient glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-10" style={{ background: 'radial-gradient(circle, hsl(38 92% 50%) 0%, transparent 70%)' }} />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-[0.06]" style={{ background: 'radial-gradient(circle, hsl(38 80% 60%) 0%, transparent 70%)' }} />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <div className="grid md:grid-cols-5 gap-10 items-center">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2 motion-reduce:animate-none"
          >
            <div className="relative">
              <img
                src="/education/founder-lukasz.jpg"
                alt="Łukasz Szczurek — założyciel Mozart Way"
                className="w-full rounded-2xl object-cover aspect-[4/5] shadow-2xl ring-1 ring-white/10"
                style={{ objectPosition: 'center 30%' }}
              />
              {/* Mozart Way logo badge */}
              <div className="absolute -bottom-6 -right-4 rounded-xl border border-white/15 shadow-xl bg-white/10 backdrop-blur-md flex items-center justify-center px-4 py-2.5 shadow-violet-glow">
                <MozartWayLogo iconSize={24} variant="light" />
              </div>
              <div className="absolute -bottom-4 -left-2 bg-white/10 backdrop-blur-md rounded-xl px-4 py-3 border border-white/10">
                <p className="text-sm font-display font-medium text-white">Łukasz Szczurek</p>
                <p className="text-xs text-white/60">Założyciel Mozart Way</p>
              </div>
            </div>
          </motion.div>

          {/* Story */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="md:col-span-3 motion-reduce:animate-none"
          >
            <Quote size={32} className="text-amber-400 mb-4" />

            <h2
              className="font-display font-medium text-2xl md:text-3xl tracking-tighter text-white mb-6"
              style={{ textWrap: 'pretty' } as React.CSSProperties}
            >
              Samodzielnie prowadzę szkołę korepetycji.
              Ten system odmienił moje życie.
            </h2>

            <div className="space-y-4 text-white/75 leading-relaxed">
              <p>
                Miałem dokładnie te same problemy co Ty. Kilka lokalizacji, setki uczniów,
                dziesiątki nauczycieli — i wszystko w mojej głowie. Byłem
                pierwszą osobą, do której dzwoniono gdy coś się sypało. Nie
                mogłem wziąć dnia wolnego.
              </p>
              <p>
                Próbowałem Exceli, tanich CRM-ów, rozmawiałem z firmami IT
                — wyceny na setki tysięcy złotych, 6-12 miesięcy wdrożenia,
                i ludzie, którzy totalnie nie rozumieli jak działa szkoła.
              </p>
              <p>
                Więc <span className="text-white font-medium">zbudowałem system sam, dla siebie</span>.
                Oparty na AI, prosty dla nauczycieli i uczniów, zaprojektowany
                specjalnie pod branżę edukacyjną. Nie pod "ogólnego klienta".
              </p>
              <p className="text-amber-300 font-medium text-lg">
                Rezultat? Zaoszczędziłem 80h+ miesięcznie. Wszystko mam w 1 miejscu.
                Mogę wyjechać na urlop i wiem, co się dzieje w biznesie.
                Moi nauczyciele i uczniowie są bardziej zadowoleni.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              {[
                '80h+ oszczędności/mies.',
                'Wszystko w 1 miejscu',
                'Urlop bez stresu',
                'Szczęśliwsi nauczyciele',
              ].map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-medium text-amber-300 bg-amber-400/10 border border-amber-400/20 px-3 py-1.5 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
