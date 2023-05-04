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
      className="z-0 h-[calc(100vh-65px)] w-[100%] flex flex-col justify-center items-center"
    >
      <section className="container">
        <div className="flex flex-col items-start gap-5 pb-1 md:mb-0 mb-6">
          <AboutMeAnimation />
          <ScrollArea className="max-h-[calc(100vh-220px)]">
            <div className="max-w-[700px] flex flex-col gap-3 text-md text-slate-700 dark:text-slate-400 md:text-xl">
              <p>
                Hi, I'm Tanner Davis, a Full Stack Software Engineer with 5+
                years of experience in people relations. I specialize in
                creating innovative solutions using the PERN stack, and I'm
                always eager to learn new technologies.
              </p>
              <p>
                My skills include Node, JavaScript, TypeScript, React, Next.js,
                Redux, Git, Express, PostgreSQL, Sequelize, HTML, CSS, and
                Tailwind CSS. I'm also knowledgeable in React Native, Postico,
                Insomnia, Axios, and Figma.
              </p>
              <p>
                Before my software engineering career, I owned TC Davis Homes
                and worked in real estate and electronics contracting.
              </p>
              <p>
                I hold a Software Engineering Certificate from{" "}
                <a
                  href="https://www.fullstackacademy.com/"
                  target="_blank"
                  className="underline"
                >
                  Fullstack Academy
                </a>{" "}
                and completed their full-time, Full Stack Javascript Web
                Development Immersive program.
              </p>
              <p>Let's connect on LinkedIn!</p>
            </div>
          </ScrollArea>
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
