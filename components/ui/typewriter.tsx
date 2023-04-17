import React from "react"
import Typewriter from "typewriter-effect"

export default function Typewriters() {
  return (
    <div>
      <h1 className="max-w-[700px] text-lg text-slate-700 dark:text-slate-400 sm:text-xl">
        <Typewriter
          options={{
            loop: false,
          }}
          onInit={(typewriter) => {
            typewriter
              .typeString("I am a ")
              .typeString("Creator")
              .pauseFor(500)
              .deleteChars(7)
              .typeString("Developer")
              .pauseFor(500)
              .deleteChars(9)
              .typeString("Leader")
              .pauseFor(500)
              .deleteChars(6)
              .typeString("Software Engineer.")
              .pauseFor(1500)
              .start()
          }}
        />
      </h1>
    </div>
  )
}

export function Typewriters2() {
  return (
    <div>
      <h1 className="max-w-[700px] text-lg text-slate-700 dark:text-slate-400 sm:text-xl">
        <Typewriter
          options={{
            loop: false,
          }}
          onInit={(typewriter) => {
            typewriter
              .typeString("I have experience with a variety of technologies and frameworks.")
              .start()
          }}
        />
      </h1>
    </div>
  )
}