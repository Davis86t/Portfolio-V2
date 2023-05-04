import React, { useCallback } from "react"
import useEmblaCarousel, { EmblaOptionsType } from "embla-carousel-react"

type PropType = {
  options?: EmblaOptionsType
}

export const EmblaCarousel = (props) => {
  const { options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options)

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <div className="embla relative overflow-hidden">
      <div className="embla__viewport max-w-[1440px]" ref={emblaRef}>
        <div className="embla__container z-0 gap-[10px] md:gap-[20px] flex flex-row">
          <div className="embla__slide flex-[0_0_65%]  min-w-0">
            <img
              className="hidden md:flex max-h-[70vh] rounded-lg border-2 border-slate-300"
              src="/FP-thumb-landscape.png"
              alt="Family Plan mobile app - group project"
            />
            <img
              className="md:hidden max-h-[65vh] rounded-lg border-2 border-slate-300"
              src="/FP-thumb-portrait.png"
              alt="Family Plan mobile app - group project"
            />
          </div>
          <div className="embla__slide flex-[0_0_65%]  min-w-0">
            <img
              className="hidden md:flex max-h-[70vh] rounded-lg border-2 border-slate-500 dark:border-slate-700"
              src="/MW-challenge-landscape.png"
              alt="Midwestern take-home challenge"
            />
            <img
              className="md:hidden max-h-[65vh] rounded-lg border-2 border-slate-500 dark:border-slate-700"
              src="/MW-thumb-portrait.png"
              alt="Midwestern take-home challenge"
            />
          </div>
          <div className="embla__slide flex-[0_0_65%] min-w-0">
            <img
              className="hidden md:flex max-h-[70vh] rounded-lg border-2 border-slate-200"
              src="/CP-thumb-landscape.png"
              alt="E-commerce site - group project"
            />
            <img
              className="md:hidden max-h-[65vh] rounded-lg border-2 border-slate-200"
              src="/CP-thumb-portrait.png"
              alt="E-commerce site - group project"
            />
          </div>
          <div className="embla__slide flex-[0_0_65%]  min-w-0 mr-[10px] md:mr-[20px]">
            <img
              className="hidden md:flex max-h-[70vh] rounded-lg border-2 border-slate-300 dark:border-slate-700"
              src="/Photo-site-landscape.png"
              alt="Photography site - personal project"
            />
            <img
              className="md:hidden max-h-[65vh] rounded-lg border-2 border-slate-300 dark:border-slate-700"
              src="/Photo-site-portrait.png"
              alt="Photography site - personal project"
            />
          </div>
        </div>
      </div>
      <button
        className="embla__prev z-10 fill-slate-300 absolute flex items-center justify-center top-[45%] cursor-pointer w-[4rem] h-[4rem] sm:left-[1.6rem]"
        onClick={scrollPrev}
      >
        <svg
          className="embla__button__svg w-[65%] h-[65%]"
          viewBox="137.718 -1.001 366.563 644"
        >
          <path d="M428.36 12.5c16.67-16.67 43.76-16.67 60.42 0 16.67 16.67 16.67 43.76 0 60.42L241.7 320c148.25 148.24 230.61 230.6 247.08 247.08 16.67 16.66 16.67 43.75 0 60.42-16.67 16.66-43.76 16.67-60.42 0-27.72-27.71-249.45-249.37-277.16-277.08a42.308 42.308 0 0 1-12.48-30.34c0-11.1 4.1-22.05 12.48-30.42C206.63 234.23 400.64 40.21 428.36 12.5z" />
        </svg>
      </button>
      <button
        className="embla__next z-10 fill-slate-300 absolute flex items-center justify-center top-[45%]  cursor-pointer w-[4rem] h-[4rem] right-[0px] sm:right-[1.6rem]"
        onClick={scrollNext}
      >
        <svg
          className="embla__button__svg w-[65%] h-[65%]"
          viewBox="0 0 238.003 238.003"
        >
          <path d="M181.776 107.719L78.705 4.648c-6.198-6.198-16.273-6.198-22.47 0s-6.198 16.273 0 22.47l91.883 91.883-91.883 91.883c-6.198 6.198-6.198 16.273 0 22.47s16.273 6.198 22.47 0l103.071-103.039a15.741 15.741 0 0 0 4.64-11.283c0-4.13-1.526-8.199-4.64-11.313z" />
        </svg>
      </button>
    </div>
  )
}
