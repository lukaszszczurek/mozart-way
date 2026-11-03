import { useEffect } from 'react';
import MozartWayLogo from '../components/education-page/MozartWayLogo';
import DemoVideo from '../components/education-page/DemoVideo';
import CTA from '../components/education-page/CTA';
import Footer from '../components/education-page/Footer';

/** Publiczny link do demo systemu (mozartway.com/demo), np. do wysłania klientowi po rozmowie. */
export default function Demo() {
  useEffect(() => {
    document.title = 'Demo systemu dla szkół · mozartway';
  }, []);

  return (
    <div className="noise-texture">
      <header className="fixed top-0 left-0 right-0 z-50 bg-[hsl(var(--background))]/95 backdrop-blur-md border-b border-[hsl(var(--border))]">
        <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2 transition-opacity duration-150 hover:opacity-80">
            <MozartWayLogo iconSize={28} variant="dark" />
          </a>
          <a
            href="/book"
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:-translate-y-px transition-transform duration-150"
          >
            Umów rozmowę
          </a>
        </nav>
      </header>
      <DemoVideo standalone />
      <CTA />
      <Footer />
    </div>
  );
}
