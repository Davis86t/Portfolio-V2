import { motion } from "framer-motion"

const HiAnimation = () => {
  return (
    <>
      <motion.div
        className="mb-1 text-5xl font-extrabold leading-tight tracking-tighter sm:text-5xl md:text-7xl lg:text-8xl"
        style={{ display: "inline-flex" }}
        animate={{
          scale: [1, 1.5, 2, 1.5, 1],
        }}
      >
        Hi,
      </motion.div>
    </>
  )
}

export default HiAnimation
