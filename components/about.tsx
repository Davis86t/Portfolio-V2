import AboutMeAnimation from "@/components/animations/about-animation"

export default function AboutMe() {
  return (
    <div
      id="aboutMe"
      className="z-0 grid h-[calc(100vh-64px)] pt-5 md:pt-20 w-[100%]"
    >
      <section className="container grid">
        <div className="flex flex-col items-start gap-6">
          <div className="flex max-w-[980px] flex-col items-start pb-1 md:mb-0 mb-6">
            <AboutMeAnimation />
            <p className="max-w-[700px] text-md text-slate-700 dark:text-slate-400 md:text-xl">
              This will be an about me section.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
