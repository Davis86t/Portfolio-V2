import React, { useEffect } from "react"
import Autoplay, {
  AutoplayOptionsType,
  AutoplayType,
} from "embla-carousel-autoplay"
import useEmblaCarousel from "embla-carousel-react"

export const EmblaCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })

  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes())
    }
  }, [emblaApi])

  return (
    <div
      className="embla overflow-hidden m-[auto] max-h-[60vh] max-w-[1440px]"
      ref={emblaRef}
    >
      <div className="embla__container gap-[10px] md:gap-[20px]  flex flex-row">
        <div className="embla__slide flex-[0_0_85%] md:flex-[0_0_50%] min-w-0">
          <img
            className="max-h-[60vh] rounded-lg border-2 border-slate-300"
            src="/FP-thumb-2.png"
            alt="1"
          />
        </div>
        <div className="embla__slide flex-[0_0_85%] md:flex-[0_0_50%] min-w-0">
          <img
            className="max-h-[60vh] rounded-lg border-2 border-slate-300"
            src="/FP-thumb-2.png"
            alt="2"
          />
        </div>
        <div className="embla__slide flex-[0_0_85%] md:flex-[0_0_50%] min-w-0">
          <img
            className="max-h-[60vh] rounded-lg border-2 border-slate-300"
            src="/FP-thumb-2.png"
            alt="3"
          />
        </div>
        <div className="embla__slide flex-[0_0_85%] md:flex-[0_0_50%] min-w-0 mr-[10px] md:mr-[20px]">
          <img
            className="max-h-[60vh] rounded-lg border-2 border-slate-300"
            src="/FP-thumb-2.png"
            alt="3"
          />
        </div>
      </div>
    </div>
  )
}

// import React, { ReactNode } from 'react'
// import useEmblaCarousel, { EmblaOptionsType } from 'embla-carousel-react'

// type PropType = {
//   options?: EmblaOptionsType
//   slides: ReactNode[]
// }

// export const EmblaCarousel = (props: PropType) => {
//   const { options, slides } = props
//   const [emblaRef] = useEmblaCarousel(options)

//   return (
//     <div className="embla" ref={emblaRef}>
//       <div className="embla__container flex">
//         {slides.map((slide, index) => (
//           <div className="embla__slide flex:[0_0_auto] max-w-[100%] mr-[20px]" key={index}>
//             {slide}
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }
