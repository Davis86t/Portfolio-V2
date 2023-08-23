import { EmblaOptionsType } from "embla-carousel-react"
import PortfolioAnimation from "./animations/portfolio-animation"
import { EmblaCarousel } from "./carousel"

type PortfolioProps = {
  onSelectLink: (url: string) => void;
};

const OPTIONS: EmblaOptionsType = { loop: true }

const Portfolio: React.FC<PortfolioProps> = ({ onSelectLink }) => {
  return (
    <div
      id="portfolio"
      className="z-0 h-screen"
      style={{
        height: `calc(100vh - 65px)`,
        // height: `calc(100vh - 65px - env(safe-area-inset-top) - env(safe-area-inset-bottom))`,
      }}
    >
      <div className="flex h-full flex-col justify-center gap-6 sm:max-h-[1080px]">
        <section className="container flex flex-col gap-16">
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

export default Portfolio;

