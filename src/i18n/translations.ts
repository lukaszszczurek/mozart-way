export type Language = 'pl' | 'en';

export const translations = {
  pl: {
    // Navigation
    nav: {
      services: 'Usługi',
      portfolio: 'Realizacje',
      process: 'Proces',
      testimonials: 'Opinie',
      contact: 'Kontakt',
      getQuote: 'Bezpłatna wycena',
    },

    // Hero
    hero: {
      badge: 'mozart_way',
      title: 'Tworzymy strony,',
      titleHighlight: 'które zagrają',
      title2: ' w Twoim biznesie',
      description: 'Projektujemy i budujemy nowoczesne strony internetowe, które przyciągają klientów i zwiększają sprzedaż. Responsywne, szybkie, zoptymalizowane pod SEO.',
      cta1: 'Bezpłatna wycena',
      cta2: 'Zobacz realizacje',
      trustedBy: 'Zaufali nam',
    },

    // Social Proof
    proof: {
      title: 'Zaufali nam',
      subtitle: 'Poznaj opinie naszych klientów',
      projectsCompleted: 'Zrealizowanych projektów',
      clientSatisfaction: 'Zadowolonych klientów',
      yearsExperience: 'Lat doświadczenia',
      avgRating: 'Średnia ocena',
    },

    // Testimonials
    testimonials: {
      title: 'Co mówią klienci',
      subtitle: 'Opinie osób, z którymi współpracowaliśmy',
      items: [
        {
          quote: 'Profesjonalne podejście i świetna komunikacja przez cały projekt. Strona przekroczyła moje oczekiwania - konwersje wzrosły o 150%.',
          author: 'Anna Kowalska',
          role: 'CEO, TechStart',
          rating: 5,
        },
        {
          quote: 'Bardzo szybka realizacja i doskonała jakość. Polecam każdemu, kto szuka rzetelnego wykonawcy stron internetowych.',
          author: 'Piotr Nowak',
          role: 'Właściciel, NowaFirma',
          rating: 5,
        },
        {
          quote: 'Strona działa świetnie, jest szybka i wygląda profesjonalnie. Klienci często chwalą jej wygląd. Rewelacyjna współpraca!',
          author: 'Maria Wiśniewska',
          role: 'Marketing Manager, GrowthCo',
          rating: 5,
        },
      ],
    },

    // Services
    services: {
      title: 'Usługi',
      subtitle: 'Wybierz rozwiązanie dopasowane do celów Twojej firmy',
      packages: [
        {
          name: 'Standard',
          price: 'od 6 000 zł',
          priceNote: 'netto',
          description: 'Dla firm rozpoczynających obecność online lub potrzebujących odświeżenia wizerunku',
          features: [
            'Profesjonalna prezentacja firmy budująca zaufanie klientów',
            'Strona zoptymalizowana pod wyszukiwarki i urządzenia mobilne',
            'Formularz kontaktowy generujący zapytania od klientów',
            'Szybkie wdrożenie bez angażowania Twojego czasu',
            'Wsparcie techniczne po uruchomieniu strony',
          ],
          highlight: false,
        },
        {
          name: 'Pro',
          price: 'od 12 000 zł',
          priceNote: 'netto',
          description: 'Dla firm, które chcą aktywnie pozyskiwać klientów przez stronę internetową',
          features: [
            'Strona zaprojektowana z myślą o konwersji i generowaniu leadów',
            'Samodzielna edycja treści bez znajomości programowania',
            'Widoczność w Google dzięki zaawansowanej optymalizacji SEO',
            'Integracje z narzędziami marketingowymi i analitycznymi',
            'Sekcja aktualności lub blog wspierający pozycjonowanie',
            'Indywidualny projekt graficzny wyróżniający markę',
          ],
          highlight: true,
        },
        {
          name: 'Max',
          price: 'od 22 000 zł',
          priceNote: 'netto',
          description: 'Dla firm planujących sprzedaż produktów lub usług online',
          features: [
            'Sklep internetowy gotowy do przyjmowania zamówień od pierwszego dnia',
            'Płatności online i integracje z popularnymi bramkami płatniczymi',
            'Automatyzacja obsługi zamówień i wysyłek',
            'Optymalizacja ścieżki zakupowej zwiększająca konwersję',
            'Panel administracyjny do zarządzania produktami i zamówieniami',
            'Rozbudowane wsparcie techniczne w okresie wdrożenia',
          ],
          highlight: false,
        },
      ],
      cta: 'Umów konsultację',
      mostPopular: 'Najczęściej wybierany',
    },

    // Case Studies
    caseStudies: {
      title: 'Ostatnie realizacje',
      subtitle: 'Zobacz efekty naszej pracy',
      viewProject: 'Zobacz projekt',
      results: 'Rezultaty',
      technologies: 'Technologie',
      items: [
        {
          title: 'AutoElite',
          subtitle: 'Salon samochodowy',
          category: 'Landing Page',
          description: 'Elegancka strona dla salonu samochodowego z katalogiem pojazdów i systemem rezerwacji jazd próbnych.',
          results: ['+250% więcej leadów', '2s czas ładowania', '95/100 PageSpeed'],
          technologies: ['React', 'Next.js', 'Tailwind'],
          image: '/images/case-autoelite.jpg',
          link: 'https://elitemetro.mozartway.com/',
        },
        {
          title: 'GreenGarden',
          subtitle: 'Strona o ogrodach',
          category: 'Landing Page',
          description: 'Elegancka strona prezentująca usługi projektowania i pielęgnacji ogrodów. Nowoczesny design z galerią realizacji.',
          results: ['+180% konwersji', '4.8/5 ocena UX', '+40% zapytań'],
          technologies: ['React', 'Tailwind', 'Vite'],
          image: '/images/case-greengarden.jpg',
          link: 'https://greengarden.mozartway.com/',
        },
        {
          title: 'Sigma Study',
          subtitle: 'Szkoła korepetycji',
          category: 'Edukacja',
          description: 'Nowoczesna strona dla szkoły korepetycji z matematyki z systemem zapisów online i harmonogramem zajęć.',
          results: ['+120 uczniów/mies.', 'Top 3 w Google', '+65% zapytań'],
          image: '/images/case-sigma.jpg',
          link: 'https://www.sigma-study.net/',
        },
      ],
    },

    // Benefits
    benefits: {
      badge: 'Korzyści',
      title: 'Dlaczego my?',
      subtitle: '6 powodów, dla których warto z nami współpracować',
      items: [
        {
          title: 'Indywidualny projekt',
          description: 'Każda strona jest projektowana od podstaw pod Twoje potrzeby. Żadnych gotowych szablonów.',
          icon: 'design',
        },
        {
          title: 'Responsywność',
          description: 'Strony działają idealnie na każdym urządzeniu - od telefonu po duży monitor.',
          icon: 'responsive',
        },
        {
          title: 'Optymalizacja SEO',
          description: 'Budujemy strony z myślą o pozycjonowaniu, żebyś był widoczny w Google.',
          icon: 'seo',
        },
        {
          title: 'System CMS',
          description: 'Łatwa edycja treści bez znajomości programowania. Sam zarządzasz swoją stroną.',
          icon: 'cms',
        },
        {
          title: 'Bezpieczeństwo',
          description: 'Certyfikat SSL, regularne backupy i ochrona przed atakami w standardzie.',
          icon: 'security',
        },
        {
          title: 'Wsparcie techniczne',
          description: 'Po wdrożeniu nie zostawiamy Cię samego. Pomagamy i doradzamy.',
          icon: 'support',
        },
      ],
    },

    // Process
    process: {
      title: 'Jak pracujemy',
      subtitle: 'Przejrzysty proces w 4 krokach',
      steps: [
        {
          number: '01',
          title: 'Analiza i brief',
          description: 'Poznajemy Twoje potrzeby, cele biznesowe i grupę docelową. Przygotowujemy szczegółowy brief projektu.',
          duration: '2-3 dni',
        },
        {
          number: '02',
          title: 'Projekt i design',
          description: 'Tworzymy makiety i projekt graficzny. Konsultujemy każdy etap, aby efekt spełniał Twoje oczekiwania.',
          duration: '5-7 dni',
        },
        {
          number: '03',
          title: 'Realizacja',
          description: 'Kodujemy stronę z dbałością o wydajność, bezpieczeństwo i SEO. Testujemy na różnych urządzeniach.',
          duration: '7-14 dni',
        },
        {
          number: '04',
          title: 'Wdrożenie',
          description: 'Uruchamiamy stronę, szkolimy z obsługi CMS i zapewniamy wsparcie techniczne po wdrożeniu.',
          duration: '1-2 dni',
        },
      ],
    },

    // Contact
    contact: {
      title: 'Porozmawiajmy',
      subtitle: 'Opowiedz nam o swoim projekcie',
      form: {
        name: 'Imię i nazwisko',
        email: 'Email',
        phone: 'Telefon (opcjonalnie)',
        company: 'Nazwa firmy (opcjonalnie)',
        service: 'Rodzaj usługi',
        servicePlaceholder: 'Wybierz usługę...',
        serviceOptions: ['Strona wizytówka', 'Strona firmowa', 'Sklep internetowy', 'Aplikacja webowa', 'Inne'],
        budget: 'Przybliżony budżet',
        budgetPlaceholder: 'Wybierz budżet...',
        budgetOptions: ['do 5 000 zł', '5 000 - 10 000 zł', '10 000 - 20 000 zł', 'powyżej 20 000 zł'],
        message: 'Opisz swój projekt',
        messagePlaceholder: 'Czego potrzebujesz? Jakie masz cele? Im więcej napiszesz, tym lepiej przygotujemy wycenę.',
        submit: 'Wyślij zapytanie',
        sending: 'Wysyłanie...',
        consent: 'Wyrażam zgodę na przetwarzanie moich danych osobowych zgodnie z',
        privacy: 'Polityką Prywatności',
        success: 'Wiadomość wysłana!',
        successDesc: 'Odpowiemy w ciągu 24h',
      },
      info: {
        title: 'Dane kontaktowe',
        email: 'lukasz.szczurek@mozartway.com',
        phone: '+48 532 533 220',
        response: 'Odpowiadamy w ciągu 24h',
        address: 'Warszawa, Polska',
        labels: {
          email: 'Email',
          phone: 'Telefon',
          location: 'Lokalizacja',
          responseTime: 'Czas odpowiedzi',
        },
      },
      cta: {
        title: 'Gotowy na nową stronę?',
        description: 'Umów się na bezpłatną konsultację i dowiedz się, jak możemy pomóc Twojemu biznesowi.',
      },
    },

    // Footer
    footer: {
      description: 'Tworzymy strony internetowe i aplikacje webowe, które pomagają rozwijać Twój biznes.',
      sections: {
        links: 'Linki',
        legal: 'Prawne',
      },
      links: {
        services: 'Usługi',
        portfolio: 'Realizacje',
        process: 'Proces',
        contact: 'Kontakt',
      },
      legal: {
        privacy: 'Polityka Prywatności',
        terms: 'Regulamin',
        rodo: 'RODO',
      },
      copyright: '© 2025 mozart_way. Wszelkie prawa zastrzeżone.',
      rodoNotice: 'Administratorem danych osobowych jest mozart_way. Dane przetwarzane są zgodnie z RODO.',
    },
  },

  en: {
    // Navigation
    nav: {
      services: 'Services',
      portfolio: 'Portfolio',
      process: 'Process',
      testimonials: 'Testimonials',
      contact: 'Contact',
      getQuote: 'Get a Quote',
    },

    // Hero
    hero: {
      badge: 'mozart_way',
      title: 'We build websites',
      titleHighlight: 'that perform',
      title2: ' for your business',
      description: 'We design and build modern websites that attract customers and increase sales. Responsive, fast, SEO optimized.',
      cta1: 'Get Free Quote',
      cta2: 'View Projects',
      trustedBy: 'Trusted by',
    },

    // Social Proof
    proof: {
      title: 'Trusted by',
      subtitle: 'See what our clients say',
      projectsCompleted: 'Projects Completed',
      clientSatisfaction: 'Client Satisfaction',
      yearsExperience: 'Years of Experience',
      avgRating: 'Average Rating',
    },

    // Testimonials
    testimonials: {
      title: 'Client Testimonials',
      subtitle: 'What our clients say about working with us',
      items: [
        {
          quote: 'Professional approach and excellent communication throughout the project. The website exceeded my expectations - conversions increased by 150%.',
          author: 'Anna Kowalska',
          role: 'CEO, TechStart',
          rating: 5,
        },
        {
          quote: 'Very fast delivery and outstanding quality. I recommend to everyone looking for a reliable web development partner.',
          author: 'Piotr Nowak',
          role: 'Owner, NewBusiness',
          rating: 5,
        },
        {
          quote: 'The site works great, is fast and looks professional. Clients often praise its appearance. Fantastic collaboration!',
          author: 'Maria Wiśniewska',
          role: 'Marketing Manager, GrowthCo',
          rating: 5,
        },
      ],
    },

    // Services
    services: {
      title: 'Services',
      subtitle: 'Choose a solution tailored to your business goals',
      packages: [
        {
          name: 'Standard',
          price: 'from €1,400',
          priceNote: 'net',
          description: 'For businesses starting their online presence or refreshing their image',
          features: [
            'Professional company presentation that builds customer trust',
            'Website optimized for search engines and mobile devices',
            'Contact form that generates customer inquiries',
            'Quick implementation without taking up your time',
            'Technical support after website launch',
          ],
          highlight: false,
        },
        {
          name: 'Pro',
          price: 'from €2,800',
          priceNote: 'net',
          description: 'For companies that want to actively acquire customers through their website',
          features: [
            'Website designed for conversion and lead generation',
            'Self-editing content without programming knowledge',
            'Google visibility through advanced SEO optimization',
            'Integration with marketing and analytics tools',
            'News section or blog supporting SEO positioning',
            'Custom graphic design that distinguishes your brand',
          ],
          highlight: true,
        },
        {
          name: 'Max',
          price: 'from €5,100',
          priceNote: 'net',
          description: 'For businesses planning to sell products or services online',
          features: [
            'Online store ready to accept orders from day one',
            'Online payments and integration with popular payment gateways',
            'Automation of order processing and shipping',
            'Shopping path optimization to increase conversion',
            'Admin panel for managing products and orders',
            'Extended technical support during implementation',
          ],
          highlight: false,
        },
      ],
      cta: 'Schedule consultation',
      mostPopular: 'Most popular',
    },

    // Case Studies
    caseStudies: {
      title: 'Portfolio',
      subtitle: 'See the results of our work',
      viewProject: 'View Project',
      results: 'Results',
      technologies: 'Technologies',
      items: [
        {
          title: 'AutoElite',
          subtitle: 'Car Dealership',
          category: 'Landing Page',
          description: 'Elegant website for a car dealership with vehicle catalog and test drive booking system.',
          results: ['+250% more leads', '2s load time', '95/100 PageSpeed'],
          technologies: ['React', 'Next.js', 'Tailwind'],
          image: '/images/case-autoelite.jpg',
          link: 'https://elitemetro.mozartway.com/',
        },
        {
          title: 'GreenGarden',
          subtitle: 'Garden Design Website',
          category: 'Landing Page',
          description: 'Elegant website showcasing garden design and maintenance services. Modern design with project gallery.',
          results: ['+180% conversions', '4.8/5 UX rating', '+40% inquiries'],
          technologies: ['React', 'Tailwind', 'Vite'],
          image: '/images/case-greengarden.jpg',
          link: 'https://greengarden.mozartway.com/',
        },
        {
          title: 'Sigma Study',
          subtitle: 'Math Tutoring School',
          category: 'Education',
          description: 'Modern website for a math tutoring school with online enrollment system and class schedule.',
          results: ['+120 students/month', 'Top 3 in Google', '+65% inquiries'],
          image: '/images/case-sigma.jpg',
          link: 'https://www.sigma-study.net/',
        },
      ],
    },

    // Benefits
    benefits: {
      badge: 'Benefits',
      title: 'Why Us?',
      subtitle: '6 reasons to work with us',
      items: [
        {
          title: 'Custom Design',
          description: 'Every website is designed from scratch for your needs. No templates.',
          icon: 'design',
        },
        {
          title: 'Responsive',
          description: 'Sites work perfectly on every device - from phone to large monitor.',
          icon: 'responsive',
        },
        {
          title: 'SEO Optimized',
          description: 'We build sites with SEO in mind so you are visible in Google.',
          icon: 'seo',
        },
        {
          title: 'CMS System',
          description: 'Easy content editing without coding knowledge. Manage your site yourself.',
          icon: 'cms',
        },
        {
          title: 'Security',
          description: 'SSL certificate, regular backups and attack protection included.',
          icon: 'security',
        },
        {
          title: 'Technical Support',
          description: "After launch we don't leave you alone. We help and advise.",
          icon: 'support',
        },
      ],
    },

    // Process
    process: {
      title: 'How We Work',
      subtitle: 'Clear process in 4 steps',
      steps: [
        {
          number: '01',
          title: 'Analysis & Brief',
          description: 'We learn about your needs, business goals, and target audience. We prepare a detailed project brief.',
          duration: '2-3 days',
        },
        {
          number: '02',
          title: 'Design & Layout',
          description: 'We create mockups and graphic design. We consult every stage to meet your expectations.',
          duration: '5-7 days',
        },
        {
          number: '03',
          title: 'Development',
          description: 'We code the website with attention to performance, security, and SEO. We test on various devices.',
          duration: '7-14 days',
        },
        {
          number: '04',
          title: 'Launch',
          description: 'We launch the website, train you on CMS, and provide technical support after deployment.',
          duration: '1-2 days',
        },
      ],
    },

    // Contact
    contact: {
      title: "Let's Talk",
      subtitle: 'Tell us about your project',
      form: {
        name: 'Full Name',
        email: 'Email',
        phone: 'Phone (optional)',
        company: 'Company Name (optional)',
        service: 'Service Type',
        servicePlaceholder: 'Select service...',
        serviceOptions: ['Business Card', 'Corporate Website', 'Online Store', 'Web Application', 'Other'],
        budget: 'Approximate Budget',
        budgetPlaceholder: 'Select budget...',
        budgetOptions: ['up to $1,500', '$1,500 - $3,000', '$3,000 - $6,000', 'above $6,000'],
        message: 'Describe your project',
        messagePlaceholder: 'What do you need? What are your goals? The more you write, the better we can prepare a quote.',
        submit: 'Send Inquiry',
        sending: 'Sending...',
        consent: 'I consent to the processing of my personal data in accordance with the',
        privacy: 'Privacy Policy',
        success: 'Message sent!',
        successDesc: "We'll respond within 24h",
      },
      info: {
        title: 'Contact Information',
        email: 'lukasz.szczurek@mozartway.com',
        phone: '+48 532 533 220',
        response: 'We respond within 24h',
        address: 'Warsaw, Poland',
        labels: {
          email: 'Email',
          phone: 'Phone',
          location: 'Location',
          responseTime: 'Response time',
        },
      },
      cta: {
        title: 'Ready for a new website?',
        description: 'Schedule a free consultation and learn how we can help your business.',
      },
    },

    // Footer
    footer: {
      description: 'We create websites and web applications that help grow your business.',
      sections: {
        links: 'Links',
        legal: 'Legal',
      },
      links: {
        services: 'Services',
        portfolio: 'Portfolio',
        process: 'Process',
        contact: 'Contact',
      },
      legal: {
        privacy: 'Privacy Policy',
        terms: 'Terms of Service',
        rodo: 'GDPR',
      },
      copyright: '© 2025 mozart_way. All rights reserved.',
      rodoNotice: 'The data controller is mozart_way. Data is processed in accordance with GDPR.',
    },
  },
} as const;

export type Translations = typeof translations.pl;
