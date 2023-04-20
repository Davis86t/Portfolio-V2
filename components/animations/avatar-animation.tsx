import { motion } from "framer-motion"

import { Avatar, AvatarImage } from "@/components/ui/avatar"

const AvatarAnimation = () => {
  return (
    <>
      <motion.div
        initial={{
          y: -500,
          opacity: 0,
          rotateX: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
          rotateX: 360,
          transition: {
            duration: 5,
            type: "spring",
            stiffness: 24,
            damping: 10,
            delay: 0.5,
          },
        }}
      >
        <Avatar>
          <AvatarImage
            src="https://github.com/davis86t.png"
            alt="Tanner Davis Avatar"
          />
        </Avatar>
      </motion.div>
    </>
  )
}

export default AvatarAnimation
