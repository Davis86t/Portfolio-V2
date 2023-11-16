import Link from "next/link"

import { siteConfig } from "@/config/site"
import AboutMeAnimation from "@/components/animations/about-animation"
import { Icons } from "@/components/icons"
import { buttonVariants } from "@/components/ui/button"

export default function AboutMe() {
  return (
    <div
      id="aboutMe"
      className="z-0 flex h-[calc(100dvh-65px)] max-h-[900px] min-h-[750px] flex-col justify-center border-b border-b-slate-200 py-16 dark:border-b-slate-700 sm:min-h-[680px]"
    >
      <section className="container flex h-full flex-col justify-center">
        <div className="flex flex-col items-start gap-6 ">
          <AboutMeAnimation />
          <div className="flex min-h-[400px] flex-col overflow-scroll rounded-lg bg-slate-100 p-4 dark:bg-slate-800 sm:m-0 sm:justify-center sm:overflow-auto sm:bg-white sm:p-0 sm:dark:bg-slate-900">
            <p className="text-md max-w-[700px] pb-3 text-slate-700 dark:text-slate-400 md:text-xl">
              As a developer who transitioned from electronics and real estate
              to software, I bring a unique perspective to web app development.
              My technical stack includes Node.js, Express, React.js, Redux, and
              Next.js, with proficiency in SQL databases like Postgres.
            </p>
            <p className="text-md max-w-[700px] pb-3 text-slate-700 dark:text-slate-400 md:text-xl">
              My past experiences have sharpened my problem-solving abilities,
              and I apply this methodical approach to developing efficient,
              robust software solutions.
            </p>
            <p className="text-md max-w-[700px] pb-3 text-slate-700 dark:text-slate-400 md:text-xl">
              In my downtime, I pursue interests in cars and PC gaming, which
              help maintain my detail-oriented nature.
            </p>
            <p className="text-md max-w-[700px] text-slate-700 dark:text-slate-400 md:text-xl">
              Interested in a developer who values substance and simplicity?
              Let&apos;s connect.
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
