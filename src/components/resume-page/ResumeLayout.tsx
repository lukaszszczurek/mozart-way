import { ArrowUpRight } from "lucide-react";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { TooltipProvider } from "@/components/ui/tooltip";
import type { ResumeData } from "@/data/resume-data";
import Navbar from "./Navbar";
import WorkSection from "./WorkSection";
import ProjectsSection from "./ProjectsSection";
import HackathonsSection from "./HackathonsSection";
import ContactSection from "./ContactSection";

const BLUR_FADE_DELAY = 0.04;

interface ResumeLayoutProps {
  data: ResumeData;
  greeting?: string;
  otherVersions?: { href: string; label: string }[];
  hackathonsTitle?: string;
  hackathonsHeading?: string;
  hackathonsDescription?: string;
}

export default function ResumeLayout({
  data,
  greeting = "Cześć, tu",
  otherVersions,
  hackathonsTitle,
  hackathonsHeading,
  hackathonsDescription,
}: ResumeLayoutProps) {
  return (
    <TooltipProvider delayDuration={0}>
      <div className="min-h-screen bg-background font-sans antialiased relative">
        <div className="absolute inset-0 top-0 left-0 right-0 h-[100px] overflow-hidden z-0">
          <FlickeringGrid
            className="h-full w-full"
            squareSize={2}
            gridGap={2}
            style={{
              maskImage: "linear-gradient(to bottom, black, transparent)",
              WebkitMaskImage: "linear-gradient(to bottom, black, transparent)",
            }}
          />
        </div>

        <div className="relative z-10 max-w-2xl mx-auto py-12 pb-24 sm:py-24 px-6">
          <main className="min-h-dvh flex flex-col gap-14 relative">
            <section id="hero">
              <div className="mx-auto w-full max-w-2xl space-y-8">
                <div className="gap-2 gap-y-6 flex flex-col md:flex-row justify-between">
                  <div className="gap-2 flex flex-col order-2 md:order-1">
                    <BlurFadeText
                      delay={BLUR_FADE_DELAY}
                      className="text-3xl font-semibold tracking-tighter sm:text-4xl lg:text-5xl"
                      yOffset={8}
                      text={`${greeting} ${data.name.split(" ")[0]}`}
                    />
                    <BlurFadeText
                      className="text-muted-foreground max-w-[600px] md:text-lg lg:text-xl"
                      delay={BLUR_FADE_DELAY}
                      text={data.description}
                    />
                    {otherVersions && otherVersions.length > 0 && (
                      <BlurFade delay={BLUR_FADE_DELAY * 2}>
                        <p className="text-xs text-muted-foreground/70">
                          Inne wersje:{" "}
                          {otherVersions.map((v, i) => (
                            <span key={v.href}>
                              <a href={v.href} className="underline underline-offset-2 hover:text-foreground">
                                {v.label}
                              </a>
                              {i < otherVersions.length - 1 ? " · " : ""}
                            </span>
                          ))}
                        </p>
                      </BlurFade>
                    )}
                  </div>
                  <BlurFade delay={BLUR_FADE_DELAY} className="order-1 md:order-2">
                    <Avatar className="size-24 md:size-32 border rounded-full shadow-lg ring-4 ring-muted">
                      <AvatarImage alt={data.name} src={data.avatarUrl} />
                      <AvatarFallback>{data.initials}</AvatarFallback>
                    </Avatar>
                  </BlurFade>
                </div>
              </div>
            </section>

            <section id="about">
              <div className="flex min-h-0 flex-col gap-y-4">
                <BlurFade delay={BLUR_FADE_DELAY * 3}>
                  <h2 className="text-xl font-bold">O mnie</h2>
                </BlurFade>
                <BlurFade delay={BLUR_FADE_DELAY * 4}>
                  <div className="max-w-full text-pretty font-sans leading-relaxed text-muted-foreground whitespace-pre-line">
                    {data.summary}
                  </div>
                </BlurFade>
              </div>
            </section>

            <section id="work">
              <div className="flex min-h-0 flex-col gap-y-6">
                <BlurFade delay={BLUR_FADE_DELAY * 5}>
                  <h2 className="text-xl font-bold">Doświadczenie zawodowe</h2>
                </BlurFade>
                <BlurFade delay={BLUR_FADE_DELAY * 6}>
                  <WorkSection work={data.work} />
                </BlurFade>
              </div>
            </section>

            <section id="education">
              <div className="flex min-h-0 flex-col gap-y-6">
                <BlurFade delay={BLUR_FADE_DELAY * 7}>
                  <h2 className="text-xl font-bold">Edukacja</h2>
                </BlurFade>
                <div className="flex flex-col gap-8">
                  {data.education.map((education, index) => (
                    <BlurFade key={education.school} delay={BLUR_FADE_DELAY * 8 + index * 0.05}>
                      <a
                        href={education.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-x-3 justify-between group"
                      >
                        <div className="flex items-center gap-x-3 flex-1 min-w-0">
                          {education.logoUrl ? (
                            <img
                              src={education.logoUrl}
                              alt={education.school}
                              className="size-8 md:size-10 p-1 border rounded-full shadow ring-2 ring-border overflow-hidden object-contain flex-none"
                            />
                          ) : (
                            <div className="size-8 md:size-10 p-1 border rounded-full shadow ring-2 ring-border bg-muted flex-none" />
                          )}
                          <div className="flex-1 min-w-0 flex flex-col gap-0.5">
                            <div className="font-semibold leading-none flex items-center gap-2">
                              {education.school}
                              <ArrowUpRight
                                className="h-3.5 w-3.5 text-muted-foreground opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200"
                                aria-hidden
                              />
                            </div>
                            <div className="font-sans text-sm text-muted-foreground">{education.degree}</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-1 text-xs tabular-nums text-muted-foreground text-right flex-none">
                          <span>
                            {education.start} - {education.end}
                          </span>
                        </div>
                      </a>
                    </BlurFade>
                  ))}
                </div>
              </div>
            </section>

            <section id="skills">
              <div className="flex min-h-0 flex-col gap-y-4">
                <BlurFade delay={BLUR_FADE_DELAY * 9}>
                  <h2 className="text-xl font-bold">Umiejętności</h2>
                </BlurFade>
                <div className="flex flex-wrap gap-2">
                  {data.skills.map((skill, id) => (
                    <BlurFade key={skill.name} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                      <div className="border bg-background border-border ring-2 ring-border/20 rounded-xl h-8 w-fit px-4 flex items-center gap-2">
                        <span className="text-foreground text-sm font-medium">{skill.name}</span>
                      </div>
                    </BlurFade>
                  ))}
                </div>
              </div>
            </section>

            <BlurFade delay={BLUR_FADE_DELAY * 11}>
              <ProjectsSection projects={data.projects} />
            </BlurFade>

            <BlurFade delay={BLUR_FADE_DELAY * 13}>
              <HackathonsSection
                hackathons={data.hackathons}
                title={hackathonsTitle}
                heading={hackathonsHeading}
                description={hackathonsDescription}
              />
            </BlurFade>

            <section id="contact">
              <BlurFade delay={BLUR_FADE_DELAY * 16}>
                <ContactSection email={data.contact.email} />
              </BlurFade>
            </section>
          </main>
        </div>

        <Navbar navbar={data.navbar} social={data.contact.social} />
      </div>
    </TooltipProvider>
  );
}
