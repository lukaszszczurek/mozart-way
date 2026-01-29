import { createContext, useContext, useState, useCallback, useEffect, ReactNode } from 'react';
import { translations, Language, Translations } from './translations';

interface LanguageContextType {
  language: Language;
  t: Translations;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

function getLanguageFromURL(): Language {
  const path = window.location.pathname;
  if (path.startsWith('/en')) {
    return 'en';
  }
  return 'pl'; // Default to Polish
}

function updateURL(lang: Language) {
  const currentPath = window.location.pathname;
  const currentLang = currentPath.startsWith('/en') ? 'en' : 'pl';

  if (lang === currentLang) return;

  let newPath: string;
  if (lang === 'en') {
    // Add /en prefix
    newPath = '/en' + (currentPath === '/' ? '' : currentPath);
  } else {
    // Remove /en prefix, default to Polish
    newPath = currentPath.replace(/^\/en/, '') || '/';
  }

  window.history.pushState({}, '', newPath);
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      return getLanguageFromURL();
    }
    return 'pl';
  });

  useEffect(() => {
    // Update HTML lang attribute
    document.documentElement.lang = language;

    // Listen for browser back/forward
    const handlePopState = () => {
      setLanguageState(getLanguageFromURL());
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [language]);

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    updateURL(lang);
    document.documentElement.lang = lang;
  }, []);

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, t, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
