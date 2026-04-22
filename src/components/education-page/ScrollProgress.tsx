import React from 'react'

export default function ScrollProgress() {
  const [progress, setProgress] = React.useState(0)

  React.useEffect(() => {
    const handler = () => {
      const scrolled = window.scrollY
      const total = document.documentElement.scrollHeight - window.innerHeight
      setProgress(total > 0 ? (scrolled / total) * 100 : 0)
    }
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <div className="fixed top-0 left-0 w-full h-[2px] z-[9998] bg-transparent">
      <div
        className="h-full transition-[width] duration-75"
        style={{
          width: `${progress}%`,
          backgroundColor: 'hsl(var(--primary))',
        }}
      />
    </div>
  )
}
