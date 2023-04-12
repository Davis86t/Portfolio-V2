import React from "react"
import Typewriter from "typewriter-effect"

export default function Typewriters() {
  return (
    <div>
      <h1 className="max-w-[700px] text-lg text-slate-700 dark:text-slate-400 sm:text-xl">
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString("Creator")
              .pauseFor(500)
              .deleteChars(7)
              .typeString("Developer")
              .pauseFor(500)
              .deleteChars(9)
              .typeString("Software Engineer")
              .start()
          }}
        />
      </h1>
    </div>
  )
}
