import { useState } from 'react';
import { ArrowUpRight, TrendingUp, Clock, Award } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { cn } from '../lib/utils';

function LazyImage({ src, alt, className }: { src: string; alt: string; className?: string }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  return (
    <div className={cn('relative', className)}>
      {/* Placeholder */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-gradient-to-br from-slate-100 via-slate-200 to-slate-300 animate-pulse" />
      )}

      {/* Image */}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
        className={cn(
          'w-full h-full object-cover transition-opacity duration-500',
          isLoaded ? 'opacity-100' : 'opacity-0'
        )}
      />

      {/* Error fallback */}
      {hasError && (
        <div className="absolute inset-0 bg-gradient-to-br from-slate-100 via-slate-200 to-slate-300 flex items-center justify-center">
          <div className="w-3/4 h-2/3 rounded-lg bg-white shadow-2xl overflow-hidden">
            <div className="h-3 bg-slate-200 flex items-center gap-1 px-2">
              <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
              <span className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
              <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
            </div>
            <div className="p-3 space-y-2">
              <div className="h-2 bg-slate-100 rounded w-1/2" />
              <div className="h-2 bg-slate-100 rounded w-3/4" />
              <div className="h-8 bg-gradient-to-r from-primary/20 to-primary/10 rounded mt-3" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export function CaseStudies() {
  const { t } = useLanguage();
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <section id="portfolio" className="py-24 lg:py-32 scroll-mt-20 relative overflow-hidden bg-white">
      {/* CSS-based background decorations */}
      <div className="absolute top-40 -left-40 w-80 h-80 rounded-full bg-gradient-to-br from-violet-500/8 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 -right-20 w-64 h-64 rounded-full bg-gradient-to-tl from-blue-500/8 to-transparent blur-3xl pointer-events-none" />

      {/* CSS decorative element */}
      <div className="absolute top-20 right-10 w-32 h-32 opacity-10 hidden lg:block pointer-events-none">
        <div className="w-full h-full rounded-full bg-gradient-to-br from-primary to-violet-500 animate-pulse" />
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
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/5 text-primary text-sm font-medium mb-4">
              {t.nav.portfolio}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">{t.caseStudies.title}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t.caseStudies.subtitle}</p>
          </div>

          {/* Portfolio grid - Anzo style cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {t.caseStudies.items.map((item, index) => {
              const CardWrapper = ({ children }: { children: React.ReactNode }) =>
                'link' in item && item.link ? (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="portfolio-card group cursor-pointer shine-on-hover block"
                    style={{ animationDelay: `${index * 0.15}s` }}
                  >
                    {children}
                  </a>
                ) : (
                  <article
                    className="portfolio-card group cursor-pointer shine-on-hover"
                    style={{ animationDelay: `${index * 0.15}s` }}
                  >
                    {children}
                  </article>
                );

              return (
              <CardWrapper key={index}>
                {/* Image container */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <LazyImage
                    src={item.image}
                    alt={`${item.title} - ${item.category}`}
                    className="card-image absolute inset-0"
                  />

                  {/* Hover overlay */}
                  <div className="card-overlay flex items-end p-6">
                    <div className="text-white transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                      <span className="inline-flex items-center gap-2 text-sm font-medium">
                        {t.caseStudies.viewProject}
                        <ArrowUpRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>

                  {/* Category badge */}
                  <div className="absolute top-4 left-4">
                    <span className="inline-block px-3 py-1 text-xs font-medium bg-white/90 backdrop-blur-sm rounded-full text-foreground shadow-sm">
                      {item.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Title & subtitle */}
                  <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {'subtitle' in item ? item.subtitle : ''}
                  </p>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground mb-5 line-clamp-2">
                    {item.description}
                  </p>

                  {/* Results with icons */}
                  <div className="space-y-3">
                    <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                      {t.caseStudies.results}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {item.results.map((result, resultIndex) => {
                        // Choose icon based on result content
                        const hasPercent = result.includes('%');
                        const hasTime = result.toLowerCase().includes('czas') || result.toLowerCase().includes('time') || result.toLowerCase().includes('s ');
                        const hasRank = result.toLowerCase().includes('top') || result.toLowerCase().includes('google') || result.toLowerCase().includes('pagespeed');

                        const IconComponent = hasTime ? Clock : hasRank ? Award : TrendingUp;

                        return (
                          <span
                            key={resultIndex}
                            className="inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-semibold bg-green-50 text-green-700 rounded-lg border border-green-100 transition-all duration-200 hover:bg-green-100 hover:scale-105"
                          >
                            <IconComponent className="w-3 h-3" />
                            {result}
                          </span>
                        );
                      })}
                    </div>
                  </div>

                                  </div>
              </CardWrapper>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
