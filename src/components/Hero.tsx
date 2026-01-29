import { ArrowRight, Play, ChevronDown } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import Lottie from 'lottie-react';
import { useEffect, useState } from 'react';

const LOTTIE_URL = 'https://assets-v2.lottiefiles.com/a/3f9cf38a-116d-11ee-b74f-03d8ed1ed29e/wWPhbxGRFB.json';

export function Hero() {
  const { t } = useLanguage();
  const [lottieData, setLottieData] = useState(null);

  useEffect(() => {
    fetch(LOTTIE_URL)
      .then(res => res.json())
      .then(data => setLottieData(data))
      .catch(console.error);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/images/hero-bg.jpg)' }}
      >
        <div className="absolute inset-0 bg-white/90" />
      </div>

      {/* Background effects */}
      <div className="absolute inset-0 mesh-gradient" />
      <div className="absolute inset-0 grid-pattern" />

      {/* Floating shapes */}
      <div className="absolute top-1/4 left-10 w-64 h-64 bg-gradient-to-br from-violet-500/10 to-transparent rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-gradient-to-br from-blue-500/10 to-transparent rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />

      {/* CSS-based decorative shapes */}
      <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-gradient-to-br from-violet-500/20 via-primary/10 to-transparent blur-3xl animate-float hidden lg:block pointer-events-none" style={{ animationDelay: '0.5s' }} />
      <div className="absolute bottom-32 left-10 w-64 h-64 rounded-full bg-gradient-to-tr from-blue-500/15 via-cyan-500/10 to-transparent blur-3xl animate-float hidden lg:block pointer-events-none" style={{ animationDelay: '1.5s' }} />

      {/* Treble clef decoration on left */}
      <div className="absolute top-1/4 left-16 lg:left-24 xl:left-32 hidden lg:block pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-500/20 to-primary/20 blur-3xl scale-150" />
        <img
          src="/images/decor-treble-clef.png?v=3"
          alt=""
          className="relative w-48 h-64 xl:w-56 xl:h-80 2xl:w-64 2xl:h-96 object-contain opacity-50 animate-float drop-shadow-[0_5px_15px_rgba(139,92,246,0.25)]"
          style={{ animationDelay: '0.5s' }}
        />
      </div>

      {/* Mozart illustration with glow effect */}
      <div className="absolute top-28 right-20 hidden xl:block pointer-events-none">
        {/* Glow behind image */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-violet-500/30 blur-3xl scale-110 animate-pulse" />
        <img
          src="/images/mozart-hero.jpg"
          alt="Mozart illustration"
          className="relative w-72 h-72 object-contain opacity-95 animate-float drop-shadow-[0_20px_50px_rgba(124,58,237,0.3)]"
          style={{ animationDelay: '1s' }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-8 text-center">
        {/* Main heading with musical notes behind */}
        <div className="relative">
          {/* Musical notes behind/around the heading */}
          <div className="absolute -left-8 -top-4 pointer-events-none opacity-25 animate-float hidden md:block" style={{ animationDelay: '0s' }}>
            <img src="/images/decor-notes.png" alt="" className="w-20 h-20 object-contain" />
          </div>
          <div className="absolute -right-4 top-0 pointer-events-none opacity-20 animate-float rotate-12 hidden md:block" style={{ animationDelay: '0.5s' }}>
            <img src="/images/decor-notes.png" alt="" className="w-16 h-16 object-contain" />
          </div>
          <div className="absolute left-1/4 -bottom-2 pointer-events-none opacity-15 animate-float -rotate-6 hidden md:block" style={{ animationDelay: '1s' }}>
            <img src="/images/decor-notes.png" alt="" className="w-14 h-14 object-contain" />
          </div>
          <div className="absolute right-1/4 -top-6 pointer-events-none opacity-20 animate-float hidden md:block" style={{ animationDelay: '1.5s' }}>
            <img src="/images/decor-notes.png" alt="" className="w-12 h-12 object-contain" />
          </div>

          <h1 className="relative text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 animate-fade-up delay-100">
            <span className="block">{t.hero.title}</span>
            <span className="block mt-2 pb-1 bg-gradient-to-r from-primary via-violet-600 to-primary bg-clip-text text-transparent">
              {t.hero.titleHighlight}
            </span>
            <span className="block pb-2 text-foreground">{t.hero.title2}</span>
          </h1>
        </div>

        {/* Description */}
        <p className="max-w-2xl mx-auto text-lg sm:text-xl text-muted-foreground mb-10 animate-fade-up delay-200">
          {t.hero.description}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up delay-300">
          <a
            href="#contact"
            className="btn-primary inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold bg-primary text-primary-foreground rounded-xl w-full sm:w-auto"
          >
            {t.hero.cta1}
            <ArrowRight className="w-5 h-5" />
          </a>
          <a
            href="#portfolio"
            className="btn-secondary inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold bg-white border border-border rounded-xl w-full sm:w-auto"
          >
            <Play className="w-5 h-5 fill-current" />
            {t.hero.cta2}
          </a>
        </div>

        {/* Lottie computer animation */}
        {lottieData && (
          <div className="mt-12 animate-fade-up delay-400">
            <Lottie
              animationData={lottieData}
              loop
              className="w-72 h-52 mx-auto drop-shadow-lg"
            />
          </div>
        )}
      </div>

      {/* Improved scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-up delay-500">
        <a
          href="#testimonials"
          aria-label="Przewiń w dół"
          className="flex flex-col items-center gap-2 group"
        >
          <span className="text-xs text-muted-foreground/60 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300">Scroll</span>
          <div className="relative w-8 h-12 rounded-full border-2 border-muted-foreground/30 group-hover:border-primary/50 transition-all duration-300">
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-1.5 h-3 bg-primary/60 rounded-full animate-[scrollBounce_2s_ease-in-out_infinite]" />
          </div>
          <ChevronDown className="w-4 h-4 text-muted-foreground/40 animate-bounce group-hover:text-primary/60 transition-colors" />
        </a>
      </div>
    </section>
  );
}
