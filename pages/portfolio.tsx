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
      <div className="h-[calc(100vh-64px)] container grid gap-6 py-10 md:py-16 justify-end">
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
