import Head from "next/head"

import AboutMe from "@/components/about"
import Contact from "@/components/contact"
import Intro from "@/components/intro"
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
      <div className="flex h-full flex-col">
        <Intro />
        <Portfolio />
        <AboutMe />
        <Contact />
      </div>
    </Layout>
  )
}
