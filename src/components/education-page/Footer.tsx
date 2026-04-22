import MozartWayLogo from './MozartWayLogo'

export default function Footer() {
  return (
    <footer className="py-12 border-t border-[hsl(var(--border))]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <MozartWayLogo iconSize={26} variant="dark" />

          <p className="text-sm text-muted-foreground">
            System AI do zarządzania placówkami edukacyjnymi
          </p>

          <p className="text-xs text-muted-foreground/50">
            &copy; {new Date().getFullYear()} Mozart Way. Wszystkie prawa zastrzeżone.
          </p>
        </div>
      </div>
    </footer>
  )
}
