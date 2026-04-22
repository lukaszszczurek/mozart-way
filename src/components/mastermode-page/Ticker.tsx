const items = [
  'Podstawa programowa',
  'Bez reklam',
  'Bez mikropłatności',
  'Stworzone przez pedagogów',
  'Adaptacyjny poziom trudności',
  'Raporty dla rodziców',
  '50+ gier',
  'Matematyka · Muzyka · Pamięć · Logika',
]

export default function Ticker() {
  const doubled = [...items, ...items]
  return (
    <div className="relative overflow-hidden py-6 bg-gradient-to-r from-[hsl(var(--mm-coral))] via-[hsl(var(--mm-coral-deep))] to-[hsl(var(--mm-coral))] border-y border-[hsl(var(--mm-coral-deep))]">
      <div className="flex whitespace-nowrap animate-marquee" style={{ animationDuration: '35s' }}>
        {doubled.map((item, i) => (
          <span key={i} className="mx-10 text-sm font-bold text-white uppercase tracking-[0.18em] flex items-center gap-10">
            {item}
            <span className="text-[hsl(var(--mm-yellow))] text-xl leading-none">✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}
