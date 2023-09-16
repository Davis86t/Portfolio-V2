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
      className="z-0 h-screen"
      style={{
        height: `calc(100vh - 65px)`,
        // height: `calc(100vh - 65px - env(safe-area-inset-top) - env(safe-area-inset-bottom))`,
      }}
    >
      <section className="container flex h-full flex-col justify-center sm:max-h-[1080px]">
        <div className="flex flex-col items-start gap-6 ">
          <AboutMeAnimation />
          <div className="flex max-h-[55vh] flex-col overflow-scroll rounded-lg bg-slate-100 p-4 dark:bg-slate-800 sm:m-0 sm:justify-center sm:overflow-auto sm:bg-white sm:p-0 sm:dark:bg-slate-900">
            <p className="text-md max-w-[700px] pb-3 text-slate-700 dark:text-slate-400 md:text-xl">
              Hi, I'm Tanner Davis, a Full Stack Developer with a foundation in electronics. My expertise includes creating web apps with Node.js, Express, React.js, Redux, and Next.js, and managing SQL databases like Postgres. I love taking on tech challenges.
            </p>
            <p className="text-md max-w-[700px] pb-3 text-slate-700 dark:text-slate-400 md:text-xl">
              Before transitioning to software, I was an electronics technician, ran a home construction business, and worked as a realtor. This diverse background strengthened my problem-solving and management skills, which I'm excited to apply to software development.
            </p>
            <p className="text-md max-w-[700px] pb-3 text-slate-700 dark:text-slate-400 md:text-xl">
              Off the clock, I'm a car enthusiast and PC gamer. These hobbies not only satisfy my curiosity but also help me unwind. My biggest motivation and inspiration is my family.
            </p>
            <p className="text-md max-w-[700px] text-slate-700 dark:text-slate-400 md:text-xl">
            Feel free to reach out and connect if you're interested in discussing potential opportunities, the world of software engineering, or just to chat. Thanks for stopping by!
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
