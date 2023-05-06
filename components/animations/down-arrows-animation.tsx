import { motion } from "framer-motion"

import { Icons } from "@/components/icons"

const DownArrowAnimation = () => {
  return (
    <>
      <motion.div
        initial={{
          y: -15,
          opacity: 1,
        }}
        animate={{
          y: 0,
          opacity: 1,

          transition: {
            type: "spring",
            stiffness: 35,
            damping: 10,
            delay: 1.5,
            repeat: Infinity,
            repeatType: "reverse",
          },
        }}
      >
        <div className="sm:flex-end mt-4 flex w-screen flex-row justify-around sm:mb-6 sm:mt-0 sm:h-[64px]">
          <h5 className=" text-3xl  leading-tight tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
            <Icons.down />
          </h5>
          <h5></h5>
          <h5 className=" text-3xl leading-tight tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
            <Icons.down />
          </h5>
        </div>
      </motion.div>
    </>
  )
}

export default DownArrowAnimation
