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

Projektuję proces i sam go implementuję — dlatego AI, które oddaję handlowcom, rozumie
sprzedaż, a nie tylko generuje treści.`,
  avatarUrl: "/education/founder-lukasz.jpg",
  skills: [
    { name: "Kwalifikacja leadów (DRIVER)" },
    { name: "Cold calling i discovery" },
    { name: "Zarządzanie pipeline'em" },
    { name: "Projektowanie procesu sprzedaży B2B" },
    { name: "AI Sales Coaching" },
    { name: "Automatyzacja lejka" },
    { name: "Negocjacje i domykanie" },
    { name: "Product-led growth" },
  ],
  navbar: [{ href: "/salesresume#hero", icon: Home, label: "Home" }],
  contact: {
    email: "lukasz.szczurek@mozartway.com",
    social: {
      LinkedIn: {
        name: "LinkedIn",
        url: "#", // TODO: dodaj link do LinkedIn
        icon: Linkedin,
        navbar: true,
      },
      GitHub: {
        name: "GitHub",
        url: "https://github.com/lukaszszczurek", // TODO: potwierdź link
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
      company: "Mozart Sales",
      href: "https://mozartsales.com",
      badges: [],
      location: "Zdalnie",
      title: "Founder — proces sprzedaży + AI",
      logoUrl: "",
      start: "2025",
      end: undefined,
      description:
        "Zaprojektowałem i wdrożyłem CRM z wbudowanym \"Dyrektorem Sprzedaży AI\": automatyczna kwalifikacja leadów (framework DRIVER, skala 1-30), transkrypcja i analiza każdej rozmowy, cotygodniowe raporty skuteczności i kolejka deali wymagających natychmiastowej uwagi.",
    },
    {
      company: "Mozart Way",
      href: "https://mozartway.com",
      badges: [],
      location: "Zdalnie",
      title: "Founder — sprzedaż, produkt, wdrożenia",
      logoUrl: "",
      start: "2023",
      end: undefined,
      description:
        "Od pierwszej rozmowy telefonicznej po wdrożenie i utrzymanie klienta — pełny cykl sprzedaży B2B prowadzony samodzielnie. Zbudowałem ofertę, proces onboardingu i materiały sprzedażowe dla produktu, któremu zaufało 40+ placówek edukacyjnych.",
    },
  ],

  // TODO: uzupełnij realną edukacją
  education: [
    {
      school: "TODO: nazwa uczelni/szkoły",
      href: "#",
      degree: "TODO: kierunek / tytuł",
      logoUrl: "",
      start: "TODO",
      end: "TODO",
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
  ],
};
