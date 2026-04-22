import { useEffect } from 'react';
import siteConfig from '../../site.config.json';

export default function Home() {
  useEffect(() => {
    document.title = 'Łukasz Szczurek — mozartway';
  }, []);

  const bookCallUrl = siteConfig.bookCallUrl || 'mailto:lukasz.szczurek@mozartway.com';

  return (
    <main className="relative min-h-screen bg-[#0a0a0a] text-white overflow-hidden flex flex-col">
      {/* Subtle gradient glow */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 50% 20%, rgba(124,58,237,0.18) 0%, transparent 60%), radial-gradient(ellipse 40% 40% at 80% 80%, rgba(34,211,238,0.08) 0%, transparent 60%)',
        }}
      />

      {/* Minimal top bar with brand */}
      <header className="relative z-10 px-8 md:px-16 py-8 flex items-center justify-between">
        <span className="font-semibold tracking-tight text-white/90">mozartway</span>
        <a
          href="/strony-www"
          className="text-sm text-white/40 hover:text-white/70 transition-colors"
        >
          Usługi →
        </a>
      </header>

      {/* Main content — centered, minimal */}
      <section className="relative z-10 flex-1 flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20 px-8 md:px-16 pb-16">
        {/* Photo */}
        <div className="relative flex-shrink-0">
          <div
            aria-hidden
            className="absolute -inset-6 rounded-full opacity-30 blur-3xl"
            style={{
              background:
                'conic-gradient(from 180deg, #7c3aed, #22d3ee, #7c3aed)',
            }}
          />
          <div className="relative w-[280px] h-[280px] md:w-[420px] md:h-[420px] rounded-full overflow-hidden ring-1 ring-white/10">
            <img
              src="/images/founder-hero.jpg"
              alt="Łukasz Szczurek — Founder, mozartway"
              className="w-full h-full object-cover"
              loading="eager"
            />
          </div>
        </div>

        {/* Text */}
        <div className="max-w-xl text-center md:text-left">
          <p className="text-xs uppercase tracking-[0.22em] text-white/40 font-medium mb-5">
            Founder · mozartway
          </p>
          <h1 className="text-5xl md:text-6xl font-medium tracking-tighter leading-[1.05] mb-6 text-pretty">
            Łukasz Szczurek
          </h1>
          <p className="text-lg md:text-xl text-white/55 leading-relaxed mb-10">
            Buduję systemy AI, które zastępują manualną pracę.
            <br className="hidden md:inline" />
            Zero gotowych SaaS-ów. Kod szyty na miarę, w 2–4 tygodnie.
          </p>

          <a
            href={bookCallUrl}
            target={bookCallUrl.startsWith('http') ? '_blank' : undefined}
            rel={bookCallUrl.startsWith('http') ? 'noreferrer' : undefined}
            className="group inline-flex items-center gap-3 bg-white text-[#0a0a0a] px-8 py-4 rounded-full font-medium text-base hover:bg-white/90 transition-all duration-200 -translate-y-0 hover:-translate-y-px shadow-[0_0_40px_rgba(255,255,255,0.08)]"
          >
            Book a Call
            <svg
              className="w-4 h-4 transition-transform group-hover:translate-x-0.5"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>

          <p className="mt-5 text-sm text-white/30">
            30 minut · bez zobowiązań · online
          </p>
        </div>
      </section>

      {/* Minimal footer */}
      <footer className="relative z-10 px-8 md:px-16 py-6 border-t border-white/5 flex items-center justify-between text-xs text-white/30">
        <span>© 2026 mozartway</span>
        <a
          href="mailto:lukasz.szczurek@mozartway.com"
          className="hover:text-white/60 transition-colors"
        >
          lukasz.szczurek@mozartway.com
        </a>
      </footer>
    </main>
  );
}
