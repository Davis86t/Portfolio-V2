import Link from "next/link"

import { siteConfig } from "@/config/site"
import AboutMeAnimation from "@/components/animations/about-animation"
import { Icons } from "@/components/icons"
import { buttonVariants } from "@/components/ui/button"
import { ScrollArea } from "./ui/scroll-area"

export default function AboutMe() {
  return (
    <div
      id="aboutMe"
      className="z-0 mt-6 flex flex-col items-center justify-center"
      style={{
        height: `calc(100vh - 65px - env(safe-area-inset-top) - env(safe-area-inset-bottom))`,
      }}
    >
      <section className="container">
        <div className="flex flex-col items-start">
          <AboutMeAnimation />
          <div className="mb-4 mt-1 flex h-[55vh] flex-col overflow-scroll rounded-lg bg-slate-100 p-4 dark:bg-slate-800 sm:m-0 sm:justify-center sm:bg-white sm:p-0 sm:dark:bg-slate-900">
            <p className="text-md max-w-[700px] pb-3 text-slate-700 dark:text-slate-400 md:text-xl">
              Hi, I&apos;m Tanner Davis, a Full Stack Software Engineer with 5+
              years of experience in people relations. I specialize in creating
              innovative solutions using the PERN stack, and I&apos;m always
              eager to learn new technologies.
            </p>
            <p className="text-md max-w-[700px] pb-3 text-slate-700 dark:text-slate-400 md:text-xl">
              My skills include Node, JavaScript, TypeScript, React, Next.js,
              Redux, Git, Express, PostgreSQL, Sequelize, HTML, CSS, and
              Tailwind CSS. I&apos;m also knowledgeable in React Native,
              Postico, Insomnia, Axios, and Figma.
            </p>
            <p className="text-md max-w-[700px] pb-3 text-slate-700 dark:text-slate-400 md:text-xl">
              Before my software engineering career, I owned TC Davis Homes and
              worked in real estate and electronics contracting.
            </p>
            <p className="text-md max-w-[700px] pb-3 text-slate-700 dark:text-slate-400 md:text-xl">
              I hold a Software Engineering Certificate from{" "}
              <a
                href="https://www.fullstackacademy.com/"
                target="_blank"
                rel="noreferrer"
                className="underline"
              >
                Fullstack Academy
              </a>{" "}
              and completed their full-time, Full Stack Javascript Web
              Development Immersive program.
            </p>
            <p className="text-md max-w-[700px] text-slate-700 dark:text-slate-400 md:text-xl">
              Let&apos;s connect on LinkedIn!
            </p>
          </div>
          <Link
            href={siteConfig.links.button1}
            target="_blank"
            rel="noreferrer"
            className={buttonVariants({ size: "custom" })}
          >
            <Icons.linkedin className="h-5 w-5 fill-current" />
            <span className="sr-only">LinkedIn</span>
          </Link>
        </div>
      </section>
    </div>
  )
}
