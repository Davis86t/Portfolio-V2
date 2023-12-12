import { SpeedInsights } from "@vercel/speed-insights/next"

import { SiteHeader } from "@/components/site-header"

interface LayoutProps {
  children: React.ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <SiteHeader />
      <main>
        {children}
        <SpeedInsights />
      </main>
    </>
  )
}
