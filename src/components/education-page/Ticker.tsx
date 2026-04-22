export default function Ticker() {
  const items = [
    'Szkoły językowe',
    'Korepetycje',
    'Przedszkola',
    'Centra szkoleniowe',
    'Szkoły muzyczne',
    'Szkoły tańca',
    'Akademie sportowe',
    'Mentoring',
  ]
  const doubled = [...items, ...items]

  return (
    <div className="relative overflow-hidden py-4 border-y border-[hsl(var(--border))]/30">
      <div
        className="flex whitespace-nowrap animate-marquee"
        style={{ '--marquee-duration': '25s' } as React.CSSProperties}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            className="mx-8 text-sm font-medium text-muted-foreground/40 uppercase tracking-widest"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
