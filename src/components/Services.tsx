import { useState } from 'react';
import { Check, Sparkles, Zap, Rocket, ShoppingCart } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { cn } from '../lib/utils';

const serviceImages = [
  '/images/service-starter.webp',
  '/images/service-pro.webp',
  '/images/service-ecommerce.webp',
];

// Icons for each package
const packageIcons = [Zap, Rocket, ShoppingCart];

function ServiceImage({ src, alt }: { src: string; alt: string }) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="relative w-full h-36 mb-6 rounded-xl overflow-hidden bg-gradient-to-br from-muted to-muted/50 group-hover:shadow-lg transition-shadow duration-300">
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
        className={cn(
          'w-full h-full object-cover transition-all duration-500 group-hover:scale-105',
          isLoaded ? 'opacity-100' : 'opacity-0'
        )}
      />
      {!isLoaded && (
        <div className="absolute inset-0 bg-gradient-to-br from-muted to-muted/50 animate-pulse" />
      )}
    </div>
  );
}

export function Services() {
  const { t } = useLanguage();
  const { ref, isVisible } = useIntersectionObserver({ sectionId: 'services' });

  return (
    <section id="services" className="py-24 lg:py-32 bg-muted/30 scroll-mt-20 relative overflow-x-clip">
      {/* CSS-based background decorations */}
      <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-gradient-to-tl from-violet-500/10 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute top-20 -left-40 w-80 h-80 rounded-full bg-gradient-to-br from-blue-500/8 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

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
              {t.services.title}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">{t.services.title}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t.services.subtitle}</p>
          </div>

          {/* Pricing cards wrapper with padding for badge */}
          <div className="pt-6">
            <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
              {t.services.packages.map((pkg, index) => {
                const PackageIcon = packageIcons[index];
                return (
              <div
                key={index}
                className={cn(
                  'service-card shine-on-hover overflow-visible group',
                  pkg.highlight && 'highlighted'
                )}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Popular badge with shimmer */}
                {pkg.highlight && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                    <div className="relative inline-flex items-center gap-1.5 px-5 py-2 bg-primary text-primary-foreground text-xs font-semibold rounded-full shadow-xl whitespace-nowrap overflow-hidden">
                      <Sparkles className="w-3.5 h-3.5 animate-pulse" />
                      {t.services.mostPopular}
                      {/* Shimmer effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" style={{ backgroundSize: '200% 100%' }} />
                    </div>
                  </div>
                )}

                {/* Service illustration */}
                <ServiceImage src={serviceImages[index]} alt={pkg.name} />

                {/* Package header with icon */}
                <div className="mb-8">
                  <div className="flex items-center gap-3 mb-2">
                    <div className={cn(
                      'w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110',
                      pkg.highlight ? 'bg-primary/10 text-primary' : 'bg-muted text-muted-foreground'
                    )}>
                      <PackageIcon className="w-5 h-5" />
                    </div>
                    <h3 className="text-2xl font-bold">{pkg.name}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-6">{pkg.description}</p>
                  <div className="flex items-baseline gap-2">
                    <span className={cn(
                      'text-4xl font-bold transition-colors duration-300',
                      pkg.highlight ? 'text-primary' : 'group-hover:text-primary'
                    )}>{pkg.price}</span>
                    {'priceNote' in pkg && (
                      <span className="text-sm text-muted-foreground">{pkg.priceNote}</span>
                    )}
                  </div>
                </div>

                {/* Features list */}
                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <div className={cn(
                        'flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5',
                        pkg.highlight ? 'bg-primary text-primary-foreground' : 'bg-green-100 text-green-600'
                      )}>
                        <Check className="w-3 h-3" />
                      </div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA button */}
                <a
                  href="#contact"
                  className={cn(
                    'block w-full py-4 text-center text-sm font-semibold rounded-xl transition-all duration-300',
                    pkg.highlight
                      ? 'bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5'
                      : 'bg-secondary text-secondary-foreground hover:bg-secondary/80 hover:shadow-lg hover:-translate-y-0.5'
                  )}
                >
                  {t.services.cta}
                </a>
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
