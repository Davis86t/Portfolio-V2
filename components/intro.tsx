import AvatarAnimation from "./animations/avatar-animation"
import ButtonAnimation from "./animations/buttons-animation"
import DownArrowAnimation from "./animations/down-arrows-animation"
import HiAnimation from "./animations/hi-animation"
import ImAnimation from "./animations/im-animation"
import TannerAnimation from "./animations/tanner-animation"
import Typewriters from "./animations/typewriter"

export default function Intro() {
  return (
    <>
      <section
        id="home"
        className="z-0 flex h-[calc(100dvh-65px)] max-h-[900px] min-h-[500px] flex-col border-b border-b-slate-200 dark:border-b-slate-700 sm:py-16"
      >
        <div className="flex max-h-[900px] flex-grow flex-col items-center justify-center">
          <section className="container flex h-full flex-col justify-center">
            <div className="flex flex-col items-center gap-6 sm:flex-row sm:pb-6 md:pb-0">
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
        <div className="flex-end mx-auto w-full">
          <DownArrowAnimation />
        </div>
      </section>
    </>
  )
}
