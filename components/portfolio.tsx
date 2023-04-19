export default function Portfolio() {
  return (
    <div className="container grid gap-6 py-10 md:py-16 md:mt-8 justify-end border-t border-t-slate-200 dark:border-t-slate-700">
      <div className="flex flex-col items-center gap-6">
        <h2 className="text-3xl font-extrabold leading-tight tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
          My Portfolio
        </h2>
        <p className="max-w-[700px] text-lg text-slate-700 dark:text-slate-400 sm:text-xl">
          Here are some of the projects I have worked on. I am always looking
          for new opportunities to learn and grow as a developer. If you have
          any questions or would like to collaborate on a project, please feel
          free to reach out.
        </p>
      </div>
    </div>
  )
}
