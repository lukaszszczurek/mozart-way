import { Github, Linkedin, Youtube, Mail, Home } from "lucide-react";
import type { ResumeData } from "./resume-data";

export const TECH_DATA: ResumeData = {
  name: "Łukasz Szczurek",
  initials: "ŁS",
  url: "https://mozartway.com/techresume",
  location: "Polska",
  description:
    "Full-stack founder. Sam projektuję architekturę, koduję produkcyjny kod i utrzymuję infrastrukturę dwóch produktów B2B SaaS.",
  summary: `Buduję i utrzymuję samodzielnie dwa produkty produkcyjne: Mozart Way (AI dla placówek
edukacyjnych, 40+ aktywnych organizacji) i Mozart Sales (multi-tenant CRM z telefonią,
nagrywaniem rozmów i AI). Next.js 16 / React 19 / Prisma / PostgreSQL (Neon) na Vercelu —
z realnym ruchem produkcyjnym, nie projekt poboczny.

Najwięcej czasu spędzam tam, gdzie system dotyka świata zewnętrznego: integracje telefonii
(Telnyx, Zadarma — WebRTC, SIP, nagrywanie stereo z podziałem ról), pipeline transkrypcji AI
z wielopoziomowym fallbackiem (Deepgram → Gemini → Groq) i rekoncyliacją kosztów z realnymi
rachunkami dostawców.

Zbudowałem też autonomiczny pipeline CI/CD, w którym agenty AI implementują zadania, robią
code review i mergują — z twardymi bramkami tam, gdzie chodzi o dane klientów.`,
  avatarUrl: "/education/founder-alt.jpg",
  skills: [
    { name: "Next.js / React" },
    { name: "TypeScript" },
    { name: "Prisma / PostgreSQL" },
    { name: "Architektura multi-tenant SaaS" },
    { name: "WebRTC / SIP" },
    { name: "LLM / RAG (pgvector)" },
    { name: "CI/CD & AI-agent automation" },
    { name: "Obserwowalność (Sentry, cron health-checks)" },
  ],
  navbar: [{ href: "/techresume#hero", icon: Home, label: "Home" }],
  contact: {
    email: "lukasz.szczurek@mozartway.com",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/lukaszszczurek", // TODO: potwierdź link
        icon: Github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "#", // TODO: dodaj link do LinkedIn
        icon: Linkedin,
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
      title: "Founder & Engineer",
      logoUrl: "",
      start: "2025",
      end: undefined,
      description:
        "Multi-tenantowy CRM sprzedażowy: Next.js 16, Prisma + PostgreSQL (Neon), telefonia WebRTC (Telnyx + Zadarma), stereo nagrywanie rozmów z podziałem ról, pipeline transkrypcji AI (Deepgram/Gemini/Groq), RAG na pgvector zasilający silnik kwalifikacji leadów. Autonomiczny pipeline CI/CD, w którym agenty AI implementują, testują i mergują zadania.",
    },
    {
      company: "Mozart Way",
      href: "https://mozartway.com",
      badges: [],
      location: "Zdalnie",
      title: "Founder & Engineer",
      logoUrl: "",
      start: "2023",
      end: undefined,
      description:
        "System AI dla placówek edukacyjnych obsługujący ponad 40 organizacji produkcyjnie. Architektura multi-tenant, integracje płatności i komunikacji, panel administracyjny z monitoringiem zdrowia systemu.",
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
      title: "Multi-provider telefonia z live transkrypcją AI",
      href: "",
      dates: "2025 — obecnie",
      description:
        "WebRTC + SIP integracja z dwoma operatorami (Telnyx, Zadarma), nagrywanie stereo z podziałem kanałów Agent/Klient, pipeline transkrypcji z trzema silnikami awaryjnymi (Deepgram multichannel → Gemini → Groq) i deterministyczną walidacją kontenera audio przed transkrypcją.",
      technologies: ["WebRTC", "SIP", "Deepgram", "Gemini API"],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "Autonomiczny pipeline code review (agenty AI)",
      href: "",
      dates: "2026",
      description:
        "GitHub Issue tworzone przez agenta AI trafiają do implementera, przechodzą automatyczne QA na nagraniu sesji e2e, code review innego agenta z werdyktem, i lądują w merge — bez ręcznej ingerencji, z twardymi bramkami (migracje/auth/płatności) wymuszającymi review człowieka.",
      technologies: ["GitHub Actions", "AI agents", "Playwright"],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "Kwalifikacja leadów AI na pgvector RAG",
      href: "",
      dates: "2025 — obecnie",
      description:
        "Baza wiedzy metodyki sprzedażowej (pgvector, embeddingi Gemini) zasilająca generatory AI — kwalifikację leada w skali 1-30, cotygodniowe raporty \"Dyrektora Sprzedaży\" i sugestie następnego kroku, budowane na realnych danych operacyjnych, nie ogólnych promptach.",
      technologies: ["pgvector", "RAG", "PostgreSQL", "LLM"],
      links: [],
      image: "",
      video: "",
    },
  ],

  hackathons: [
    {
      title: "Cichy koszt: 8 PLN vs 1150 PLN/mc",
      dates: "2026",
      location: "Mozart Sales",
      description:
        "Panel kosztów liczył wydatki telefonii ze stałych zaszytych w kodzie zamiast z realnych raportów dostawcy — różnica sięgała ~24x. Naprawione przez podpięcie się pod prawdziwe Usage Reports API operatora.",
      image: "",
      links: [],
    },
    {
      title: "Race condition w cronie: podwójne leady",
      dates: "2026",
      location: "Mozart Sales",
      description:
        "Ręczne odpalenie synchronizacji równolegle z cronem produkowało duplikaty leadów. Naprawa: blokada compare-and-swap na poziomie rekordu konfiguracji.",
      image: "",
      links: [],
    },
  ],
};
