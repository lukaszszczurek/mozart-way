import { Github, Linkedin, Youtube, Mail, Home } from "lucide-react";
import type { ResumeData } from "./resume-data";

export const SALES_DATA: ResumeData = {
  name: "Łukasz Szczurek",
  initials: "ŁS",
  url: "https://mozartway.com/salesresume",
  location: "Polska",
  description:
    "Founder, który sam sprzedaje to, co buduje. Projektuję procesy sprzedaży B2B i koduję AI, które je realnie egzekwuje.",
  summary: `Zanim zacząłem kodować własny produkt, przez lata siedziałem po drugiej stronie telefonu —
sam prowadziłem sprzedaż w swojej szkole korepetycji: cold calling, discovery, domykanie.
Tę intuicję przełożyłem na dwa produkty B2B, które zbudowałem od zera.

Mozart Way — system AI dla placówek edukacyjnych — zdobył zaufanie ponad 40 szkół,
przedszkoli i centrów korepetycji w Polsce. Mozart Sales to CRM, w którym zakodowałem
własny proces sprzedażowy: automatyczną kwalifikację leadów, nagrywanie i analizę
każdej rozmowy, AI wskazujące, które deale wymagają uwagi już dziś.

Po drodze budowałem też AI dla cudzych zespołów sprzedaży — trenera rozmów głosowych,
który uczy handlowców zamykać skuteczniej. Projektuję proces i sam go implementuję —
dlatego AI, które oddaję handlowcom, rozumie sprzedaż, a nie tylko generuje treści.`,
  avatarUrl: "/education/founder-lukasz.jpg",
  skills: [
    { name: "Kwalifikacja leadów (DRIVER)" },
    { name: "Cold calling i discovery" },
    { name: "AI Sales Coaching" },
    { name: "Zarządzanie pipeline'em" },
    { name: "Warsztaty strategiczne z klientem" },
    { name: "Zarządzanie interesariuszami" },
    { name: "Projektowanie procesu sprzedaży B2B" },
    { name: "Automatyzacja lejka" },
    { name: "Negocjacje i domykanie" },
  ],
  navbar: [{ href: "/salesresume#hero", icon: Home, label: "Home" }],
  contact: {
    email: "lukasz.szczurek@mozartway.com",
    social: {
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/%C5%82ukasz-szczurek/",
        icon: Linkedin,
        navbar: true,
      },
      GitHub: {
        name: "GitHub",
        url: "https://github.com/lukaszszczurek",
        icon: Github,
        navbar: true,
      },
      Youtube: {
        name: "YouTube",
        url: "#", // TODO: dodaj link, jeśli aktualny
        icon: Youtube,
        navbar: false,
      },
      email: {
        name: "Napisz e-mail",
        url: "mailto:lukasz.szczurek@mozartway.com",
        icon: Mail,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Mozart Way",
      href: "https://mozartway.com",
      badges: [],
      location: "Zdalnie",
      title: "Founder — sprzedaż, produkt, wdrożenia",
      logoUrl: "/education/brand/mozart-way-mark-violet.svg",
      start: "2023",
      end: undefined,
      description: [
        "Zbudowałem produkt sprzedażowo od zera — od pierwszej rozmowy telefonicznej po wdrożenie — zdobywając zaufanie ponad 40 placówek edukacyjnych w Polsce.",
        "Zaprojektowałem ofertę i proces onboardingu dopasowany do realnego bólu klienta (chaos w grafikach i płatnościach), co skracało cykl decyzyjny i realnie domykało sprzedaż.",
      ],
    },
    {
      company: "Mozart Sales",
      href: "https://mozartsales.com",
      badges: [],
      location: "Zdalnie",
      title: "Founder — proces sprzedaży + AI",
      logoUrl: "/education/brand/mozart-way-mark-violet.svg",
      start: "2025",
      end: undefined,
      description: [
        "Zakodowałem własny proces sprzedażowy w CRM — automatyczną kwalifikację leadów (framework DRIVER, skala 1-30) i AI wskazujące priorytetowe deale — zamiast intuicji, dając zespołom mierzalny proces.",
        "Nagrywam i analizuję AI każdą rozmowę handlową, generując cotygodniowy raport skuteczności, żeby technikę sprzedaży dało się poprawiać na bieżąco, nie raz na kwartał.",
      ],
    },
    {
      company: "SimSale",
      href: "#",
      badges: [],
      location: "Polska",
      title: "Technical Consultant — AI Implementation",
      logoUrl: "",
      start: "Mar 2025",
      end: "Lis 2025",
      stack: ["Next.js", "ElevenLabs", "LLM API", "Prompt Engineering"],
      description: [
        "Zbudowałem trenera rozmów sprzedażowych AI, wykorzystując ElevenLabs i modele LLM, dzięki czemu zespoły sprzedaży zyskały realistyczne scenariusze ćwiczeniowe i szybciej podnosiły skuteczność rozmów z klientem.",
        "Wdrożyłem głosowe AI w interakcji z klientem, integrując je z istniejącym stackiem, co zamieniło standardową obsługę w spersonalizowane doświadczenie i podniosło satysfakcję klienta.",
        "Poprowadziłem warsztaty strategiczne z klientem, tłumacząc jego feedback na konkretne specyfikacje techniczne, żeby projekt trzymał się celów biznesowych, nie tylko technicznych.",
      ],
    },
    {
      company: "Sabre",
      href: "https://www.sabre.com",
      badges: [],
      location: "Kraków",
      title: "Software Engineer",
      logoUrl: "/logos/sabre.png",
      start: "Lip 2024",
      end: "Sty 2026",
      stack: ["Java", "Spring Boot", "Microservices"],
      description: [
        "Utrzymałem zaufanie klientów korporacyjnych do platformy obsługującej 20 mln+ rezerwacji dziennie, prowadząc analizę przyczyn i szybko naprawiając incydenty produkcyjne, zanim odczuli je pasażerowie.",
        "Przekonałem 200+ inżynierów QA do nowego frameworku testowego, prezentując go i wdrażając zespoły, co przyspieszyło ich codzienną pracę.",
        "Uzgadniałem wymagania z międzynarodowymi zespołami biznesowymi i technicznymi, tłumacząc potrzeby klienta na konkretne rozwiązania.",
      ],
    },
  ],

  education: [
    {
      school: "Polsko-Japońska Akademia Technik Komputerowych",
      href: "https://pja.edu.pl",
      degree: "Informatyka, inż. (w trakcie)",
      logoUrl: "",
      start: "2023",
      end: "obecnie",
    },
    {
      school: "XIV LO im. Stanisława Staszica w Warszawie",
      href: "https://staszic.waw.pl",
      degree: "Klasa eksperymentalna matematyczna",
      logoUrl: "",
      start: "2018",
      end: "2021",
    },
  ],

  projects: [
    {
      title: "Mozart Sales — CRM z AI Dyrektorem Sprzedaży",
      href: "https://mozartsales.com",
      dates: "2025 — obecnie",
      description:
        "CRM sprzedażowy dla zespołów B2B. AI automatycznie kwalifikuje leady (framework DRIVER, punktacja 1-30), nagrywa i transkrybuje każdą rozmowę, generuje cotygodniowy raport skuteczności i wskazuje deale wymagające natychmiastowej uwagi.",
      technologies: ["Next.js", "AI / LLM", "Telefonia (SIP)", "Automatyzacja"],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "Mozart Way — system AI dla placówek edukacyjnych",
      href: "https://mozartway.com",
      dates: "2023 — obecnie",
      description:
        "Produkt B2B budowany i sprzedawany od zera — od pierwszej rozmowy telefonicznej po wdrożenie. Ponad 40 szkół, przedszkoli i centrów korepetycji zarządza dziś swoją placówką z jednego miejsca, oszczędzając 80h+ miesięcznie.",
      technologies: ["Sprzedaż B2B", "Onboarding", "AI", "Next.js"],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "AI Trener Rozmów Sprzedażowych (SimSale)",
      href: "#",
      dates: "2025",
      description:
        "Głosowy trener AI dla zespołów sprzedaży — realistyczne scenariusze rozmów z klientem, natychmiastowy feedback, praktyka bez ryzyka utraty realnego leada. Zbudowany na ElevenLabs i LLM.",
      technologies: ["ElevenLabs", "LLM", "Sales Enablement"],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "Automatyczny lejek pozyskiwania leadów",
      href: "",
      dates: "2025",
      description:
        'Zaprojektowałem proces, w którym leady same wpadają do CRM (integracje z rejestrem CEIDG i Facebook Lead Ads) i automatycznie trafiają do handlowca, który pierwszy się z nimi skontaktuje — zero sporów o "czyj to temat".',
      technologies: ["Automatyzacja", "Integracje API", "Proces sprzedaży"],
      links: [],
      image: "",
      video: "",
    },
  ],

  hackathons: [
    {
      title: "Zero martwych leadów",
      dates: "2025",
      location: "Mozart Sales",
      description:
        "Każdy telefon — odebrany czy nie — trafia do CRM z nagraniem i transkryptem. AI samo wychwytuje, które leady ostygły, i przypomina o nich, zanim zrobi to konkurencja.",
      image: "",
      links: [],
    },
    {
      title: "80h+ oszczędności miesięcznie",
      dates: "2023 — 2026",
      location: "Mozart Way",
      description:
        "Placówki edukacyjne, które wcześniej ręcznie ogarniały grafiki, płatności i komunikację z rodzicami, dziś robią to z jednego miejsca — i to był argument, który realnie domykał sprzedaż.",
      image: "",
      links: [],
    },
    {
      title: "90% mniej ręcznej pracy w outreachu",
      dates: "2026",
      location: "Sigma Study",
      description:
        "Zautomatyzowałem proces docierania do nowych leadów, wdrażając AI w miejsce ręcznego researchu i pisania wiadomości — redukując wysiłek zespołu o 90%.",
      image: "",
      links: [],
    },
  ],
};
