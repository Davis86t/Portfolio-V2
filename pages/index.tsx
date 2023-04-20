import Head from "next/head"
import Link from "next/link"

import { siteConfig } from "@/config/site"
import AvatarAnimation from "@/components/animations/avatar-animation"
import HiAnimation from "@/components/animations/hi-animation"
import ImAnimation from "@/components/animations/im-animation"
import TannerAnimation from "@/components/animations/tanner-animation"
import { Icons } from "@/components/icons"
import { Layout } from "@/components/layout"
import Portfolio from "@/components/portfolio"
import { buttonVariants } from "@/components/ui/button"
import Typewriters from "@/components/animations/typewriter"

export default function IndexPage() {
  return (
    <Layout>
      <Head>
        <title>Tanner Davis</title>
        <meta name="description" content="My Personal Website." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="grid items-start h-screen pt-[10vh] md:pt-[20vh]">
        <section className="align-middle container grid items-center md:pb-10">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <AvatarAnimation />
            <div className="flex max-w-[980px] flex-col items-start pb-1 md:mb-0 mb-6">
              <h1 className="flex-col text-5xl font-extrabold leading-tight tracking-tighter sm:text-5xl md:text-7xl lg:text-8xl mb-2">
                <HiAnimation />
                <br />
                <ImAnimation />
                <TannerAnimation />
              </h1>
              <Typewriters />
            </div>
          </div>
          <div className="flex md:justify-start justify-center">
            <div className="flex flex-row justify-between w-48">
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
          </div>
        </section>
        <div className="fixed bottom-0">
          <div className="flex flex-row justify-around mb-6 w-screen">
            <h5 className=" text-3xl  leading-tight tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              ⇣
            </h5>
            <h5></h5>
            <h5 className=" text-3xl  leading-tight tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              ⇣
            </h5>
          </div>
        </div>
      </section>
      <div id='portfolio'>
      <Portfolio/>
      </div>
    </Layout>
  )
}
