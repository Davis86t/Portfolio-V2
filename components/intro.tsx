import AvatarAnimation from "./animations/avatar-animation"
import ButtonAnimation from "./animations/buttons-animation"
import DownArrowAnimation from "./animations/down-arrows-animation"
import HiAnimation from "./animations/hi-animation"
import ImAnimation from "./animations/im-animation"
import TannerAnimation from "./animations/tanner-animation"
import Typewriters from "./animations/typewriter"

export default function Intro() {
  return (
    <section className="z-0 grid h-[calc(100vh-64px)] w-[100%]">
      <div className="grid h-[calc(100vh-128px)] items-center">
        <section className="container grid">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <AvatarAnimation />
            <div className="flex max-w-[980px] flex-col items-start pb-1 md:mb-0 mb-6">
              <h1 className="flex-col text-5xl font-extrabold leading-tight tracking-tighter sm:text-5xl md:text-7xl lg:text-8xl mb-2">
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
