import { useState, FormEvent } from 'react';
import { Send, Mail, Phone, Clock, MapPin, ArrowRight } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { cn } from '../lib/utils';

// Google Apps Script webhook URL
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzkz_D_VJodX6NusoHS_OHfUODRWnEWC5oUxtINbF-Waj6Jb1PkXTcu3xU7cFYUJLyluA/exec';

export function Contact() {
  const { t } = useLanguage();
  const { ref, isVisible } = useIntersectionObserver({ sectionId: 'contact' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      company: formData.get('company'),
      service: formData.get('service'),
      budget: formData.get('budget'),
      message: formData.get('message'),
    };

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      // no-cors mode doesn't return readable response, assume success
      setIsSubmitted(true);
    } catch {
      setSubmitError('Wystąpił błąd połączenia. Spróbuj ponownie później.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 lg:py-32 scroll-mt-20 relative overflow-hidden bg-gradient-to-b from-muted/40 via-muted/60 to-muted/40">
      {/* CSS-based background decorations */}
      <div className="absolute top-0 -right-20 w-80 h-80 rounded-full bg-gradient-to-bl from-violet-500/15 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 -left-20 w-64 h-64 rounded-full bg-gradient-to-tr from-blue-500/15 to-transparent blur-3xl pointer-events-none" />
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-30 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(0,0,0,0.03) 1px, transparent 0)', backgroundSize: '24px 24px' }} />

      {/* CTA Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 relative">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-primary to-violet-700 p-8 md:p-12 lg:p-16 shine-on-hover">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-violet-500/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
          <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-white/5 blur-2xl animate-float pointer-events-none" />

          <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                {t.contact.cta.title}
              </h2>
              <p className="text-lg text-white/80 max-w-xl">
                {t.contact.cta.description}
              </p>
            </div>
            <a
              href="#contact-form"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-semibold rounded-xl hover:bg-white/90 transition-all hover:-translate-y-0.5 hover:shadow-xl"
            >
              {t.hero.cta1}
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          id="contact-form"
          className={cn(
            'transition-all duration-700',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          )}
        >
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/5 text-primary text-sm font-medium mb-4">
              {t.nav.contact}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">{t.contact.title}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t.contact.subtitle}</p>
          </div>

          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Contact form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl p-6 lg:p-8 border border-border shadow-lg shadow-black/5 ring-1 ring-black/[0.02]">
                {isSubmitted ? (
                  <div className="text-center py-16">
                    <div className="w-20 h-20 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto mb-6">
                      <Send className="w-10 h-10" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{t.contact.form.success}</h3>
                    <p className="text-muted-foreground">{t.contact.form.successDesc}</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Error message */}
                    {submitError && (
                      <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm">
                        {submitError}
                      </div>
                    )}

                    {/* Name and Email row */}
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2">
                          {t.contact.form.name} *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                          placeholder="Jan Kowalski"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                          {t.contact.form.email} *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                          placeholder="jan@firma.pl"
                        />
                      </div>
                    </div>

                    {/* Phone and Company row */}
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium mb-2">
                          {t.contact.form.phone}
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                          placeholder="+48 123 456 789"
                        />
                      </div>
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium mb-2">
                          {t.contact.form.company}
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                          placeholder="Nazwa Firmy Sp. z o.o."
                        />
                      </div>
                    </div>

                    {/* Service and Budget row */}
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="service" className="block text-sm font-medium mb-2">
                          {t.contact.form.service} *
                        </label>
                        <select
                          id="service"
                          name="service"
                          required
                          defaultValue=""
                          className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                        >
                          <option value="" disabled>{t.contact.form.servicePlaceholder}</option>
                          {t.contact.form.serviceOptions.map((option, index) => (
                            <option key={index} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label htmlFor="budget" className="block text-sm font-medium mb-2">
                          {t.contact.form.budget}
                        </label>
                        <select
                          id="budget"
                          name="budget"
                          defaultValue=""
                          className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                        >
                          <option value="" disabled>{t.contact.form.budgetPlaceholder}</option>
                          {t.contact.form.budgetOptions.map((option, index) => (
                            <option key={index} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        {t.contact.form.message} *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"
                        placeholder={t.contact.form.messagePlaceholder}
                      />
                    </div>

                    {/* Consent */}
                    <div className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        id="consent"
                        name="consent"
                        required
                        className="mt-0.5 flex-shrink-0"
                      />
                      <label htmlFor="consent" className="text-sm text-muted-foreground">
                        {t.contact.form.consent}{' '}
                        <a href="#" className="text-primary hover:underline">
                          {t.contact.form.privacy}
                        </a>
                        . *
                      </label>
                    </div>

                    {/* Submit button with enhanced styling */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={cn(
                        'relative w-full sm:w-auto px-10 py-4 rounded-xl font-semibold transition-all duration-300 overflow-hidden group',
                        'bg-gradient-to-r from-primary via-violet-600 to-primary bg-[length:200%_100%] text-primary-foreground',
                        'disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-none disabled:bg-primary/50',
                        'hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/30 hover:bg-right'
                      )}
                    >
                      {/* Shine effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />

                      {isSubmitting ? (
                        <span className="relative flex items-center justify-center gap-2">
                          <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          {t.contact.form.sending}
                        </span>
                      ) : (
                        <span className="relative flex items-center justify-center gap-2">
                          <Send className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                          {t.contact.form.submit}
                        </span>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Contact info sidebar with improved hover effects */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white rounded-2xl p-6 lg:p-8 border border-border shadow-lg shadow-black/5 ring-1 ring-black/[0.02] hover:shadow-xl hover:shadow-primary/10 transition-all duration-300">
                <h3 className="text-xl font-bold mb-6">{t.contact.info.title}</h3>
                <div className="space-y-5">
                  <a
                    href={`mailto:${t.contact.info.email}`}
                    className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-all duration-300 group p-2 -m-2 rounded-xl hover:bg-primary/5"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center group-hover:bg-primary/10 group-hover:scale-110 transition-all duration-300">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground mb-1">{t.contact.info.labels.email}</div>
                      <div className="font-medium text-foreground group-hover:text-primary transition-colors">{t.contact.info.email}</div>
                    </div>
                  </a>
                  <a
                    href={`tel:${t.contact.info.phone.replace(/\s/g, '')}`}
                    className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-all duration-300 group p-2 -m-2 rounded-xl hover:bg-primary/5"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center group-hover:bg-primary/10 group-hover:scale-110 transition-all duration-300">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground mb-1">{t.contact.info.labels.phone}</div>
                      <div className="font-medium text-foreground group-hover:text-primary transition-colors">{t.contact.info.phone}</div>
                    </div>
                  </a>
                  <div className="flex items-center gap-4 p-2 -m-2">
                    <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground mb-1">{t.contact.info.labels.location}</div>
                      <div className="font-medium">{t.contact.info.address}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-2 -m-2">
                    <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center">
                      <Clock className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground mb-1">{t.contact.info.labels.responseTime}</div>
                      <div className="font-medium text-green-600 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        {t.contact.info.response}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
