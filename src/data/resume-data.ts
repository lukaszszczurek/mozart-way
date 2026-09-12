import { Github, Linkedin, Youtube, Mail, Home } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface ResumeData {
  name: string;
  initials: string;
  url: string;
  location: string;
  description: string;
  summary: string;
  avatarUrl: string;
  skills: { name: string }[];
  navbar: { href: string; icon: LucideIcon; label: string }[];
  contact: {
    email: string;
    social: Record<string, { name: string; url: string; icon: LucideIcon; navbar: boolean }>;
  };
  work: {
    company: string;
    href: string;
    badges: string[];
    location: string;
    title: string;
    logoUrl: string;
    start: string;
    end?: string;
    description: string;
  }[];
  education: { school: string; href: string; degree: string; logoUrl: string; start: string; end: string }[];
  projects: {
    title: string;
    href: string;
    dates: string;
    description: string;
    technologies: string[];
    links: { icon: React.ReactNode; type: string; href: string }[];
    image: string;
    video: string;
  }[];
  hackathons: {
    title: string;
    dates: string;
    location: string;
    description: string;
    image: string;
    links: { title: string; icon: React.ReactNode; href: string }[];
  }[];
}

export const DATA: ResumeData = {
  name: "Łukasz Szczurek",
  initials: "ŁS",
  url: "https://mozartway.com/resume",
  location: "Polska",
  description:
    "Założyciel Mozart Way. Buduję systemy AI dla biznesu — od CRM-ów po automatyzacje sprzedaży.",
  // TODO: podmień na finalny bio-tekst (fragment na razie wzięty z FounderStory.tsx)
  summary: `Samodzielnie prowadziłem szkołę korepetycji — kilka lokalizacji, setki uczniów,
dziesiątki nauczycieli, i wszystko w mojej głowie. Próbowałem Exceli, tanich CRM-ów,
rozmawiałem z firmami IT — wyceny na setki tysięcy złotych, 6-12 miesięcy wdrożenia,
i ludzie, którzy totalnie nie rozumieli jak działa branża.

Więc zbudowałem system sam. Dziś pomagam innym firmom wdrażać AI tam, gdzie realnie
oszczędza czas i pieniądze — bez zbędnej otoczki.`,
  avatarUrl: "/education/founder-lukasz.jpg",
  skills: [
    { name: "Next.js" },
    { name: "TypeScript" },
    { name: "React" },
    { name: "Node.js" },
    { name: "Prisma" },
    { name: "PostgreSQL" },
    { name: "Gemini / LLM" },
    // TODO: dopisz resztę stacku
  ],
  navbar: [{ href: "/resume#hero", icon: Home, label: "Home" }],
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

  // TODO: uzupełnij realną historią zawodową
  work: [
    {
      company: "Mozart Way",
      href: "https://mozartway.com",
      badges: [],
      location: "Zdalnie",
      title: "Założyciel",
      logoUrl: "",
      start: "2023",
      end: undefined,
      description:
        "TODO: opisz zakres — budowa systemu AI dla placówek edukacyjnych, CRM sprzedażowy, automatyzacje.",
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

  // TODO: podmień na realne projekty (zdjęcia, linki)
  projects: [
    {
      title: "TODO: nazwa projektu",
      href: "#",
      dates: "TODO",
      description: "TODO: krótki opis projektu.",
      technologies: ["Next.js", "TypeScript"],
      links: [],
      image: "",
      video: "",
    },
  ],

  // TODO: opcjonalne — usuń sekcję w Resume.tsx jeśli nie dotyczy
  hackathons: [
    {
      title: "TODO: nazwa wydarzenia",
      dates: "TODO",
      location: "TODO",
      description: "TODO: co zbudowano.",
      image: "",
      links: [],
    },
  ],
};
