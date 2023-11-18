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
          <div className="flex min-h-[400px] flex-col overflow-auto rounded-lg bg-white p-4 dark:bg-slate-900 sm:m-0 sm:justify-center sm:p-0">
            <ul className="max-w-[700px] list-disc space-y-2 pb-6 pl-5 text-slate-700 dark:text-slate-400 md:text-xl">
              <li>
                Transitioned from electronics and real estate to crafting web
                apps.
              </li>
              <li>
                Proficient in Node.js, Express, React.js, Redux, Next.js, and
                SQL databases.
              </li>
              <li>
                Methodical problem-solver focused on efficient and robust
                solutions.
              </li>
              <li>
                Car enthusiast and PC gamer, sharpening my attention to detail.
              </li>
            </ul>

            <p className="text-md max-w-[700px] text-slate-700 dark:text-slate-400 md:text-xl">
              Ready to bring my diverse expertise to your tech challenges? Let&apos;s
              connect:
            </p>
          </div>
          <div className="flex w-full justify-center sm:justify-start">
            <Link
              href={siteConfig.links.button1}
              target="_blank"
              rel="noreferrer"
              className={`${buttonVariants({
                size: "custom",
              })} inline-flex items-center`}
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
