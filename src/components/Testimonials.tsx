import { Quote, Star } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { cn } from '../lib/utils';

export function Testimonials() {
  const { t } = useLanguage();
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <section id="testimonials" className="py-24 lg:py-32 scroll-mt-20 bg-gradient-to-b from-violet-50/50 via-white to-white relative overflow-hidden">
      {/* CSS decorative elements */}
      <div className="absolute bottom-10 right-10 w-48 h-48 opacity-10 hidden lg:block pointer-events-none">
        <div className="w-full h-full rounded-full bg-gradient-to-br from-primary/30 to-violet-500/30 blur-2xl" />
      </div>
      <div className="absolute top-20 left-10 w-32 h-32 opacity-10 hidden lg:block pointer-events-none">
        <div className="w-full h-full rounded-full bg-gradient-to-tr from-violet-500/30 to-primary/30 blur-2xl" />
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
              {t.nav.testimonials}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">{t.testimonials.title}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t.testimonials.subtitle}</p>
          </div>

          {/* Testimonials grid */}
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {t.testimonials.items.map((testimonial, index) => (
              <div
                key={index}
                className="testimonial-card group hover:border-primary/20"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Rating */}
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500 transition-transform duration-200 group-hover:scale-110" style={{ transitionDelay: `${i * 50}ms` }} />
                  ))}
                </div>

                {/* Quote icon with gradient */}
                <div className="relative mb-4">
                  <Quote className="w-10 h-10 text-primary/20 transition-all duration-300 group-hover:text-primary/30 group-hover:scale-110" />
                </div>

                {/* Quote text */}
                <blockquote className="text-lg text-foreground mb-8 leading-relaxed transition-colors duration-300 group-hover:text-foreground/90">
                  "{testimonial.quote}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-4 pt-6 border-t border-border/50 transition-colors duration-300 group-hover:border-primary/20">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-violet-500 flex items-center justify-center font-bold text-white text-sm ring-2 ring-white shadow-lg transition-all duration-300 group-hover:scale-105 group-hover:shadow-primary/20">
                    {testimonial.author.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div className="font-semibold transition-colors duration-300 group-hover:text-primary">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
