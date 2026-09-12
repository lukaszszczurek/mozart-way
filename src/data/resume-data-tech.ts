import { Github, Linkedin, Youtube, Mail, Home } from "lucide-react";
import type { ResumeData } from "./resume-data";

export const TECH_DATA: ResumeData = {
  name: "Łukasz Szczurek",
  initials: "ŁS",
  url: "https://mozartway.com/techresume",
  location: "Polska",
  description:
    "Full-stack founder & engineer. Sam projektuję architekturę, koduję produkcyjny kod i utrzymuję infrastrukturę dwóch produktów B2B SaaS.",
  summary: `Buduję i utrzymuję samodzielnie dwa produkty produkcyjne: Mozart Way (AI dla placówek
edukacyjnych, 40+ aktywnych organizacji) i Mozart Sales (multi-tenant CRM z telefonią,
nagrywaniem rozmów i AI). Next.js 16 / React 19 / Prisma / PostgreSQL (Neon) na Vercelu —
z realnym ruchem produkcyjnym, nie projekt poboczny.

Wcześniej pracowałem jako Software Engineer w Sabre (platforma rezerwacyjna, 20 mln+
rezerwacji dziennie), jako Technical Consultant przy integracji AI głosowego (ElevenLabs,
LLM) dla SimSale, oraz jako AI-assisted developer (Claude Code, React, Firebase) dla
Sigma Study. Najwięcej czasu spędzam tam, gdzie system dotyka świata zewnętrznego:
telefonia (Telnyx, Zadarma — WebRTC, SIP, nagrywanie stereo z podziałem ról), pipeline
transkrypcji AI z wielopoziomowym fallbackiem (Deepgram → Gemini → Groq) i rekoncyliacją
kosztów z realnymi rachunkami dostawców.

Zbudowałem też autonomiczny pipeline CI/CD, w którym agenty AI implementują zadania,
robią code review i mergują — z twardymi bramkami tam, gdzie chodzi o dane klientów.`,
  avatarUrl: "/education/founder-alt.jpg",
  skills: [
    { name: "Next.js / React" },
    { name: "TypeScript" },
    { name: "Java / Spring Boot" },
    { name: "Prisma / PostgreSQL" },
    { name: "Architektura multi-tenant SaaS" },
    { name: "WebRTC / SIP" },
    { name: "LLM / RAG (pgvector)" },
    { name: "AWS / GCP / Azure" },
    { name: "Docker / Kubernetes" },
    { name: "CI/CD & AI-agent automation" },
  ],
  navbar: [{ href: "/techresume#hero", icon: Home, label: "Home" }],
  contact: {
    email: "lukasz.szczurek@mozartway.com",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/lukaszszczurek",
        icon: Github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/%C5%82ukasz-szczurek/",
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
      logoUrl: "/education/brand/mozart-way-mark-violet.svg",
      start: "2025",
      end: undefined,
      stack: ["Next.js 16", "Prisma", "PostgreSQL (Neon)", "WebRTC"],
      description: [
        "Zbudowałem multi-tenantowy CRM sprzedażowy, używając Next.js 16, Prisma i PostgreSQL (Neon), w rezultacie dostając architekturę obsługującą wiele organizacji na jednej bazie kodu bez wycieku danych między nimi.",
        "Zintegrowałem telefonię WebRTC z dwoma operatorami (Telnyx, Zadarma) i stereo nagrywanie rozmów z podziałem kanałów Agent/Klient, dzięki czemu każda rozmowa handlowa ma wiarygodny, rozdzielony na role zapis.",
        "Wdrożyłem pipeline transkrypcji AI z trzema silnikami awaryjnymi (Deepgram → Gemini → Groq), eliminując pojedynczy punkt awarii przy krytycznej funkcji produktu.",
        "Zbudowałem autonomiczny pipeline CI/CD, w którym agenty AI implementują, testują i mergują zadania, z twardymi bramkami (migracje, auth, płatności) wymuszającymi review człowieka.",
      ],
    },
    {
      company: "Mozart Way",
      href: "https://mozartway.com",
      badges: [],
      location: "Zdalnie",
      title: "Founder & Engineer",
      logoUrl: "/education/brand/mozart-way-mark-violet.svg",
      start: "2023",
      end: undefined,
      stack: ["Next.js", "PostgreSQL", "Multi-tenant"],
      description: [
        "Zaprojektowałem architekturę multi-tenant SaaS dla edukacji, używając Next.js i PostgreSQL, w rezultacie obsługując dziś produkcyjnie ponad 40 organizacji na jednej instalacji.",
        "Zbudowałem panel administracyjny z monitoringiem zdrowia systemu (cron health-checks), dzięki czemu awarie integracji (SMS, telefonia, płatności) są wykrywane, zanim zgłosi je klient.",
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
      stack: ["Java", "Spring Boot", "Jenkins", "CI/CD", "Microservices"],
      description: [
        "Skróciłem czas wdrożenia i podniosłem jakość 10+ przepływów rezerwacji, automatyzując testy w pipeline CI/CD (Jenkins), dla platformy obsługującej ponad 20 mln rezerwacji dziennie.",
        "Utrzymałem niezawodność krytycznego API rezerwacyjnego, prowadząc root cause analysis produkcyjnych incydentów, w rezultacie przywracając SLA bez przestojów widocznych dla klienta.",
        "Zbudowałem i utrzymywałem framework testowy dla 14 kluczowych serwisów, wykorzystując Spring Boot i architekturę mikroserwisową, z którego korzystało na co dzień 200+ inżynierów QA.",
        "Zsynchronizowałem wymagania międzynarodowych zespołów cross-funkcyjnych, prowadząc code review i ceremonie Scrum, w rezultacie utrzymując tempo dostaw przy rosnącej złożoności systemu.",
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
      stack: ["Next.js", "ElevenLabs", "LLM API", "MongoDB"],
      description: [
        "Zintegrowałem głosowe AI (ElevenLabs) z modelami LLM, w rezultacie zamieniając standardową interakcję z klientem w spersonalizowane doświadczenie.",
        "Zbudowałem i utrzymałem pipeline AI (LLM API, prompt engineering, MongoDB), zapewniając responsywny i trafny feedback dla klienta w czasie rzeczywistym.",
        "Poprowadziłem warsztaty strategiczne z klientem, tłumacząc jego feedback na konkretne specyfikacje techniczne, żeby projekt trzymał się celów biznesowych.",
      ],
    },
    {
      company: "Sigma Study",
      href: "https://sigma-study.net",
      badges: [],
      location: "Zdalnie",
      title: "AI-Assisted Developer — Freelance",
      logoUrl: "/logos/sigmastudy.png",
      start: "Gru 2025",
      end: undefined,
      stack: ["Claude Code", "React", "TypeScript", "Firebase", "Stripe", "Playwright"],
      description: [
        "Zbudowałem od zera platformę do rezerwacji korepetycji, używając Claude Code, React i Firebase, z pełnym flow płatności (Stripe) i komunikacji — gotową do realnego użycia przez klientów.",
        "Zaprojektowałem narzędzie AI do personalizacji CV, wykorzystując LLM, w rezultacie generując dopasowane dokumenty w kilka sekund zamiast godzin ręcznej pracy.",
        "Zautomatyzowałem outreach do leadów, wdrażając AI w proces pozyskiwania klientów, redukując ręczną pracę zespołu o 90%.",
        "Testowałem krytyczne przepływy end-to-end Playwrightem przed każdym wdrożeniem, utrzymując tempo dostaw mimo częstych zmian w AI-first stacku.",
      ],
    },
    {
      company: "Vention",
      href: "https://ventionteams.com",
      badges: [],
      location: "Zdalnie",
      title: "Software Engineer Intern",
      logoUrl: "/logos/vention.png",
      start: "Lis 2023",
      end: "Lut 2024",
      stack: ["Java", "Spring Boot", "AWS", "Docker", "Liquibase"],
      description: [
        "Zbudowałem funkcje pacjent/recepta/raport w systemie ochrony zdrowia, używając Javy, Spring Boot i AWS, zapewniając zgodność z wymaganiami klienta medycznego.",
        "Skróciłem czas wdrożeń i ułatwiłem kontrolę wersji bazy danych, wdrażając Docker i Liquibase, w rezultacie przyspieszając onboarding kolejnych osób w zespole.",
        "Zaprezentowałem rozwiązanie integracji Liquibase międzyzespołowej publiczności, co doprowadziło do jego adopcji w innych projektach.",
      ],
    },
    {
      company: "ITBoom",
      href: "https://itboom.pl",
      badges: [],
      location: "Warszawa / Zdalnie",
      title: "Software Development Intern",
      logoUrl: "/logos/itboom.png",
      start: "Lip 2023",
      end: "Wrz 2023",
      stack: ["Azure Functions", "Microsoft Dynamics 365", "Angular"],
      description: [
        "Zintegrowałem Microsoft Dynamics 365 CRM z systemami klienta, budując Azure Functions, w rezultacie usprawniając procesy biznesowe bez ręcznej pracy zespołu.",
        "Rozwinąłem interfejs webowy widoków CRM w Angularze, poprawiając UX dla użytkowników końcowych systemu Dynamics 365.",
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
    {
      title: "AI-driven CV tailoring tool",
      href: "",
      dates: "2026",
      description:
        "Narzędzie generujące spersonalizowane CV pod konkretną ofertę pracy w kilka sekund, wykorzystując LLM do analizy opisu stanowiska i dopasowania treści — dokładnie ten mechanizm stoi za tą stroną.",
      technologies: ["LLM", "React", "Claude Code"],
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
