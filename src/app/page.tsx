/* eslint-disable @next/next/no-img-element */
import BlurFade from "@/components/effects/blur-fade";
import { DATA } from "@/data/resume";
import Link from "next/link";
import Markdown from "react-markdown";
import ContactSection from "@/components/section/contact-section";
import ProjectsSection from "@/components/section/projects-section";
import WorkSection from "@/components/section/work-section";
import { ArrowUpRight, Code2, MapPin } from "lucide-react";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
    <main className="min-h-dvh flex flex-col gap-14 relative">
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="gap-2 gap-y-6 flex flex-col md:flex-row justify-between">
            <div className="gap-2 flex flex-col order-2 md:order-1">
              <BlurFade delay={BLUR_FADE_DELAY} yOffset={8}>
                <h1 className="text-3xl font-semibold tracking-tighter sm:text-4xl lg:text-5xl">
                  Hi, I&apos;m {DATA.name.split(" ")[0]}
                </h1>
              </BlurFade>
              <BlurFade delay={BLUR_FADE_DELAY * 2}>
                <p className="text-muted-foreground max-w-[600px] md:text-lg lg:text-xl">
                  {DATA.description}
                </p>
              </BlurFade>
              <BlurFade delay={BLUR_FADE_DELAY * 3}>
                <Link
                  href={DATA.locationLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-fit items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <MapPin className="size-4" aria-hidden="true" />
                  {DATA.location}
                  <span className="sr-only"> (opens in a new tab)</span>
                </Link>
              </BlurFade>
            </div>
            <BlurFade delay={BLUR_FADE_DELAY} className="order-1 md:order-2">
              <div
                role="img"
                aria-label={`${DATA.name} developer mark`}
                className="grid size-24 place-items-center rounded-3xl border border-border bg-linear-to-br from-muted via-background to-muted text-foreground shadow-lg ring-4 ring-muted md:size-32"
              >
                <Code2 className="size-10 md:size-14" strokeWidth={1.5} />
              </div>
            </BlurFade>
          </div>
        </div>
      </section>
      <section id="about">
        <div className="flex min-h-0 flex-col gap-y-4">
          <BlurFade delay={BLUR_FADE_DELAY * 3}>
            <h2 className="text-xl font-bold">About</h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 4}>
            <div className="prose max-w-full text-pretty font-sans leading-relaxed text-muted-foreground dark:prose-invert">
              <Markdown>
                {DATA.summary}
              </Markdown>
            </div>
          </BlurFade>
        </div>
      </section>
      <section id="work">
        <div className="flex min-h-0 flex-col gap-y-6">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-xl font-bold">Work Experience</h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 6}>
            <WorkSection />
          </BlurFade>
        </div>
      </section>
      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-6">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-xl font-bold">Education</h2>
          </BlurFade>
          <div className="flex flex-col gap-8">
            {DATA.education.map((education, index) => {
              const content = (
                <>
                  <div className="flex items-center gap-x-3 flex-1 min-w-0">
                    {education.logoUrl ? (
                      <img
                        src={education.logoUrl}
                        alt={education.school}
                        className="size-8 md:size-10 p-1 border rounded-full shadow ring-2 ring-border overflow-hidden object-contain flex-none"
                      />
                    ) : (
                      <div
                        aria-hidden="true"
                        className="size-8 md:size-10 border rounded-full shadow ring-2 ring-border bg-muted flex-none grid place-items-center text-[10px] font-semibold text-muted-foreground"
                      >
                        {education.school
                          .split(" ")
                          .map((word) => word[0])
                          .join("")
                          .slice(0, 3)}
                      </div>
                    )}
                    <div className="flex-1 min-w-0 flex flex-col gap-0.5">
                      <div className="font-semibold leading-none flex items-center gap-2">
                        {education.school}
                        {education.href && (
                          <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" aria-hidden />
                        )}
                      </div>
                      <div className="font-sans text-sm text-muted-foreground">
                        {education.degree}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-xs tabular-nums text-muted-foreground text-right flex-none">
                    <span>
                      {education.start} - {education.end}
                    </span>
                  </div>
                </>
              );

              return (
                <BlurFade
                  key={education.school}
                  delay={BLUR_FADE_DELAY * 8 + index * 0.05}
                >
                  {education.href ? (
                    <Link
                      href={education.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-x-3 justify-between group"
                    >
                      {content}
                    </Link>
                  ) : (
                    <div className="flex items-center gap-x-3 justify-between">
                      {content}
                    </div>
                  )}
                </BlurFade>
              );
            })}
          </div>
        </div>
      </section>
      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-4">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-xl font-bold">Skills</h2>
          </BlurFade>
          <div className="flex flex-wrap gap-2">
            {DATA.skills.map((skill, id) => (
              <BlurFade key={skill.name} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                <div className="border bg-background border-border ring-2 ring-border/20 rounded-xl h-8 w-fit px-4 flex items-center gap-2">
                  {skill.icon && <skill.icon className="size-4 rounded overflow-hidden object-contain" />}
                  <span className="text-foreground text-sm font-medium">{skill.name}</span>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="profile-details">
        <div className="grid gap-10 sm:grid-cols-2">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="flex flex-col gap-4">
              <h2 className="text-xl font-bold">Languages</h2>
              <dl className="grid gap-3">
                {DATA.languages.map((language) => (
                  <div
                    key={language.name}
                    className="flex items-center justify-between gap-4 border-b border-border/70 pb-3 last:border-0 last:pb-0"
                  >
                    <dt className="font-medium">{language.name}</dt>
                    <dd className="text-sm text-muted-foreground">
                      {language.level}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 12}>
            <div className="flex flex-col gap-4">
              <h2 className="text-xl font-bold">Engineering strengths</h2>
              <ul className="grid gap-2 text-sm text-muted-foreground">
                {DATA.strengths.map((strength) => (
                  <li key={strength} className="flex gap-2">
                    <span aria-hidden="true" className="text-foreground">
                      •
                    </span>
                    <span>{strength}</span>
                  </li>
                ))}
              </ul>
            </div>
          </BlurFade>
        </div>
      </section>
      <BlurFade delay={BLUR_FADE_DELAY * 13}>
        <ProjectsSection />
      </BlurFade>
      <section id="contact">
        <BlurFade delay={BLUR_FADE_DELAY * 14}>
          <ContactSection />
        </BlurFade>
      </section>
    </main>
  );
}
