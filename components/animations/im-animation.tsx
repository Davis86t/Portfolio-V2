import { motion } from "framer-motion"

const ImAnimation = () => {
  return (
    <>
      <motion.div
        className="mb-0 text-5xl font-extrabold leading-tight tracking-tighter sm:text-5xl md:text-7xl lg:text-8xl"
        style={{ display: "inline-flex" }}
        initial={{
          opacity: 0,
          x: 500,
          rotate: 0,
        }}
        animate={{
          opacity: 1,
          x: 0,
          transition: {
            type: "spring",
            stiffness: 120,
            damping: 50,
            delay: 0.45,
          },
        }}
      >
        I'm &nbsp;
      </motion.div>
    </>
  )
}

export default ImAnimation
