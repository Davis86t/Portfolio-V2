import Head from "next/head"

import { Layout } from "@/components/layout"

export default function PortfolioPage() {
  return (
    <Layout>
      <Head>
        <title>Tanner Davis</title>
        <meta name="description" content="My Personal Website." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container grid h-[calc(100vh-64px)] justify-end gap-6 py-10 md:py-16">
        <div className="flex flex-col items-center gap-6">
          <h2 className="text-3xl font-extrabold leading-tight tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
            Contact Me
          </h2>
          <p className="max-w-[700px] text-lg text-slate-700 dark:text-slate-400 sm:text-xl">
            insert contact form here
          </p>
        </div>
      </div>
    </Layout>
  )
}
