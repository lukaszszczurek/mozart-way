import { motion } from 'framer-motion'

const clients = [
  { name: 'Sigma Study', style: 'font-display font-medium tracking-tight' },
  { name: 'Mozart Way', style: 'font-display font-medium tracking-tight' },
  { name: 'PeakMind AI', style: 'font-display font-medium tracking-tight' },
  { name: 'Giferio', style: 'font-display font-medium tracking-tight' },
]

export default function LogoBar() {
  return (
    <section className="relative py-16 md:py-20 border-y border-border/40">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="motion-reduce:animate-none max-w-5xl mx-auto px-6"
      >
        <p className="text-center text-sm font-medium text-muted-foreground/60 uppercase tracking-widest mb-10">
          Trusted by marketing teams at
        </p>

        {/* Logo grid — centered, prominent */}
        <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16">
          {clients.map((client, i) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="text-muted-foreground/30 hover:text-muted-foreground/60 transition-colors duration-300"
            >
              <span className={`text-xl md:text-2xl ${client.style} whitespace-nowrap`}>
                {client.name}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
