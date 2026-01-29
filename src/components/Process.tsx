import { useLanguage } from '../i18n/LanguageContext';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { cn } from '../lib/utils';
import { Search, Palette, Code, Rocket } from 'lucide-react';

// Icons for each process step
const stepIcons = [Search, Palette, Code, Rocket];

export function Process() {
  const { t } = useLanguage();
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <section id="process" className="py-24 lg:py-32 scroll-mt-20 bg-gradient-to-br from-primary via-primary to-violet-700 text-white relative overflow-hidden selection:bg-white/30 selection:text-white">
      {/* Metallic shine overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none" />

      {/* Animated background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-violet-500/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full pointer-events-none opacity-50"
        style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%)' }}
      />

      {/* CSS decorative element instead of Lottie */}
      <div className="absolute bottom-10 right-10 w-48 h-48 opacity-20 hidden lg:block pointer-events-none">
        <div className="w-full h-full rounded-full bg-gradient-to-br from-white/20 to-transparent animate-pulse" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div
          ref={ref}
          className={cn(
            'transition-all duration-700',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          )}
        >
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/20 text-white text-sm font-medium mb-4 backdrop-blur-sm">
              {t.nav.process}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-white">{t.process.title}</h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">{t.process.subtitle}</p>
          </div>

          {/* Process steps */}
          <div className="relative">
            {/* Connection line - desktop with animated gradient */}
            <div className="hidden lg:block absolute top-24 left-0 right-0 h-1 overflow-hidden">
              <div className="h-full bg-gradient-to-r from-transparent via-white/40 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent animate-shimmer" style={{ backgroundSize: '200% 100%' }} />
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
              {t.process.steps.map((step, index) => {
                const IconComponent = stepIcons[index];
                return (
                  <div
                    key={index}
                    className="group relative text-center lg:text-left"
                    style={{ animationDelay: `${index * 0.15}s` }}
                  >
                    {/* Step number with icon and hover effect */}
                    <div className="relative inline-flex flex-col items-center justify-center w-20 h-20 rounded-2xl bg-white/10 border-2 border-white/20 mb-6 mx-auto lg:mx-0 backdrop-blur-sm transition-all duration-500 group-hover:bg-white/20 group-hover:border-white/40 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-white/20">
                      <span className="text-2xl font-bold text-white transition-transform duration-500 group-hover:scale-110">{step.number}</span>
                      {/* Icon below number */}
                      <IconComponent className="w-4 h-4 text-white/60 mt-0.5 transition-all duration-300 group-hover:text-white group-hover:scale-110" />
                      {/* Connector dot with glow */}
                      <div className="hidden lg:block absolute -bottom-[22px] left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-white/80 transition-all duration-300 group-hover:scale-150 group-hover:bg-white group-hover:shadow-lg group-hover:shadow-white/50" />
                    </div>

                    {/* Content with hover effects */}
                    <h3 className="text-xl font-bold mb-3 text-white transition-all duration-300 group-hover:translate-x-1">{step.title}</h3>
                    <p className="text-white/70 leading-relaxed mb-4 transition-all duration-300 group-hover:text-white/90">
                      {step.description}
                    </p>

                    {/* Duration badge with improved visibility */}
                    {'duration' in step && (
                      <span className="inline-flex items-center gap-1.5 px-4 py-1.5 text-sm font-semibold bg-white/20 text-white rounded-full backdrop-blur-sm border border-white/20 transition-all duration-300 group-hover:bg-white/30 group-hover:border-white/40 group-hover:scale-105">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                        {step.duration}
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
