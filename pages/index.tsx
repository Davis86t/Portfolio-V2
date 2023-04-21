import Head from "next/head"

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
      <Intro />
      <Portfolio />
    </Layout>
  )
}
