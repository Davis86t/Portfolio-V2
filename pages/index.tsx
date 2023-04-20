import Head from "next/head"

import AvatarAnimation from "@/components/animations/avatar-animation"
import ButtonAnimation from "@/components/animations/buttons-animation"
import DownArrowAnimation from "@/components/animations/down-arrows-animation"
import HiAnimation from "@/components/animations/hi-animation"
import ImAnimation from "@/components/animations/im-animation"
import TannerAnimation from "@/components/animations/tanner-animation"
import Typewriters from "@/components/animations/typewriter"
import { Layout } from "@/components/layout"
import Portfolio from "@/components/portfolio"

export default function IndexPage() {
  return (
    <Layout>
      <Head>
        <title>Tanner Davis</title>
        <meta name="description" content="My Personal Website." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="z-0 grid h-[calc(100vh-64px)] w-[100%]">
        <div className="grid h-[calc(100vh-128px)] items-center">
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
            <ButtonAnimation />
          </section>
        </div>
        <DownArrowAnimation />
      </section>
      <div id="portfolio">
        <Portfolio />
      </div>
    </Layout>
  )
}
