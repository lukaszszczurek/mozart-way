export default function HeroShader() {
  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      {/* Primary gradient — deep purple vignette */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% 40%, #1a1033 0%, #120d1f 30%, #0a0a0a 70%, #0a0a0a 100%)',
        }}
      />
      {/* Secondary purple glow — right side */}
      <div
        className="absolute top-1/4 right-1/4 w-[500px] h-[400px] rounded-full opacity-20"
        style={{
          background: 'radial-gradient(circle, #1e1535 0%, transparent 70%)',
        }}
      />
      {/* Tertiary accent glow — left bottom */}
      <div
        className="absolute bottom-1/4 left-1/6 w-[400px] h-[300px] rounded-full opacity-15"
        style={{
          background: 'radial-gradient(circle, #1a0d2e 0%, transparent 70%)',
        }}
      />
      {/* Subtle emerald accent glow — top right */}
      <div
        className="absolute top-1/3 right-1/6 w-[300px] h-[200px] rounded-full opacity-[0.07]"
        style={{
          background: 'radial-gradient(circle, #0d2e1a 0%, transparent 70%)',
        }}
      />
      {/* Darkening veil so text stays readable */}
      <div className="absolute inset-0 bg-background/50" />
    </div>
  )
}
