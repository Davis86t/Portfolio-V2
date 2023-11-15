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
        <div className="mx-auto flex justify-around">
          <h5>
            <Icons.down />
          </h5>
          <h5></h5>
          <h5>
            <Icons.down />
          </h5>
        </div>
      </motion.div>
    </>
  )
}

export default DownArrowAnimation
