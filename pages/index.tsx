import Head from "next/head"
import Link from "next/link"

import { siteConfig } from "@/config/site"
import { Layout } from "@/components/layout"
import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { buttonVariants } from "@/components/ui/button"
import Typewriters from "@/components/ui/typewriter"

export default function IndexPage() {
  return (
    <Layout>
      <Head>
        <title>Tanner Davis</title>
        <meta
          name="description"
          content="Next.js template for building apps with Radix UI and Tailwind CSS"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="align-middle container grid items-center gap-6 pt-6 pb-8 md:py-10">
        <div className="flex flex-col md:flex-row items-center gap-6">
        <Avatar>
            <AvatarImage
              src="https://github.com/davis86t.png"
              alt="Tanner Davis"
            />
          </Avatar>
          <div className="flex max-w-[980px] flex-col items-start gap-2">
            <h1 className="text-5xl font-extrabold leading-tight tracking-tighter sm:text-5xl md:text-7xl lg:text-8xl mb-2">
              Hi, <br />
              I'm Tanner.
            </h1>
            <Typewriters />
            {/* <p className="max-w-[700px] text-lg text-slate-700 dark:text-slate-400 sm:text-xl">
            Thank you for taking the time to check out my personal website. I am a full-stack developer with a passion for building web applications. I am currently looking for a full-time position as a software engineer. If you are interested in learning more about me, please feel free to reach out.
          </p> */}
          </div>

        </div>

        <div className="flex gap-4">
          {/* <Link
            href={siteConfig.links.docs}
            target="_blank"
            rel="noreferrer"
            className={buttonVariants({ size: "lg" })}
          >
            Contact Me!
          </Link> */}
          {/* <Link
            target="_blank"
            rel="noreferrer"
            href={siteConfig.links.github}
            className={buttonVariants({ variant: "outline", size: "lg" })}
          >
            GitHub
          </Link> */}
        </div>
      </section>
      <section className="align-middle container grid items-center gap-6 pt-6 pb-8 md:py-10">
      <div className="flex gap-4">
      <Link
            href={siteConfig.links.docs}
            target="_blank"
            rel="noreferrer"
            className={buttonVariants({ size: "lg" })}
          >
            Send me a message!
          </Link>
                    <Link
            target="_blank"
            rel="noreferrer"
            href={siteConfig.links.linkedin}
            className={buttonVariants({ variant: "outline", size: "lg" })}
          >
            Connect on LinkedIn
          </Link>
          </div>
      </section>
    </Layout>
  )
}
