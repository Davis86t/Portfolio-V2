import AvatarAnimation from "./animations/avatar-animation"
import ButtonAnimation from "./animations/buttons-animation"
import DownArrowAnimation from "./animations/down-arrows-animation"
import HiAnimation from "./animations/hi-animation"
import ImAnimation from "./animations/im-animation"
import TannerAnimation from "./animations/tanner-animation"
import Typewriters from "./animations/typewriter"

export default function Intro() {
  return (
    <section id="home" className="z-0 grid h-[calc(90vh-65px)] sm:h-[calc(100vh-65px)] w-[100%]">
      <div className="grid h-[calc(90vh-130px)] sm:h-[calc(100vh-130px)] items-center">
        <section className="container grid">
          <div className="flex flex-col items-center gap-6 md:flex-row">
            <AvatarAnimation />
            <div className="mb-6 flex max-w-[980px] flex-col items-start pb-1 md:mb-0">
              <h1 className="mb-2 flex-col text-5xl font-extrabold leading-tight tracking-tighter sm:text-5xl md:text-7xl lg:text-8xl">
                <HiAnimation />
                <br />
                <ImAnimation />
                <TannerAnimation />
              </h1>
              <Typewriters />
            </div>
          </div>
          <ButtonAnimation />
        </section>
      </div>
      <DownArrowAnimation />
    </section>
  )
}
