import { EmblaOptionsType } from "embla-carousel-react"

import PortfolioAnimation from "./animations/portfolio-animation"
import { EmblaCarousel } from "./carousel"

const OPTIONS: EmblaOptionsType = { loop: true }

export default function Portfolio() {
  return (
    <div
      id="portfolio"
      className="z-0 h-[calc(100vh-65px)] w-[100%] flex flex-col justify-center items-center gap-6"
    >
      <section className="container flex flex-col gap-16">
        <div className="flex max-w-[980px] flex-col items-start">
          <PortfolioAnimation />
          <p className="max-w-[700px] text-md text-slate-700 dark:text-slate-400 md:text-xl">
            A small sample of my recent projects.
          </p>
        </div>
      </section>
      <EmblaCarousel options={OPTIONS} />
    </div>
  )
}
