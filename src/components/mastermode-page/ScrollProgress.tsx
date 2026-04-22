import { motion, useScroll, useSpring } from 'framer-motion'

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 110,
    damping: 28,
    restDelta: 0.001,
  })

  return (
    <motion.div
      aria-hidden
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 z-[60] h-0.5 origin-left bg-gradient-to-r from-[hsl(var(--mm-coral))] via-[hsl(var(--mm-yellow))] to-[hsl(var(--mm-coral-deep))]"
    />
  )
}
