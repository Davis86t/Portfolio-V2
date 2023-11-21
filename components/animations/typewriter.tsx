import React from "react"
import Typewriter from "typewriter-effect"

export default function Typewriters() {
  return (
    <div>
      <h1 className="max-w-[700px] text-lg text-slate-700 dark:text-slate-400 sm:text-xl">
        <Typewriter
          options={{
            loop: false,
            deleteSpeed: 25,
          }}
          onInit={(typewriter) => {
            typewriter
              .pauseFor(1500)
              // .typeString("I am a ")
              // .typeString("Creator")
              // .pauseFor(250)
              // .deleteChars(7)
              // .typeString("Developer")
              // .pauseFor(250)
              // .deleteChars(9)
              // .typeString("Leader")
              // .pauseFor(500)
              // .deleteChars(6)
              .typeString("Software Developer")
              .pauseFor(1500)
              .start()
          }}
        />
      </h1>
    </div>
  )
}
