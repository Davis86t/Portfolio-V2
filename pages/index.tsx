import Head from "next/head"
import Link from "next/link"

import { siteConfig } from "@/config/site"
import HiAnimation from "@/components/animations/hi-animation"
import ImAnimation from "@/components/animations/im-animation"
import TannerAnimation from "@/components/animations/tanner-animation"
import { Icons } from "@/components/icons"
import { Layout } from "@/components/layout"
import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { buttonVariants } from "@/components/ui/button"
import Typewriters from "@/components/ui/typewriter"

export default function IndexPage() {
  return (
    <Layout>
      <Head>
        <title>Tanner Davis</title>
        <meta name="description" content="My Personal Website." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="align-middle container grid items-center gap-6 pt-4 pb-6 md:py-10 mt-8">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <Avatar>
            <AvatarImage
              src="https://github.com/davis86t.png"
              alt="Tanner Davis"
            />
          </Avatar>
          <div className="flex max-w-[980px] flex-col items-start">
            <h1 className="flex-col text-5xl font-extrabold leading-tight tracking-tighter sm:text-5xl md:text-7xl lg:text-8xl mb-2">
              <HiAnimation />
              <br />
              <ImAnimation />
              <TannerAnimation />
            </h1>
            <Typewriters />
          </div>
        </div>
      </section>
      <section className="align-middle container grid items-center gap-6 md:py-10 md:mb-0 mb-8">
        <div className="flex gap-4 justify-center md:justify-normal">
          <Link
            href={siteConfig.links.button1}
            target="_blank"
            rel="noreferrer"
            className={buttonVariants({ size: "lg" })}
          >
            <Icons.linkedin className="h-5 w-5 fill-current" />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link
            target="_blank"
            rel="noreferrer"
            href={siteConfig.links.button2}
            className={buttonVariants({ variant: "outline", size: "lg" })}
          >
            <Icons.gitHub className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </Link>
        </div>
      </section>
      <section className="align-middle container grid items-center gap-6">
        <div className="md:hidden flex flex-row justify-around mb-6">
          <h5 className=" text-3xl  leading-tight tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
            ⇣
          </h5>
          <h5></h5>
          <h5 className=" text-3xl  leading-tight tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
            ⇣
          </h5>
        </div>
      </section>
      <div className="container grid gap-6 py-10 md:py-16 md:mt-8 justify-end border-t border-t-slate-200 dark:border-t-slate-700">
        <div className="flex flex-col items-center gap-6">
          <h2 className="text-3xl font-extrabold leading-tight tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
            My Portfolio
          </h2>
          <p className="max-w-[700px] text-lg text-slate-700 dark:text-slate-400 sm:text-xl">
            Here are some of the projects I have worked on. I am always looking
            for new opportunities to learn and grow as a developer. If you have
            any questions or would like to collaborate on a project, please feel
            free to reach out.
          </p>
        </div>
      </div>
    </Layout>
  )
}
