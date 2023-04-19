import { motion } from "framer-motion"

import { Avatar, AvatarImage } from "@/components/ui/avatar"

const AvatarAnimation = () => {
  return (
    <>
      <motion.div
        initial={{
          y: -500,
          opacity: 0,
          rotateY: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
          rotateX: [0, 90, 180, 270, 360],
          transition: {
            duration: 3,
            type: "spring",
            stiffness: 50,
            damping: 10,
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
