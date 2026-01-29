import { useState } from 'react';
import { Paintbrush, Smartphone, Search, Settings, Shield, Headphones } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { cn } from '../lib/utils';

const iconMap: Record<string, React.ElementType> = {
  design: Paintbrush,
  responsive: Smartphone,
  seo: Search,
  cms: Settings,
  security: Shield,
  support: Headphones,
};

function BenefitsImage({ src, alt }: { src: string; alt: string }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  // Convert to WebP path
  const webpSrc = src.replace(/\.(jpg|jpeg|png)$/i, '.webp');

  return (
    <div className="relative w-full h-full rounded-2xl lg:rounded-3xl overflow-hidden bg-gradient-to-br from-slate-100 via-slate-200 to-slate-300">
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-gradient-to-br from-slate-100 via-slate-200 to-slate-300 animate-pulse" />
      )}

      <picture>
        <source srcSet={webpSrc} type="image/webp" />
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
      </picture>

      <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-transparent pointer-events-none" />

      {hasError && (
        <div className="absolute inset-0 bg-gradient-to-br from-slate-100 via-slate-200 to-slate-300 flex items-center justify-center">
          <div className="text-6xl text-slate-300">
            <Settings className="w-16 h-16" />
          </div>
        </div>
      )}
    </div>
  );
}

interface BenefitItem {
  title: string;
  description: string;
  icon: string;
}

function BenefitCard({
  benefit,
  Icon,
  number,
  index,
}: {
  benefit: BenefitItem;
  Icon: React.ElementType;
  number: string;
  index: number;
}) {
  return (
    <div
      className="group relative bg-white rounded-xl border border-border/50 p-5 lg:p-6 shadow-sm hover:shadow-xl hover:border-primary/30 hover:-translate-y-2 transition-all duration-500"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Improved number visibility */}
      <span className="absolute top-3 right-3 text-4xl lg:text-5xl font-bold text-primary/10 select-none pointer-events-none group-hover:text-primary/20 transition-colors duration-500">
        {number}
      </span>

      {/* Icon with gradient background */}
      <div className="relative mb-4">
        <div className="w-11 h-11 lg:w-12 lg:h-12 rounded-xl bg-gradient-to-br from-primary/10 to-violet-500/10 flex items-center justify-center group-hover:scale-110 group-hover:from-primary/20 group-hover:to-violet-500/20 group-hover:shadow-lg group-hover:shadow-primary/10 transition-all duration-500">
          <Icon className="w-5 h-5 lg:w-6 lg:h-6 text-primary transition-transform duration-300 group-hover:scale-110" />
        </div>
      </div>

      <div className="relative">
        <h3 className="text-base lg:text-lg font-bold mb-2 group-hover:text-primary transition-colors duration-300">
          {benefit.title}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 group-hover:text-muted-foreground/80 transition-colors duration-300">
          {benefit.description}
        </p>
      </div>

      {/* Animated bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-violet-500 to-primary rounded-b-xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
    </div>
  );
}

export function Benefits() {
  const { t } = useLanguage();
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/images/benefits-bg.webp)' }}
      >
        <div className="absolute inset-0 bg-white/85" />
      </div>

      <div className="absolute -top-40 -left-40 w-80 h-80 rounded-full bg-gradient-to-br from-primary/5 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-gradient-to-tl from-primary/5 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div
          ref={ref}
          className={cn(
            'transition-all duration-700',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          )}
        >
          <div className="flex flex-col lg:flex-row lg:gap-12 xl:gap-16 items-center">
            <div
              className={cn(
                'hidden lg:block lg:w-[42%] xl:w-[40%] flex-shrink-0',
                'transition-all duration-700 delay-200',
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
              )}
            >
              <div className="relative aspect-[3/4]">
                <BenefitsImage
                  src="/images/benefits-tech.jpg"
                  alt="Digital technology and web development"
                />

                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-2xl -z-10" />
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-primary/5 rounded-xl -z-10" />
              </div>
            </div>

            <div className="w-full lg:w-[58%] xl:w-[60%]">
              <div className="text-center lg:text-left mb-10 lg:mb-12">
                <span className="inline-block px-4 py-1.5 rounded-full bg-primary/5 text-primary text-sm font-medium mb-4">
                  {t.benefits.badge}
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-4xl xl:text-5xl font-bold mb-4">
                  {t.benefits.title}
                </h2>
                <p className="text-lg text-muted-foreground max-w-xl lg:mx-0 mx-auto">
                  {t.benefits.subtitle}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-5">
                {t.benefits.items.map((benefit, index) => {
                  const Icon = iconMap[benefit.icon] || Paintbrush;
                  const number = String(index + 1).padStart(2, '0');
                  return (
                    <BenefitCard
                      key={benefit.title}
                      benefit={benefit}
                      Icon={Icon}
                      number={number}
                      index={index}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
