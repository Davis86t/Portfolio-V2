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
      className="z-0 grid h-[calc(100vh-64px)] pt-5 md:pt-20 w-[100%]"
    >
      <section className="container grid">
        <div className="flex flex-col items-start gap-6">
          <div className="flex max-w-[980px] flex-col items-start pb-1 md:mb-0 mb-6">
            <AboutMeAnimation />
            <br></br>
            <ScrollArea className="max-h-[calc(100vh-220px)]">
            <p className="max-w-[700px] text-md text-slate-700 dark:text-slate-400 md:text-xl">
              Hi, I'm Tanner Davis, a Full Stack Software Engineer with 5+ years
              of experience in people relations. I specialize in creating
              innovative solutions using the PERN stack, and I'm always eager to
              learn new technologies.
            </p>
            <p className="max-w-[700px] text-md text-slate-700 dark:text-slate-400 md:text-xl pt-2">
              My skills include Node, JavaScript, React, Redux, Git, Express,
              PostgreSQL, Sequelize, HTML, and CSS. I'm also knowledgeable in
              React Native, Postico, Insomnia, Tailwind CSS, Next.js, Axios, and
              Figma. I've built a React Native mobile app for families to stay
              organized, developed a portfolio website, and worked on an
              e-commerce site using PostgreSQL, Express, React, and Node.js.
              </p>
              <p className="max-w-[700px] text-md text-slate-700 dark:text-slate-400 md:text-xl pt-2">
              Before my software engineering career, I owned TC Davis Homes and
              worked in real estate and electronics contracting. I hold a
              Software Engineering Certificate from Fullstack Academy and
              completed their full-time, Full Stack Javascript Web Development
              Immersive program.
              </p>
              <p className="max-w-[700px] text-md text-slate-700 dark:text-slate-400 md:text-xl pt-2">
                Let's connect on LinkedIn!
            </p>
            <br></br>
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
        </div>
      </section>
    </div>
  )
}
