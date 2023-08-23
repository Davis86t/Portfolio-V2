import React, { useEffect, useState } from "react"
import Head from "next/head"

import AboutMe from "@/components/about"
import Contact from "@/components/contact"
import Intro from "@/components/intro"
import { Layout } from "@/components/layout"
import Portfolio from "@/components/portfolio"

export default function IndexPage() {
  const [showIframe, setShowIframe] = useState(false)
  const [selectedLink, setSelectedLink] = useState<string | null>(null)

  useEffect(() => {
    if (showIframe) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [showIframe])

  const handleSelectLink = (url: string) => {
    setSelectedLink(url)
    setShowIframe(true)
  }

  const handleCloseIframe = (event) => {
    event.preventDefault()
    setShowIframe(false)
  }

  return (
    <>
      <Head>
        <title>Tanner Davis</title>
        <meta name="description" content="My Personal Website." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className="flex h-full flex-col">
          <Intro />
          <Portfolio onSelectLink={handleSelectLink} />
          <AboutMe />
          <Contact />
        </div>
      </Layout>
      {showIframe && selectedLink && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 1000,
          }}
        >
          <div className="relative left-0 right-0 top-0 flex justify-between bg-slate-900 px-6">
            <p className="text-slate-300">You are previewing the demo site.</p>
            <button onClick={handleCloseIframe} className="text-slate-300">
              Close
            </button>
          </div>
          <iframe
            src={selectedLink}
            className="transform- block h-full max-h-full w-full max-w-full overflow-hidden border-0"
            sandbox="allow-same-origin allow-scripts"
          ></iframe>
        </div>
      )}
    </>
  )
}
