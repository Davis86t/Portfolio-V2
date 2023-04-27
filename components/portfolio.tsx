import PortfolioAnimation from "./animations/portfolio-animation"
import { EmblaCarousel } from "./carousel"

export default function Portfolio() {
  return (
    <div
      id="portfolio"
      className=" z-0 h-[calc(100vh-64px)] w-[100%] flex flex-col justify-center items-center"
    >
      <section className="container flex flex-col gap-[9vh]">
        <div className="flex max-w-[980px] flex-col items-start">
          <PortfolioAnimation />
          <p className="max-w-[700px] text-md text-slate-700 dark:text-slate-400 md:text-xl">
            A small sample of my recent projects.
          </p>
        </div>
        <EmblaCarousel />
      </section>
    </div>
  )
}
