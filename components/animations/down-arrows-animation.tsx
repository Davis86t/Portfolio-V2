import { motion } from "framer-motion"

import { Icons } from "@/components/icons"

const DownArrowAnimation = () => {
  return (
    <>
      <motion.div
        initial={{
          y: -15,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,

          transition: {
            // duration: .75,
            type: "spring",
            stiffness: 35,
            damping: 10,
            // mass: 3.5,
            delay: 7.5,
            repeat: Infinity,
            repeatType: "reverse",
          },
        }}
      >
        <div className="flex flex-end h-[64px]">
          <div className="flex flex-row justify-around mb-6 w-screen">
            <h5 className=" text-3xl  leading-tight tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              <Icons.down />
            </h5>
            <h5></h5>
            <h5 className=" text-3xl  leading-tight tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              <Icons.down />
            </h5>
          </div>
        </div>
      </motion.div>
    </>
  )
}

export default DownArrowAnimation
