import { EmblaOptionsType } from "embla-carousel-react"

import PortfolioAnimation from "./animations/portfolio-animation"
import { EmblaCarousel } from "./carousel"

type PortfolioProps = {
  onSelectLink: (url: string) => void
}

const OPTIONS: EmblaOptionsType = { loop: true }

const Portfolio: React.FC<PortfolioProps> = ({ onSelectLink }) => {
  return (
    <div
      id="portfolio"
      className="z-0 flex h-[calc(100dvh-65px)] max-h-[1080px] flex-col justify-center border-b border-b-slate-200 py-16 dark:border-b-slate-700 sm:min-h-[680px]"
    >
      <div className="flex flex-col justify-center gap-6">
        <section className="container flex flex-col">
          <div className="flex max-w-[980px] flex-col items-start sm:gap-2">
            <PortfolioAnimation />
            <p className="text-md max-w-[700px] text-slate-700 dark:text-slate-400 md:text-xl">
              A small sample of my recent projects.
            </p>
          </div>
        </section>
        <EmblaCarousel options={OPTIONS} onSelectLink={onSelectLink} />
      </div>
    </div>
  )
}

export default Portfolio
