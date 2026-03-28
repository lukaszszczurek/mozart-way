export default function Footer() {
  return (
    <footer className="py-8">
      {/* Gradient top line — jace.ai style */}
      <div className="gradient-line mb-8" />
      <div className="mx-auto max-w-6xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-6">
          <span className="font-display text-sm font-medium text-foreground/80 tracking-tight">
            Mozart Ads
          </span>
          <span className="text-xs text-muted-foreground/40">
            &copy; {new Date().getFullYear()} Mozart Ads. All rights reserved.
          </span>
        </div>
        <div className="flex items-center gap-6">
          {['Privacy', 'Terms', 'Contact'].map((link) => (
            <a
              key={link}
              href="#"
              className="text-xs text-muted-foreground/50 hover:text-primary transition-colors duration-200"
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
